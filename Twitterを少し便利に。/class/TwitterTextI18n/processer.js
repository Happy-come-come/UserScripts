
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const vm = require('vm');
const { XMLParser } = require('fast-xml-parser');
const xmlParser = new XMLParser({
	ignoreAttributes: false,
	attributeNamePrefix: "@_",
	preserveOrder: false,
	trimValues: true,
	parseTagValue: true,
	parseAttributeValue: true,
	allowBooleanAttributes: true,
});

async function main(){
	const old_source = JSON.parse(fs.readFileSync('old_source.json', 'utf8'));
	//await process(old_source, 'old');
	const new_source = JSON.parse(fs.readFileSync('new_source.json', 'utf8'));
	//await process(new_source, 'new');

	await genarate('old');
	await genarate('new');
}

async function genarate(state){
	const keyTranslation = {
		"en": {"i18n": "en", "apk": "values"},
		"ar": {"i18n": "ar", "apk": "values-ar"},
		"ar-x-fm": {"i18n": "ar-x-fm", "apk": "values-ar-rEH"},
		"bg": {"i18n": "bg", "apk": "values-bg"},
		"bn": {"i18n": "bn", "apk": "values-bn"},
		"ca": {"i18n": "ca", "apk": "values-ca"},
		"cs": {"i18n": "cs", "apk": "values-cs"},
		"da": {"i18n": "da", "apk": "values-da"},
		"de": {"i18n": "de", "apk": "values-de"},
		"el": {"i18n": "el", "apk": "values-el"},
		"en-gb": {"i18n": "en-GB", "apk": "values-en-rGB"},
		"es": {"i18n": "es", "apk": "values-es"},
		"eu": {"i18n": "eu", "apk": null},
		"fa": {"i18n": "fa", "apk": "values-fa"},
		"fi": {"i18n": "fi", "apk": "values-fi"},
		"fil": {"i18n": "fil", "apk": null},
		"fr": {"i18n": "fr", "apk": "values-fr"},
		"ga": {"i18n": "ga", "apk": null},
		"gl": {"i18n": "gl", "apk": null},
		"gu": {"i18n": "gu", "apk": "values-gu"},
		"ha": {"i18n": "ha", "apk": null},
		"he": {"i18n": "he", "apk": null},
		"hi": {"i18n": "hi", "apk": "values-hi"},
		"hr": {"i18n": "hr", "apk": "values-hr"},
		"hu": {"i18n": "hu", "apk": "values-hu"},
		"id": {"i18n": "id", "apk": null},
		"ig": {"i18n": "ig", "apk": null},
		"it": {"i18n": "it", "apk": "values-it"},
		"ja": {"i18n": "ja", "apk": "values-ja"},
		"kn": {"i18n": "kn", "apk": "values-kn"},
		"ko": {"i18n": "ko", "apk": "values-ko"},
		"mr": {"i18n": "mr", "apk": "values-mr"},
		"msa": {"i18n": "ms", "apk": "values-ms"},
		"nb": {"i18n": "nb", "apk": "values-nb"},
		"nl": {"i18n": "nl", "apk": "values-nl"},
		"pl": {"i18n": "pl", "apk": "values-pl"},
		"pt": {"i18n": "pt", "apk": "values-pt"},
		"ro": {"i18n": "ro", "apk": "values-ro"},
		"ru": {"i18n": "ru", "apk": "values-ru"},
		"sk": {"i18n": "sk", "apk": "values-sk"},
		"sr": {"i18n": "sr", "apk": "values-sr"},
		"sv": {"i18n": "sv", "apk": "values-sv"},
		"ta": {"i18n": "ta", "apk": "values-ta"},
		"th": {"i18n": "th", "apk": "values-th"},
		"tr": {"i18n": "tr", "apk": "values-tr"},
		"uk": {"i18n": "uk", "apk": "values-uk"},
		"ur": {"i18n": "ur", "apk": null},
		"vi": {"i18n": "vi", "apk": "values-vi"},
		"yo": {"i18n": "yo", "apk": null},
		"zh-cn": {"i18n": "zh", "apk": "values-zh-rCN"},
		"zh-tw": {"i18n": "zh-Hant", "apk": "values-zh-rTW"}
	};

	const wordKey = {
		"d1e0a75f": { // function(e){return"おすすめ"+e.noun}
			"type": "webI18nFunction",
			"arguments": ["noun"],
		},
		"dafd69e9": { // function(e){return"フォロー中"+e.noun}
			"type": "webI18nFunction",
			"arguments": ["noun"],
		},
		// ツイートノードヘッダー
		"pinned_lists_module_header": { // "固定"
			"type": "text",
		},
		"tweets_retweeted": { // "%sさんがリツイートしました"
			"type": "androidI18nFunction",
		},
		// プロフィール
		"profile_tab_title_timeline": { // "ツイート"
			"type": "text",
		},
		"profile_tab_title_timeline_tweets_and_replies_sentence_case": { // "返信"
			"type": "text",
		},
		"profile_tab_title_highlights": { // "ハイライト"
			"type": "text",
		},
		"profile_tab_title_media": { // "メディア"
			"type": "text",
		},
		"profile_tab_title_likes": { // "いいね"
			"type": "text",
		},
		"c3befdbe": { // "フォロー中"
			"type": "text",
		},
		"d3029dbc": { // "フォロー解除"
			"type": "text",
		},
		"i8cfb6e6": { // "ブロック中"
			"type": "text",
		},
		"ea100d6a": { // "ブロック解除"
			"type": "text",
		},
		"cf249089": { // function(e){return e.joinDate+"からTwitterを利用しています"}
			"type": "webI18nFunction",
			"arguments": ["joinDate"],
		},
		"c9e6167d": { // function(){return["","さんにフォローされています"]}
			"type": "webI18nTemplateFunction",
		},
		"ha91d1eb": { // function(){return["","さんと","さんにフォローされています"]}
			"type": "webI18nTemplateFunction",
		},
		"f1069f9b": { // function(){return["","さん、","さん、","さんにフォローされています"]}
			"type": "webI18nTemplateFunction",
		},
		"e8404c1f": { // function(){return["フォローしている","さん、","さん、他","人にフォローされています"]}
			"type": "webI18nTemplateFunction",
		},
		// AppTabBar
		"ha8209bc": { // "ホーム"
			"type": "text",
		},
		"fcf3e54c": { // "話題を検索"
			"type": "text",
		},
		"eb75875e": { // "通知"
			"type": "text",
		},
		"a2f81050": { // "メッセージ"
			"type": "text",
		},
		"h5860a68": { // "Grok"
			"type": "text",
		},
		"i3145aa0": { // "ブックマーク"
			"type": "text",
		},
		"b007440a": { // "求人"
			"type": "text",
		},
		"h5245afa": { // "コミュニティ"
			"type": "text",
		},
		"f75d1806": { // "プレミアム"
			"type": "text",
		},
		"e2eef3c2": { // "認証済み組織"
			"type": "text",
		},
		"e1066d88": { // "プロフィール"
			"type": "text",
		},
		"fa884026": { // "リスト"
			"type": "text",
		},
		"d299431c": { // "収益化"
			"type": "text",
		},
		"e0cb0c72": { // "広告"
			"type": "text",
		},
		"b55d8a78": { // "スペースを作成"
			"type": "text",
		},
		"fd442790": { // "設定とプライバシー"
			"type": "text",
		},
		"j0a8da6e": { // "既存のアカウントを追加"
			"type": "text",
		},
		"c6f2bf00": { // "アカウントを管理"
			"type": "text",
		},
		"b7dc3885": { // function(e){return"@"+e.screenName+"に切り替える"}
			"type": "webI18nFunction",
			"arguments": ["screenName"],
		},
		"post_tweet": { // "ツイートする"
			"type": "text",
		},
		"bb081ea2": { // "設定"
			"type": "text",
		},
		// カレンダー系？日付表記に使えるかも
		"ccd32094": { // "現在"
			"type": "text",
		},
		"jf83d092": { // "日"
			"type": "text",
		},
		"af4abf20": { // "月"
			"type": "text",
		},
		"b871f280": { // "年"
			"type": "text",
		},
		"hac89ab0": { // "1月"
			"type": "text",
		},
		"ef30b30a": { // "2月"
			"type": "text",
		},
		"b56920fa": { // "3" なんで？英語だとmarchになるのに
			"type": "text",
		},
		"b1a0f1ec": { // "4月"
			"type": "text",
		},
		"daf779c8": { // "5月"
			"type": "text",
		},
		"c6ad074e": { // "6月"
			"type": "text",
		},
		"f1db106c": { // "7月"
			"type": "text",
		},
		"i4e80b7a": { // "8月"
			"type": "text",
		},
		"efa6cc1e": { // "9月"
			"type": "text",
		},
		"f40a0cbe": { // "10月"
			"type": "text",
		},
		"ac74a31c": { // "11月"
			"type": "text",
		},
		"i6c1e4b2": { // "12月"
			"type": "text",
		},
	}
	for(const key of Object.keys(keyTranslation)){
		if(!fs.existsSync('./processed'))fs.mkdirSync('./processed');
		const res = {};
		const i18n = keyTranslation[key].i18n;
		const apkDirName = state === 'old' ? 'old_9.98.0-release.0' : 'new_10.88.1-release.0';
		const i18nPath = path.join('./fromI18n', `${state}_${i18n}.js`);

		const apk = keyTranslation[key].apk ?? keyTranslation["en"].apk;
		const apkEffectiveLang = keyTranslation[key].apk ? key : "en";
		const apkPath = path.join('./fromApk', apkDirName, keyTranslation[apkEffectiveLang].apk, 'strings.xml');

		const i18nData = loadI18nJs(i18nPath);
		const xmlFile = fs.readFileSync(apkPath, 'utf8');
		const apkData = xmlParser.parse(xmlFile);

		const apkStrings = Array.isArray(apkData.resources.string)
			? apkData.resources.string
			: [apkData.resources.string];
		for(const wkey of Object.keys(wordKey)){
			// i18n から取得
			if(i18nData[wkey]){
				res[wkey] = wordKey[wkey];
				res[wkey].value = i18nData[wkey];
				continue;
			}

			// apk xml から取得（name属性が一致する要素を探す）
			const apkEntry = apkStrings.find(entry => entry['@_name'] === wkey);
			if(apkEntry){
				res[wkey] = wordKey[wkey];
				res[wkey].value = apkEntry['#text'] ?? '';
			}
		}
		const entries = Object.entries(res).map(([k, v]) => {
			const props = Object.entries(v).map(([propKey, propVal]) => {
				const formattedValue = typeof propVal === 'function' ? propVal.toString() : JSON.stringify(propVal);
				return `\t\t${JSON.stringify(propKey)}: ${formattedValue}`;
			});
			return `\t"${k}": {\n${props.join(',\n')}\n\t}`;
		});
		const output = `const text = {\n${entries.join(',\n')}\n};\nexport default text;`;
		const outputPath = path.join('./processed', `${state}_${key}.js`);
		fs.writeFileSync(outputPath, output, 'utf8');
		console.log(`✅ Processed ${key}`);
	}
}
function loadI18nJs(filePath) {
	const code = fs.readFileSync(filePath, 'utf8');
	const modifiedCode = code.replace(/^const\s+text\s*=/, 'text =');
	const context = { text: {}, exports: {} };
	vm.createContext(context);
	vm.runInContext(modifiedCode, context);
	return context.text || context.exports.default || {};
}
/**
function applyTemplate(templateParts, values) {
	let result = '';
	for (let i = 0; i < templateParts.length; i++) {
		result += templateParts[i];
		if (i < values.length) {
			result += values[i];
		}
	}
	return result;
}
function formatString(template, args) {
	let argIndex = 0;
	return template.replace(/%(\d+\$)?s/g, (_, indexPart) => {
		let i;
		if (indexPart) {
			i = parseInt(indexPart, 10) - 1;
		} else {
			i = argIndex++;
		}
		return args[i] !== undefined ? args[i] : `%${indexPart || ''}s`;
	});
}
 */
async function process(source, state){
	// 俺には正規表現でなんとかするしか思いつかなかった
	for(const key of Object.keys(source)){
		console.log(`Processing ${key}...`);
		const url = source[key];
		const filename = path.basename(url);
		const cachePath = path.join('./cache', `${state}_${filename}`);
		const outputPath = path.join('./fromI18n', `${state}_${key.replace(/.*\//,'')}.js`);

		if(!fs.existsSync('./cache'))fs.mkdirSync('./cache');
		let raw;
		if(fs.existsSync(cachePath)){
			raw = fs.readFileSync(cachePath, 'utf8');
		}else{
			raw = await getData(url);
			fs.writeFileSync(cachePath, raw, 'utf8');
		}
		// Modify JS
		const functionName = raw.match(/^"use strict";.{240,900}\}([a-z])\(/)[1];
		const overRideFunction = `function ${functionName}(key, val){result[key] = val;}`;
		const replaced = raw.replace(/"use strict";.*\)\)}}\);function/, `${overRideFunction};function `)
			.replace(/\);var.*$/m, ');');
		//console.log(replaced);
		// Execute JS to collect i18n data
		const context = {result: {}, console};
		vm.createContext(context);
		vm.runInContext(replaced, context);

		const functionsArray = `${raw.match(/\([a-z]=(\[\{.*\]\}\}),\{key:\"templateReducer\"/)[1]}]`;
		const functions = vm.runInNewContext(`(${functionsArray})`);
		for(const func of functions){
			context.result[func.key] = func.get;
		}

		// Output final JS
		const entries = Object.entries(context.result).map(([k, v]) => {
			return typeof v === 'function' ? `\t"${k}": ${v.toString()}` : `\t"${k}": ${JSON.stringify(v)}`;
		});
		const output = `const text = {\n${entries.join(',\n')}\n};`;

		if(!fs.existsSync('./fromI18n'))fs.mkdirSync('./fromI18n');
		fs.writeFileSync(outputPath, output, 'utf8');
		console.log(`✅ Processed ${filename}`);
	}
}

async function getData(url){
	const response = await axios.get(url,{
		headers: {
			'User-Agent': 'Mozilla/5.0',
			'Accept': 'text/javascript, */*; q=0.01',
			'Accept-Encoding': 'gzip, deflate, br',
			'Connection': 'keep-alive',
			'Referer': 'https://x.com/',
		}
	});
	const data = response.data;
	return data;
}

main();
