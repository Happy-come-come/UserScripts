// ==UserScript==
// @name			Twitterを少し便利に。
// @name:ja			Twitterを少し便利に。
// @name:en			Make Twitter little useful.
// @namespace		https://greasyfork.org/ja/users/1023652
// @version			1.0.0.14
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
		'info_field': '.css-1dbjc4n.r-1d09ksm.r-1471scf.r-18u37iz.r-1wbh5a2',
		'click_media_field': '.css-1dbjc4n.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-dnmrzs.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010',
		'profile_field_Header_Items': '[data-testid="UserProfileHeader_Items"]',
		'engagementsTextColor': {
			"0": {"count": "rgb(15, 20, 25)","text": "rgb(83, 100, 113)"},
			"1": {"count": "rgb(247, 249, 249)","text": "rgb(139, 152, 165)"},
			"2": {"count": "rgb(231, 233, 234)","text": "rgb(113, 118, 123)"},
		},
	};
	const desktop_selectors = {
		'time_line_media_field': '.css-1dbjc4n.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-11wrixw.r-61z16t.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010',
		'media_field': '.css-1dbjc4n.r-1ssbvtb.r-1s2bzr4',
		'profileField': '.css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv',
		'followersLink': '.css-4rbku5.css-18t94o4.css-901oao.r-vlxjld.r-1loqt21.r-1tl8opc.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0',
	};
	const mobile_selectors = {
		'time_line_media_field': '.css-1dbjc4n.r-1p0dtai.r-1mlwlqe.r-1d2f490.r-1udh08x.r-u8s1d.r-zchlnj.r-ipm5af.r-417010',
		'media_field': '.css-1dbjc4n.r-1s367qj.r-a1ub67',
		'profileField': '.css-1dbjc4n.r-ku1wi2.r-1j3t67a.r-1b3ntt7',
		'followersLink': '.css-4rbku5.css-18t94o4.css-901oao.r-vlxjld.r-1loqt21.r-1tl8opc.r-1b43r93.r-16dba41.r-hjklzo.r-bcqeeo.r-qvutc0',
	};
	const deny_names = ["home", "explore", "notifications", "messages", "i", "settings", "tos", "privacy", "compose", "search"];
	const denyNamesRegex = new RegExp(`https://twitter\\.com/((?!${deny_names.join('|')})[^/]+)`, 'i');
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
	};
	let storedSettings = {
		'Make_Twitter_little_useful': JSON.parse(localStorage.getItem('Make_Twitter_little_useful') || '{}'),
		'webhook_brings_tweets_to_discord': JSON.parse(localStorage.getItem('webhook_brings_tweets_to_discord') || '{}'),
		'Hello_tweet_where_are_you_from': JSON.parse(localStorage.getItem('Hello_tweet_where_are_you_from') || '{}'),
		'Show_me_your_Pixiv': JSON.parse(localStorage.getItem('Show_me_your_Pixiv') || '{}'),
		'Note_Tweet_expander': JSON.parse(localStorage.getItem('Note_Tweet_expander') || '{}'),
		'sneakilyFavorite': JSON.parse(localStorage.getItem('sneakilyFavorite') || '{}'),
		'Engagement_Restorer': JSON.parse(localStorage.getItem('Engagement_Restorer') || '{}'),
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
		},
		"lang": storedSettings.Make_Twitter_little_useful?.featuresToggle?.lang || GetCookie("lang") || "en",
	};
	let scriptDataStore = {
		"Show_me_your_Pixiv": JSON.parse(localStorage.getItem('user_pixvi_link_collection') || "{}"),
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
	};

	let env_Text = Text[script_settings.lang] || Text.ja;

	async function main(refresh = false){
		const selector = refresh ? 'article[data-testid="tweet"]' : 'article[data-testid="tweet"]:not(.checked-tweet)';
		const tweets = Array.from(reactRoot.querySelectorAll(selector)).map(tweet => {
			tweet.classList.add('checked-tweet');
			const link = tweet.querySelector(`[data-testid="User-Name"] a[aria-label], ${env_selector.info_field} a[aria-label]`);
			if(link){
				const match = link.href.match(/twitter\.com\/[^/]+\/status\/(\d+)/);
				if(match){
					return { id: match[1], link: link.href, node: tweet, screenName: (tweet.querySelector('[data-testid="User-Name"]>div>div>a')?.href?.split("/")[3] || undefined) };
				}
			}
		}).filter(Boolean);
		//console.log(tweets)
		const featurestoggle = script_settings.Make_Twitter_little_useful.featuresToggle;
		const isTweetDetail = !!currentUrl.match(/twitter\.com\/[\w]*\/status\/[0-9]*/);
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
		//if(currentUrl.match(/https?:\/\/twitter\.com\/[\w]*\/status\/[0-9]*/))console.log(await waitForTweetData(extractTweetId(currentUrl)))
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
			clonedSvg.style.color = color[GetCookie("night_mode")];
			clonedSvg.addEventListener('click', () => {
				copyToClipboard(tweet.link);
			});
			clonedNode.addEventListener('click', (event) => {
				event.stopPropagation();
			});
			footer.appendChild(clonedNode);
		});
		function copyToClipboard(text){
			navigator.clipboard.writeText(text).then(function(){
				//console.log('クリップボードにコピーしました！');
			}).catch(function(err) {
				console.error('コピーに失敗しました:', err);
			});
		}
	}
	async function showFollowers(){
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
	}
	function hideAnalytics(tweetNodes){
		try{
			tweetNodes.forEach(t=>{
				if(t.id === extractTweetId(currentUrl))return;
				let analytics = t.node.querySelector('div[id][role="group"] a[role="link"]').parentNode || t.node.querySelector('[d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"]').findParent('div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1h0z5md');
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
			// ボタンを作成
			const button = document.createElement('button');
			button.className = "quickDimgButton";
			button.textContent = textData.submit;
			flexContainer.appendChild(button);

			dropdown_select_server.addEventListener('change', () => {
				button.disabled = false;
			});
			dropdown_send_image.addEventListener('change', () => {
				button.disabled = false;
			});
			dropdown_post_quote.addEventListener('change', () => {
				button.disabled = false;
			});
			dropdown_use_graphql.addEventListener('change', () => {
				button.disabled = false;
			});

			// ボタンのクリックイベントを監視
			button.addEventListener('click',async function(){
				// ここでドロップダウンの選択値に基づいて処理を行う
				this.disabled = true;
				const selectedServer = dropdown_select_server.value;
				const selectedNumber = dropdown_send_image.value;
				const send_post_tweet = dropdown_post_quote.value === 'true';
				const useGraphql = dropdown_use_graphql.value === 'true';
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
				const body = await make_send_data(tweet_link,send_page,send_post_tweet,useGraphql);
				await sleep(300)
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
					}
					//console.log(res)
					await sleep(1000)
				}
			});
			fotter.parentNode.appendChild(flexContainer);
		});
		async function make_send_data(tweet_link,select_pages = [1],send_quoted_tweet,use_graphQL){
			const tweet_id = tweet_link.match(/https?:\/\/twitter\.com\/\w+\/status\/(\d+)/)[1];
			let textData = Text[script_settings.webhook_brings_tweets_to_discord.lang].webhook_brings_tweets_to_discord;
			let tweet_data,quoted_data,return_object,apiType;
			try{
				if(use_graphQL){
					apiType = "graphQL";
				}else{
					apiType = "1_1"
				}
				tweet_data = await getTweetData(tweet_id,apiType);
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
					twitter_user_data.pixiv_url = scriptDataStore.Show_me_your_Pixiv[twitter_user_data.screen_name]?.pixiv_url;
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
					if(use_graphQL){
						let note_tweet = tweet_data.note_tweet?.note_tweet_results.result;
						twitter_tweet_data.full_text = note_tweet.text;
						twitter_tweet_data.urls = note_tweet.entity_set.urls;
						twitter_tweet_data.hashtags = get_only_particular_key_value(note_tweet.entity_set,"hashtags",[]);
						twitter_tweet_data.user_mentions = get_only_particular_key_value(note_tweet.entity_set,"user_mentions",[]);
						twitter_tweet_data.symbols = get_only_particular_key_value(note_tweet.entity_set,"symbols",[]);
					}
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
				const hashtag = `hashtag${currentTimeMillis}`
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
				let escapeCharacters = ['|', '*', '_', '`', '~', '[', ']', '(', ')', '>', '#', '-'];
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
			async function downloadVideo(url){
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
	async function sneakilyFavorite(tweetNodes){
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
		if(!currentUrl.match(/https?\:\/\/twitter\.com\/\w*\/status\/[0-9]*($|\?.*)/) || document.getElementById('restoreEngagements') || isFunctionRunning.Engagement_Restorer)return;
		isFunctionRunning.Engagement_Restorer = true;
		try{
			const tweetLink = currentUrl.match(/https?\:\/\/twitter\.com\/\w*\/status\/[0-9].*/)[0];
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
			let envEngagementsTextColor = env_selector.engagementsTextColor[GetCookie("night_mode") || "0"];
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
			if(currentUrl.match(/https?\:\/\/twitter\.com\/\w*\/status\/[0-9]*($|\?.*)/))engagemants_aria.parentNode.prepend(flexContainer);
		}catch(error){
			console.error(error)
		}finally{
			isFunctionRunning.Engagement_Restorer = false;
		}
		async function clickTab(name,target_node){
			target_node.querySelector('[data-testid="caret"]').click();
			document.querySelector('[data-testid="tweetEngagements"]').click();
			const engagemants_aria = (await wait_load_Element('nav[aria-live="polite"]'))[0];
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
			client_text.innerHTML = `<span class="display_twitter_client ${info_selector}" style="">${tweet_data.source.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')}</span>`;
			target_node.appendChild(client_text);
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
				let video_url = document.createElement("a");
				video_url.href = video.url;
				video_url.textContent = `${video.index + 1}:video_url`;
				video_url.className = "css-4rbku5 css-18t94o4 css-901oao css-16my406 r-1cvl2hr r-1loqt21 r-poiln3 r-bcqeeo r-qvutc0";
				video_url.style.color = "rgb(29, 155, 240)";
				video_url.target = "_blank";
				video_url.rel = "noopener";
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
		const link_class = "r-18u37iz css-4rbku5 css-18t94o4 css-901oao css-16my406 r-1cvl2hr r-1loqt21 r-poiln3 r-bcqeeo r-qvutc0";
		tweetNodes.forEach(async function(target){
			const tweet_node = target.node;
			const elements = tweet_node.querySelectorAll('[data-testid="tweetText"]');
			const show_more_link = tweet_node.querySelectorAll('[data-testid="tweet-text-show-more-link"]');
			if(show_more_link[0])show_more_link[0].style.display = "none";
			if(show_more_link[1])show_more_link[1].style.display = "none";
			elements.forEach(async (element,index) =>{
				if(!element.innerText.match(/…$/)){
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
				var new_tweet_text = note_tweet.text;
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
							replacement = `<a class="${link_class}" dir="ltr" role="link" href="https://twitter.com/hashtag/${item.text}" target="_blank" rel="noopener">#${item.text}</a>`;
							break;
						case 'mention':
							replacement = `<a class="${link_class}" dir="ltr" role="link" href="https://twitter.com/${item.text}" target="_blank" rel="noopener">@${item.text}</a>`;
							break;
						case 'symbol':
							replacement = `<a class="${link_class}" dir="ltr" role="link" href="https://twitter.com/search?q=%24${item.text}&src=cashtag_click" target="_blank" rel="noopener">$${item.text}</a>`;
							break;
					}
					transformedText = transformedText.slice(0, start) + replacement + transformedText.slice(end);
				});
				new_tweet_text = transformedText;
				urls.forEach(target =>{
					new_tweet_text = new_tweet_text.replace(new RegExp(`${target.url}(?=(\\s|$|\\u3000|\\W)(?!\\.|,))`, 'gu'), `<a class="${link_class}" dir="ltr" role="link" href="${target.url}" target="_blank" rel="noopener">${target.display_url}</a>`);
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
		if(currentScreenName && !(scriptDataStore?.Show_me_your_Pixiv?.lastGetUserScreenName == currentScreenName)){
			(async()=>{
				try{
					const display_pixiv_link_in_profile_field = await wait_load_Element(`div.display_pixiv_link_in_profile`,100,5,'querySelector');
					display_pixiv_link_in_profile_field.remove();
				}catch{}
			})();
			scriptDataStore.Show_me_your_Pixiv.lastGetUserScreenName = currentScreenName;
			promises.push(addPixivLinksToScriptDataStore([currentScreenName],true));
		}
		promises.push(addPixivLinksToScriptDataStore(uniqueScreenNames));
		await Promise.all(promises);

		todo.forEach(item => {
			const node = item.node;
			const screen_name = item.screenName;
			const pixiv_url = scriptDataStore.Show_me_your_Pixiv[screen_name]?.pixiv_url;
			if(pixiv_url && node && !(node?.querySelector(".display_pixiv_link")))node.appendChild(makeLinkElement(pixiv_url,"Pixiv🔗","display_pixiv_link"));
		});
		if(scriptDataStore.Show_me_your_Pixiv[currentScreenName]?.pixiv_url && !currentUrl.match(new RegExp(`${currentScreenName}/status`))){
			const profile_field = (await wait_load_Element(env_selector.profile_field_Header_Items))[0];
			currentScreenName = extractUserName(currentUrl);
			if(profile_field && !profile_field.querySelector(`.display_pixiv_link_in_profile_${currentScreenName}`) && scriptDataStore.Show_me_your_Pixiv[currentScreenName]?.pixiv_url){
				let display_pixiv_link_in_profile_field = document.createElement("div");
				display_pixiv_link_in_profile_field.className = `display_pixiv_link_in_profile display_pixiv_link_in_profile_${currentScreenName}`;
				let brElement = document.createElement("br");
				display_pixiv_link_in_profile_field.appendChild(brElement);
				display_pixiv_link_in_profile_field.appendChild(makeLinkElement(scriptDataStore.Show_me_your_Pixiv[currentScreenName]?.pixiv_url, "Pixiv🔗", "display_pixiv_link"));
				profile_field.appendChild(display_pixiv_link_in_profile_field)
			}
		}
		localStorage.setItem('user_pixvi_link_collection', JSON.stringify(scriptDataStore.Show_me_your_Pixiv));
		function makeLinkElement(href,text,additionalClass){
			let new_content = document.createElement("a");
			new_content.style.color = "rgb(29, 155, 240)";
			new_content.style.width = "fit-content";
			new_content.href = href;
			new_content.textContent = text;
			new_content.className = `${additionalClass} css-4rbku5 css-18t94o4 css-901oao css-16my406 r-1cvl2hr r-1loqt21 r-poiln3 r-bcqeeo r-qvutc0`;
			new_content.target = "_blank";
			new_content.rel = "noopener";
			return new_content;
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
		const match = url.match(/twitter\.com\/[^/]+\/status\/(\d+)/);
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
	async function sleep(time){
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
			if((((scriptDataStore.Show_me_your_Pixiv[screen_name]?.Create_date || 0) + 604800000) <= new Date().getTime()) || force){
				let userEntitiesData = await getTweetData(screen_name,"user_1_1");
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
							case /^https?:\/\/((skeb\.jp\/\@.*)|(fantia\.jp\/(fanclubs\/[0-9])?.*)|(.*\.booth\.pm)|(.*linktr\.ee)|(.*profcard\.info)|(.*lit\.link)|(potofu\.me)|(.*\.carrd\.co)|(.*\.tumblr\.com$)|(twpf\.jp))\/?/.test(target):
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
				async function when_general(target_url){
					return new Promise(async function(resolve,reject){
						const response_data = await request(new requestObject(target_url.replace(/^https?/,"https")));
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
				async function when_pixiv_sketch(target_url){
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
				async function when_fanbox(fanbox_url){
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
	async function fetchAndProcessTwitterApi(method,id = undefined,forceFetch = false){
		return new Promise(async (resolve, reject) => {
			try{
				switch(method){
					case 'TL':
					case 'forYou':
						await getTL();
						break;
					case 'graphQL':
						if(fetchedTweets[id] && !(forceFetch === true))return resolve(fetchedTweets[id]);
						await graphQL();
						break;
					case 'user':
						await getUser();
						break;
					case 'user_1_1':
						await getUser1_1();
						break;
					case '1_1':
						await get1_1();
						break;
					default:
						console.warn("なにか間違ってないか？")
						return reject("something wrong.");
				}
				return resolve("OK!");
			}catch(error){
				console.error(error);
				throw new Error(`Failed to fetch API data.\nmethod: ${method}\nid: ${id}`);
			}
		});
		async function getTL(){
			let requestObject;
			if(method == 'TL'){
				requestObject = new requestObject_twitter_time_line();
			}else{
				requestObject = new requestObject_twitter_time_line_forYou();
			}
			const response = await request(requestObject);
			if(!response.status === "200")throw new Error(`Failed to fetch`);
			processgraphQL(response.response.data.home.home_timeline_urt.instructions[0].entries);
		}
		async function graphQL(){
			const response = await request(new requestObject_twitter_api_graphql(id));
			if(!response.status === "200")throw new Error(`Failed to fetch`);
			processgraphQL(response.response.data.threaded_conversation_with_injections_v2.instructions[0].entries);
		}
		async function getUser(){
			if(fetchedTweetsUserDataByUserName[id]?.API_type === "graphQL")return;
			const response = await request(new requestObject_twitter_get_user_by_screenname(id));
			if(!response.status === "200")throw new Error(`Failed to fetch`);
			const userData = response.response.data.user.result;
			fetchedTweetsUserData[userData.rest_id] = {...userData,"API_type": "graphQL"};
			fetchedTweetsUserDataByUserName[userData.legacy.screen_name] = fetchedTweetsUserData[userData.rest_id];
		}
		async function getUser1_1(){
			if(fetchedTweetsUserDataByUserName[id])return;
			const response = await request(new requestObject_twitter_get_user_by_screenname_1_1(id));
			if(!response.status === "200")throw new Error(`Failed to fetch`);
			if(response.response.status && !(fetchedTweets[response.response.status?.id_str]?.API_type === "graphQL")){
				fetchedTweets[response.response.status.id_str] = {...response.response.status,"API_type": "1_1"};
				response.response.status = fetchedTweets[response.response.status.id_str];
			}
			fetchedTweetsUserData[response.response.id_str] = {...response.response,"API_type": "1_1"};
			fetchedTweetsUserDataByUserName[response.response.screen_name] = fetchedTweetsUserData[response.response.id_str];
		}
		async function get1_1(){
			const idsToFetch = forceFetch ? id : id.filter(singleId => !(fetchedTweets[singleId]?.API_type === "graphQL"));
			if(idsToFetch.length === 0) return;
			const response = await request(new requestObject_twitter_api_v1_1(idsToFetch.join(",")));
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
		}
		function processgraphQL(entries){
			if(!entries)return null;
			entries.forEach(entry=>{
				let tweetData = entry.content?.itemContent?.tweet_results?.result?.tweet || entry.content?.itemContent?.tweet_results?.result;
				if(!tweetData)return;
				if(tweetData.quoted_status_result){
					let quoted = tweetData.quoted_status_result.result;
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
			});
		}
	}
	async function getTweetData(id, method = '1_1', forceFetch = false){
		const dataStore = method === 'user' || method === 'user_1_1' ? fetchedTweetsUserDataByUserName : fetchedTweets;
		let ids;
		if(typeof id === 'string'){
			if(dataStore[id] && !forceFetch) return dataStore[id];
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
	async function waitForTweetData(id, method = "1_1", retry = 30, span = 100){
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
	function decodeHtml(html) {
		var txt = document.createElement("textarea");
		txt.innerHTML = html;
		return txt.value;
	}
	function encodeBase64(data){
		return btoa(data);
	}
	function decodeBase64(encodedData){
		return atob(encodedData);
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
			let contents = createPage(pageName,pageName,textData.functionName);
			let mainContent = contents.main;
			mainContent.innerHTML = `
			<div class="${pageName}MainContents">
				<span class="item_name">hogehoge</span>
			</div>
			`;
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
			function save(){
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
						let encodedUrl = encodeBase64(url.replace('https://discord.com/api/webhooks/', ''));
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
		function saveAll(){
			for(let key in pages){
				pages[key].saveFunction();
			}
			container.remove();
			document.head.querySelectorAll('style.settingCss').forEach(s=>{
				s.remove();
			});
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
	async function request(object, maxRetries = 0, timeout = 60000){
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
							reject(`[request]time out:\nresponse ${responseDetails}`);
						},
						onerror: function(responseDetails){
							reject(`[request]error:\nresponse ${responseDetails}`);
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
			this.url = `https://twitter.com/i/api/graphql/TuC3CinYecrqAyqccUyFhw/TweetDetail?variables=%7B%22focalTweetId%22%3A%22${ID}%22%2C%22referrer%22%3A%22home%22%2C%22with_rux_injections%22%3Afalse%2C%22includePromotedContent%22%3Atrue%2C%22withCommunity%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withArticleRichContent%22%3Atrue%2C%22withBirdwatchNotes%22%3Atrue%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22rweb_lists_timeline_redesign_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_media_download_video_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withArticleRichContentState%22%3Atrue%7D`;
			this.body = null;
			this.headers = {
				"Content-Type": "application/json",
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
			this.url = `https://api.twitter.com/graphql/rePnxwe9LZ51nQ7Sn_xN_A/UserByScreenName?variables=%7B%22screen_name%22%3A%22${ID}%22%2C%22withSafetyModeUserFields%22%3Afalse%2C%22withSuperFollowsUserFields%22%3Afalse%7D&features=%7B%22responsive_web_twitter_blue_verified_badge_is_enabled%22%3Afalse%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Afalse%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Afalse%7D`;
			this.body = null;
			this.headers = {
				"Content-Type": "application/json",
				'User-agent': userAgent,
				'accept': '*/*',
				'Referer': "https://twitter.com/",
				'Host': 'api.twitter.com',
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
				'Host': 'api.twitter.com',
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
			this.url = `https://twitter.com/i/api/graphql/HnVOsy-Rh_0Cuq06_z9lGA/HomeLatestTimeline`;
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
				'Referer': "https://twitter.com/",
				'Host': 'twitter.com',
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
			this.url = `https://twitter.com/i/api/graphql/-8TWbLqVU1ROq-eeErVc2w/HomeTimeline`;
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
				'Referer': "https://twitter.com/",
				'Host': 'twitter.com',
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
			this.url = 'https://twitter.com/i/api/graphql/lI07N6Otwv1PhnEgXILM7A/FavoriteTweet';
			this.body = `{"variables":{"tweet_id":"${URL.split('/').pop()}"},"queryId":"lI07N6Otwv1PhnEgXILM7A"}`;
			this.headers = {
				'Content-Type': 'application/json',
				'User-agent': userAgent,
				'accept': '*/*',
				'Referer': URL,
				'Accept-Encoding': 'br, gzip, deflate',
				'Origin': 'https://twitter.com',
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
	async function test(){
	}
	const reactRoot = document.getElementById("react-root");
	locationChange();
	main();
	//fetchAndProcessTwitterApi("TL");
	if(currentUrl.match(/https?:\/\/twitter\.com\/[\w]*\/status\/[0-9]*/))fetchAndProcessTwitterApi("graphQL",extractTweetId(currentUrl));
	window.addEventListener("scroll", update);
	try{
		addEventToScrollSnapSwipeableList();
		addEventToHomeButton();
	}catch{}
})();
