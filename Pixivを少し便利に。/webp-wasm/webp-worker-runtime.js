/* This file is appended after the Emscripten-generated webp_anim.js. */

let wasmModule = null;
let initialized = false;
let encodeQueue = Promise.resolve();

async function initializeWasm(wasmBinary){
	const moduleOptions = {
		noInitialRun: true
	};

	/*
	 * 分離Wasm版の場合だけ指定する。
	 *
	 * SINGLE_FILE=1ではWasmがglue JS内に埋め込まれているため、
	 * wasmBinaryプロパティ自体を渡さない。
	 */
	if(wasmBinary instanceof ArrayBuffer){
		moduleOptions.wasmBinary = wasmBinary;
	}

	return createWebPAnimModule(moduleOptions);
}

function getError(){
	if(!wasmModule){
		return "Wasm module is not initialized";
	}

	const pointer = wasmModule._webp_anim_last_error();

	return pointer
		? wasmModule.UTF8ToString(pointer)
		: "Unknown encoder error";
}

function assertSuccess(result){
	if(!result){
		throw new Error(getError());
	}
}

function normalizeOptions(options = {}){
	const loop = Number(options.loop ?? 0);
	const quality = Number(options.quality ?? 90);
	const method = Number(options.method ?? 4);
	const backgroundARGB = Number(
		options.backgroundARGB ?? 0x00000000
	);

	if(!Number.isInteger(loop) || loop < 0){
		throw new TypeError(
			"options.loop must be a non-negative integer"
		);
	}

	if(
		!Number.isFinite(quality) ||
		quality < 0 ||
		quality > 100
	){
		throw new TypeError(
			"options.quality must be between 0 and 100"
		);
	}

	if(
		!Number.isInteger(method) ||
		method < 0 ||
		method > 6
	){
		throw new TypeError(
			"options.method must be an integer between 0 and 6"
		);
	}

	if(
		!Number.isFinite(backgroundARGB) ||
		backgroundARGB < 0 ||
		backgroundARGB > 0xffffffff
	){
		throw new TypeError(
			"options.backgroundARGB must be a 32-bit unsigned integer"
		);
	}

	return {
		loop,
		quality,
		lossless: Boolean(options.lossless ?? false),
		method,
		minimizeSize: Boolean(options.minimizeSize ?? true),
		backgroundARGB: backgroundARGB >>> 0
	};
}

async function decodeFrame(
	frame,
	expectedWidth,
	expectedHeight
){
	if(!(frame.buffer instanceof ArrayBuffer)){
		throw new TypeError(
			"frame.buffer must be an ArrayBuffer"
		);
	}

	const mimeType = frame.mimeType || "image/png";

	const blob = new Blob([
		frame.buffer
	], {
		type: mimeType
	});

	let bitmap;

	try{
		bitmap = await createImageBitmap(blob, {
			imageOrientation: "from-image",
			premultiplyAlpha: "none",
			colorSpaceConversion: "default"
		});
	}catch(error){
		throw new Error(
			`Could not decode frame${frame.file ? ` ${frame.file}` : ""}: ${
				error instanceof Error
					? error.message
					: String(error)
			}`
		);
	}

	try{
		if(
			expectedWidth !== null &&
			(
				bitmap.width !== expectedWidth ||
				bitmap.height !== expectedHeight
			)
		){
			throw new Error(
				`Frame size mismatch: expected ` +
				`${expectedWidth}x${expectedHeight}, got ` +
				`${bitmap.width}x${bitmap.height}` +
				`${frame.file ? ` (${frame.file})` : ""}`
			);
		}

		const canvas = new OffscreenCanvas(
			bitmap.width,
			bitmap.height
		);

		const context = canvas.getContext("2d", {
			alpha: true,
			willReadFrequently: true
		});

		if(!context){
			throw new Error(
				"Could not create a 2D OffscreenCanvas context"
			);
		}

		context.clearRect(
			0,
			0,
			bitmap.width,
			bitmap.height
		);

		context.drawImage(bitmap, 0, 0);

		const imageData = context.getImageData(
			0,
			0,
			bitmap.width,
			bitmap.height
		);

		return {
			width: bitmap.width,
			height: bitmap.height,
			imageData
		};
	}finally{
		bitmap.close();
	}
}

async function encodeAnimation(frames, rawOptions){
	if(!wasmModule){
		throw new Error(
			"Wasm module is not initialized"
		);
	}

	if(
		!Array.isArray(frames) ||
		frames.length === 0
	){
		throw new Error(
			"At least one frame is required"
		);
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

			if(
				!Number.isInteger(delay) ||
				delay <= 0
			){
				throw new Error(
					`frames[${index}].delayMs must be a positive integer`
				);
			}

			if(timestamp > 0x7fffffff - delay){
				throw new Error(
					"The total animation duration exceeds INT32_MAX milliseconds"
				);
			}

			const decoded = await decodeFrame(
				frame,
				width,
				height
			);

			if(index === 0){
				width = decoded.width;
				height = decoded.height;

				assertSuccess(
					wasmModule._webp_anim_begin(
						width,
						height,
						options.loop,
						options.quality,
						options.lossless ? 1 : 0,
						options.method,
						options.minimizeSize ? 1 : 0,
						options.backgroundARGB
					)
				);
			}

			const rgba = decoded.imageData.data;
			const pointer = wasmModule._malloc(
				rgba.byteLength
			);

			if(!pointer){
				throw new Error(
					`malloc failed for frame ${index}`
				);
			}

			try{
				wasmModule.HEAPU8.set(
					rgba,
					pointer
				);

				assertSuccess(
					wasmModule._webp_anim_add_rgba(
						pointer,
						width,
						height,
						width * 4,
						timestamp
					)
				);
			}finally{
				wasmModule._free(pointer);
			}

			timestamp += delay;
		}

		assertSuccess(
			wasmModule._webp_anim_finish(timestamp)
		);

		const resultPointer =
			wasmModule._webp_anim_result_ptr();

		const resultSize =
			wasmModule._webp_anim_result_size();

		if(!resultPointer || !resultSize){
			throw new Error(
				"Encoder returned an empty result"
			);
		}

		/*
		 * Wasmメモリはresetで無効になるため、
		 * 必ず独立したArrayBufferへコピーする。
		 */
		const resultBuffer = wasmModule.HEAPU8.slice(
			resultPointer,
			resultPointer + resultSize
		).buffer;

		return {
			buffer: resultBuffer,
			width,
			height,
			durationMs: timestamp,
			encoderVersion:
				wasmModule._webp_anim_encoder_version()
		};
	}finally{
		wasmModule._webp_anim_reset();
	}
}

function serializeError(error){
	return {
		message:
			error instanceof Error
				? error.message
				: String(error),
		stack:
			error instanceof Error
				? error.stack
				: null
	};
}

async function handleInit(message){
	if(initialized){
		self.postMessage({
			type: "ready",
			encoderVersion:
				wasmModule?._webp_anim_encoder_version?.()
		});

		return;
	}

	/*
	 * SINGLE_FILE版:
	 *	message.wasmBinaryはundefined
	 *
	 * 分離Wasm版:
	 *	message.wasmBinaryはArrayBuffer
	 */
	wasmModule = await initializeWasm(
		message.wasmBinary
	);

	if(
		!wasmModule ||
		typeof wasmModule._webp_anim_begin !== "function"
	){
		throw new Error(
			"The WebP Wasm module does not contain the expected exports"
		);
	}

	initialized = true;

	self.postMessage({
		type: "ready",
		encoderVersion:
			wasmModule._webp_anim_encoder_version()
	});
}

function enqueueEncode(message){
	/*
	 * 前回のジョブが失敗しても、キュー全体を
	 * reject状態のままにしない。
	 */
	encodeQueue = encodeQueue
		.catch((error) => {
			console.error(
				"Previous WebP encode queue error:",
				error
			);
		})
		.then(async () => {
			try{
				const result = await encodeAnimation(
					message.frames,
					message.options
				);

				self.postMessage({
					type: "result",
					requestId: message.requestId,
					...result
				}, [
					result.buffer
				]);
			}catch(error){
				const serialized = serializeError(error);

				self.postMessage({
					type: "error",
					requestId: message.requestId,
					...serialized
				});
			}
		});
}

self.onmessage = async (event) => {
	const message = event.data;

	if(
		!message ||
		typeof message !== "object"
	){
		self.postMessage({
			type: "error",
			message: "Invalid worker message"
		});

		return;
	}

	try{
		switch(message.type){
			case "init":{
				await handleInit(message);
				break;
			}

			case "encode":{
				if(!initialized){
					throw new Error(
						"Worker has not been initialized"
					);
				}

				if(
					!Number.isInteger(message.requestId)
				){
					throw new Error(
						"encode message requires an integer requestId"
					);
				}

				enqueueEncode(message);
				break;
			}

			case "destroy":{
				if(wasmModule){
					wasmModule._webp_anim_reset();
				}

				wasmModule = null;
				initialized = false;
				self.close();
				break;
			}

			default:{
				throw new Error(
					`Unknown message type: ${message.type}`
				);
			}
		}
	}catch(error){
		const serialized = serializeError(error);

		self.postMessage({
			type:
				message.type === "init"
					? "init-error"
					: "error",
			requestId: message.requestId,
			...serialized
		});
	}
};
