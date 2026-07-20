class AnimatedWebPEncoder {
	#worker = null;
	#nextRequestId = 1;
	#pending = new Map();
	#readyPromise = null;
	#workerUrl = null;
	#destroyed = false;

	constructor({
		glueSource,
		workerRuntimeSource,
		wasmBinary = null,
		readyTimeoutMs = 30000
	} = {}){
		if(typeof glueSource !== "string"){
			throw new TypeError("glueSource must be a string");
		}

		if(typeof workerRuntimeSource !== "string"){
			throw new TypeError("workerRuntimeSource must be a string");
		}

		if(
			wasmBinary !== null &&
			!(wasmBinary instanceof ArrayBuffer)
		){
			throw new TypeError(
				"wasmBinary must be an ArrayBuffer or null"
			);
		}

		if(
			!Number.isFinite(readyTimeoutMs) ||
			readyTimeoutMs <= 0
		){
			throw new TypeError(
				"readyTimeoutMs must be a positive number"
			);
		}

		const source = [
			glueSource,
			";",
			workerRuntimeSource
		].join("\n");

		this.#workerUrl = URL.createObjectURL(
			new Blob([source], {
				type: "text/javascript"
			})
		);

		this.#worker = new Worker(this.#workerUrl, {
			type: "module"
		});

		this.#worker.onmessage = (event) => {
			this.#handleMessage(event.data);
		};

		this.#worker.onerror = (event) => {
			console.error("WebP Worker error:", {
				message: event.message,
				filename: event.filename,
				lineno: event.lineno,
				colno: event.colno,
				error: event.error
			});

			const error = event.error instanceof Error
				? event.error
				: new Error(
					event.message || "WebP worker failed"
				);

			this.#rejectAll(error);
		};

		this.#worker.onmessageerror = (event) => {
			console.error(
				"WebP Worker message error:",
				event
			);

			this.#rejectAll(
				new Error(
					"Could not deserialize a WebP worker message"
				)
			);
		};

		this.#readyPromise = new Promise((resolve, reject) => {
			const timeoutId = setTimeout(() => {
				this.#pending.delete("ready");

				reject(
					new Error(
						`WebP worker initialization timed out after ${readyTimeoutMs}ms`
					)
				);
			}, readyTimeoutMs);

			this.#pending.set("ready", {
				resolve: (value) => {
					clearTimeout(timeoutId);
					resolve(value);
				},
				reject: (error) => {
					clearTimeout(timeoutId);
					reject(error);
				}
			});
		});

		const initMessage = {
			type: "init"
		};

		/*
		 * 分離Wasmの場合だけwasmBinaryを送信する。
		 *
		 * SINGLE_FILE=1の場合、WasmはglueSource内に
		 * 埋め込まれているため送信しない。
		 */
		if(wasmBinary instanceof ArrayBuffer){
			initMessage.wasmBinary = wasmBinary;

			this.#worker.postMessage(
				initMessage,
				[wasmBinary]
			);
		}else{
			this.#worker.postMessage(initMessage);
		}
	}

	#handleMessage(message){
		console.log("WebP worker message:", message);

		if(
			!message ||
			typeof message !== "object"
		){
			console.warn(
				"Received an invalid WebP worker message:",
				message
			);
			return;
		}

		if(message.type === "ready"){
			const pending = this.#pending.get("ready");

			this.#pending.delete("ready");
			pending?.resolve(message);
			return;
		}

		if(message.type === "init-error"){
			const pending = this.#pending.get("ready");

			this.#pending.delete("ready");

			const error = new Error(
				message.message ||
				"WebP worker initialization failed"
			);

			if(message.stack){
				error.stack = message.stack;
			}

			pending?.reject(error);
			return;
		}

		/*
		 * 古いWorkerランタイムが初期化失敗を
		 * type:"error", requestId:undefinedで返す場合にも対応。
		 */
		if(
			message.type === "error" &&
			(
				message.requestId === undefined ||
				message.requestId === null
			)
		){
			const pending = this.#pending.get("ready");

			this.#pending.delete("ready");

			const error = new Error(
				message.message ||
				"WebP worker initialization failed"
			);

			if(message.stack){
				error.stack = message.stack;
			}

			pending?.reject(error);
			return;
		}

		const pending = this.#pending.get(
			message.requestId
		);

		if(!pending){
			console.warn(
				"Received an unmatched WebP worker message:",
				message
			);
			return;
		}

		this.#pending.delete(message.requestId);

		if(message.type === "error"){
			const error = new Error(
				message.message ||
				"WebP encoding failed"
			);

			if(message.stack){
				error.stack = message.stack;
			}

			pending.reject(error);
			return;
		}

		if(message.type !== "result"){
			pending.reject(
				new Error(
					`Unexpected WebP worker message type: ${message.type}`
				)
			);
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
		if(this.#destroyed){
			throw new Error(
				"Encoder has already been destroyed"
			);
		}

		return this.#readyPromise;
	}

	async encode(frames, options = {}){
		if(this.#destroyed){
			throw new Error(
				"Encoder has already been destroyed"
			);
		}

		await this.ready();

		if(
			!Array.isArray(frames) ||
			frames.length === 0
		){
			throw new TypeError(
				"frames must be a non-empty array"
			);
		}

		const normalizedFrames = frames.map(
			(frame, index) => {
				let buffer = null;

				if(frame.buffer instanceof ArrayBuffer){
					buffer = frame.buffer;
				}else if(frame.blob instanceof Uint8Array){
					/*
					 * Uint8Arrayが大きなArrayBufferの一部分を
					 * 指している場合にも対応する。
					 */
					buffer = frame.blob.buffer.slice(
						frame.blob.byteOffset,
						frame.blob.byteOffset +
							frame.blob.byteLength
					);
				}else if(
					frame.blob instanceof ArrayBuffer
				){
					buffer = frame.blob;
				}else{
					throw new TypeError(
						`frames[${index}] must have buffer:ArrayBuffer, blob:ArrayBuffer, or blob:Uint8Array`
					);
				}

				const delayMs =
					frame.delayMs ??
					frame.delay;

				if(
					!Number.isFinite(delayMs) ||
					delayMs <= 0
				){
					throw new TypeError(
						`frames[${index}].delayMs or delay must be a positive number`
					);
				}

				return {
					file: frame.file || null,
					buffer,
					delayMs,
					mimeType:
						frame.mimeType ||
						"image/png"
				};
			}
		);

		const requestId = this.#nextRequestId++;

		const promise = new Promise((resolve, reject) => {
			this.#pending.set(requestId, {
				resolve,
				reject
			});
		});

		/*
		 * postMessage後、これらのArrayBufferは
		 * 呼び出し元ではdetached状態になる。
		 */
		const transfer = normalizedFrames.map(
			(frame) => frame.buffer
		);

		try{
			this.#worker.postMessage({
				type: "encode",
				requestId,
				frames: normalizedFrames,
				options
			}, transfer);
		}catch(error){
			this.#pending.delete(requestId);
			throw error;
		}

		const result = await promise;

		if(!(result.buffer instanceof ArrayBuffer)){
			throw new Error(
				"Worker returned an invalid WebP buffer"
			);
		}

		return {
			blob: new Blob([result.buffer], {
				type: "image/webp"
			}),
			buffer: result.buffer,
			width: result.width,
			height: result.height,
			durationMs: result.durationMs,
			encoderVersion: result.encoderVersion
		};
	}

	destroy(){
		if(this.#destroyed){
			return;
		}

		this.#destroyed = true;

		this.#rejectAll(
			new Error("Encoder was destroyed")
		);

		if(this.#worker){
			this.#worker.terminate();
			this.#worker = null;
		}

		if(this.#workerUrl){
			URL.revokeObjectURL(this.#workerUrl);
			this.#workerUrl = null;
		}
	}
}
