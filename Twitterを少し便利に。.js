// ==UserScript==
// @name			Twitterを少し便利に。
// @name:ja			Twitterを少し便利に。
// @name:en			Make Twitter little useful.
// @namespace		https://greasyfork.org/ja/users/1023652
// @version			1.0.1.29
// @description			私の作ったスクリプトをまとめたもの。と追加要素。
// @description:ja			私の作ったスクリプトをまとめたもの。と追加要素。
// @description:en			A compilation of scripts I've made.
// @author			ゆにてぃー
// @match			https://twitter.com/*
// @match			https://mobile.twitter.com/*
// @match			https://x.com/*
// @match			https://X.com/*
// @connect			twitter.com
// @connect			api.twitter.com
// @connect			api.fanbox.cc
// @connect			pbs.twimg.com
// @connect			abs.twimg.com
// @connect			video.twimg.com
// @connect			discord.com
// @connect			booth.pm
// @connect			carrd.co
// @connect			creatorlink.net
// @connect			fantia.jp
// @connect			html.co.jp
// @connect			linktr.ee
// @connect			lit.link
// @connect			potofu.me
// @connect			profcard.info
// @connect			skeb.jp
// @connect			sketch.pixiv.net
// @connect			tumblr.com
// @connect			twpf.jp
// @connect			lab.syncer.jp
// @connect			geek-website.com
// @connect			ci-en.dlsite.com
// @connect			dl.dropboxusercontent.com
// @icon			data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJkSURBVHgB7VZBbtpQEH3zIW0WVYuXVaH4Bs0NSk4AOUFhEarskhMknIDsqkKlcIT0BNAT1D1B3ZJK3dmVuirwp/MhVmzAxiagKBJv9+ePZ97M/JkxsMMODwzChlD84FWQp3MxeCDHAhiumB+MJrr1+8Ryw3p/9+H4DctfIPCq49Xlw8Kv99YlMuB19885gy/i7llziwGfFFWJyR02XzSCuwiBUse7BlFVaz5LS8KQVkRXaXRJsqImfDjKSZBNyzEyFWFKVJ4KFbWLElUao6KbSk8i9TXgTPaorxTskPwOxa7/9baGt4zg8oQbNyfWYJlRU0/KUx9ZwNwYNq1ecFRzl18QpW0bB0Ks//KjV1uwlbuLJA3GxEdh5wb5yGEPl3qMd2xecYQHKnlFlVLX95kxYCFKGg5IlU2a0uLpCM68LEJA+sJ/Dm6Jy3aMjQIRakRUm+UuvfOp/X34iQSejeFo0Hdx4optG5uFH/R+GHNvANcm3VtwLs+Lvy2TRwhIOnrYHhysIuDKcCDwGbYAjglOzQt+HssElF6dvoNNOZeuCSbfSgIGMjILMo4/ExZf7TqghNLmlwm1gpSC2tmaLAZMvWGz0Iu7XpqBm2NrQNN5cD+Y5ZOTdZyok3RZMusZOJUN+QZrQFb0oQkG6xIIYHe8A03Unx/Ryd6jS2ctAsbxmFRVynGKlM5na5ePVkUe0p+h9MmraS2zXqYgmSWjOPtElHbLTVB3Q79gqQlMScxqXpeav0UWiGMmXKSNOpZAAPvKs/U/1MRoxRxl+5WD+psUy2D5IdmRVoWjnqDnLlkyO+zwaPAf1zXwZL751PUAAAAASUVORK5CYII=
// @grant			GM_xmlhttpRequest
// @grant			GM_registerMenuCommand
// @license			MIT
// @run-at			document-idle
// ==/UserScript==

(async function(){
	'use strict';
	const commonselectors = {
		'tweet_field': 'article[data-testid="tweet"]',
		'retweeted': '[data-testid="socialContext"]',
		'liked_color': 'r-vkub15',
		'liked': 'M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z',
		'info_field': '.r-1d09ksm.r-1471scf.r-18u37iz.r-1wbh5a2',
		'click_media_field': '.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-dnmrzs.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010',
		'profile_field_Header_Items': '[data-testid="UserProfileHeader_Items"]',
		'link': {
			nomal: "css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1loqt21",
			hovered: "css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1ny4l3l r-1ddef8g r-tjvw6i r-1loqt21"
		},
		'engagementsTextColor': {
			"0": {"count": "rgb(15, 20, 25)","text": "rgb(83, 100, 113)"},
			"1": {"count": "rgb(247, 249, 249)","text": "rgb(139, 152, 165)"},
			"2": {"count": "rgb(231, 233, 234)","text": "rgb(113, 118, 123)"},
		},
	};
	const desktop_selectors = {
		'time_line_media_field': '.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-11wrixw.r-61z16t.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010',
		'media_field': '.r-9aw3ui.r-1s2bzr4',
		'profileField': '.r-1ifxtd0.r-ymttw5.r-ttdzmv',
		'followersLink': '.r-bcqeeo.r-qvutc0.r-1tl8opc.r-a023e6.r-rjixqe.r-16dba41.r-1loqt21',
	};
	const mobile_selectors = {
		'time_line_media_field': '.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010',
		'media_field': '.r-9aw3ui.r-a1ub67 > .r-9aw3ui',
		'profileField': '.r-ku1wi2.r-1j3t67a.r-1b3ntt7',
		'followersLink': '.r-bcqeeo.r-qvutc0.r-1tl8opc.r-1b43r93.r-hjklzo.r-16dba41.r-1loqt21',
	};
	const deny_names = ["home", "explore", "notifications", "messages", "i", "settings", "tos", "privacy", "compose", "search"];
	const denyNamesRegex = new RegExp(`https?://[\\w]{1,}\\.com/((?!${deny_names.join('|')})[^/]+)`, 'i');
	let currentUrl = document.location.href;
	let updating = false;
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;
	const timeZoneObject = Intl.DateTimeFormat().resolvedOptions();
	let env_selector;
	let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
	if(isMobile){
		env_selector = {...commonselectors,...mobile_selectors};
	}else{
		env_selector = {...commonselectors,...desktop_selectors};
	}
	let fetchedTweets = {};
	let fetchedTweetsUserData = {};
	let fetchedTweetsUserDataByUserName = {};
	let isFunctionRunning = {
		Hello_tweet_where_are_you_from: false,
		Engagement_Restorer: false,
		Show_all_Medias: false,
	};
	let storedSettings = {
		'Make_Twitter_little_useful': JSON.parse(localStorage.getItem('Make_Twitter_little_useful') || '{}'),
		'webhook_brings_tweets_to_discord': JSON.parse(localStorage.getItem('webhook_brings_tweets_to_discord') || '{}'),
		'Hello_tweet_where_are_you_from': JSON.parse(localStorage.getItem('Hello_tweet_where_are_you_from') || '{}'),
		'Show_me_your_Pixiv': JSON.parse(localStorage.getItem('Show_me_your_Pixiv') || '{}'),
		'Note_Tweet_expander': JSON.parse(localStorage.getItem('Note_Tweet_expander') || '{}'),
		'sneakilyFavorite': JSON.parse(localStorage.getItem('sneakilyFavorite') || '{}'),
		'Engagement_Restorer': JSON.parse(localStorage.getItem('Engagement_Restorer') || '{}'),
		'Show_all_Medias': JSON.parse(localStorage.getItem('Show_all_Medias') || '{}'),
	};
	let script_settings = {};
	script_settings['webhook_brings_tweets_to_discord'] = {
		"displayMethod": storedSettings['webhook_brings_tweets_to_discord'].displayMethod || 'method1',
		"lang": storedSettings['webhook_brings_tweets_to_discord'].lang || GetCookie("lang") || 'en',
		"defaultWebhook": storedSettings['webhook_brings_tweets_to_discord'].defaultWebhook,
		"downloadVideo": storedSettings['webhook_brings_tweets_to_discord'].downloadVideo || false,
		"webHooks": (function(data){
				let webhooks = {};
				if(data && Array.isArray(data)){
					data.forEach(item => {
						if(item.name && item.value){
							webhooks[item.name] = item.value;
						}
					});
				}
				return webhooks;
			})(storedSettings['webhook_brings_tweets_to_discord'].data),
	};
	script_settings['Make_Twitter_little_useful'] = {
		"featuresToggle": {
			"webhook_brings_tweets_to_discord": storedSettings.Make_Twitter_little_useful?.featuresToggle?.webhook_brings_tweets_to_discord || false,
			"Engagement_Restorer": storedSettings.Make_Twitter_little_useful?.featuresToggle?.Engagement_Restorer || false,
			"sneakilyFavorite": storedSettings.Make_Twitter_little_useful?.featuresToggle?.sneakilyFavorite || false,
			"Hello_tweet_where_are_you_from": storedSettings.Make_Twitter_little_useful?.featuresToggle?.Hello_tweet_where_are_you_from || false,
			"Note_Tweet_expander": storedSettings.Make_Twitter_little_useful?.featuresToggle?.Note_Tweet_expander || false,
			"Show_me_your_Pixiv": storedSettings.Make_Twitter_little_useful?.featuresToggle?.Show_me_your_Pixiv || false,
			"showFollowers": storedSettings.Make_Twitter_little_useful?.featuresToggle?.showFollowers || false,
			"hideAnalytics": storedSettings.Make_Twitter_little_useful?.featuresToggle?.hideAnalytics || false,
			"shareTweet_Restorer_for_mobile": storedSettings.Make_Twitter_little_useful?.featuresToggle?.shareTweet_Restorer_for_mobile || false,
			"Show_all_Medias": storedSettings.Make_Twitter_little_useful?.featuresToggle?.Show_all_Medias || false,
			"show_me_big_pics": storedSettings.Make_Twitter_little_useful?.featuresToggle?.show_me_big_pics || false,
		},
		"lang": storedSettings.Make_Twitter_little_useful?.featuresToggle?.lang || GetCookie("lang") || "en",
	};
	script_settings['Show_all_Medias'] = {
		"displayMethod": typeof storedSettings.Show_all_Medias?.displayMethod === 'number' ? storedSettings.Show_all_Medias.displayMethod : 1,
		"onlyRemoveBlur": storedSettings.Show_all_Medias?.onlyRemoveBlur || false,
		"removeBlur": storedSettings.Show_all_Medias?.removeBlur || false,
	}
	let scriptDataStore = {
		"Show_me_your_Pixiv": JSON.parse(localStorage.getItem('user_pixvi_link_collection') || "{}"),
		"Show_me_your_Pixiv_dataBase": (await getFromIndexedDB('Show_me_your_Pixiv','pixiv_link_collection_dataBase')|| {}),
		"Show_all_Medias": {},
		"createTwitterArticle": {}
	};
	let Text = {};
	Text.ja = {
		"settings": "の設定",
		"close": "閉じる",
		"general": "全体",
		"featureToggle": "使う機能の切り替え",
		"style": {
			"functionName": "スタイル",
		},
		"Advanced": {
			"functionName": "高度な設定",
			"invalidJson": "不正なJSONです。",
			"ExportSettings": "設定の書き出し",
			"ImportSettings": "設定の読み込み",
			"Export": "エクスポート",
			"Inport": "インポート",
		},
		"ForDebug": {
			"functionName": "デバッグ用",
			"get": "取得",
		},
		"webhook_brings_tweets_to_discord": {
			"functionName": "WebhookがTweetを連れてくるわ今日も",
			"link_to_tweet": "ツイートへ",
			"link_to_image": "画像へのリンク",
			"engagement": "エンゲージメント",
			"likes": "いいね",
			"retweets": "リツイート",
			"units": "万",
			"roundingScale": 10000,
			"decimalPlaces": 2,
			"postedDate": "投稿日時",
			"quotedTweet": "↓♻️引用元♻️↓",
			"submit": "送信",
			"display_everywhere": "どこでも表示する",
			"tweet_details_only": "詳細表示したときだけ",
			"when_webhook_name_duplicate": "Webhookの名前が重複しています。",
			"cancel": "キャンセル",
			"save_settings": "設定を保存",
			"display_method": "表示方法",
			"default": "デフォルトの",
			"language": "送信時言語",
			"webhook_not_set": "ウェブフックが設定されていません。",
			"when_webhook_url_invalid": "正しいDiscordのWebhookのURLではありません。",
			"when_post_failed": "以下のURLのポストに失敗しました。",
			"various_links": "各種リンク",
			"Video_Download_Option": "動画をダウンロードしてファイルとして送信する",
			"complete": "完了",
		},
		"Engagement_Restorer": {
			"functionName": "返ってこい！リツイート欄！",
			"retweet": "リツイート",
			"quoted": "件の引用",
			"like": "いいね",
			"units": "万",
			"roundingScale": 10000,
			"decimalPlaces": 2,
		},
		"sneakilyFavorite": {
			"functionName": "こっそりいいね",
			"favorite": "いいね！",
		},
		"Hello_tweet_where_are_you_from": {
			"functionName": "あなたのツイートはどこから？",
		},
		"Note_Tweet_expander": {
			"functionName": "長いツイートをTLで展開",
		},
		"Show_me_your_Pixiv": {
			"functionName": "PixivのリンクをTweetに添えて",
			"collectionMethod": "Pixivリンクの収集方法",
			"everywhere": "どこでも",
			"atProfile": "プロフィールで",
			"never": "新規では収集しない",
			"faildAddPixivUrlList": "データのダウンロードに失敗しました",
			"successAddPixivUrlList": "データのダウンロードに成功しました",
			"addPixivUrlListTitle": "URL対応表をインポートする"
		},
		"showFollowers": {
			"functionName": "フォロワーを直接表示",
		},
		"hideAnalytics": {
			"functionName": "アナリティクスを非表示にする",
		},
		"shareTweet_Restorer_for_mobile": {
			"functionName": "ツイートを共有ボタンを復活させる(モバイル用)",
		},
		"Show_all_Medias": {
			"functionName": "メディア欄に全ての画像を表示",
			"units": "万",
			"roundingScale": 10000,
			"decimalPlaces": 2,
			"expand": "展開",
			"likeTweet": "ツイートのように",
			"removeBlur": "R-18のモザイクを削除(メディア欄のみ)",
			"onlyRemoveBlur": "モザイクの削除のみ",
		},
		"show_me_big_pics": {
			"functionName": "でかい画像を見せないさい"
		},
	};

	Text.en = {
		"settings": "Settings",
		"close": "Close",
		"general": "General",
		"featureToggle": "Feature Toggle",
		"style": {
			"functionName": "style",
		},
		"Advanced": {
			"functionName": "Advanced",
			"invalidJson": "Invalid JSON",
			"ExportSettings": "Export Settings",
			"ImportSettings": "Import Settings",
			"Export": "Export",
			"Inport": "Inport",
		},
		"ForDebug": {
			"functionName": "Debug",
			"get": "get",
		},
		"webhook_brings_tweets_to_discord": {
			"functionName": "webhook brings tweets to discord",
			"link_to_tweet": "To Tweet",
			"link_to_image": "Link to Image",
			"engagement": "Engagement",
			"likes": "Likes",
			"retweets": "Retweets",
			"units": "k",
			"roundingScale": 1000,
			"decimalPlaces": 1,
			"postedDate": "Posted Date",
			"quotedTweet": "↓♻️Quoted Tweet♻️↓",
			"submit": "submit",
			"display_everywhere": "Display everywhere",
			"tweet_details_only": "Tweet Details Only",
			"when_webhook_name_duplicate": "Duplicate webhook name.",
			"cancel": "cancel",
			"save_settings": "saveSettings",
			"display_method": "Display Method",
			"default": "default",
			"language": "use language when sending",
			"webhook_not_set": "Webhook is not set.",
			"when_webhook_url_invalid": "It is not a valid Discord Webhook URL.",
			"when_post_failed": "Failed to post the following URL.",
			"various_links": "Various Links",
			"Video_Download_Option": "Download videos and send them.",
			"complete": "OK",
		},
		"Engagement_Restorer": {
			"functionName": "Engagement Restorer",
			"retweet": "Retweets",
			"quoted": "Quotes",
			"like": "Likes",
			"units": "k",
			"roundingScale": 1000,
			"decimalPlaces": 1,
		},
		"sneakilyFavorite": {
			"functionName": "sneakilyFavorite",
			"favorite": "favorite！",
		},
		"Hello_tweet_where_are_you_from": {
			"functionName": "Hello tweet where are you from?",
		},
		"Note_Tweet_expander": {
			"functionName": "Note Tweet expander",
		},
		"Show_me_your_Pixiv": {
			"functionName": "Show me your Pixiv",
			"collectionMethod": "Pixiv link collection method",
			"everywhere": "Everywhere",
			"atProfile": "At profile",
			"never": "never",
			"faildAddPixivUrlList": "Faild download pixiv url list",
			"successAddPixivUrlList": "Success download pixiv url list",
			"addPixivUrlListTitle": "Importing URL correspondence table"
		},
		"showFollowers": {
			"functionName": "showFollowers",
		},
		"hideAnalytics": {
			"functionName": "hideAnalytics",
		},
		"shareTweet_Restorer_for_mobile": {
			"functionName": "shareTweet Restorer(for mobile)",
		},
		"Show_all_Medias": {
			"functionName": "Show all Medias",
			"units": "k",
			"roundingScale": 1000,
			"decimalPlaces": 1,
			"expand": "expand",
			"likeTweet": "like tweet",
			"removeBlur": "Remove R-18 blur (media section only)",
			"onlyRemoveBlur": "Only remove R-18 blur",
		},
		"show_me_big_pics": {
			"functionName": "show me big pics"
		},
	};

	let env_Text = Text[script_settings.lang] || Text.ja;

	async function main(refresh = false){
		const selector = refresh ? 'article[data-testid="tweet"]' : 'article[data-testid="tweet"]:not([mtlu_checked="true"])';
		const tweets = Array.from(reactRoot.querySelectorAll(selector)).map(tweet => {
			tweet.setAttribute('mtlu_checked', "true");
			const link = tweet.querySelector(`[data-testid="User-Name"] a[aria-label], ${env_selector.info_field} a[aria-label]`);
			if(link){
				const match = link.href.match(/[\w]{1,}\.com\/[^/]+\/status\/(\d+)/);
				if(match){
					return { id: match[1], link: link.href, node: tweet, screenName: (tweet.querySelector('[data-testid="User-Name"]>div>div>a')?.href?.split("/")[3] || undefined) };
				}
			}
		}).filter(Boolean);
		//console.log(tweets)
		const featurestoggle = script_settings.Make_Twitter_little_useful.featuresToggle;
		const isTweetDetail = !!currentUrl.match(/[\w]{1,}\.com\/[\w]*\/status\/[0-9]*/);
		if(isTweetDetail && featurestoggle.Hello_tweet_where_are_you_from){
			Hello_tweet_where_are_you_from();
		}
		if(tweets && featurestoggle.Note_Tweet_expander){
			Note_Tweet_expander(tweets);
		}
		if(tweets && featurestoggle.Show_me_your_Pixiv){
			Show_me_your_Pixiv(tweets);
		}
		if(isTweetDetail && featurestoggle.Engagement_Restorer){
			Engagement_Restorer();
		}
		if(tweets && featurestoggle.sneakilyFavorite){
			sneakilyFavorite(tweets);
		}
		if(tweets && featurestoggle.webhook_brings_tweets_to_discord){
			webhook_brings_tweets_to_discord(tweets);
		}
		if(featurestoggle.showFollowers){
			showFollowers();
		}
		if(tweets && featurestoggle.hideAnalytics){
			hideAnalytics(tweets);
		}
		if(isMobile && featurestoggle.shareTweet_Restorer_for_mobile){
			shareTweet_Restorer_for_mobile(tweets);
		}
		if(currentUrl.match(/[\w]{1,}\.com\/([\w]*\/media|search\?q\=.*&f=media)/) && featurestoggle.Show_all_Medias){
			Show_all_Medias(currentUrl);
		}
		/*
		if(tweets && featurestoggle.show_me_big_pics){
			show_me_big_pics(tweets);
		}
		*/
		//if(currentUrl.match(/https?:\/\/twitter\.com\/[\w]*\/status\/[0-9]*/))console.log(await waitForTweetData(extractTweetId(currentUrl)))
	}
	async function show_me_big_pics(tweets){
		tweets.forEach(tweet=>{
			const imgNode = tweet.node.querySelectorAll(`${env_selector.media_field} .r-16y2uox.r-1pi2tsx.r-13qz1uu a [data-testid="tweetPhoto"] img`);
			if(!imgNode)return;
			imgNode.forEach(async (node)=>{
				const imageUrl = node.src;
				node.src = imageUrl.replace(/\&name\=.*/,'&name=orig');
			});
		});
	}
	async function Show_all_Medias(triggeredUrl){
		if(isFunctionRunning.Hello_tweet_where_are_you_from)return;
		isFunctionRunning.Hello_tweet_where_are_you_from = true;
		try{
			if(script_settings.Show_all_Medias.displayMethod === 0 || script_settings.Show_all_Medias.onlyRemoveBlur){
				expand();
			}else{
				likeTweet();
			}
		}catch(error){
			console.error(error);
		}finally{
			isFunctionRunning.Hello_tweet_where_are_you_from = false;
		}
		script_settings.Show_all_Medias.removeBlur
		function expand(){
			const mediaPlace = document.querySelector('[data-testid="primaryColumn"] section');
			const madiaRow = mediaPlace.querySelectorAll(`.r-18u37iz.r-9aw3ui.r-1537yvj.r-14gqq1x:not(.Show_all_Medias_checked)`);
			const blurSvgPath = 'path[d="M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z"]';
			if(madiaRow.length === 0)return;
			const screenName = currentUrl.split('/')[3];
			madiaRow.forEach(n=>{
				n.classList.add('Show_all_Medias_checked');
				n.style.flexWrap = 'wrap';
			});
			const mediaNodes = Array.from(mediaPlace.querySelectorAll(`li:not(.Show_all_Medias_checked)`)).filter(node => {
				node.classList.add('Show_all_Medias_checked');
				const blurSvgNode = node.querySelector(blurSvgPath);
				if(script_settings.Show_all_Medias.removeBlur && blurSvgNode){
					blurSvgNode.parentNode.parentNode.parentNode.querySelector('[role="button"]').click();
				}
				return node.querySelector('path[d="M2 8.5C2 7.12 3.12 6 4.5 6h11C16.88 6 18 7.12 18 8.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C3.12 22 2 20.88 2 19.5v-11zM19.5 4c.28 0 .5.22.5.5v13.45c1.14-.23 2-1.24 2-2.45v-11C22 3.12 20.88 2 19.5 2h-11c-1.21 0-2.22.86-2.45 2H19.5z"]');
			});
			if(mediaNodes.length === 0 || script_settings.Show_all_Medias.onlyRemoveBlur)return;
			mediaNodes.forEach(node => {
				const svgElement = node.querySelector('svg');
				const numberSpan = document.createElement('span');
				numberSpan.textContent = '1';
				numberSpan.style.position = 'absolute';
				numberSpan.style.color = 'black';
				numberSpan.style.left = 'calc(87.3%)';
				numberSpan.style.top = 'calc(86.3%)';
				numberSpan.className = 'indexNum';
				svgElement.parentNode.appendChild(numberSpan);
			});
			mediaNodes.forEach(async n=>{
				n.classList.add('Show_all_Medias_checked');
				const parent = n.parentNode;
				const mediaLinkNode = n.querySelector('a');
				const tweetID = mediaLinkNode.href.match(/[\w]{1,}\.com\/[^/]+\/status\/(\d+)/)[1];
				if(!fetchedTweets[tweetID])await fetchAndProcessTwitterApi('userMedia',screenName);
				const tweetData = await getTweetData(tweetID,"graphQL");
				const mediaData = tweetData.legacy.entities.media;
				if(mediaData.length == 1)return;
				let beforeNode = n;
				for(let i = 1;i<mediaData.length;i++){
					const currentMedia = mediaData[i];
					const currentImage = currentMedia.media_url_https;
					const currentImageExtention = currentImage.split('.').pop();
					const clonedNode = n.cloneNode(true);
					const clonedNodeLinkNode = clonedNode.querySelector('a');
					const clonedNodeImage = clonedNodeLinkNode.querySelector('img');
					const clonedNodeDisplayImage = clonedNodeImage.previousElementSibling;
					clonedNode.id = clonedNode.id + `_${i+1}`;
					if(!currentMedia.type === "photo")clonedNodeLinkNode.appendChild(makeVideoDurationElement(currentMedia.video_info?.duration_millis,(currentMedia.type === "animated_gif")));
					clonedNodeLinkNode.href = `https://twitter.com/${screenName}/status/${tweetID}/${currentMedia.type === "video" ? 'video' : 'photo'}/${i+1}`;
					clonedNodeImage.src = `${currentImage.replace('.' + currentImageExtention,'')}?format=${currentImageExtention}&name=orig`;
					clonedNodeDisplayImage.style.backgroundImage = `url(${currentImage.replace('.' + currentImageExtention,'')}?format=${currentImageExtention}&name=small)`;
					clonedNodeLinkNode.addEventListener('click',e=>{
						e.preventDefault();
						displayTarget(mediaLinkNode,i);
					});
					clonedNode.querySelector('.indexNum').textContent = (i+1);
					parent.insertBefore(clonedNode, beforeNode.nextSibling);
					beforeNode = clonedNode;
					const blurSvgNode = clonedNode.querySelector(blurSvgPath);
					if(blurSvgNode){
						const tmpNode = blurSvgNode.parentNode.parentNode.parentNode;
						tmpNode.querySelector('[role="button"]').addEventListener('click',e=>{
							const tmpNode2 = tmpNode.parentNode.querySelector('div');
							tmpNode.remove();
							tmpNode2.className = tmpNode2.classList[0];
						});
					}
				}
			});
		}
		function likeTweet(){
			const mediaPlace = document.querySelector('[data-testid="primaryColumn"] section');
			const madiaRow = mediaPlace?.querySelectorAll(`.r-18u37iz.r-9aw3ui.r-1537yvj.r-14gqq1x`);
			if(!(madiaRow?.length > 0))return;
			let mediaNodes = [];
			madiaRow.forEach(node => {
				if(!node.querySelector('[Show_all_Medias_Check="true"]')){
					const checkNode = document.createElement('div');
					checkNode.setAttribute('Show_all_Medias_Check','true');
					node.appendChild(checkNode);
					node.style.flexWrap = 'wrap';
					node.style.padding = '0px';
					node.style.margin = '0px';
					node.style.gap = '0px';
					mediaNodes.push(...node.querySelectorAll('li'));
				}
			});
			if(mediaNodes.length === 0)return;
			const processNode = async (n)=>{
				const mediaLinkNode = n.querySelector('a');
				const tweetID = mediaLinkNode.href.match(/[\w]{1,}\.com\/[^/]+\/status\/(\d+)/)[1];
				const screenName = mediaLinkNode.href.match(/[\w]{1,}\.com\/(\w+)/)[1];
				if(!fetchedTweets[tweetID]){
					if(triggeredUrl.match(/[\w]{1,}\.com\/([\w]*\/media)/))await fetchAndProcessTwitterApi('userMedia', screenName);
					//if(triggeredUrl.match(/search\?q\=.*&f=media/))await fetchAndProcessTwitterApi('mediaSearch', (new URL(triggeredUrl)).searchParams.get('q'));
				}
				n.style.width = "100%";
				let tweetData = await getTweetData(tweetID, "graphQL");
				if(n.querySelector('path[d="M2 8.5C2 7.12 3.12 6 4.5 6h11C16.88 6 18 7.12 18 8.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C3.12 22 2 20.88 2 19.5v-11zM19.5 4c.28 0 .5.22.5.5v13.45c1.14-.23 2-1.24 2-2.45v-11C22 3.12 20.88 2 19.5 2h-11c-1.21 0-2.22.86-2.45 2H19.5z"]')){
					if(!(tweetData.extended_entities?.media?.length >= 2))tweetData = await getTweetData(tweetID, "graphQL");
				}
				let article = await createTwitterArticle(tweetData, tweetID, n, true);
				try{
					const articleImages = article.querySelectorAll('[data-testid="tweetPhoto"]');
					for(let i=0; i<articleImages.length; i++){
						if(articleImages[i].querySelector('img')){
							articleImages[i].addEventListener('click', e=>{
								e.preventDefault();
								displayTarget(mediaLinkNode, i);
							});
						}
					}
					article.addEventListener('click',async e=>{
						const ctaIdValues = ['Name-Place', 'mediaRoot', 'footer', 'quoted-place'];
						if(e.target.tagName === 'A' || e.target.closest('a'))return;
						const hasCtaId = ctaIdValues.some(ctaIdValue =>
							e.target.getAttribute('cta-id') === ctaIdValue || e.target.closest(`[cta-id="${ctaIdValue}"]`)
						);
						if(hasCtaId)return;
						mediaLinkNode.click();
						if(isMobile){

						}else{
							(await wait_load_Element(`div[data-viewportview="true"] a[href="/${screenName}/status/${tweetID}"]`,20,50,'querySelector')).click()
						}
					});
				}catch(error){
					console.error(error);
				}
				n.firstChild.style.display = "none";
				n.appendChild(article);
			};
			Promise.all(Array.from(mediaNodes).map(n => processNode(n)));
		}
		async function displayTarget(node,page){
			node.click();
			await wait_load_Element('[data-testid="swipe-to-dismiss"]', 100, 25, 'querySelector');
			for(let i=1;i<=page;i++){
				simulateKey(39, 'keydown', document.body);
				//(await wait_load_Element('[data-testid="Carousel-NavRight"]', 100, 25, 'querySelector')).click();
			}
		}
		function makeVideoDurationElement(duration,isGif){
			let text;
			if(isGif){
				text = "GIF"
			}else{
				const durationSeconds = Math.floor(duration / 1000);
				const min = Math.floor(durationSeconds / 60);
				const sec = durationSeconds % 60;
				text = `${min}:${sec.toString().padStart(2, '0')}`;
			}
			const outerDiv = document.createElement('div');
			outerDiv.classList.add('r-1awozwy', 'r-k200y', 'r-z2wwpe', 'r-z80fyv', 'r-1777fci', 'r-s1qlax', 'r-13w96dm', 'r-1nlw0im', 'r-u8s1d', 'r-1r74h94', 'r-633pao');

			const innerDiv = document.createElement('div');
			innerDiv.setAttribute('dir', 'ltr');
			innerDiv.style.color = 'rgb(255, 255, 255)';
			innerDiv.style.textOverflow = 'unset';
			innerDiv.classList.add('r-bcqeeo', 'r-qvutc0', 'r-1tl8opc', 'r-q4m81j', 'r-n6v787', 'r-1cwl3u0', 'r-16dba41', 'r-lrvibr');

			const span = document.createElement('span');
			span.style.textOverflow = 'unset';
			span.classList.add('r-bcqeeo', 'r-qvutc0', 'r-1tl8opc');
			span.textContent = text;

			innerDiv.appendChild(span);
			outerDiv.appendChild(innerDiv);
			return outerDiv;
		}
	}
	function shareTweet_Restorer_for_mobile(tweetNodes){
		tweetNodes.forEach(async (tweet)=>{
			let color = ['rgb(83, 100, 113)','rgb(139, 152, 165)','rgb(113, 118, 123)'];
			let footer = tweet.node.querySelector('div[id][role="group"]');
			let lastChild = footer.lastElementChild;
			let clonedNode = lastChild.cloneNode(true);
			clonedNode.style.marginLeft = "1em";
			let clonedSvg = clonedNode.querySelector('svg');
			while(clonedSvg.firstChild){
				clonedSvg.removeChild(clonedSvg.firstChild);
			}
			let newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			newPath.setAttribute('d', 'M17 4c-1.1 0-2 .9-2 2 0 .33.08.65.22.92C15.56 7.56 16.23 8 17 8c1.1 0 2-.9 2-2s-.9-2-2-2zm-4 2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4c-1.17 0-2.22-.5-2.95-1.3l-4.16 2.37c.07.3.11.61.11.93s-.04.63-.11.93l4.16 2.37c.73-.8 1.78-1.3 2.95-1.3 2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-.32.04-.63.11-.93L8.95 14.7C8.22 15.5 7.17 16 6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.17 0 2.22.5 2.95 1.3l4.16-2.37c-.07-.3-.11-.61-.11-.93zm-7 4c-1.1 0-2 .9-2 2s.9 2 2 2c.77 0 1.44-.44 1.78-1.08.14-.27.22-.59.22-.92s-.08-.65-.22-.92C7.44 10.44 6.77 10 6 10zm11 6c-.77 0-1.44.44-1.78 1.08-.14.27-.22.59-.22.92 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z');
			clonedSvg.appendChild(newPath);
			clonedSvg.style.color = color[getDarkMode()];
			clonedSvg.addEventListener('click', () => {
				copyToClipboard(tweet.link.replace(/https?:\/\/x.com/,'https://twitter.com'));
			});
			clonedNode.addEventListener('click', (event) => {
				event.stopPropagation();
			});
			footer.appendChild(clonedNode);
		});
	}
	async function showFollowers(){
		try{
			if(!/\/verified_followers$/.test(currentUrl))return;
			const screenName = extractUserName(currentUrl);
			const safeScreenName = screenName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			const pattern = new RegExp(`${safeScreenName}/verified_followers$`);
			if(!pattern.test(currentUrl))return;
			const followersTab = await wait_load_Element(`a[role="tab"][href="/${screenName}/followers"]`,100,10,'querySelector');
			if(followersTab.getAttribute('showFollowersChecked') == "true")return;
			followersTab.click();
			followersTab.setAttribute('showFollowersChecked',"true");
		}catch(error){console.error(error)}
		/*
		try{
			const screenName = extractUserName(currentUrl);
			if(currentUrl.match(new RegExp(`${screenName}$`))){
				eventReplace(`${env_selector.profileField} ${env_selector.followersLink}`);
			}else if(isMobile&&(currentUrl === "https://twitter.com/home")){
				const profileIcon = (await wait_load_Element('[data-testid="DashButton_ProfileIcon_Link"]:not([showFollowersChecked="true"])',1000,2))[0];
				if(!profileIcon)return;
				profileIcon.setAttribute('showFollowersChecked',"true");
				profileIcon.addEventListener('click',async (event) => {
					eventReplace(env_selector.followersLink);
				});
			}
		}catch(error){console.error(error)}
		async function eventReplace(selector){
			(await wait_load_Element(selector,500,5)).forEach(e=>{
				if(e.href.match(/verified_followers$/)){
					e.href = e.href.replace(/verified_followers$/,'followers');
					e.addEventListener('click',async (event) => {
						(await wait_load_Element('a[role="tab"]')).forEach(t=>{
							if(t.href.match(/followers$/))t.click();
						});
					});
				}
			});
		}
		*/
	}
	function hideAnalytics(tweetNodes){
		try{
			tweetNodes.forEach(t=>{
				if(t.id === extractTweetId(currentUrl))return;
				let analytics = t.node.querySelector('div[id][role="group"] a[role="link"]').parentNode || t.node.querySelector('[d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"]').findParent('div.r-13awgt0.r-18u37iz.r-1h0z5md');
				analytics.style.display = "none";
			});
		}catch(error){console.error(error)}
	}
	async function webhook_brings_tweets_to_discord(tweetNodes){
		let textData = env_Text.webhook_brings_tweets_to_discord;
		let thisScriptSettings = script_settings['webhook_brings_tweets_to_discord'];
		tweetNodes.forEach(function(tweetNode){
			let element = tweetNode.node;
			if(element.querySelector(".quickDimg")) return;
			let tweet_link = tweetNode.link;
			let fotter = element.querySelector('div[id][role="group"]');
			const flexContainer = document.createElement('div');
			flexContainer.classList.add('quickDimg');
			flexContainer.style.display = 'flex';

			// 1つ目のドロップダウン（サーバー選択）
			const dropdown_select_server = document.createElement('select');
			dropdown_select_server.className = "quickDimgPullDown quickDimgPullDown1";
			for(const server in thisScriptSettings.webHooks){
				const option = document.createElement('option');
				option.value = thisScriptSettings.webHooks[server];
				option.textContent = server;
				if(server == thisScriptSettings.defaultWebhook){
					option.selected = true;
				}
				dropdown_select_server.appendChild(option);
			}
			flexContainer.appendChild(dropdown_select_server);
			dropdown_select_server.addEventListener('click', (event) => {
				event.stopPropagation();
			});

			const dropdown_send_image = document.createElement('select');
			dropdown_send_image.className = "quickDimgPullDown quickDimgPullDown2";
			for(let i = 1; i <= 5; i++){
				const option = document.createElement('option');
				option.value = i;
				option.textContent = i;
				if(i === 5){
					option.selected = true;
				}
				dropdown_send_image.appendChild(option);
			}
			flexContainer.appendChild(dropdown_send_image);

			dropdown_send_image.addEventListener('click', (event) => {
				event.stopPropagation();
			});
			const dropdown_post_quote = document.createElement('select');
			dropdown_post_quote.className = "quickDimgPullDown quickDimgPullDown3";
			['false','true'].forEach(value => {
				const option = document.createElement('option');
				option.value = value;
				option.textContent = value;
				dropdown_post_quote.appendChild(option);
			});
			flexContainer.appendChild(dropdown_post_quote);

			dropdown_post_quote.addEventListener('click', (event) => {
				event.stopPropagation();
			});
			/*
			もういらない
			const dropdown_use_graphql = document.createElement('select');
			dropdown_use_graphql.className = "quickDimgPullDown quickDimgPullDown4";
			['false','true'].forEach(value => {
				const option = document.createElement('option');
				option.value = value;
				option.textContent = value;
				dropdown_use_graphql.appendChild(option);
			});
			flexContainer.appendChild(dropdown_use_graphql);

			dropdown_use_graphql.addEventListener('click', (event) => {
				event.stopPropagation();
			});
			*/
			// ボタンを作成
			const button = document.createElement('button');
			button.className = "quickDimgButton";
			button.textContent = textData.submit;
			flexContainer.appendChild(button);

			function reEnableButton(){
				button.disabled = false;
				button.textContent = textData.submit;
			}
			dropdown_select_server.addEventListener('change', reEnableButton);
			dropdown_send_image.addEventListener('change', reEnableButton);
			dropdown_post_quote.addEventListener('change', reEnableButton);
			//dropdown_use_graphql.addEventListener('change', reEnableButton);

			// ボタンのクリックイベントを監視
			button.addEventListener('click',async function(){
				// ここでドロップダウンの選択値に基づいて処理を行う
				this.disabled = true;
				const selectedServer = dropdown_select_server.value;
				const selectedNumber = dropdown_send_image.value;
				const send_post_tweet = dropdown_post_quote.value === 'true';
				//const useGraphql = dropdown_use_graphql.value === 'true';
				if(!selectedServer){
					customAlert(textData.webhook_not_set);
					return;
				}
				let send_page;
				if(selectedNumber != 5){
					send_page = [selectedNumber-1]
				}else{
					send_page = [0,1,2,3]
				}
				const body = await make_send_data(tweet_link,send_page,send_post_tweet);
				await sleep(300);
				for(let target in body){
					let formData = new FormData();
					let payload = {};
					let tmp = body[target];
					if(tmp.embeds){
						payload.embeds = tmp.embeds;
					}
					if(tmp.content){
						payload.content = tmp.content;
					}
					formData.append('payload_json', JSON.stringify(payload));
					//console.log(formData)
					if(tmp.files){
						tmp.files.forEach((file, index) => {
							formData.append(`file${index}`, file.attachment, file.name);
						});
					}
					try{
						let res = await request(new sendObject_to_discord_webhook(selectedServer,formData));
						if(res.statusText == "Bad Request"){
							console.log({user: fetchedTweetsUserDataByUserName,tweets: fetchedTweets});
							customAlert(`${textData.when_post_failed}`,payload.embeds[0].url);
						}
					}catch(error){
						customAlert(`${textData.when_post_failed}`,payload.embeds[0].url);
						console.log({user: fetchedTweetsUserDataByUserName,tweets: fetchedTweets});
						console.log(error);
						throw(error);
					}
					//console.log(res)
					await sleep(1000);
				}
				button.textContent = textData.complete;
			});
			fotter.parentNode.appendChild(flexContainer);
		});
		async function make_send_data(tweet_link,select_pages = [1],send_quoted_tweet,use_graphQL){
			const tweet_id = tweet_link.match(/https?:\/\/[\w]{1,}\.com\/\w+\/status\/(\d+)/)[1];
			let textData = Text[script_settings.webhook_brings_tweets_to_discord.lang].webhook_brings_tweets_to_discord;
			let tweet_data,quoted_data,return_object,apiType;
			try{
				/*
				if(use_graphQL){
					apiType = "graphQL";
				}else{
					apiType = "1_1"
				}
				*/
				tweet_data = await getTweetData(tweet_id,"graphQL");
				quoted_data = tweet_data.quoted_status_result?.result || tweet_data.quoted_status;
				return_object = await make_embeds();
			}catch(error){
				console.log({user: fetchedTweetsUserDataByUserName,tweets: fetchedTweets});
				customAlert(`${textData.when_post_failed}`,tweet_link);
				console.error(error);
			}
			if(send_quoted_tweet && quoted_data){
				tweet_data = quoted_data;
				return_object = return_object.concat([{content: textData.quotedTweet}],await make_embeds(1));
			}
			return return_object;
			async function make_embeds(quoted_tweet_mode = 0){
				let embeds = [];
				let tmpEmbed = {};
				let tmp_return_object = [];
				let twitter_user_data = {};
				let twitter_tweet_data = {};
				let tweet_user_data_json = {};
				let tweet_tweet_data_json = {};
				tweet_user_data_json = tweet_data.core?.user_results?.result || tweet_data.user?.result || tweet_data.user;
				tweet_tweet_data_json = tweet_data.legacy || tweet_data;
				if(!(tweet_user_data_json&&tweet_tweet_data_json)){
					tweet_data = await getTweetData(tweet_id,apiType,true);
					tweet_user_data_json = tweet_data.core?.user_results?.result || tweet_data.user?.result || tweet_data.user;
					tweet_tweet_data_json = tweet_data.legacy || tweet_data;
				}
				twitter_user_data.ID = tweet_user_data_json.rest_id || tweet_user_data_json.id_str;
				twitter_user_data.screen_name = tweet_user_data_json.legacy?.screen_name || tweet_user_data_json.screen_name;
				twitter_user_data.name = tweet_user_data_json.legacy?.name || tweet_user_data_json.name;
				twitter_user_data.profile_image = tweet_user_data_json.legacy?.profile_image_url_https.replace('_normal.','.') || tweet_user_data_json.profile_image_url_https.replace('_normal.','.');
				twitter_user_data.urls = tweet_user_data_json.legacy?.entities || tweet_user_data_json.entities || [];
				twitter_tweet_data.hashtags = tweet_tweet_data_json.entities.hashtags || [];
				twitter_tweet_data.user_mentions = tweet_tweet_data_json.entities.user_mentions || [];
				twitter_tweet_data.symbols = tweet_tweet_data_json.entities.symbols || [];
				try{
					await addPixivLinksToScriptDataStore([twitter_user_data.screen_name],true);
					twitter_user_data.pixiv_url = getPixivUrlWithScreenName(twitter_user_data.screen_name);
				}catch(error){
					console.log("pixivのURLの取得に失敗しました。");
					throw(error);
				}
				twitter_tweet_data.full_text = tweet_tweet_data_json.full_text || "";
				twitter_tweet_data.extended_entities = tweet_tweet_data_json.extended_entities;
				twitter_tweet_data.retweet_count = tweet_tweet_data_json.retweet_count;
				twitter_tweet_data.favorite_count = tweet_tweet_data_json.favorite_count;
				twitter_tweet_data.id = tweet_tweet_data_json.id_str;
				twitter_tweet_data.created_at = new Date(tweet_tweet_data_json.created_at).toLocaleString(timeZoneObject.locale, { timeZone: timeZoneObject.timeZone });
				twitter_tweet_data.urls = tweet_tweet_data_json.entities.urls;
				twitter_tweet_data.media = make_media_list(twitter_tweet_data.extended_entities,select_pages);
				try{
					//文が長すぎるとエラーになるので一定の長さで切る。
					//普通のツイートではそんなことありえないが、Blueでは長いツイートが可能なのでそれに対応している。
					let note_tweet = tweet_data.note_tweet?.note_tweet_results.result;
					twitter_tweet_data.full_text = note_tweet.text;
					twitter_tweet_data.urls = note_tweet.entity_set.urls;
					twitter_tweet_data.hashtags = get_only_particular_key_value(note_tweet.entity_set,"hashtags",[]);
					twitter_tweet_data.user_mentions = get_only_particular_key_value(note_tweet.entity_set,"user_mentions",[]);
					twitter_tweet_data.symbols = get_only_particular_key_value(note_tweet.entity_set,"symbols",[]);
				}catch{}
				//console.log(twitter_tweet_data.full_text)
				// hashtags, mentions, symbolsを一つの配列に結合
				let combined = [].concat(
					twitter_tweet_data.hashtags.map(tag => ({
						type: 'hashtag',
						indices: tag.indices,
						text: tag.text
					})),
					twitter_tweet_data.user_mentions.map(mention => ({
						type: 'mention',
						indices: mention.indices,
						text: mention.screen_name
					})),
					twitter_tweet_data.symbols.map(symbol => ({
						type: 'symbol',
						indices: symbol.indices,
						text: symbol.text
					}))
				);


				// combinedをindicesの順にソート
				combined.sort((a, b) => b.indices[0] - a.indices[0]);
				let transformedText = twitter_tweet_data.full_text;
				function countSurrogatePairs(str){
					return Array.from(str).filter(char => char.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/)).length;
				}
				const currentTimeMillis = new Date().getTime();
				const linkTextStart = `linkTextStart${currentTimeMillis}`;
				const linkTextEnd = `linkTextEnd${currentTimeMillis}`;
				const linkUrlStart = `linkUrlStart${currentTimeMillis}`;
				const linkUrlEnd = `linkUrlEnd${currentTimeMillis}`;
				const hashtag = `hashtag${currentTimeMillis}`;
				const underbarEscape = `underbarEscape${currentTimeMillis}`;
				combined.forEach(item => {
					let start = item.indices[0];
					let end = item.indices[1];

					// サロゲートペアの数をカウントして調整
					const adjustment = countSurrogatePairs(transformedText.slice(0, end));
					start += adjustment;
					end += adjustment;
					item.text = item.text.replace(/_/g, underbarEscape);
					let replacement = '';
					switch(item.type){
						case 'hashtag':
							replacement = `${linkTextStart}${hashtag}${item.text}${linkTextEnd}${linkUrlStart}https://twitter.com/hashtag/${item.text}${linkUrlEnd}`;
							break;
						case 'mention':
							replacement = `${linkTextStart}@${item.text}${linkTextEnd}${linkUrlStart}https://twitter.com/${item.text}${linkUrlEnd}`;
							break;
						case 'symbol':
							replacement = `${linkTextStart}$${item.text}${linkTextEnd}${linkUrlStart}https://twitter.com/search?q=%24${item.text}&src=cashtag_click${linkUrlEnd}`;
							break;
					}
					transformedText = transformedText.slice(0, start) + replacement + transformedText.slice(end);
				});
				twitter_tweet_data.full_text = str_max_length(transformedText,7000);
				//マークダウンにならないでほしいやつのエスケープ
				let escapeCharacters = ['\\', '|', '*', '_', '`', '~', '[', ']', '(', ')', '>', '#', '-'];
				escapeCharacters.forEach(char => {
					let regExp = new RegExp('\\' + char, 'g');
					twitter_tweet_data.full_text = twitter_tweet_data.full_text.replace(regExp, '\\' + char);
				});
				//マークダウンになって欲しいやつは戻す
				twitter_tweet_data.full_text = twitter_tweet_data.full_text.replace(new RegExp(linkTextStart, 'g'), '[');
				twitter_tweet_data.full_text = twitter_tweet_data.full_text.replace(new RegExp(linkTextEnd, 'g'), ']');
				twitter_tweet_data.full_text = twitter_tweet_data.full_text.replace(new RegExp(linkUrlStart, 'g'), '(');
				twitter_tweet_data.full_text = twitter_tweet_data.full_text.replace(new RegExp(linkUrlEnd, 'g'), ')');
				twitter_tweet_data.full_text = twitter_tweet_data.full_text.replace(new RegExp(hashtag, 'g'), '#');
				twitter_tweet_data.full_text = twitter_tweet_data.full_text.replace(new RegExp(underbarEscape, 'g'), '_');
				/*
				try{
					if(select_pages.length > 1 && ! twitter_tweet_data.media.every(v => v.media_type == "photo")){
						twitter_tweet_data.images = [twitter_tweet_data.media[0]];
					}
				}catch{}
				try{
					if(twitter_tweet_data.media.every(v => v.media_type.match(/(video|animated_gif)/))){
						twitter_tweet_data.videos = [twitter_tweet_data.media[0]];
					}
				}catch{}
				*/
				let tweet_url;
				if(!quoted_tweet_mode == 1){
					tweet_url = tweet_link;
				}else{
					tweet_url = `https://twitter.com/${twitter_user_data.screen_name}/status/${twitter_tweet_data.id}`;
				}
				tmpEmbed.color = 1940464;
				tmpEmbed.title = "Tweet";
				tmpEmbed.url = tweet_url;
				tmpEmbed.author = {
					"name": `${twitter_user_data.name} (@${twitter_user_data.screen_name})`,
					"url": `https://twitter.com/${twitter_user_data.screen_name}`,
					"icon_url": `attachment://profile_images.${twitter_user_data.profile_image.split('.').pop()}`
				};
				tmpEmbed.description = replace_t_co_to_original_url(twitter_tweet_data.full_text,twitter_tweet_data.urls,twitter_tweet_data.media);
				tmpEmbed.thumbnail = {"url": "https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg"};
				tmpEmbed.fields = [
					{
						"name": `${textData.various_links}:link:`,
						"value": `[${textData.link_to_tweet}](${tweet_url})` + `\n[TwitterID: ${twitter_user_data.ID}](https://twitter.com/intent/user?user_id=${twitter_user_data.ID})` + if_exsit_return_text(twitter_tweet_data.media[0]?.url,`\n[${textData.link_to_image}](${image_url_to_original(twitter_tweet_data.media[0]?.url)})`) + if_exsit_return_text(twitter_user_data.pixiv_url,`\n[Pixiv](${twitter_user_data.pixiv_url})`)
					},{
						"name": textData.engagement,
						"value": `${textData.retweets} ${round_half_up(twitter_tweet_data.retweet_count,textData.roundingScale,textData.decimalPlaces,textData.units)}:recycle:	${textData.likes} ${round_half_up(twitter_tweet_data.favorite_count,textData.roundingScale,textData.decimalPlaces,textData.units)}:heart:`
					},{
						"name": textData.postedDate,
						"value": twitter_tweet_data.created_at
					}
				];
				if(twitter_tweet_data.media.images[0]?.url){
					tmpEmbed.image = {
						"url": `attachment://${twitter_tweet_data.media.images[0].url.split('/').pop()}`
					}
				}
				embeds.push(tmpEmbed);
				if(twitter_tweet_data.media.images[1]?.url){
					for(let i=1;i<twitter_tweet_data.media.images.length;i++){
						embeds[i] = {
							"url": tweet_url,
							"image": {"url": `attachment://${twitter_tweet_data.media.images[i].url.split('/').pop()}`}
						}
					}
				}
				tmp_return_object.push({"embeds": embeds, "files": await fetchImages(twitter_tweet_data.media.images.concat([{"url": twitter_user_data.profile_image}]))});
				if(twitter_tweet_data.media.videos?.length >= 1 && thisScriptSettings.downloadVideo){
					const promises = twitter_tweet_data.media.videos.map(video => downloadVideo(video.url));
					await Promise.all(promises)
						.then(results => {
							results.forEach(obj => {
								tmp_return_object.push(obj);
							});
						})
						.catch(error => {
							console.error("Error downloading videos:", error);
						});
				}else if(twitter_tweet_data.media.videos?.length >= 1){
					twitter_tweet_data.media.videos.forEach(video => {
						tmp_return_object.push({"content": video.url});
					});
				}
				return tmp_return_object;
			}
			function downloadVideo(url){
				return new Promise(async (resolve) => {
					if((await request(new requestObject_binary_head(url))).responseHeaders.match(/content-length: ?(\d+)/)[1] < 24117249){
						return resolve({"files": [{attachment: (await request(new requestObject_binary_data(url))).response, name: url.split('/').pop()}]});
					}else{
						return resolve({"content": url});
					}
				});
			}
			function extractUrls(entities){
				let urls = [];
				if(entities.description && entities.description.urls){
					entities.description.urls.forEach(urlObj => {
						urls.push(urlObj.expanded_url || urlObj.url);
					});
				}
				if(entities.url && entities.url.urls){
					entities.url.urls.forEach(urlObj => {
						urls.push(urlObj.expanded_url || urlObj.url);
					});
				}
				return urls;
			}
			function replace_t_co_to_original_url(full_text,urls,media_urls){
				//ツイート内のt.coで短縮されたリンクをもとにのリンクにもどす。
				try{
					if(typeof full_text !== "undefined"){
						full_text = decodeHtml(full_text);
						if(typeof urls !== "undefined"){
							for(let i=0;i<=urls.length-1;i++){
								if(urls[i].expanded_url.length > 200){
									full_text = full_text.replace(urls[i].url,`[${decodeURI(urls[i].expanded_url).slice(0,150)}](${decodeURI(urls[i].expanded_url)}) ... `);
								}else{
									full_text = full_text.replace(urls[i].url,decodeURI(urls[i].expanded_url));
								}
							}
						}
						//メディアがくっついてるツイートは末尾にメディアのURLが付随しているためそれを消す。
						if(typeof media_urls !== "undefined"){
							(media_urls.images || []).concat(media_urls.videos || []).forEach(u=>{
								full_text = full_text.replace(u.tco_url,"");
							});
						}
					}
				}catch{}
				return full_text;
			}
			function if_exsit_return_text(variable,return_text){
				if(!(variable === null || variable === undefined || variable === "")){
					return return_text
				}
				return "";
			}
			function make_media_list(extended_entities, select_pages){
				var result = {images: [],videos: []};
				if(extended_entities){
					for(const target in select_pages){
						try{
							if(extended_entities.media.length > select_pages[target]){
								let mediaItem = extended_entities.media[select_pages[target]];
								let tmp_object = {media_type: mediaItem.type, tco_url: mediaItem.url};
								if(tmp_object.media_type == "animated_gif" || tmp_object.media_type == "video"){
									tmp_object.url = mediaItem.video_info.variants.filter(function(obj){return obj.content_type == "video/mp4";}).reduce((a, b) => a.bitrate > b.bitrate ? a : b).url.split('?')[0];
									result.videos.push(tmp_object);
								}else if(tmp_object.media_type == "photo"){
									tmp_object.url = mediaItem.media_url_https;
									result.images.push(tmp_object);
								}
							}
						}catch(error){
							console.error("メディアリストの作成に失敗しました。:\n" + error);
						}
					}
				}
				return result;
			}
			function str_max_length(text, max_length,defaultValue = "……以下Discordの字数オーバー。"){
				var r = 0;
				for(var i = 0; i < text.length; i++){
					var c = text.charCodeAt(i);
					if((c >= 0x0 && c < 0x81) || (c == 0xf8f0) || (c >= 0xff61 && c < 0xffa0) || (c >= 0xf8f1 && c < 0xf8f4)){
						r += 1;
					}else{
						r += 2;
					}
					if(r >= max_length){
						text = `${text.slice(0, i - 1)} ${defaultValue}`;
						break;
					}
				}
				return text;
			}
			function image_url_to_original(image_url){
				//apiから帰ってくるURLをそのまま開くと小さい画像になってしまうので最大サイズの画像をダウンロードできるようにする。
				if(typeof image_url !== "undefined"){
					var extension = image_url.split(".").pop();
					return `${image_url.replace(`.${extension}`,"")}?format=${extension}&name=orig`
				}
			}
			async function fetchImages(mediaUrlArray){
				if(mediaUrlArray?.length == 0) return;
				let downloadPromises = mediaUrlArray.map(fetchImage);
				return remove_null_from_array(await Promise.all(downloadPromises));
				async function fetchImage(target) {
					let retryCount = 5; // リトライ回数を設定
					while(retryCount > 0){
						if(!target.url) return;
						let image;
						let name;
						if(target.url.match(/https?:\/\/pbs\.twimg\.com\/media\//)){
							image = await request(new requestObject_binary_data(image_url_to_original(target.url)),3);
							name = target.url.split('/').pop();
						}else{
							image = await request(new requestObject_binary_data(target.url),3);
							name = "profile_images." + target.url.split('.').pop();
						}

						// ダウンロードした画像データのサイズを確認
						if(image.response.size > 1024){
							return {
								"attachment": image.response,
								"name": name,
							};
						}else{
							retryCount--;
						}
					}
					console.warn(`Failed to download image after multiple retries: ${target.url}`);
					return null;
				}
			}
		}
	}
	function sneakilyFavorite(tweetNodes){
		tweetNodes.forEach(function(element){
			const node = element.node;
			if(node.querySelector(".sneakilyFavorite") || ! node.querySelector(env_selector.retweeted) || !node.querySelector('[data-testid="like"]')) return;
			let tweet_link = element.link;
			let button = document.createElement('button');
			let fotter = node.querySelector('div[id][role="group"]');
			let like_element = fotter.querySelector('[data-testid="like"]');
			button.textContent = env_Text.sneakilyFavorite.favorite;
			button.style.fontSize = '0.7em';
			button.style.whiteSpace = 'nowrap';
			button.classList.add('sneakilyFavorite');
			button.addEventListener('click',async function(event){
				this.disabled = true;
				const status = await request(new requestObject_twitter_FavoriteTweet(tweet_link));
				if(status.response.data.favorite_tweet == "Done"){
					like_element.querySelector('div[dir="ltr"]').classList.add(env_selector.liked_color);
					like_element.querySelector('div[dir="ltr"]').style.color = "rgb(249, 24, 128)";
					like_element.querySelector("path").setAttribute('d',env_selector.liked);
					like_element.setAttribute('data-testid', 'unlike');
				}
				this.remove();
			});
			fotter.insertBefore(button, like_element.parentElement.nextSibling);
		});
	}
	async function Engagement_Restorer(){
		if(!currentUrl.match(/https?\:\/\/[\w]{1,}\.com\/\w*\/status\/[0-9]*($|\?.*)/) || document.getElementById('restoreEngagements') || isFunctionRunning.Engagement_Restorer)return;
		isFunctionRunning.Engagement_Restorer = true;
		try{
			const tweetLink = currentUrl.match(/https?\:\/\/[\w]{1,}\.com\/\w*\/status\/[0-9].*/)[0];
			const tweetId = tweetLink.match(/\/status\/(\d+)/)[1];
			const response = (await getTweetData(tweetId,"graphQL")).legacy;
			const engagemants = {"favorite_count": response.favorite_count,"quote_count": response.quote_count,"retweet_count": response.retweet_count};
			const target_node = Array.from((await wait_load_Element('article[data-testid="tweet"]',200,5))).find(node => {
				const timeParents = Array.from(node.querySelectorAll('time')).map(time => time.parentNode);
				return timeParents.some(parent => parent.href && parent.href.match(tweetId));
			});
			if(!target_node)return;
			const engagemants_aria = target_node.querySelector('[role="group"]');
			if(!engagemants_aria)return;
			let envEngagementsTextColor = env_selector.engagementsTextColor[getDarkMode() || "0"];
			const flexContainer = document.createElement('div');
			flexContainer.style.display = 'flex';
			flexContainer.style.justifyContent = 'space-between';
			flexContainer.style.width = '70%';
			flexContainer.id = 'restoreEngagements';
			const links = [
				{
					"name": "retweets",
					"href": tweetLink + "/retweets",
					"count": round_half_up(engagemants.retweet_count,env_Text.Engagement_Restorer.roundingScale,env_Text.Engagement_Restorer.decimalPlaces,env_Text.Engagement_Restorer.units),
					"text": env_Text.Engagement_Restorer.retweet
				},
				{
					"name": "quotes",
					"href": tweetLink + "/quotes",
					"count": round_half_up(engagemants.quote_count,env_Text.Engagement_Restorer.roundingScale,env_Text.Engagement_Restorer.decimalPlaces,env_Text.Engagement_Restorer.units),
					"text": env_Text.Engagement_Restorer.quoted,
				},
				{
					"name": "likes",
					"href": tweetLink + "/likes",
					"count": round_half_up(engagemants.favorite_count,env_Text.Engagement_Restorer.roundingScale,env_Text.Engagement_Restorer.decimalPlaces,env_Text.Engagement_Restorer.units),
					"text": env_Text.Engagement_Restorer.like,
				},
			];
			links.forEach((a, index) => {
				const newLink = document.createElement('a');
				newLink.style.textDecoration = 'none';
				newLink.href = a.href;
				const countText = document.createElement('span');
				countText.textContent = a.count;
				countText.style.color = envEngagementsTextColor.count;
				newLink.appendChild(countText);

				const textPart = document.createElement('span');
				textPart.textContent = " " + a.text;
				textPart.style.color = envEngagementsTextColor.text;
				newLink.appendChild(textPart);

				newLink.addEventListener('click', (e) => {
					e.preventDefault();
					clickTab(a.name,target_node);
				});
				flexContainer.appendChild(newLink);
			});
			if(currentUrl.match(/https?\:\/\/[\w]{1,}\.com\/\w*\/status\/[0-9]*($|\?.*)/))engagemants_aria.parentNode.prepend(flexContainer);
		}catch(error){
			console.error(error)
		}finally{
			isFunctionRunning.Engagement_Restorer = false;
		}
		async function clickTab(name,target_node){
			target_node.querySelector('[data-testid="caret"]').click();
			(await wait_load_Element('[data-testid="tweetEngagements"]',10,20,'querySelector')).click();
			const engagemants_aria = (await wait_load_Element('nav[aria-live="polite"]',20,20,'querySelector'));
			const regex = new RegExp(name + '$');
			engagemants_aria.querySelectorAll('[role="presentation"] a').forEach((e)=>{
				if(e.href.match(regex)) e.click();
			});
		}
	}
	async function Hello_tweet_where_are_you_from(){
		if(document.querySelector('.display_twitter_client') || isFunctionRunning.Hello_tweet_where_are_you_from)return;
		isFunctionRunning.Hello_tweet_where_are_you_from = true;
		try{
			const tweet_data = await getTweetData(extractTweetId(currentUrl),"graphQL");
			const target_node = (await wait_load_Element(env_selector.info_field,300,4))[0];
			const info_selector = target_node.childNodes[0].className;
			let client_text = document.createElement("div");
			client_text.dir = "ltr";
			client_text.innerHTML = `<span class="display_twitter_client" style="">${tweet_data.source.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')}</span>`;
			client_text.className = info_selector;
			client_text.style.color = ["rgb(83, 100, 113)","rgb(139, 152, 165)","rgb(113, 118, 123)"][getDarkMode()];
			target_node.appendChild(client_text);
			client_text.className = "";
			const media_data = tweet_data.legacy?.extended_entities?.media || tweet_data.extended_entities?.media;
			if(!media_data)return;
			const video_data = media_data.map((mediaItem, index) => {
				if (['video', 'animated_gif'].includes(mediaItem.type)){
					const highestBitrateVariant = mediaItem.video_info.variants.filter(obj => obj.content_type !== 'application/x-mpegURL').reduce((a, b) => a.bitrate > b.bitrate ? a : b);
					return {
						index: index,
						url: highestBitrateVariant.url.split('?')[0]
					};
				}
			}).filter(Boolean)
			if(video_data.length === 0)return;
			let show_video_url = document.createElement("span");
			show_video_url.className = "display_video_url";
			show_video_url.style.whiteSpace = "pre";
			for(let video of video_data){
				let video_url = makeLinkElement(video.url,`${video.index + 1}:video_url`);
				show_video_url.appendChild(video_url);
				if(video !== video_data[video_data.length - 1]){
					show_video_url.appendChild(document.createTextNode('   '));
				}
			}
			client_text.appendChild(document.createElement("br"));
			client_text.appendChild(show_video_url);
		}catch(error){
			if(error === "Max retry count reached")return;
			console.error(error);
		}finally{
			isFunctionRunning.Hello_tweet_where_are_you_from = false;
		}
	}

	async function Note_Tweet_expander(tweetNodes){
		const link_class = "css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1loqt21";
		tweetNodes.forEach(async function(target){
			const tweet_node = target.node;
			const elements = tweet_node.querySelectorAll('[data-testid="tweetText"]');
			const show_more_link = tweet_node.querySelectorAll('[data-testid="tweet-text-show-more-link"]');
			if(show_more_link[0])show_more_link[0].style.display = "none";
			if(show_more_link[1])show_more_link[1].style.display = "none";
			elements.forEach(async (element,index) =>{
				if(!(element.innerText.match(/…$/) || (show_more_link[index]?.tagName.toLowerCase() == "div"))){
					element.classList.add('tweetExpanderChecked');
					//if(element.innerText.split('\n').length >= 10)
					element.style.webkitLineClamp = null;
					return;
				}
				let tweet_id,tweet_data,note_tweet;
				if(index == 0){
					tweet_id = target.id;
					tweet_data = await getTweetData(tweet_id,"graphQL");
					note_tweet = tweet_data.note_tweet?.note_tweet_results.result || tweet_data.note_tweet?.note_tweet_results.result || null;
				}else{
					tweet_data = await getTweetData(target.id,"graphQL");
					tweet_data = await getTweetData(tweet_data.legacy.quoted_status_id_str,"graphQL");
					note_tweet = tweet_data.note_tweet?.note_tweet_results.result || tweet_data.note_tweet?.note_tweet_results.result || null;
				}
				if(!note_tweet){
					element.style.webkitLineClamp = null;
					element.classList.add('tweetExpanderChecked');
					return;
				}
				const hashtags = note_tweet.entity_set?.hashtags || [];
				const user_mentions = note_tweet.entity_set?.user_mentions || [];
				const symbols = note_tweet.entity_set?.symbols || [];
				const urls = note_tweet.entity_set?.urls;
				let new_tweet_text = note_tweet.text;
				function countSurrogatePairs(str){
					return Array.from(str).filter(char => char.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/)).length;
				}
				let combined = [].concat(
					hashtags.map(tag => ({
						type: 'hashtag',
						indices: tag.indices,
						text: tag.text
					})),
					user_mentions.map(mention => ({
						type: 'mention',
						indices: mention.indices,
						text: mention.screen_name
					})),
					symbols.map(symbol => ({
						type: 'symbol',
						indices: symbol.indices,
						text: symbol.text
					}))
				);
				// combinedをindicesの順にソート
				combined.sort((a, b) => b.indices[0] - a.indices[0]);
				let transformedText = new_tweet_text;

				combined.forEach(item => {
					let start = item.indices[0];
					let end = item.indices[1];

					// サロゲートペアの数をカウントして調整
					const adjustment = countSurrogatePairs(transformedText.slice(0, end));
					start += adjustment;
					end += adjustment;

					let replacement = '';
					switch(item.type){
						case 'hashtag':
							replacement = `<a class="${link_class}" style="text-decoration: none;color:rgb(29, 155, 240)" dir="ltr" role="link" href="https://twitter.com/hashtag/${item.text}" target="_blank" rel="noopener">#${item.text}</a>`;
							break;
						case 'mention':
							replacement = `<a class="${link_class}" style="text-decoration: none;color:rgb(29, 155, 240)" dir="ltr" role="link" href="https://twitter.com/${item.text}" target="_blank" rel="noopener">@${item.text}</a>`;
							break;
						case 'symbol':
							replacement = `<a class="${link_class}" style="text-decoration: none;color:rgb(29, 155, 240)" dir="ltr" role="link" href="https://twitter.com/search?q=%24${item.text}&src=cashtag_click" target="_blank" rel="noopener">$${item.text}</a>`;
							break;
					}
					transformedText = transformedText.slice(0, start) + replacement + transformedText.slice(end);
				});
				new_tweet_text = transformedText;
				urls.forEach(target =>{
					new_tweet_text = new_tweet_text.replace(new RegExp(`${target.url}(?=(\\s|$|\\u3000|\\W)(?!\\.|,))`, 'gu'), `<a class="${link_class}" style="text-decoration: none;color:rgb(29, 155, 240)" dir="ltr" role="link" href="${target.url}" target="_blank" rel="noopener">${target.display_url}</a>`);
				});
				var new_tweet_node = document.createElement("span");
				new_tweet_node.className = 'css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0';
				new_tweet_node.innerHTML = new_tweet_text;
				while(element.firstChild){
					element.removeChild(element.firstChild);
				}
				element.appendChild(new_tweet_node);
				element.style.webkitLineClamp = null;
			});
		});
	}

	async function Show_me_your_Pixiv(tweets){
		const collectionMethod = storedSettings.Show_me_your_Pixiv?.showMeYourPixivCollectionMethod;
		let todo = [];
		tweets.forEach(tweet => {
			const node = tweet.node.querySelector(`${env_selector.media_field}:not(.display_pixiv_link)`);
			const screenName = tweet.screenName;
			if(node){
				todo.push({node:node,screenName:screenName});
			}
		});
		let currentScreenName = extractUserName(currentUrl);
		const uniqueScreenNames = [...new Set(todo.map(item => item.screenName))];
		let promises = [];
		if(currentScreenName && !(scriptDataStore?.Show_me_your_Pixiv?.lastGetUserScreenName == currentScreenName) && (collectionMethod === 0 || collectionMethod === 1 || !collectionMethod)){
			(async()=>{
				try{
					const display_pixiv_link_in_profile_field = await wait_load_Element(`div.display_pixiv_link_in_profile`,100,5,'querySelector');
					display_pixiv_link_in_profile_field.remove();
				}catch{}
			})();
			scriptDataStore.Show_me_your_Pixiv.lastGetUserScreenName = currentScreenName;
			promises.push(addPixivLinksToScriptDataStore([currentScreenName],true));
		}
		if(collectionMethod === 0)promises.push(addPixivLinksToScriptDataStore(uniqueScreenNames));
		await Promise.all(promises);

		todo.forEach(item => {
			const node = item.node;
			const screen_name = item.screenName;
			const pixiv_url = getPixivUrlWithScreenName(screen_name);
			if(pixiv_url && node && !(node?.querySelector(".display_pixiv_link")))node.appendChild(makeLinkElement(pixiv_url,"Pixiv🔗","display_pixiv_link"));
		});
		if(getPixivUrlWithScreenName(currentScreenName) && !currentUrl.match(new RegExp(`${currentScreenName}/status`))){
			const profile_field = (await wait_load_Element(env_selector.profile_field_Header_Items))[0];
			currentScreenName = extractUserName(currentUrl);
			let pixivUrl = getPixivUrlWithScreenName(currentScreenName);
			if(profile_field && !profile_field.querySelector(`.display_pixiv_link_in_profile_${currentScreenName}`) && pixivUrl){
				let display_pixiv_link_in_profile_field = document.createElement("div");
				display_pixiv_link_in_profile_field.className = `display_pixiv_link_in_profile display_pixiv_link_in_profile_${currentScreenName}`;
				let brElement = document.createElement("br");
				display_pixiv_link_in_profile_field.appendChild(brElement);
				display_pixiv_link_in_profile_field.appendChild(makeLinkElement(pixivUrl, "Pixiv🔗", "display_pixiv_link"));
				profile_field.appendChild(display_pixiv_link_in_profile_field)
			}
		}
	}

/////////////////////////////////////////////////////////////////////
///////////////////////////ここから汎用関数///////////////////////////
/////////////////////////////////////////////////////////////////////
	function update(){
		if(updating) return;
		updating = true;
		//console.log({user: fetchedTweetsUserDataByUserName,tweets: fetchedTweets})
		main();
		setTimeout(() => {updating = false;}, 600);
	}
	function extractTweetId(url){
		const match = url.match(/[\w]{1,}\.com\/[^/]+\/status\/(\d+)/);
		return match ? match[1] : null;
	}
	function extractUserName(url){
		const match = url.match(denyNamesRegex);
		return match ? match[1] : null;
	}
	function findParent(element, selector){
		let current = element;
		while(current !== null){
			if(current.matches(selector)){
				return current;
			}
			current = current.parentNode;
		}
		return null;
	}
	function locationChange(){
		const observer = new MutationObserver(mutations => {
			if(currentUrl !== document.location.href){
				currentUrl = document.location.href;
				try{
					if(extractTweetId(currentUrl))getTweetData(extractTweetId(currentUrl),"graphQL");
					if(extractUserName(currentUrl))getTweetData(extractUserName(currentUrl),"user");
				}catch(error){console.error(error)}
				addEventToScrollSnapSwipeableList();
				main();
			}
		});
		const target = document.getElementById("react-root");
		const config = {childList: true,subtree: true};
		observer.observe(target, config);
	}
	function copyToClipboard(text){
		navigator.clipboard.writeText(text).then(function(){
			displayToast('Copied!');
		}).catch(function(err) {
			console.error('コピーに失敗しました:', err);
		});
	}
	function simulateKey(keyCode, type, element) {
		let event = new KeyboardEvent(type, {
			key: keyCode,
			keyCode: keyCode,
			which: keyCode,
			bubbles: true
		});
		element.dispatchEvent(event);
	}
	function makeLinkElement(href,text,additionalClass = ""){
		let new_content = document.createElement("a");
		new_content.style.color = "rgb(29, 155, 240)";
		new_content.style.width = "fit-content";
		new_content.href = href;
		new_content.textContent = text;
		new_content.className = `${additionalClass} css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1loqt21`;
		new_content.target = "_blank";
		new_content.rel = "noopener";
		new_content.addEventListener('mouseenter', function(){
			new_content.classList.add('r-1ny4l3l', 'r-1ddef8g', 'r-tjvw6i');
		});
		new_content.addEventListener('mouseleave', function(){
			new_content.classList.remove('r-1ny4l3l', 'r-1ddef8g', 'r-tjvw6i');
		});

		return new_content;
	}
	async function addEventToScrollSnapSwipeableList(){
		try{
			if(!currentUrl.match(/home$/))return;
			const element = await wait_load_Element('[data-testid="ScrollSnap-SwipeableList"]:not(.Make_Twitter_little_useful_do_main_function)',200,10,'querySelector');
			element.classList.add("Make_Twitter_little_useful_do_main_function");
			element.addEventListener("click", async () => {
				await sleep(500);
				update();
			});
		}catch{}
	}
	async function addEventToHomeButton(){
		const element = await wait_load_Element('[data-testid="AppTabBar_Home_Link"]:not(.Make_Twitter_little_useful_do_main_function)',200,10,'querySelector');
		element.classList.add("Make_Twitter_little_useful_do_main_function");
		element.addEventListener("click", update);
	}
	function wait_load_Element(Element_Name, interval = 100, retry = 25, searchFunction = 'querySelectorAll', searchPlace = document){
		return new Promise((resolve, reject) => {
			const MAX_RETRY_COUNT = retry;
			let retry_counter = 0;
			let set_interval_id = setInterval(find_target_element, interval);
			let searchFn;
			switch(searchFunction){
				case 'querySelector':
					searchFn = () => searchPlace.querySelector(Element_Name);
					break;
				case 'getElementById':
					searchFn = () => searchPlace.getElementById(Element_Name);
					break;
				default:
					searchFn = () => searchPlace.querySelectorAll(Element_Name);
			}
			function find_target_element(){
				retry_counter++;
				if(retry_counter > MAX_RETRY_COUNT){
					clearInterval(set_interval_id);
					return reject("Max retry count reached");
				}
				let target_elements = searchFn();
				if((target_elements instanceof NodeList && target_elements.length > 0) || target_elements){
					clearInterval(set_interval_id);
					return resolve(target_elements);
				}
			}
		});
	}
	function GetCookie(name){
		let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if(arr = document.cookie.match(reg)){
			return decodeURIComponent(arr[2]);
		}else{
			return null;
		}
	}
	function remove_null_from_array(arr){
		return arr.filter(function(x){return !(x === null || x === undefined || x === "")});
	}
	function get_only_particular_key_value(object, path, defaultValue = undefined){
		const isArray = Array.isArray;
		if(object == null || typeof object != 'object') return defaultValue;
		return (isArray(object)) ? object.map(createProcessFunction(path)) : createProcessFunction(path)(object);
		function createProcessFunction(path){
			if(typeof path == 'string') path = path.split('.');
			if(!isArray(path)) path = [path];
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
			if(value == null) return '';
			if(typeof value == 'string') return value;
			if(isArray(value)) return value.map(toString) + '';
			let result = value + '';
			return '0' == result && 1 / value == -(1 / 0) ? '-0' : result;
		}
	}
	function sleep(time){
		return new Promise((resolve)=>{
			setTimeout(()=>{return resolve(time)}, time);
		});
	}
	async function expand_shortening_link(urls){
		let isInputArray = true;
		if(typeof urls === 'string'){
			urls = [urls];
			isInputArray = false;
		}
		function isValidURL(url){
			return url.match(/https?:\/\/[\w!\?/\+\-_~=;\.,\*&@#\$%\(\)'\[\]]+/);
		}
		async function expandURL(url){
			if(!isValidURL(url)){
				throw new Error(`Invalid URL: ${url}`);
			}
			const response = await request(new requestObject_url_expand(url));
			return{
				original: url,
				expanded: response.response
			};
		}
		const results = await Promise.all(urls.map(url => expandURL(url)));
		if(!isInputArray){
			return results[0];
		}
		return results;
	}
	async function addPixivLinksToScriptDataStore(ScreenNames,force = false){
		let promises = ScreenNames.map(async screen_name => {
			if((!((scriptDataStore.Show_me_your_Pixiv[screen_name]?.pixiv_url) === undefined))&&!force)return "Already exists";
			//if((((scriptDataStore.Show_me_your_Pixiv[screen_name]?.Create_date || 0) + 604800000) <= new Date().getTime()) || force){
			if(force){
				let userEntitiesData = await getTweetData(screen_name,"user");
				userEntitiesData = userEntitiesData.legacy?.entities || userEntitiesData.entities;
				const end_stat = await find_pixiv_link(extractUrls(userEntitiesData));
				if(end_stat == "Too Many Requests"){
					console.log("API limit.");
				}else if(!end_stat){
					scriptDataStore.Show_me_your_Pixiv[screen_name] = {"pixiv_url": null,"Create_date": new Date().getTime()};
					return `${screen_name}: Pixivリンクなし`;
				}else{
					scriptDataStore.Show_me_your_Pixiv[screen_name] = {"pixiv_url": end_stat.replace(/^https?/,'https'),"Create_date": new Date().getTime()};
					return `${screen_name}: ${end_stat}`;
				}
			}else{
				return "Not yet time";
			}
		});
		const results = await Promise.allSettled(promises);
		results.forEach(result => {
			if(result.status === 'fulfilled'){
				//debug_log(`${result.value}`);
			}else{
				console.error(`Failure: ${result.reason}`);
			}
		});
		localStorage.setItem('user_pixvi_link_collection', JSON.stringify(scriptDataStore.Show_me_your_Pixiv));
		return "finished!";
		function extractUrls(entities){
			let urls = [];
			if (entities.description && entities.description.urls){
				entities.description.urls.forEach(urlObj => {
					urls.push(urlObj.expanded_url || urlObj.url);
				});
			}
			if (entities.url && entities.url.urls){
				entities.url.urls.forEach(urlObj => {
					urls.push(urlObj.expanded_url || urlObj.url);
				});
			}
			return urls;
		}
	}
	function getPixivUrlWithScreenName(screenName){
		let pixivUrl = scriptDataStore.Show_me_your_Pixiv[screenName]?.pixiv_url;
		if(pixivUrl){
			return pixivUrl;
		}else{
			pixivUrl = scriptDataStore.Show_me_your_Pixiv_dataBase[screenName];
			if(Array.isArray(pixivUrl)){
				return `https://www.pixiv.net/users/${pixivUrl[0]}`;
			}else if(pixivUrl){
				return `https://www.pixiv.net/users/${pixivUrl}`;
			}else{
				return null;
			}
		}
	}
	async function find_pixiv_link(urls){
		const Pixiv_url_regex = /^https?:\/\/(((www|touch)\.)?pixiv\.(net\/([a-z]{2}\/)?((member(_illust)?\.php\?id\=|(users|u)\/)[0-9]*)|me\/.*))/;
		const Fanbox_url_regex = /^https?:\/\/(www\.pixiv\.net\/fanbox\/creator\/[0-9]*|(.*\.)?fanbox\.cc\/?(@.*)?)/;
		return new Promise(async function(resolve){
			let tmp_urls = urls;
			let Pixiv_url;
			if(tmp_urls.length > 0){
				Pixiv_url = await find_pixiv_link_from_profile_urls(tmp_urls);
				if(Pixiv_url === undefined || Pixiv_url === null || Pixiv_url === false){
					tmp_urls = get_only_particular_key_value((await expand_shortening_link(tmp_urls)),"expanded",[]);
					Pixiv_url = await find_pixiv_link_from_profile_urls(tmp_urls);
					return resolve(Pixiv_url);
				}else{
					return resolve(Pixiv_url);
				}
			}
			return resolve(null);
		});
		async function find_pixiv_link_from_profile_urls(urls_in_profile){
			return new Promise(async function(resolve,reject){
				let tmp_pixiv_url;
				tmp_pixiv_url = findMatch_from_array(urls_in_profile,Pixiv_url_regex,true);
				if (tmp_pixiv_url !== undefined) return resolve(tmp_pixiv_url);
				if(findMatch_from_array(urls_in_profile,Fanbox_url_regex) !== undefined){
					tmp_pixiv_url = await when_fanbox(findMatch_from_array(urls_in_profile,Fanbox_url_regex,true));
					if(Pixiv_url_regex.test(tmp_pixiv_url)){
						return resolve(tmp_pixiv_url);
					}
				}else{
					let get_url_promise_list = [];
					urls_in_profile.forEach(target=>{
						switch(true){
							case /^https?:\/\/((fantia\.jp\/(fanclubs\/[0-9])?.*)|(.*\.booth\.pm)|(.*linktr\.ee)|(.*profcard\.info)|(.*lit\.link)|(potofu\.me)|(.*\.carrd\.co)|(.*\.tumblr\.com$)|(twpf\.jp)|(ci\-en\.dlsite\.com\/creator\/[0-9]*))\/?/.test(target):
								get_url_promise_list.push(new Promise(
									async function(resolve,reject){
										try{
											return resolve(await when_general(target));
										}catch(error){
											return reject(error);
										}
									}
								));
								break;
							case /^https?:\/\/.*\.creatorlink\.net(\/.*)?/.test(target):
								get_url_promise_list.push(new Promise(
									async function(resolve,reject){
										try{
											return resolve(await when_general(`${target.match(/^https?:\/\/.*\.creatorlink\.net/)[0]}\/Contact`));
										}catch(error){
											return reject(error);
										}
									}
								));
								break;
							case /^https?:\/\/skeb\.jp\/\@.*/.test(target):
								get_url_promise_list.push(new Promise(
									async function(resolve,reject){
										try{
											return resolve(await when_skeb(target.replace(/^https?:\/\/skeb\.jp\/\@/,'')));
										}catch(error){
											return reject(error);
										}
									}
								));
								break;
							case /^https?:\/\/sketch\.pixiv\.net\//.test(target):
								get_url_promise_list.push(new Promise(
									async function(resolve,reject){
										try{
											return resolve(await when_pixiv_sketch(target));
										}catch(error){
											return reject(error);
										}
									}
								));
								break;
							default:
								break;
						}
					});
					if(get_url_promise_list.length > 0){
						await Promise.any(get_url_promise_list).then((value) => {tmp_pixiv_url = value}).catch(() => {tmp_pixiv_url = undefined});
						if(!Pixiv_url_regex.test(tmp_pixiv_url)) return resolve(undefined);
						return resolve(tmp_pixiv_url.replace(/^https?/,'https').replace(/(\/|\\)$/,''));
					}
				}
				return resolve(null);
				function when_general(target_url){
					return new Promise(async function(resolve,reject){
						const response_data = await request(new requestObject(target_url.replace(/^https?/,"https")));
						console.log({url:target_url.replace(/^https?/,"https"), response:response_data})
						let response_data_urls = response_data.response.split(/\"|\<|\>/).filter(function(data_str){return data_str.match(/^https?:(\/\/(((www|touch)\.)?pixiv\.(net\/([a-z]{2}\/)?((member(_illust)?\.php\?id\=|(users|u|fanbox\/creator)\/)[0-9].*)|me\/.*))|.*\.fanbox\.cc\/?)$/)});
						if(response_data_urls.find(function(element){return element.match(Pixiv_url_regex)}) !== undefined){
							return resolve(response_data_urls.find(function(element){return element.match(Pixiv_url_regex)}));
						}else if(response_data_urls.find(function(element){return element.match(Fanbox_url_regex)}) !== undefined){
							return resolve(await when_fanbox(response_data_urls.find(function(element){return element.match(Fanbox_url_regex)})));
						}else{
							return reject(undefined);
						}
					});
				}
				function when_skeb(target){
					return new Promise(async function(resolve,reject){
						const response_data = await request(new requestObject_skeb(`https://skeb.jp/api/users/${target}`,`https://skeb.jp/@${target}`));
						//console.log({url:`https://skeb.jp/api/users/${target}`,skeb_url: `https://skeb.jp/@${target}`,response_data: response_data})
						let User_id = response_data.response.pixiv_id;
						if(User_id){
							return resolve("https://www.pixiv.net/users/" + User_id);
						}else{
							return reject(undefined);
						}
					});
				}
				function when_pixiv_sketch(target_url){
					return new Promise(async function(resolve,reject){
						const response_data = await request(new requestObject(target_url));
						let User_id = response_data.response.split(',').filter(function(data_str){return data_str.match(/\\"pixiv_user_id\\":\\"[0-9]*\\"/)});
						if(User_id){
							return resolve("https://www.pixiv.net/users/" + User_id[0].split(/\"|\\/)[6]);
						}else{
							return reject(undefined);
						}
					});
				}
				function when_fanbox(fanbox_url){
					return new Promise(async function(resolve,reject){
						if(fanbox_url.match(/^https?:\/\/www\.pixiv\.net\/fanbox\/creator\/[0-9]*/)){
							return resolve(fanbox_url.replace('fanbox/creator', 'users'));
						}else{
							const fanbox_name = fanbox_url.match(/https?:\/\/(?:www\.)?(?:fanbox\.cc\/@([^\/]+)|([^\.]+)\.fanbox\.cc)/);
							const fanbox_response = await request(new requestObject_fanbox(`https://api.fanbox.cc/creator.get?creatorId=${fanbox_name[1] || fanbox_name[2]}`,`https://${fanbox_name[1] || fanbox_name[2]}.fanbox.cc`));
							if(fanbox_response.status == "404") return reject(undefined);
							tmp_pixiv_url = findMatch_from_array(fanbox_response.response.body.profileLinks,Pixiv_url_regex,true);
							if(tmp_pixiv_url !== undefined){
								return resolve(tmp_pixiv_url);
							}else{
								return resolve(`https://www.pixiv.net/users/${fanbox_response.response.body.user.userId}`);
							}
						}
					});
				}
			});
		}
	}
	function round_half_up(original_value,where_round_off,decimal_place = 0,unit_str = ""){
		//四捨五入関数。
		/*
		original_valu: 元の値
		where_round_off: どこで四捨五入するか(0.1, 1, 10, 100, 1000など)
		decimal_place: 小数点以下を何桁にするか(1, 2, 3, 4, 5など)
		unit_str: 単位を末尾につける(千,万など)
		*/
		if(Number(original_value)>=Number(where_round_off)){
			let tmp_value;
			tmp_value = Math.round(Number(original_value) / Number(where_round_off) * Math.pow(10,Number(decimal_place))) / Math.pow(10,Number(decimal_place));
			if(unit_str == ""){
				return tmp_value;
			}else{
				return `${tmp_value}${unit_str}`
			}
		}else{
			return original_value;
		}
	}
	function findMatch_from_array(arr, regex, returnMatchedSubstring = false){
		const matchedElement = arr.find(element => regex.test(element));
		if(matchedElement && returnMatchedSubstring){
			const matchResult = matchedElement.match(regex);
			return matchResult ? matchResult[0] : undefined;
		}
		return matchedElement;
	}
	function fetchAndProcessTwitterApi(method,id = undefined,forceFetch = false){
		let response;
		return new Promise(async (resolve, reject) => {
			try{
				switch(method){
					case 'TL':
					case 'forYou':
						await getTL();
						break;
					case 'userMedia':
						await getUserMedia();
						break;
					case 'mediaSearch':
						await getMediaSerch();
						break;
					case 'graphQL':
						if((fetchedTweets[id]?.API_type === "graphQL") && !(forceFetch === true))return resolve(fetchedTweets[id]);
						await graphQL();
						break;
					case 'user':
						await getUser();
						break;
					case 'user_1_1':
						//await getUser1_1();
						//break;
					case '1_1':
						//await get1_1();
						console.log('twitter API v1.1でツイートのデータを収集することはできなくなりました。');
						break;
					default:
						console.warn("なにか間違ってないか？")
						return reject("something wrong.");
				}
				return resolve("OK!");
			}catch(error){
				console.error(error);
				console.error(response);
				throw new Error(`Failed to fetch API data.\nmethod: ${method}\nid: ${id}`);
			}
		});
		async function getMediaSerch(){
			let url = 'https://x.com/i/api/graphql/Aj1nGkALq99Xg3XI0OZBtw/SearchTimeline'
			let variables = {
				"rawQuery": encodeURIComponent(id),
				"count": 50,
				"querySource": "recent_search_click",
				"product": "Media"
			}
			if(scriptDataStore.Show_all_Medias[(await encodeBase64(id))]?.cursor){
				variables.cursor = scriptDataStore.Show_all_Medias[(await encodeBase64(id))]?.cursor;
			}
			response = await request(new requestObject_twitter_get_search_media(url,variables));
			if(!response.status === "200")throw new Error(`Failed to fetch`);
			const instructions = response.response.data.search_by_raw_query.search_timeline.timeline.instructions;
			const TimelineAddEntries = instructions.find(element => element.type === 'TimelineAddEntries');
			if(!scriptDataStore.Show_all_Medias[(await encodeBase64(id))])scriptDataStore.Show_all_Medias[(await encodeBase64(id))] = {};
			scriptDataStore.Show_all_Medias[(await encodeBase64(id))].cursor = TimelineAddEntries.entries.find(element => element.entryId.match(/^cursor-bottom/)).content.value;
			const tweetData = instructions[0]?.moduleItems || TimelineAddEntries.entries;
			processgraphQL(tweetData);
			return "OK";
		}
		async function getUserMedia(){
			let userData = await getTweetData(id,"user")
			let userID = userData.rest_id || userData.id_str;
			let url = 'https://x.com/i/api/graphql/dQAjBEzWOl_hQwnc1sLUsA/UserMedia'
			let variables = {
				"userId": `${userID}`,
				"count": 200,
				"includePromotedContent": false,
				"withClientEventToken": false,
				"withBirdwatchNotes": false,
				"withVoice": true,
				"withV2Timeline": true
			};
			if(scriptDataStore.Show_all_Medias[id]?.cursor){
				variables.cursor = scriptDataStore.Show_all_Medias[id]?.cursor;
			}
			response = await request(new requestObject_twitter_get_user_media(url,variables));
			if(!response.status === "200")throw new Error(`Failed to fetch`);
			const instructions = response.response.data.user.result.timeline_v2.timeline.instructions;
			const TimelineAddEntries = instructions.find(element => element.type === 'TimelineAddEntries');
			if(!scriptDataStore.Show_all_Medias[id])scriptDataStore.Show_all_Medias[id] = {};
			scriptDataStore.Show_all_Medias[id].cursor = TimelineAddEntries.entries.find(element => element.entryId.match(/^cursor-bottom/)).content.value;
			const tweetData = instructions[0]?.moduleItems || TimelineAddEntries.entries[0]?.content?.items;
			processgraphQL(tweetData);
			return "OK";
		}
		async function getTL(){
			let requestObject;
			if(method == 'TL'){
				requestObject = new requestObject_twitter_time_line();
			}else{
				requestObject = new requestObject_twitter_time_line_forYou();
			}
			response = await request(requestObject);
			if(!response.status === "200")throw new Error(`Failed to fetch`);
			processgraphQL(response.response.data.home.home_timeline_urt.instructions[0].entries);
		}
		async function graphQL(){
			response = await request(new requestObject_twitter_api_graphql(id));
			if(!response.status === "200")throw new Error(`Failed to fetch`);
			processgraphQL(response.response.data.threaded_conversation_with_injections_v2.instructions[0].entries);
		}
		async function getUser(){
			if(fetchedTweetsUserDataByUserName[id]?.API_type === "graphQL" && !forceFetch)return;
			response = await request(new requestObject_twitter_get_user_by_screenname(id));
			if(!response.status === "200")throw new Error(`Failed to fetch`);
			const userData = response.response.data.user.result;
			fetchedTweetsUserData[userData.rest_id] = {...userData,"API_type": "graphQL"};
			fetchedTweetsUserDataByUserName[userData.legacy.screen_name] = fetchedTweetsUserData[userData.rest_id];
			return "OK";
		}
		async function getUser1_1(){
			if(fetchedTweetsUserDataByUserName[id] && !forceFetch)return;
			response = await request(new requestObject_twitter_get_user_by_screenname_1_1(id));
			if(!response.status === "200")throw new Error(`Failed to fetch`);
			if(response.response.status && !(fetchedTweets[response.response.status?.id_str]?.API_type === "graphQL")){
				fetchedTweets[response.response.status.id_str] = {...response.response.status,"API_type": "1_1"};
				response.response.status = fetchedTweets[response.response.status.id_str];
			}
			fetchedTweetsUserData[response.response.id_str] = {...response.response,"API_type": "1_1"};
			fetchedTweetsUserDataByUserName[response.response.screen_name] = fetchedTweetsUserData[response.response.id_str];
			return "OK";
		}
		async function get1_1(){
			const idsToFetch = forceFetch ? id : id.filter(singleId => !(fetchedTweets[singleId]?.API_type === "graphQL"));
			if(idsToFetch.length === 0) return;
			response = await request(new requestObject_twitter_api_v1_1(idsToFetch.join(",")));
			if(!response.status === "200")throw new Error(`Failed to fetch`);
			response.response.forEach((tweetData)=>{
				if(tweetData.quoted_status){
					let quoted = tweetData.quoted_status;
					if(!(fetchedTweetsUserData[quoted.user.id_str]?.API_type === "graphQL")){
						fetchedTweetsUserData[quoted.user.id_str] = {...quoted.user,"API_type": "1_1"};
						fetchedTweetsUserDataByUserName[quoted.user.screen_name] = fetchedTweetsUserData[quoted.user.id_str];
					}
					quoted.user = fetchedTweetsUserData[quoted.user.id_str];
					if(!(fetchedTweets[quoted.id_str]?.API_type === "graphQL")){
						fetchedTweets[quoted.id_str] = {...quoted,"API_type": "1_1"};
					}
					tweetData.quoted_status = fetchedTweets[quoted.id_str];
				}
				if(!(fetchedTweetsUserData[tweetData.user.id_str]?.API_type === "graphQL")){
					fetchedTweetsUserData[tweetData.user.id_str] = {...tweetData.user,"API_type": "1_1"};
					fetchedTweetsUserDataByUserName[tweetData.user.screen_name] = fetchedTweetsUserData[tweetData.user.id_str];
				}
				tweetData.user = fetchedTweetsUserData[tweetData.user.id_str];
				fetchedTweets[tweetData.id_str] = {...tweetData,"API_type": "1_1"};
			});
			return "OK";
		}
		function processgraphQL(entries){
			if(!entries)return null;
			entries.forEach(entry=>{
				const tmpData = entry.content?.itemContent?.tweet_results || entry.item?.itemContent?.tweet_results;
				let tweetData = tmpData?.result?.tweet || tmpData?.result;
				if(tweetData?.tombstone)return;
				if(!tweetData)return;
				try{
					if(tweetData.quoted_status_result){
						let quoted = tweetData.quoted_status_result.result?.tweet || tweetData.quoted_status_result.tweet || tweetData.quoted_status_result?.result;
						fetchedTweetsUserData[quoted.core.user_results.result.rest_id] = {...quoted.core.user_results.result,"API_type": "graphQL"};
						fetchedTweetsUserDataByUserName[quoted.core.user_results.result.legacy.screen_name] = fetchedTweetsUserData[quoted.core.user_results.result.rest_id];
						quoted.core.user_results.result = fetchedTweetsUserData[quoted.core.user_results.result.rest_id];
						fetchedTweets[quoted.rest_id] = {...quoted,"API_type": "graphQL"};
						tweetData.quoted_status_result.result = fetchedTweets[quoted.rest_id];
					}
					fetchedTweetsUserData[tweetData.core.user_results.result.rest_id] = {...tweetData.core.user_results.result,"API_type": "graphQL"};
					fetchedTweetsUserDataByUserName[tweetData.core.user_results.result.legacy.screen_name] = fetchedTweetsUserData[tweetData.core.user_results.result.rest_id];
					tweetData.core.user_results.result = fetchedTweetsUserData[tweetData.core.user_results.result.rest_id];
					fetchedTweets[tweetData.rest_id] = {...tweetData,"API_type": "graphQL"};
				}catch(error){
					console.error
					console.error({error: `processgraphQL error.\ndetails: ${error}`,apiResponse:tweetData});
				}
			});
			return "OK";
		}
	}
	async function getTweetData(id, method = 'graphQL', forceFetch = false){
		const dataStore = method === 'user' || method === 'user_1_1' ? fetchedTweetsUserDataByUserName : fetchedTweets;
		let ids;
		if(typeof id === 'string'){
			if(dataStore[id] && !forceFetch){
				if((method === "user" || method === "graphQL") && dataStore[id].API_type !== '1_1'){
					return dataStore[id];
				}
			}
			ids = [id];
		}else if(Array.isArray(id)){
			if(!forceFetch && id.every(singleId => dataStore[singleId] && !(dataStore[singleId].API_type === '1_1' && method !== 'graphQL')))return id.map(singleId => (dataStore[singleId]));
			ids = id;
		}else{
			throw new Error("Invalid ID type.");
		}
		if(method == "1_1") ids = [ids];
		let promises = ids.map(singleId => fetchAndProcessTwitterApi(method, singleId, forceFetch));
		await Promise.all(promises);

		if(typeof id === 'string'){
			if(dataStore[id]){
				return dataStore[id];
			}else{
				throw new Error("Failed to fetch tweet data for ID: " + id);
			}
		}else if(Array.isArray(id)){
			if(id.every(singleId => dataStore[singleId])){
				return id.map(singleId => dataStore[singleId]);
			}else{
				throw new Error("Failed to fetch tweet data for some IDs.");
			}
		}
	}
	function waitForTweetData(id, method = "graphQL", retry = 30, span = 100){
		let dataStore = method === 'user' || method === 'user_1_1' ? fetchedTweetsUserDataByUserName : fetchedTweets;
		if(typeof id === 'string'){
			if(dataStore[id]?.API_type === method)return dataStore[id];
			id = [id];
		}else if(Array.isArray(id)){
			if(id.every(singleId => dataStore[singleId]?.API_type === method))return id.map(singleId => dataStore[singleId]);
		}else{
			throw new Error(`Invalid ID type: ${typeof id}. Expected string or array.`);
		}
		return new Promise((resolve, reject) => {
			const MAX_RETRY_COUNT = retry;
			let retry_counter = 0;
			let set_interval_id = setInterval(isThereTweetData, span);
			async function isThereTweetData(){
				retry_counter++;
				if(dataStore[id]){
					clearInterval(set_interval_id);
					return resolve(dataStore[id]);
				}
				if(retry_counter > MAX_RETRY_COUNT){
					await getTweetData(id, method);
					if(typeof id === 'string'){
						if(dataStore[id]){
							return resolve(dataStore[id]);
						}else{
							return reject("Max retry count reached");
						}
					}else if(Array.isArray(id)){
						if(id.every(singleId => dataStore[singleId])){
							return resolve(id.map(singleId => dataStore[singleId]));
						}else{
							return reject("Max retry count reached");
						}
					}
				}
			}
		});
	}
	async function getFileSize(url){
		return (await request(new requestObject_binary_head(url))).responseHeaders.match(/content-length: ?(\d+)/)[1];
	}
	function decodeHtml(html){
		var txt = document.createElement("textarea");
		txt.innerHTML = html;
		return txt.value;
	}
	async function encodeBase64(data){
		const blob = new Blob([data], {type: 'text/plain; charset=UTF-8'});
		const reader = new FileReader();
		return new Promise((resolve, reject) => {
			reader.onloadend = () => resolve(reader.result.split(',')[1]);
			reader.onerror = reject;
			reader.readAsDataURL(blob);
		});
	}
	function decodeBase64(encodedData){
		const bytes = atob(encodedData).split('').map(char => char.charCodeAt(0));
		return new TextDecoder().decode(new Uint8Array(bytes));
	}
	function getDarkMode(){
		try{
			const color = ["#FFFFFF","#15202B","#000000"];
			const themeColor = document.querySelector('head > meta[name="theme-color"]').content;
			const darkModeNum = color.indexOf(themeColor);
			return darkModeNum || null;
		}catch{
			return 0;
		}
	}
	function openIndexedDB(dbName, storeName){
		return new Promise((resolve, reject) => {
			let request = indexedDB.open(dbName);

			request.onerror = (event) => {
				reject("Database error: " + event.target.errorCode);
			};

			request.onsuccess = (event) => {
				let db = event.target.result;
				if(db.objectStoreNames.contains(storeName)){
					resolve(db);
				}else{
					db.close();
					let newVersion = db.version + 1;
					let versionRequest = indexedDB.open(dbName, newVersion);
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
				let db = event.target.result;
				db.createObjectStore(storeName, { keyPath: 'id' });
			};
		});
	}

	function saveToIndexedDB(dbName, storeName, data, id = 522){
		return new Promise(async (resolve, reject) => {
			try{
				let db = await openIndexedDB(dbName, storeName);
				let transaction = db.transaction(storeName, 'readwrite');
				let store = transaction.objectStore(storeName);
				let putRequest = store.put({ id: id, data: data });

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
				let db = await openIndexedDB(dbName, storeName);
				let transaction = db.transaction(storeName, 'readonly');
				let store = transaction.objectStore(storeName);
				let getRequest = store.get(id);

				getRequest.onsuccess = (event) => {
					if(event.target.result){
						resolve(event.target.result.data);
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
	function openSettings(){
		let container = document.createElement('div');
		container.style.position = 'fixed';
		container.style.width = '70vw';
		container.style.height = '80vh';
		container.style.backgroundColor = 'rgba(220, 200, 200, 0.9)';
		container.style.zIndex = '9999';
		container.style.display = 'flex';
		container.style.maxHeight = '80vh';
		container.style.top = '50%'; // 画面の上から50%の位置
		container.style.left = '50%'; // 画面の左から50%の位置
		container.style.transform = 'translate(-50%, -50%)'; // 要素の中心を基準に位置を調整
		container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
		container.style.flexDirection = 'column';
		container.className = `settingWindowContainer`
		document.body.appendChild(container);
		let pages = {};
		let nav = document.createElement('div');
		nav.style.position = 'static';
		nav.style.top = '0';
		nav.style.left = '0';
		nav.style.width = '100%';
		nav.style.zIndex = '2';
		nav.style.display = 'flex';
		nav.style.flexWrap = 'wrap';
		container.appendChild(nav);
		let contentWrapper = document.createElement('div');
		contentWrapper.style.flexGrow = '1';
		contentWrapper.style.position = 'relative';
		contentWrapper.style.flexDirection = 'column';
		contentWrapper.style.display = 'flex';
		contentWrapper.style.overflowY = 'auto';
		container.appendChild(contentWrapper);
		let fotter = document.createElement('div');
		fotter.style.position = 'static';
		fotter.style.width = '100%';
		fotter.style.zIndex = '2';
		fotter.style.display = 'flex';
		fotter.style.flexWrap = 'wrap';
		fotter.style.left = '1em';
		fotter.style.bottom = '1em';
		container.appendChild(fotter);
		let saveAllButton = document.createElement('button');
		saveAllButton.textContent = 'Save All';
		saveAllButton.addEventListener('click', saveAll);
		fotter.appendChild(saveAllButton);
		let cancelButton = document.createElement('button');
		cancelButton.textContent = 'キャンセル';
		cancelButton.addEventListener('click', () => {
			container.remove();
			document.head.querySelectorAll('style.settingCss').forEach(s=>{
				s.remove();
			});
		});
		fotter.appendChild(cancelButton);

		/////////////////////////////////////////////
		/*
		function createPageTemplate(){
			const pageName = "hogehoge";
			const textData = env_Text[pageName];
			const thisStoredSettings = storedSettings[pageName];
			let thisScriptSettings = script_settings[pageName];
			const settingEntries = [
				{id: 'settings1', name: "設定1", type: 'radioButton', option: ['option1', 'option2', 'option3']},
				{id: 'settings2', name: "設定2", type: 'textBox'},
				{id: 'settings3', name: "設定3", type: 'toggleSwitch'},
			];
			let contents = createPage(pageName,pageName,textData.functionName);
			let mainContent = contents.main;
			mainContent.innerHTML = `
			<div class="${pageName}MainContents">
			</div>
			`;
			settingEntries.map(setting => {
				let settingElement = createSettingsElement(setting);
				let container = document.createElement('div');
				container.className = 'setting-item';
				let label = document.createElement('span');
				label.className = 'item_name';
				label.textContent = setting.name;
				container.appendChild(label);
				container.appendChild(settingElement);
				mainContent.firstChild.appendChild(container);
			});
			let style = document.createElement('style');
			style.className = `settingCss ${pageName}`
			style.textContent = `

			`;
			document.head.appendChild(style);
			pages[pageName].saveFunction = save;
			function save(){
				console.log(pageName)
			}
		}
		*/
		function creategGeneralPage(){
			const pageName = "general"
			let thisScript_settings = script_settings.Make_Twitter_little_useful;
			let contents = createPage(pageName,env_Text.general,env_Text.general);
			let mainContent = contents.main;
			let header = contents.header;
			const features = [
				{id: 'Note_Tweet_expander', name: env_Text.Note_Tweet_expander.functionName},
				{id: 'Engagement_Restorer', name: env_Text.Engagement_Restorer.functionName},
				{id: 'Hello_tweet_where_are_you_from', name: env_Text.Hello_tweet_where_are_you_from.functionName},
				{id: 'Show_me_your_Pixiv', name: env_Text.Show_me_your_Pixiv.functionName},
				{id: 'sneakilyFavorite', name: env_Text.sneakilyFavorite.functionName},
				{id: 'showFollowers', name: env_Text.showFollowers.functionName},
				{id: 'hideAnalytics', name: env_Text.hideAnalytics.functionName},
				{id: 'webhook_brings_tweets_to_discord', name: env_Text.webhook_brings_tweets_to_discord.functionName},
				{id: 'shareTweet_Restorer_for_mobile', name: env_Text.shareTweet_Restorer_for_mobile.functionName},
				{id: 'Show_all_Medias', name: env_Text.Show_all_Medias.functionName},
			];
			let featureListContent = features.map(feature => {
				return `
					<div class="featureItem">
					<label class="switch">
						<input type="checkbox" id="${feature.id}" class="featureToggle" ${thisScript_settings.featuresToggle[feature.id] === true ? 'checked' : ''}>
						<span class="slider round"></span>
					</label>
					<span>${feature.name}</span>
					</div>
				`;
			}).join('');
			mainContent.innerHTML = `
			<div class="${pageName}MainContents">
				<span class="item_name">${env_Text.featureToggle}</span>
				<div class="featureList">
					${featureListContent}
				</div>
				<span class="item_name">Language</span>
				<select id="languageSelect">
					${Object.keys(Text).map(lang_ => `<option value="${lang_}" ${lang_ === thisScript_settings.lang ? 'selected' : ''}>${lang_}</option>`).join('')}
				</select>
			</div>
			`;
			let style = document.createElement('style');
			style.className = `settingCss ${pageName}`
			style.textContent = `
			.switch {
				position: relative;
				display: inline-block;
				width: 2.58em;
				height: 1em;
			}
			.switch input {
				opacity: 0;
				width: 0;
				height: 0;
			}
			/* スライダーのスタイル */
			.slider {
				position: absolute;
				cursor: pointer;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: #ccc;
				transition: .4s;
				border-radius: 1em;  /* 高さに合わせてborder-radiusを変更 */
			}

			.slider:before {
				position: absolute;
				content: "";
				height: 0.8em;  /* 高さを0.8emに変更 */
				width: 0.8em;   /* 幅を0.8emに変更 */
				left: 0.1em;    /* 位置を調整 */
				bottom: 0.1em;  /* 位置を調整 */
				background-color: white;
				transition: .4s;
				border-radius: 50%;
			}

			input:checked + .slider {
				background-color: #2196F3;
			}

			input:checked + .slider:before {
				transform: translateX(1.6em);  /* スライダーの移動距離を調整 */
			}
			`;
			document.head.appendChild(style);
			pages[pageName].saveFunction = save;
			function save(){
				features.forEach(feature => {
					const checkbox = document.getElementById(feature.id);
					thisScript_settings.featuresToggle[feature.id] = checkbox.checked;
				});
				thisScript_settings.lang = document.getElementById('languageSelect').value;
				localStorage.setItem('Make_Twitter_little_useful', JSON.stringify(thisScript_settings));
				storedSettings[pageName] = JSON.parse(localStorage.getItem('webhook_brings_tweets_to_discord') || '{}');
				env_Text = Text[thisScript_settings.lang];
			}
		}
		function createShowMeYourPixiv(){
			const pageName = "Show_me_your_Pixiv";
			const textData = env_Text[pageName];
			const thisStoredSettings = storedSettings[pageName];
			let thisScriptSettings = script_settings[pageName];
			const settingEntries = [
				{id: 'showMeYourPixivCollectionMethod', name: textData.collectionMethod, type: 'radioButton', option: [textData.everywhere, textData.atProfile, textData.never]},
				//{id: 'settings2', name: "設定2", type: 'textBox'},
				//{id: 'settings3', name: "設定3", type: 'toggleSwitch'},
			];
			let contents = createPage(pageName,pageName,textData.functionName);
			let mainContent = contents.main;
			mainContent.innerHTML = `
			<div class="${pageName}MainContents">
			</div>
			`;
			settingEntries.map(setting => {
				let settingElement = createSettingsElement(setting,thisStoredSettings[setting.id]);
				let container = document.createElement('div');
				container.className = 'setting-item';
				let label = document.createElement('span');
				label.className = `${setting.id}`;
				label.textContent = setting.name;
				container.appendChild(label);
				container.appendChild(settingElement);
				mainContent.appendChild(container);
			});
			const addPixivUrlListContainer = document.createElement('div');
			const addPixivUrlListTitle = document.createElement('span');
			addPixivUrlListTitle.innerText = textData.addPixivUrlListTitle;
			const addPixivUrlListButton = document.createElement('button');
			addPixivUrlListButton.textContent = "download";
			addPixivUrlListButton.addEventListener('click',async () =>{
				await addPixivUrlList();
			});
			addPixivUrlListContainer.appendChild(addPixivUrlListTitle);
			addPixivUrlListContainer.appendChild(addPixivUrlListButton);
			mainContent.querySelector('.setting-item').appendChild(addPixivUrlListContainer);
			document.head.appendChild(style);
			pages[pageName].saveFunction = save;
			function save(){
				const settingsToSave = {};
				settingEntries.forEach(setting => {
					let value,selectedRadio;
					switch(setting.type){
						case 'radioButton':
							selectedRadio = document.querySelector(`input[name="${setting.id}"]:checked`);
							value = selectedRadio ? parseInt(selectedRadio.value, 10) : null;
							break;

						case 'textBox':
							value = document.getElementById(setting.id).value;
							break;

						case 'toggleSwitch':
							value = document.querySelector(`[id="${setting.id}"] input[type="checkbox"]`).checked;
							break;
					}
					settingsToSave[setting.id] = value;
				});
				localStorage.setItem(pageName, JSON.stringify(settingsToSave));
				script_settings['Show_me_your_Pixiv'] = settingsToSave;
			}
			async function addPixivUrlList(){
				const downloadData = JSON.parse((await request(new requestObject('https://dl.dropboxusercontent.com/s/stvehlbre5gir6xtaxgz8/screenName2PixivID.json?rlkey=0vqz5kb333fehmcd1xtftj9b5'))).response);
				if(!(Object.keys(downloadData).length > 100)){
					customAlert(textData.faildAddPixivUrlList);
					return;
				}
				scriptDataStore.Show_me_your_Pixiv_dataBase = downloadData;
				await saveToIndexedDB('Show_me_your_Pixiv','pixiv_link_collection_dataBase',downloadData);
				customAlert(textData.successAddPixivUrlList);
			}
		}
		function createShowAllMediasSettingPage(){
			const pageName = "Show_all_Medias";
			const textData = env_Text[pageName];
			const thisStoredSettings = storedSettings[pageName];
			let thisScriptSettings = script_settings[pageName];
			const settingEntries = [
				{id: 'displayMethod', name: textData.displayMethod, type: 'radioButton', option: [textData.expand ,textData.likeTweet]},
				{id: 'removeBlur', name: textData.removeBlur, type: 'toggleSwitch'},
				{id: 'onlyRemoveBlur', name: textData.onlyRemoveBlur, type: 'toggleSwitch'},
				//{id: 'settings2', name: "設定2", type: 'textBox'},
				//{id: 'settings3', name: "設定3", type: 'toggleSwitch'},
			];
			let contents = createPage(pageName,pageName,textData.functionName);
			let mainContent = contents.main;
			mainContent.innerHTML = `
			<div class="${pageName}MainContents">
			</div>
			`;
			settingEntries.map(setting => {
				let settingElement = createSettingsElement(setting,thisStoredSettings[setting.id]);
				let container = document.createElement('div');
				container.className = 'setting-item';
				let label = document.createElement('span');
				label.className = `${setting.id}`;
				label.textContent = setting.name;
				container.appendChild(label);
				container.appendChild(settingElement);
				mainContent.appendChild(container);
			});
			/*
			let style = document.createElement('style');
			style.className = `settingCss ${pageName}`
			style.textContent = `

			`;
			*/

			document.head.appendChild(style);
			pages[pageName].saveFunction = save;
			function save(){
				const settingsToSave = {};
				settingEntries.forEach(setting => {
					let value,selectedRadio;
					switch(setting.type){
						case 'radioButton':
							selectedRadio = document.querySelector(`input[name="${setting.id}"]:checked`);
							value = selectedRadio ? parseInt(selectedRadio.value, 10) : null;
							break;

						case 'textBox':
							value = document.getElementById(setting.id).value;
							break;

						case 'toggleSwitch':
							value = document.querySelector(`[id="${setting.id}"] input[type="checkbox"]`).checked;
							break;
					}
					settingsToSave[setting.id] = value;
				});
				localStorage.setItem(pageName, JSON.stringify(settingsToSave));
				script_settings['Show_all_Medias'] = settingsToSave
			}
		}
		function createAdvancedPage(){
			const pageName = "Advanced";
			const textData = env_Text[pageName];
			let contents = createPage(pageName);
			contents.header.innerHTML = `<span style="font-size: 2em; font-weight: 700">${textData.functionName}</span>`;
			contents.footer.innerHTML = "";
			let mainContent = contents.main;
			mainContent.innerHTML = `
			<div class="${pageName}MainContents">
				<span class="item_name">${textData.ExportSettings}</span>
				<input type="button" id="exportButton" style="display: none;">
				<label for="exportButton" class="customFileIO"">${textData.Export}</label><br>
				<span class="item_name">${textData.ImportSettings}</span>
				<input type="file" id="importFile" accept=".json" style="display: none;">
				<label for="importFile" class="customFileIO">${textData.Inport}</label><br>
			</div>
			`;
			let style = document.createElement('style');
			style.className = `settingCss ${pageName}`
			style.textContent = `
			.customFileIO {
				display: inline-block;
				padding: 0.5em 1em;
				background-color: rgb(30, 39, 50);
				color: white;
				cursor: pointer;
				border-radius: 5px;
				height: 1em;
				line-height: 1em;
			}
			`;
			document.head.appendChild(style);
			const exportSettings = () => {
				const data = {
					Make_Twitter_little_useful_script_SettingsData: storedSettings,
				};
				const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
				const downloadAnchorNode = document.createElement('a');
				downloadAnchorNode.setAttribute("href", dataStr);
				downloadAnchorNode.setAttribute("download", "scriptSettings.json");
				document.body.appendChild(downloadAnchorNode);
				downloadAnchorNode.click();
				downloadAnchorNode.remove();
			};
			const importSettings = (event) => {
				const file = event.target.files[0];
				if(file){
					const reader = new FileReader();
					reader.onload = function(e) {
						try{
							const importedData = JSON.parse(e.target.result);
							if(!importedData || !importedData.Make_Twitter_little_useful_script_SettingsData){
								throw new Error("Invalid data format");
							}
							const importedSettings = importedData.Make_Twitter_little_useful_script_SettingsData;
							for(let key in importedSettings){
								localStorage.setItem(key, JSON.stringify(importedSettings[key]));
							}
							location.reload();
						}catch(error){
							console.error(error);
							customAlert(textData.invalidJson);
						}
					};
					reader.readAsText(file);
				}
			};
			document.getElementById("exportButton").addEventListener("click", exportSettings);
			document.getElementById("importFile").addEventListener("change", importSettings);
			pages[pageName].saveFunction = save;
			function save(){
				return;
			}
		}
		function createDebugPage(){
			const pageName = "ForDebug";
			const textData = env_Text[pageName];
			let contents = createPage(pageName);
			contents.header.innerHTML = `<span style="font-size: 2em; font-weight: 700">${textData.functionName}</span>`;
			contents.footer.innerHTML = "";
			let mainContent = contents.main;
			let mainContainer = document.createElement("div");
			mainContainer.className = `${pageName}MainContents`
			mainContainer.style.display = "flex";
			mainContainer.style.flexDirection = "column";
			let showTweetDataContainer = makeInputMenu('showTweetData');
			mainContainer.appendChild(showTweetDataContainer);

			let showUserByScreenNameDataContainer = makeInputMenu('showUserByScreenNameData');
			mainContainer.appendChild(showUserByScreenNameDataContainer);

			let showUserByUserIDContainer = makeInputMenu('showUserByUserID');
			mainContainer.appendChild(showUserByUserIDContainer);
			mainContent.appendChild(mainContainer);
			pages[pageName].saveFunction = save;
			function makeInputMenu(name){
				let container = document.createElement('div');
				container.className = `${name}`;
				container.style.display = 'flex';
				container.style.flexDirection = 'column';

				let title = document.createElement('span');
				title.className = "item_name";
				title.innerText = name;
				container.appendChild(title);

				let inputElement = document.createElement('input');
				inputElement.className = `${name}InputElement`;
				inputElement.type = 'text';
				inputElement.style.width = 'fit-content'
				container.appendChild(inputElement);
				let selectContainer = document.createElement('div');
				let useMethod, isForce;
				if(name !== 'showUserByUserID'){
					useMethod = document.createElement('select');
					useMethod.className = `${name}SelectElement`;
					['graphQL','1_1'].forEach(value => {
						const option = document.createElement('option');
						option.value = value;
						option.textContent = value;
						useMethod.appendChild(option);
					});
					selectContainer.appendChild(useMethod);

					isForce = document.createElement('select');
					isForce.className = `${name}SelectElement`;
					['false','true'].forEach(value => {
						const option = document.createElement('option');
						option.value = value;
						option.textContent = value;
						isForce.appendChild(option);
					});
					selectContainer.appendChild(isForce);
				}
				const button = document.createElement('button');
				button.className = `${name}ButtonElement`;
				button.textContent = textData.get;
				button.addEventListener('click', whenButtonClicked);
				selectContainer.appendChild(button);
				container.appendChild(selectContainer);

				return container;
				async function whenButtonClicked(){
					const inputValue = inputElement?.value;
					const selectedMethod = useMethod?.value;
					const forceValue = isForce?.value;
					switch(name){
						case('showTweetData'):
							console.log(await getTweetData(inputValue,selectedMethod,(forceValue === "true"? true :false)));
							break;
						case('showUserByScreenNameData'):
							console.log(await getTweetData(inputValue,(selectedMethod === "1_1" ? "user_1_1" : "user"),(forceValue === "true"? true :false)));
							break;
						case('showUserByUserID'):
							console.log(fetchedTweetsUserData[inputValue]);
							break;
					}
				}
			}
			function save(){
				return;
			}
		}
		function createStylePage(){
			const pageName = "style";
			const textData = env_Text[pageName];
			const thisStoredSettings = storedSettings[pageName];
			let thisScriptSettings = script_settings[pageName];
			let contents = createPage(pageName,pageName,textData.functionName);
			let mainContent = contents.main;
			mainContent.innerHTML = `
			<div class="${pageName}MainContents">
				<span class="item_name">hogehoge</span>
			</div>
			`;
			document.head.querySelectorAll(`style.settingCss.${pageName}`).forEach(e=>e.remove());
			let style = document.createElement('style');
			style.className = `settingCss ${pageName}`
			style.textContent = `

			`;
			document.head.appendChild(style);
			pages[pageName].saveFunction = save;
			function save(){
				console.log(pageName)
			}
		}
		function createWebhook_brings_tweets_to_discordPage(){
			const pageName = "webhook_brings_tweets_to_discord"
			const textData = env_Text.webhook_brings_tweets_to_discord;
			let contents = createPage(pageName,"webhook",textData.functionName);
			let mainContent = contents.main;
			const thisStoredSettings = storedSettings[pageName];
			let thisScriptSettings = script_settings[pageName];
			mainContent.innerHTML = `
			<div class="${pageName}MainContents webhook-container" style="">
				<span class="item_name">Webhooks</span>
				<div id="webhooks" style="">
					<!-- ここにWebhookの設定行が動的に追加されます -->
				</div>
				<div class="addWebhookButton">
					<button id="addWebhook">+</button>
				</div>
				<div class="defaultWebhook">
					<span class="item_name">${textData.default}Webhook</span><br>
					<select id="defaultWebhook"></select>
				</div>
				<div class="displayMethod">
					<span class="item_name">${textData.display_method}</span><br>
					<select id="displayMethod">
						<option value="method1">${textData.display_everywhere}</option>
						<option value="method2">${textData.tweet_details_only}</option>
					</select>
				</div>
				<div class="sendLangage">
					<span class="item_name">${textData.language}</span><br>
					<select id="sendLanguageSelect">
						${Object.keys(Text).map(lang_ => `<option value="${lang_}" ${lang_ === script_settings.webhook_brings_tweets_to_discord.lang ? 'selected' : ''}>${lang_}</option>`).join('')}
					</select>
				</div>
				<div class="downloadVideo">
					<span class="item_name">${textData.Video_Download_Option}</span><br>
					<input type="radio" id="downloadYes" name="downloadOption" value="true" ${thisStoredSettings.downloadVideo === true ? 'checked' : ''}>
					<label for="downloadYes">Yes</label>
					<input type="radio" id="downloadNo" name="downloadOption" value="false" ${thisStoredSettings.downloadVideo === false ? 'checked' : ''}>
					<label for="downloadNo">No</label>
				</div>
				<br>
			</div>
			`;
			let style = document.createElement('style');
			style.className = `settingCss ${pageName}`
			style.textContent = `
			.webhook-container {
				display: flex;
				flex-direction: column;
			}

			.webhook-row {
				display: flex;
				align-items: center; /* 子要素を中央揃えにする */
				flex-wrap: wrap; /* 必要に応じて折り返す */
			}

			.webhook-name,.webhook-url{
				margin-right: 5px; /* 余白を追加 */
			}

			`;
			document.head.appendChild(style);
			document.getElementById('addWebhook').addEventListener('click', () => {
				addWebhookRow();
			});
			function addWebhookRow(name = '', url = ''){
				let row = document.createElement('div');
				row.className = 'webhook-row';
				row.innerHTML = `
				<div style="display:flex;border-bottom: 1px solid;flex-wrap: wrap;">
					<div class="WebhookName">
						<label>Name:</label>
						<input type="text" class="webhook-name" value="${name}">
					</div>
					<div class=">WebhookUrl">
						<label>URL:</label>
						<input type="text" class="webhook-url" value="${url}">
					</div>
					<div class="removeWebhookButton">
						<button class="removeWebhook">X</button>
					</div>
				</div>
				`;
				row.querySelector('.removeWebhook').addEventListener('click', () => {
					row.remove();
					updateDefaultWebhookOptions();
				});
				document.getElementById('webhooks').appendChild(row);
			}
			//console.log(thisStoredSettings.data)
			function updateDefaultWebhookOptions(){
				let select = document.getElementById('defaultWebhook');
				select.innerHTML = '';
				let webhookElements = document.getElementById('webhooks').children;
				for(let elem of webhookElements){
					let name = elem.querySelector('.webhook-name').value;
					if(name){
						let option = document.createElement('option');
						option.value = name;
						option.textContent = name;
						select.appendChild(option);
					}
				}
			}
			if(thisStoredSettings.data){
				for(let item of thisStoredSettings.data){
					let decodedUrl = 'https://discord.com/api/webhooks/' + decodeBase64(item.value);
					addWebhookRow(item.name, decodedUrl);
					let option = document.createElement('option');
					option.value = item.name;
					option.textContent = item.name;
					document.getElementById('defaultWebhook').appendChild(option);
				}
			}
			pages[pageName].saveFunction = save;
			async function save(){
				let data = [];
				let names = [];
				let hasDuplicate = false;
				let hasInvalidWebhook = false;
				let webhookElements = document.getElementById('webhooks').children;

				for(let elem of webhookElements){
					let name = elem.querySelector('.webhook-name').value;
					let url = elem.querySelector('.webhook-url').value;

					if(name && url){
						if(!/^https:\/\/discord\.com\/api\/webhooks\/[\w-]+\/[\w-]+$/.test(url)){
							elem.querySelector('.webhook-url').style.backgroundColor = 'red';
							hasInvalidWebhook = true; // 無効なWebhookを検出
							continue;
						}else{
							elem.querySelector('.webhook-url').style.backgroundColor = '';
						}

						// URLをBase64エンコード
						let encodedUrl = await encodeBase64(url.replace('https://discord.com/api/webhooks/', ''));
						if(names.includes(name)){
							hasDuplicate = true;
							elem.querySelector('.webhook-name').style.backgroundColor = 'red';
						}else{
							names.push(name);
							elem.querySelector('.webhook-name').style.backgroundColor = '';
							data.push({ name, value: encodedUrl });
						}
					}
				}
				if(hasDuplicate){
					customAlert(textData.when_webhook_name_duplicate);
					return;
				}
				if(hasInvalidWebhook){
					customAlert(textData.when_webhook_url_invalid);
					return;
				}
				// 設定をJSON形式で保存
				let selectedLanguage = document.getElementById('sendLanguageSelect').value;
				let settings = {
					data: data,
					downloadVideo: getDownloadOption(),
					defaultWebhook: document.getElementById('defaultWebhook').value,
					displayMethod: document.getElementById('displayMethod').value,
					lang: selectedLanguage
				};
				localStorage.setItem('webhook_brings_tweets_to_discord', JSON.stringify(settings));

				// 保存した設定を再度読み込む
				storedSettings[pageName] = JSON.parse(localStorage.getItem('webhook_brings_tweets_to_discord') || '{}');

				script_settings[pageName] = {
					"displayMethod": storedSettings[pageName].displayMethod || 'method1',
					"lang": storedSettings[pageName].lang || GetCookie("lang") || 'en',
					"defaultWebhook": storedSettings[pageName].defaultWebhook,
					"webHooks": (function(data){
						let webhooks = {};
						if(data && Array.isArray(data)){
							data.forEach(item => {
								if(item.name && item.value){
									webhooks[item.name] = item.value;
								}
							});
						}
						return webhooks;
					})(storedSettings[pageName].data)
				};
				updateDefaultWebhookOptions();
				document.querySelectorAll('.quickDimg').forEach((target)=>{target.remove()});
				main(true);
				function getDownloadOption(){
					const radioButtons = document.querySelectorAll('.downloadVideo input[name="downloadOption"]');
					for(let i = 0; i < radioButtons.length; i++){
						if(radioButtons[i].checked){
							return radioButtons[i].value === "true";
						}
					}
					return null;
				}
			};
		}

		function createPage(name,buttonText = undefined,headerText = undefined){
			let page = document.createElement('div');
			page.style.position = 'relative';
			page.style.display = 'flex';
			page.style.flexDirection = 'column';
			page.style.flexGrow = '0';
			page.style.flexShrink = '1';
			page.style.top = '0';
			page.style.left = '0';
			page.style.width = 'auto';
			page.style.height = 'auto';
			page.style.zIndex = '-1';
			page.style.overflowY = 'auto';
			page.style.border = '1px solid black';
			page.style.padding = "0.5em";
			page.className = `${name} settingChildWindow`;
			page.setAttribute('settingName', name);
			let header = document.createElement('div');
			header.className = 'pageHeader';
			header.innerHTML = `<span style="font-size: 2em; font-weight: 700">${headerText || name} ${env_Text.settings}</span>`;
			header.style.color = 'black';
			page.appendChild(header);
			let contentContainer = document.createElement('div');
			contentContainer.className = 'pageContent';
			contentContainer.style.display = 'flex';
			contentContainer.style.flexDirection = 'column';
			contentContainer.style.overflowY = 'auto';
			contentContainer.style.color = 'black';
			page.appendChild(contentContainer);
			let footer = document.createElement('div');
			footer.className = 'pageFooter';
			footer.style.marginTop = "1em";
			let saveButton = document.createElement('button');
			saveButton.textContent = 'Save';
			saveButton.addEventListener('click', function(){
				if(pages[name] && typeof pages[name].saveFunction === 'function'){
					pages[name].saveFunction();
				}
			});
			footer.appendChild(saveButton);
			page.appendChild(footer);
			pages[name] = {
				"page": page,
				"saveFunction": function(){}
			};
			contentWrapper.appendChild(page);
			makeChangePageButton(name,buttonText)
			return {"all": page,"header": header,"main": contentContainer,"footer": footer};
		}
		function createSettingsElement(setting, storedValue){
			let element,checkbox,slider;
			switch(setting.type){
				case 'radioButton':
					element = document.createElement('div');
					setting.option.forEach((opt, index) => {
						let label = document.createElement('label');
						let radioButton = document.createElement('input');
						radioButton.type = 'radio';
						radioButton.name = setting.id;
						radioButton.value = index;
						if(storedValue === index){
							radioButton.checked = true;
						}
						label.appendChild(radioButton);
						label.appendChild(document.createTextNode(opt));
						element.appendChild(label);
					});
					break;
				case 'textBox':
					element = document.createElement('input');
					element.type = 'text';
					element.id = setting.id;
					element.value = storedValue || '';
					break;
				case 'toggleSwitch':
					element = document.createElement('label');
					element.className = 'switch';
					element.id = setting.id;
					checkbox = document.createElement('input');
					checkbox.type = 'checkbox';
					checkbox.checked = storedValue || false;
					slider = document.createElement('span');
					slider.className = 'slider';
					element.appendChild(checkbox);
					element.appendChild(slider);
					break;
			}
			return element;
		}
		function showPage(name){
			for(let key in pages){
				if(key === name){
					pages[key].page.style.zIndex = '1';
					pages[key].page.style.display = 'flex';
				}else{
					pages[key].page.style.zIndex = '-1';
					pages[key].page.style.display = 'none';
				}
			}
		}
		function makeChangePageButton(name,buttonText = undefined){
			if(buttonText === undefined)buttonText = name;
			let homeButton = document.createElement('button');
			homeButton.textContent = buttonText;
			homeButton.addEventListener('click', () => showPage(name));
			nav.appendChild(homeButton);
		}
		async function saveAll(){
			for(let key in pages){
				await pages[key].saveFunction();
			}
			container.remove();
			document.head.querySelectorAll('style.settingCss').forEach(s=>{
				s.remove();
			});
			storedSettings = {
				'Make_Twitter_little_useful': JSON.parse(localStorage.getItem('Make_Twitter_little_useful') || '{}'),
				'webhook_brings_tweets_to_discord': JSON.parse(localStorage.getItem('webhook_brings_tweets_to_discord') || '{}'),
				'Hello_tweet_where_are_you_from': JSON.parse(localStorage.getItem('Hello_tweet_where_are_you_from') || '{}'),
				'Show_me_your_Pixiv': JSON.parse(localStorage.getItem('Show_me_your_Pixiv') || '{}'),
				'Note_Tweet_expander': JSON.parse(localStorage.getItem('Note_Tweet_expander') || '{}'),
				'sneakilyFavorite': JSON.parse(localStorage.getItem('sneakilyFavorite') || '{}'),
				'Engagement_Restorer': JSON.parse(localStorage.getItem('Engagement_Restorer') || '{}'),
				'Show_all_Medias': JSON.parse(localStorage.getItem('Show_all_Medias') || '{}'),
			}
		}
		let style = document.createElement('style');
		style.className = "settingCss"
		style.textContent = `
			.pageHeader, .pageFooter {
				flex-shrink: 0;
			}
			.pageContent {
				flex-grow: 1;
				overflow-y: auto;
			}
			.item_name {
				font-size: 1.5em;
			}
		`;
		document.head.appendChild(style);
		creategGeneralPage();
		createShowAllMediasSettingPage();
		createShowMeYourPixiv();
		createWebhook_brings_tweets_to_discordPage();
		createAdvancedPage();
		createDebugPage();
		showPage('general');
	}
	GM_registerMenuCommand('script settings', openSettings);
	function customAlert(message, url){
		let overlay = document.createElement('div');
		overlay.style.position = 'fixed';
		overlay.style.top = '0';
		overlay.style.left = '0';
		overlay.style.width = '100%';
		overlay.style.height = '100%';
		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		overlay.style.zIndex = '10000';
		let alertBox = document.createElement('div');
		alertBox.style.position = 'absolute';
		alertBox.style.top = '50%';
		alertBox.style.left = '50%';
		alertBox.style.transform = 'translate(-50%, -50%)';
		alertBox.style.padding = '20px';
		alertBox.style.backgroundColor = 'white';
		alertBox.style.border = '1px solid black';
		alertBox.style.zIndex = '10001';
		alertBox.style.maxWidth = '80%'; // ボックスの最大幅を設定してテキストを折り返します
		alertBox.style.whiteSpace = 'pre-wrap'; // 改行と空白を保持します

		let alertMessage = document.createElement('p');
		alertMessage.innerHTML = message.replace(/\n/g, '<br>'); // \nを<br>に置き換えて改行を表示します
		alertMessage.style.color = 'black';

		let closeButton = document.createElement('button');
		closeButton.textContent = env_Text.close;
		alertBox.addEventListener('click', (e) => {
			e.stopPropagation(); // これにより、イベントがoverlayまで伝播しなくなります
		});
		overlay.addEventListener('click', () => {
			document.body.removeChild(overlay);
		});
		closeButton.addEventListener('click', () => {
			document.body.removeChild(overlay);
		});

		alertBox.appendChild(alertMessage);

		// URLが提供された場合、それを表示するa要素を作成します
		if(url){
			let urlElement = document.createElement('a');
			urlElement.href = url;
			urlElement.textContent = url;
			urlElement.style.display = 'block';
			urlElement.style.marginTop = '10px';
			urlElement.target = '_blank';
			urlElement.rel = 'noopener';
			alertBox.appendChild(urlElement);
		}
		alertBox.appendChild(closeButton);
		overlay.appendChild(alertBox);
		document.body.appendChild(overlay);
	}

	function request(object, maxRetries = 0, timeout = 60000){
		let retryCount = 0;
		while(retryCount <= maxRetries){
			try{
				return new Promise((resolve, reject) => {
					GM_xmlhttpRequest({
						method: object.method,
						url: object.url,
						headers: object.headers,
						responseType: object.respType,
						data: object.body,
						anonymous: object.anonymous,
						timeout: timeout,
						onload: function(responseDetails){
							return resolve(responseDetails);
						},
						ontimeout: function(responseDetails){
							console.warn(responseDetails);
							return reject(`[request]time out:\nresponse ${responseDetails}`);
						},
						onerror: function(responseDetails){
							console.warn(responseDetails);
							return reject(`[request]error:\nresponse ${responseDetails}`);
						}
					});
				});
			}catch(error){
				retryCount++;
				console.warn(`Retry ${retryCount}: Failed to fetch ${object.url}. Reason: ${error}`);
				if(retryCount === maxRetries){
					throw new Error(`Failed to fetch ${object.url} after ${maxRetries} retries.`);
				}
			}
		}
	}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////CTA/////////////////////////////////
/////////////////////////////////////////////////////////////////////
	let ctaEngagementStore = {};
	async function createTwitterArticle(targetTweetData,tweetId,appendParentNode,noAppend = false){
		let texts = {};
		texts.ja = {
			"units": "万",
			"roundingScale": 10000,
			"decimalPlaces": 2,
			"retweet": "リツイート",
			"like": "いいね",
			"bookmark": "ブックマーク",
			"doneRetweet": "リツイートしました",
			"doneLike": "いいねしました",
			"doneBookmark": "ブックマークしました",
			"faildRetweet": "リツイートに失敗しました",
			"faildUnRetweet": "リツイートの取り消しに失敗しました",
			"faildLike": "いいねにしっぱいしました",
			"faildUnLike": "いいねの取り消しに失敗しました",
			"faildBookmark": "ブックマークに失敗しました",
			"faildUnBookmark": "ブックマークの取り消しに失敗しました",
			"unRetweet": "リツイートを取り消しました",
			"unLike": "いいねを取り消しました",
			"unBookmark": "ブックマークを取り消しました",
		};
		texts.en = {
			"units": "k",
			"roundingScale": 1000,
			"decimalPlaces": 1,
			"retweet": "Retweet",
			"like": "Like",
			"bookmark": "Bookmark",
			"doneRetweet": "Retweeted",
			"doneLike": "Liked",
			"doneBookmark": "Bookmarked",
			"faildRetweet": "Failed to Retweet",
			"faildUnRetweet": "Failed to Undo Retweet",
			"faildLike": "Failed to Like",
			"faildUnLike": "Failed to Undo Like",
			"faildBookmark": "Failed to Bookmark",
			"faildUnBookmark": "Failed to Undo Bookmark",
			"unRetweet": "Retweet Undone",
			"unLike": "Like Undone",
			"unBookmark": "Bookmark Undone",
		};
		let textData = GetCookie("lang") === "ja" ? texts.ja : texts.en;
		let night_mode = getDarkMode() || 0;
		let colors = {
			"fontColor": ['rgb(15, 20, 25)','rgb(247, 249, 249)','rgb(231, 233, 234)'][night_mode],
			"fontColorDark": ['rgb(83, 100, 113)','rgb(139, 152, 165)','rgb(113, 118, 123)'][night_mode],
			"backgroundColor": ['rgba(255,255,255,1.00)','rgb(21, 32, 43)','rgba(0, 0, 0, 1.00)'][night_mode],
			"borderBottomColor": ['rgb(239, 243, 244)','rgb(56, 68, 77)','rgb(47, 51, 54)'][night_mode],
		}
		let tweetData = await tweetDataProsess(targetTweetData,tweetId);
		let quotedTweetData = targetTweetData.quoted_status_result?.result || targetTweetData.quoted_status || null;
		if(quotedTweetData){
			quotedTweetData = await tweetDataProsess(quotedTweetData);
		}
		let tweetNode = document.createElement('div');
		let headerNode = createHeaderNode();
		let avatarNode = createAvatarNode();
		let authorNode = createAuthorNode();
		let textNode = createTextNode();
		let mediaNode = createMediaNode();
		let quotedNode = createQuotedNode();
		let engagementsNode = createEngagementNode();
		tweetNode.innerHTML = `
			<div data-testid="cellInnerDiv" style="width: 100%;">
				<div class="cta-base cta-display-block cta-outline-style-none" style="border-bottom-color: ${colors.borderBottomColor}; border-bottom-width: 1px;">
					<div class="cta-base">
						<article aria-labelledby="" role="article" tabindex="0" class="cta-base cta-flex-direction-row cta-overflow-hidden cta-padding-right cta-padding-left cta-transition-duration cta-transition-property cta-outline-style-none cta-cursor-pointer" data-testid="tweet">
							<div class="cta-base cta-flex-direction-column cta-flex-grow-1 cta-flex-shrink-1">
								<div class="cta-base cta-flex-grow-1 cta-flex-shrink-1 cta-outline-style-none" cta-id="header">
								<!--ヘッダー-->
									<div class="cta-base cta-flex-direction-row" cta-id="avatar-place">
									<!--アバター-->
										<div class="cta-base cta-flex-basis-0px cta-flex-grow-1 cta-justify-content-center cta-padding-bottom" cta-id="main">
										<!--ユーザー名とか-->
										<!--ツイートのテキスト-->
										<!--メディア-->
										<!--引用-->
										<!--エンゲージメントとか-->
										</div>
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		`.replace(/\t|\n/g, '');
		if(headerNode)tweetNode.querySelector('[cta-id="header"]').insertBefore(headerNode.firstChild, tweetNode.querySelector('[cta-id="header"]').firstChild);
		if(avatarNode)tweetNode.querySelector('[cta-id="avatar-place"]').insertBefore(avatarNode.firstChild, tweetNode.querySelector('[cta-id="avatar-place"]').firstChild);
		if(authorNode)tweetNode.querySelector('[cta-id="main"]').appendChild(authorNode.firstChild);
		if(textNode)tweetNode.querySelector('[cta-id="main"]').appendChild(textNode.firstChild);
		if(mediaNode)tweetNode.querySelector('[cta-id="main"]').appendChild(mediaNode.firstChild);
		if(quotedNode)tweetNode.querySelector('[cta-id="main"]').appendChild(quotedNode.firstChild);
		if(engagementsNode)tweetNode.querySelector('[cta-id="main"]').appendChild(engagementsNode.firstChild);
		if(noAppend){
			return tweetNode.firstChild;
		}else{
			appendParentNode.appendChild(tweetNode.firstChild);
			return "finished";
		}
		async function tweetDataProsess(tweetData,tweetId){
			let twitter_user_data = {};
			let twitter_tweet_data = {};
			let tweet_user_data_json = {};
			let tweet_tweet_data_json = {};
			tweet_user_data_json = tweetData.core?.user_results?.result || tweetData.user?.result || tweetData.user;
			tweet_tweet_data_json = tweetData.legacy || tweetData;
			if(!(tweet_user_data_json&&tweet_tweet_data_json)){
				tweetData = await getTweetData(tweetId,'graphQL',true);
				tweet_user_data_json = tweetData.core?.user_results?.result || tweetData.user?.result || tweetData.user;
				tweet_tweet_data_json = tweetData.legacy || tweetData;
			}
			twitter_user_data.ID = tweet_user_data_json.rest_id || tweet_user_data_json.id_str;
			twitter_user_data.screen_name = tweet_user_data_json.legacy?.screen_name || tweet_user_data_json.screen_name;
			twitter_user_data.name = tweet_user_data_json.legacy?.name || tweet_user_data_json.name;
			twitter_user_data.profile_image = tweet_user_data_json.legacy?.profile_image_url_https || tweet_user_data_json.profile_image_url_https;
			twitter_user_data.urls = tweet_user_data_json.legacy?.entities || tweet_user_data_json.entities || [];
			twitter_user_data.is_blue_verified = tweet_user_data_json.is_blue_verified || false;
			twitter_user_data.profile_image_shape = tweet_user_data_json.profile_image_shape || "Circle";
			twitter_user_data.protected = tweet_user_data_json.legacy?.protected || tweet_user_data_json.protected || false;
			twitter_user_data.verified_type = tweet_user_data_json.legacy?.verified_type || false;
			twitter_tweet_data.hashtags = tweet_tweet_data_json.entities.hashtags || [];
			twitter_tweet_data.user_mentions = tweet_tweet_data_json.entities.user_mentions || [];
			twitter_tweet_data.symbols = tweet_tweet_data_json.entities.symbols || [];
			twitter_tweet_data.full_text = tweet_tweet_data_json.full_text || "";
			twitter_tweet_data.extended_entities = tweet_tweet_data_json.extended_entities;
			twitter_tweet_data.retweet_count = tweet_tweet_data_json.retweet_count;
			twitter_tweet_data.favorite_count = tweet_tweet_data_json.favorite_count;
			twitter_tweet_data.reply_count = tweet_tweet_data_json.reply_count || 0;
			twitter_tweet_data.id = tweet_tweet_data_json.id_str;
			twitter_tweet_data.created_at = tweet_tweet_data_json.created_at;
			twitter_tweet_data.date = new Date(tweet_tweet_data_json.created_at);
			twitter_tweet_data.urls = tweet_tweet_data_json.entities.urls;
			twitter_tweet_data.media = twitter_tweet_data.extended_entities.media;
			twitter_tweet_data.favorited = ctaEngagementStore[twitter_tweet_data.id]?.favorited || tweet_tweet_data_json.favorited || false;
			twitter_tweet_data.retweeted = ctaEngagementStore[twitter_tweet_data.id]?.retweeted || tweet_tweet_data_json.retweeted || false;
			twitter_tweet_data.bookmarked = ctaEngagementStore[twitter_tweet_data.id]?.bookmarked || tweet_tweet_data_json.bookmarked || false;
			twitter_tweet_data.analytics = tweetData.views?.count;
			twitter_tweet_data.lang = tweet_tweet_data_json.lang;
			try{
				if(tweetData.note_tweet){
					let note_tweet = tweetData.note_tweet?.note_tweet_results.result;
					twitter_tweet_data.full_text = note_tweet.text;
					twitter_tweet_data.urls = note_tweet.entity_set.urls;
					twitter_tweet_data.hashtags = note_tweet.entity_set.hashtags || [];
					twitter_tweet_data.user_mentions = note_tweet.entity_set.user_mentions || [];
					twitter_tweet_data.symbols = note_tweet.entity_set.symbols || [];
				}
			}catch{}
			if(twitter_tweet_data.favorited === true){
				if(!ctaEngagementStore[twitter_tweet_data.id])ctaEngagementStore[twitter_tweet_data.id] = {};
				ctaEngagementStore[twitter_tweet_data.id].favorited = true;
			}
			if(twitter_tweet_data.retweeted === true){
				if(!ctaEngagementStore[twitter_tweet_data.id])ctaEngagementStore[twitter_tweet_data.id] = {};
				ctaEngagementStore[twitter_tweet_data.id].retweeted = true;
			}
			if(twitter_tweet_data.bookmarked === true){
				if(!ctaEngagementStore[twitter_tweet_data.id])ctaEngagementStore[twitter_tweet_data.id] = {};
				ctaEngagementStore[twitter_tweet_data.id].bookmarked = true;
			}
			return {"tweetData": twitter_tweet_data, "userData": twitter_user_data};
		}
		function createHeaderNode(){
			let node = document.createElement('div');
			node.innerHTML = `
				<div class="cta-base">
					<div class="cta-base cta-flex-direction-row">
							<div style="padding-top: calc(2.122%);" class="cta-base cta-flex-basis-0px cta-flex-grow-1"></div>
					</div>
				</div>
			`.replace(/\t|\n/g, '');
			return node;
		}
		function createAvatarNode(){
			let node = document.createElement('div');
			node.innerHTML = `
				<div class="cta-base cta-flex-grow-0 cta-margin-right-big cta-flex-basis-icon cta-align-items-center" cta-id="avatar">
					<div class="cta-base" data-testid="Tweet-User-Avatar">
						<div class="cta-base cta-flex-grow-0 cta-flex-shrink-1 cta-width-100per">
							<div class="cta-base cta-overflow-visible cta-display-block" style="width: 40px; height: 40px;" data-testid="UserAvatar-Container-${tweetData.userData.screen_name}">
								<div class="cta-display-block cta-width-100per" style="padding-bottom: 100%;"></div>
								<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
									<div class="cta-base cta-display-block cta-height-100per cta-width-100per cta-position-absolute cta-arrangement-center cta-overflow-visible">
										<div class="cta-display-block cta-width-100per" style="padding-bottom: 100%;"></div>
										<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
											<div class="cta-base ${tweetData.userData.profile_image_shape === "Square" ? 'cta-shape-square' : 'cta-shape-circle'} cta-overflow-hidden cta-position-absolute cta-icon-position-fix" style="width: calc(100% + 4px); height: calc(100% + 4px);">
												<a href="/${tweetData.userData.screen_name}" aria-hidden="true" role="link" tabindex="-1" class="cta-base cta-height-100per cta-width-100per cta-transition-duration cta-transition-property cta-outline-style-none cta-cursor-pointer" style="background-color: rgba(0, 0, 0, 0);" target="_blank" rel="noopener noreferrer nofollow">
													<div class="cta-base ${tweetData.userData.profile_image_shape === "Square" ? 'cta-shape-square' : 'cta-shape-circle'} cta-overflow-hidden cta-pointer-events-none cta-position-absolute cta-arrangement-center" style="width: calc(100% - 4px); height: calc(100% - 4px);">
														<div class="cta-base cta-height-100per cta-width-100per" style="background-color: rgba(0, 0, 0, 0);"></div>
													</div>
													<div class="cta-base ${tweetData.userData.profile_image_shape === "Square" ? 'cta-shape-square' : 'cta-shape-circle'} cta-overflow-hidden cta-pointer-events-none cta-position-absolute cta-arrangement-center" style="width: calc(100% - 4px); height: calc(100% - 4px);">
														<div class="cta-base cta-height-100per cta-width-100per"></div>
													</div>
													<div class="cta-base ${tweetData.userData.profile_image_shape === "Square" ? 'cta-shape-square' : 'cta-shape-circle'} cta-overflow-hidden cta-pointer-events-none cta-position-absolute cta-arrangement-center" style="background-color: ${colors.backgroundColor}; width: calc(100% - 4px); height: calc(100% - 4px);">
														<div class="cta-base cta-display-block cta-overflow-hidden" style="">
															<div class="cta-display-block cta-width-100per" style="padding-bottom: 100%;"></div>
															<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
																<div aria-label="" class="cta-base cta-flex-basis-auto cta-overflow-hidden cta-z-index-0" style="position: absolute; inset: 0px;">
																	<div class="cta-base cta-transparent-background cta-background-position-center cta-background-no-repeat cta-bottom-0px cta-height-100per cta-left-0px cta-position-absolute cta-right-0px cta-top-0px cta-width-100per cta-z-index--1 cta-background-size-cover" style="background-image: url(&quot;${tweetData.userData.profile_image}&quot;);"></div>
																	<img alt="" draggable="true" src="${tweetData.userData.profile_image}" class="cta-img-css">
																</div>
															</div>
														</div>
													</div>
													<div class="cta-base ${tweetData.userData.profile_image_shape === "Square" ? 'cta-shape-square' : 'cta-shape-circle'} cta-overflow-hidden cta-position-absolute cta-arrangement-center" style="width: calc(100% - 4px); height: calc(100% - 4px);">
														<div class="cta-base cta-icon-box-shadow cta-height-100per cta-width-100per cta-transition-duration cta-transition-property cta-outline-style-none"></div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`.replace(/\t|\n/g, '');
			return node;
		}
		function createAuthorNode(){
			let authorNode = document.createElement('div');
			authorNode.innerHTML = `
				<div class="cta-base cta-margin-bottom-small">
					<div class="cta-base cta-align-items-start cta-flex-direction-row cta-justify-content-space-between">
						<div class="cta-base cta-align-items-baseline cta-flex-direction-row cta-flex-shrink-1" cta-id="Name-Place">
							<div class="cta-base cta-flex-shrink-1 cta-max-width-100per cta-outline-style-none">
								<div class="cta-base cta-flex-shrink-1 cta-max-width-100per cta-outline-style-none cta-align-items-center cta-flex-direction-row" id="" data-testid="User-Name">
									<div class="cta-base cta-align-items-center cta-flex-direction-row cta-flex-shrink-1 cta-max-width-100per">
										<div class="cta-base cta-flex-shrink-1 cta-max-width-100per">
											<a href="/${tweetData.userData.screen_name}" role="link" class="cta-base cta-flex-shrink-1 cta-max-width-100per cta-outline-style-none cta-cursor-pointer" target="_blank" rel="noopener noreferrer nofollow">
												<div class="cta-base cta-align-items-center cta-flex-direction-row cta-flex-shrink-1 cta-max-width-100per">
													<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family cta-font-size cta-line-height cta-font-bold cta-align-items-center cta-display-flex cta-overflow-hidden cta-white-space-nowrap" style="color: ${colors.fontColor}; text-overflow: unset;">
														<span class="cta-text2-css cta-max-width-100per cta-overflow-hidden cta-white-space-nowrap cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;">
															<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;">${tweetData.userData.name}</span>
														</span>
													</div>
													<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family cta-font-size cta-line-height cta-font-normal cta-display-inline-flex cta-flex-direction-row cta-flex-shrink-0" style="color: ${colors.fontColor}; text-overflow: unset;">
														<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family cta-align-items-center cta-display-inline-flex" style="text-overflow: unset;" cta-id="account-status">
														<!--鍵のアイコンとか-->
														</span>
													</div>
												</div>
											</a>
										</div>
									</div>
									<div class="cta-base cta-flex-direction-row cta-flex-shrink-1" style="margin-left: 4px;">
										<div class="cta-base cta-align-items-baseline cta-flex-direction-row cta-flex-shrink-1">
											<div class="cta-base cta-flex-shrink-1 cta-max-width-100per">
												<a href="/${tweetData.userData.screen_name}" role="link" tabindex="-1" class="cta-base cta-flex-shrink-1 cta-max-width-100per cta-outline-style-none cta-cursor-pointer" target="_blank" rel="noopener noreferrer nofollow">
													<div dir="ltr" class="cta-text-css cta-max-width-100per cta-overflow-hidden cta-white-space-nowrap cta-min-width-0px cta-overflow-wrap-break-word cta-provisional-font-family cta-font-size cta-line-height cta-font-normal cta-flex-direction-row cta-font-feature-settings-ss01" style="color: ${colors.fontColorDark}; text-overflow: unset;">
														<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;">@${tweetData.userData.screen_name}</span>
													</div>
												</a>
											</div>
											<div dir="ltr" aria-hidden="true" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family cta-font-size cta-line-height cta-font-normal cta-flex-shrink-0 cta-side-padding-4px" style="color: ${colors.fontColorDark}; text-overflow: unset;">
												<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;">·</span>
											</div>
											<div class="cta-base cta-flex-direction-row cta-flex-shrink-0">
												<a href="/${tweetData.userData.screen_name}/status/${tweetData.tweetData.id}" dir="ltr" aria-label="" role="link" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family cta-font-size cta-line-height cta-font-normal cta-display-inline-flex cta-flex-shrink-0 cta-flex-wrap-wrap cta-gap-4px cta-white-space-nowrap cta-cursor-pointer" style="color: ${colors.fontColorDark}; text-overflow: unset;" target="_blank" rel="noopener noreferrer nofollow">
													<time datetime="${tweetData.tweetData.date.toISOString()}">${tweetData.tweetData.date.toLocaleDateString(GetCookie('lang'), {month: 'long', day: 'numeric'})}</time>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="cta-base" style="margin-left: 8px;">
							<div class="cta-base cta-align-items-center cta-flex-direction-row cta-gap-8px cta-justify-content-space-between">
								<div class="cta-base cta-align-items-center cta-display-flex cta-flex-direction-row">
									<div class="cta-base">
										<div class="cta-base cta-flex-direction-row cta-justify-content-flex-start">
											<div aria-expanded="false" aria-haspopup="menu" aria-label="もっと見る" role="button" tabindex="0" class="cta-base cta-justify-content-center cta-min-height-20px cta-overflow-visible cta-user-select-none cta-cursor-pointer cta-outline-style-none" data-testid="caret">
												<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-provisional-font-family cta-font-size cta-line-height cta-font-normal cta-align-items-center cta-display-flex cta-justify-content-flex-start cta-transition-duration cta-svg-transition-property-color cta-white-space-nowrap" style="color: ${colors.fontColorDark}; text-overflow: unset;">
													<div class="cta-base cta-display-inline-flex">
														<div class="cta-base cta-display-inline-flex cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px cta-transparent-background cta-shape-circle cta-margin--8px cta-transition-duration cta-transition-property cta-outline-style-none"></div>
														<svg viewBox="0 0 24 24" aria-hidden="true" class="cta-display-inline-block cta-fill-currentcolor cta-max-width-100per cta-position-relative cta-vertical-align-text-bottom cta-user-select-none cta-svg-height cta-svg-width">
															<g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g>
														</svg>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`.replace(/\t|\n/g, '');
			authorNode = appendAccountStatusIcon(authorNode,tweetData);
			return authorNode;
		}
		function createTextNode(isQuoted = false){
			let currentTweetData;
			if(isQuoted){
				currentTweetData = quotedTweetData;
			}else{
				currentTweetData = tweetData;
			}
			if(!currentTweetData.tweetData.full_text)return null;
			let textNode = document.createElement('div');
			textNode.innerHTML = `<div class="cta-base" cta-id="tweetMainText"><div dir="auto" lang="${currentTweetData.tweetData.lang}" class="cta-text-css cta-box-orient-vertical cta-max-width-100per cta-overflow-hidden cta-min-width-0px cta-overflow-wrap-break-word cta-provisional-font-family cta-font-size cta-line-height cta-font-normal cta-position-relative" style="color: ${colors.fontColor}; text-overflow: unset; display: -webkit-box; ${isQuoted === true ? '' : "margin-top: 4px;"}" id="" data-testid="tweetText"><span class="cta-text2-css rcta-min-width-0px cta-overflow-wrap-break-word cta-font-family">${tweetTextProsser(currentTweetData.tweetData.full_text,currentTweetData.tweetData.hashtags,currentTweetData.tweetData.user_mentions,currentTweetData.tweetData.symbols,currentTweetData.tweetData.urls,currentTweetData.tweetData.media)}</span></div></div>`;
			return textNode;
		}
		function createMediaNode(isQuoted = false){
			let currentTweetData;
			if(isQuoted){
				currentTweetData = quotedTweetData;
			}else{
				currentTweetData = tweetData;
			}
			if(!currentTweetData.tweetData.media)return null;
			let medias = currentTweetData.tweetData.media;
			let mediaNode = document.createElement('div');
			mediaNode.innerHTML = `
				<div aria-labelledby="" class="cta-base cta-gap-12px cta-margin-top">
					<div class="cta-base cta-gap-4px">
						<div class="cta-base">
							<div class="cta-base">
								<div class="cta-base cta-border cta-border-radius-16px cta-overflow-hidden cta-transition-duration cta-transition-property cta-outline-style-none" cta-id="mediaRoot">
								</div>
							</div>
						</div>
					</div>
				</div>
			`.replace(/\t|\n/g, '');
			let mediaBox = document.createElement('div');
			switch(medias.length){
				case 1:
					let imageHeight;
					if(medias[0].type === "photo"){
						const elementWidth = appendParentNode.clientWidth;
						const displayWidth = elementWidth * 0.856;
						const imagesize = medias[0].original_info || Object.entries(medias[0].sizes).filter(([key]) => key !== 'thumb').reduce((largest, current) => current[1].w > largest[1].w ? current : largest)[1];
						const aspectRatio = (imagesize.width || imagesize.w) / (imagesize.height || imagesize.h);
						imageHeight = displayWidth / aspectRatio;
					}
					mediaBox.innerHTML = `
						<div class="cta-base" cta-id="media1" style="max-height:82vh;width: 100%; ${medias[0].type === "photo" ? `height:${imageHeight}px` : ''}">
						<!--ここにメディア-->
						</div>
					`.replace(/\t|\n/g, '');
				break;
				case 2:
					mediaBox.innerHTML = `
						<div class="cta-base cta-display-block cta-overflow-hidden">
							<div class="cta-display-block cta-width-100per" style="padding-bottom: 56.25%;"></div>
							<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
								<div class="cta-base cta-height-100per cta-width-100per cta-flex-direction-row">
									<div class="cta-base cta-flex-basis-0px cta-flex-grow-1 cta-position-relative cta-margin-right-small" cta-id="media1">
									<!--ここにメディア-->
									</div>
									<div class="cta-base cta-flex-basis-0px cta-flex-grow-1 cta-position-relative" cta-id="media2">
									<!--ここにメディア-->
									</div>
								</div>
							</div>
						</div>
					`.replace(/\t|\n/g, '');
				break;
				case 3:
					mediaBox.innerHTML = `
						<div class="cta-base cta-display-block cta-overflow-hidden">
							<div class="cta-display-block cta-width-100per" style="padding-bottom: 56.25%;"></div>
							<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
								<div class="cta-base cta-height-100per cta-width-100per cta-flex-direction-row">
									<div class="cta-base cta-flex-basis-0px cta-flex-grow-1 cta-position-relative cta-margin-right-small" cta-id="media1">
									<!--ここにメディア-->
									</div>
									<div class="cta-base cta-flex-basis-0px cta-flex-grow-1 cta-flex-direction-column">
										<div class="cta-base cta-flex-basis-0px cta-flex-grow-1 cta-position-relative cta-margin-bottom-small" cta-id="media2">
										<!--ここにメディア-->
										</div>
										<div class="cta-base cta-flex-basis-0px cta-flex-grow-1 cta-position-relative" cta-id="media3">
										<!--ここにメディア-->
										</div>
									</div>
								</div>
							</div>
						</div>
					`.replace(/\t|\n/g, '');
				break;
				case 4:
					mediaBox.innerHTML = `
						<div class="cta-base cta-display-block cta-overflow-hidden">
							<div class="cta-display-block cta-width-100per" style="padding-bottom: 56.25%;"></div>
							<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
								<div class="cta-base cta-height-100per cta-width-100per cta-flex-direction-column">
									<div class="cta-base cta-margin-bottom-small cta-flex-basis-0px cta-flex-grow-1 cta-flex-direction-row">
										<div class="cta-base cta-flex-basis-0px cta-flex-grow-1 cta-position-relative cta-margin-right-small" cta-id="media1">
										<!--ここにメディア-->
										</div>
										<div class="cta-base cta-flex-basis-0px cta-flex-grow-1 cta-position-relative" cta-id="media2">
										<!--ここにメディア-->
										</div>
									</div>
									<div class="cta-base cta-flex-basis-0px cta-flex-grow-1 cta-flex-direction-row">
										<div class="cta-base cta-flex-basis-0px cta-flex-grow-1 cta-position-relative cta-margin-right-small" cta-id="media3">
										<!--ここにメディア-->
										</div>
										<div class="cta-base cta-flex-basis-0px cta-flex-grow-1 cta-position-relative" cta-id="media4">
										<!--ここにメディア-->
										</div>
									</div>
								</div>
							</div>
						</div>
					`.replace(/\t|\n/g, '');
				break;
			}
			for(let i=0;i<medias.length;i++){
				let media = medias[i];
				let tmp = document.createElement('div');
				switch(media.type){
					case "photo":
						tmp.innerHTML = `
							<div class="cta-base cta-flex-grow-1 cta-height-100per cta-width-100per">
								<a href="${media.expanded_url.replace(/1$/,i+1)}" role="link" class="cta-base cta-height-100per cta-outline-style-none cta-cursor-pointer" target="_blank" rel="noopener noreferrer nofollow">
									<div class="cta-base cta-bottom-0px cta-left-0px cta-overflow-hidden cta-position-absolute cta-right-0px cta-top-0px">
										<div aria-label="画像" class="cta-base cta-flex-basis-auto cta-overflow-hidden cta-z-index-0" style="position: absolute; inset: 0px; margin: 0px;" data-testid="tweetPhoto">
											<div class="cta-base cta-transparent-background cta-background-position-center cta-background-no-repeat cta-bottom-0px cta-height-100per cta-left-0px cta-position-absolute cta-right-0px cta-top-0px cta-width-100per cta-z-index--1 cta-background-size-cover" style="background-image: url(&quot;${media.media_url_https}&quot;); ${medias.length === 1 ? "background-size: 100% auto;" : ""}"></div>
											<img alt="画像" draggable="true" src="${media.media_url_https}" class="cta-img-css">
										</div>
									</div>
								</a>
							</div>
						`.replace(/\t|\n/g, '');
					break;
					case "video":
						tmp.innerHTML = `
							<div class="cta-base cta-height-100per" data-testid="tweetPhoto">
								<div class="cta-base">
									<div class="cta-base cta-display-block cta-overflow-hidden">
										<div class="cta-display-block cta-width-100per" style="padding-bottom: 56.0784%;"></div>
										<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
											<div class="cta-base cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px" data-testid="placementTracking">
												<div class="cta-base cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px" data-testid="videoPlayer">
													<div class="cta-base cta-display-block cta-overflow-hidden cta-position-relative cta-height-100per cta-width-100per">
														<div class="cta-display-block cta-width-100per" style="padding-bottom: 56.0784%;"></div>
														<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
															<div data-testid="videoComponent" style="height: 100%; position: relative; transform: translateZ(0px); width: 100%;">
																<div style="height: 100%; position: absolute; width: 100%;">
																	<div style="position: relative; width: 100%; height: 100%; background-color: transparent; overflow: hidden;">
																		<video preload="none" tabindex="-1" playsinline="" aria-label="埋め込み動画" style="width: 100%; height: 100%; position: absolute; background-color: black; top: 0%; left: 0%; transform: rotate(0deg) scale(1.005);" poster="${media.media_url_https}" src="${media.video_info.variants.filter(obj => obj.content_type !== 'application/x-mpegURL').reduce((a, b) => a.bitrate > b.bitrate ? a : b).url.split('?')[0]}" type="video/mp4" controls=""></video>
																	</div>
																</div>
																<!--
																<div tabindex="0" class="cta-base cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px">
																	<div class="cta-base cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px">
																		<div class="cta-base cta-bottom-0px cta-cursor-pointer cta-left-0px cta-position-absolute cta-right-0px cta-top-0px" data-testid="video-player-mini-ui-"></div>
																		<div class="cta-base cta-flex-direction-row cta-position-absolute r-rki7wi r-161ttwi cta-pointer-events-none">
																			<div class="cta-base cta-align-items-center r-k200y r-z2wwpe r-z80fyv cta-justify-content-center r-13w96dm cta-flex-direction-row r-mk0yit r-rjfia r-6t5ypu r-kicko2 r-1dpl46z r-notknq cta-pointer-events-none">
																				<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family r-q4m81j r-n6v787 r-1cwl3u0 cta-font-normal cta-user-select-none" style="color: rgb(255, 255, 255); text-overflow: unset;">
																					<div class="cta-base cta-align-items-center cta-display-flex cta-flex-direction-row">
																						<div aria-label="一時停止" role="button" tabindex="0" class="cta-base cta-display-inline-flex r-tuq35u cta-pointer-events-auto cta-cursor-pointer cta-transition-duration cta-transition-property cta-outline-style-none">
																							<svg viewBox="0 0 24 24" aria-hidden="true" class="cta-display-inline-block cta-fill-currentcolor cta-max-width-100per cta-position-relative cta-vertical-align-text-bottom cta-user-select-none r-tbmifm r-16eto9q">
																								<g><path d="M4 2h5v20H4V2zm11 20h5V2h-5v20z"></path></g>
																							</svg>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div style="transition-duration: 250ms; transition-property: opacity, height; transition-timing-function: ease; will-change: opacity; opacity: 0;"></div>
																	</div>
																</div>
																-->
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						`.replace(/\t|\n/g, '');
					break;
					case "animated_gif":
						tmp.innerHTML = `
							<div class="cta-base cta-height-100per" data-testid="tweetPhoto">
								<div class="cta-base">
									<div class="cta-base cta-display-block cta-overflow-hidden">
										<div class="cta-display-block cta-width-100per" style="padding-bottom: 56.0784%;"></div>
										<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
											<div class="cta-base cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px" data-testid="placementTracking">
												<div class="cta-base cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px" data-testid="videoPlayer">
													<div class="cta-base cta-display-block cta-overflow-hidden cta-position-relative cta-height-100per cta-width-100per">
														<div class="cta-display-block cta-width-100per" style="padding-bottom: 56.0784%;"></div>
														<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
															<div data-testid="videoComponent" style="height: 100%; position: relative; transform: translateZ(0px); width: 100%;">
																<div style="height: 100%; position: absolute; width: 100%;">
																	<div style="position: relative; width: 100%; height: 100%; background-color: transparent; overflow: hidden;">
																		<video loop preload="auto" tabindex="-1" playsinline autoplay muted aria-label="埋め込み動画" style="width: 100%; height: 100%; position: absolute; background-color: black; top: 0%; left: 0%; transform: rotate(0deg) scale(1.005);" poster="${media.media_url_https}" src="${media.video_info.variants.filter(obj => obj.content_type !== 'application/x-mpegURL').reduce((a, b) => a.bitrate > b.bitrate ? a : b).url.split('?')[0]}" type="video/mp4"></video>
																	</div>
																</div>
																<!--
																<div tabindex="0" class="cta-base cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px">
																	<div class="cta-base cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px">
																		<div class="cta-base cta-bottom-0px cta-cursor-pointer cta-left-0px cta-position-absolute cta-right-0px cta-top-0px" data-testid="video-player-mini-ui-"></div>
																		<div class="cta-base cta-flex-direction-row cta-position-absolute r-rki7wi r-161ttwi cta-pointer-events-none">
																			<div class="cta-base cta-align-items-center r-k200y r-z2wwpe r-z80fyv cta-justify-content-center r-13w96dm cta-flex-direction-row r-mk0yit r-rjfia r-zmljjp r-t12b5v r-6t5ypu r-kicko2 cta-margin-right-small cta-pointer-events-none">
																				<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family r-q4m81j r-n6v787 r-1cwl3u0 cta-font-normal cta-user-select-none" style="color: rgb(255, 255, 255); text-overflow: unset;">
																					<div class="cta-base cta-align-items-center cta-display-flex cta-flex-direction-row">
																						<div aria-label="プレイ" role="button" tabindex="0" class="cta-base cta-display-inline-flex r-tuq35u cta-pointer-events-auto cta-cursor-pointer cta-transition-duration cta-transition-property cta-outline-style-none">
																							<svg viewBox="0 0 24 24" aria-hidden="true" class="cta-display-inline-block cta-fill-currentcolor cta-max-width-100per cta-position-relative cta-vertical-align-text-bottom cta-user-select-none r-tbmifm r-16eto9q">
																								<g><path d="M21 12L4 2v20l17-10z"></path></g>
																							</svg>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="cta-base cta-align-items-center r-k200y r-z2wwpe r-z80fyv cta-justify-content-center cta-side-padding-4px r-13w96dm r-pm2fo r-ou6ah9 r-1dpl46z r-notknq cta-pointer-events-none">
																				<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family r-q4m81j r-n6v787 r-1cwl3u0 cta-font-bold cta-user-select-none" style="color: rgb(255, 255, 255); text-overflow: unset;">
																					<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;">GIF</span>
																				</div>
																			</div>
																		</div>
																		<div style="transition-duration: 250ms; transition-property: opacity, height; transition-timing-function: ease; will-change: opacity; opacity: 0;"></div>
																	</div>
																</div>
																-->
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						`.replace(/\t|\n/g, '');
						let video = tmp.querySelector('video');
						tmp.querySelector('video').addEventListener('click', function(){
							if(video.paused){
								video.play();
							}else{
								video.pause();
							}
						});
					break;
				}
				mediaBox.querySelector(`[cta-id="media${i+1}"]`).appendChild(tmp.firstChild);
			}
			if(isQuoted){
				return mediaBox;
			}else{
				mediaNode.querySelector('[cta-id="mediaRoot"]').appendChild(mediaBox.firstChild);
				return mediaNode;
			}
		}
		function createQuotedNode(){
			if(!quotedTweetData)return null;
			let node = document.createElement('div');
			node.innerHTML =`
				<div aria-labelledby="" class="cta-base cta-gap-12px cta-margin-top" cta-id="quoted-place">
					<div class="cta-base">
						<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family cta-font-size cta-line-height cta-font-normal cta-overflow-hidden cta-position-absolute" style="color: ${colors.fontColor}; text-overflow: unset; border-width: 0px; clip: rect(1px, 1px, 1px, 1px); height: 1px; width: 1px; padding: 0px;">
							<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;">引用</span>
						</div>
						<div tabindex="0" class="cta-base cta-overflow-hidden cta-border-radius-16px cta-transition-duration cta-transition-property cta-outline-style-none cta-cursor-pointer" role="link" style="min-height: 64px; border-width: 1px; border-color:${colors.borderBottomColor}">
							<div class="cta-base">
								<div class="cta-base cta-flex-direction-column cta-side-margin-12px cta-margin-top">
									<div class="cta-base cta-align-items-center cta-flex-direction-row cta-flex-shrink-1">
										<div class="cta-base cta-flex-shrink-1 cta-overflow-hidden">
											<div class="cta-base cta-flex-direction-row cta-max-width-100per" style="align-items: flex-start;">
												<div class="cta-base" data-testid="Tweet-User-Avatar" style="margin-right: 4px;">
													<div class="cta-base cta-flex-shrink-1 cta-max-width-100per">
														<div class="cta-base cta-display-block cta-overflow-visible" style="width: 20px; height: 20px;" data-testid="UserAvatar-Container-${quotedTweetData.userData.screen_name}">
															<div class="cta-display-block cta-width-100per" style="padding-bottom: 100%;"></div>
															<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
																<div class="cta-base cta-display-block cta-height-100per cta-width-100per cta-position-absolute cta-arrangement-center cta-overflow-visible">
																	<div class="cta-display-block cta-width-100per" style="padding-bottom: 100%;"></div>
																	<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
																		<div class="cta-base ${quotedTweetData.userData.profile_image_shape === "Square" ? 'cta-shape-square' : 'cta-shape-circle'} cta-overflow-hidden cta-position-absolute cta-icon-position-fix" style="width: calc(100% + 4px); height: calc(100% + 4px);">
																			<div aria-hidden="true" role="presentation" tabindex="-1" class="cta-base cta-height-100per cta-width-100per cta-outline-style-none" style="background-color: rgba(0, 0, 0, 0);">
																				<div class="cta-base ${quotedTweetData.userData.profile_image_shape === "Square" ? 'cta-shape-square' : 'cta-shape-circle'} cta-overflow-hidden cta-pointer-events-none cta-position-absolute cta-arrangement-center" style="width: calc(100% - 4px); height: calc(100% - 4px);">
																					<div class="cta-base cta-height-100per cta-width-100per" style="background-color: rgba(0, 0, 0, 0);"></div>
																				</div>
																				<div class="cta-base ${quotedTweetData.userData.profile_image_shape === "Square" ? 'cta-shape-square' : 'cta-shape-circle'} cta-overflow-hidden cta-pointer-events-none cta-position-absolute cta-arrangement-center" style="width: calc(100% - 4px); height: calc(100% - 4px);">
																					<div class="cta-base cta-height-100per cta-width-100per"></div>
																				</div>
																				<div class="cta-base ${quotedTweetData.userData.profile_image_shape === "Square" ? 'cta-shape-square' : 'cta-shape-circle'} cta-overflow-hidden cta-pointer-events-none cta-position-absolute cta-arrangement-center" style="background-color: ${colors.backgroundColor}; width: calc(100% - 4px); height: calc(100% - 4px);">
																					<div class="cta-base cta-display-block cta-overflow-hidden">
																						<div class="cta-display-block cta-width-100per" style="padding-bottom: 100%;"></div>
																						<div class="cta-bottom-0px cta-height-100per cta-position-absolute cta-left-0px cta-top-0px cta-width-100per">
																							<div aria-label="" class="cta-base cta-flex-basis-auto cta-overflow-hidden cta-z-index-0" style="position: absolute; inset: 0px;">
																								<div class="cta-base cta-transparent-background cta-background-position-center cta-background-no-repeat cta-bottom-0px cta-height-100per cta-left-0px cta-position-absolute cta-right-0px cta-top-0px cta-width-100per cta-z-index--1 cta-background-size-cover" style="background-image: url(&quot;${quotedTweetData.userData.profile_image}&quot;);"></div>
																								<img alt="" draggable="true" src="${quotedTweetData.userData.profile_image}" class="cta-img-css">
																							</div>
																						</div>
																					</div>
																				</div>
																				<div class="cta-base ${quotedTweetData.userData.profile_image_shape === "Square" ? 'cta-shape-square' : 'cta-shape-circle'} cta-overflow-hidden cta-position-absolute cta-arrangement-center" style="width: calc(100% - 4px); height: calc(100% - 4px);">
																					<div class="cta-base cta-icon-box-shadow cta-height-100per cta-width-100per cta-outline-style-none"></div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="cta-base cta-flex-shrink-1 cta-max-width-100per cta-outline-style-none">
													<div class="cta-base cta-flex-shrink-1 cta-max-width-100per cta-outline-style-none cta-align-items-center cta-flex-direction-row" data-testid="User-Name">
														<div class="cta-base cta-align-items-center cta-flex-direction-row cta-flex-shrink-1 cta-max-width-100per">
															<div class="cta-base cta-flex-shrink-1 cta-max-width-100per">
																<div class="cta-base cta-flex-shrink-1 cta-max-width-100per cta-outline-style-none">
																	<div class="cta-base cta-align-items-center cta-flex-direction-row cta-flex-shrink-1 cta-max-width-100per">
																		<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family cta-font-size cta-line-height cta-font-bold cta-align-items-center cta-display-flex cta-overflow-hidden cta-white-space-nowrap" style="color: ${colors.fontColor}; text-overflow: unset;">
																			<span class="cta-text2-css cta-max-width-100per cta-overflow-hidden cta-white-space-nowrap cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;">
																				<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;">${quotedTweetData.userData.name}</span>
																			</span>
																		</div>
																		<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family cta-font-size cta-line-height cta-font-normal cta-display-inline-flex cta-flex-direction-row cta-flex-shrink-0" style="color: ${colors.fontColor}; text-overflow: unset;">
																			<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family cta-align-items-center cta-display-inline-flex" style="text-overflow: unset;" cta-id="account-status">
																				<!--鍵のアイコンとか-->
																			</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="cta-base cta-flex-direction-row cta-flex-shrink-1" style="margin-left: 4px;">
															<div class="cta-base cta-align-items-baseline cta-flex-direction-row cta-flex-shrink-1">
																<div class="cta-base cta-flex-shrink-1 cta-max-width-100per">
																	<div tabindex="-1" class="cta-base cta-flex-shrink-1 cta-max-width-100per cta-outline-style-none">
																		<div dir="ltr" class="cta-text-css cta-max-width-100per cta-overflow-hidden cta-white-space-nowrap cta-min-width-0px cta-overflow-wrap-break-word cta-provisional-font-family cta-font-size cta-line-height cta-font-normal cta-flex-direction-row cta-font-feature-settings-ss01" style="color: ${colors.fontColorDark}; text-overflow: unset;">
																			<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;">@${quotedTweetData.userData.screen_name}</span>
																		</div>
																	</div>
																</div>
																<div dir="ltr" aria-hidden="true" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family cta-font-size cta-line-height cta-font-normal cta-flex-shrink-0 cta-side-padding-4px" style="color: ${colors.fontColorDark}; text-overflow: unset;">
																	<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;">·</span>
																</div>
																<div class="cta-base cta-flex-direction-row cta-flex-shrink-0">
																	<div class="cta-base cta-align-items-baseline cta-flex-direction-row cta-flex-shrink-1">
																		<div dir="ltr" aria-label="" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family cta-font-size cta-line-height cta-font-normal cta-display-inline-flex cta-flex-shrink-0 cta-flex-wrap-wrap cta-gap-4px cta-white-space-nowrap" style="color: ${colors.fontColorDark}; text-overflow: unset;">
																			<time datetime="${quotedTweetData.tweetData.date.toISOString()}">${quotedTweetData.tweetData.date.toLocaleDateString(GetCookie('lang'), {month: 'long', day: 'numeric'})}</time>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="cta-base cta-side-margin-12px" style="margin-bottom: 12px;" cta-id="quoted-text">
									<!--ここにテキスト -->
								</div>
								<div class="cta-base" style="margin-top: 4px;">
									<div class="cta-base">
										<div class="cta-base cta-transition-duration cta-transition-property cta-outline-style-none" cta-id="quoted-media">
											<!--引用のメディア-->
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`.replace(/\t|\n/g, '');
			node = appendAccountStatusIcon(node,quotedTweetData)
			let textNode = createTextNode(true);
			let mediaNode = createMediaNode(true);
			if(textNode)node.querySelector('[cta-id="quoted-text"]').appendChild(textNode.firstChild.firstChild);
			if(mediaNode)node.querySelector('[cta-id="quoted-media"]').appendChild(mediaNode.firstChild);
			return node;
		}
		function createEngagementNode(){
			let engagementNode = document.createElement('div');
			let retweetPath = 'M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z';
			let retweetedPath = 'M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z';
			let likedPath = 'M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z';
			let likePath = 'M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z';
			let bookmarkedPath = 'M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z';
			let bookmarkPath = 'M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z';
			engagementNode.innerHTML = `
				<div class="cta-base" cta-id="footer">
					<div class="cta-base">
						<div aria-label="0 件のリツイート、リツイートしました、0 件の表示" role="group" class="cta-base cta-column-gap-4px cta-flex-direction-row cta-justify-content-space-between cta-max-width-600px cta-margin-top" id="">
							<div class="cta-base cta-flex-direction-row cta-justify-content-flex-start cta-flex-1-1-0per">
								<div aria-label="0 件の返信。返信する" role="button" tabindex="0" class="cta-base cta-justify-content-center cta-min-height-20px cta-overflow-visible cta-user-select-none cta-cursor-pointer cta-outline-style-none" data-testid="reply" style="opacity: 0.5;">
									<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-provisional-font-family cta-font-size cta-line-height cta-font-normal cta-align-items-center cta-display-flex cta-justify-content-flex-start cta-transition-duration cta-svg-transition-property-color cta-white-space-nowrap" style="text-overflow: unset; color: ${colors.fontColorDark};">
										<div class="cta-base cta-display-inline-flex">
											<div class="cta-base cta-display-inline-flex cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px cta-transparent-background cta-shape-circle cta-margin--8px cta-transition-duration cta-transition-property cta-outline-style-none"></div>
											<svg viewBox="0 0 24 24" aria-hidden="true" class="cta-display-inline-block cta-fill-currentcolor cta-max-width-100per cta-position-relative cta-vertical-align-text-bottom cta-user-select-none cta-svg-height cta-svg-width">
												<g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g>
											</svg>
										</div>
										<div class="cta-base cta-display-inline-flex cta-overflow-hidden">
											<span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="cta-text2-css cta-overflow-wrap-break-word cta-font-family cta-engagement-text" style="text-overflow: unset;">
												<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;" cta-id="reply-text">${tweetData.tweetData.reply_count === 0 ? "" : round_half_up(tweetData.tweetData.reply_count,textData.roundingScale,textData.decimalPlaces,textData.units)}</span>
											</span></span>
										</div>
									</div>
								</div>
							</div>
							<div class="cta-base cta-flex-direction-row cta-justify-content-flex-start cta-flex-1-1-0per">
								<div aria-expanded="false" aria-haspopup="menu" aria-label="0件のリツイート件。リツイートしました" role="button" tabindex="0" class="cta-base cta-justify-content-center cta-min-height-20px cta-overflow-visible cta-user-select-none cta-cursor-pointer cta-outline-style-none" data-testid="${ctaEngagementStore[tweetData.tweetData.id]?.retweeted === true ? 'un' : ""}retweet" cta-id="retweet">
									<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-provisional-font-family cta-font-size cta-line-height cta-font-normal cta-align-items-center cta-display-flex cta-justify-content-flex-start cta-transition-duration cta-svg-transition-property-color cta-white-space-nowrap" style="color: ${ctaEngagementStore[tweetData.tweetData.id]?.retweeted === true ? 'rgb(0, 186, 124)' : colors.fontColorDark}; text-overflow: unset;">
										<div class="cta-base cta-display-inline-flex">
											<div class="cta-base cta-display-inline-flex cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px cta-transparent-background cta-shape-circle cta-margin--8px cta-transition-duration cta-transition-property cta-outline-style-none"></div>
											<svg viewBox="0 0 24 24" aria-hidden="true" class="cta-display-inline-block cta-fill-currentcolor cta-max-width-100per cta-position-relative cta-vertical-align-text-bottom cta-user-select-none cta-svg-height cta-svg-width">
												<g><path d="${ctaEngagementStore[tweetData.tweetData.id]?.retweeted === true ? retweetedPath: retweetPath}"></path></g>
											</svg>
										</div>
										<div class="cta-base cta-display-inline-flex cta-overflow-hidden">
											<span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="cta-text2-css cta-overflow-wrap-break-word cta-font-family cta-engagement-text" style="text-overflow: unset;">
												<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;" cta-id="retweet-text">${tweetData.tweetData.retweet_count === 0 ? "" : round_half_up(tweetData.tweetData.retweet_count,textData.roundingScale,textData.decimalPlaces,textData.units)}</span>
											</span></span>
										</div>
									</div>
								</div>
							</div>
							<div class="cta-base cta-flex-direction-row cta-justify-content-flex-start cta-flex-1-1-0per">
								<div aria-label="0 件のいいね。いいねする" role="button" tabindex="0" class="cta-base cta-justify-content-center cta-min-height-20px cta-overflow-visible cta-user-select-none cta-cursor-pointer cta-outline-style-none" data-testid="${ctaEngagementStore[tweetData.tweetData.id]?.favorited === true ? 'un' : ""}like" cta-id="like">
									<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-provisional-font-family cta-font-size cta-line-height cta-font-normal cta-align-items-center cta-display-flex cta-justify-content-flex-start cta-transition-duration cta-svg-transition-property-color cta-white-space-nowrap" style="color: ${ctaEngagementStore[tweetData.tweetData.id]?.favorited === true ? 'rgb(249, 24, 128)' : colors.fontColorDark}; text-overflow: unset;">
										<div class="cta-base cta-display-inline-flex">
											<div class="cta-base cta-display-inline-flex cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px cta-transparent-background cta-shape-circle cta-margin--8px cta-transition-duration cta-transition-property cta-outline-style-none"></div>
											<svg viewBox="0 0 24 24" aria-hidden="true" class="cta-display-inline-block cta-fill-currentcolor cta-max-width-100per cta-position-relative cta-vertical-align-text-bottom cta-user-select-none cta-svg-height cta-svg-width">
												<g><path d="${ctaEngagementStore[tweetData.tweetData.id]?.favorited === true ? likedPath: likePath}"></path></g>
											</svg>
										</div>
										<div class="cta-base cta-display-inline-flex cta-overflow-hidden">
											<span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="cta-text2-css cta-overflow-wrap-break-word cta-font-family cta-engagement-text" style="text-overflow: unset;">
												<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;" cta-id="like-text">${tweetData.tweetData.favorite_count === 0 ? "" : round_half_up(tweetData.tweetData.favorite_count,textData.roundingScale,textData.decimalPlaces,textData.units)}</span>
											</span></span>
										</div>
									</div>
								</div>
							</div>
							<div class="cta-base cta-flex-direction-row cta-justify-content-flex-start cta-flex-1-1-0per">
								<a href="/${tweetData.tweetData.screen_name}/status/${tweetData.tweetData.id}/analytics" aria-label="0 件の表示。ツイートアナリティクスを表示" role="link" class="cta-base cta-justify-content-center cta-min-height-20px cta-overflow-visible cta-user-select-none cta-outline-style-none cta-cursor-pointer" target="_blank" rel="noopener noreferrer nofollow">
									<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-provisional-font-family cta-font-size cta-line-height cta-font-normal cta-align-items-center cta-display-flex cta-justify-content-flex-start cta-transition-duration cta-svg-transition-property-color cta-white-space-nowrap" style="color: ${colors.fontColorDark}; text-overflow: unset;">
										<div class="cta-base cta-display-inline-flex">
											<div class="cta-base cta-display-inline-flex cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px cta-transparent-background cta-shape-circle cta-margin--8px cta-transition-duration cta-transition-property cta-outline-style-none"></div>
											<svg viewBox="0 0 24 24" aria-hidden="true" class="cta-display-inline-block cta-fill-currentcolor cta-max-width-100per cta-position-relative cta-vertical-align-text-bottom cta-user-select-none cta-svg-height cta-svg-width">
												<g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g>
											</svg>
										</div>
										<div class="cta-base cta-display-inline-flex cta-overflow-hidden">
											<span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="cta-text2-css cta-overflow-wrap-break-word cta-font-family cta-engagement-text" style="text-overflow: unset;">
												<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;" cta-id="analytics-text">${tweetData.tweetData.analytics === 0 ? "" : tweetData.tweetData.analytics || ""}</span>
											</span></span>
										</div>
									</div>
								</a>
							</div>
							<div class="cta-base cta-flex-direction-row cta-justify-content-flex-start" style="margin-right: 8px;">
								<div aria-label="ブックマーク" role="button" tabindex="0" class="cta-base cta-justify-content-center cta-min-height-20px cta-overflow-visible cta-user-select-none cta-cursor-pointer cta-outline-style-none" data-testid="${ctaEngagementStore[tweetData.tweetData.id]?.bookmarked === true ? 'un' : ""}bookmark" cta-id="bookmark">
									<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-provisional-font-family cta-font-size cta-line-height cta-font-normal cta-align-items-center cta-display-flex cta-justify-content-flex-start cta-transition-duration cta-svg-transition-property-color cta-white-space-nowrap" style="color: ${ctaEngagementStore[tweetData.tweetData.id]?.bookmarked === true ? 'rgb(29, 155, 240)' : colors.fontColorDark}; text-overflow: unset;">
										<div class="cta-base cta-display-inline-flex">
											<div class="cta-base cta-display-inline-flex cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px cta-transparent-background cta-shape-circle cta-margin--8px cta-transition-duration cta-transition-property cta-outline-style-none"></div>
											<svg viewBox="0 0 24 24" aria-hidden="true" class="cta-display-inline-block cta-fill-currentcolor cta-max-width-100per cta-position-relative cta-vertical-align-text-bottom cta-user-select-none cta-svg-height cta-svg-width">
												<g><path d="${ctaEngagementStore[tweetData.tweetData.id]?.bookmarked === true ? bookmarkedPath : bookmarkPath}"></path></g>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div class="cta-base" style="transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px); justify-content: inherit; display: inline-grid;" cta-id="share-button">
								<div class="cta-base cta-flex-direction-row cta-justify-content-flex-start">
									<div aria-disabled="true" aria-expanded="false" aria-haspopup="menu" aria-label="ツイートを共有" role="button" tabindex="-1" class="cta-base cta-justify-content-center cta-min-height-20px cta-overflow-visible cta-user-select-none cta-outline-style-none">
										<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-provisional-font-family cta-font-size cta-line-height cta-font-normal cta-align-items-center cta-display-flex cta-justify-content-flex-start cta-transition-duration cta-svg-transition-property-color cta-white-space-nowrap" style="color: ${colors.fontColorDark}; text-overflow: unset;">
											<div class="cta-base cta-display-inline-flex">
												<div class="cta-base cta-display-inline-flex cta-bottom-0px cta-left-0px cta-position-absolute cta-right-0px cta-top-0px cta-transparent-background cta-transition-duration cta-transition-property cta-outline-style-none"></div>
												<svg viewBox="0 0 24 24" aria-hidden="true" class="cta-display-inline-block cta-fill-currentcolor cta-max-width-100per cta-position-relative cta-vertical-align-text-bottom cta-user-select-none cta-svg-height cta-svg-width">
													<g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`.replace(/\t|\n/g, '');
			let currentTweetID = tweetData.tweetData.id;
			let currentScreenName = tweetData.userData.screen_name;
			let retweetNode = engagementNode.querySelector('[cta-id="retweet"]');
			let likeNode = engagementNode.querySelector('[cta-id="like"]');
			let bookmarkNode = engagementNode.querySelector('[cta-id="bookmark"]');
			retweetNode.addEventListener('click',whenClickRetweet);
			likeNode.addEventListener('click',whenClickLike);
			bookmarkNode.addEventListener('click',whenClickBookmark);
			engagementNode.querySelector('[cta-id="share-button"]').addEventListener('click',async function(){
				copyToClipboard(`https://twitter.com/${currentScreenName}/status/${currentTweetID}`);
			});
			return engagementNode;

			async function whenClickRetweet(event){
				event.currentTarget.removeEventListener('click', whenClickRetweet);
				if(!ctaEngagementStore[currentTweetID])ctaEngagementStore[currentTweetID] = {};
				let countTextNode = retweetNode.querySelector('[cta-id="retweet-text"]');
				let countText = Number(countTextNode.innerText);
				try{
					if(retweetNode.getAttribute('data-testid') === 'retweet'){
						let resp = await request(new requestObject_twitter_CreateRetweet(currentTweetID));
						if(!(resp.status === 200)){
							displayToast(textData.faildRetweet);
							return;
						}
						displayToast(textData.doneRetweet);
						retweetNode.setAttribute('data-testid','unretweet');
						retweetNode.firstChild.style.color = "rgb(0, 186, 124)";
						retweetNode.querySelector('path').setAttribute('d',retweetedPath);
						if(!isNaN(countText))countTextNode.innerText = Number(countTextNode.innerText) + 1;
						ctaEngagementStore[currentTweetID].retweeted = true;
					}else{
						let resp = await request(new requestObject_twitter_DeleteRetweet(currentTweetID));
						if(!(resp.status === 200)){
							displayToast(textData.faildUnRetweet);
							return;
						}
						displayToast(textData.unRetweet);
						retweetNode.setAttribute('data-testid','retweet');
						retweetNode.firstChild.style.color = colors.fontColorDark;
						retweetNode.querySelector('path').setAttribute('d',retweetPath);
						if(!isNaN(countText)){
							if((Number(countTextNode.innerText) - 1)>0){
								countTextNode.innerText = Number(countTextNode.innerText) - 1;
							}else{
								countTextNode.innerText = "";
							}
						}
						ctaEngagementStore[currentTweetID].retweeted = false;
					}
				}catch(error){
					console.error(error);
				}finally{
					retweetNode.addEventListener('click', whenClickRetweet);
				}
			}
			async function whenClickLike(event){
				event.currentTarget.removeEventListener('click', whenClickLike);
				if(!ctaEngagementStore[currentTweetID])ctaEngagementStore[currentTweetID] = {};
				let countTextNode = likeNode.querySelector('[cta-id="like-text"]');
				let countText = Number(countTextNode.innerText);
				try{
					if(likeNode.getAttribute('data-testid') === 'like'){
						let resp = await request(new requestObject_twitter_FavoriteTweet(currentTweetID));
						if(!(resp.status === 200)){
							displayToast(textData.faildRetweet);
							return;
						}
						likeNode.setAttribute('data-testid','unlike');
						likeNode.firstChild.style.color = "rgb(249, 24, 128)";
						likeNode.querySelector('path').setAttribute('d',likedPath);
						if(!isNaN(countText))countTextNode.innerText = Number(countTextNode.innerText) + 1;
						ctaEngagementStore[currentTweetID].favorited = true;
					}else{
						let resp = await request(new requestObject_twitter_UnfavoriteTweet(currentTweetID));
						console.log(resp)
						if(!(resp.status === 200)){
							displayToast(textData.faildUnRetweet);
							return;
						}
						likeNode.setAttribute('data-testid','like');
						likeNode.firstChild.style.color = colors.fontColorDark;
						likeNode.querySelector('path').setAttribute('d',likePath);
						if(!isNaN(countText)){
							if((Number(countTextNode.innerText) - 1)>0){
								countTextNode.innerText = Number(countTextNode.innerText) - 1;
							}else{
								countTextNode.innerText = "";
							}
						}
						ctaEngagementStore[currentTweetID].favorited = false;
					}
				}catch(error){
					console.error(error);
				}finally{
					likeNode.addEventListener('click', whenClickLike);
				}
			}
			async function whenClickBookmark(event){
				event.currentTarget.removeEventListener('click', whenClickBookmark);
				if(!ctaEngagementStore[currentTweetID])ctaEngagementStore[currentTweetID] = {};
				try{
					if(bookmarkNode.getAttribute('data-testid') === 'bookmark'){
						let resp = await request(new requestObject_twitter_CreateBookmark(currentTweetID));
						if(!(resp.status === 200)){
							displayToast(textData.faildRetweet);
							return;
						}
						displayToast(textData.doneBookmark);
						bookmarkNode.setAttribute('data-testid','unbookmark');
						bookmarkNode.firstChild.style.color = "rgb(29, 155, 240)";
						bookmarkNode.querySelector('path').setAttribute('d',bookmarkedPath);
						ctaEngagementStore[currentTweetID].bookmarked = true;
					}else{
						let resp = await request(new requestObject_twitter_DeleteBookmark(currentTweetID));
						if(!(resp.status === 200)){
							displayToast(textData.faildUnRetweet);
							return;
						}
						displayToast(textData.unBookmark);
						bookmarkNode.setAttribute('data-testid','bookmark');
						bookmarkNode.firstChild.style.color = colors.fontColorDark;
						bookmarkNode.querySelector('path').setAttribute('d',bookmarkPath);
						ctaEngagementStore[currentTweetID].bookmarked = false;
					}
				}catch(error){
					console.error(error);
				}finally{
					bookmarkNode.addEventListener('click', whenClickBookmark);
				}
			}
		}
		function tweetTextProsser(text,hashtags,user_mentions,symbols,urls,media){
			let link_class = 'cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family-inherit cta-cursor-pointer';
			function countSurrogatePairs(str){
				return Array.from(str).filter(char => char.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/)).length;
			}
			let combined = [].concat(
				hashtags.map(tag => ({
					type: 'hashtag',
					indices: tag.indices,
					text: tag.text
				})),
				user_mentions.map(mention => ({
					type: 'mention',
					indices: mention.indices,
					text: mention.screen_name
				})),
				symbols.map(symbol => ({
					type: 'symbol',
					indices: symbol.indices,
					text: symbol.text
				}))
			);
			// combinedをindicesの順にソート
			combined.sort((a, b) => b.indices[0] - a.indices[0]);
			let transformedText = text;

			combined.forEach(item => {
				let start = item.indices[0];
				let end = item.indices[1];

				// サロゲートペアの数をカウントして調整
				const adjustment = countSurrogatePairs(transformedText.slice(0, end));
				start += adjustment;
				end += adjustment;

				let replacement = '';
				switch(item.type){
					case 'hashtag':
						replacement = `<a class="${link_class}" style="text-decoration: none;color:rgb(29, 155, 240)" dir="ltr" role="link" href="https://twitter.com/hashtag/${item.text}" target="_blank" rel="noopener noreferrer nofollow">#${item.text}</a>`;
						break;
					case 'mention':
						replacement = `<a class="${link_class}" style="text-decoration: none;color:rgb(29, 155, 240)" dir="ltr" role="link" href="https://twitter.com/${item.text}" target="_blank" rel="noopener noreferrer nofollow">@${item.text}</a>`;
						break;
					case 'symbol':
						replacement = `<a class="${link_class}" style="text-decoration: none;color:rgb(29, 155, 240)" dir="ltr" role="link" href="https://twitter.com/search?q=%24${item.text}&src=cashtag_click" target="_blank" rel="noopener noreferrer nofollow">$${item.text}</a>`;
						break;
				}
				transformedText = transformedText.slice(0, start) + replacement + transformedText.slice(end);
			});
			text = transformedText;
			urls.forEach(target =>{
				text = text.replace(new RegExp(`${target.url}(?=(\\s|$|\\u3000|\\W)(?!\\.|,))`, 'gu'), `<a class="${link_class}" style="text-decoration: none;color:rgb(29, 155, 240)" dir="ltr" role="link" href="${target.url}" target="_blank" rel="noopener noreferrer nofollow">${target.display_url}</a>`);
			});
			media.forEach(m=>{
				text = text.replace(m.url,'');
			});
			return text;
		}
		function appendAccountStatusIcon(node,tweetData){
			let accountStatusNode = node.querySelector('[cta-id="account-status"]');
			if(tweetData.userData.protected){
				let iconLock = document.createElement('div');
				iconLock.innerHTML = `
					<svg viewBox="0 0 24 24" aria-label="非公開アカウント" role="img" class="cta-display-inline-block cta-fill-currentcolor cta-svg-height cta-position-relative cta-vertical-align-text-bottom cta-user-select-none cta-margin-left-small cta-svg-max-height cta-svg-max-width" data-testid="icon-lock" style="color: ${colors.fontColor}">
						<g><path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path></g>
					</svg>
				`.replace(/\t|\n/g, '');
				accountStatusNode.appendChild(iconLock.firstChild);
			}
			if(tweetData.userData.verified_type === "Business"){
				let iconVerifiedBussiness = document.createElement('div');
				iconVerifiedBussiness.innerHTML = `
					<svg viewBox="0 0 22 22" aria-label="認証済みアカウント" role="img" class="cta-display-inline-block cta-fill-currentcolor cta-svg-height cta-position-relative cta-vertical-align-text-bottom cta-user-select-none cta-svg-max-height cta-svg-max-width cta-margin-left-small" data-testid="icon-verified">
						<g>
							<linearGradient gradientUnits="userSpaceOnUse" id="38-a" x1="4.411" x2="18.083" y1="2.495" y2="21.508">
								<stop offset="0" stop-color="#f4e72a"></stop>
								<stop offset=".539" stop-color="#cd8105"></stop>
								<stop offset=".68" stop-color="#cb7b00"></stop>
								<stop offset="1" stop-color="#f4ec26"></stop>
								<stop offset="1" stop-color="#f4e72a"></stop>
							</linearGradient>
							<linearGradient gradientUnits="userSpaceOnUse" id="38-b" x1="5.355" x2="16.361" y1="3.395" y2="19.133">
								<stop offset="0" stop-color="#f9e87f"></stop>
								<stop offset=".406" stop-color="#e2b719"></stop>
								<stop offset=".989" stop-color="#e2b719"></stop>
							</linearGradient>
							<g clip-rule="evenodd" fill-rule="evenodd">
								<path d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#38-a)"></path>
								<path d="M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#38-b)"></path>
								<path d="M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z" fill="#d18800"></path>
							</g>
						</g>
					</svg>
				`.replace(/\t|\n/g, '');
				accountStatusNode.appendChild(iconVerifiedBussiness.firstChild);
			}else if(tweetData.userData.is_blue_verified){
				let iconVerified = document.createElement('div');
				iconVerified.innerHTML = `
					<svg viewBox="0 0 22 22" aria-label="認証済みアカウント" role="img" class="cta-display-inline-block cta-fill-currentcolor cta-svg-height cta-position-relative cta-vertical-align-text-bottom cta-user-select-none cta-svg-max-height cta-svg-max-width cta-margin-left-small" data-testid="icon-verified" style="color: rgb(29, 155, 240);">
						<g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
					</svg>
				`.replace(/\t|\n/g, '');
				accountStatusNode.appendChild(iconVerified.firstChild);
			}
			return node;
		}
	}
	async function displayToast(text){
		try{
			let node = document.createElement('div');
			node.innerHTML = `
				<div class="cta-base cta-backface-visibility-hidden cta-right-0px cta-position-fixed cta-left-0px cta-bottom-0px cta-pointer-events-none" cta-id="custom-alert">
					<div class="cta-base cta-pointer-events-none">
						<div class="cta-base cta-pointer-events-none">
							<div class="cta-base cta-pointer-events-none cta-side-margin-auto cta-width-100per cta-max-width-600px">
								<div role="alert" class="cta-base cta-align-items-center cta-background-color-twitterblue cta-flex-direction-row cta-justify-content-space-between cta-pointer-events-auto cta-align-self-center" style="transition-property: opacity; transition-duration: 170ms; transition-timing-function: cubic-bezier(0, 0, 1, 1); opacity: 1; padding: 12px; top: calc(env(safe-area-inset-bottom) - 53); border-radius: 4px; margin-bottom: 32px;" data-testid="toast">
									<div dir="ltr" class="cta-text-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family cta-font-size cta-line-height cta-font-normal cta-flex-shrink-1" style="color: rgb(255, 255, 255); text-overflow: unset; padding-left: 12px; padding-right: 12px;">
										<span class="cta-text2-css cta-min-width-0px cta-overflow-wrap-break-word cta-font-family" style="text-overflow: unset;">${text}</span>
									</div>
									<div aria-hidden="true" class="cta-base cta-flex-direction-row"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`.replace(/\t|\n/g, '');
			document.getElementById("react-root").appendChild(node.firstChild);
			await sleep(2000);
			node.remove();
		}catch(error){
			console.error(error);
		}finally{
			let node = document.querySelector('[cta-id="custom-alert"]');
			if(node)node.remove();
		}
	}
	class requestObject_twitter_UnfavoriteTweet{
		constructor(tweetID){
			this.method = 'POST';
			this.respType = 'json';
			this.url = `https://${window.location.hostname}/i/api/graphql/ZYKSe-w7KEslx3JhSIk5LA/UnfavoriteTweet`;
			this.body = `{"variables":{"tweet_id":"${tweetID}"},"queryId":"ZYKSe-w7KEslx3JhSIk5LA"}`;
			this.headers = {
				'Content-Type': 'application/json',
				'User-agent': userAgent,
				'accept': '*/*',
				'Accept-Encoding': 'br, gzip, deflate',
				'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
				"x-csrf-token": GetCookie("ct0"),
				'Sec-Fetch-Site': 'same-origin',
			};
			this.package = null;
			this.anonymous = false;
		}
	}
	class requestObject_twitter_CreateRetweet{
		constructor(tweetID){
			this.method = 'POST';
			this.respType = 'json';
			this.url = `https://${window.location.hostname}/i/api/graphql/ojPdsZsimiJrUGLR1sjUtA/CreateRetweet`;
			this.body = `{"variables":{"tweet_id":"${tweetID}","dark_request":false},"queryId":"ojPdsZsimiJrUGLR1sjUtA"}`;
			this.headers = {
				'Content-Type': 'application/json',
				'User-agent': userAgent,
				'accept': '*/*',
				'Accept-Encoding': 'br, gzip, deflate',
				'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
				"x-csrf-token": GetCookie("ct0"),
				'Sec-Fetch-Site': 'same-origin',
			};
			this.package = null;
			this.anonymous = false;
		}
	}
	class requestObject_twitter_DeleteRetweet{
		constructor(tweetID){
			this.method = 'POST';
			this.respType = 'json';
			this.url = `https://${window.location.hostname}/i/api/graphql/iQtK4dl5hBmXewYZuEOKVw/DeleteRetweet`;
			this.body = `{"variables":{"source_tweet_id":"${tweetID}","dark_request":false},"queryId":"iQtK4dl5hBmXewYZuEOKVw"}`;
			this.headers = {
				'Content-Type': 'application/json',
				'User-agent': userAgent,
				'accept': '*/*',
				'Accept-Encoding': 'br, gzip, deflate',
				'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
				"x-csrf-token": GetCookie("ct0"),
				'Sec-Fetch-Site': 'same-origin',
			};
			this.package = null;
			this.anonymous = false;
		}
	}
	class requestObject_twitter_CreateBookmark{
		constructor(tweetID){
			this.method = 'POST';
			this.respType = 'json';
			this.url = `https://${window.location.hostname}/i/api/graphql/aoDbu3RHznuiSkQ9aNM67Q/CreateBookmark`;
			this.body = `{"variables":{"tweet_id":"${tweetID}"},"queryId":"aoDbu3RHznuiSkQ9aNM67Q"}`;
			this.headers = {
				'Content-Type': 'application/json',
				'User-agent': userAgent,
				'accept': '*/*',
				'Accept-Encoding': 'br, gzip, deflate',
				'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
				"x-csrf-token": GetCookie("ct0"),
				'Sec-Fetch-Site': 'same-origin',
				'Sec-Fetch-Mode': 'navigate',
			};
			this.package = null;
			this.anonymous = false;
		}
	}
	class requestObject_twitter_DeleteBookmark{
		constructor(tweetID){
			this.method = 'POST';
			this.respType = 'json';
			this.url = `https://${window.location.hostname}/i/api/graphql/Wlmlj2-xzyS1GN3a6cj-mQ/DeleteBookmark`;
			this.body = `{"variables":{"tweet_id":"${tweetID}"},"queryId":"Wlmlj2-xzyS1GN3a6cj-mQ"}`;
			this.headers = {
				'Content-Type': 'application/json',
				'User-agent': userAgent,
				'accept': '*/*',
				'Accept-Encoding': 'br, gzip, deflate',
				'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
				"x-csrf-token": GetCookie("ct0"),
				'Sec-Fetch-Site': 'same-origin',
				'Sec-Fetch-Mode': 'navigate',
			};
			this.package = null;
			this.anonymous = false;
		}
	}
	function appendCtaCss(){
		let style = document.createElement('style');
		style.className = `cta-css`
		style.textContent = `
			.cta-base {
				/*css-175oi2r*/
				align-items: stretch;
				background-color: rgba(0, 0, 0, 0.00);
				border: 0 solid black;
				box-sizing: border-box;
				display: flex;
				flex-basis: auto;
				flex-direction: column;
				flex-shrink: 0;
				list-style: none;
				margin: 0px;
				min-height: 0px;
				min-width: 0px;
				padding: 0px;
				position: relative;
				text-decoration: none;
				z-index: 0;
			}
			.cta-img-css {
				/*css-9pa8cd*/
				inset: 0px;
				height: 100%;
				opacity: 0;
				position: absolute;
				width: 100%;
				z-index: -1;
			}
			.cta-text-css {
				/*css-1rynq56*/
				background-color: rgba(0, 0, 0, 0);
				border: 0px solid black;
				box-sizing: border-box;
				color: rgb(0, 0, 0);
				display: inline;
				font: 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
				list-style: none;
				margin: 0px;
				padding: 0px;
				text-align: inherit;
				text-decoration: none;
				white-space: pre-wrap;
				overflow-wrap: break-word;
			}
			.cta-text2-css {
				/*css-1qaijid*/
				background-color: rgba(0, 0, 0, 0);
				border: 0px solid black;
				box-sizing: border-box;
				color: inherit;
				display: inline;
				font: inherit;
				list-style: none;
				margin: 0px;
				padding: 0px;
				text-align: inherit;
				text-decoration: none;
				white-space: inherit;
				overflow-wrap: break-word;
			}
			.cta-flex-direction-row {
				/*r-18u37iz*/
				flex-direction: row;
			}
			.cta-overflow-hidden {
				/*r-1udh08x*/
				overflow-x: hidden;
				overflow-y: hidden;
			}
			.cta-overflow-visible {
				/*r-bztko3*/
				overflow-x: visible;
				overflow-y: visible;
			}
			.cta-padding-left {
				/*r-1qhn6m8*/
				padding-left: calc(2.678%);
			}
			.cta-padding-bottom {
				/*r-kzbkwu*/
				padding-bottom: 12px;
			}
			.cta-padding-right {
				/*r-i023vh*/
				padding-right: calc(2.678%);
			}
			.cta-transition-duration {
				/*r-o7ynqc*/
				transition-duration: 0.2s;
			}
			.cta-transition-property {
				/*r-6416eg*/
				-moz-transition-property: background-color, box-shadow;
				-webkit-transition-property: background-color, box-shadow;
				transition-property: background-color, box-shadow;
			}
			.cta-outline-style-none {
				/*r-1ny4l3l*/
				outline-style: none;
			}
			.cta-cursor-pointer {
				/*r-1loqt21*/
				cursor: pointer;
			}
			.cta-flex-direction-column {
				/*r-eqz5dr*/
				flex-direction: column;
			}
			.cta-flex-grow-0 {
				/*r-18kxxzh*/
				flex-grow: 0;
			}
			.cta-flex-grow-1 {
				/*r-16y2uox*/
				flex-grow: 1;
			}
			.cta-flex-shrink-1 {
				/*r-1wbh5a2*/
				flex-shrink: 1;
			}
			.cta-flex-basis-0px {
				/*r-1iusvr4*/
				flex-basis: 0px;
			}
			.cta-padding-top {
				/*r-ttdzmv*/
				padding-top: calc(2.122%);
			}
			.cta-margin-right-big {
				/*r-1b7u577*/
				margin-right: calc(2.122%);
			}
			.cta-margin-right-small {
				/*r-a5pmau*/
				margin-right: calc(0.356%);
			}
			.cta-margin-top {
				/*r-1s2bzr4*/
				margin-top: 12px;
			}
			.cta-flex-basis-icon {
				/*r-onrtq4*/
				flex-basis: calc(7.07%);
			}
			.cta-align-items-center {
				/*r-1awozwy*/
				align-items: center;
			}
			.cta-width-100per {
				/*r-13qz1uu*/
				width: 100%;
			}
			.cta-display-block {
				/*r-1adg3ll*/
				display: block;
			}
			.cta-left-0px {
				/*r-1d2f490*/
				left: 0px;
			}
			.cta-top-0px {
				/*r-ipm5af*/
				top: 0px;
			}
			.cta-right-0px {
				/*r-zchlnj*/
				right: 0px;
			}
			.cta-bottom-0px {
				/*r-1p0dtai*/
				bottom: 0px;
			}
			.cta-height-100per {
				/*r-1pi2tsx*/
				height: 100%;
			}
			.cta-position-absolute {
				/*r-u8s1d*/
				position: absolute;
			}
			.cta-arrangement-center	{
				/*r-1wyvozj*/
				/*r-1v2oles*/
				/*r-desppf*/
				left: 50%;
				top: 50%;
				transform: translateX(-50%) translateY(-50%);
			}
			.cta-icon-position-fix {
				/*r-ggadg3*/
				/*r-8jfcpp*/
				left: calc(-0.356%);
				top: calc(-0.356%);
			}
			.cta-shape-circle {
				/*r-sdzlij*/
				border-bottom-left-radius: 9999px;
				border-bottom-right-radius: 9999px;
				border-top-left-radius: 9999px;
				border-top-right-radius: 9999px;
			}
			.cta-shape-square {
				/*clip-path: url("#shape-square-rx-16");*/
				border-bottom-left-radius: 4px;
				border-bottom-right-radius: 4px;
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
			}
			.cta-pointer-events-none {
				/*r-633pao*/
				pointer-events: none !important;
			}
			.cta-flex-basis-auto {
				/*r-1mlwlqe*/
				flex-basis: auto;
			}
			.cta-z-index-0 {
				/*r-417010*/
				z-index: 0;
			}
			.cta-z-index--1 {
				/*r-1wyyakw*/
				z-index: -1;
			}
			.cta-display-inline-block {
				/*r-4qtqp9*/
				display: inline-block;
			}
			.cta-transparent-background {
				/*r-1niwhzg*/
				background-color: rgba(0, 0, 0, 0.00);
			}
			.cta-background-position-center {
				/*r-vvn4in*/
				background-position: center center;
			}
			.cta-background-no-repeat {
				/*r-u6sd8q*/
				background-repeat: no-repeat;
			}
			.cta-background-size-cover {
				/*r-4gszlv*/
				background-size: cover;
			}
			.cta-icon-box-shadow {
				/*r-172uzmj*/
				box-shadow: rgba(255, 255, 255, 0.03) 0px 0px 2px inset;
			}
			.cta-justify-content-center {
				/*r-1777fci*/
				justify-content: center;
			}
			.cta-justify-content-flex-start {
				/*r-1h0z5md*/
				justify-content: flex-start;
			}
			.cta-margin-bottom-small {
				/*r-zl2h9q*/
				margin-bottom: 2px;
			}
			.cta-margin-left-small {
				/*r-9cviqr*/
				margin-left: 2px;
			}
			.cta-align-items-start {
				/*r-k4xj1c*/
				align-items: start;
			}
			.cta-justify-content-space-between {
				/*r-1wtj0ep*/
				justify-content: space-between;
			}
			.cta-align-items-baseline {
				/*r-1d09ksm*/
				align-items: baseline;
			}
			.cta-max-width-100per {
				/*r-dnmrzs*/
				max-width: 100%;
			}
			.cta-min-width-0px {
				/*r-bcqeeo*/
				min-width: 0px;
			}
			.cta-overflow-wrap-break-word {
				/*r-qvutc0*/
				overflow-wrap: break-word;
			}
			.cta-font-family {
				/*r-1tl8opc*/
				font-family: "Segoe UI", Meiryo, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
			}
			.cta-provisional-font-family {
				/*r-37j5jr*/
				font-family: "TwitterChirp", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
			}
			.cta-font-size {
				/*r-a023e6*/
				font-size: 1em;
			}
			.cta-line-height {
				/*r-rjixqe*/
				line-height: 1.25em;
			}
			.cta-font-bold {
				/*r-b88u0q*/
				font-weight: 700;
			}
			.cta-font-normal {
				/*r-16dba41*/
				font-weight: 400;
			}
			.cta-display-flex {
				/*r-6koalj*/
				display: flex;
			}
			.cta-flex-shrink-0 {
				/*r-1q142lx*/
				flex-shrink: 0;
			}
			.cta-display-inline-flex {
				/*r-xoduu5*/
				display: inline-flex;
			}
			.cta-white-space-nowrap {
				/*r-3s2u2q*/
				white-space: nowrap;
			}
			.cta-fill-currentcolor {
				/*r-yyyyoo*/
				fill: currentcolor;
			}
			.cta-svg-height {
				/*r-1xvli5t*/
				height: 1.25em;
			}
			.cta-svg-width {
				/*r-1hdv0qi*/
				width: 1.25em;
			}
			.cta-svg-max-height {
				/*r-f9ja8p*/
				max-height: 1.25em;
			}
			.cta-svg-max-width {
				/*r-og9te1*/
				max-width: 1.25em;
			}
			.cta-svg-transition-property-color {
				/*r-clp7b1*/
				transition-property: color;
			}
			.cta-position-relative {
				/*r-bnwqim*/
				position: relative;
			}
			.cta-vertical-align-text-bottom {
				/*r-1plcrui*/
				vertical-align: text-bottom;
			}
			.cta-user-select-none {
				/*r-lrvibr*/
				user-select: none;
			}
			.cta-gap-4px {
				/*r-9aw3ui*/
				gap: 4px;
			}
			.cta-gap-8px {
				/*r-1cmwbt1*/
				gap: 8px;
			}
			.cta-gap-12px {
				/*r-1ssbvtb*/
				gap: 12px;
			}
			.cta-min-height-20px {
				/*r-bt1l66*/
				min-height: 20px;
			}
			.cta-margin--8px {
				/*r-xf4iuw*/
				margin: -8px;
			}
			.cta-box-orient-vertical {
				/*r-8akbws*/
				-moz-box-orient: vertical;
				-webkit-box-orient: vertical;
			}
			.cta-font-family-inherit {
				/*r-poiln3*/
				font-family: inherit;
			}
			.cta-font-size-0px {
				/*r-hiw28u*/
				/*r-qvk6io*/
				font-size: 0px;
				line-height: 0px;
			}
			.cta-border {
				/*r-18bvks7*/
				/*r-1phboty*/
				/*r-rs99b7*/
				/*js制御*/
				border-color: rgb(56, 68, 77);
				border-style: solid;
				overflow: hidden;
				border-width: 1px;
			}
			.cta-border-radius-16px {
				/*r-1867qdf*/
				border-radius: 16px;
			}
			.cta-column-gap-4px {
				/*r-1kbdv8c*/
				column-gap: 4px;
			}
			.cta-max-width-600px {
				/*r-1ye8kvj*/
				max-width: 600px;
			}
			.cta-flex-1-1-0per {
				/*r-13awgt0*/
				flex: 1 1 0%;
			}
			.cta-engagement-text {
				/*r-1pn2ns4*/
				/*r-n6v787*/
				/*r-1cwl3u0*/
				/*r-1k6nrdp*/
				padding-left: 4px;
				padding-right: 4px;
				line-height: 16px;
				font-size: 13px;
				min-width: calc(1em + 24px);
			}
			.cta-backface-visibility-hidden {
				/*r-aqfbo4*/
				backface-visibility: hidden;
			}
			.cta-position-fixed {
				/*r-1xcajam*/
				position: fixed;
			}
			.cta-pointer-events-none {
				/*r-12vffkv*/
				pointer-events: none !important;
			}
			.cta-background-color-twitterblue {
				/*r-l5o3uw*/
				background-color: rgb(29, 155, 240);
			}
			.cta-pointer-events-auto {
				/*r-105ug2t*/
				pointer-events: auto !important;
			}
			.cta-align-self-center {
				/*r-1kihuf0*/
				align-self: center;
			}
			.cta-side-margin-auto {
				/*r-1jgb5lz*/
				margin-left: auto;
				margin-right: auto;
			}
			.cta-side-margin-12px {
				/*r-1fz3rvf*/
				margin-left: 12px;
				margin-right: 12px;
			}
			.cta-font-feature-settings-ss01 {
				/*r-1wvb978*/
				font-feature-settings: "ss01";
			}
			.cta-side-padding-4px {
				/*r-s1qlax*/
				padding-left: 4px;
				padding-right: 4px;
			}
			.cta-flex-wrap-wrap {
				/*r-1w6e6rj*/
				flex-wrap: wrap;
			}
		`.replace(/\t|\n/g, '');
		document.head.appendChild(style);
	}
	appendCtaCss();

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


	class requestObject_twitter_api_v1_1{
		constructor(ID,endpoints = "lookup"){
			this.method = 'GET';
			this.respType = 'json';
			this.url = `https://api.twitter.com/1.1/statuses/${endpoints}.json?id=${ID}&tweet_mode=extended`;
			this.body = null;
			this.headers = {
				"Content-Type": "application/json",
				'User-agent': userAgent,
				'accept': '*/*',
				'Accept-Encoding': 'br, gzip, deflate',
				'Referer': "https://twitter.com/",
				'Host': 'api.twitter.com',
				'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAIK1zgAAAAAA2tUWuhGZ2JceoId5GwYWU5GspY4%3DUq7gzFoCZs1QfwGoVdvSac3IniczZEYXIcDyumCauIXpcAPorE',
				'x-csrf-token': GetCookie("ct0"),
			};
			this.package = null;
			this.anonymous = false;
		}
	}
	class requestObject_twitter_api_graphql{
		constructor(ID){
			this.method = 'GET';
			this.respType = 'json';
			this.url = `https://${window.location.hostname}/i/api/graphql/TuC3CinYecrqAyqccUyFhw/TweetDetail?variables=%7B%22focalTweetId%22%3A%22${ID}%22%2C%22referrer%22%3A%22home%22%2C%22with_rux_injections%22%3Afalse%2C%22includePromotedContent%22%3Atrue%2C%22withCommunity%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withArticleRichContent%22%3Atrue%2C%22withBirdwatchNotes%22%3Atrue%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22rweb_lists_timeline_redesign_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_media_download_video_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withArticleRichContentState%22%3Atrue%7D`;
			this.body = null;
			this.headers = {
				'User-agent': userAgent,
				'accept': '*/*',
				'Accept-Encoding': 'br, gzip, deflate',
				'authorization': `Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA`,
				'x-csrf-token': GetCookie("ct0"),
			};
			this.package = null;
			this.anonymous = false;
		}
	}
	class requestObject_twitter_get_user_by_screenname{
		constructor(ID){
			this.method = 'GET';
			this.respType = 'json';
			this.url = `https://${window.location.hostname}/i/api/graphql/rePnxwe9LZ51nQ7Sn_xN_A/UserByScreenName?variables=%7B%22screen_name%22%3A%22${ID}%22%2C%22withSafetyModeUserFields%22%3Afalse%2C%22withSuperFollowsUserFields%22%3Afalse%7D&features=%7B%22responsive_web_twitter_blue_verified_badge_is_enabled%22%3Afalse%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Afalse%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Afalse%7D`;
			this.body = null;
			this.headers = {
				"Content-Type": "application/json",
				'User-agent': userAgent,
				'accept': '*/*',
				'Referer': `https://${window.location.hostname}/`,
				'Accept-Encoding': 'br, gzip, deflate',
				'authorization': `Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA`,
				'x-csrf-token': GetCookie("ct0"),
			};
			this.package = null;
			this.anonymous = false;
			this.screen_name = ID;
		}
	}
	class requestObject_twitter_get_user_by_screenname_1_1{
		constructor(ID) {
			this.method = 'GET';
			this.respType = 'json';
			this.url = `https://api.twitter.com/1.1/users/show.json?screen_name=${ID}`;
			this.body = null;
			this.headers = {
				"Content-Type": "application/json",
				'User-agent': userAgent,
				'accept': '*/*',
				'Referer': "https://twitter.com/",
				'Accept-Encoding': 'br, gzip, deflate',
				'authorization': `Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA`,
				'x-csrf-token': GetCookie("ct0"),
			};
			this.package = null;
			this.anonymous = false;
			this.screen_name = ID;
		}
	}
	class requestObject_twitter_time_line{
		constructor(){
			this.method = 'POST';
			this.respType = 'json';
			this.url = `https://${window.location.hostname}/i/api/graphql/HnVOsy-Rh_0Cuq06_z9lGA/HomeLatestTimeline`;
			this.body = JSON.stringify({
				"variables": {
					"count": 100,
					"includePromotedContent": false,
					"latestControlAvailable": true,
					"requestContext": "launch"
				},
				"features": {
					"responsive_web_graphql_exclude_directive_enabled": true,
					"verified_phone_label_enabled": false,
					"responsive_web_home_pinned_timelines_enabled": true,
					"creator_subscriptions_tweet_preview_api_enabled": true,
					"responsive_web_graphql_timeline_navigation_enabled": true,
					"responsive_web_graphql_skip_user_profile_image_extensions_enabled": false,
					"tweetypie_unmention_optimization_enabled": true,
					"responsive_web_edit_tweet_api_enabled": true,
					"graphql_is_translatable_rweb_tweet_is_translatable_enabled": true,
					"view_counts_everywhere_api_enabled": true,
					"longform_notetweets_consumption_enabled": true,
					"responsive_web_twitter_article_tweet_consumption_enabled": false,
					"tweet_awards_web_tipping_enabled": false,
					"freedom_of_speech_not_reach_fetch_enabled": true,
					"standardized_nudges_misinfo": true,
					"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true,
					"longform_notetweets_rich_text_read_enabled": true,
					"longform_notetweets_inline_media_enabled": true,
					"responsive_web_media_download_video_enabled": true,
					"responsive_web_enhance_cards_enabled": false
				},
				"queryId": "HnVOsy-Rh_0Cuq06_z9lGA"
			});
			this.headers = {
				"Content-Type": "application/json",
				'User-agent': userAgent,
				'accept': '*/*',
				'Referer': `https://${window.location.hostname}/`,
				'Accept-Encoding': 'br, gzip, deflate',
				'authorization': `Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA`,
				'x-csrf-token': GetCookie("ct0"),
			};
			this.package = null;
			this.anonymous = false;
		}
	}
	class requestObject_twitter_time_line_forYou{
		constructor(){
			this.method = 'POST';
			this.respType = 'json';
			this.url = `https://${window.location.hostname}/i/api/graphql/-8TWbLqVU1ROq-eeErVc2w/HomeTimeline`;
			this.body = JSON.stringify({
				"variables": {
					"count": 100,
					"includePromotedContent": false,
					"latestControlAvailable": true,
					"requestContext": "launch",
					"withCommunity": true,
				},
				"features": {
					"responsive_web_graphql_exclude_directive_enabled": true,
					"verified_phone_label_enabled": false,
					"responsive_web_home_pinned_timelines_enabled": true,
					"creator_subscriptions_tweet_preview_api_enabled": true,
					"responsive_web_graphql_timeline_navigation_enabled": true,
					"responsive_web_graphql_skip_user_profile_image_extensions_enabled": false,
					"tweetypie_unmention_optimization_enabled": true,
					"responsive_web_edit_tweet_api_enabled": true,
					"graphql_is_translatable_rweb_tweet_is_translatable_enabled": true,
					"view_counts_everywhere_api_enabled": true,
					"longform_notetweets_consumption_enabled": true,
					"responsive_web_twitter_article_tweet_consumption_enabled": false,
					"tweet_awards_web_tipping_enabled": false,
					"freedom_of_speech_not_reach_fetch_enabled": true,
					"standardized_nudges_misinfo": true,
					"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true,
					"longform_notetweets_rich_text_read_enabled": true,
					"longform_notetweets_inline_media_enabled": true,
					"responsive_web_media_download_video_enabled": false,
					"responsive_web_enhance_cards_enabled": false
				},
				"queryId": "-8TWbLqVU1ROq-eeErVc2w"
			});
			this.headers = {
				"Content-Type": "application/json",
				'User-agent': userAgent,
				'accept': '*/*',
				'Referer': `https://${window.location.hostname}/`,
				'Accept-Encoding': 'br, gzip, deflate',
				'authorization': `Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA`,
				'x-csrf-token': GetCookie("ct0"),
			};
			this.package = null;
			this.anonymous = false;
		}
	}
	class requestObject_twitter_FavoriteTweet{
		constructor(URL){
			this.method = 'POST';
			this.respType = 'json';
			this.url = `https://${window.location.hostname}/i/api/graphql/lI07N6Otwv1PhnEgXILM7A/FavoriteTweet`;
			this.body = `{"variables":{"tweet_id":"${URL.split('/').pop()}"},"queryId":"lI07N6Otwv1PhnEgXILM7A"}`;
			this.headers = {
				'Content-Type': 'application/json',
				'User-agent': userAgent,
				'accept': '*/*',
				'Referer': URL,
				'Accept-Encoding': 'br, gzip, deflate',
				'Origin': `https://${window.location.hostname}`,
				'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
				"x-csrf-token": GetCookie("ct0"),
				'Sec-Fetch-Site': 'same-origin',
				'Sec-Fetch-Mode': 'navigate',
			};
			this.package = null;
			this.anonymous = false;
		}
	}
	class requestObject_url_expand{
		constructor(URL){
			this.method = 'POST';
			this.respType = 'text';
			this.url = `https://geek-website.com/tool/shortlink_open/request.php`;
			this.body = `shortlink=${encodeURIComponent(URL)}`;
			this.headers = {
				"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
				'User-agent': userAgent,
				"Accept": "text/plain, */*; q=0.01",
				'Accept-Encoding': 'br, gzip, deflate',
				'Referer': "https://geek-website.com/tool/shortlink_open/",
				'Host': 'geek-website.com',
				"Sec-Fetch-Dest": "empty",
    			"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin"
			};
			this.package = null;
			this.anonymous = true;
		}
	}
	class requestObject_skeb{
		constructor(URL,skeb_URL){
			this.method = 'GET';
			this.respType = 'json';
			this.url = `${URL}`;
			this.body = null;
			this.headers = {
				'User-agent': userAgent,
				'Referer': skeb_URL,
				'Alt-Used': 'skeb.jp',
				'Authorization': 'Bearer null',
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-site",
				'Accept-Encoding': 'br, gzip, deflate',
			};
		}
	}
	class requestObject_fanbox{
		constructor(URL,fanbox_URL){
			this.method = 'GET';
			this.respType = 'json';
			this.url = `${URL}`;
			this.body = null;
			this.headers = {
				'User-agent': userAgent,
				'origin': fanbox_URL,
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-site",
				'Accept-Encoding': 'br, gzip, deflate',
				'Host': 'api.fanbox.cc',
			};
		}
	}
	class sendObject_to_discord_webhook{
		constructor(webhook,sendEmbeds){
			this.method = 'POST';
			this.respType = 'json';
			this.url = "https://discord.com/api/webhooks/" + atob(webhook);
			this.headers = {
			};
			this.package = null;
			this.anonymous = true;
			this.body = sendEmbeds;
		}
	}
	class requestObject_binary_data{
		constructor(URL,addtional_cookie = undefined){
			this.method = 'GET';
			this.respType = 'blob';
			this.url = `${URL}`;
			this.body = null;
			this.encoding = null;
			this.headers = {
				"Content-Type": "*/*",
				'User-agent': navigator.userAgent || navigator.vendor || window.opera,
				'accept': '*/*',
				'Accept-Encoding': 'br, gzip, deflate',
				'Referer': URL,
				"Sec-Fetch-Mode": "navigate",
				'cookie': `${addtional_cookie}`
			};
			this.package = null;
		}
	}
	class requestObject_binary_head{
		constructor(URL, addtional_cookie = undefined) {
			this.method = 'HEAD';
			this.url = `${URL}`;
			this.body = null;
			this.encoding = null;
			this.headers = {
				"Content-Type": "*/*",
				'User-agent': navigator.userAgent || navigator.vendor || window.opera,
				'accept': '*/*',
				'Accept-Encoding': 'br, gzip, deflate',
				'Referer': URL,
				"Sec-Fetch-Mode": "navigate",
				'cookie': `${addtional_cookie}`
			};
			this.package = null;
		}
	}
	class requestObject{
		constructor(URL){
			this.method = 'GET';
			this.respType = '';
			this.url = `${URL}`;
			this.headers = {
				"Content-Type": "*/*",
				'Accept-Encoding': 'br, gzip, deflate',
				'User-agent': userAgent,
				'accept': '*/*',
				'Referer': URL,
				"Sec-Fetch-Mode": "navigate",
				"Sec-Fetch-Dest": "empty",
    			"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin"
			};
			this.package = null;
		}
	}

	class requestObject_twitter_get_user_media{
		constructor(url,variables){
			this.method = 'GET';
			this.respType = 'json';
			this.url = `${url}?variables=${encodeURIComponent(JSON.stringify(variables))}&features=${encodeURIComponent(JSON.stringify({
				"responsive_web_graphql_exclude_directive_enabled": true,
				"verified_phone_label_enabled": false,
				"responsive_web_home_pinned_timelines_enabled": true,
				"creator_subscriptions_tweet_preview_api_enabled": true,
				"responsive_web_graphql_timeline_navigation_enabled": true,
				"responsive_web_graphql_skip_user_profile_image_extensions_enabled": false,
				"c9s_tweet_anatomy_moderator_badge_enabled": true,
				"tweetypie_unmention_optimization_enabled": true,
				"responsive_web_edit_tweet_api_enabled": true,
				"graphql_is_translatable_rweb_tweet_is_translatable_enabled": true,
				"view_counts_everywhere_api_enabled": true,
				"longform_notetweets_consumption_enabled": true,
				"responsive_web_twitter_article_tweet_consumption_enabled": false,
				"tweet_awards_web_tipping_enabled": false,
				"freedom_of_speech_not_reach_fetch_enabled": true,
				"standardized_nudges_misinfo": true,
				"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true,
				"longform_notetweets_rich_text_read_enabled": true,
				"longform_notetweets_inline_media_enabled": true,
				"responsive_web_media_download_video_enabled": false,
				"responsive_web_enhance_cards_enabled": false
			}))}`;
			this.body = null;
			this.headers = {
				'User-agent': userAgent,
				'accept': '*/*',
				'Accept-Encoding': 'br, gzip, deflate',
				'authorization': `Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA`,
				'x-csrf-token': GetCookie("ct0"),
			};
			this.package = null;
			this.anonymous = false;
		}
	}
	class requestObject_twitter_get_search_media{
		constructor(url,variables){
			this.method = 'GET';
			this.respType = 'json';
			this.url = `${url}?variables=${encodeURIComponent(JSON.stringify(variables))}&features=${encodeURIComponent(JSON.stringify({
				"responsive_web_graphql_exclude_directive_enabled": true,
				"verified_phone_label_enabled": false,
				"creator_subscriptions_tweet_preview_api_enabled": true,
				"responsive_web_graphql_timeline_navigation_enabled": true,
				"responsive_web_graphql_skip_user_profile_image_extensions_enabled": false,
				"c9s_tweet_anatomy_moderator_badge_enabled": true,
				"tweetypie_unmention_optimization_enabled": true,
				"responsive_web_edit_tweet_api_enabled": true,
				"graphql_is_translatable_rweb_tweet_is_translatable_enabled": true,
				"view_counts_everywhere_api_enabled": true,
				"longform_notetweets_consumption_enabled": true,
				"responsive_web_twitter_article_tweet_consumption_enabled": false,
				"tweet_awards_web_tipping_enabled": false,
				"freedom_of_speech_not_reach_fetch_enabled": true,
				"standardized_nudges_misinfo": true,
				"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true,
				"rweb_video_timestamps_enabled": true,
				"longform_notetweets_rich_text_read_enabled": true,
				"longform_notetweets_inline_media_enabled": true,
				"responsive_web_media_download_video_enabled": false,
				"responsive_web_enhance_cards_enabled": false
			}))}`;
			this.body = null;
			this.headers = {
				'User-agent': userAgent,
				'accept': '*/*',
				'Accept-Encoding': 'br, gzip, deflate',
				'authorization': `Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA`,
				'x-csrf-token': GetCookie("ct0"),
			};
			this.package = null;
			this.anonymous = false;
		}
	}
	async function test(){
	}
	async function isFirstTime(){
		if(!(await getFromIndexedDB('Show_me_your_Pixiv','pixiv_link_collection_dataBase'))){
			const downloadData = JSON.parse((await request(new requestObject('https://dl.dropboxusercontent.com/s/stvehlbre5gir6xtaxgz8/screenName2PixivID.json?rlkey=0vqz5kb333fehmcd1xtftj9b5'))).response);
			scriptDataStore.Show_me_your_Pixiv_dataBase = downloadData;
			await saveToIndexedDB('Show_me_your_Pixiv','pixiv_link_collection_dataBase',downloadData);
		}
		if(localStorage.getItem('Make_Twitter_little_useful'))return;
		const settings = '{"Make_Twitter_little_useful_script_SettingsData":{"Make_Twitter_little_useful":{"featuresToggle":{"webhook_brings_tweets_to_discord":false,"Engagement_Restorer":true,"sneakilyFavorite":false,"Hello_tweet_where_are_you_from":true,"Note_Tweet_expander":true,"Show_me_your_Pixiv":false,"showFollowers":true,"hideAnalytics":false,"shareTweet_Restorer_for_mobile":false,"Show_all_Medias":false,"show_me_big_pics":false},"lang":"ja"},"webhook_brings_tweets_to_discord":{"data":[],"downloadVideo":null,"defaultWebhook":"","displayMethod":"method1","lang":"ja"},"Hello_tweet_where_are_you_from":{},"Show_me_your_Pixiv":{"showMeYourPixivCollectionMethod":1},"Note_Tweet_expander":{},"sneakilyFavorite":{},"Engagement_Restorer":{},"Show_all_Medias":{"displayMethod":null,"removeBlur":false,"onlyRemoveBlur":false}}}';
		const importedData = JSON.parse(settings);
		if(!importedData || !importedData.Make_Twitter_little_useful_script_SettingsData){
			throw new Error("Invalid data format");
		}
		const importedSettings = importedData.Make_Twitter_little_useful_script_SettingsData;
		for(let key in importedSettings){
			localStorage.setItem(key, JSON.stringify(importedSettings[key]));
		}
		storedSettings = {
			'Make_Twitter_little_useful': JSON.parse(localStorage.getItem('Make_Twitter_little_useful') || '{}'),
			'webhook_brings_tweets_to_discord': JSON.parse(localStorage.getItem('webhook_brings_tweets_to_discord') || '{}'),
			'Hello_tweet_where_are_you_from': JSON.parse(localStorage.getItem('Hello_tweet_where_are_you_from') || '{}'),
			'Show_me_your_Pixiv': JSON.parse(localStorage.getItem('Show_me_your_Pixiv') || '{}'),
			'Note_Tweet_expander': JSON.parse(localStorage.getItem('Note_Tweet_expander') || '{}'),
			'sneakilyFavorite': JSON.parse(localStorage.getItem('sneakilyFavorite') || '{}'),
			'Engagement_Restorer': JSON.parse(localStorage.getItem('Engagement_Restorer') || '{}'),
			'Show_all_Medias': JSON.parse(localStorage.getItem('Show_all_Medias') || '{}'),
		}
		openSettings();
	}
	await isFirstTime();
	const reactRoot = document.getElementById("react-root");
	locationChange();
	main();
	//fetchAndProcessTwitterApi("TL");
	if(currentUrl.match(/https?:\/\/[\w]{1,}\.com\/[\w]*\/status\/[0-9]*/))fetchAndProcessTwitterApi("graphQL",extractTweetId(currentUrl));
	window.addEventListener("scroll", update);
	try{
		addEventToScrollSnapSwipeableList();
		addEventToHomeButton();
	}catch{}
})();
