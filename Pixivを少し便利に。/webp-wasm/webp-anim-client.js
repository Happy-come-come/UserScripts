class AnimatedWebPEncoder {
	#worker = null;
	#nextRequestId = 1;
	#pending = new Map();
	#readyPromise = null;
	#workerUrl = null;

	constructor({glueSource, workerRuntimeSource, wasmBinary}){
		if(typeof glueSource !== "string"){
			throw new TypeError("glueSource must be a string");
		}

		if(typeof workerRuntimeSource !== "string"){
			throw new TypeError("workerRuntimeSource must be a string");
		}

		if(!(wasmBinary instanceof ArrayBuffer)){
			throw new TypeError("wasmBinary must be an ArrayBuffer");
		}

		const source = `${glueSource}\n;${workerRuntimeSource}`;
		this.#workerUrl = URL.createObjectURL(new Blob([source], {
			type: "text/javascript"
		}));
		this.#worker = new Worker(this.#workerUrl, {
			type: "module"
		});

		this.#worker.onmessage = (event) => {
			this.#handleMessage(event.data);
		};

		this.#worker.onerror = (event) => {
			const error = new Error(event.message || "WebP worker failed");
			this.#rejectAll(error);
		};

		this.#readyPromise = new Promise((resolve, reject) => {
			this.#pending.set("ready", {
				resolve,
				reject
			});
		});

		this.#worker.postMessage({
			type: "init",
			wasmBinary
		}, [wasmBinary]);
	}

	#handleMessage(message){
		if(message.type === "ready"){
			const pending = this.#pending.get("ready");
			this.#pending.delete("ready");
			pending?.resolve(message);
			return;
		}

		const pending = this.#pending.get(message.requestId);
		if(!pending){
			return;
		}

		this.#pending.delete(message.requestId);

		if(message.type === "error"){
			const error = new Error(message.message);
			if(message.stack){
				error.stack = message.stack;
			}
			pending.reject(error);
			return;
		}

		pending.resolve(message);
	}

	#rejectAll(error){
		for(const pending of this.#pending.values()){
			pending.reject(error);
		}
		this.#pending.clear();
	}

	async ready(){
		return this.#readyPromise;
	}

	async encode(frames, options = {}){
		await this.ready();

		if(!Array.isArray(frames) || frames.length === 0){
			throw new TypeError("frames must be a non-empty array");
		}

		const normalizedFrames = frames.map((frame, index) => {
			let buffer = null;
			if(frame.buffer instanceof ArrayBuffer){
				buffer = frame.buffer;
			}else if(frame.blob instanceof Uint8Array){
				buffer = frame.blob.buffer.slice(
					frame.blob.byteOffset,
					frame.blob.byteOffset + frame.blob.byteLength
				);
			}else if(frame.blob instanceof ArrayBuffer){
				buffer = frame.blob;
			}else{
				throw new TypeError(
					`frames[${index}] must have buffer:ArrayBuffer or blob:Uint8Array`
				);
			}
			const delayMs = frame.delayMs ?? frame.delay;
			if(typeof delayMs !== "number"){
				throw new TypeError(
					`frames[${index}].delayMs (or delay) must be a number`
				);
			}
			return {
				buffer,
				delayMs,
				mimeType: frame.mimeType || "image/png"
			};
		});

		const requestId = this.#nextRequestId++;
		const transfer = normalizedFrames.map((frame) => frame.buffer);

		const promise = new Promise((resolve, reject) => {
			this.#pending.set(requestId, {
				resolve,
				reject
			});
		});

		this.#worker.postMessage({
			type: "encode",
			requestId,
			frames: normalizedFrames,
			options
		}, transfer);

		const result = await promise;
		return {
			blob: new Blob([result.buffer], {
				type: "image/webp"
			}),
			width: result.width,
			height: result.height,
			durationMs: result.durationMs,
			encoderVersion: result.encoderVersion
		};
	}

	destroy(){
		this.#rejectAll(new Error("Encoder was destroyed"));
		this.#worker?.terminate();
		this.#worker = null;

		if(this.#workerUrl){
			URL.revokeObjectURL(this.#workerUrl);
			this.#workerUrl = null;
		}
	}
}
