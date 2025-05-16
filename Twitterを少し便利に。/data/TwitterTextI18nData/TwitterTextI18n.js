class TwitterTextI18n {
	#version = 202505150000;
	#langList = ["ja", "en", "ar", "ar-x-fm", "bg", "bn", "ca", "cs", "da", "de", "el", "en-gb", "es", "eu", "fa", "fi", "fil",
		"fr", "ga", "gl", "gu", "ha", "he", "hi", "hr", "hu", "id", "ig", "it", "kn", "ko", "mr", "msa", "nb",
		"nl", "pl", "pt", "ro", "ru", "sk", "sr", "sv", "ta", "th", "tr", "uk", "ur", "vi", "yo", "zh-cn", "zh-tw"];
	#textData = {};
	#testData = null;
	#isReady = false;
	#loadingPromise = null;
	constructor(){

	}

	async loadTextData(lang = 'en', type = 'new', force = false){
		if(this.#isReady && !force){
			return;
		}
		if(!this.#langList.includes(lang)){
			console.error(`Unsupported language: ${lang}`);
			lang = 'en';
		}
		if(this.#loadingPromise){
			return this.#loadingPromise;
		}

		const storedData = await getFromIndexedDB('MTLU_TwitterTextI18n', 'textData') || {};
		let jsTextData = null;
		if(this.#testData){
			this.#textData = this.#testData;
			this.#isReady = true;
			return;
		}else if(storedData[lang]?.[type]?.jsText && storedData?.[lang]?.[type]?.dataVersion === this.#version){
			jsTextData = storedData[lang][type].jsText;
		}else{
			const jsTextDataBaseUrl = `https://raw.githubusercontent.com/Happy-come-come/UserScripts/main/Twitter%E3%82%92%E5%B0%91%E3%81%97%E4%BE%BF%E5%88%A9%E3%81%AB%E3%80%82/data/TwitterTextI18nData/textData/`
			jsTextData = await request({url: `${jsTextDataBaseUrl}${lang}_${type}.js`, method: 'GET', respType: 'text'});
			if(!jsTextData){
				throw new Error('Failed to load text data');
			}
			if(!storedData[lang])storedData[lang] = {};
			if(!storedData[lang][type])storedData[lang][type] = {};
			storedData[lang][type].jsText = jsTextData;
			storedData[lang][type].dataVersion = this.#version;
			await saveToIndexedDB('MTLU_TwitterTextI18n', 'textData', storedData);
		}

		const jsTextDataBlob = new Blob([jsTextData], {type: 'application/javascript'});
		const jsTextDataBlobUrl = URL.createObjectURL(jsTextDataBlob);
		const textData = await import(jsTextDataBlobUrl);
		URL.revokeObjectURL(jsTextDataBlobUrl);
		if(!textData){
			throw new Error('Failed to load text data');
		}
		this.#textData = textData.default;
		this.#isReady = true;
		return "Ready";
	}

	getText(key, args = [], props = {}){
		if(key === undefined || key === null){
			return '';
		}
		const selectedText = this.#textData[key];
		if(!selectedText){
			console.error(`Missing text for key: ${key}`);
			return '';
		}
		if(selectedText.type === 'string'){
			return selectedText.value;
		}
		if(selectedText.type === 'webI18nFunction'){
			let argsObj = {};
			if(typeof args === 'object' && !Array.isArray(args)){
				argsObj = args;
			}else if(typeof args === 'object' && Array.isArray(args)){
				for(let i = 0; i < args.length; i++){
					argsObj[selectedText.arguments[i]] = args[i] || '';
				}
			}
			return selectedText.value(argsObj);
		}
		if(selectedText.type === 'webI18nTemplateFunction'){
			return this.#applyTemplate(selectedText.value, args, props);
		}
		if(selectedText.type === 'apkI18nTemplateFunction'){
			return this.#formatString(selectedText.value, args);
		}
	}

	#applyTemplate(templateParts, args, props){
		let template = templateParts();
		let result = '';
		for(let i=0; i < template.length; i++){
			result += template[i];
			if(i < args.length){
				result += args[i];
			}
		}
		return result;
	}

	#formatString(template, args){
		let argIndex = 0;
		return template.replace(/%(\d+\$)?s/g, (_, indexPart) => {
			let i;
			if(indexPart){
				i = parseInt(indexPart, 10) - 1;
			}else{
				i = argIndex++;
			}
			return args[i] !== undefined ? args[i] : `%${indexPart || ''}s`;
		});
	}
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
			//'Sec-Fetch-Dest': 'empty',
			'Sec-Fetch-Mode': 'cors',
			'Sec-Fetch-Site': 'same-origin',
			...(cookie ? {'Cookie': cookie} : {}),
		}, headers),
		body,
		anonymous,
	};
	let retryCount = 0;
	while(retryCount <= maxRetries){
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
			retryCount++;
			console.warn({
				error: error,
				url: requestObject.url,
				Retry: retryCount,
				object: requestObject,
			});
			if(retryCount === maxRetries){
				throw({
					error: error,
					url: requestObject.url,
					Retry: retryCount,
					object: requestObject,
				});
			}
		}
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
