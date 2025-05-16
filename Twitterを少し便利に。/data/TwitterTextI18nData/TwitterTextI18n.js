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
