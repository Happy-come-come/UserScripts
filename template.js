// ==UserScript==
// @name			script name
// @name:ja			スクリプト名
// @name:en			script name
// @description			description here
// @description:ja			ここに説明
// @description:en			description here
// @namespace		https://greasyfork.org/ja/users/あなたのid
// @version			<$DATE$>
// @author			You
// @match			<$URL$>
// @icon			<$ICON$>
// @license			MIT
// @grant			GM_xmlhttpRequest
// ==/UserScript==

(async function(){
	'use strict';
	let currentUrl = document.location.href;
	let updating = false;
	const debugging = true;
	const debug = debugging ? console.log : ()=>{};
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;
	async function main(force = false){
		//code
	}
	/*
		関数一覧
		update:
			main関数を実行する
			更新中は実行されないようにする
			600ms後に更新中フラグを解除する
			更新中に何度も実行されるのを防ぐため

		locationChange:
			ページ遷移を検知してupdate関数を実行する
			必要なら別の関数も実行するようにすると良い
			main関数にtrueを渡すことで強制的に実行することも可能

		getCookie:
			cookieを取得する
			例: const data = getCookie('cookieName');

		sleep:
			指定時間待つ
			指定はミリ秒
			例: await sleep(1000);// 1秒待つ

		decodeHtml:
			HTMLエンティティをテキストにデコードする
			<a>hogehoge</a> -> hogehoge
			のように変換される
			例: const text = decodeHtml('<a>hogehoge</a>');

		copyToClipboard:
			引数をクリップボードにコピーする
			例: copyToClipboard('hogehoge')

		getFileSize:
			url先のファイルサイズをHEAD通信で取得する
			対象サーバがサポートしていない場合はnullを返す
			例: const fileSize = await getFileSize('https://example.com/file.zip')

		simulateKey:
			指定したキーコードを指定した要素に送信する
			例: simulateKey(39, 'keydown', document.body);
			これで右矢印キーが押されたことになる
			キーコードはこちらを参照: https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/keyCode

		openIndexedDB:
			IndexedDBを開く
			存在しない場合は新規作成する
			おそらくこれを自身で使うことはない
			下2つのための関数

		saveToIndexedDB:
			IndexedDBにデータを保存する
			例: await saveToIndexedDB('dbName', 'storeName', {data: 'data'});

		getFromIndexedDB:
			IndexedDBからデータを取得する
			例: const data = await getFromIndexedDB('dbName', 'storeName');

		getValueFromObjectByPath:
			オブジェクトから指定したパスの値を取得する
			例: getValueFromObjectByPath({a: {b: {c: 1}}}, 'a.b.c') -> 1
			意味なさそうに見えるが、{a: [{b: 1}, {b: 2}]}のようなオブジェクトから
			getValueFromObjectByPath({a: [{b: 1}, {b: 2}]}, 'a.b') -> [1, 2]
			というようなことができる

		waitElementAndGet:
			指定した条件を満たす要素を取得する
			条件を満たすまでリトライする
			条件を満たさないままリトライ回数を超えた場合はエラーを返す
			ページの読み込みタイミングがわからない場合に使う
			探すnodeや探すための関数を指定できる
			デフォルトはquerySelector
			例: const element = await waitElementAndGet({query: '.class', searchFunction: 'querySelector', interval: 100, retry: 25, searchPlace: document, faildToThrow: false});
			デフォルトではquerySelectorで25回リトライしている
			つまり0.1秒間隔で2.5秒間要素を探し続ける

		request:
			HTTPリクエストを送信する
			引数はオブジェクトで指定する
			例: await request({url: 'https://example.com', method: 'GET', respType: 'json'})
			デフォルトはGETリクエストでjsonを返す
			onlyResponseをfalseにするとレスポンス全体を返す
			GM_xmlhttpRequestを使っているのでGM_xmlhttpRequestの仕様に従う
			corsなどを無視できるので便利

		multiPartDownload:
			ファイルを複数のチャンクに分割してダウンロードする
			引数はurlとチャンク数
			チャンク数を指定すると複数のチャンクでダウンロードする
			ファイルサイズが取得できない場合は単一のリクエストでダウンロードする
			ファイルサイズが取得できる場合はチャンク数に応じてダウンロードする
			サーバの速度が遅い場合に有効
			例: const blob = await multiPartDownload('https://example.com/file.zip', 6);
			この場合6並列でダウンロードする。デフォルトは6

		debuggingをtrueにするとdebug関数でconsole.logが使えるのでデバッグ時のみコンソールに出力したい場合に使う
	*/

	function update(){
		if(updating)return;
		updating = true;
		main();
		setTimeout(() => {updating = false;}, 600);
	}

	function locationChange(targetPlace = document){
		const observer = new MutationObserver(mutations => {
			if(currentUrl !== document.location.href){
				currentUrl = document.location.href;
				try{
					update(true);
				}catch(error){console.error(error)}
			}
		});
		const target = targetPlace;
		const config = {childList: true,subtree: true};
		observer.observe(target, config);
	}

	function getCookie(name){
		let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if(arr = document.cookie.match(reg)){
			return decodeURIComponent(arr[2]);
		}else{
			return null;
		}
	}

	function sleep(time){
		return new Promise((resolve)=>{
			setTimeout(()=>{return resolve(time)}, time);
		});
	}

	function decodeHtml(html){
		const txt = document.createElement("div");
		txt.innerHTML = html;
		return txt.textContent;
	}

	function copyToClipboard(text){
		navigator.clipboard.writeText(text).then(function(){
			debug('クリップボードにコピーしました！');
		}).catch(function(err){
			console.error('コピーに失敗しました:', err);
		});
	}

	async function getFileSize(url){
		const response = await request({url: url, method: 'HEAD'});
		const fileSizeTmp = response.responseHeaders.match(/content-length:\s*(\d+)/i);
		const fileSize = fileSizeTmp ? parseInt(fileSizeTmp[1], 10) : null;
		return fileSize;
	}

	function simulateKey(keyCode, type, element) {
		const event = new KeyboardEvent(type, {
			key: keyCode,
			keyCode: keyCode,
			which: keyCode,
			bubbles: true
		});
		element.dispatchEvent(event);
	}

	function readFile(event, readAs = 'text'){
		const file = event.target.files[0];
		if(file){
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onload = async function(e){
					try{
						if(e.target.result === null){
							console.error({error: 'Failed to read file.', target: e.target});
							return reject('Failed to read file.');
						}
						return resolve(e.target.result);
					}catch(error){
						console.error({error: error, target: e.target});
						return reject(error);
					}
				};
				reader.onerror = function(e) {
					console.error({error: 'Error reading file.', target: e.target});
					return reject(e.target.error);
				};
				switch(readAs){
					case 'text':
						reader.readAsText(file);
						break;
					case 'arrayBuffer':
						reader.readAsArrayBuffer(file);
						break;
					case 'binaryString':
						reader.readAsBinaryString(file);
						break;
					case 'dataURL':
						reader.readAsDataURL(file);
						break;
					default:
						return reject('Invalid readAs type.');
				}
			});
		}else{
			return 'No file selected.';
		}
	}

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

	function saveToIndexedDB(dbName, storeName, data, id = 522){
		return new Promise(async (resolve, reject) => {
			try{
				const db = await openIndexedDB(dbName, storeName);
				const transaction = db.transaction(storeName, 'readwrite');
				const store = transaction.objectStore(storeName);
				const putRequest = store.put({ id: id, data: data });

				putRequest.onsuccess = () => {
					resolve("Data saved successfully.");
				};

				putRequest.onerror = (event) => {
					reject("Data save error: " + event.target.errorCode);
				};
			}catch(error){
				reject(error);
			}
		});
	}

	function getFromIndexedDB(dbName, storeName, id = 522){
		return new Promise(async (resolve, reject) => {
			try{
				const db = await openIndexedDB(dbName, storeName);
				const transaction = db.transaction(storeName, 'readonly');
				const store = transaction.objectStore(storeName);
				const getRequest = store.get(id);

				getRequest.onsuccess = (event) => {
					if(event.target.result){
						// こうしないとfirefox系ブラウザで
						// Error: Not allowed to define cross-origin object as property on [Object] or [Array] XrayWrapper
						// というエラーが出ることがあるので、構造化クローンを使ってコピーする
						// でかいオブジェクトだと効率が悪いのでなにかいい方法があれば教えてください
						resolve(structuredClone(event.target.result.data));
					}else{
						resolve(null);
					}
				};

				getRequest.onerror = (event) => {
					reject("Data fetch error: " + event.target.errorCode);
				};
			}catch(error){
				reject(error);
			}
		});
	}

	function getValueFromObjectByPath(object, path, defaultValue = undefined){
		const isArray = Array.isArray;
		if(object == null || typeof object != 'object')return defaultValue;
		return (isArray(object)) ? object.map(createProcessFunction(path)) : createProcessFunction(path)(object);
		function createProcessFunction(path){
			if(typeof path == 'string')path = path.split('.');
			if(!isArray(path))path = [path];
			return function(object){
				let index = 0,
				length = path.length;
				while(index < length){
					const key = toString_(path[index++]);
					if(object === undefined){
						return defaultValue;
					}
					// 配列に対する処理
					if(isArray(object)){
						object = object.map(item => item[key]);
					}else{
						object = object[key];
					}
				}
				return (index && index == length) ? object : void 0;
			};
		}
		function toString_(value){
			if(value == null)return '';
			if(typeof value == 'string')return value;
			if(isArray(value))return value.map(toString) + '';
			let result = value + '';
			return '0' == result && 1 / value == -(1 / 0) ? '-0' : result;
		}
	}

	function waitElementAndGet({query, searchFunction = 'querySelector', interval = 100, retry = 25, searchPlace = document, faildToThrow = false} = {}){
		if(!query)throw(`query is needed`);
		return new Promise((resolve, reject) => {
			const MAX_RETRY_COUNT = retry;
			let retryCounter = 0;
			let searchFn;

			switch(searchFunction){
				case 'querySelector':
					searchFn = () => searchPlace.querySelector(query);
					break;
				case 'getElementById':
					searchFn = () => searchPlace.getElementById(query);
					break;
				case 'XPath':
					searchFn = () => {
						let section = document.evaluate(query, searchPlace, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
						return section;
					};
					break;
				case 'XPathAll':
					searchFn = () => {
						let sections = document.evaluate(query, searchPlace, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
						let result = [];
						for(let i = 0; i < sections.snapshotLength; i++){
							result.push(sections.snapshotItem(i));
						}
						if(result.length >= 1)return result;
					};
					break;
				default:
					searchFn = () => searchPlace.querySelectorAll(query);
			}
			const setIntervalId = setInterval(findTargetElement, interval);

			function findTargetElement(){
				retryCounter++;
				if(retryCounter > MAX_RETRY_COUNT){
					clearInterval(setIntervalId);
					if(faildToThrow){
						return reject(`Max retry count (${MAX_RETRY_COUNT}) reached for query: ${query}`);
					}else{
						console.warn(`Max retry count (${MAX_RETRY_COUNT}) reached for query: ${query}`);
						return resolve(null);
					}
				}
				let targetElements = searchFn();
				if(targetElements && (!(targetElements instanceof NodeList) || targetElements.length >= 1)){
					clearInterval(setIntervalId);
					return resolve(targetElements);
				}
			}
		});
	}

	async function request({url, method = 'GET', respType = 'json', headers = {}, dontUseGenericHeaders = false, body = null, anonymous = false, cookie = null, maxRetries = 0, timeout = 60000, onlyResponse = true} = {}){
		if(!url)throw('url is not defined');

		const requestObject = {
			method,
			respType,
			url,
			headers: dontUseGenericHeaders ? headers : Object.assign({
				'Content-Type': '*/*',
				'Accept-Encoding': 'zstd, br, gzip, deflate',
				'User-agent': userAgent,
				'Accept': '*/*',
				'Referer': url,
				'Sec-Fetch-Mode': 'cors',
				'Sec-Fetch-Site': 'same-origin',
				...(cookie ? {'Cookie': cookie} : {}),
			}, headers),
			body,
			anonymous,
		};

		for(let retryCount = 0; retryCount <= maxRetries; retryCount++){
			try{
				const response = await new Promise((resolve, reject) => {
					GM_xmlhttpRequest({
						method: requestObject.method,
						url: requestObject.url,
						headers: requestObject.headers,
						responseType: requestObject.respType,
						data: requestObject.body,
						anonymous: requestObject.anonymous,
						timeout: timeout,
						onload: function(responseDetails){
							if(responseDetails.status >= 200 && responseDetails.status < 300){
								if(onlyResponse == false || method == 'HEAD'){
									return resolve(responseDetails);
								}else{
									return resolve(responseDetails.response);
								}
							}else if(responseDetails.status >= 500 || responseDetails.status === 429){
								console.warn(`Retrying due to response status: ${responseDetails.status}`);
								return reject({
									function_name: 'request',
									reason: `Server error or too many requests (status: ${responseDetails.status})`,
									response: responseDetails,
									requestObject: requestObject
								});
							}else{
								console.error({
									function_name: 'request',
									reason: `status: ${responseDetails.status}`,
									requestObject,
									response: responseDetails
								});
								return reject({
									function_name: 'request',
									reason: `status: ${responseDetails.status}`,
									requestObject,
									response: responseDetails
								});
							}
						},
						ontimeout: function(responseDetails){
							console.warn(responseDetails);
							return reject({
								function_name: 'request',
								reason: 'time out',
								response: responseDetails,
								requestObject: requestObject
							});
						},
						onerror: function(responseDetails){
							console.warn(responseDetails);
							return reject({
								function_name: 'request',
								reason: 'error',
								response: responseDetails,
								requestObject: requestObject
							});
						}
					});
				});
				return response;
			}catch(error){
				console.warn({
					error: error,
					url: requestObject.url,
					Retry: retryCount + 1,
					object: requestObject,
				});
				if(retryCount === maxRetries){
					throw({
						error: error,
						url: requestObject.url,
						Retry: retryCount + 1,
						object: requestObject,
					});
				}
			}
		}
	}

	/** @type {Set<string>} */
	const svgTags = new Set([
		"svg","g","path","circle","rect","ellipse","line","polyline","polygon","text","defs","use","symbol","clipPath","mask"
	]);
	/**
	 * @template {keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap} K
	 * @param {K} tag
	 * @param {(K extends keyof SVGElementTagNameMap
	 *   ? Partial<SVGElementTagNameMap[K]>
	 *   : Partial<HTMLElementTagNameMap[K]>) & Record<string, any>} [props]
	 * @param {...(Node|string|number|boolean|null|undefined|(Node|string|number|boolean|null|undefined)[])} children
	 * @returns {K extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[K] : HTMLElementTagNameMap[K]}   
	*/
	function h(tag, props = {}, ...children){
		const ns = svgTags.has(tag) ? "http://www.w3.org/2000/svg" : undefined;
		const el = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
		for(const key in props){
			const val = props[key];
			if(key === "style" && typeof val === "object"){
				Object.assign(el.style, val);
			}else if(key.startsWith("on") && typeof val === "function"){
				el.addEventListener(key.slice(2).toLowerCase(), val);
			}else if(key.startsWith("aria-") || key === "role"){
				el.setAttribute(key, val); // 強制的に属性にする
			}else if(key === "dataset" && typeof val === "object"){
				for(const dataKey in val){
					if(val[dataKey] != null){
						el.dataset[dataKey] = val[dataKey];
					}
				}
			}else if(key.startsWith("data-")){
				const prop = key.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase()); // dataset
				el.dataset[prop] = val;
			}else if(key === "ref" && typeof val === "function"){
				val(el); // 作成直後のDOMノードを渡す
			}else if(key in el && !svgTags.has(tag)){
				el[key] = val; // DOMプロパティ
			}else{
				el.setAttribute(key, val); // その他属性
			}
		}
		for(let i = 0; i < children.length; i++){
			const child = children[i];
			if(Array.isArray(child)){
				for(const nested of child){
					if(nested == null || nested === false)continue; // nullやfalseは無視
					el.appendChild(typeof nested === "string" || typeof nested === "number"
						? document.createTextNode(nested)
						: nested);
				}
			}else if(child != null && child !== false){
				el.appendChild(typeof child === "string" || typeof child === "number"
					? document.createTextNode(child)
					: child);
			}
		}
		return el;
	}

	async function multiPartDownload(url, numChunks = 6, minChunkSize = 500 * 1024){
		try{
			// ファイルサイズを取得
			const fileSize = await getFileSize(url);
			//console.log(`File size: ${fileSize} bytes`);
			if(fileSize === undefined){
				console.log('File size could not be determined, downloading entire file.');
				const response = await request({ url, respType: 'blob' });
				return response;
			}
			// チャンクの数を調整（最低チャンクサイズを500KBに設定）
			if(fileSize / numChunks < minChunkSize){
				numChunks = Math.ceil(fileSize / minChunkSize);
			}

			// チャンクのサイズを計算
			const baseChunkSize = Math.floor(fileSize / numChunks);
			const remainder = fileSize % numChunks;
			const promises = [];

			let start = 0;
			for(let i = 0; i < numChunks; i++){
				const extra = i < remainder ? 1 : 0;
				const end = start + baseChunkSize + extra - 1;
				if(start < fileSize){
					//console.log(`Downloading chunk: ${start} - ${end}`);
					promises.push(downloadChunk(url, start, end));
				}
				start = end + 1;
			}

			// チャンクを並列にダウンロード
			const chunks = await Promise.all(promises);

			// Blobに結合
			const blob = new Blob(chunks);
			return blob;
		}catch(error){
			console.error('Error during parallel download:', error);
		}

		async function downloadChunk(url, start, end){
			const response = await request({url: url, respType: 'blob', headers: {Range: `bytes=${start}-${end}`}, maxRetries: 2, timeout: 600000});
			return response;
		}
	}

	locationChange();
	main();
})();
