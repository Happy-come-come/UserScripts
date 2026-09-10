const pendingRequests = new Map();

/**
 * 同じキーの非同期処理が実行中の場合、そのPromiseを再利用する。
 *
 * @template T
 * @param {string} key 処理を識別するキー。
 * @param {() => Promise<T>} loader 実際の非同期処理。
 * @returns {Promise<T>} 実行中または新しく開始した処理のPromise。
 */
export function runWithPendingRequest(key, loader){
	if(pendingRequests.has(key))return pendingRequests.get(key);

	const promise = Promise.resolve()
		.then(loader)
		.finally(() => {
			pendingRequests.delete(key);
		});

	pendingRequests.set(key, promise);
	return promise;
}

