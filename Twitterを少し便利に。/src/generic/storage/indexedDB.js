import {_cloneInto} from '../util/cloneInto.js';

function openIndexedDB(dbName, storeName){
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(dbName);

		request.onerror = (event) => {
			reject("Database error: " + event.target.errorCode);
		};

		request.onsuccess = (event) => {
			let db = event.target.result;
			if(db.objectStoreNames.contains(storeName)){
				resolve(db);
			}else{
				db.close();
				const newVersion = db.version + 1;
				const versionRequest = indexedDB.open(dbName, newVersion);
				versionRequest.onupgradeneeded = (event) => {
					db = event.target.result;
					db.createObjectStore(storeName, { keyPath: 'id' });
				};
				versionRequest.onsuccess = (event) => {
					resolve(event.target.result);
				};
				versionRequest.onerror = (event) => {
					reject("Database error: " + event.target.errorCode);
				};
			}
		};

		request.onupgradeneeded = (event) => {
			const db = event.target.result;
			db.createObjectStore(storeName, { keyPath: 'id' });
		};
	});
}

/**
 * IndexedDBの指定されたオブジェクトストアにデータを保存する。
 * オブジェクトストアが存在しない場合は、データベースのバージョンを更新して作成する。
 *
 * @template T
 * @param {string} dbName データベース名。
 * @param {string} storeName 保存先のオブジェクトストア名。
 * @param {T} data 保存するデータ。
 * @param {IDBValidKey} [id=522] レコードのキーとして使用するID。
 * @returns {Promise<string>} 保存に成功した場合は成功メッセージで解決し、失敗した場合はエラーで拒否されるPromise。
 */
export async function saveToIndexedDB(dbName, storeName, data, id = 522){
	const db = await openIndexedDB(dbName, storeName);
	try{
		return await new Promise((resolve, reject) => {
			const transaction = db.transaction(storeName, 'readwrite');
			const store = transaction.objectStore(storeName);
			store.put({ id: id, data: data });

			transaction.oncomplete = () => {
				resolve("Data saved successfully.");
			};

			transaction.onerror = () => {
				reject("Data save error: " + transaction.error?.message);
			};

			transaction.onabort = () => {
				reject("Data save error: " + transaction.error?.message);
			};
		});
	}finally{
		db.close();
	}
}

/**
 * IndexedDBの指定されたオブジェクトストアから、IDに対応するデータを取得する。
 * Firefox系ブラウザとの互換性を保つため、取得したデータはクローンして返す。
 *
 * @param {string} dbName データベース名。
 * @param {string} storeName 取得元のオブジェクトストア名。
 * @param {IDBValidKey} [id=522] 取得するレコードのID。
 * @returns {Promise<any|null>} レコードが存在する場合は保存されているデータ、存在しない場合はnullで解決し、取得に失敗した場合はエラーで拒否されるPromise。
 */
export async function getFromIndexedDB(dbName, storeName, id = 522){
	const db = await openIndexedDB(dbName, storeName);
	try{
		return await new Promise((resolve, reject) => {
			const transaction = db.transaction(storeName, 'readonly');
			const store = transaction.objectStore(storeName);
			const getRequest = store.get(id);

			getRequest.onsuccess = (event) => {
				try{
					if(event.target.result){
						// こうしないとfirefox系ブラウザで
						// Error: Not allowed to define cross-origin object as property on [Object] or [Array] XrayWrapper
						// というエラーが出ることがあるので、構造化クローンを使ってコピーする
						// でかいオブジェクトだと効率が悪いのでなにかいい方法があれば教えてください
						resolve(_cloneInto(event.target.result.data));
					}else{
						resolve(null);
					}
				}catch(error){
					reject(error);
				}
			};

			getRequest.onerror = (event) => {
				reject("Data fetch error: " + event.target.errorCode);
			};
		});
	}finally{
		db.close();
	}
}
