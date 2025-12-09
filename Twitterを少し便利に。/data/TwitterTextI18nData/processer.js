const fs = require('fs');
const path = require('path');
const axios = require('axios');
const vm = require('vm');
const parser = require('@babel/parser');
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
(function (){
	'use strict';
	const keyTranslation = {
		"en": {"web": "en", "apk": "values"},
		"ar": {"web": "ar", "apk": "values-ar"},
		"ar-x-fm": {"web": "ar-x-fm", "apk": "values-ar-rEH"},
		"bg": {"web": "bg", "apk": "values-bg"},
		"bn": {"web": "bn", "apk": "values-bn"},
		"ca": {"web": "ca", "apk": "values-ca"},
		"cs": {"web": "cs", "apk": "values-cs"},
		"da": {"web": "da", "apk": "values-da"},
		"de": {"web": "de", "apk": "values-de"},
		"el": {"web": "el", "apk": "values-el"},
		"en-gb": {"web": "en-GB", "apk": "values-en-rGB"},
		"es": {"web": "es", "apk": "values-es"},
		"eu": {"web": "eu", "apk": null},
		"fa": {"web": "fa", "apk": "values-fa"},
		"fi": {"web": "fi", "apk": "values-fi"},
		"fil": {"web": "fil", "apk": null},
		"fr": {"web": "fr", "apk": "values-fr"},
		"ga": {"web": "ga", "apk": null},
		"gl": {"web": "gl", "apk": null},
		"gu": {"web": "gu", "apk": "values-gu"},
		"ha": {"web": "ha", "apk": null},
		"he": {"web": "he", "apk": null},
		"hi": {"web": "hi", "apk": "values-hi"},
		"hr": {"web": "hr", "apk": "values-hr"},
		"hu": {"web": "hu", "apk": "values-hu"},
		"id": {"web": "id", "apk": null},
		"ig": {"web": "ig", "apk": null},
		"it": {"web": "it", "apk": "values-it"},
		"ja": {"web": "ja", "apk": "values-ja"},
		"kn": {"web": "kn", "apk": "values-kn"},
		"ko": {"web": "ko", "apk": "values-ko"},
		"mr": {"web": "mr", "apk": "values-mr"},
		"msa": {"web": "ms", "apk": "values-ms"},
		"nb": {"web": "nb", "apk": "values-nb"},
		"nl": {"web": "nl", "apk": "values-nl"},
		"pl": {"web": "pl", "apk": "values-pl"},
		"pt": {"web": "pt", "apk": "values-pt"},
		"ro": {"web": "ro", "apk": "values-ro"},
		"ru": {"web": "ru", "apk": "values-ru"},
		"sk": {"web": "sk", "apk": "values-sk"},
		"sr": {"web": "sr", "apk": "values-sr"},
		"sv": {"web": "sv", "apk": "values-sv"},
		"ta": {"web": "ta", "apk": "values-ta"},
		"th": {"web": "th", "apk": "values-th"},
		"tr": {"web": "tr", "apk": "values-tr"},
		"uk": {"web": "uk", "apk": "values-uk"},
		"ur": {"web": "ur", "apk": null},
		"vi": {"web": "vi", "apk": "values-vi"},
		"yo": {"web": "yo", "apk": null},
		"zh-cn": {"web": "zh", "apk": "values-zh-rCN"},
		"zh-tw": {"web": "zh-Hant", "apk": "values-zh-rTW"}
	};
	const textData = Object.keys(keyTranslation).reduce((acc, key) => {
		acc[key] = {
			new: {web: {}, apk: {}},
			old: {web: {}, apk: {}}
		};
		return acc;
	}, {});

	async function main(){
		await processWebData();
		await processApkData();
		await genarateTextData();
	}

	async function genarateTextData(){
		const useWords = {
			"forYouTab": "d1e0a75f", // function(e){return"おすすめ"+e.noun}
			"followingTab": "dafd69e9", // function(e){return"フォロー中"+e.noun}
			// ツイートノードヘッダー
			"pinnedListsModuleHeader": "pinned_lists_module_header", // "固定"
			"tweetsRetweeted": "tweets_retweeted", // "%sさんがリツイートしました"
			// ツイートノードアクション
			"retweet": ["d6c8514a", "f2919fb8"], // "リツイート", "リポスト"
			"unDoRetweet": ["f3bbbb88", "fd1e5446"], // "リツイートを取り消す", "リポストを取り消す"
			"quoteTweet": "quote_tweet", // "引用ツイート", "引用"
			// プロフィール
			"profileTabTitleTimeline": "profile_tab_title_timeline", // "ツイート"
			"profileTabTitleTimelineTweetsAndRepliesSentenceCase": "profile_tab_title_timeline_tweets_and_replies_sentence_case", // "返信"
			"profileTabTitleHighlights": "profile_tab_title_highlights", // "ハイライト"
			"profileTabTitleMedia": "profile_tab_title_media", // "メディア"
			"profileTabTitleLikes": "profile_tab_title_likes", // "いいね"
			"following": "c3befdbe", // "フォロー中"
			"unfollow": "d3029dbc", // "フォロー解除"
			"blocked": "i8cfb6e6", // "ブロック中"
			"unblock": "ea100d6a", // "ブロック解除"
			"joinDateFrom": "cf249089", // function(e){return e.joinDate+"からTwitterを利用しています"}
			"followedBy1": "c9e6167d", // function(){return["","さんにフォローされています"]}
			"followedBy2": "ha91d1eb", // function(){return["","さんと","さんにフォローされています"]}
			"followedBy3": "f1069f9b", // function(){return["","さん、","さん、","さんにフォローされています"]}
			"followedByLots": "e8404c1f", // function(){return["","さん、","さん、","さん、","さんにフォローされています"]}
			"postedTweetsNum" : ["fdc023d7", "a0a3adf7"], // function(){return[this.props.formattedCount+" 件のツイート"]}, function(){return[this.props.formattedCount+" 件のポスト"]},
			"likesNum": "eea0a14f", // function(){return[this.props.formattedCount+" 件のいいね"]}, function(){return[this.props.formattedCount+" 件のいいね"]},
			"mediaNum": "cca42d0b", // function(){return[this.props.formattedCount+" 件のメディア"]}, function(){return[this.props.formattedCount+" 件のメディア"]},
			// AppTabBar
			"home": "ha8209bc", // "ホーム"
			"explore": "fcf3e54c", // "話題を検索"
			"notifications": "eb75875e", // "通知"
			"chat": "h5e38204", // "チャット"
			"messages": "a2f81050", // "メッセージ"
			"grok": "h5860a68", // "Grok"
			"bookmarks": "i3145aa0", // "ブックマーク"
			"jobs": "b007440a", // "求人"
			"communities": "h5245afa", // "コミュニティ"
			"premium": "f75d1806", // "プレミアム"
			"verifiedOrg": "e2eef3c2", // "認証済み組織"
			"profile": "e1066d88", // "プロフィール"
			"lists": "fa884026", // "リスト"
			"monetization": "d299431c", // "収益化"
			"ads": "e0cb0c72", // "広告"
			"createYourSpace": "b55d8a78", // "スペースを作成"
			"settingsAndPrivacy": "fd442790", // "設定とプライバシー"
			"moreMenu": "h63a5c3c", // "もっと見る"
			"addAnExistingAccount": "j0a8da6e", // "既存のアカウントを追加"
			"manageAccounts": "c6f2bf00", // "アカウントを管理"
			"switchToAccount": "b7dc3885", // function(e){return"@"+e.screenName+"に切り替える"}
			"postTweet": "post_tweet", // "ツイートする"
			"settings": "bb081ea2", // "設定"
			// カレンダー系？日付表記に使えるかも
			"now": "ccd32094", // "現在"
			"day": "jf83d092", // "日"
			"month": "af4abf20", // "月"
			"year": "b871f280", // "年"
			"january": "hac89ab0", // "1月"
			"february": "ef30b30a", // "2月"
			"march": "b56920fa", // "3" なんで？英語だとmarchになるのに
			"april": "b1a0f1ec", // "4月"
			"may": "daf779c8", // "5月"
			"june": "c6ad074e", // "6月"
			"july": "f1db106c", // "7月"
			"august": "i4e80b7a", // "8月"
			"september": "efa6cc1e", // "9月"
			"october": "f40a0cbe", // "10月"
			"november": "ac74a31c", // "11月"
			"december": "i6c1e4b2", // "12月"
		};
		const enTextData = {new: {}, old: {}};
		for(const lang in keyTranslation){
			await process(lang, 'new');
			await process(lang, 'old');
		}
		async function process(lang, type){
			const currentTextData = {...textData[lang][type].web, ...textData[lang][type].apk};
			const anotherTextData = type === 'new' ? {...textData[lang].old.web, ...textData[lang].old.apk} : {...textData[lang].new.web, ...textData[lang].new.apk};
			const result = {};
			for(const key in useWords){
				const useKey = useWords[key];
				if(typeof useKey === 'string'){
					if(currentTextData[useKey]){
						result[key] = currentTextData[useKey];
					}else if(anotherTextData[useKey]){
						result[key] = anotherTextData[useKey];
					}else{
						result[key] = enTextData[type][useKey];
					}
				}else if(Array.isArray(useKey)){
					let isOk = false;
					for(let i = 0; i < useKey.length; i++){
						const useKeyKey = useKey[i];
						if(currentTextData[useKeyKey]){
							result[key] = currentTextData[useKeyKey];
							isOk = true;
							break;
						}
					}
					if(!isOk){
						for(let i = 0; i < useKey.length; i++){
							const useKeyKey = useKey[i];
							if(anotherTextData[useKeyKey]){
								result[key] = anotherTextData[useKeyKey];
								break;
							}else if(enTextData[type][useKeyKey]){
								result[key] = enTextData[type][useKeyKey];
								break;
							}
						}
					}
				}
			}

			if(lang === 'en'){
				enTextData[type] = result;
			}

			const entries = Object.entries(result).map(([k, v]) => {
				if(typeof v === 'object' && typeof v.value === 'function'){
					// 関数を文字列として埋め込み、props 参照も変換
					const fnStr = v.value.toString().replace(/this\.props/g, 'props');
					return `\t"${k}": {\n\t\t"type": ${JSON.stringify(v.type)},${v.arguments ? `\n\t\t"arguments": ${JSON.stringify(v.arguments)},` : ""}\n\t\t"value": ${fnStr}\n\t}`;
				}else{
					return `\t"${k}": ${JSON.stringify(v)}`;
				}
			});

			const entriesJson = Object.keys(result).reduce((acc, v) => {
				const currentData = result[v];

				if(typeof currentData === 'object' && typeof currentData.value === 'function'){
					let value;

					const fnStr = currentData.value.toString();
					const ast = parser.parse('(' + fnStr + ')');
					const fnNode = ast.program.body[0].expression;
					const body = fnNode.body.body;

					if(currentData.type === 'webI18nFunction'){
						const argName = fnNode.params[0]?.name ?? 'e';
						const returnNode = body.find(n => n.type === 'ReturnStatement');
						if(returnNode){
							const expr = returnNode.argument;

							function extractParts(node){
								if(node.type === 'BinaryExpression'){
									return extractParts(node.left) + extractParts(node.right);
								}
								if(node.type === 'StringLiteral'){
									return node.value;
								}
								if(node.type === 'MemberExpression'){
									if(
										node.object.type === 'Identifier' &&
										node.object.name === argName &&
										node.property.type === 'Identifier'
									){
										return `{{${node.property.name}}}`;
									}
								}
								return '';
							}

							value = extractParts(expr);
						}

					}else if(currentData.type === 'webI18nTemplateFunction'){
						const returnNode = body.find(n => n.type === 'ReturnStatement');

						if(returnNode && returnNode.argument.type === 'ArrayExpression'){
							value = returnNode.argument.elements.map(elem => {
								if(elem.type === 'StringLiteral'){
									return elem.value;
								}

								if(elem.type === 'BinaryExpression'){
									const parts = [];

									function extractParts(node){
										if(node.type === 'BinaryExpression'){
											extractParts(node.left);
											extractParts(node.right);
										}else if(node.type === 'StringLiteral'){
											parts.push(node.value);
										}else if(node.type === 'MemberExpression'){
											if(
												node.object.type === 'ThisExpression' &&
												node.property.type === 'Identifier'
											){
												parts.push(`{{${node.property.name}}}`);
											}else if(
												node.object.type === 'MemberExpression' &&
												node.object.property.name === 'props' &&
												node.property.type === 'Identifier'
											){
												parts.push(`{{${node.property.name}}}`);
											}
										}
									}

									extractParts(elem);
									return parts.join('');
								}
							});
						}
					}

					acc[v] = {
						type: currentData.type,
						...(currentData.arguments ? {arguments: currentData.arguments} : {}),
						value: value
					};
				}else{
					acc[v] = currentData;
				}
				return acc;
			}, {});
			const entriesJsonString = JSON.stringify(entriesJson, (key, value) => {
				if((key === 'value' || key === 'arguments') && Array.isArray(value) && value.length <= 5){
					// 特殊マーカーを付けて後で置換
					return {
						__INLINE_ARRAY__: true,
						items: value
					};
				}
				return value;
			}, '\t').replace(
				/\{\s*"__INLINE_ARRAY__"\s*:\s*true,\s*"items"\s*:\s*(\[[\s\S]*?\])\s*\}/g,
				(_, arrayText) => arrayText.replace(/\s+/g, '')
			);
			if(!fs.existsSync('./textData/json'))fs.mkdirSync('./textData/json', {recursive: true});
			const jsonOutputPath = path.join('textData', 'json', `${lang}_${type}.json`);
			fs.writeFileSync(jsonOutputPath, entriesJsonString, 'utf8');

			const jsOutputData = `const text = {\n${entries.join(',\n')}\n};\n\nexport default text;`;
			const jsOutputPath = path.join('textData', 'js', `${lang}_${type}.js`);
			if(!fs.existsSync('./textData/js'))fs.mkdirSync('./textData/js', {recursive: true});
			fs.writeFileSync(jsOutputPath, jsOutputData, 'utf8');
			return "OK";
		}
	}

	async function processWebData(){
		const oldTextSources = JSON.parse(fs.readFileSync('old_source.json', 'utf8'));
		const newTextSources = JSON.parse(fs.readFileSync('new_source.json', 'utf8'));
		for(const lang in keyTranslation){
			await process(lang, 'old');
			await process(lang, 'new');
		}
		async function process(lang, type){
			const langkey = `i18n/${keyTranslation[lang].web}`;
			let url = type === 'old' ? oldTextSources[langkey] : newTextSources[langkey];
			if(!url)return;
			url = new URL(url);

			if(!fs.existsSync('./cache'))fs.mkdirSync('./cache');
			const cachePath = path.join('./cache', `${url.pathname.split('/').pop()}`);
			let raw;
			if(fs.existsSync(cachePath)){
				raw = fs.readFileSync(cachePath, 'utf8');
			}else{
				raw = await getData(url.href);
				fs.writeFileSync(cachePath, raw, 'utf8');
			}

			const functionName = raw.match(/\}([a-z])\(\"/)[1];
			const overRideFunction = `function ${functionName}(key, val){
				if(typeof val === 'string'){
					result[key] = {
						"type": "string",
						"value": val
					};
				}else if(typeof val === 'function'){
					const functionString = val.toString();
					const paramName = functionString.match(/^function\\s*\\(([^)]*)\\)/)?.[1]?.trim() || functionString.match(/^\\(?\\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\\s*\\)?\\s*=>/)?.[1]?.trim() || 'e';
					const propRegex = new RegExp('\\\\b' + paramName + '\\\\.([a-zA-Z0-9_]+)', 'g');
					const props = new Set();
					let match;
					while((match = propRegex.exec(functionString)) !== null){
						props.add(match[1]);
					}
					result[key] = {
						"type": "webI18nFunction",
						"arguments": Array.from(props),
						"value": val
					};
				}
			};`;

			const replaced = raw.replace(/^("use strict";|try).*\)\)}}\);function/, `${overRideFunction};function `)
				.replace(/\);var.*$/m, ');');

			const context = {result: {}, console};
			vm.createContext(context);
			vm.runInContext(replaced, context);

			const templateFunctionsArray = `${raw.match(/\([a-z][=|,](\[\{.*\]\}\}),\{key:\"templateReducer\"/)[1]}]`;
			const templateFunctions = vm.runInNewContext(`(${templateFunctionsArray})`);
			for(const templateFunction of templateFunctions){
				context.result[templateFunction.key] = {
					"type": "webI18nTemplateFunction",
					"value": templateFunction.get
				};
			}

			textData[lang][type].web = context.result;

			const entries = Object.entries(context.result).map(([k, v]) => {
				const value = v.value;
				if(typeof value === 'function'){
					return `\t"${k}": ${value.toString()}`;
				}else{
					return `\t"${k}": ${JSON.stringify(value)}`;
				}
			});
			const outputData = `const text = {\n${entries.join(',\n')}\n};\n\nexport default text;`;

			const outputPath = path.join('processed' ,'web', `${lang}_${type}.js`);
			if(!fs.existsSync('./processed/web'))fs.mkdirSync('./processed/web', {recursive: true});
			fs.writeFileSync(outputPath, outputData, 'utf8');
			return "OK";
		}
	}

	async function processApkData(){
		for(const lang in keyTranslation){
			await process(lang, 'old');
			await process(lang, 'new');
		}
		async function process(lang, type){
			let dirName = keyTranslation[lang].apk;
			if(!dirName)return;
			const apkDirName = type === 'old' ? 'old_9.98.0-release.0' : 'new_10.88.1-release.0';
			const apkXmlPath = path.join('./apkStrings', apkDirName, dirName, 'strings.xml');
			const xmlFile = fs.readFileSync(apkXmlPath, 'utf8');
			const jsonData = xmlParser.parse(xmlFile);
			const apkTextData = jsonData.resources.string.reduce((acc, item) => {
				acc[item['@_name']] = {
					type: typeof item['#text'] === 'string' && item['#text'].match(/%(\d+\$)?s/g) ? "apkI18nTemplateFunction" : "string",
					value: item['#text']
				};
				return acc;
			}, {});

			textData[lang][type].apk = apkTextData;

			const entries = Object.entries(apkTextData).map(([k, v]) => {
				return `\t"${k}": ${JSON.stringify(v.value)}`;
			});
			const outputData = `const text = {\n${entries.join(',\n')}\n};\n\nexport default text;`;

			const outputPath = path.join('processed' ,'apk', `${lang}_${type}.js`);
			if(!fs.existsSync('./processed/apk'))fs.mkdirSync('./processed/apk', {recursive: true});
			fs.writeFileSync(outputPath, outputData, 'utf8');
			return "OK";
		}
	}

	async function getData(url){
		const response = await axios.get(url, {
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
})();
