(async ()=>{
	const fs = require('fs');
	const path = require('path');
	const axios = require('axios');
	async function main(){
		const langData = await prepareFiles();
		await generateI18nFiles(langData);
	}

	async function generateI18nFiles(langData){
		const i18nWordList = {
			"top": "tee.tho.ti7", //トップ,  Top
			"illustrationsAndManga": "t0.t1", //イラスト・マンガ,  Illustrations and Manga
			"novels": "t0.t2", //小説,  Novels
			"illustrations": "t0.t3", //イラスト,  Illustrations
			"manga": "t0.t4", //マンガ,  Manga
			"user": "t3jp.t3ru", //ユーザー,  User
			"ugoira": "t0.t5", //うごくイラスト,  Ugoira
			"searchWorks": "tqu.tr1", //作品を検索,  Search works
			"history": "tqu.tr2", //履歴,  History
			"clearHistory": "tqu.tr3", //履歴をクリア,  Clear history
			"recentSearches": "tqu.tr4", //最近の検索,  Recent searches
			"all": "tee.tho.tin", //すべて,  All
			"allAges": "tee.tho.tio", //全年齢,  All ages
			"r18": "tee.tho.tip", //R-18,  R-18
			"works": "t0.t0", //作品,  Works
			"newest": "tee.tho.tia", //新しい順,  Newest
			"oldest": "tee.tho.tib", //古い順,  Oldest
			"_count_Works": "t3jp.t3ki", //{{ count }} 作品,  {{ count }} works
			"viewOnpixivEncyclopedia": "tby.tcz.td1", //ピクシブ百科事典で見る,  View on pixiv Encyclopedia
			"searchOption": {
				"searchOption": "tee.tho.thp", //検索オプション,  Search option
				"keywords": "t3jp.t3ob", //キーワード,  Keywords
				"targets": "t3jp.t3uw", //対象,  Targets
				"aiGeneratedWork": "tee.tho.tiu", //AI生成作品,  AI-generated work
				"display": "tee.tho.tis", //表示する,  Display
				"hide": "tee.tho.tit", //表示しない,  Hide
				"displayOnlyAiGeneratedWork": "tee.tho.tiv", //AI生成作品のみ表示,  Display only AI-generated work
				"filters": "t3jp.t3q4", //フィルター,  Filters
				"period": "t3jp.t3w9", //期間,  Period
				"selectAPeriod": "t3jp.t3w3", //日付を指定,  Select a period
				"other": "t3jp.t3n3", //その他,  Other
				"workLanguage": "t0.t3q.t4e", //作品の言語,  Work language
				"allLanguages": "t0.t3q.t4i", //すべての言語,  All languages
				"language": {
					"ja": "t0.t3q.t4c", //日本語,  Japanese
					"en": "t0.t3q.t3t", //英語,  English
					"ko": "t0.t3q.t49", //韓国語,  Korean
					"zh-cn": "t0.t3q.t4a", //簡体中文,  Simplified Chinese
					"zh-tw": "t0.t3q.t4b", //繁体中文,  Traditional Chinese
					"de": "t0.t3q.t3s", //ドイツ語,  German
					"fr": "t0.t3q.t3x", //フランス語,  French
					"es": "t0.t3q.t3u", //スペイン語,  Spanish
					"ru": "t0.t3q.t46",  //ロシア語,  Russian
					"it": "t0.t3q.t3z", //イタリア語,  Italian
					"pt-pt": "t0.t3q.t43", //ポルトガル語（ポルトガル）,  Portuguese (Portugal)
					"pt-br": "t0.t3q.t42", //ポルトガル語（ブラジル）,  Portuguese (Brazil)
					"tr": "t0.t3q.t45", //トルコ語,  Turkish
					"vi": "t0.t3q.t44", //ベトナム語,  Vietnamese
					"id": "t0.t3q.t7", //インドネシア語,  Indonesian
					"nl": "t0.t3q.t40", //オランダ語,  Dutch
					"pl": "t0.t3q.t41", //ポーランド語,  Polish
					"ar": "t0.t3q.t47", //アラビア語,  Arabic
					"th": "t0.t3q.t48", //タイ語,  Thai
					"da": "t0.t3q.t3r", //デンマーク語,  Danish
					"tl": "t0.t3q.t3w", //フィリピン語,  Filipino
					"other": "t0.t3q.t4d" //その他,  Other
				},
				"bundleWorksByTheSameCreator": "tee.tho.tj2", //同じ作者の作品をまとめる,  Bundle works by the same creator
				"reset": "t3jp.t3wf", //条件をリセット,  Reset
				"illustrations": {
					"allResolutions": "t3jp.t3my", //すべての解像度,  All resolutions
					"_width_px_height_px": "t3jp.t3tk", //{{ width }}px × {{ height }}px,  {{ width }}px × {{ height }}px
					"moreThan_width_px_height_px": "t3jp.t3ku", //{{ width }}px × {{ height }}px以上,  More than {{ width }}px × {{ height }}px
					"lessThan_width_px_height_px": "t3jp.t3kv", //{{ width }}px × {{ height }}px以下,  Less than {{ width }}px × {{ height }}px
					"allRatios": "t3jp.t3mx", //すべての縦横比,  All ratios
					"horizontal": "t3jp.t3wl", //横長,  Horizontal
					"vertical": "t3jp.t3xo", //縦長,  Vertical
					"square": "t3jp.t3ws", //正方形,  Square
					"allCreationTools": "t3jp.t3mu", //すべての作成ツール,  All creation tools
					"creationTools": {
						"sai": "t51.t7e.t7f",
						"photoshop": "t51.t7e.t7g",
						"clipStudioPaint": "t51.t7e.t7h",
						"illustStudio": "t51.t7e.t7i",
						"comicStudio": "t51.t7e.t7j",
						"pixia": "t51.t7e.t7k",
						"azPainter2": "t51.t7e.t7l",
						"painter": "t51.t7e.t7m",
						"illustrator": "t51.t7e.t7n",
						"gimp": "t51.t7e.t7o",
						"fireAlpaca": "t51.t7e.t7p",
						"oekakiBBS": "t51.t7e.t7q",
						"azPainter": "t51.t7e.t7r",
						"cgillust": "t51.t7e.t7s",
						"oekakiChat": "t51.t7e.t7t",
						"tegakiBlog": "t51.t7e.t7u",
						"msPaint": "t51.t7e.t7v",
						"pictBear": "t51.t7e.t7w",
						"openCanvas": "t51.t7e.t7x",
						"paintShopPro": "t51.t7e.t7y",
						"edge": "t51.t7e.t7z",
						"drawr": "t51.t7e.t80",
						"comicWorks": "t51.t7e.t81",
						"azDrawing": "t51.t7e.t82",
						"sketchBookPro": "t51.t7e.t83",
						"photoStudio": "t51.t7e.t84",
						"paintgraphic": "t51.t7e.t85",
						"medibangPaint": "t51.t7e.t86",
						"nekoPaint": "t51.t7e.t87",
						"inkscape": "t51.t7e.t88",
						"artRage": "t51.t7e.t89",
						"azDrawing2": "t51.t7e.t8a",
						"fireworks": "t51.t7e.t8b",
						"ibisPaint": "t51.t7e.t8c",
						"afterEffects": "t51.t7e.t8d",
						"mdiapp": "t51.t7e.t8e",
						"graphicsGale": "t51.t7e.t8f",
						"krita": "t51.t7e.t8g",
						"kokubanIn": "t51.t7e.t8h",
						"retasStudio": "t51.t7e.t8i",
						"eMote": "t51.t7e.t8j",
						"fourthPaint": "t51.t7e.t8k",
						"comiLabo": "t51.t7e.t8l",
						"pixivSketch": "t51.t7e.t8m",
						"pixelmator": "t51.t7e.t8n",
						"procreate": "t51.t7e.t8o",
						"expression": "t51.t7e.t8p",
						"picturePublisher": "t51.t7e.t8q",
						"processing": "t51.t7e.t8r",
						"live2D": "t51.t7e.t8s",
						"dotpict": "t51.t7e.t8t",
						"aseprite": "t51.t7e.t8u",
						"pastela": "t51.t7e.t8v",
						"poser": "t51.t7e.t8w",
						"metasequoia": "t51.t7e.t8x",
						"blender": "t51.t7e.t8y",
						"shade": "t51.t7e.t8z",
						"threeDsMax": "t51.t7e.t90",
						"dazStudio": "t51.t7e.t91",
						"zBrush": "t51.t7e.t92",
						"comiPo": "t51.t7e.t93",
						"maya": "t51.t7e.t94",
						"lightwave3D": "t51.t7e.t95",
						"hexagonKing": "t51.t7e.t96",
						"vue": "t51.t7e.t97",
						"sketchUp": "t51.t7e.t98",
						"cinema4D": "t51.t7e.t99",
						"xsi": "t51.t7e.t9a",
						"carrara": "t51.t7e.t9b",
						"bryce": "t51.t7e.t9c",
						"strata": "t51.t7e.t9d",
						"sculptris": "t51.t7e.t9e",
						"modo": "t51.t7e.t9f",
						"animationMaster": "t51.t7e.t9g",
						"vistaPro": "t51.t7e.t9h",
						"sunny3D": "t51.t7e.t9i",
						"threeDCoat": "t51.t7e.t9j",
						"paint3D": "t51.t7e.t9k",
						"vRoidStudio": "t51.t7e.t9l",
						"mechanicalPencil": "t51.t7e.t9m",
						"pencil": "t51.t7e.t9n",
						"ballpointPen": "t51.t7e.t9o",
						"thinMarker": "t51.t7e.t9p",
						"coloredPencil": "t51.t7e.t9q",
						"copicMarker": "t51.t7e.t9r",
						"dipPen": "t51.t7e.t9s",
						"watercolors": "t51.t7e.t9t",
						"brush": "t51.t7e.t9u",
						"calligraphyPen": "t51.t7e.t9v",
						"feltTipPen": "t51.t7e.t9w",
						"magicMarker": "t51.t7e.t9x",
						"watercolorBrush": "t51.t7e.t9y",
						"paint": "t51.t7e.t9z",
						"acrylicPaint": "t51.t7e.ta0",
						"fountainPen": "t51.t7e.ta1",
						"pastels": "t51.t7e.ta2",
						"airbrush": "t51.t7e.ta3",
						"colorInk": "t51.t7e.ta4",
						"crayon": "t51.t7e.ta5",
						"oilPaint": "t51.t7e.ta6",
						"coupyPencil": "t51.t7e.ta7",
						"gansai": "t51.t7e.ta8",
						"pastelCrayons": "t51.t7e.ta9"
					},
				},
				novels: {
					"textLength": "t33.tho.tuj", //本文の長さ,  Any {{ subject }}
					"any": "t33.tho.tuf", //すべての{{ subject }},  Any
					"SS": "t33.tho.tuo", //SS（{{ max }} {{ unit }}以下）,  SS ({{ max }} {{ unit }} or less)
					"short": "t33.tho.tup", //短編（{{ min }} - {{ max }} {{ unit }}）,  Short ({{ min }} to {{ max }} {{ unit }})
					"medium": "t33.tho.tuq", //中編（{{ min }} - {{ max }} {{ unit }}）,  Medium ({{ min }} to {{ max }} {{ unit }})
					"long": "t33.tho.tur", //長編（{{ min }} {{ unit }}以上）,  Long ({{ min }} {{ unit }} or more)
					"subjects": {
						"characters": "t11s.t1ce.t1cx.tuj", //文字数,  Characters
						"words": "t11s.t1ce.t1cx.tuj", //単語数,  Words
						"readingTime": "t11s.t1ce.t1cx.t1q", //読了目安,  Reading time
					},
					"units": {
						"characterCount": "t33.tho.tdc", //文字,  Character count
						"wordCount": "t33.tho.tug", //単語,  Word count
						"min": "t33.tho.tuh", //分,  min
					},
					"onlyOriginalWorks": "t3jp.t3nz", //オリジナル作品のみ,  Only original works
					"groupIntoSeries": "tee.tho.tiq", //シリーズ単位で表示,  Group into series
				}
			},
			"profilePopUp": {
				"viewProfile": "t3jp.t3qw", //プロフィールを見る,  View profile
				"follow": "t3jp.t3qa", //フォローする,  Follow
				"flowing": "t3jp.t3qg", //フォロー中,  Following
				"mute": "t3jp.t3re", //ミュート,  Mute
				"muted": "t3jp.t3rh", //ミュート中,  Muted
				"twitter": "t3jp.t3z9", //Twitter,  Twitter
				"notifications": {
					"failedToFollow": "t3jp.t3qb", //フォローに失敗しました,  Failed to follow
					"failedToUnfollow": "t3jp.t3qc" //フォローの解除に失敗しました,  Failed to unfollow
				}
			},
			"bookmark": {
				"bookmark": "t3jp.t3qk", //ブックマーク,  Bookmark
				"public": "t0.t2w.t2x", //公開,  Public
				"private": "t0.t2w.t2y", //非公開,  Private
				"bookmarkTags": "t2t.t1ok", //ブックマークタグ一覧,  Bookmark tags
				"deletedOrPrivate": "t2t.t1p0" //削除済み<br/>もしくは非公開,  Deleted<br/>or private
			}
		}

		// i18nWordListを再帰的に処理してフラットなマップに変換
		function flattenI18nWordList(obj, parentKey = ''){
			const result = {};
			for(const key in obj){
				const fullKey = parentKey ? `${parentKey}.${key}` : key;
				const value = obj[key];
				if(typeof value === 'string'){
					// 値が文字列（パス）の場合
					result[fullKey] = value;
				}else if(typeof value === 'object' && value !== null){
					// ネストされたオブジェクトの場合、再帰的に処理
					Object.assign(result, flattenI18nWordList(value, fullKey));
				}
			}
			return result;
		}

		// ネストされた構造を持つオブジェクトを作成
		function setNestedValue(obj, path, value){
			const keys = path.split('.');
			let current = obj;
			for(let i = 0; i < keys.length - 1; i++){
				const key = keys[i];
				if(!(key in current)){
					current[key] = {};
				}
				current = current[key];
			}
			current[keys[keys.length - 1]] = value;
		}

		const flattenedWordList = flattenI18nWordList(i18nWordList);
		const langs = Object.keys(langData);
		
		for(let i = 0; i < langs.length; i++){
			const lang = langs[i];
			const data = langData[lang];
			const outputData = {};
			
			for(const keyPath in flattenedWordList){
				const valuePath = flattenedWordList[keyPath];
				const value = getValueFromObjectByPath(data, valuePath, null);
				if(["ja", "en"].includes(lang) && value == null){
					console.log(`\x1b[31mLang: ${lang}, Key: ${keyPath}, Path: ${valuePath}, Value: ${value}\x1b[0m`);
				}
				if(value != null){
					setNestedValue(outputData, keyPath, value);
				}
			}
			outputData['データチェック'] = 'ごめん。わたし、もう、絶対に、幸せになんてなれないんだ';
			const outputPath = path.join(__dirname, 'i18n', `${lang}.json`);
			fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2) + '\n', 'utf-8');
			console.log(`i18n file generated for ${lang} at ${outputPath}`);
		}
	}
	async function prepareFiles(){
		const localeFileListPath = path.join(__dirname, 'sources.json');
		const localeFileList = JSON.parse(fs.readFileSync(localeFileListPath, 'utf-8'));
		const langData = {};
		for(const lang in localeFileList){
			let targetLangData = {};
			for(const url of localeFileList[lang]){
				const langDirPath = path.join(__dirname, 'cache', url.split('/').pop());
				let data;
				if(!fs.existsSync(langDirPath)){
					data = await getData(url);
					fs.writeFileSync(langDirPath, data, 'utf-8');
					console.log(`Downloaded and saved: ${lang} - ${url}`);
				}else{
					data = fs.readFileSync(langDirPath, 'utf-8');
					console.log(`Loaded from cache file: ${lang} - ${url}`);
				}
				const match = data.match(/JSON\.parse\('(.*)'\)/);
				if(match){
					const parsedData = eval(match[0]);
					targetLangData = {...targetLangData, ...parsedData};
				}else{
					throw new Error(`Failed to extract JSON data from ${url}`);
				}
				const outputPath = path.join(__dirname, 'allData', `${lang}.json`);
				fs.writeFileSync(outputPath, JSON.stringify(targetLangData, null, 2) + '\n', 'utf-8');
				console.log(`Combined locale data saved for ${lang} at ${outputPath}`);
			}
			langData[lang] = targetLangData;
		}
		return langData;
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
	async function getData(url){
		const response = await axios.get(url, {
			headers: {
				'User-Agent': 'Mozilla/5.0',
				'Accept': 'text/javascript, */*; q=0.01',
				'Accept-Encoding': 'gzip, deflate, br',
				'Connection': 'keep-alive',
				'Referer': 'https://www.pixiv.net/',
			}
		});
		const data = response.data;
		return data;
	}
	main();
})();

