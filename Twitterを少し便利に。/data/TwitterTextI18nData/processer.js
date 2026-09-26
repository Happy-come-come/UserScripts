const fs = require('fs');
const path = require('path');
const vm = require('vm');
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
		console.log('Web版の翻訳データを処理しています...');
		await processWebData();
		console.log('APK版の翻訳データを処理しています...');
		await processApkData();
		console.log('出力ファイルを生成しています...');
		await genarateTextData();
		console.log('翻訳データの処理が完了しました。');
	}

	async function genarateTextData(){
		const useWords = {
			"forYouTab": "d1e0a75f", // function(e){return"おすすめ"+e.noun}
			"followingTab": "dafd69e9", // function(e){return"フォロー中"+e.noun}
			// ツイートノードヘッダー
			"pinnedListsModuleHeader": "pinned_lists_module_header", // "固定"
			"tweetsRetweeted": "tweets_retweeted", // "%sさんがリツイートしました"
			// ツイートノードアクション
			"replyAction": "d17df548", // "返信"
			"repostAction": "g062295e", // "リポスト"
			"likeAction": "fe731016", // "いいね"
			"bookmarkAction": "gb303814", // "ブックマーク"
			"showMore": "d228a9a0", // "さらに表示"
			"viewThread": "i569ff3e", // "このスレッドを表示"
			"previousImage": "f96a38a2", // "前の画像"
			"nextImage": "i7d24b36", // "次の画像"
			"cardSource": "gec4f969", // function(){return ["From "]} / function(){return ["","から"]}
			"cardAppRating": "h2f9258f", // appStarRating/5.0 stars – appNumRatings ratings
			"verifiedAccount": "f19e4bfc", // "認証済みアカウント"
			"communityAdminBadge": "f9633e62", // "管理者" / "Admin"
			"communityModeratorBadge": "a46e92c2", // "モ" / "Mod"
			"communityMemberBadge": "dab106f8", // "メンバー" / "Member"
			"viewsLabel": "d9508ab0", // "件の表示"
			"viewQuotes": "a0b24576", // "引用を表示"
			"viewActivity": "e0d2d264", // "アクティビティを表示"
			"communityNotes": "birdwatch_pivot_header_title", // "コミュニティノート" / "Community Notes"
			"communityNoteHelpfulQuestion": "a7338bc2", // "このノートは役に立ちましたか？" / "Is this note helpful?"
			"communityNoteHelpful": "d39720d3", // "役に立った" / "Helpful"
			"communityNoteSomewhatHelpful": "i7d91dc9", // "少し役に立った" / "Somewhat Helpful"
			"communityNoteNotHelpful": "c75b7fb4", // "役に立たなかった" / "Not Helpful"
			"cashtagComingSoon": "ebf5ec26", // "近日公開" / "Coming soon"
			"cashtagNowAt": "c2485dfb", // function(){return ["現在 "]} / function(){return ["Now at "]}
			"grokAnswerFun": "gdd173da", // "Grok（ユーモアモード）による回答"
			"grokAnswer": "dfd6eeac", // "Grokによる回答"
			"grokImageBy": "deceb214", // "Grokによる画像"
			"grokShowMore": "hf3f8e3a", // "さらに表示"
			"grokCreateVersion": "h504ea5e", // "Grokでオリジナルバージョンを作成"
			"grokAskYourself": "eb722de2", // "Grokに聞いてみる"
			"grokWebPages": "e82adfeb",
			"grokPosts": "cfb8c1f7",
			"grokWebAndPosts": "g78032d5",
			"mostRelevant": "h67428e2", // "関連性が高い"
			"mostLiked": "d7b8ebaa", // "いいね"
			"mostRecent": "a8d68f62", // "新しい順"
			"sortReplies": "j9a4bb28", // "返信を並べ替え"
			"lastEdited": "e1b95ab0", // "最終更新"
			"newPostVersion": "h092d520", // "このポストには新しいバージョンがあります"
			"opensEditHistory": "a897c4d6", // "編集履歴を開きます"
			"viewLatestPost": "d9587114", // "最新ポストを表示"
			"opensLatestPost": "b7b86c3c", // "このポストの新しいバージョンを開きます"
			"mediaTaggedSelf": "f8e8e32e", // "自分" / "You"
			"mediaSourcePrefix": "dbf19261", // function(){return ["投稿者: "]} / function(){return ["From "]}
			"poll": "ec10ee02", // "投票"
			"viewPoll": "i5f742fe", // "この投票を表示"
			"pollVotes": "c2b81e9d", // function(e){return e.formattedCount+"票"}
			"pollEnded": "a3edf99a", // "終了" / "Final results"
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
			"follow": "eb5f060c", // "フォロー"
			"followBack": "a5f7ce12", // "フォローバック"
			"followers": "c64974fc", // "フォロワー"
			"followsYou": "b7f1e58a", // "フォローされています"
			"subscriptions": "d7b51c68", // "サブスクリプション"
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
			"connect_people": {key: "eb2cad43", force: 'new'}, // "フォローする"  "つながる"だったが、変更された
			"chat": "h5e38204", // "チャット"
			"messages": "a2f81050", // "メッセージ"
			"grok": "h5860a68", // "Grok"
			"bookmarks": "i3145aa0", // "ブックマーク"
			"jobs": "b007440a", // "求人"
			"business": "j0e2cfa8", // "ビジネス"
			"communities": "h5245afa", // "コミュニティ"
			"premium": "f75d1806", // "プレミアム"
			"verifiedOrg": "e2eef3c2", // "認証済み組織"
			"profile": "e1066d88", // "プロフィール"
			"creatorStudio": "bb07870e", // "Creator Studio"
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
			"january": {key: "hac89ab0", force: 'new'}, // "1月"
			"february": {key: "ef30b30a", force: 'new'}, // "2月"
			"march": {key: "b56920fa", force: 'new'}, // "3月" 最近のだと正しくなっていた
			"april": {key: "b1a0f1ec", force: 'new'}, // "4月"
			"may": {key: "daf779c8", force: 'new'}, // "5月"
			"june": {key: "c6ad074e", force: 'new'}, // "6月"
			"july": {key: "f1db106c", force: 'new'}, // "7月"
			"august": {key: "i4e80b7a", force: 'new'}, // "8月"
			"september": {key: "efa6cc1e", force: 'new'}, // "9月"
			"october": {key: "f40a0cbe", force: 'new'}, // "10月"
			"november": {key: "ac74a31c", force: 'new'}, // "11月"
			"december": {key: "i6c1e4b2", force: 'new'}, // "12月"
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
				if(typeof useKey === 'object' && !Array.isArray(useKey)){
					const actualKey = useKey.key;
					const forceType = useKey.force;
					// force指定がある場合、指定されたtypeのデータを優先
					if(forceType && forceType === type){
						if(currentTextData[actualKey]){
							result[key] = currentTextData[actualKey];
						}else if(enTextData[type][actualKey]){
							result[key] = enTextData[type][actualKey];
						}
					}else if(forceType && forceType !== type){
						// 異なるtypeが指定されている場合はスキップ
						if(anotherTextData[actualKey]){
							result[key] = anotherTextData[actualKey];
						}else if(enTextData.new[actualKey]){
							result[key] = enTextData.new[actualKey];
						}else if(enTextData.old[actualKey]){
							result[key] = enTextData.old[actualKey];
						}
					}else{
						// force指定がない場合は通常処理
						if(currentTextData[actualKey]){
							result[key] = currentTextData[actualKey];
						}else if(anotherTextData[actualKey]){
							result[key] = anotherTextData[actualKey];
						}else{
							result[key] = enTextData[type][actualKey];
						}
					}
				}else if(typeof useKey === 'string'){
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

					const placeholders = new Proxy({}, {
						get: (_, property) => `{{${String(property)}}}`
					});
					try{
						if(currentData.type === 'webI18nFunction'){
							value = currentData.value(placeholders);
						}else if(currentData.type === 'webI18nTemplateFunction'){
							const templateThis = new Proxy({props: placeholders}, {
								get: (target, property) => property in target ? target[property] : `{{${String(property)}}}`
							});
							value = currentData.value.call(templateThis);
						}
					}catch{
						value = undefined;
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
			fs.writeFileSync(jsonOutputPath, entriesJsonString + '\n', 'utf8');

			const jsOutputData = `const text = {\n${entries.join(',\n')}\n};\n\nexport default text;\n`;
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

			const registerFunctionMatch = raw.match(
				/\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*[^;]*?\._register\s*\(/
			);
			if(!registerFunctionMatch){
				throw new Error(`i18n登録関数を取得できませんでした: ${url.href}`);
			}
			const functionName = registerFunctionMatch[1];
			const escapedFunctionName = functionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			const firstRegistrationMatch = new RegExp(`\\b${escapedFunctionName}\\(\"[a-z0-9]{8}\"`).exec(raw.slice(registerFunctionMatch.index));
			const registrationsStart = firstRegistrationMatch ? registerFunctionMatch.index + firstRegistrationMatch.index : -1;
			const registrationsEndMatch = /;var\s+[A-Za-z_$][\w$]*\s*=\s*[A-Za-z_$][\w$]*\(\d+\)/g;
			registrationsEndMatch.lastIndex = registrationsStart;
			const registrationsEnd = registrationsEndMatch.exec(raw)?.index;
			if(registrationsStart < 0 || registrationsEnd === undefined){
				throw new Error(`i18n登録データの範囲を取得できませんでした: ${url.href}`);
			}

			const overRideFunction = `function ${functionName}(key, val){
				if(typeof val === 'string'){
					result[key] = {type: 'string', value: val};
				}else if(typeof val === 'function'){
					const functionString = val.toString();
					const paramName = functionString.match(/^function\\s*\\(([^)]*)\\)/)?.[1]?.trim() || functionString.match(/^\\(?\\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\\s*\\)?\\s*=>/)?.[1]?.trim() || 'e';
					const propRegex = new RegExp('\\\\b' + paramName + '\\\\.([a-zA-Z0-9_]+)', 'g');
					const props = new Set();
					let match;
					while((match = propRegex.exec(functionString)) !== null)props.add(match[1]);
					result[key] = {type: 'webI18nFunction', arguments: Array.from(props), value: val};
				}
			}`;
			const context = {result: {}, console};
			vm.createContext(context);
			vm.runInContext(overRideFunction, context);
			const registrationCalls = splitTopLevelCalls(raw.slice(registrationsStart, registrationsEnd));
			for(let i = 0; i < registrationCalls.length; i += 200){
				try{
					vm.runInContext(registrationCalls.slice(i, i + 200).join(';'), context);
				}catch(error){
					throw new Error(`i18n登録データの実行に失敗しました (${url.href}, ${i}-${Math.min(i + 199, registrationCalls.length - 1)}): ${error.message}`, {cause: error});
				}
			}

			const templateFunctions = extractTemplateFunctions(raw);
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

	function extractTemplateFunctions(raw){
		const result = new Map();
		const patterns = [
			/\bkey:\s*"([a-z0-9]{8})"\s*,\s*get:\s*function\s*\(\)\s*\{\s*return\s*/g,
			/\bget\s+([a-z0-9]{8})\s*\(\)\s*\{\s*return\s*/g
		];
		for(const pattern of patterns){
			let match;
			while((match = pattern.exec(raw)) !== null){
				const arrayStart = skipWhitespace(raw, pattern.lastIndex);
				if(raw[arrayStart] !== '[')continue;
				const arrayEnd = findClosingBracket(raw, arrayStart);
				if(arrayEnd < 0){
					throw new Error(`テンプレート関数 ${match[1]} の終端を取得できませんでした`);
				}
				const getter = vm.runInNewContext(`(function(){return ${raw.slice(arrayStart, arrayEnd + 1)}})`);
				result.set(match[1], {key: match[1], get: getter});
				pattern.lastIndex = arrayEnd + 1;
			}
		}
		return Array.from(result.values());
	}

	function skipWhitespace(source, index){
		while(index < source.length && /\s/.test(source[index]))index++;
		return index;
	}

	function findClosingBracket(source, openIndex){
		let depth = 0;
		let quote = null;
		let escaped = false;
		for(let i = openIndex; i < source.length; i++){
			const char = source[i];
			if(quote){
				if(escaped){
					escaped = false;
				}else if(char === '\\'){
					escaped = true;
				}else if(char === quote){
					quote = null;
				}
				continue;
			}
			if(char === '"' || char === "'" || char === '`'){
				quote = char;
			}else if(char === '['){
				depth++;
			}else if(char === ']' && --depth === 0){
				return i;
			}
		}
		return -1;
	}

	function splitTopLevelCalls(source){
		const calls = [];
		let start = 0;
		let parentheses = 0;
		let brackets = 0;
		let braces = 0;
		let quote = null;
		let escaped = false;
		for(let i = 0; i < source.length; i++){
			const char = source[i];
			if(quote){
				if(escaped){
					escaped = false;
				}else if(char === '\\'){
					escaped = true;
				}else if(char === quote){
					quote = null;
				}
				continue;
			}
			if(char === '"' || char === "'" || char === '`'){
				quote = char;
			}else if(char === '('){
				parentheses++;
			}else if(char === ')'){
				parentheses--;
			}else if(char === '['){
				brackets++;
			}else if(char === ']'){
				brackets--;
			}else if(char === '{'){
				braces++;
			}else if(char === '}'){
				braces--;
			}else if(char === ',' && parentheses === 0 && brackets === 0 && braces === 0){
				calls.push(source.slice(start, i));
				start = i + 1;
			}
		}
		const lastCall = source.slice(start).replace(/;\s*$/, '');
		if(lastCall)calls.push(lastCall);
		return calls;
	}

	async function processApkData(){
		const apkDirectories = {
			old: findApkDirectory('old'),
			new: findApkDirectory('new')
		};
		for(const lang in keyTranslation){
			await process(lang, 'old');
			await process(lang, 'new');
		}
		async function process(lang, type){
			let dirName = keyTranslation[lang].apk;
			if(!dirName)return;
			const apkDirName = apkDirectories[type];
			const apkXmlPath = path.join('./apkStrings', apkDirName, dirName, 'strings.xml');
			if(!fs.existsSync(apkXmlPath)){
				console.warn(`APK翻訳ファイルをスキップします (${lang}/${type}): ${apkXmlPath}`);
				return;
			}
			const xmlFile = fs.readFileSync(apkXmlPath, 'utf8');
			const apkTextData = parseAndroidStrings(xmlFile).reduce((acc, item) => {
				acc[item.name] = {
					type: item.value.match(/%(\d+\$)?s/g) ? "apkI18nTemplateFunction" : "string",
					value: item.value
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

	function findApkDirectory(type){
		const prefix = `${type}_`;
		const directories = fs.readdirSync('./apkStrings', {withFileTypes: true})
			.filter(entry => entry.isDirectory() && entry.name.startsWith(prefix))
			.map(entry => entry.name)
			.sort((a, b) => b.localeCompare(a, undefined, {numeric: true}));
		if(!directories.length){
			throw new Error(`apkStrings内に ${prefix} で始まるディレクトリがありません`);
		}
		console.log(`${type} APK: ${directories[0]}`);
		return directories[0];
	}

	function parseAndroidStrings(xml){
		const strings = [];
		const stringPattern = /<string\b([^>]*)>([\s\S]*?)<\/string>/g;
		let match;
		while((match = stringPattern.exec(xml)) !== null){
			const name = match[1].match(/\bname\s*=\s*(["'])(.*?)\1/)?.[2];
			if(!name)continue;
			const value = decodeXmlEntities(match[2].replace(/<[^>]*>/g, '')).trim();
			strings.push({name: decodeXmlEntities(name), value});
		}
		return strings;
	}

	function decodeXmlEntities(value){
		return value.replace(/&#(x[0-9a-f]+|\d+);|&(quot|apos|lt|gt|amp);/gi, (entity, numeric, named) => {
			if(numeric){
				const codePoint = numeric[0].toLowerCase() === 'x' ? parseInt(numeric.slice(1), 16) : parseInt(numeric, 10);
				return String.fromCodePoint(codePoint);
			}
			return {quot: '"', apos: "'", lt: '<', gt: '>', amp: '&'}[named.toLowerCase()];
		});
	}

	async function getData(url){
		const response = await fetch(url, {
			headers: {
				'User-Agent': 'Mozilla/5.0',
				'Accept': 'text/javascript, */*; q=0.01',
				'Referer': 'https://x.com/',
			}
		});
		if(!response.ok){
			throw new Error(`データの取得に失敗しました (${response.status} ${response.statusText}): ${url}`);
		}
		return await response.text();
	}
	main().catch(error => {
		console.error(error);
		process.exitCode = 1;
	});
})();
