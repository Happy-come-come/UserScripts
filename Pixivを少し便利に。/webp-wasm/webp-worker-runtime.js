/* This file is appended after the Emscripten-generated webp_anim.js. */
let wasmModule = null;
let initialized = false;
let encodeQueue = Promise.resolve();

function getError(){
	if(!wasmModule){
		return "Wasm module is not initialized";
	}

	const pointer = wasmModule._webp_anim_last_error();
	return pointer ? wasmModule.UTF8ToString(pointer) : "Unknown encoder error";
}

function assertSuccess(result){
	if(!result){
		throw new Error(getError());
	}
}

function normalizeOptions(options = {}){
	return {
		loop: options.loop ?? 0,
		quality: options.quality ?? 90,
		lossless: options.lossless ?? false,
		method: options.method ?? 4,
		minimizeSize: options.minimizeSize ?? true,
		backgroundARGB: options.backgroundARGB ?? 0x00000000
	};
}

async function decodeFrame(frame, expectedWidth, expectedHeight){
	const mimeType = frame.mimeType || "image/png";
	const blob = new Blob([frame.buffer], {
		type: mimeType
	});
	const bitmap = await createImageBitmap(blob);

	try{
		if(
			expectedWidth !== null &&
			(bitmap.width !== expectedWidth || bitmap.height !== expectedHeight)
		){
			throw new Error(
				`Frame size mismatch: expected ${expectedWidth}x${expectedHeight}, ` +
				`got ${bitmap.width}x${bitmap.height}`
			);
		}

		const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
		const context = canvas.getContext("2d", {
			alpha: true,
			willReadFrequently: true
		});

		if(!context){
			throw new Error("Could not create a 2D OffscreenCanvas context");
		}

		context.clearRect(0, 0, bitmap.width, bitmap.height);
		context.drawImage(bitmap, 0, 0);

		return {
			width: bitmap.width,
			height: bitmap.height,
			imageData: context.getImageData(0, 0, bitmap.width, bitmap.height)
		};
	}finally{
		bitmap.close();
	}
}

async function encodeAnimation(frames, rawOptions){
	if(!Array.isArray(frames) || frames.length === 0){
		throw new Error("At least one frame is required");
	}

	const options = normalizeOptions(rawOptions);
	let width = null;
	let height = null;
	let timestamp = 0;

	wasmModule._webp_anim_reset();

	try{
		for(let index = 0; index < frames.length; index++){
			const frame = frames[index];
			const delay = Number(frame.delayMs);

			if(!Number.isInteger(delay) || delay <= 0){
				throw new Error(`frames[${index}].delayMs must be a positive integer`);
			}

			if(timestamp > 0x7fffffff - delay){
				throw new Error("The total animation duration exceeds INT32_MAX milliseconds");
			}

			const decoded = await decodeFrame(frame, width, height);

			if(index === 0){
				width = decoded.width;
				height = decoded.height;

				assertSuccess(wasmModule._webp_anim_begin(
					width,
					height,
					options.loop,
					options.quality,
					options.lossless ? 1 : 0,
					options.method,
					options.minimizeSize ? 1 : 0,
					options.backgroundARGB >>> 0
				));
			}

			const rgba = decoded.imageData.data;
			const pointer = wasmModule._malloc(rgba.byteLength);

			if(!pointer){
				throw new Error(`malloc failed for frame ${index}`);
			}

			try{
				wasmModule.HEAPU8.set(rgba, pointer);
				assertSuccess(wasmModule._webp_anim_add_rgba(
					pointer,
					width,
					height,
					width * 4,
					timestamp
				));
			}finally{
				wasmModule._free(pointer);
			}

			timestamp += delay;
		}

		assertSuccess(wasmModule._webp_anim_finish(timestamp));

		const resultPointer = wasmModule._webp_anim_result_ptr();
		const resultSize = wasmModule._webp_anim_result_size();

		if(!resultPointer || !resultSize){
			throw new Error("Encoder returned an empty result");
		}

		const result = wasmModule.HEAPU8.slice(
			resultPointer,
			resultPointer + resultSize
		).buffer;

		return {
			buffer: result,
			width,
			height,
			durationMs: timestamp,
			encoderVersion: wasmModule._webp_anim_encoder_version()
		};
	}finally{
		wasmModule._webp_anim_reset();
	}
}

self.onmessage = async (event) => {
	const message = event.data;

	try{
		if(message.type === "init"){
			if(initialized){
				self.postMessage({
					type: "ready"
				});
				return;
			}

			wasmModule = await createWebPAnimModule({
				wasmBinary: message.wasmBinary,
				noInitialRun: true
			});
			initialized = true;

			self.postMessage({
				type: "ready",
				encoderVersion: wasmModule._webp_anim_encoder_version()
			});
			return;
		}

		if(message.type === "encode"){
			if(!initialized){
				throw new Error("Worker has not been initialized");
			}

			encodeQueue = encodeQueue.then(async () => {
				try{
					const result = await encodeAnimation(message.frames, message.options);
					self.postMessage({
						type: "result",
						requestId: message.requestId,
						...result
					}, [result.buffer]);
				}catch(error){
					self.postMessage({
						type: "error",
						requestId: message.requestId,
						message: error instanceof Error ? error.message : String(error),
						stack: error instanceof Error ? error.stack : null
					});
				}
			});
			return;
		}

		throw new Error(`Unknown message type: ${message.type}`);
	}catch(error){
		self.postMessage({
			type: "error",
			requestId: message.requestId,
			message: error instanceof Error ? error.message : String(error),
			stack: error instanceof Error ? error.stack : null
		});
	}
};
