// ==UserScript==
// @name			Twitterを少し便利に。
// @name:ja			Twitterを少し便利に。
// @name:en			Make Twitter a Little more Useful.
// @namespace		https://greasyfork.org/ja/users/1023652
// @version			2.7.0.1
// @description			で？みたいな機能の集まりだけど、きっとTwitterを少し便利にしてくれるはず。
// @description:ja			で？みたいな機能の集まりだけど、きっとTwitterを少し便利にしてくれるはず。
// @description:en			It's a collection of features like "So what?", but it will surely make Twitter a little more useful.
// @author			ゆにてぃー
// @match			https://twitter.com/*
// @match			https://mobile.twitter.com/*
// @match			https://x.com/*
// @match			https://X.com/*
// @connect			twitter.com
// @connect			x.com
// @connect			api.twitter.com
// @connect			api.x.com
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
// @connect			profu.link
// @connect			xfolio.jp
// @connect			dl.dropboxusercontent.com
// @connect			raw.githubusercontent.com
// @connect			video-ft.twimg.com
// @require			https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.3/Sortable.min.js
// @icon			data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJkSURBVHgB7VZBbtpQEH3zIW0WVYuXVaH4Bs0NSk4AOUFhEarskhMknIDsqkKlcIT0BNAT1D1B3ZJK3dmVuirwp/MhVmzAxiagKBJv9+ePZ97M/JkxsMMODwzChlD84FWQp3MxeCDHAhiumB+MJrr1+8Ryw3p/9+H4DctfIPCq49Xlw8Kv99YlMuB19885gy/i7llziwGfFFWJyR02XzSCuwiBUse7BlFVaz5LS8KQVkRXaXRJsqImfDjKSZBNyzEyFWFKVJ4KFbWLElUao6KbSk8i9TXgTPaorxTskPwOxa7/9baGt4zg8oQbNyfWYJlRU0/KUx9ZwNwYNq1ecFRzl18QpW0bB0Ks//KjV1uwlbuLJA3GxEdh5wb5yGEPl3qMd2xecYQHKnlFlVLX95kxYCFKGg5IlU2a0uLpCM68LEJA+sJ/Dm6Jy3aMjQIRakRUm+UuvfOp/X34iQSejeFo0Hdx4optG5uFH/R+GHNvANcm3VtwLs+Lvy2TRwhIOnrYHhysIuDKcCDwGbYAjglOzQt+HssElF6dvoNNOZeuCSbfSgIGMjILMo4/ExZf7TqghNLmlwm1gpSC2tmaLAZMvWGz0Iu7XpqBm2NrQNN5cD+Y5ZOTdZyok3RZMusZOJUN+QZrQFb0oQkG6xIIYHe8A03Unx/Ryd6jS2ctAsbxmFRVynGKlM5na5ePVkUe0p+h9MmraS2zXqYgmSWjOPtElHbLTVB3Q79gqQlMScxqXpeav0UWiGMmXKSNOpZAAPvKs/U/1MRoxRxl+5WD+psUy2D5IdmRVoWjnqDnLlkyO+zwaPAf1zXwZL751PUAAAAASUVORK5CYII=
// @grant			GM_xmlhttpRequest
// @grant			GM_registerMenuCommand
// @grant			GM_info
// @grant			GM_addElement
// @grant			unsafeWindow
// @license			MIT
// @run-at			document-idle
// ==/UserScript==

(async function(){
	'use strict';
	if(!getCookie('ct0')){
		console.log('TwitterのCookieが取得できませんでした。');
		console.log('プライベートモードなど、Twitterにログインしていない状態では動作しません。');
		return;
	}


	await loadSettings();

	await loadScriptDataStore();





	const Text = {};

	Text.ja = {
		"makeTwitterLittleUseful": {
			"scriptName": "Twitterを少し便利に。",
			"displaySettingsButtonText": "「Twitterを少し便利に。」の設定",
			"invaildData": "無効なデータです",
			"copied": "クリップボードにコピーしました",
			"close": "閉じる",
			"postApiAction": {
				"favorite": "いいねしました",
				"unfavorite": "いいねを取り消しました",
				"retweet": "リツイートしました",
				"deleteRetweet": "リツイートを取り消しました",
				"bookmark": "ブックマークしました",
				"deleteBookmark": "ブックマークを取り消しました",
			},
			"displayChangelog": {
				"headerTitle": "更新履歴",
				"version": "バージョン",
				"updateDate": "更新日時",
				"newFeaturesListHeader": "新機能",
				"importantNoticeHeader": "重要なお知らせ",
				"neverDisplay": "二度と表示しない",
				"closeButtonText": "閉じる",
				"openSettingsButtonText": "設定を開く",
				"moreInfo": "機能の詳細等は",
				"here": "こちら",
				"selfProtection": "更新時、新しい機能が追加されたときのみ表示しています。"
			},
			"settings": {
				"displayName": "一般設定",
				"functionsToggle": "機能のオン・オフ",
				"language": "Language",
				"uiTextType": "UIのテキストの種類",
				"displayChangelog": "新機能追加時に更新履歴を表示する",
			},
		},
		"webhookBringsTweetsToDiscord": {
			"submit": "送信",
			"webhookNotSet": "Webhookが設定されていません",
			"postSuccessMssage": "送信しました",
			"postSuccess": "完了",
			"postFailedMssage": "送信に失敗しました",
			"postFailed": "失敗",
			"sendOptionsSettings": "送信オプション",
			"targetImagesSettings": "送信する画像の指定",
			"sendQuoteTweet": "引用も？",
			"sendTranslatedText": "翻訳されたテキストで？",
			"sendArticleText": "記事のテキストも？",
			"close": "閉じる",
			"embedTextData": {
				"characterLimitExceeded" : "……以下discordの字数オーバー",
				"variousLinks": "各種リンク",
				"linkToTweet": "ツイートへ",
				"engagement": "エンゲージメント",
				"retweets": "リツイート",
				"likes": "いいね",
				"units": "万",
				"roundingScale": 10000,
				"decimalPlaces": 2,
				"postedDate": "投稿日時",
				"quotedTweet": "↓♻️引用元♻️↓",
				"translatedByGrok": "Grokによる翻訳",
			},
			"settings": {
				"displayName": "WebhookがTweetを連れてくるわ今日も",
				"description": "ツイートをDiscordにWebhookで送信できるようにします",
				"displayMethod": "表示方法",
				"defaultWebhook": "デフォルトのWebhook",
				"displayMethodOptions": {
					"everywhere": "どこでも表示",
					"tweetDetailsOnly": "詳細表示したときだけ"
				},
				"sendLangage": "送信時言語",
				"downloadVideo": "動画をダウンロードしてファイルとして送信する",
				"downloadVideoOptions": {
					"no": "しない",
					"yes": "する"
				},
				"sendDefaultOptions": "送信のデフォルトオプション",
				"sendQuoteTweetDefault": "引用も？",
				"sendTranslatedTextDefault": "翻訳されたテキストで？",
				"sendArticleTextDefault": "記事のテキストも？",
			},
		},
		"noteTweetExpander": {
			"settings": {
				"displayName": "長いツイートをTLで展開",
				"description": "NoteツイートをTLで展開して全文表示します",
			},
		},
		"showMeYourPixiv": {
			"settings": {
				"displayName": "PixivのリンクをTweetに添えて",
				"description": "ツイートの下やプロフィール欄にツイート主のPixivのリンクを表示します",
			},
		},
		"quickShareTweetLink": {
			"settings": {
				"displayName": "ツイートリンクを素早くコピー",
				"description": "ツイートのリンクを即時コピーできるボタンを追加します",
				"copyDomain": "コピーするときに使うドメイン",
				"customDomain": "カスタムドメイン",
			},
		},
		"engagementRestorer": {
			"roundingScale": 10000,
			"decimalPlaces": 2,
			"units": "万",
			"retweet": "リツイート",
			"quoted": "件の引用",
			"like": "いいね",
			"settings": {
				"displayName": "返ってこい！リツイート欄！",
				"description": "ツイートを詳細表示した際にリツイート数、引用数、いいね数を表示します",
			}
		},
		"hideAnalytics": {
			"settings": {
				"displayName": "アナリティクスを非表示にする",
				"description": "ツイートのアナリティクス数を非表示にします",
			}
		},
		"helloTweetWhereAreYouFrom": {
			"settings": {
				"displayName": "あなたのツイートはどこから？",
				"description": "ツイートを投稿したクライアント名を表示します",
				"showVideoUrl": "動画のURLを表示する",
			}
		},
		"showFollowers": {
			"settings": {
				"displayName": "フォロワーを直接表示",
				"description": "「認証済みフォロワー」が最初に表示されるのを防ぎます",
			}
		},
		"sneakilyFavorite": {
			"favorite": "いいね",
			"settings": {
				"displayName": "こっそりいいね",
				"description": "リツイートされたツイートをいいねしても相手に通知が行かないボタンを追加します",
			}
		},
		"showAllMedias": {
			"units": "万",
			"roundingScale": 10000,
			"decimalPlaces": 2,
			"settings": {
				"displayName": "メディア欄に全ての画像を表示",
				"description": "ツイートのメディア欄にそのツイートの全ての画像を表示します",
				"displayMethod": "表示方法",
				"expand": "展開",
				"likeTweet": "ツイートのように",
				"removeBlur": "R-18のモザイクを削除(メディア欄のみ)",
				"onlyRemoveBlur": "モザイクの削除のみ",
			}
		},
		"customizeMenuButton": {
			"shortCutButtonText": "ショートカット",
			"settings": {
				"displayName": "メニューボタンをカスタマイズ",
				"description": "UIのメニューをカスタマイズします",
				"toDisplay": "追加するボタン",
				"shortCutButton": "ショートカットボタン",
				"shortCutButtonDisplayName": "表示する名前",
				"shortCutButtonUri": "URI",
				"sortOrder": "表示順(ドラッグで変更できます)",
				"sortOrderRestoreDefault": "デフォルトに戻す",
			}
		},
		"imageZoom": {
			"settings": {
				"displayName": "画像をズーム",
				"description": "詳細表示した画像をクリックすると拡大表示します",
			}
		},
		"imageSizeFixer": {
			"settings": {
				"displayName": "画像サイズを修正",
				"description": "TLの画像のサイズを修正します",
			}
		},
		"fixChatLinkNavigation": {
			"settings": {
				"displayName": "チャット(DM)のリンクの遷移を修正",
				"description": "チャット(DM)で送られてきたリンクの遷移を修正します",
			}
		},
		"blackToDarkblue": {
			"settings": {
				"displayName": "背景テーマのブラックをダークブルーに",
				"description": "背景テーマのブラックを選択している場合にダークブルーに変更します",
			}
		},
		"hideAuthenticity": {
			"settings": {
				"displayName": "信頼性タグを非表示",
				"description": "ツイート内のユーザーの信頼性タグを(PCF_LABEL_NONEの場合)非表示にします",
			}
		},
		"mediaOpenByPhotoFilter": {
			"settings": {
				"displayName": "デフォルトでメディアを画像表示",
				"description": "メディア欄のリンクをクリックしたときにデフォルトで画像欄を表示するようにします",
			}
		},
		"advance": {
			"settings": {
				"displayName": "高度な設定",
				"exportSettings": "設定をエクスポート",
				"export": "エクスポート",
				"importSettings": "設定をインポート",
				"import": "インポート",
				"invaildSettings": "無効な設定です",
				"invaildJson": "無効なJSONです",
			},
		},
		"forDebug": {
			"settings": {
				"displayName": "デバッグ用",
				"allDataDisplayOnConsole": "全てコンソールに表示されます",
				"showTweetData": "ツイートIDからツイートのデータを表示",
				"showUserDataByScreenName": "スクリーンネームからユーザのデータを表示",
				"showUserByUserID": "ユーザIDからユーザのデータを表示",
				"showScriptSettings": "スクリプトの設定(scriptSettings)を表示",
				"showDataStore": "データストア(scriptDataStore)を表示",
				"showSessionData": "セッションデータ(sessionData)を表示",
				"showTweetsData": "セッションで取得したツイートデータ(tweetsData)一覧を表示",
				"showTweetsUserData": "セッションで取得したユーザデータ(tweetsUserData)のユーザデータ一覧を表示",
				"showTweetsUserDataByUserName": "セッションで取得したユーザデータ(tweetsUserDataByUserName)のユーザデータをスクリーンネームから表示",
				"showTwitterApiClassDebug": "TwitterApiClassのデバッグ情報を表示",
				"show": "表示",
				"import": "インポート",
				"invaildTweetId": "無効なツイートIDです",
				"invalidScreenName": "無効なスクリーンネームです",
				"invalidUserId": "無効なユーザIDです",
				"coutionOpenDataStore": "「makeTwitterLittleUseful.pixivLinkCollection.dataBase」の中身をブラウザで見ようとすると多分ブラウザがフリーズします",
				"importPixivLinkCorrection": "pixivとtwitter idの紐付けをインポート",
			},
		}
	};

	Text.en = {
		"makeTwitterLittleUseful": {
			"scriptName": "Make Twitter Little Useful",
			"displaySettingsButtonText": "Settings for 'Make Twitter Little Useful'",
			"invaildData": "Invalid data",
			"copied": "Copied to clipboard",
			"close": "close",
			"postApiAction": {
				"favorite": "Liked",
				"unfavorite": "Unliked",
				"retweet": "Retweeted",
				"deleteRetweet": "Unretweeted",
				"bookmark": "Bookmarked",
				"deleteBookmark": "Unbookmarked",
			},
			"displayChangelog": {
				"headerTitle": "Changelog",
				"version": "Version",
				"updateDate": "Update Date",
				"newFeaturesListHeader": "New Features",
				"importantNoticeHeader": "Important Notice",
				"neverDisplay": "Never display again",
				"closeButtonText": "Close",
				"openSettingsButtonText": "Open Settings",
				"moreInfo": "For more details about the features,",
				"here": "click here",
				"selfProtection": "Displayed only when new features are added during updates."
			},
			"settings": {
				"displayName": "General Settings",
				"functionsToggle": "Toggle Functions",
				"language": "Language",
				"uiTextType": "UI Text Type",
				"displayChangelog": "Display changelog when new features are added",
			},
		},
		"webhookBringsTweetsToDiscord": {
			"submit": "Submit",
			"webhookNotSet": "Webhook not set",
			"postSuccessMssage": "Posted successfully",
			"postSuccess": "Success",
			"postFailedMssage": "Failed to post",
			"postFailed": "Failed",
			"sendOptionsSettings": "Send Options",
			"targetImagesSettings": "Target Images Settings",
			"sendQuoteTweet": "With quoted tweet?",
			"sendTranslatedText": "With translated text?",
			"sendArticleText": "With article text?",
			"close": "Close",
			"embedTextData": {
				"characterLimitExceeded" : "…exceeds Discord character limit",
				"variousLinks": "Various Links",
				"linkToTweet": "Link to Tweet",
				"engagement": "Engagement",
				"retweets": "Retweets",
				"likes": "Likes",
				"units": "K",
				"roundingScale": 1000,
				"decimalPlaces": 1,
				"postedDate": "Posted Date",
				"quotedTweet": "↓♻️Quoted Tweet♻️↓",
				"translatedByGrok": "Translated by Grok",
			},
			"settings": {
				"displayName": "Webhook Brings Tweets to Discord",
				"description": "Allows you to send tweets to Discord via webhook",
				"displayMethod": "Display Method",
				"defaultWebhook": "Default Webhook",
				"displayMethodOptions": {
					"everywhere": "Display Everywhere",
					"tweetDetailsOnly": "Only in Tweet Details"
				},
				"sendLangage": "Language for Sending",
				"downloadVideo": "Download video and send as file",
				"downloadVideoOptions": {
					"no": "No",
					"yes": "Yes"
				},
				"sendDefaultOptions": "Send Default Options",
				"sendQuoteTweetDefault": "With quoted tweet?",
				"sendTranslatedTextDefault": "With translated text?",
				"sendArticleTextDefault": "With article text?",
			},
		},
		"noteTweetExpander": {
			"settings": {
				"displayName": "Note Tweet Expander",
				"description": "Expands Note Tweets in the timeline to display the full text",
			},
		},
		"showMeYourPixiv": {
			"settings": {
				"displayName": "Show Me Your Pixiv",
				"description": "Displays the Pixiv link of the tweet author under the tweet or in the profile section",
			},
		},
		"quickShareTweetLink": {
			"settings": {
				"displayName": "Quick Copy Tweet Link",
				"description": "Adds a button to instantly copy the tweet link",
				"copyDomain": "Domain to Use for Copying",
				"customDomain": "Custom Domain",
			},
		},
		"engagementRestorer": {
			"roundingScale": 1000,
			"decimalPlaces": 1,
			"units": "K",
			"retweet": "Retweet",
			"quoted": "Quoted",
			"like": "Like",
			"settings": {
				"displayName": "Engagement Restorer",
				"description": "Displays the number of retweets, quotes, and likes when viewing tweet details",
			}
		},
		"hideAnalytics": {
			"settings": {
				"displayName": "Hide Analytics",
				"description": "Hides the tweet analytics count",
			}
		},
		"helloTweetWhereAreYouFrom": {
			"settings": {
				"displayName": "Hello Tweet Where Are You From?",
				"description": "Displays the client name from which the tweet was posted",
				"showVideoUrl": "Show video URL",
			}
		},
		"showFollowers": {
			"settings": {
				"displayName": "Show Followers Directly",
				"description": "Prevents 'Verified Followers' from being displayed first",
			}
		},
		"sneakilyFavorite": {
			"favorite": "Favorite",
			"settings": {
				"displayName": "Sneakily Favorite",
				"description": "Adds a button to like retweeted tweets without notifying the retweeter",
			}
		},
		"showAllMedias": {
			"units": "K",
			"roundingScale": 1000,
			"decimalPlaces": 1,
			"settings": {
				"displayName": "Show All Images in Media Section",
				"description": "Displays all images of the tweet in the media section",
				"displayMethod": "Display Method",
				"expand": "Expand",
				"likeTweet": "Like Tweet",
				"removeBlur": "Remove R-18 Blur (Media Section Only)",
				"onlyRemoveBlur": "Only Remove Blur",
			}
		},
		"customizeMenuButton": {
			"shortCutButtonText": "Shortcut",
			"settings": {
				"displayName": "Customize Menu Button",
				"description": "Customizes the UI menu",
				"toDisplay": "Buttons to display",
				"shortCutButton": "Shortcut Button ",
				"shortCutButtonDisplayName": "Display Name",
				"shortCutButtonUri": "URI",
				"sortOrder": "Display Order (can be changed by drag)",
				"sortOrderRestoreDefault": "Restore Default",
			}
		},
		"imageZoom": {
			"settings": {
				"displayName": "Zoom Images",
				"description": "Enlarges the image when clicked in detail view",
			}
		},
		"imageSizeFixer":{
			"settings": {
				"displayName": "Fix Image Size",
				"description": "Fixes the size of images in the timeline",
			}
		},
		"fixChatLinkNavigation": {
			"settings": {
				"displayName": "Fix Chat(DM) Link Navigation",
				"description": "Fixes the navigation of links sent in chat(DM)",
			}
		},
		"blackToDarkblue": {
			"settings": {
				"displayName": "背景テーマのブラックをダークブルーに",
				"description": "背景テーマのブラックを選択している場合にダークブルーに変更します",
			}
		},
		"hideAuthenticity": {
			"settings": {
				"displayName": "Hide Authenticity Tag",
				"description": "Hides the authenticity tag of users in tweets (when PCF_LABEL_NONE is set)",
			}
		},
		"mediaOpenByPhotoFilter": {
			"settings": {
				"displayName": "Open Media by Default in Photo Filter",
				"description": "When clicking on a link in the media section, it will default to displaying the image section",
			}
		},
		"advance": {
			"settings": {
				"displayName": "Advanced Settings",
				"exportSettings": "Export Settings",
				"export": "Export",
				"importSettings": "Import Settings",
				"import": "Import",
				"invaildSettings": "Invalid Settings",
				"invaildJson": "Invalid JSON",
			},
		},
		"forDebug": {
			"settings": {
				"displayName": "For Debugging",
				"allDataDisplayOnConsole": "All data will be displayed on console",
				"showTweetData": "Show Tweet Data by Tweet ID",
				"showUserDataByScreenName": "Show User Data by Screen Name",
				"showUserByUserID": "Show User Data by User ID",
				"showScriptSettings": "Show Script Settings (scriptSettings)",
				"showDataStore": "Show Data Store (scriptDataStore)",
				"showSessionData": "Show Session Data (sessionData)",
				"showTweetsData": "Show List of Fetched Tweets (tweetsData)",
				"showTweetsUserData": "Show List of Fetched User Data (tweetsUserData)",
				"showTweetsUserDataByUserName": "Show User Data by Screen Name (tweetsUserDataByUserName)",
				"showTwitterApiClassDebug": "Show TwitterApiClass Debug Information",
				"show": "Show",
				"import": "Import",
				"invaildTweetId": "Invalid Tweet ID",
				"invalidScreenName": "Invalid Screen Name",
				"invalidUserId": "Invalid User ID",
				"coutionOpenDataStore": "Opening 'makeTwitterLittleUseful.pixivLinkCollection.dataBase' in the browser may freeze the browser",
				"importPixivLinkCorrection": "Import pixiv and twitter id ties",
			},
		}
	};

	let envText = {};
	_i18n();
	const functions = {
		"webhookBringsTweetsToDiscord": {
			"function": webhookBringsTweetsToDiscord,
			"isRunning": false,
		},
		"noteTweetExpander": {
			"function": noteTweetExpander,
			"isRunning": false,
		},
		"showMeYourPixiv": {
			"function": showMeYourPixiv,
			"isRunning": false,
			"ignoreIsRunning": true
		},
		"quickShareTweetLink": {
			"function": quickShareTweetLink,
			"isRunning": false,
		},
		"engagementRestorer": {
			"function": engagementRestorer,
			"isRunning": false,
		},
		"hideAnalytics": {
			"function": hideAnalytics,
			"isRunning": false,
		},
		"helloTweetWhereAreYouFrom": {
			"function": helloTweetWhereAreYouFrom,
			"isRunning": false,
		},
		"showFollowers": {
			"function": showFollowers,
			"isRunning": false,
		},
		"sneakilyFavorite": {
			"function": sneakilyFavorite,
			"isRunning": false
		},
		"showAllMedias": {
			"function": showAllMedias,
			"isRunning": false,
		},
		"customizeMenuButton": {
			"function": customizeMenuButton,
			"isRunning": false,
			"forPC": true,
		},
		"imageZoom": {
			"function": imageZoom,
			"isRunning": false,
			"forPC": true,
		},
		"imageSizeFixer":{
			"function": imageSizeFixer,
			"isRunning": false,
			"ignoreIsRunning": true,
			"forPC": true,
		},
		"fixChatLinkNavigation": {
			"function": fixChatLinkNavigation,
			"isRunning": false,
			"ignoreIsRunning": true,
		},
		"blackToDarkblue": {
			"function": blackToDarkblue,
			"isRunning": false,
			"ignoreIsRunning": true,
			"immediateRun": true,
		},
		"hideAuthenticity": {
			"function": hideAuthenticity,
			"isRunning": false,
			"ignoreIsRunning": true,
			"immediateRun": true,
		},
		"mediaOpenByPhotoFilter": {
			"function": mediaOpenByPhotoFilter,
			"isRunning": false,
			"ignoreIsRunning": true,
		}
	}



	async function immediateRunFunctions(){
		const featurestoggle = scriptSettings.makeTwitterLittleUseful.featuresToggle;
		Object.keys(functions).forEach(async (key) => {
			const func = functions[key];
			if(featurestoggle[key] && func.immediateRun && (func.forPC ? isPC : true && func.forMobile ? isMobile : true)){
				try{
					func.isRunning = true;
					await func.function([]);
				}catch(error){
					console.error(error);
				}finally{
					func.isRunning = false;
				}
			}
		});
	}

	async function webhookBringsTweetsToDiscord(tweetNodes){
		const textData = envText.webhookBringsTweetsToDiscord;
		const thisScriptSettings = scriptSettings['webhookBringsTweetsToDiscord'] || {};
		const colors = new Colors();
		tweetNodes.forEach(function(tweetNode){
			const element = tweetNode.node;
			if(element.querySelector(".quickDimg"))return;
			const tweetLink = tweetNode.link;
			const fotter = element.querySelector('div[id][role="group"]');
			const flexContainer = document.createElement('div');
			flexContainer.className = 'quickDimg MTLU_container';
			Object.assign(flexContainer.style, {
				'display': 'flex',
			});

			// 1つ目のドロップダウン（サーバー選択）
			const dropdownSelectServer = document.createElement('select');
			dropdownSelectServer.className = "quickDimgPullDown quickDimgPullDown1";
			thisScriptSettings.data.forEach(d=>{
				const option = document.createElement('option');
				option.value = d.value;
				option.textContent = d.name;
				if(d.name === thisScriptSettings.defaultWebhook){
					option.selected = true;
				}
				dropdownSelectServer.appendChild(option);
			});
			flexContainer.appendChild(dropdownSelectServer);
			dropdownSelectServer.addEventListener('click', (event) => {
				event.stopPropagation();
			});

			const settingsButton = h("button", {
					className: "quickDimgSettingsButton",
					style: {
						width: "3em",
						justifyContent: 'center',
						alignItems: 'center',
					},
					onclick: (event) => {
						event.stopPropagation();
						displaySettingsOverlay();
					},
				}, 
				h("span", {
					textContent: "⚙️",
				})
			);
			flexContainer.appendChild(settingsButton);
			const sendoptions = {
				"targetImages": {
					"1": true,
					"2": true,
					"3": true,
					"4": true,
				},
				"sendQuoteTweet": thisScriptSettings.sendQuoteTweetDefault || false,
				"sendTranslatedText": thisScriptSettings.sendTranslatedTextDefault || true,
				"sendArticleText": thisScriptSettings.sendArticleTextDefault || false,
			};
			const displaySettingsOverlay = () => {
				const overlay = h("div", {
						className: "quickDimgSettingsOverlay MTLU_container",
						style: {
							position: 'fixed',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							backgroundColor: 'rgba(0, 0, 0, 0.3)',
							zIndex: 10000,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							backdropFilter: 'blur(5px)',
							'-webkit-backdrop-filter': 'blur(5px)',
							color: colors.get('fontColor'),
						},
						onclick: (e) => {
							if(e.target === overlay){
								e.stopPropagation();
								e.preventDefault();
								document.body.removeChild(overlay);
							}
						}
					},
					h("div", {
							style: {
								backgroundColor: colors.get('backgroundColor'),
								border: `1px solid ${colors.get('borderColor')}`,
								borderRadius: '8px',
								padding: '20px',
								maxWidth: isMobile ? '90%' : '600px',
								minWidth: '300px',
								maxHeight: '80%',
								overflowY: 'auto',
								display: 'flex',
								flexDirection: 'column',
								height: 'fit-content',
							},
						},
						h("span", {
								className: "quickDimgSettingsTitle",
								style: {
									fontSize: '1.5em',
									marginBottom: '1em',
								},
								textContent: textData.sendOptionsSettings,
							}
						),
						h("div", {
								className: "quickDimgSettingsContent",

							},
							h("div", {
									textContent: textData.targetImagesSettings,
							}),
							h("div", {
									className: "quickDimgtargetImagesSettings",
									style: {
										display: 'grid',
										gridTemplateColumns: 'repeat(2, 1fr)',
										gap: '10px',
									},
								},
								[1,2,3,4].map(num => {
										const label = h("label", {
												textContent: `${num}: `,
											}
										);
										const checkbox = h("input", {
												type: "checkbox",
												checked: sendoptions.targetImages[num],
												onchange: (event) => {
													sendoptions.targetImages[num] = event.target.checked;
													reEnableButton();
												}
											}
										);
										const wrapper = h("div", {},
											label,
											checkbox
										);
										return wrapper;
									}
								)
							),
							h("div", {
									className: "quickDimgSettingsSendQuoteTweet",
									style: {
										marginTop: '1.5em',
									},
								},
								h("label", {
										textContent: `${textData.sendQuoteTweet}: `,
									}
								),
								h("input", {
										type: "checkbox",
										checked: sendoptions.sendQuoteTweet,
										onchange: (event) => {
											sendoptions.sendQuoteTweet = event.target.checked;
											reEnableButton();
										}
								})
							),
							h("div", {
									className: "quickDimgSettingsSendTranslatedText",
									style: {
										marginTop: '1.5em',
									},
								},
								h("label", {
										textContent: `${textData.sendTranslatedText}: `,
									}
								),
								h("input", {
										type: "checkbox",
										checked: sendoptions.sendTranslatedText,
										onchange: (event) => {
											sendoptions.sendTranslatedText = event.target.checked;
											reEnableButton();
										}
								})
							),
							/*
							h("div", {
									className: "quickDimgSettingsSendArticleText",
									style: {
										marginTop: '1.5em',
									},
								},
								h("label", {
										textContent: `${textData.sendArticleText}: `,
									}
								),
								h("input", {
										type: "checkbox",
										checked: sendoptions.sendArticleText,
										onchange: (event) => {
											sendoptions.sendArticleText = event.target.checked;
											reEnableButton();
										}
								})
							),
							*/
						),
						h("div", {
								className: "quickDimgSettingsfooter",
								style: {
									display: 'flex',
									justifyContent: 'flex-end',
									marginTop: '1em',
									gap: '10px',
									flexWrap: 'wrap',
								}
							},
							h("button", {
									className: "quickDimgSettingsCloseButton",
									style: {

									},
									textContent: textData.close,
									onclick: (e) => {
										e.stopPropagation();
										e.preventDefault();
										document.body.removeChild(overlay);
									}
								}
							)
						),
					)
				);
				document.body.appendChild(overlay);
			};

			// ボタンを作成
			const button = document.createElement('button');
			button.className = "quickDimgButton";
			button.textContent = textData.submit;
			flexContainer.appendChild(button);

			function reEnableButton(){
				button.disabled = false;
				button.textContent = textData.submit;
			}
			dropdownSelectServer.addEventListener('change', reEnableButton);
			//dropdown_use_graphql.addEventListener('change', reEnableButton);

			// ボタンのクリックイベントを監視
			button.addEventListener('click',async function(){
				// ここでドロップダウンの選択値に基づいて処理を行う
				this.disabled = true;
				const selectedServer = dropdownSelectServer.value;
				if(!selectedServer){
					customAlert(textData.webhookNotSet);
					return;
				}
				const sendPage = Object.keys(sendoptions.targetImages).filter(key => sendoptions.targetImages[key]).map(num => parseInt(num)-1);
				const bodys = await makeSendData(tweetLink, sendPage, sendoptions.sendQuoteTweet, sendoptions.sendTranslatedText, sendoptions.sendArticleText);
				await sleep(300);
				const bodysLength = bodys.length;
				for(let i=0; i < bodysLength; i++){
					const formData = new FormData();
					const payload = {};
					const tmp = bodys[i];
					if(tmp.embeds){
						payload.embeds = tmp.embeds;
					}
					if(tmp.content){
						payload.content = tmp.content;
					}
					formData.append('payload_json', JSON.stringify(payload));
					//debug(formData)
					if(tmp.files){
						tmp.files.forEach((file, index) => {
							formData.append(`file${index}`, file.attachment, file.name);
						});
					}
					try{
						const res = await request({url: `https://discord.com/api/webhooks/${atob(selectedServer)}`, dontUseGenericHeaders: true, method: 'POST', body: formData, anonymous: true, onlyResponse: false});
						if(res.statusText == "Bad Request"){
							console.log({user: twitterApi.tweetsUserDataByUserName, tweets: twitterApi.tweetsData});
							customAlert(`${textData.postFailedMssage}`,payload.embeds[0].url);
						}
					}catch(error){
						customAlert(`${textData.postFailedMssage}`,payload.embeds[0].url);
						console.log({user: twitterApi.tweetsUserDataByUserName, tweets: twitterApi.tweetsData});
						console.log(error);
						throw(error);
					}
					//debug(res)
					if((i+1) !== bodysLength)await sleep(1000);
				}
				button.textContent = textData.postSuccess;
			});
			fotter.parentNode.appendChild(flexContainer);
		});
		return "done";
		async function makeSendData(tweetLink, sendPages, sendQuoteTweet, sendTranslatedText, sendArticleText){
			const timeZoneObject = Intl.DateTimeFormat().resolvedOptions();
			const tweetId = tweetLink.match(/https?:\/\/[\w]{1,}\.com\/\w+\/status\/(\d+)/)[1];
			const embedTextData = Text[thisScriptSettings.sendLangage || scriptSettings?.makeTwitterLittleUseful?.language || getCookie('lang')].webhookBringsTweetsToDiscord.embedTextData;
			let tweetApiData = await twitterApi.getTweet(tweetId);
			const sendData = await makeEmbeds();
			if(sendQuoteTweet){
				const quoted_data = tweetApiData.quoted_status_result?.result || tweetApiData.quoted_status;
				if(quoted_data){
					tweetApiData = quoted_data;
					sendData.push({content: embedTextData.quotedTweet});
					sendData.push(...(await makeEmbeds()));
				}
			}
			return sendData;
			async function makeEmbeds(){
				const bundle = [];
				const embeds = [];
				// 実際には6200くらいまでいけると思う
				const maxDescriptionLength = 5800;
				const mainEmbed = new DiscordEmbedMaker();
				const tweetUserData = tweetApiData.core?.user_results?.result || tweetApiData.user?.result || tweetApiData.user;
				const tweetUserId = tweetUserData.rest_id || tweetUserData.id_str;
				const screenName = tweetUserData.core?.screen_name || tweetUserData.legacy?.screen_name || tweetUserData.screen_name;
				await addPixivLinksToScriptDataStore([screenName], true);
				const pixivUrl = getPixivUrlWithScreenName(screenName);
				const tweetData = tweetApiData.legacy || tweetApiData;
				const tweetUrl = `https://twitter.com/${screenName}/status/${tweetData.id_str}`;
				const noteTweet = tweetApiData.note_tweet?.note_tweet_results.result;
				const translatedData = tweetApiData.grok_translated_post_with_availability?.data;
				const useTranslatedData = sendTranslatedText && tweetApiData.grok_translated_post_with_availability?.is_available;
				console.log({tweetApiData: tweetApiData, noteTweet: noteTweet, translatedData: translatedData});
				const tweetDataEntities = useTranslatedData ? translatedData.entities : (noteTweet ? noteTweet.entity_set : tweetData.entities);
				let tweetBodyText = useTranslatedData ? translatedData.translation : (noteTweet ? noteTweet.text : tweetData.full_text);
				const tweetCardData = processTweetCardBindingValues(tweetApiData.card?.legacy || tweetApiData.card);
				let profileImage = (tweetUserData.avatar.image_url || tweetUserData.legacy?.profile_image_url_https || tweetUserData.profile_image_url_https).replace(/(_normal|_x96)\./,'.');
				profileImage = {url: profileImage, name: `profile_image.${((new URL(profileImage)).searchParams.get('format') || 'jpg')}`};
				const mediaUrls = makeMediaList(tweetData.extended_entities, sendPages);
				const files = {};
				if(tweetCardData){
					try{
						let findFlag = 0;
						const photoImage = tweetCardData.photo_image_full_size_original;
						if(photoImage){
							const urlObj = new URL(photoImage.image_value.url);
							if(urlObj.searchParams.get('name'))urlObj.searchParams.set("name", "orig");
							mediaUrls.images.push({mediaType: "photo", url: urlObj.href});
							findFlag++;
						}

						const broadcastThumbnail = tweetCardData.broadcast_pre_live_slate || tweetCardData.thumbnail_image_original;
						if(broadcastThumbnail && findFlag === 0){
							mediaUrls.images.push({mediaType: "photo", url: broadcastThumbnail.image_value.url});
							findFlag++;
						}

						const unifiedCardMedia = tweetCardData.unified_card;
						if(unifiedCardMedia && findFlag === 0){
							const json = JSON.parse(unifiedCardMedia.string_value).media_entities;
							const tmp = makeMediaList({media: Object.values(json)}, [0,1,2,3]);
							if(tmp.images){
								mediaUrls.images.push(...tmp.images);
							}
							if(tmp.videos){
								mediaUrls.videos.push(...tmp.videos);
							}
						}

						const coverPlayerStream = tweetCardData.cover_player_stream_url;
						if(coverPlayerStream){
							const vmapUrl = coverPlayerStream.string_value;
							const vmap = await request({url: vmapUrl, respType: "text", onlyResponse: true});
							const videoUrl = getHighestBitrateMp4UrlFromVmap(vmap);
							if(videoUrl){
								mediaUrls.videos.push({mediaType: "video", url: videoUrl});
							}
						}

						const playerUrl = tweetCardData.player_url;
						if(playerUrl){
							const vmapUrl = playerUrl.string_value;
							const vmap = await request({url: vmapUrl, respType: "text", onlyResponse: true});
							const videoUrl = getHighestBitrateMp4UrlFromVmap(vmap);
							if(videoUrl){
								mediaUrls.videos.push({mediaType: "video", url: videoUrl});
							}
						}
					}catch(error){
						console.error({error: error, tweetCardData: tweetCardData});
					}
				}

				// 文字列を一旦そのまま配列化(Unicodeコードポイント単位で)
				let tweetBodyArray = Array.from(tweetBodyText);

				// 長さ制限のチェック
				if(tweetBodyArray.length > maxDescriptionLength){
					tweetBodyArray = tweetBodyArray.slice(0, maxDescriptionLength);
					tweetBodyText = tweetBodyArray.join('') + embedTextData.characterLimitExceeded;
					tweetBodyArray = Array.from(tweetBodyText);
				}

				// ハッシュタグ、メンション、シンボルを統合
				let combined = [].concat(
					(tweetDataEntities.hashtags || []).map(tag => ({
						type: 'hashtag',
						indices: tag.indices,
						text: tag.text
					})),
					(tweetDataEntities.user_mentions || []).map(mention => ({
						type: 'mention',
						indices: mention.indices,
						text: mention.screen_name
					})),
					(tweetDataEntities.symbols || []).map(symbol => ({
						type: 'symbol',
						indices: symbol.indices,
						text: symbol.text
					}))
				);

				// maxDescriptionLength以内のものだけフィルタ
				combined = combined.filter(item => item.indices[0] < maxDescriptionLength);

				// indicesの降順でソート(後ろから置換するため)
				combined.sort((a, b) => b.indices[0] - a.indices[0]);

				// 各エンティティを置換
				combined.forEach(item => {
					const [start, end] = item.indices;
					let linkText, linkUrl;

					switch(item.type){
						case 'hashtag':
							linkText = `#${item.text}`;
							linkUrl = `https://twitter.com/hashtag/${item.text}`;
							break;
						case 'mention':
							linkText = `@${item.text}`;
							linkUrl = `https://twitter.com/${item.text}`;
							break;
						case 'symbol':
							linkText = `$${item.text}`;
							linkUrl = `https://twitter.com/search?q=%24${item.text}&src=cashtag_click`;
							break;
					}

					// Markdownリンク形式を作成
					const replacement = `[${linkText}](${linkUrl})`;

					// 配列の該当範囲を置換
					tweetBodyArray.splice(start, end - start, replacement);
				});

				// 配列を文字列に結合
				tweetBodyText = tweetBodyArray.join('');

				// マークダウンで使用される特殊文字をエスケープ
				// ただし、[]()内(リンクのマークダウン記法内)はエスケープしない
				const escapeCharacters = ['\\', '|', '*', '~', '>', '#', '-'];
				escapeCharacters.forEach(char => {
					// リンク外の文字だけエスケープ
					// []()の外側のみマッチする正規表現を使用
					const regex = new RegExp(`(?<!\\[.*?)\\${char}(?!.*?\\]\\(.*?\\))(?!\\(.*?\\))`, 'g');
					tweetBodyText = tweetBodyText.replace(regex, '\\' + char);
				});

				// アンダーバーとバッククォートは特別処理
				// リンクテキスト内([と]の間)とURL内((と)の間)以外をエスケープ
				tweetBodyText = tweetBodyText.replace(/_/g, (match, offset) => {
					// この位置がリンク内かチェック
					const beforeText = tweetBodyText.substring(0, offset);
					const afterText = tweetBodyText.substring(offset);

					// [...](...) のパターンをチェック
					const inLinkText = /\[[^\]]*$/.test(beforeText) && /^[^\[]*\]/.test(afterText);
					const inLinkUrl = /\([^\)]*$/.test(beforeText) && /^[^\(]*\)/.test(afterText);

					return (inLinkText || inLinkUrl) ? match : '\\' + match;
				});

				tweetBodyText = tweetBodyText.replace(/`/g, (match, offset) => {
					const beforeText = tweetBodyText.substring(0, offset);
					const afterText = tweetBodyText.substring(offset);

					const inLinkText = /\[[^\]]*$/.test(beforeText) && /^[^\[]*\]/.test(afterText);
					const inLinkUrl = /\([^\)]*$/.test(beforeText) && /^[^\(]*\)/.test(afterText);

					return (inLinkText || inLinkUrl) ? match : '\\' + match;
				});

				const sendText = replaceTcoToOriginalUrl(tweetBodyText, tweetDataEntities.urls, mediaUrls);
				mainEmbed.setTitle('Tweet')
					.setURL(tweetUrl)
					.setColor(1940464)
					.setAuthor({
						name: `${tweetUserData.core?.name || tweetUserData.legacy?.name || tweetUserData.name} (@${screenName})`,
						url: `https://twitter.com/${screenName}`,
						icon_url: `attachment://${profileImage.name}`
					})
					.setThumbnail("https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg")
					.addFields({
						name: `${embedTextData.variousLinks}:link:`,
						value: `[${embedTextData.linkToTweet}](${tweetUrl})\n[TwitterID: ${tweetUserId}](https://twitter.com/intent/user?user_id=${tweetUserId})${pixivUrl ? `\n[Pixiv](${pixivUrl})` : ""}`
					})
					.addFields({
						name: embedTextData.engagement,
						value: `${embedTextData.retweets} ${roundHalfUp(tweetData.retweet_count,embedTextData.roundingScale,embedTextData.decimalPlaces,embedTextData.units)}:recycle:	${embedTextData.likes} ${roundHalfUp(tweetData.favorite_count,embedTextData.roundingScale,embedTextData.decimalPlaces,embedTextData.units)}:heart:`
					})
					.addFields({
						name: embedTextData.postedDate,
						value: new Date(tweetData.created_at).toLocaleString(getLocale(thisScriptSettings.sendLangage), { timeZone: timeZoneObject.timeZone })
					});
				if(sendText)mainEmbed.setDescription(sendText);
				if(mediaUrls.images[0]?.url){
					mainEmbed.setImage(`attachment://${attachmentFileName(mediaUrls.images[0].url)}`);
				}
				if(useTranslatedData){
					mainEmbed.setFooter({
						text: embedTextData.translatedByGrok,
						icon_url: "https://grok.com/images/apple-touch-icon.png",
					});
				}
				embeds.push(mainEmbed);
				if(mediaUrls.images[1]?.url){
					for(let i=1;i<mediaUrls.images.length;i++){
						const imageEmbed = new DiscordEmbedMaker()
							.setURL(tweetUrl)
							.setImage(`attachment://${attachmentFileName(mediaUrls.images[i].url)}`);
						embeds.push(imageEmbed);
					}
				}
				bundle.push({"embeds": embeds, "files": await fetchImages(mediaUrls.images.concat([{...profileImage, isProfileImage: true}]))});
				if(mediaUrls.videos?.length >= 1 && thisScriptSettings.downloadVideo === "yes"){
					const promises = mediaUrls.videos.map(video => downloadVideo(video.url));
					await Promise.all(promises)
						.then(results => {
							results.forEach(obj => {
								bundle.push(obj);
							});
						})
						.catch(error => {
							console.error("Error downloading videos:", error);
						});
				}else if(mediaUrls.videos?.length >= 1){
					mediaUrls.videos.forEach(video => {
						bundle.push({"content": video.url});
					});
				}
				return bundle;
			}
			async function fetchImages(mediaUrlArray){
				if(mediaUrlArray?.length == 0) return;
				const downloadPromises = mediaUrlArray.map(fetchImage);
				return removeNullFromArray(await Promise.all(downloadPromises));
				async function fetchImage(target){
					let retryCount = 5; // リトライ回数を設定
					while(retryCount > 0){
						if(!target.url)return;
						let image,name;
						if(target.isProfileImage){
							image = await request({url: target.url, respType: "blob", maxRetries: 3});
							name = target.name;
						}else if(target.url.match(/https?:\/\/pbs\.twimg\.com\/(media|card_img)\//)){
							image = await request({url: imageUrlToOriginal(target.url), respType: "blob", maxRetries: 3});
							name = attachmentFileName(target.url);
						}else{
							console.error({error: "知らない画像pathだ……", url: target.url});
						}

						// ダウンロードした画像データのサイズを確認
						if(image.size > 1025){
							return {
								"attachment": image,
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
			function attachmentFileName(urlStr){
				const url = new URL(urlStr);
				const pathname = url.pathname;
				const lastSegment = pathname.split('/').pop();
				const baseName = lastSegment.split('?')?.[0];
				const extMatch = baseName.match(/\.(jpg|jpeg|png|gif|webp|bmp)$/i);
				let ext = extMatch ? extMatch?.[0] : '';

				if(!ext){
					const format = url.searchParams.get('format');
					if(format){
						ext = '.' + format;
					}else{
						ext = '.jpg';
					}
				}
				const filename = baseName.replace(/\.(jpg|jpeg|png|gif|webp|bmp)$/i, '');
				return `${filename}${ext}`;
			}
			function imageUrlToOriginal(imageUrl){
				//apiから帰ってくるURLをそのまま開くと小さい画像になってしまうので最大サイズの画像をダウンロードできるようにする。
				if(typeof imageUrl !== "undefined"){
					const extension = imageUrl.match(/\.([a-zA-Z0-9]+)(\?.*)?$/)?.[1];
					if(extension == "jpg" || extension == "png" || extension == "webp"){
						return `${imageUrl.replace(`.${extension}`,"")}?format=${extension}&name=orig`;
					}else{
						return imageUrl;
					}
				}
			}
			function downloadVideo(url){
				return new Promise(async (resolve) => {
					//上限は「24117249」だったけどユーザーのアップロード上限が10MBになっちゃったので「10485760」にするかもしれない
					// 2025/02/13 上限が 「10485760」 になりました。
					const fileSize = await getFileSize(url);
					if(fileSize < 10485760){
						return resolve({"files": [{attachment: await request({url: url, respType: "blob", maxRetries: 1}), name: url.split('/').pop()}]});
					}else{
						if(!fileSize){
							const file = await request({url: url, respType: "blob", maxRetries: 1, headers: {"Range": "bytes=0-10485760"}});
							if(file.size < 10485760)return resolve({"files": [{attachment: file, name: url.split('/').pop()}]});
						}
						return resolve({"content": url});
					}
				});
			}
			function replaceTcoToOriginalUrl(fullText, urls, media_urls){
				//ツイート内のt.coで短縮されたリンクをもとにのリンクにもどす。
				try{
					if(typeof fullText !== "undefined"){
						fullText = decodeHtml(fullText);
						if(typeof urls !== "undefined"){
							for(let i=0;i<=urls.length-1;i++){
								if(urls[i].expanded_url.length > 200){
									fullText = fullText.replace(urls[i].url, `[${decodeURI(urls[i].expanded_url).slice(0,100)}](${decodeURI(urls[i].expanded_url)})...`);
								}else{
									fullText = fullText.replace(urls[i].url, decodeURI(urls[i].expanded_url));
								}
							}
						}
						//メディアがくっついてるツイートは末尾にメディアのURLが付随しているためそれを消す。
						if(typeof media_urls !== "undefined"){
							(media_urls.images || []).concat(media_urls.videos || []).forEach(u=>{
								if(u.tco_url){
									fullText = fullText.replace(u.tco_url, "");
								}
							});
						}
					}
				}catch{}
				return fullText;
			}
			function makeMediaList(extendedEntities){
				const result = {images: [], videos: []};
				if(extendedEntities){
					for(let target in sendPages){
						try{
							if(extendedEntities.media.length > sendPages[target]){
								const mediaItem = extendedEntities.media[sendPages[target]];
								const tmpObject = {mediaType: mediaItem.type, tco_url: mediaItem.url};
								if(tmpObject.mediaType == "animated_gif" || tmpObject.mediaType == "video"){
									tmpObject.url = mediaItem.video_info.variants.filter(function(obj){return obj.content_type == "video/mp4";}).reduce((a, b) => a.bitrate > b.bitrate ? a : b).url.split('?')[0];
									result.videos.push(tmpObject);
								}else if(tmpObject.mediaType == "photo"){
									tmpObject.url = mediaItem.media_url_https;
									result.images.push(tmpObject);
								}
							}
						}catch(error){
							console.error("メディアリストの作成に失敗しました。:\n" + error);
						}
					}
				}
				return result;
			}
		}
	}

	async function noteTweetExpander(tweetNodes){
		tweetNodes.forEach(function(target){
			const tweetNode = target.node;
			const tweetTextsElement = Array.from(tweetNode.querySelectorAll('[data-testid="tweetText"]'));
			tweetTextsElement.forEach(async (tweetTextElement, index) => {
				const showMoreLink = tweetTextElement.parentNode.querySelector('[data-testid="tweet-text-show-more-link"]');
				if(showMoreLink)showMoreLink.style.display = "none";
				if(!showMoreLink?.tagName.toLowerCase().match(/div|button/)){
					tweetTextElement.classList.add('tweetExpanderChecked');
					tweetTextElement.style.webkitLineClamp = null;
					return;
				}
				if(!tweetTextElement.closest('div[aria-labelledby]'))showMoreLink.click();
			});
		});
		return "done";
	}

	async function engagementRestorer(){
		if(!currentUrl.match(/https?\:\/\/[\w]{1,}\.com\/\w*\/status\/[0-9]*($|\?.*)/) || document.getElementById('restoreEngagements'))return;
		try{
			const tweetLink = currentUrl.match(/https?\:\/\/[\w]{1,}\.com\/\w*\/status\/[0-9].*/)[0];
			const tweetId = tweetLink.match(/\/status\/(\d+)/)[1];
			const response = (await twitterApi.getTweet(tweetId)).legacy;
			const engagemants = {"favorite_count": response.favorite_count, "quote_count": response.quote_count, "retweet_count": response.retweet_count};
			const targetNode = Array.from((await waitElementAndGet({query: 'article[data-testid="tweet"]', searchFunction: "querySelectorAll"}))).find(node => {
				const timeParents = Array.from(node.querySelectorAll('time')).map(time => time.parentNode);
				return timeParents.some(parent => parent.href && parent.href.match(tweetId));
			});
			if(!targetNode)return;
			const engagemantsAria = targetNode.querySelector('[role="group"]');
			//const engagemantsAria = await waitElementAndGet({query: '[role="group"]', searchFunction: "querySelector", searchPlace: targetNode});
			if(!engagemantsAria)return;
			const textData = envText.engagementRestorer;
			const colors = new Colors();
			const flexContainer = document.createElement('div');
			flexContainer.style.display = 'flex';
			flexContainer.style.justifyContent = 'space-between';
			flexContainer.style.width = '70%';
			flexContainer.id = 'restoreEngagements';
			const pathTmp = tweetLink.match(/\/[\w]+\/status\/[\d]+/)[0];
			const links = [
				{
					"name": "retweets",
					"href": pathTmp + "/retweets",
					"count": roundHalfUp(engagemants.retweet_count, textData.roundingScale, textData.decimalPlaces, textData.units),
					"text": textData.retweet,
				},
				{
					"name": "quotes",
					"href": pathTmp + "/quotes",
					"count": roundHalfUp(engagemants.quote_count, textData.roundingScale, textData.decimalPlaces, textData.units),
					"text": textData.quoted,
				},
				{
					"name": "likes",
					"href": pathTmp + "/likes",
					"count": roundHalfUp(engagemants.favorite_count, textData.roundingScale, textData.decimalPlaces, textData.units),
					"text": textData.like,
				},
			];
			links.forEach((a) => {
				const newLink = document.createElement('a');
				newLink.style.textDecoration = 'none';
				newLink.href = a.href;
				const countText = document.createElement('span');
				countText.textContent = a.count;
				countText.style.color = colors.get("fontColor");
				newLink.appendChild(countText);

				const textPart = document.createElement('span');
				textPart.textContent = " " + a.text;
				textPart.style.color = colors.get("fontColorDark");
				newLink.appendChild(textPart);

				newLink.addEventListener('click', (e) => {
					e.preventDefault();
					if(a.name !== "likes")navigateTo(a.href);
					//clickTab(a.name, targetNode);
				});
				flexContainer.appendChild(newLink);
			});
			if(currentUrl.match(/https?\:\/\/[\w]{1,}\.com\/\w*\/status\/[0-9]*($|\?.*)/))engagemantsAria.parentNode.prepend(flexContainer);
		}catch(error){
			console.error(error);
		}
		return "done";
		async function clickTab(name, targetNode){
			targetNode.querySelector('[data-testid="caret"]').click();
			(await waitElementAndGet({query: '[data-testid="tweetEngagements"]', searchFunction: "querySelector"})).click();
			const engagemantsAria = (await waitElementAndGet({query: 'nav[aria-live="polite"]', searchFunction: "querySelector"}));
			const regex = new RegExp(name + '$');
			engagemantsAria.querySelectorAll('[role="presentation"] a').forEach((e)=>{
				if(e.href.match(regex)) e.click();
			});
		}
	}

	async function showMeYourPixiv(tweetNodes){
		tweetNodes.forEach(async tweet => {
			const node = await waitElementAndGet({query: `${envSelector.mediaField},[tnb-id="mediaContainer"]:not(.display_pixiv_link):not(.display_pixiv_link_checked)`, retry: 5, interval: 200, searchPlace: tweet.node});
			const screenName = tweet.screenName;
			if(node){
				const pixivUrl = getPixivUrlWithScreenName(screenName);
				node.classList.add('display_pixiv_link_checked');
				if(pixivUrl && !(pixivUrl?.match(/(?:users\/|member.php\?id=)(11|9949830|15241365)(\/|$)/)) && node && !(node?.querySelector(".display_pixiv_link"))){
					node.appendChild(createLinkElement(pixivUrl, "Pixiv🔗", "display_pixiv_link"));
				}
			}
		});
		const currentPageScreenName = extractUserName(currentUrl);
		if(currentPageScreenName){
			if(currentUrl.match(new RegExp(`${currentPageScreenName}/(status|following|followers|verified_followers|bio)`)))return;
			const existingProfileLink = await waitElementAndGet({query: `div.pixiv_link_in_profile:not(.pixiv_link_in_profile_${currentPageScreenName})`, searchFunction: 'querySelector', interval: 100, retry: 5});
			if(existingProfileLink)existingProfileLink.remove();
			const profileField = await waitElementAndGet({query: envSelector.profileFieldHeaderItems});
			if(!sessionData.showMeYourPixiv?.fetchedUser?.has(currentPageScreenName)){
				if(!sessionData.showMeYourPixiv)sessionData.showMeYourPixiv = {};
				if(!sessionData.showMeYourPixiv.fetchedUser)sessionData.showMeYourPixiv.fetchedUser = new Set();
				sessionData.showMeYourPixiv.fetchedUser.add(currentPageScreenName);
				await addPixivLinksToScriptDataStore([currentPageScreenName], true);
			}
			const pixivUrl = getPixivUrlWithScreenName(currentPageScreenName);
			if(profileField && pixivUrl && !(pixivUrl?.match(/(?:users\/|member.php\?id=)(11|9949830|15241365)(\/|$)/))){
				const profile = document.querySelector('[data-testid="UserProfileHeader_Items"]');
				if(profile && !(profile.querySelector(".display_pixiv_link"))){
					const pixivLinkInProfileContainer = document.createElement('div');
					pixivLinkInProfileContainer.className = `pixiv_link_in_profile pixiv_link_in_profile_${currentPageScreenName}`;
					const pixivLinkInProfile = createLinkElement(pixivUrl, "Pixiv🔗", "display_pixiv_link");
					//pixivLinkInProfile.style.marginTop = "1em";
					pixivLinkInProfileContainer.appendChild(document.createElement('br'));
					pixivLinkInProfileContainer.appendChild(pixivLinkInProfile);
					profile.appendChild(pixivLinkInProfileContainer);
				}
			}
		}
		return "done";
	}

	function quickShareTweetLink(tweetNodes){
		const colors = new Colors();
		tweetNodes.forEach(async (tweet)=>{
			const footer = tweet.node.querySelector('div[id][role="group"]');
			if(!footer || footer.querySelector('[data-testid="quickShare"]'))return;
			const caret = tweet.isFirstRun ? await waitElementAndGet({query: '[data-testid="caret"]'}) : tweet.node.querySelector('[data-testid="caret"]')?.parentNode.parentNode;
			let clonedNode;
			if(caret){
				clonedNode = caret.cloneNode(true);
				//clonedNode.style.paddingTop = "1px";
			}else{
				clonedNode = footer.lastElementChild.cloneNode(true);
			}
			const svgClassList = footer.firstChild.querySelector('svg').classList;
			clonedNode.querySelector('button').setAttribute('data-testid','quickShare');
			clonedNode.style.marginLeft = "0.5em";
			clonedNode.style.justifyContent = 'inherit';
			clonedNode.style.display = 'inline-grid';
			clonedNode.style.transform = 'rotate(0deg) scale(1) translate3d(0px, 0px, 0px)';
			const clonedSvg = clonedNode.querySelector('svg');
			while(clonedSvg.firstChild){
				clonedSvg.removeChild(clonedSvg.firstChild);
			}
			const newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			newPath.setAttribute('d', 'M17 4c-1.1 0-2 .9-2 2 0 .33.08.65.22.92C15.56 7.56 16.23 8 17 8c1.1 0 2-.9 2-2s-.9-2-2-2zm-4 2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4c-1.17 0-2.22-.5-2.95-1.3l-4.16 2.37c.07.3.11.61.11.93s-.04.63-.11.93l4.16 2.37c.73-.8 1.78-1.3 2.95-1.3 2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-.32.04-.63.11-.93L8.95 14.7C8.22 15.5 7.17 16 6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.17 0 2.22.5 2.95 1.3l4.16-2.37c-.07-.3-.11-.61-.11-.93zm-7 4c-1.1 0-2 .9-2 2s.9 2 2 2c.77 0 1.44-.44 1.78-1.08.14-.27.22-.59.22-.92s-.08-.65-.22-.92C7.44 10.44 6.77 10 6 10zm11 6c-.77 0-1.44.44-1.78 1.08-.14.27-.22.59-.22.92 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z');
			clonedSvg.appendChild(newPath);
			clonedSvg.style.color = colors.get("fontColorDark");
			clonedSvg.classList = svgClassList;
			clonedNode.addEventListener('click', ()=>{
				let useDomain = scriptSettings.quickShareTweetLink?.domain || "twitter.com";
				if(useDomain === "other"){
					if(scriptSettings.quickShareTweetLink?.otherDomain){
						useDomain = scriptSettings.quickShareTweetLink.otherDomain;
					}else{
						useDomain = "twitter.com";
					}
				}
				copyToClipboard(tweet.link.replace(/https?:\/\/(x|twitter)\.com/,`https://${useDomain}`));
			});
			function resetStyles(){
				clonedSvg.parentNode.firstChild.style.backgroundColor = '';
				clonedSvg.style.color = colors.get("fontColorDark");
			}

			clonedNode.addEventListener('mouseover', function(){
				clonedSvg.parentNode.firstChild.style.backgroundColor = colors.getWithAlpha("twitterBlue", 0.1);
				clonedSvg.style.color = colors.get("twitterBlue");
			});

			clonedNode.addEventListener('mouseout', resetStyles);
			clonedNode.addEventListener('touchend', resetStyles);
			clonedNode.addEventListener('touchcancel', resetStyles);
			clonedNode.addEventListener('click', (event) => {
				event.stopPropagation();
			});
			footer.appendChild(clonedNode);
		});
		return "done";
	}

	function hideAnalytics(tweetNodes){
		try{
			tweetNodes.forEach(async t=>{
				if(t.id === extractTweetId(currentUrl))return;
				const analytics = t.node.querySelector('div[id][role="group"] a[role="link"]')?.parentNode || (await waitElementAndGet({query: '[d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"]', searchPlace: t.node, retry: 2}))?.findParent('div.r-13awgt0.r-18u37iz.r-1h0z5md');
				if(analytics)analytics.style.display = "none";
			});
		}catch(error){console.error(error)}
		return "done";
	}

	async function helloTweetWhereAreYouFrom(){
		if(document.querySelector('.display_twitter_client') || !currentUrl.match(/[\w]{1,}\.com\/[\w]*\/status\/[0-9]*/))return;
		const targetNode = await waitElementAndGet({query: envSelector.infoField, interval: 300, retry: 4});
		const tweetData = await twitterApi.getTweet(extractTweetId(currentUrl));
		const thisScriptSettings = scriptSettings.helloTweetWhereAreYouFrom;
		if(!targetNode)return;
		const separatDot =
		h("div", {
				class: "MTLU_container",
				style: {
					display: "inline",
					padding: "0 4px 0 4px",
				}
			},
			h("span", {
					class: "MTLU_fontColorDark",
					textContent: "·"
				}
			)
		);
		const sourceDisplayContainer =
		h("div", {
				class: "MTLU_container display_twitter_client",
				style: {
					display: "inline",
				},
			},
			h("span", {
					class: "MTLU_fontColorDark",
					textContent: decodeHtml(tweetData.source)
				}
			)
		);
		targetNode.appendChild(separatDot);
		targetNode.appendChild(sourceDisplayContainer);

		if(thisScriptSettings.showVideoUrl == false)return;
		const mediaData = tweetData.legacy?.extended_entities?.media || tweetData.extended_entities?.media || [];
		if(mediaData.length === 0){
			const tweetCardData = processTweetCardBindingValues(tweetData.card?.legacy || tweetData.card);
			if(tweetCardData){
				try{
					const coverPlayerStream = tweetCardData.cover_player_stream_url;
					if(coverPlayerStream){
						const vmapUrl = coverPlayerStream.string_value;
						const vmap = await request({url: vmapUrl, respType: "text", onlyResponse: true});
						const videoUrl = getHighestBitrateMp4UrlFromVmap(vmap);
						if(videoUrl){
							mediaData.push({type: "video", video_info: {variants: [{content_type: "video/mp4", url: videoUrl, bitrate: 0}]}});
						}
					}

					const playerUrl = tweetCardData.player_url;
					if(playerUrl){
						const vmapUrl = playerUrl.string_value;
						const vmap = await request({url: vmapUrl, respType: "text", onlyResponse: true});
						const videoUrl = getHighestBitrateMp4UrlFromVmap(vmap);
						if(videoUrl){
							mediaData.push({type: "video", video_info: {variants: [{content_type: "video/mp4", url: videoUrl, bitrate: 0}]}});
						}
					}
				}catch(error){}
			}
		}
		if(mediaData.length === 0)return;
		const videoUrlElements = mediaData
			.filter(m => ['video', 'animated_gif'].includes(m.type))
			.map((m, index) => {
				let variant = m?.video_info?.variants?.filter(v => v.content_type !== 'application/x-mpegURL')?.reduce((a, b) => a.bitrate > b.bitrate ? a : b);
				const videoUrlElement = createLinkElement(variant.url.split('?')[0], `${index + 1}: ${m.type} URL`);
				if(index != 0)videoUrlElement.style.marginLeft = "0.7em";
				return videoUrlElement;
			});
		if(videoUrlElements.length > 0){
			const videoUrlContainer = h("div", {
					class: "MTLU_container",
					style: {
						display: "flex",
						flexDirection: "row",
					}
				},
				videoUrlElements
			);
			targetNode.appendChild(videoUrlContainer);
		}
		return "done";
	}

	async function showFollowers(){
		try{
			if(!/\/verified_followers$/.test(currentUrl))return;
			const screenName = extractUserName(currentUrl);
			const safeScreenName = screenName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			const pattern = new RegExp(`${safeScreenName}/verified_followers$`);
			if(!pattern.test(currentUrl))return;
			const followersTab = await waitElementAndGet({query: `a[role="tab"][href="/${screenName}/followers"]`, searchFunction: 'querySelector', interval: 100, retry: 10});
			if(followersTab.getAttribute('showFollowersChecked') == "true")return;
			followersTab.click();
			followersTab.setAttribute('showFollowersChecked',"true");
		}catch(error){console.error(error)}
		return "done";
	}

	function sneakilyFavorite(tweetNodes){
		const colors = new Colors();
		tweetNodes.forEach(function(element){
			const node = element.node;
			if(node.querySelector(".sneakilyFavorite") || ! node.querySelector(envSelector.retweeted) || !node.querySelector('[data-testid="like"]'))return;
			const tweetLink = element.link;
			const container = document.createElement('div');
			container.className = 'sneakilyFavorite MTLU_container';
			const button = document.createElement('button');
			const fotter = node.querySelector('div[id][role="group"]');
			const likeElement = fotter.querySelector('[data-testid="like"]');
			button.textContent = envText.sneakilyFavorite.favorite;
			button.style.fontSize = '0.7em';
			button.style.whiteSpace = 'nowrap';
			button.className = 'sneakilyFavorite';
			button.addEventListener('click',async function(event){
				this.disabled = true;
				const status = await twitterApi.favoriteTweet(extractTweetId(tweetLink));
				if(status.data.favorite_tweet == "Done"){
					likeElement.querySelector('div[dir="ltr"]').classList.add(envSelector.likedColor);
					likeElement.querySelector('div[dir="ltr"]').style.color = colors.get("favorited");
					likeElement.querySelector("path").setAttribute('d',envSelector.liked);
					likeElement.setAttribute('data-testid', 'unlike');
				}
				this.remove();
			});
			container.appendChild(button);
			fotter.insertBefore(container, likeElement.parentElement.nextSibling);
		});
		return "done";
	}

	async function showAllMedias(triggeredUrl){
		if(scriptSettings.showAllMedias.displayMethod === "expand" || scriptSettings.showAllMedias.onlyRemoveBlur){
			expand();
		}else{
			likeTweet();
		}
		async function expand(){
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
				if(scriptSettings.showAllMedias.removeBlur && blurSvgNode){
					blurSvgNode.parentNode.parentNode.parentNode.querySelector('[role="button"]').click();
				}
				return node.querySelector('path[d="M2 8.5C2 7.12 3.12 6 4.5 6h11C16.88 6 18 7.12 18 8.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C3.12 22 2 20.88 2 19.5v-11zM19.5 4c.28 0 .5.22.5.5v13.45c1.14-.23 2-1.24 2-2.45v-11C22 3.12 20.88 2 19.5 2h-11c-1.21 0-2.22.86-2.45 2H19.5z"]');
			});
			if(mediaNodes.length === 0 || scriptSettings.showAllMedias.onlyRemoveBlur)return;
			mediaNodes.forEach(node => {
				const svgElement = node.querySelector('svg');
				const numberSpan = document.createElement('span');
				numberSpan.textContent = '1';
				numberSpan.style.position = 'absolute';
				numberSpan.style.color = 'black';
				numberSpan.style.right = '15px';
				numberSpan.style.bottom = '4px';
				numberSpan.className = 'indexNum';
				svgElement.parentNode.appendChild(numberSpan);
			});
			if(!twitterApi.tweetsData[mediaNodes[0].querySelector('a').href.match(/[\w]{1,}\.com\/[^/]+\/status\/(\d+)/)[1]])await twitterApi.getUserMedia(screenName);
			mediaNodes.forEach(async n=>{
				n.classList.add('Show_all_Medias_checked');
				const parent = n.parentNode;
				const mediaLinkNode = n.querySelector('a');
				const tweetID = mediaLinkNode.href.match(/[\w]{1,}\.com\/[^/]+\/status\/(\d+)/)[1];
				const tweetData = await twitterApi.getTweet(tweetID);
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
		async function likeTweet(){
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
			if(!twitterApi.tweetsData[mediaNodes[0].querySelector('a').href.match(/[\w]{1,}\.com\/[^/]+\/status\/(\d+)/)[1]])await twitterApi.getUserMedia(extractUserName(currentUrl));
			const processNode = async (n)=>{
				const mediaLinkNode = n.querySelector('a');
				const tweetID = extractTweetId(mediaLinkNode.href);
				const screenName = extractUserName(mediaLinkNode.href);
				n.style.width = "100%";
				let tweetData = await twitterApi.getTweet(tweetID);
				if(n.querySelector('path[d="M2 8.5C2 7.12 3.12 6 4.5 6h11C16.88 6 18 7.12 18 8.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C3.12 22 2 20.88 2 19.5v-11zM19.5 4c.28 0 .5.22.5.5v13.45c1.14-.23 2-1.24 2-2.45v-11C22 3.12 20.88 2 19.5 2h-11c-1.21 0-2.22.86-2.45 2H19.5z"]')){
					if(!(tweetData.extended_entities?.media?.length >= 2))tweetData = await twitterApi.getTweet(tweetID);
				}
				const article = createTweetNode(tweetData);
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
						const tnbIdValues = ['User-Name', 'mediaContainer', 'footerContainer'];
						if(e.target.tagName === 'A' || e.target.closest('a'))return;
						const hasTnbId = tnbIdValues.some(tnbIdValue =>
							e.target.getAttribute('tnb-id') === tnbIdValue || e.target.closest(`[tnb-id="${tnbIdValue}"]`)
						);
						if(hasTnbId)return;
						mediaLinkNode.click();
						if(isMobile){

						}else{
							(await waitElementAndGet({query: `div[data-viewportview="true"] a[href="/${screenName}/status/${tweetID}"]`, interval: 20, retry: 50})).click()
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
			await waitElementAndGet({query: `[data-testid="swipe-to-dismiss"]`, interval: 100, retry: 25});
			for(let i=1;i<=page;i++){
				await sleep(10);
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
	async function customizeMenuButton(){
		if(!sessionData.customizeMenuButton)sessionData.customizeMenuButton = {};
		if(sessionData.customizeMenuButton?.observer)return;
		//const thisScriptSettings = scriptSettings.customizeMenuButton;
		//const thisFunctionText = envText.customizeMenuButton;
		const moreMenuButton = await waitElementAndGet({query: 'button[data-testid="AppTabBar_More_Menu"]', searchFunction: 'querySelector', interval: 100, retry: 10});
		if(!moreMenuButton)return;
		const appTabBar = moreMenuButton.parentNode;
		let breaking = false;
		if(!sessionData.customizeMenuButton.observer){
			const observer = new MutationObserver(mutations=>{
				if(breaking || sessionData.customizeMenuButton.isRunning)return;
				breaking = true;
				appTabBar.querySelectorAll('[clonedButton="true"]').forEach(e=>e.remove());
				addAndSort().finally(()=>{
					sessionData.customizeMenuButton.isRunning = false;
				});
				setTimeout(()=>{
					breaking = false;
				}, 200);
			});
			observer.observe(appTabBar, {childList: true, subtree: false, attributes: true});
			if(!sessionData.customizeMenuButton)sessionData.customizeMenuButton = {};
			sessionData.customizeMenuButton.observer = observer;
		}
		const userData = sessionStorage.userData?.screenName !== undefined ? sessionStorage.userData : await fetchUserData();
		sessionData.customizeMenuButton.addAndSort = addAndSort;

		addAndSort();
		async function addAndSort(){
			sessionData.customizeMenuButton.isRunning = true;
			const thisScriptSettings = scriptSettings.customizeMenuButton;
			const options = {
				"homeButton": {
					"href": "/home",
					"defaultSettings": true,
				},
				"exploreButton": {
					"href": "/explore",
					"defaultSettings": true,
				},
				"notificationsButton": {
					"href": "/notifications",
					"defaultSettings": true,
				},
				"connect_peopleButton":{
					"href": "/i/connect_people",
					"defaultSettings": true,
				},
				"chatButton": {
					"href": "/i/chat",
					"defaultSettings": true,
					//"text": twitterTextI18n.getText("chat"),
				},
				"grokButton": {
					"href": "/i/grok",
					"defaultSettings": true,
					"text": twitterTextI18n.getText("grok"),
				},
				"listsButton": {
					"href": `/${userData.screenName}/lists`,
					"defaultSettings": true,
					"icon": svgIconPaths.list,
					"text": twitterTextI18n.getText("lists")
				},
				"bookmarksButton": {
					"href": "/i/bookmarks",
					"defaultSettings": true,
					"icon": svgIconPaths.bookmark,
					"text": twitterTextI18n.getText("bookmarks")
				},
				"communitiesButton": {
					"href": `/${userData.screenName}/communities`,
					"defaultSettings": true,
					"text": twitterTextI18n.getText("communities")
				},
				"premiumButton": {
					"href": "/i/premium_sign_up",
					"defaultSettings": false,
					"text": twitterTextI18n.getText("premium")
				},
				"businessButton": {
					"href": "/i/premium-business",
					"defaultSettings": false,
					"text": twitterTextI18n.getText("business")
				},
				"profileButton": {
					"href": `/${userData.screenName}`,
					"defaultSettings": true,
				},
				"creatorStudioButton": {
					"href": "/i/jf/creators/studio",
					"defaultSettings": false,
					"icon": "M7 6h10v2h-1v2.7l3.316 4.97c.446.67.684 1.46.684 2.26 0 2.25-1.822 4.07-4.07 4.07H8.07C5.822 22 4 20.18 4 17.93c0-.8.238-1.59.684-2.26L8 10.7V8H7V6zm9.742 9.42c-.227-.04-.531-.08-.873-.12-.757-.08-1.62-.13-2.25-.06-.572.07-.983.15-1.424.24h-.005c-.445.09-.92.19-1.571.26-.869.11-1.922.03-2.707-.05-.288-.04-.55-.07-.769-.1l-.795 1.19c-.227.34-.348.74-.348 1.15C6 19.07 6.927 20 8.07 20h7.86c1.143 0 2.07-.93 2.07-2.07 0-.41-.121-.81-.348-1.15l-.91-1.36zM10 3c-.552 0-1 .45-1 1s.448 1 1 1 1-.45 1-1-.448-1-1-1zm3.5-2c-.828 0-1.5.67-1.5 1.5S12.672 4 13.5 4 15 3.33 15 2.5 14.328 1 13.5 1z",
					"text": twitterTextI18n.getText("creatorStudio")
				},
				"adsButton": {
					"href": "https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb",
					"defaultSettings": false,
					"icon": "M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z",
					"text": twitterTextI18n.getText("ads")
				},
				"createYourSpaceButton": {
					"href": "/i/spaces/start",
					"defaultSettings": false,
					"icon": "M12 22.25c-4.99 0-9.18-3.393-10.39-7.994l1.93-.512c.99 3.746 4.4 6.506 8.46 6.506s7.47-2.76 8.46-6.506l1.93.512c-1.21 4.601-5.4 7.994-10.39 7.994zM5 11.5c0 3.866 3.13 7 7 7s7-3.134 7-7V8.75c0-3.866-3.13-7-7-7s-7 3.134-7 7v2.75zm12-2.75v2.75c0 2.761-2.24 5-5 5s-5-2.239-5-5V8.75c0-2.761 2.24-5 5-5s5 2.239 5 5zM11.25 8v4.25c0 .414.34.75.75.75s.75-.336.75-.75V8c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm-3 1v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm7.5 0c0-.414-.34-.75-.75-.75s-.75.336-.75.75v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9z",
					"text": twitterTextI18n.getText("createYourSpace")
				},
				"settingsAndPrivacy": {
					"href": "/settings",
					"defaultSettings": false,
					"icon": svgIconPaths.settings,
					"text": twitterTextI18n.getText("settingsAndPrivacy")
				},
				"shortCutButton1": {
					"href": thisScriptSettings.shortCutButton1Uri.replace('$MYNAME', userData.screenName),
					"icon": "M8 6h10v10h-2V9.41L5.957 19.46l-1.414-1.42L14.586 8H8V6z",
					"text": thisScriptSettings.shortCutButton1DisplayName,
				},
				"shortCutButton2": {
					"href": thisScriptSettings.shortCutButton2Uri.replace('$MYNAME', userData.screenName),
					"icon": "M8 6h10v10h-2V9.41L5.957 19.46l-1.414-1.42L14.586 8H8V6z",
					"text": thisScriptSettings.shortCutButton2DisplayName,
				},
				"shortCutButton3": {
					"href": thisScriptSettings.shortCutButton3Uri.replace('$MYNAME', userData.screenName),
					"icon": "M8 6h10v10h-2V9.41L5.957 19.46l-1.414-1.42L14.586 8H8V6z",
					"text": thisScriptSettings.shortCutButton3DisplayName,
				},
				"shortCutButton4": {
					"href": thisScriptSettings.shortCutButton4Uri.replace('$MYNAME', userData.screenName),
					"icon": "M8 6h10v10h-2V9.41L5.957 19.46l-1.414-1.42L14.586 8H8V6z",
					"text": thisScriptSettings.shortCutButton4DisplayName,
				},
			};
			const buttonOptionsByHref = Object.keys(options).reduce((acc, key) => {
				const option = options[key];
				acc[option.href] = { key, option };
				return acc;
			}, {});
			const buttonElementTemplate = moreMenuButton.cloneNode(true);
			const elementToClone = document.createElement('a');
			elementToClone.style = buttonElementTemplate.style.cssText;
			elementToClone.className = buttonElementTemplate.className;
			while(buttonElementTemplate.firstChild){
				elementToClone.appendChild(buttonElementTemplate.firstChild);
			}
			for(let i=0; i < thisScriptSettings.buttonSorting?.length || 0; i++){
				let key = thisScriptSettings.buttonSorting[i];
				const nameChangedKeys = {
					"messagesButton": "chatButton",
					"jobsButton": "businessButton",
					"verifiedOrgButton": "businessButton",
					"monetizationButton": "creatorStudioButton",
				}
				if(nameChangedKeys[key]){
					const originalKey = key;
					key = nameChangedKeys[originalKey];
					thisScriptSettings.buttonSorting[i] = key;
					if(thisScriptSettings.toAddOptions[originalKey]){
						thisScriptSettings.toAddOptions[key] = true;
					}
					delete thisScriptSettings.toAddOptions[originalKey];
					await saveSettings();
				}
				const option = options[key];
				if(!option)continue;
				const existButton = appTabBar.querySelectorAll(`a[href="${option.href}"]`);
				if(!thisScriptSettings.toAddOptions[key]){
					if(thisScriptSettings.toAddOptions[key] === undefined){
						if(option.defaultSettings === false){
							if(existButton.length > 0){
								existButton[0].setAttribute('customizeMenuButtonChecked', 'true');
								existButton[0].style.display = "none";
							}
							continue;
						}
					}else{
						if(existButton.length > 0){
							existButton[0].setAttribute('customizeMenuButtonChecked', 'true');
							existButton[0].style.display = "none";
						}
						continue;
					}
				}
				if(existButton.length > 0){
					if(existButton.length > 1){
						for(let j=1;j<existButton.length;j++){
							const target = existButton[j];
							if(target.getAttribute('clonedButton') === "true"){
								target.remove();
							}else{
								target.setAttribute('customizeMenuButtonChecked', 'true');
								appTabBar.insertBefore(target, moreMenuButton);
							}
						}
						continue;
					}
					existButton[0].setAttribute('customizeMenuButtonChecked', 'true');
					appTabBar.insertBefore(existButton[0], moreMenuButton);
					continue;
				};
				const button = elementToClone.cloneNode(true);

				const buttonText = button.querySelector('span');
				if(buttonText?.innerText)buttonText.innerText = option.text;
				button.setAttribute('aria-label', key);
				button.setAttribute('customizeMenuButtonChecked', 'true');
				button.setAttribute('clonedButton', 'true');
				button.target = "_blank";
				button.rel = "noopener nofollow";
				button.style.display = "flex";
				button.href = option.href;
				if(option.icon){
					button.querySelector('svg g').innerHTML = `<path d="${option.icon}"></path>`;
				}
				addClickButtonEvent(button);
				appTabBar.insertBefore(button, moreMenuButton);
			}
			const unknownButtons = appTabBar.querySelectorAll(`a:not([customizeMenuButtonChecked="true"])`);
			if(unknownButtons.length){
				for(let i=0;i<unknownButtons.length;i++){
					const b = unknownButtons[i];
					b.setAttribute('unknownButton', 'true');
					appTabBar.insertBefore(b, moreMenuButton);
				}
			}
			sessionData.customizeMenuButton.isRunning = false;
			return "done";
		}
		return "done";
		function addClickButtonEvent(button, target){
			button.addEventListener('mouseenter',()=>{
				button.firstChild.style.backgroundColor = colors.getWithAlpha("fontColor", 0.1);
				button.firstChild.style.borderRadius = "9999px";

			});
			button.addEventListener('mouseleave', resetStyles);
			button.addEventListener('touchend',  resetStyles);
			button.addEventListener('touchcancel', resetStyles);
			button.addEventListener('pointerleave', resetStyles);
			function resetStyles(){
				button.firstChild.style.backgroundColor = '';
			}
			button.addEventListener('click',async (event)=>{
					event.preventDefault();
					if(button.href.match(/^(\/.+|https:\/\/x\.com\/)/)){
						event.stopPropagation();
						navigateTo(button.href);
					}
			});
		}
	}

	async function imageZoom(){
		if(!currentUrl.match(/status\/[\d]+\/(video|photo)/))return;
		if(document.querySelector('[imageZoomed="true"]'))return;
		let zoomLevel = scriptSettings.imageZoom?.zoomLevel || 2;
		let magnifierSize = scriptSettings.imageZoom?.magnifierSize || 250;
		if(!sessionData.imageZoom?.magnifier){
			if(!sessionData.imageZoom)sessionData.imageZoom = {};
			const magnifierImg = document.createElement('img');
			magnifierImg.style.maxWidth = 'none';
			const magnifier = document.createElement('div');
			magnifier.style.position = 'absolute';
			magnifier.style.border = '3px solid #000';
			magnifier.style.borderRadius = '50%';
			magnifier.style.cursor = 'none';
			magnifier.style.display = 'none';
			magnifier.style.width = `${magnifierSize}px`;
			magnifier.style.height = `${magnifierSize}px`;
			magnifier.style.overflow = 'hidden';
			magnifier.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
			magnifier.appendChild(magnifierImg);
			sessionData.imageZoom.magnifier = magnifier;
			sessionData.imageZoom.magnifierImg = magnifierImg;
			sessionData.imageZoom.zoomLevel = zoomLevel;
			sessionData.imageZoom.magnifierSize = magnifierSize;

			magnifier.addEventListener('dragstart', (e) => e.preventDefault());

			magnifier.addEventListener('wheel', (e)=>{
				if(e.ctrlKey){
					e.preventDefault();
					sessionData.imageZoom.zoomLevel += e.deltaY * -0.005;
					sessionData.imageZoom.zoomLevel = Math.min(Math.max(1, sessionData.imageZoom.zoomLevel), 8); // ズームレベルを1から8の範囲に制限
					const rect = sessionData.imageZoom.target.getBoundingClientRect();
					const x = e.clientX - rect.left;
					const y = e.clientY - rect.top;
					magnifierImg.style.width = `${sessionData.imageZoom.target.width * sessionData.imageZoom.zoomLevel}px`;
					magnifierImg.style.height = `${sessionData.imageZoom.target.height * sessionData.imageZoom.zoomLevel}px`;
					magnifierImg.style.left = `${-1 * (x * sessionData.imageZoom.zoomLevel - magnifier.offsetWidth / 2)}px`;
					magnifierImg.style.top = `${-1 * (y * sessionData.imageZoom.zoomLevel - magnifier.offsetHeight / 2)}px`;
					magnifier.style.left = `${e.pageX - magnifier.offsetWidth / 2}px`;
					magnifier.style.top = `${e.pageY - magnifier.offsetHeight / 2}px`;
				}else if(e.shiftKey){
					e.preventDefault();
					sessionData.imageZoom.magnifierSize += e.deltaY * -0.1;
					sessionData.imageZoom.magnifierSize = Math.min(Math.max(50, sessionData.imageZoom.magnifierSize), 400); // ルーペサイズを50から400の範囲に制限
					magnifier.style.width = `${sessionData.imageZoom.magnifierSize}px`;
					magnifier.style.height = `${sessionData.imageZoom.magnifierSize}px`;
					magnifier.style.left = `${e.pageX - magnifier.offsetWidth / 2}px`;
					magnifier.style.top = `${e.pageY - magnifier.offsetHeight / 2}px`;
				}
				clearTimeout(saveTimeout);
				saveTimeout = setTimeout(() => {
					scriptSettings.imageZoom = { zoomLevel: sessionData.imageZoom.zoomLevel, magnifierSize: sessionData.imageZoom.magnifierSize };
					saveSettings();
				}, 5000);
			}, { passive: false }); // passive: false を追加してデフォルト動作をキャンセル
		}
		const mediaDisplayTree = (await waitElementAndGet({query: '[data-testid="mask"]'})).parentElement;
		if(!mediaDisplayTree)return;
		mediaDisplayTree.setAttribute('imageZoomed', 'true');
		const images = mediaDisplayTree.querySelectorAll('[data-testid="swipe-to-dismiss"]');
		const magnifier = sessionData.imageZoom.magnifier;
		const magnifierImg = sessionData.imageZoom.magnifierImg;
		document.body.appendChild(magnifier);
		let saveTimeout;

		images.forEach(image =>{
			if(image.getAttribute('eventAdded') === 'true')return;
			image.setAttribute('eventAdded', 'true');
			image.addEventListener('mousedown', (e)=>{
				if(e.button === 2)return;
				sessionData.imageZoom.target = e.target;
				if(sessionData.imageZoom.target.tagName !== 'IMG')return;
				const rect = sessionData.imageZoom.target.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				magnifierImg.src = sessionData.imageZoom.target.src;
				magnifier.style.display = 'block';
				magnifier.style.left = `${e.pageX - magnifier.offsetWidth / 2}px`;
				magnifier.style.top = `${e.pageY - magnifier.offsetHeight / 2}px`;

				magnifierImg.style.position = 'absolute';
				magnifierImg.style.width = `${sessionData.imageZoom.target.width * sessionData.imageZoom.zoomLevel}px`;
				magnifierImg.style.height = `${sessionData.imageZoom.target.height * sessionData.imageZoom.zoomLevel}px`;
				magnifierImg.style.left = `${-1 * (x * sessionData.imageZoom.zoomLevel - magnifier.offsetWidth / 2)}px`;
				magnifierImg.style.top = `${-1 * (y * sessionData.imageZoom.zoomLevel - magnifier.offsetHeight / 2)}px`;

				const moveMagnifier = (moveEvent)=>{
					const moveX = moveEvent.clientX - rect.left;
					const moveY = moveEvent.clientY - rect.top;
					magnifier.style.left = `${moveEvent.pageX - magnifier.offsetWidth / 2}px`;
					magnifier.style.top = `${moveEvent.pageY - magnifier.offsetHeight / 2}px`;
					magnifierImg.style.left = `${-1 * (moveX * sessionData.imageZoom.zoomLevel - magnifier.offsetWidth / 2)}px`;
					magnifierImg.style.top = `${-1 * (moveY * sessionData.imageZoom.zoomLevel - magnifier.offsetHeight / 2)}px`;
					if(moveEvent.clientX < rect.left || moveEvent.clientX > rect.right || moveEvent.clientY < rect.top || moveEvent.clientY > rect.bottom){
						hideMagnifier();
					}
				};

				document.addEventListener('mousemove', moveMagnifier);

				const hideMagnifier = () => {
					magnifier.style.display = 'none';
					document.removeEventListener('mousemove', moveMagnifier);
				};
				document.addEventListener('mouseup', hideMagnifier, { once: true });
				sessionData.imageZoom.target.addEventListener('dragstart', (e) => e.preventDefault(), { once: true });
			});
		});
	}

	async function imageSizeFixer(tweetNodes){
		if(!sessionData.imageSizeFixer?.appendedCss){
			const css = `
			article .css-175oi2r.r-9aw3ui.r-1s2bzr4>div.r-9aw3ui>div {
				max-width: 100% !important;
			}
			`;
			const style = document.createElement('style');
			style.textContent = css;
			document.head.appendChild(style);
			sessionData.imageSizeFixer = {
				appendedCss: true
			};
			sessionData.imageSizeFixer.style = style;
		}
		tweetNodes.forEach(async e=>{
			const node = e.node;
			const photoNode = await waitElementAndGet({query: `[data-testid="tweetPhoto"]`, searchFunction: 'querySelector', searchPlace: node, interval: 50, retry: 5});
			const targetNode = photoNode?.parentElement.parentElement;
			if(!targetNode)return;
			if(targetNode.style.width && targetNode.style.height){
				const newSize = calculateTwitterMediaSize(parseInt(targetNode.style.width)*100, parseInt(targetNode.style.height)*100);
				targetNode.style.width = newSize[0] + 'px';
				targetNode.style.height = newSize[1] + 'px';
			}else{
				debug("no size",node,targetNode);
			}
		});
	}

	async function fixChatLinkNavigation(){
		if(!currentUrl.match(/\/i\/chat/)){
			if(sessionData.fixChatLinkNavigation?.observer){
				sessionData.fixChatLinkNavigation.observer.disconnect();
				delete sessionData.fixChatLinkNavigation.observer;
			}
			return;
		}else{
			if(sessionData.fixChatLinkNavigation?.observer && sessionData.fixChatLinkNavigation.dmMessageListElement)return;
		}
		const dmMessageListElement = await waitElementAndGet({
			query: '[data-testid="dm-message-list"]:not([chatLinkNavigationFixed="true"])',
			searchFunction: 'querySelector',
			interval: 200,
			retry: 10
		});
		if(!dmMessageListElement)return;
		dmMessageListElement.setAttribute('chatLinkNavigationFixed', 'true');
		const observer = new MutationObserver(mutations => {
			addChatLinkEvent();
		});
		observer.observe(dmMessageListElement, {childList: true, subtree: true});
		sessionData.fixChatLinkNavigation = {
			observer,
			dmMessageListElement,
		};
		async function addChatLinkEvent(){
			const chatLinks = await waitElementAndGet({
				query: 'a[href^="https://x.com/"]:not([chatLinkFixed="true"])',
				searchPlace: dmMessageListElement,
				searchFunction: 'querySelectorAll',
				interval: 100,
				retry: 2
			});
			chatLinks?.forEach(link=>{
				link.setAttribute('chatLinkFixed', 'true');
				link.addEventListener('click', e=>{
					e.preventDefault();
					navigateTo(link.href);
				});
			});
		}
	}

	async function blackToDarkblue(){
		if(sessionData.blackToDarkblue?.appendedCss)return;
		const overRideCss = `
.r-1nao33i {
	color: ${colors.get('fontColor', 1)} !important;
}
[style*="color: rgb(113, 118, 123)"], .MTLU_fontColorDark {
	color: ${colors.get('fontColorDark', 1)} !important;
}
[style*="background-color: rgb(0, 0, 0)"],
.r-kemksi,
.r-cl2sl0
{
	background-color: ${colors.get('backgroundColor', 1)} !important;
}
.r-1roi411 {
	border-color: ${colors.get('borderColor', 1)} !important;
}
.r-1hdo0pc {
	background-color: ${colors.get('menuHoverEffect', 1)} !important;
}
.r-g2wdr4, [style*="color: rgb(22, 24, 28)"], .MTLU_menuHoverEffectLight {
	background-color: ${colors.get('menuHoverEffectLight', 1)} !important;
}
.r-1bnu78o {
	background-color: ${colors.get('conversationLineColor', 1)} !important;
}
.r-5zmot,
.bg-background,
.j-vdda9x11
{
	background-color: ${colors.get('backgroundColor', 1)} !important;
}
`;
		const style = document.createElement('style');
		style.textContent = overRideCss;
		document.head.appendChild(style);
		if(!sessionData.blackToDarkblue?.appendedCss){
			sessionData.blackToDarkblue = {
				appendedCss: style,
				isEnabled: true,
			}
		}
	}

	async function hideAuthenticity(tweetNodes){
		if(!sessionData.hideAuthenticity?.appendedCss){
			const css = `
/* ツイート内 */
[data-testid="tweet"] div:has(> div > [href="https://help.x.com/rules-and-policies/authenticity"]):not(:has([data-testid="Tweet-User-Avatar"])):not([data-mtlu-authenticity-show="1"]),
/* 引用ツイート内 */
[data-testid="tweet"] div${envSelector.mediaField} div:has(> [href="https://help.x.com/rules-and-policies/authenticity"]):not([data-mtlu-authenticity-show="1"]),
/* asideのユーザープロフィール */
li[data-testid="UserCell"] div:has(> div > [href="https://help.x.com/rules-and-policies/authenticity"]):not([data-mtlu-authenticity-show="1"],:has(button)),
/* ツイート詳細のasideのユーザープロフィール */
li[data-testid="UserCell"] div:has(button) > div:has(> [href="https://help.x.com/rules-and-policies/authenticity"]):not([data-mtlu-authenticity-show="1"]),
/* おすすめユーザーのユーザープロフィール */
button[data-testid="UserCell"] div:has(> [href="https://help.x.com/rules-and-policies/authenticity"]):not([data-mtlu-authenticity-show="1"])
{
	display: none !important;
}
`;
			const style = document.createElement('style');
			style.classList.add('MTLU_hideAuthenticityCss');
			style.textContent = css;
			document.head.appendChild(style);
	
			sessionData.hideAuthenticity = {
				appendedCss: style,
				isEnabled: true,
			};
		}
	
		const processAuthenticityLinks = (node) => {
			const authenticityLinks = node.querySelectorAll('a[href="https://help.x.com/rules-and-policies/authenticity"]');
			if(!authenticityLinks.length)return;
			authenticityLinks.forEach((authenticityLink) => {
				const hideTarget = getAuthenticityHideTarget(authenticityLink);
				if(!hideTarget)return;
				if(!authenticityLink.textContent.trim().match(/^(PCF_LABEL_)?NONE$/)){
					hideTarget.dataset.mtluAuthenticityShow = '1';
				}else{
					delete hideTarget.dataset.mtluAuthenticityShow;
				}
			});
		};
		tweetNodes.forEach((e) => processAuthenticityLinks(e.node));
		document.querySelectorAll('li[data-testid="UserCell"], button[data-testid="UserCell"]').forEach(processAuthenticityLinks);
		function getAuthenticityHideTarget(link){
			const parent = link.parentElement;
			if(!parent)return null;
		
			const grandParent = parent.parentElement;
			if(!grandParent)return null;
		
			if(link.closest('button[data-testid="UserCell"]')){
				return parent;
			}
		
			if(link.closest('li[data-testid="UserCell"]')){
				if(grandParent.querySelector('button')){
					return parent;
				}
				return grandParent;
			}
		
			if(link.closest(envSelector.mediaField)){
				return parent;
			}
		
			return grandParent;
		}
	}

	async function mediaOpenByPhotoFilter(){
		const userName = extractUserName(currentUrl);
		if(!userName)return;
		const mediaElement = await waitElementAndGet({
			query: `[data-testid="primaryColumn"] [data-testid="ScrollSnap-SwipeableList"] [data-testid="ScrollSnap-List"] a[href$="${userName}/media"]`,
			searchFunction: 'querySelector',
		});
		if(!mediaElement || mediaElement.getAttribute('mediaOpenByPhotoFilter') === 'true')return;
		mediaElement.setAttribute('mediaOpenByPhotoFilter', 'true');
		mediaElement.addEventListener('click', (e)=>{
			if(!currentUrl.match(new RegExp(`/${userName}/media`))){
				e.preventDefault();
				e.stopPropagation();
				navigateTo(`/${userName}/media?filter=photo`);
			}
		});
	}

	//############################################################################################################
	//##################################################汎用関数##################################################
	//############################################################################################################




	async function fetchUserData(){
		if(sessionData.userData?.screenName !== undefined)return sessionData.userData;
		let settings = await twitterApi.getAccountSettings({include_country_code: true});
		if(!settings){
			const script = Array.from(await waitElementAndGet({query: `script`, searchFunction: 'querySelectorAll', searchPlace: document.body})).find(s => {
				return s.innerText.match(/\"remote\"\:{\"settings\":.*\"settings_metadata\"\:\{\}\}/);
			});
			const settingsJson = `${script?.innerText.match(/\{\"settings\":.*\"settings_metadata\"\:\{\}\}/)?.[0]}}`;
			if(settingsJson)settings = JSON.parse(settingsJson).settings;
		}
		sessionData.userData = {
			screenName: settings.screen_name,
			countryCode: settings.country_code,
			language: settings.language || getCookie('lang') || 'en',
			protected: settings.protected,
		};
		return sessionData.userData;
	}
	function findParent(element, selector, maxDepth = 10){
		let current = element;
		let depth = 0;
		while(current !== null && depth < maxDepth){
			if(current.matches(selector)){
				return current;
			}
			current = current.parentNode;
			depth++;
		}
		return null;
	}

	function locationChange(targetPlace = document){
		const observer = new MutationObserver(mutations => {
			if(currentUrl !== document.location.href){
				currentUrl = document.location.href;
				try{
					update(true);
					addEventToScrollSnapSwipeableList();
					addSettingsButtonToTwitterSettingsMenu();
					if(currentUrl.match(/status\/[\d]+/))setTimeout(()=>{update(true)}, 700);
				}catch(error){console.error(error)}
			}
		});
		const config = {childList: true, subtree: true};
		observer.observe(targetPlace, config);
	}

	async function updateThemeMode(func = ()=>{}){
		sessionData.themeMode = {
			themeCode: null,
			themeNum: Number(getCookie('night_mode')) || 0
		}
		func();
		const color = ["#FFFFFF","#15202B","#000000"];
		const themeMeta = await waitElementAndGet({query: 'head > meta[name="theme-color"]'});
		if(!themeMeta)return "done";
		const themeColor = themeMeta.content;
		const darkModeNum = color.indexOf(themeColor);
		sessionData.themeMode.themeCode = themeColor;
		sessionData.themeMode.themeNum = darkModeNum !== -1 ? darkModeNum : null;
		func();
		const observer = new MutationObserver(mutations => {
			const themeColor = themeMeta.content;
			const darkModeNum = color.indexOf(themeColor);
			sessionData.themeMode.themeCode = themeColor;
			sessionData.themeMode.themeNum = darkModeNum !== -1 ? darkModeNum : null;
			func();
		});
		observer.observe(themeMeta, {childList: false, subtree: false, attributes: true});
	}

	function whenChangeThemeMode(){
		addStyleSheet();
	}

	async function loadSettings(){
		const storedSettings = await getFromIndexedDB('makeTwitterLittleUseful', 'settings');
		if(!storedSettings){
			const localStorageSettings = {
				'makeTwitterLittleUseful': JSON.parse(localStorage.getItem('Make_Twitter_little_useful') || '{}'),
				'webhookBringsTweetsToDiscord': JSON.parse(localStorage.getItem('webhook_brings_tweets_to_discord') || '{}'),
				'helloTweetWhereAreYouFrom': JSON.parse(localStorage.getItem('Hello_tweet_where_are_you_from') || '{}'),
				'showMeYourPixiv': JSON.parse(localStorage.getItem('Show_me_your_Pixiv') || '{}'),
				'noteTweetExpander': JSON.parse(localStorage.getItem('Note_Tweet_expander') || '{}'),
				'sneakilyFavorite': JSON.parse(localStorage.getItem('sneakilyFavorite') || '{}'),
				'engagementRestorer': JSON.parse(localStorage.getItem('Engagement_Restorer') || '{}'),
				'showAllMedias': JSON.parse(localStorage.getItem('Show_all_Medias') || '{}'),
				'quickShareTweetLink': JSON.parse(localStorage.getItem('quickShareTweetLink') || '{}'),
			};
			const featuresToggle = localStorageSettings.makeTwitterLittleUseful.featuresToggle;
			if(featuresToggle){
				localStorageSettings.makeTwitterLittleUseful.featuresToggle = {
					"webhookBringsTweetsToDiscord": featuresToggle["webhook_brings_tweets_to_discord"] ?? false,
					"helloTweetWhereAreYouFrom": featuresToggle["Hello_tweet_where_are_you_from"] ?? false,
					"showMeYourPixiv": featuresToggle["Show_me_your_Pixiv"] ?? false,
					"noteTweetExpander": featuresToggle["Note_Tweet_expander"] ?? true,
					"sneakilyFavorite": featuresToggle["sneakilyFavorite"] ?? false,
					"engagementRestorer": featuresToggle["Engagement_Restorer"] ?? false,
					"quickShareTweetLink": featuresToggle["quickShareTweetLink"] ?? false,
					"showFollowers": featuresToggle["showFollowers"] ?? false,
					"hideAnalytics": featuresToggle["hideAnalytics"] ?? false,
					"showAllMedias": featuresToggle["Show_all_Medias"] ?? false,
				}
			}else{
			};
			scriptSettings = localStorageSettings;
			return "OK";
		}
		scriptSettings = storedSettings;
		return "OK";
	}

	async function saveSettings(){
		await saveToIndexedDB('makeTwitterLittleUseful', 'settings', scriptSettings);
		return "OK";
	}





	function _i18n(){
		envText = Text[scriptSettings?.makeTwitterLittleUseful?.language || getCookie('lang')] || Text.en;
	}

	function addStyleSheet(){
		let style = document.querySelector('style[scriptName="makeTwitterLittleUseful"]');
		if(!style){
			style = document.createElement('style');
			style.setAttribute('scriptName', 'makeTwitterLittleUseful');
			document.head.appendChild(style);
		}

		style.innerHTML = `
			.MTLU_fontColor {
				color: ${colors.get("fontColor")};
			}
			.MTLU_fontColorDark {
				color: ${colors.get("fontColorDark")};
			}
			.MTLU_backgroundColor {
				background-color: ${colors.get("backgroundColor")};
			}
			.MTLU_borderColor {
				border-color: ${colors.get("borderColor")};
			}
			.MTLU_menuHoverEffect {
				background-color: ${colors.get("menuHoverEffect")};
			}
			.MTLU_menuHoverEffectLight {
				background-color: ${colors.get("menuHoverEffectLight")};
			}

			.MTLU_link {
				color: ${colors.get("twitterBlue")};
				text-decoration: none;
				width: fit-content;
			}
			.MTLU_link:hover {
				text-decoration: underline;
				text-decoration-thickness: 1px;
				outline-style: none;
			}

			.MTLU_container button {
				background-color: ${colors.get("buttonBackgroundColor")};
				color: ${colors.get("buttonFontColor")};
				border: 2px solid ${colors.get("buttonBorderColor")};
				border-radius: 2px;
				padding: 0px 5px;
				cursor: pointer;
				transition: background-color 0.2s;
			}
			.MTLU_container button:hover {
				background-color: ${colors.getWithAlpha("buttonBackgroundColor", 0.8)};
			}
			.MTLU_container button:disabled {
				opacity: 0.5;
				cursor: not-allowed;
			}

			.MTLU_container select {
				background-color: ${colors.get("dropdownBackgroundColor")};
				color: ${colors.get("dropdownFontColor")};
				border: 1px solid ${colors.get("dropdownBorderColor")};
				border-radius: 2px;
				padding: 0px 5px;
			}
			.MTLU_container select:hover {
				background-color: ${colors.getWithAlpha("dropdownBackgroundColor", 0.9)};
			}

			.MTLU_container input[type="text"],
			.MTLU_container input[type="textbox"] {
				background-color: ${colors.get("dropdownBackgroundColor")};
				color: ${colors.get("dropdownFontColor")};
				border: 1px solid ${colors.get("dropdownBorderColor")};
				border-radius: 2px;
				transition: background-color 0.2s, border-color 0.2s;
				box-sizing: border-box;
			}

			.MTLU_container input[type="text"]:hover,
			.MTLU_container input[type="textbox"]:hover {
				background-color: ${colors.getWithAlpha("dropdownBackgroundColor", 0.9)};
			}

			.MTLU_container input[type="text"]:focus,
			.MTLU_container input[type="textbox"]:focus {
				border-color: ${colors.get("twitterBlue")};
				outline: none;
				background-color: ${colors.getWithAlpha("dropdownBackgroundColor", 0.95)};
			}

			.MTLU_container input[type="text"]:disabled,
			.MTLU_container input[type="textbox"]:disabled {
				opacity: 0.5;
				cursor: not-allowed;
				background-color: ${colors.getWithAlpha("dropdownBackgroundColor", 0.5)};
			}
		`.replace(/^	{3}/g,''); // tabを3つ消している(やんなくてもいいけど！)
	}




	function getLocale(languageCode){
		const localeMap = {
			'ja': 'ja-JP',
			'en': 'en-US',
		};
		return localeMap[languageCode] || languageCode;
	}

	function decodeHtml(html){
		const txt = document.createElement("div");
		txt.innerHTML = html;
		return txt.textContent;
	}

	function escapeHTML(str){
		return str.replace(/[&<>"']/g, function(match){
			switch(match){
				case '&':
					return '&amp;';
				case '<':
					return '&lt;';
				case '>':
					return '&gt;';
				case '"':
					return '&quot;';
				case "'":
					return '&#39;';
			}
		});
	}

	function copyToClipboard(text){
		navigator.clipboard.writeText(text).then(function(){
			displayToast(envText.makeTwitterLittleUseful.copied);
			//console.log('クリップボードにコピーしました！');
		}).catch(function(err){
			console.error('コピーに失敗しました:', err);
		});
	}

	function compareVersions(version1, version2){
		// 同じなら0, v1が大きいなら1, v2が大きいなら-1
		const v1Parts = version1.split('.').map(Number);
		const v2Parts = version2.split('.').map(Number);
		const length = Math.max(v1Parts.length, v2Parts.length);
		for(let i = 0; i < length; i++){
			const v1Part = v1Parts[i] || 0;
			const v2Part = v2Parts[i] || 0;
			if(v1Part > v2Part){
				return 1;
			}
			if(v1Part < v2Part){
				return -1;
			}
		}
		return 0;
	}

	function getImageSizeFromBlob(blob){
		return new Promise((resolve, reject) => {
			const img = new Image();
			const url = URL.createObjectURL(blob);
			img.onload = ()=>{
				const width = img.width;
				const height = img.height;
				URL.revokeObjectURL(url);
				return resolve({width, height});
			};
			img.onerror = (error)=>{
				console.error(error);
				URL.revokeObjectURL(url);
				return reject(error);
			};
			img.src = url;
		});
	}

	function resizeImageToFit(maxWidth, maxHeight, originalWidth, originalHeight){
		const aspectRatio = originalWidth / originalHeight;
		let width = maxWidth;
		let height = maxHeight;
		if(originalWidth > originalHeight){
			height = maxWidth / aspectRatio;
			if(height > maxHeight){
				height = maxHeight;
				width = maxHeight * aspectRatio;
			}
		}else{
			width = maxHeight * aspectRatio;
			if(width > maxWidth){
				width = maxWidth;
				height = maxWidth / aspectRatio;
			}
		}
		return {width, height};
	}

	async function getFileSize(url){
		const response = await request({url: url, method: 'HEAD'});
		const fileSizeTmp = response.responseHeaders.match(/content-length:\s*(\d+)/i);
		const fileSize = fileSizeTmp ? parseInt(fileSizeTmp[1], 10) : undefined;
		return fileSize;
	}

	function calculateTwitterMediaSize(width, height){
		const maxSquareSize = 516;
		const maxVerticalSize = 510;
		const maxHorizontalSize = 516;
		const maxHorizontalAspectRatio = 5/1;
		const maxVerticalAspectRatio = 3/4;
		let newWidth, newHeight;
		if(width === height){
			if(width > maxSquareSize){
				newWidth = maxSquareSize;
				newHeight = maxSquareSize;
			}
		}else if(width > height){
			// 横長の場合
			const aspectRatio = width / height;
			if(aspectRatio > maxHorizontalAspectRatio){
				newWidth = maxHorizontalSize;
				newHeight = maxHorizontalSize / maxHorizontalAspectRatio;
			}else{
				if(width > maxHorizontalSize){
					newWidth = maxHorizontalSize;
					newHeight = maxHorizontalSize / aspectRatio;
				}else{
					newWidth = width;
					newHeight = height;
				}
			}
		}else{
			// 縦長の場合
			const aspectRatio = width / height;
			if(aspectRatio < maxVerticalAspectRatio){
				newHeight = maxVerticalSize;
				newWidth = maxVerticalSize * maxVerticalAspectRatio;
			}else{
				if(height > maxVerticalSize){
					newHeight = maxVerticalSize;
					newWidth = maxVerticalSize * aspectRatio;
				}else{
					newWidth = width;
					newHeight = height;
				}
			}
		}
		return [newWidth, newHeight];
	}



	function createLinkElement(href, text, additionalClass = ""){
		const colors = new Colors();
		const linkElement = document.createElement("a");
		linkElement.style.width = "fit-content";
		linkElement.href = href;
		linkElement.textContent = text;
		linkElement.className = `${additionalClass} css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1loqt21 MTLU_link`;
		linkElement.target = "_blank";
		linkElement.rel = "noopener nofollow";
		/*
		linkElement.addEventListener('mouseenter', function(){
			linkElement.classList.add('r-1ny4l3l', 'r-1ddef8g', 'r-tjvw6i');
		});
		linkElement.addEventListener('mouseleave', function(){
			linkElement.classList.remove('r-1ny4l3l', 'r-1ddef8g', 'r-tjvw6i');
		});
		*/
		return linkElement;
	}

	function createSvgElement(paths, viewBox = "0 0 24 24"){
		let isPathArray = false;
		if(typeof paths === 'string'){
			isPathArray = true;
			paths = [paths];
		}
		const [minX, minY, width, height] = viewBox.split(" ").map(Number);

		const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
		svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttributeNS(null, "viewBox", viewBox);
		//svg.style.width = `${width}px`;
		//svg.style.height = `${height}px`;

		const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
		svg.appendChild(g);

		const svgPaths = paths.map(path => {
			const svgPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
			svgPath.setAttribute("d", path);
			svgPath.style.fill = "currentColor";
			g.appendChild(svgPath);
			return svgPath;
		});

		return {svg: svg, g: g, paths: isPathArray ? svgPaths : svgPaths[0]};
	}



	function removeNullFromArray(arr){
		return arr.filter(function(x){return !(x === null || x === undefined || x === "")});
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


	function processTweetCardBindingValues(card){
		if(!card || !card.binding_values || !Array.isArray(card.binding_values))return;
		const values = {};
		card.binding_values.forEach(v => {
			values[v.key] = v.value;
		});
		return values;
	}

	function getHighestBitrateMp4UrlFromVmap(xmlString){
		const parser = new DOMParser();
		const doc = parser.parseFromString(xmlString, "text/xml");

		// ルート要素（VMAPなど）を取得
		const root = doc.documentElement;
		// "tw"プレフィックスのURIを取得（nullの場合も考慮）
		const TW_NS = root.lookupNamespaceURI("tw");
		if(!TW_NS)return null; // 名前空間が見つからなければ終了

		let variants = doc.getElementsByTagNameNS(TW_NS, "videoVariant");
		let maxBitrate = -1, maxUrl = null;

		for(let i=0;i<variants.length;i++){
			const variant = variants[i];
			const contentType = variant.getAttribute("content_type");
			const url = variant.getAttribute("url");
			const bitRate = parseInt(variant.getAttribute("bit_rate") || "0", 10);
			if(contentType === "video/mp4" && bitRate > maxBitrate){
				maxBitrate = bitRate;
				maxUrl = url;
			}
		}
		return maxUrl ? decodeURIComponent(maxUrl) : null;
	}

	async function addEventToScrollSnapSwipeableList(){
		try{
			if(!currentUrl.match(/home$/))return;
			const element = await waitElementAndGet({query: '[data-testid="ScrollSnap-SwipeableList"]:not(.MTLU_Do_Update)', searchFunction: 'querySelector'});
			element.classList.add("MTLU_Do_Update");
			element.addEventListener("click", async () => {
				await sleep(500);
				update();
			});
		}catch{}
	}

	async function addEventToHomeButton(){
		const element = await waitElementAndGet({query: '[data-testid="AppTabBar_Home_Link"]:not(.MTLU_Do_Update)', searchFunction: 'querySelector'});
		element?.classList.add("MTLU_Do_Update");
		element?.addEventListener("click", async ()=>{
			update();
		});
	}

	async function addSettingsButtonToTwitterSettingsMenu(start = false){
		if(currentUrl.match(/\.com\/settings\/display/)){
			const backgroundColorPicker = findParent(document.querySelector('[role="radiogroup"]:not(.MTLU_Settings_Button_Adder) [name="background-picker"]'), '[role="radiogroup"]');
			if(backgroundColorPicker){
				backgroundColorPicker.classList.add('MTLU_Settings_Button_Adder');
				backgroundColorPicker.addEventListener('click', async ()=>{
					await sleep(100);
					addSettingsButtonToTwitterSettingsMenu();
				});
			}
		}
		if(!currentUrl.match(/\.com\/settings/))return;
		if(document.querySelector('.MTLU_Settings_Button'))return;
		const colors = new Colors();
		const tabList = await waitElementAndGet({query: 'main div[role="tablist"]', searchFunction: 'querySelector', ...(start ? {interval: 200, retry: 20} : {interval: 100, retry: 10})});
		tabList.classList.add('MTLU_Settings_Button_Added');
		const tabs = Array.from(tabList.querySelectorAll('div[data-testid="activeRoute"]'));
		const classLists = tabs.map(tab => Array.from(tab.classList).sort().join(' '));
		let targetTab = null;
		const duplicateClassLists = classLists.filter((classList, index) => classLists.indexOf(classList) !== index);
		if(duplicateClassLists.length > 0){
			targetTab = tabs[classLists.indexOf(duplicateClassLists[0])];
		}
		if(targetTab){
			const newTab = targetTab.cloneNode(true);
			newTab.classList.add('MTLU_Settings_Button');
			const newTabLinkNode = newTab.querySelector('a');
			newTabLinkNode.href = '#';
			newTabLinkNode.querySelector('span').textContent = envText.makeTwitterLittleUseful.displaySettingsButtonText;
			newTabLinkNode.addEventListener('click', (event) => {
				event.preventDefault();
				createSettingsPage();
			});
			if(document.querySelector('.MTLU_Settings_Button'))return;
			tabList.appendChild(newTab);
			newTabLinkNode.addEventListener('mouseenter', function(){
				newTabLinkNode.style.backgroundColor = colors.get('menuHoverEffectLight');
			});
			newTabLinkNode.addEventListener('mouseleave', resetColor);
			newTabLinkNode.addEventListener('touchend', resetColor);
			newTabLinkNode.addEventListener('touchcancel', resetColor);
			function resetColor(){
				newTabLinkNode.style.backgroundColor = '';
			}
		}
	}



	function objectToUri(obj){
		return encodeURIComponent(JSON.stringify(obj));
	}



	function getPixivUrlWithScreenName(screenName){
		const customData = scriptDataStore.makeTwitterLittleUseful?.pixivLinkCollection?.customData;
		let pixivUrl = customData ? customData[screenName] : null;
		if(pixivUrl?.pixivUrl){
			return pixivUrl.pixivUrl;
		}else{
			const dataBase = scriptDataStore.makeTwitterLittleUseful?.pixivLinkCollection?.dataBase;
			pixivUrl = dataBase ? dataBase[screenName] : null;
			if(Array.isArray(pixivUrl)){
				return `https://www.pixiv.net/users/${pixivUrl[0]}`;
			}else if(pixivUrl){
				return `https://www.pixiv.net/users/${pixivUrl}`;
			}else{
				return null;
			}
		}
	}
	async function addPixivLinksToScriptDataStore(screenNames, force = false){
		const promises = screenNames.map(async screenName => {
			const customData = scriptDataStore.makeTwitterLittleUseful?.pixivLinkCollection?.customData;
			if((customData ? customData[screenName] : null) && !force)return "Already exists";
			//if((((scriptDataStore.Show_me_your_Pixiv[screen_name]?.Create_date || 0) + 604800000) <= new Date().getTime()) || force){
			if(force){
				const userData = await twitterApi.getUser(screenName);
				const bioUrls = [];
				if(userData.bio){
					Object.keys(userData.bio.entityMap).forEach(k=>{
						const entry = userData.bio.entityMap[k];
						if(entry.type === "LINK")bioUrls.push(entry.data.url);
					});
				}
				const userEntitiesData = userData.legacy?.entities || userData.entities;
				const endStat = await findPixivLinkFromUrls(extractUrls(userEntitiesData).concat(bioUrls));
				await loadScriptDataStore();
				if(!scriptDataStore.makeTwitterLittleUseful)scriptDataStore.makeTwitterLittleUseful = {};
				if(!scriptDataStore.makeTwitterLittleUseful.pixivLinkCollection)scriptDataStore.makeTwitterLittleUseful.pixivLinkCollection = {};
				if(!scriptDataStore.makeTwitterLittleUseful.pixivLinkCollection.customData)scriptDataStore.makeTwitterLittleUseful.pixivLinkCollection.customData = {};
				if(endStat == "Too Many Requests"){
					console.log("API limit.");
				}else if(!endStat || endStat?.match(/(?:users\/|member.php\?id=)(11|9949830|15241365)(\/|$)/)){
					scriptDataStore.makeTwitterLittleUseful.pixivLinkCollection.customData[screenName] = {"pixivUrl": null};
					return `${screenName}: Pixivリンクなし`;
				}else{
					scriptDataStore.makeTwitterLittleUseful.pixivLinkCollection.customData[screenName] = {"pixivUrl": endStat.replace(/^https?/,'https')};
					return `${screenName}: ${endStat}`;
				}
			}else{
				return "nothing to do";
			}
		});
		const results = await Promise.allSettled(promises);
		results.forEach(result => {
			if(result.status === 'fulfilled'){
				//debug(result.value);
			}else{
				console.error(`Failure: ${result.reason}`);
			}
		});
		await saveScriptDataStore();
		return "finished!";
		function extractUrls(entities){
			const urls = [];
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
	}
	async function findPixivLinkFromUrls(urls){
		const pixivUrlRegex = /^https?:\/\/(((www|touch)\.)?pixiv\.(net\/([a-z]{2}\/)?((member(_illust)?\.php\?id\=|(users|u)\/)[0-9]*)|me\/.*))/;
		const fanboxUrlRegex = /^https?:\/\/(www\.pixiv\.net\/fanbox\/creator\/[0-9]*|(.*\.)?fanbox\.cc\/?(@.*)?)/;
		return new Promise(async function(resolve){
			let pixivUrl;
			if(urls.length > 0){
				try{
					pixivUrl = await finder(urls);
					if(!pixivUrl){
						urls = (await expandShorteningLink(urls))?.expanded || [];
						pixivUrl = (urls?.length > 0) ? await finder(urls) : null;
						return resolve(pixivUrl);
					}else{
						return resolve(pixivUrl);
					}
				}catch(error){
					console.error(error);
					return resolve(null);
				}
			}
			return resolve(null);
		});
		async function finder(){
			let tmpPixivUrl = findMatchFromArray(urls, pixivUrlRegex, true);
			if(tmpPixivUrl)return tmpPixivUrl;
			const tmpFanboxUrl = findMatchFromArray(urls, fanboxUrlRegex, true);
			if(tmpFanboxUrl){
				tmpPixivUrl = await whenFanbox(findMatchFromArray(urls, fanboxUrlRegex, true));
				if(tmpPixivUrl)return tmpPixivUrl;
			}else{
				const promiseList = [];
				urls.forEach(url=>{
					switch(true){
						case /^https?:\/\/sketch\.pixiv\.net\//.test(url):
							promiseList.push(new Promise(
								async function(resolve, reject){
									try{
										return resolve(await whenPixivSketch(url));
									}catch(error){
										return reject(error);
									}
								}
							));
							break;
						case /^https?:\/\/((fantia\.jp\/(fanclubs\/[0-9])?.*)|(.*\.booth\.pm)|(.*linktr\.ee)|(.*profcard\.info)|(.*lit\.link)|(potofu\.me)|(.*\.carrd\.co)|(.*\.tumblr\.com$)|(twpf\.jp)|(ci\-en\.dlsite\.com\/creator\/[0-9]*)|(profu\.link)|(xfolio\.jp))\/?/.test(url):
							promiseList.push(new Promise(
								async function(resolve, reject){
									try{
										return resolve(await whenGeneral(url));
									}catch(error){
										return reject(error);
									}
								}
							));
							break;
						case /^https?:\/\/.*\.creatorlink\.net(\/.*)?/.test(url):
							promiseList.push(new Promise(
								async function(resolve, reject){
									try{
										return resolve(await whenGeneral(`${url.match(/^https?:\/\/.*\.creatorlink\.net/)[0]}\/Contact`));
									}catch(error){
										return reject(error);
									}
								}
							));
							break;
						case /^https?:\/\/skeb\.jp\/\@.*/.test(url):
							promiseList.push(new Promise(
								async function(resolve, reject){
									try{
										return resolve(await whenSkeb(url.replace(/^https?:\/\/skeb\.jp\/\@/,'')));
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
				if(promiseList.length > 0){
					await Promise.any(promiseList).then((value) => {tmpPixivUrl = value}).catch(() => {tmpPixivUrl = undefined});
					if(!pixivUrlRegex.test(tmpPixivUrl))return null;
					return tmpPixivUrl.replace(/^https?/,'https').replace(/(\/|\\)$/,'');
				}
			}
			return null;
			async function whenGeneral(targetUrl){
				const response = await request({url: targetUrl.replace(/^https?/,"https"), respType: 'text'});
				//debug({url: targetUrl, response:response});
				const urlRegex = /https?:\/\/(?:www\.|touch\.)?pixiv\.net\/[^\s"'<>\\]+|https?:\/\/[^\s"'<>\\]*\.fanbox\.cc\/?[^\s"'<>\\]*/g;
				const tmpUrl = (response.match(urlRegex) || []);
				const pixivUrl = tmpUrl.find(function(element){return element.match(pixivUrlRegex)});
				if(pixivUrl)return pixivUrl;
				const fanboxUrl = tmpUrl.find(function(element){return element.match(fanboxUrlRegex)});
				if(fanboxUrl)return await whenFanbox(fanboxUrl);
				throw new Error("not found");
			}
			async function whenFanbox(targetUrl){
				if(targetUrl.match(/^https?:\/\/www\.pixiv\.net\/fanbox\/creator\/[0-9]*/))return targetUrl.replace('fanbox/creator', 'users');
				let fanboxName = targetUrl.match(/https?:\/\/(?:www\.)?(?:fanbox\.cc\/@([^\/]+)|([^\.]+)\.fanbox\.cc)/);
				fanboxName = fanboxName[1] || fanboxName[2];
				const headers = {
					"Host": 'api.fanbox.cc',
					"Origin": `https://${fanboxName}.fanbox.cc`
				};
				const response = await request({url: `https://api.fanbox.cc/creator.get?creatorId=${fanboxName}`, headers: headers, onlyResponse: false});
				if(response.status == "404")throw new Error("not found");
				const pixivUrl = findMatchFromArray(response.response.body.profileLinks, pixivUrlRegex, true);
				return (pixivUrl ? pixivUrl : `https://www.pixiv.net/users/${response.response.body.user.userId}`);
			}
			async function whenPixivSketch(targetUrl){
				const response = await request({url: targetUrl});
				const pixivId = response.match(/\\"pixiv_user_id\\":\\"([\d]+)\\"/);
				if(!pixivId)throw new Error("not found");
				return `https://www.pixiv.net/users/${pixivId[1]}`;
			}
			async function whenSkeb(target){
				const headers = {
					"Referer": `https://skeb.jp/@${target}`,
					"Alt-Used": 'skeb.jp',
					"Authorization": 'Bearer null'
				};
				const response = await request({url: `https://skeb.jp/api/users/${target}`, headers: headers});
				const pixivId = response.pixiv_id;
				if(!pixivId)throw new Error("not found");
				return `https://www.pixiv.net/users/${pixivId}`;
			}
		}
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


	function customAlert(message){
		const overlay = document.createElement('div');
		overlay.className = 'MTLU_alert MTLU_container';
		overlay.style.position = 'fixed';
		overlay.style.top = '0';
		overlay.style.left = '0';
		overlay.style.width = '100%';
		overlay.style.height = '100%';
		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		overlay.style.zIndex = '9999';

		const alertBox = document.createElement('div');
		alertBox.style.position = 'absolute';
		alertBox.style.top = '50%';
		alertBox.style.left = '50%';
		alertBox.style.transform = 'translate(-50%, -50%)';
		alertBox.style.padding = '20px';
		alertBox.style.backgroundColor = 'white';
		alertBox.style.border = '1px solid black';
		alertBox.style.zIndex = '10000';

		const alertMessage = document.createElement('p');
		alertMessage.style.color = 'black';
		alertMessage.innerHTML = message;

		const closeButton = document.createElement('button');
		closeButton.textContent = envText.makeTwitterLittleUseful.close;
		closeButton.addEventListener('click', () => {
			document.body.removeChild(overlay);
		});

		alertBox.appendChild(alertMessage);
		alertBox.appendChild(closeButton);
		overlay.appendChild(alertBox);
		document.body.appendChild(overlay);
	}
	async function displayToast(text, time = 2000){
		try{
			// メインのコンテナを作成
			const toastContainer = document.createElement('div');
			toastContainer.setAttribute("cta-id", "custom-alert");

			// メインのスタイルを設定
			Object.assign(toastContainer.style, {
				position: 'fixed',
				left: '50%',
				bottom: '0px',
				transform: 'translateX(-50%)',
				pointerEvents: 'none',
				backfaceVisibility: 'hidden',
				zIndex: 100000,
				display: 'flex',
				justifyContent: 'center',
				width: '100%',
				maxWidth: '600px',
			});

			// 実際のアラートを表示するdiv
			const alertBox = document.createElement('div');
			Object.assign(alertBox.style, {
				display: 'flex',
				alignItems: 'center',
				backgroundColor: 'rgb(29, 155, 240)',
				justifyContent: 'space-between',
				pointerEvents: 'auto',
				alignSelf: 'center',
				transitionProperty: 'opacity',
				transitionDuration: '170ms',
				transitionTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
				opacity: '1',
				padding: '12px',
				borderRadius: '4px',
				marginBottom: '32px',
				color: 'rgb(255, 255, 255)',  // 白い文字
				overflowWrap: 'break-word',
				fontSize: '1em',
				lineHeight: '1.25em',
				flexShrink: '1',
			});

			// テキストを表示するdiv
			const textNode = document.createElement('span');
			textNode.textContent = text;

			alertBox.appendChild(textNode);
			toastContainer.appendChild(alertBox);
			document.querySelector('body').appendChild(toastContainer);
			await sleep(time);
			toastContainer.remove();
		}catch(error){
			console.error(error);
		}finally{
			const node = document.querySelector('[cta-id="custom-alert"]');
			if(node)node.remove();
		}
	}

	function createTweetTextElement(tweetData, appendNavigate = true){
		if(!tweetData)return null;
		const isNoteTweet = !!tweetData.note_tweet?.note_tweet_results?.result;
		let tweetBodyText, hashtags, urls, mentions, symbols;
		if(isNoteTweet){
			const data = tweetData.note_tweet.note_tweet_results.result;
			tweetBodyText = data.text;
			hashtags = data.entity_set.hashtags || [];
			urls = data.entity_set.urls || [];
			mentions = data.entity_set.user_mentions || [];
			symbols = data.entity_set.symbols || [];
		}else{
			const data = tweetData.legacy || tweetData;
			tweetBodyText = data.full_text;
			hashtags = data.entities.hashtags || [];
			urls = data.entities.urls || [];
			mentions = data.entities.user_mentions || [];
			symbols = data.entities.symbols || [];
		}
		const mediaUrls = (tweetData.legacy?.extended_entities?.media || tweetData.extended_entities?.media || []).map(media => media.url);
		mediaUrls.forEach(mediaUrl => {
			tweetBodyText = tweetBodyText?.replace(mediaUrl, '');
		});
		if(!tweetBodyText)return null;
		let tweetBodyArray = Array.from(tweetBodyText);
		const currentTimeMillis = new Date().getTime();
		const tagStart = `tagStart${currentTimeMillis}`;
		const tagEnd = `tagEnd${currentTimeMillis}`;
		const ampersand = `ampersand${currentTimeMillis}`;
		const doubleQuote = `doubleQuote${currentTimeMillis}`;
		const singleQuote = `singleQuote${currentTimeMillis}`;
		let combined = [].concat(
			hashtags.map(tag => ({
				type: 'hashtag',
				indices: tag.indices,
				text: tag.text
			})),
			mentions.map(mention => ({
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
		combined.sort((a, b) => b.indices[0] - a.indices[0]);
		combined.forEach(item => {
			let replacement;
			switch(item.type){
				case 'hashtag':
					replacement = `<a class="${envSelector.link.nomal}" text="${item.text}" style="color:rgb(29, 155, 240)" dir="ltr" role="link" href="https://twitter.com/hashtag/${item.text}" target="_blank" rel="noopener nofollow" usenavigate="${appendNavigate}">#${item.text}</a>`;
					break;
				case 'mention':
					replacement = `<a class="${envSelector.link.nomal}" text="${item.text}" style="color:rgb(29, 155, 240)" dir="ltr" role="link" href="https://twitter.com/${item.text}" target="_blank" rel="noopener nofollow" usenavigate="${appendNavigate}">@${item.text}</a>`;
					break;
				case 'symbol':
					replacement = `<a class="${envSelector.link.nomal}" text="${item.text}" style="color:rgb(29, 155, 240)" dir="ltr" role="link" href="https://twitter.com/search?q=%24${item.text}&src=cashtag_click" target="_blank" rel="noopener nofollow" usenavigate="${appendNavigate}">$${item.text}</a>`;
					break;
			}
			replacement = replacement.replace(/</gu, `${tagStart}`)
				.replace(/>/gu, `${tagEnd}`)
				.replace(/&/gu, `${ampersand}`)
				.replace(/"/gu, `${doubleQuote}`)
				.replace(/'/gu, `${singleQuote}`);
			const [start, end] = item.indices;
			tweetBodyArray.splice(start, end - start, ...Array.from(replacement));
		});
		tweetBodyText = tweetBodyArray.join('');
		const seen = new Set();
		urls.filter(target => !seen.has(target.url) && seen.add(target.url)).forEach(target =>{
			const link = `<a class="${envSelector.link.nomal}" style="color:rgb(29, 155, 240)" dir="ltr" role="link" href="${target.url}" target="_blank" rel="noopener noreferrer nofollow">${target.display_url}</a>`.replace(/</gu, `${tagStart}`)
				.replace(/>/gu, `${tagEnd}`)
				.replace(/&/gu, `${ampersand}`)
				.replace(/"/gu, `${doubleQuote}`)
				.replace(/'/gu, `${singleQuote}`);
			tweetBodyText = tweetBodyText.replace(new RegExp(`${target.url}(?=(\\s|$|\\u3000|\\W)(?!\\.|,))`, 'gu'), link);
		});
		tweetBodyText = escapeHTML(tweetBodyText);
		tweetBodyText = tweetBodyText.replace(new RegExp(tagStart, 'g'), '<')
			.replace(new RegExp(tagEnd, 'g'), '>')
			.replace(new RegExp(ampersand, 'g'), '&')
			.replace(new RegExp(doubleQuote, 'g'), '"')
			.replace(new RegExp(singleQuote, 'g'), "'");
		const newTweetBody = document.createElement('div');
		newTweetBody.className = 'css-901oao css-16my406 r-1qd0xha r-bcqeeo r-qvutc0';
		newTweetBody.innerHTML = tweetBodyText;
		newTweetBody.querySelectorAll('a[usenavigate="true"]').forEach(a=>{
			a.addEventListener('click',(e)=>{
				e.preventDefault();
				navigateTo(new URL(a.href, location.origin).pathname);
			});
		});
		return newTweetBody;
	}

	function createTweetNode(tweetData){
		const tweetUserData = tweetData.core?.user_results?.result || tweetData.user?.result ||tweetData.user;
		const tweetMainData = tweetData.legacy || tweetData;
		const verifiedBadge = tweetUserData.legacy?.is_blue_verified ? (tweetUserData.legacy?.verified_type ? tweetUserData.legacy?.verified_type: "Blue") : null;
		const tweetNode = new TweetNodeBuilder({
			screenName: tweetUserData.core?.screen_name || tweetUserData.legacy?.screen_name || tweetUserData.screen_name,
			tweetId: tweetMainData.id_str,
		})
		.setAvatar({
			iconURL:  tweetUserData.avatar?.image_url || tweetUserData.legacy?.profile_image_url_https || tweetUserData.profile_image_url_https,
			shape: tweetUserData.profile_image_shape
		})
		.setAuthor({
			name: tweetUserData.core?.name || tweetUserData.legacy?.name || tweetUserData.name,
			isProtected: tweetUserData.legacy?.protected || tweetUserData.protected,
			verifiedBadge: verifiedBadge,
			affiliatesBadge: tweetUserData.affiliates_highlighted_label?.label ? tweetUserData.affiliates_highlighted_label.label.badge?.url : null,
			createdAt: tweetMainData.created_at,
		})
		.setFooter({
			replyCount: tweetMainData.reply_count,
			retweetCount: tweetMainData.retweet_count,
			quoteCount: tweetMainData.quote_count,
			favoriteCount: tweetMainData.favorite_count,
			retweeted: tweetMainData.retweeted,
			favorited: tweetMainData.favorited,
			bookmarked: tweetMainData.bookmarked,
			analyticsCount: tweetData.views ? tweetData.views.count : 0,
		});
		const tweetTextElement = createTweetTextElement(tweetData);
		if(tweetTextElement)tweetNode.setText(tweetTextElement);
		const tweetMedias = tweetMainData.extended_entities?.media?.map(media => {
			if(media.type === 'photo'){
				return {
					type: 'photo',
					media: media.media_url_https,
					size: media.original_info
				};
			}else{
				const videoSources = media.video_info.variants
					.filter(variant => variant.content_type === "video/mp4")
					.sort((a, b) => b.bitrate - a.bitrate)
					.map(variant => ({ src: variant.url }));
				return {
					type: media.type,
					size: media.original_info,
					videoData: {
						thumbnails: media.media_url_https,
						source: {
							src: videoSources[0].src,
						},
						otherSources: videoSources,
					}
				};
			}
		}) || [];
		if(tweetMedias.length > 0)tweetNode.setMedia(tweetMedias);
		return tweetNode.build();
	}


	async function multiPartDownload(url, numChunks = 6){
		try{
			const fileSize = await getFileSize(url);
			if(fileSize === undefined){
				console.log('File size could not be determined, downloading entire file.');
				const response = await request({ url, respType: 'blob' });
				return response.response;
			}
			const minChunkSize = 500 * 1024; // 500KB
			if(fileSize / numChunks < minChunkSize){
				numChunks = Math.ceil(fileSize / minChunkSize);
			}

			// チャンクのサイズを計算
			const baseChunkSize = Math.floor(fileSize / numChunks);
			const remainder = fileSize % numChunks;
			const promises = [];

			let start = 0;
			for(let i=0; i<numChunks; i++){
				const extra = i < remainder ? 1 : 0;
				const end = start + baseChunkSize + extra - 1;
				if(start < fileSize){
					promises.push(downloadChunk(url, start, end));
				}
				start = end + 1;
			}
			const chunks = await Promise.all(promises);

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

	async function createSettingsPage(){
		if(document.querySelector('[mtlu-id="settingsPage"]'))return;
		document.body.style.overflow = 'hidden';
		const isPC = !(isMobileDevice());
		const isMobile = (isMobileDevice());
		const pages = {nodes:[], selecing:{name: "", node: null}};
		const settingTargetsArray = [
			{
				targetName: "makeTwitterLittleUseful",
				displayName: envText.makeTwitterLittleUseful.settings.displayName,
				pageGenerateFunction: createMakeTwitterLittleUsefulSettingsPage,
				settingsNode: null,
				isFunction: false
			},
			{
				targetName: "webhookBringsTweetsToDiscord",
				displayName: envText.webhookBringsTweetsToDiscord.settings.displayName,
				pageGenerateFunction: createWebhookBringsTweetsToDiscordSettingsPage,
				settingsNode: null,
				isFunction: true,
				specificSave: ()=>{}
			},
			{
				targetName: "quickShareTweetLink",
				displayName: envText.quickShareTweetLink.settings.displayName,
				pageGenerateFunction: createQuickShareTweetLinkSettingsPage,
				settingsNode: null,
				isFunction: true,
			},
			{
				targetName: "showAllMedias",
				displayName: envText.showAllMedias.settings.displayName,
				pageGenerateFunction: createShowAllMediasSettingsPage,
				settingsNode: null,
				isFunction: true,
			},
			{
				targetName: "helloTweetWhereAreYouFrom",
				displayName: envText.helloTweetWhereAreYouFrom.settings.displayName,
				pageGenerateFunction: createHelloTweetWhereAreYouFromSettingsPage,
				settingsNode: null,
				isFunction: true,
			},
			{
				targetName: "customizeMenuButton",
				displayName: envText.customizeMenuButton.settings.displayName,
				pageGenerateFunction: createcustomizeMenuButtonSettingsPage,
				settingsNode: null,
				isFunction: true,
				forPC: true,
				specificSave: ()=>{}
			},
			{
				targetName: "advance",
				displayName: envText.advance.settings.displayName,
				pageGenerateFunction: createAdvanceSettingsPage,
				settingsNode: null,
				isFunction: false,
				needSave: false
			},
			{
				targetName: "forDebug",
				displayName: envText.forDebug.settings.displayName,
				pageGenerateFunction: createForDebugSettingsPage,
				settingsNode: null,
				isFunction: false,
				needSave: false
			}
		];

		const settingTargets = settingTargetsArray.reduce((acc, target) => {
			if((target.forPC && !isPC) || (target.forMobile && !isMobile)){
				return acc;
			}
			acc[target.targetName] = target;
			return acc;
		}, {});

		const documentRoot = await waitElementAndGet({query: 'body', searchFunction: 'querySelector'});
		const fragment = document.createDocumentFragment();
		const settingsPage = document.createElement('div');
		settingsPage.className = 'MTLU_settingsPage MTLU_container';
		settingsPage.setAttribute('mtlu-id', "settingsPage");
		settingsPage.style.position = 'fixed';
		settingsPage.style.width = '100%';
		settingsPage.style.height = '100%';
		settingsPage.style.backgroundColor = colors.get('backgroundColor');
		settingsPage.style.zIndex = '9990';
		settingsPage.style.display = 'flex';
		settingsPage.style.top = '0';
		settingsPage.style.left = '0';
		//settingsPage.style.color = "white";
		settingsPage.style.flexDirection = 'column';
		settingsPage.style.lineHeight = "normal";
		settingsPage.style.fontSize = "87.5%";
		settingsPage.style.color = colors.get('fontColor');
		fragment.appendChild(settingsPage);

		const headerContainer = document.createElement('div');
		headerContainer.setAttribute('mtlu-id', "headerContainer");
		headerContainer.style.width = "100%";
		headerContainer.style.height = "15%";
		headerContainer.style.display = 'flex';
		headerContainer.style.borderBottom = `2px solid ${colors.get('borderColor')}`;
		headerContainer.style.justifyContent = 'center';  // 水平方向の中央揃え
		const headerContainerElement = settingsPage.appendChild(headerContainer);

		const headerTextContainer = document.createElement('div');
		headerTextContainer.setAttribute('mtlu-id', "headerTextContainer");
		headerTextContainer.style.width = "100%";
		headerTextContainer.style.height = "100%";
		headerTextContainer.style.display = "flex";
		headerTextContainer.style.justifyContent = "center";  // 水平方向の中央揃え

		const headerText = document.createElement('span');
		headerText.style.textAlign = "center";  // テキストを中央揃えにする
		headerText.style.height = "100%";
		headerText.style.fontSize = "2.5em";
		headerText.innerText = envText.makeTwitterLittleUseful.settings.displayName;

		headerTextContainer.appendChild(headerText);
		headerContainer.append(headerTextContainer);

		// メインコンテナの作成
		const mainContainer = document.createElement('div');
		mainContainer.setAttribute('mtlu-id', "mainContainer");
		mainContainer.style.width = "100%";
		mainContainer.style.height = "100%";
		mainContainer.style.display = "flex";
		mainContainer.style.maxHeight = "85vh";
		const mainContainerElement = settingsPage.appendChild(mainContainer);

		const closeButton = document.createElement('button');
		closeButton.textContent = '✖'; // バツマーク
		closeButton.style.position = 'absolute';
		closeButton.style.top = '5px';
		closeButton.style.right = '5px';
		closeButton.style.width = '2vw'; // 横幅の2%
		closeButton.style.height = '2vw'; // 高さも横幅の2%に設定
		closeButton.style.borderRadius = '50%'; // 丸いボタン
		closeButton.style.border = 'none';
		closeButton.style.backgroundColor = 'rgba(255, 0, 0, 1.0)'; // 赤い背景
		closeButton.style.color = 'white';
		closeButton.style.fontSize = '20px';
		closeButton.style.cursor = 'pointer';
		closeButton.style.minWidth = "30px";
		closeButton.style.minHeight = "30px";

		// バツマークボタンをクリックしたらオーバーレイを削除する
		closeButton.addEventListener('click', function(){
			document.body.style.overflow = '';
			settingsPage.remove();
		});

		settingsPage.appendChild(closeButton);

		const saveButton = document.createElement('button');
		saveButton.style.backgroundColor = 'rgba(0, 150, 250, 1.0)';
		saveButton.style.width = "4vw";
		saveButton.style.height = "4vw";
		saveButton.style.cursor = 'pointer';
		saveButton.style.minWidth = "60px";
		saveButton.style.minHeight = "60px";
		saveButton.style.borderRadius = '50%';
		saveButton.style.border = 'none';
		saveButton.style.position = 'fixed';
		saveButton.style.bottom = '8vh';
		saveButton.style.right = '4vw';
		saveButton.style.display = 'flex';
		saveButton.style.alignItems = 'center';
		saveButton.style.justifyContent = 'center';
		const saveIconPath = "M606.157,120.824L489.908,4.575c-2.46-2.46-6.612-4.152-10.764-4.152H434.32H175.988H40.672 C18.222,0.423,0,18.721,0,41.095v529.734c0,22.45,18.298,40.672,40.672,40.672h86.341h368.661h75.577 c22.45,0,40.672-18.299,40.672-40.672V131.665C611.077,128.359,609.463,124.207,606.157,120.824z M419.328,31.177v136.162 c0,0.846-0.846,0.846-0.846,0.846h-42.363V31.177H419.328z M344.596,31.177v137.008H192.595c-0.846,0-0.846-0.846-0.846-0.846 V31.177H344.596z M141.929,580.9V390.688c0-35.674,29.062-64.737,64.737-64.737h208.434c35.674,0,64.737,29.062,64.737,64.737 v190.135H141.929V580.9z M580.401,570.905c0,4.997-4.152,9.995-9.995,9.995h-59.816V390.688c0-52.281-43.209-95.49-95.49-95.49 H207.511c-52.281,0-95.49,43.209-95.49,95.49v190.135H40.595c-4.997,0-9.995-4.152-9.995-9.995V41.095 c0-4.997,4.152-9.995,9.995-9.995h120.401v136.162c0,17.453,14.147,31.523,31.523,31.523h225.886 c17.453,0,31.523-14.147,31.523-31.523V31.177h23.219l107.1,107.1L580.401,570.905L580.401,570.905z M422.634,490.33 c0,8.304-6.612,14.916-14.916,14.916H217.506c-8.304,0-14.916-6.612-14.916-14.916c0-8.303,6.612-14.916,14.916-14.916h189.289 C415.945,475.415,422.634,482.027,422.634,490.33z M422.634,410.678c0,8.303-6.612,14.916-14.916,14.916H217.506 c-8.304,0-14.916-6.612-14.916-14.916s6.612-14.916,14.916-14.916h189.289C415.945,394.84,422.634,401.529,422.634,410.678z";
		const saveSvg = createSvgElement(saveIconPath, "0 0 611.923 611.923");
		saveSvg.svg.style.width = "70%";
		saveSvg.svg.style.height = "70%";
		saveButton.appendChild(saveSvg.svg);
		saveButton.addEventListener('click',()=>{retrieveSettings()});
		settingsPage.appendChild(saveButton);

		// navigationContainerの作成
		const navigationContainer = document.createElement('div');
		navigationContainer.setAttribute('mtlu-id', "navigationContainer");
		navigationContainer.style.width = (isPC ? "calc(30% - 2px)" : "70vw");
		navigationContainer.style.height = "100%";
		navigationContainer.style.display = "flex";
		navigationContainer.style.flexDirection = "column";
		navigationContainer.style.overflowY = "auto";  // 縦にスクロール可能
		navigationContainer.style.overflowX = "hidden"; // 横スクロールを防ぐ
		navigationContainer.style.overflowWrap = "break-word"; // テキストの折り返しを設定
		navigationContainer.style.borderRight = isPC ? `2px solid ${colors.get('borderColor')}` : "";
		if(isMobile){
			navigationContainer.style.left = "-70vw"; // モバイル版では画面外
			navigationContainer.style.position = "fixed"; // 固定
			navigationContainer.style.bottom = "0";
			navigationContainer.style.transition = "transform 0.1s ease"; // アニメーション用
			navigationContainer.style.zIndex = '10000';
			navigationContainer.style.backgroundColor = colors.get('backgroundColor');
		}
		const navigationContainerElement = mainContainerElement.appendChild(navigationContainer);

		const settingContainerWrapper = document.createElement("div");
		settingContainerWrapper.setAttribute('mtlu-id', "settingContainerWrapper");
		settingContainerWrapper.style.width = (isPC ? "40%" : "100%");
		settingContainerWrapper.style.height = "calc(100% - 4px)";
		settingContainerWrapper.style.borderRight = isPC ? `2px solid ${colors.get('borderColor')}` : "";
		mainContainerElement.appendChild(settingContainerWrapper);
		documentRoot.appendChild(fragment);

		let hidemobileNavigationOverlay;
		if(isMobile){
			// ナビゲーションメニューの表示・非表示を切り替えるボタン(モバイル用)
			const toggleNavButton = document.createElement('button');
			toggleNavButton.style.margin = "10px";
			toggleNavButton.style.height = (headerContainer.offsetHeight * (2/5)) + "px";
			toggleNavButton.style.width = (headerContainer.offsetHeight * (2/5)) + "px";
			toggleNavButton.style.display = "flex"; // フレックスボックスで配置
			toggleNavButton.style.alignItems = "center"; // 垂直方向の中央揃え
			toggleNavButton.style.justifyContent = "center"; // 水平方向の中央揃え
			toggleNavButton.style.position = "fixed";
			toggleNavButton.style.top = "3em";
			toggleNavButton.style.left = "10px";
			const toggleNavButtonElement = headerContainer.appendChild(toggleNavButton);
			// SVGアイコンを作成してボタンに追加
			const toggleSvg = createSvgElement("M4 7a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM5 16a1 1 0 100 2h14a1 1 0 100-2H5z", "0 0 24 24");

			// SVGをボタンに追加
			toggleNavButtonElement.appendChild(toggleSvg.svg);


			// モバイル用オーバーレイを作成（非表示にする）
			const mobileNavigationOverlay = document.createElement('div');
			mobileNavigationOverlay.setAttribute('mtlu-id', 'mobileNavigationOverlay');
			mobileNavigationOverlay.style.position = 'fixed';
			mobileNavigationOverlay.style.bottom = '0';
			mobileNavigationOverlay.style.left = '0';
			mobileNavigationOverlay.style.width = '100%';
			mobileNavigationOverlay.style.height = '100%';
			mobileNavigationOverlay.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
			mobileNavigationOverlay.style.zIndex = '9998'; // ナビゲーションの後ろに配置
			mobileNavigationOverlay.style.display = 'none'; // 初期は非表示
			settingsPage.appendChild(mobileNavigationOverlay);

			// navigationContainerをスライドさせるボタンのクリックイベント
			toggleNavButton.addEventListener('click', function(){
				// モバイル版でオーバーレイを表示してナビゲーションをスライド
				mobileNavigationOverlay.style.display = 'block';
				navigationContainer.style.transform = "translateX(70vw)"; // 70vw右にスライド
			});
			hidemobileNavigationOverlay = function (){
				navigationContainer.style.transform = "translateX(0)"; // ナビゲーションを元に戻す
				mobileNavigationOverlay.style.display = 'none'; // オーバーレイを非表示
			}
			// オーバーレイをクリックしてナビゲーションを戻す
			mobileNavigationOverlay.addEventListener('click', hidemobileNavigationOverlay);
		}
		function createNavigationMenu(){
			const menuContainerStatus = {nodes: {}, selecting: {name: null, node: null}};
			for(let key of Object.keys(settingTargets)){
				const currentTarget = settingTargets[key];
				const menuContainer = document.createElement("div");
				menuContainer.setAttribute('mtlu-id', 'menuContainer');
				menuContainer.setAttribute('menuContainerStatus', 'unselect');//unselect or selecting
				menuContainer.setAttribute('target', key);
				menuContainer.style.width = "calc(100% - 2px)";
				menuContainer.style.height = "4em";
				menuContainer.style.minHeight = "4em";
				menuContainer.style.borderBottom = `2px solid ${colors.get('borderColor')}`;
				menuContainer.style.borderRight = `2px solid ${colors.getWithAlpha('twitterBlue', 0.0)}`;
				menuContainer.style.transitionDuration = "0.2s";
				menuContainer.style.display = "flex";
				if(isPC){
					menuContainer.addEventListener('mouseover',function(){
						menuContainer.style.backgroundColor = colors.get('menuHoverEffect');
					});
					menuContainer.addEventListener('mouseout',function(){
						if(menuContainerStatus.selecting.name === key)return;
						menuContainer.style.backgroundColor = '';
					});
				}
				const navigationMenutextContainer = document.createElement("div");
				navigationMenutextContainer.setAttribute('mtlu-id', 'navigationMenutextContainer');
				navigationMenutextContainer.style.width = "85%";
				navigationMenutextContainer.style.height = "100%"; // 高さは100%に設定
				navigationMenutextContainer.style.display = "flex"; // フレックスボックスにする
				navigationMenutextContainer.style.alignItems = "center"; // 垂直方向の中央揃え
				navigationMenutextContainer.style.justifyContent = "flex-start"; // 水平方向は左揃え
				const navigationMenutextContainerElement = menuContainer.appendChild(navigationMenutextContainer);

				const arrowIconContainer = document.createElement("div");
				arrowIconContainer.setAttribute('mtlu-id', 'arrowIconContainer');
				arrowIconContainer.style.color = colors.get('fontColorDark');
				arrowIconContainer.style.display = "flex"; // フレックスボックスにする
				arrowIconContainer.style.justifyContent = "center"; // 水平方向の中央揃え
				arrowIconContainer.style.alignItems = "center"; // 垂直方向の中央揃え
				arrowIconContainer.style.height = "100%"; // 親要素の高さいっぱいにする
				arrowIconContainer.style.width = `calc(100% - ${navigationMenutextContainer.style.width})`;
				const arrowIcon = createSvgElement('M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z').svg;
				arrowIcon.style.width = "2em";
				arrowIcon.style.height = "2em";
				arrowIconContainer.appendChild(arrowIcon);
				const arrowIconContainerElement = menuContainer.appendChild(arrowIconContainer);

				const navigationMenutext = document.createElement('span');
				navigationMenutext.setAttribute('mtlu-id', 'navigationMenutext');
				navigationMenutext.style.width = "100%";
				navigationMenutext.style.height = "auto";
				navigationMenutext.style.margin = "0 0 0 5%";
				navigationMenutext.style.fontSize = "1.5em";
				navigationMenutext.style.lineHeight = "1.2";
				navigationMenutext.style.userSelect = 'none';
				navigationMenutext.innerText = envText[currentTarget.targetName].settings.displayName;
				const navigationMenutextElement = navigationMenutextContainer.appendChild(navigationMenutext);

				menuContainer.addEventListener('click',function(){
					changeTarget(key);
				});

				const menuContainerElement = navigationContainer.appendChild(menuContainer);
				menuContainerStatus.nodes[key] = menuContainerElement;
			}
			menuContainerStatus.selecting.node = menuContainerStatus.nodes.makeTwitterLittleUseful;
			menuContainerStatus.selecting.name = settingTargets.makeTwitterLittleUseful.targetName;
			menuContainerStatus.nodes.makeTwitterLittleUseful.style.borderRight = `2px solid ${colors.getWithAlpha('twitterBlue', 1.0)}`;
			menuContainerStatus.nodes.makeTwitterLittleUseful.style.backgroundColor = colors.get('menuHoverEffect');
			function changeTarget(key){
				if(menuContainerStatus.selecting.name === key)return;
				const currentDisplaySettingPage = settingTargets[menuContainerStatus.selecting.name].settingsNode;
				currentDisplaySettingPage.style.zIndex = "-1";
				currentDisplaySettingPage.style.display = "none";
				const nextDisplaySettingsPage = settingTargets[key].settingsNode;
				nextDisplaySettingsPage.style.zIndex = "auto";
				nextDisplaySettingsPage.style.display = "flex";

				menuContainerStatus.selecting.node.setAttribute('menuContainerStatus', 'unselect');
				menuContainerStatus.selecting.node.style.backgroundColor = '';
				menuContainerStatus.selecting.node.style.borderRight = `2px solid ${colors.getWithAlpha('twitterBlue', 0.0)}`;

				menuContainerStatus.selecting.node = menuContainerStatus.nodes[key];
				menuContainerStatus.selecting.name = key;

				menuContainerStatus.selecting.node.setAttribute('menuContainerStatus', 'selecting');
				menuContainerStatus.selecting.node.style.backgroundColor = colors.get('menuHoverEffect');
				menuContainerStatus.selecting.node.style.borderRight = `2px solid ${colors.getWithAlpha('twitterBlue', 1.0)}`;
				headerText.innerText = envText[key].settings.displayName;
				if(isMobile)hidemobileNavigationOverlay();
			}
		}
		createNavigationMenu();
		/*
		function createHogehogeSettingsPage(){
			const settingsTarget = settingTargets.hogehoge;
			const scriptSetting = scriptSettings.hogehoge;
			const page = createSettingsPageTemplate(settingsTarget.targetName);
			const settingEntries = [
				{id: 'fuga', name: "fuga", type: 'text', text: "hogehogehogehoge", size: "1em", weight: "400", position: "left", isHTML: false},
				{id: key, catagory: "ctName.sub", name: settingTargets[key].displayName, type: 'toggleSwitch'},

			];
			for(let i=0;i<settingEntries.length;i++){
				page.appendChild(createSettingsElement(settingEntries[i], scriptSetting).container);
			}
			return page;
		}
		*/
		function createMakeTwitterLittleUsefulSettingsPage(){
			const settingsTarget = settingTargets.makeTwitterLittleUseful;
			scriptSettings.makeTwitterLittleUseful.displayChangelog = scriptSettings.makeTwitterLittleUseful.displayChangelog === undefined ? true : scriptSettings.makeTwitterLittleUseful.displayChangelog;
			const scriptSetting = scriptSettings.makeTwitterLittleUseful;
			const settingText = envText.makeTwitterLittleUseful.settings;
			const page = createSettingsPageTemplate(settingsTarget.targetName);
			const settingEntries = [
				{id: 'functionsToggle', type: 'text', text: settingText.functionsToggle, size: "2.5em", weight: "400", position: "left", isHTML: false},
				...Object.keys(functions)
					.map(key => {
						const func = functions[key];
						if((func.forPC ? isPC : true && func.forMobile ? isMobile : true)){
							return {id: key, name: envText[key].settings.displayName, type: 'toggleSwitch', category: "featuresToggle"}
						}
						return null;
				}).filter(item => item !== null),
				{id: 'functionsToggleFinBorder', type: 'border'},
				{type: 'text', text: settingText.language, size: "3em", weight: "400", position: "left", isHTML: false},
				{id: 'language', type: 'dropdown', option: Object.keys(Text).map(key => ({value: key, displayName: key}))},
				{type: 'text', text: settingText.uiTextType, size: "3em", weight: "400", position: "left", isHTML: false},
				{id: 'uiTextType', type: 'dropdown', option: ["old", "new"].map(key => ({value: key, displayName: key}))},
				{type: 'border', margin: "2em 0 0 0"},
				{id: 'displayChangelog', type: 'toggleSwitch', name: settingText.displayChangelog},
			];
			for(let i=0;i<settingEntries.length;i++){
				page.appendChild(createSettingsElement(settingEntries[i], scriptSetting).container);
			}
			page.querySelectorAll('div[category="featuresToggle"][type="toggleSwitch"]').forEach(e=>{
				const path1 = "M396.138,85.295c-13.172-25.037-33.795-45.898-59.342-61.03C311.26,9.2,280.435,0.001,246.98,0.001 c-41.238-0.102-75.5,10.642-101.359,25.521c-25.962,14.826-37.156,32.088-37.156,32.088c-4.363,3.786-6.824,9.294-6.721,15.056 c0.118,5.77,2.775,11.186,7.273,14.784l35.933,28.78c7.324,5.864,17.806,5.644,24.875-0.518c0,0,4.414-7.978,18.247-15.88 c13.91-7.85,31.945-14.173,58.908-14.258c23.517-0.051,44.022,8.725,58.016,20.717c6.952,5.941,12.145,12.594,15.328,18.68 c3.208,6.136,4.379,11.5,4.363,15.574c-0.068,13.766-2.742,22.77-6.603,30.442c-2.945,5.729-6.789,10.813-11.738,15.744 c-7.384,7.384-17.398,14.207-28.634,20.479c-11.245,6.348-23.365,11.932-35.612,18.68c-13.978,7.74-28.77,18.858-39.701,35.544 c-5.449,8.249-9.71,17.686-12.416,27.641c-2.742,9.964-3.98,20.412-3.98,31.071c0,11.372,0,20.708,0,20.708 c0,10.719,8.69,19.41,19.41,19.41h46.762c10.719,0,19.41-8.691,19.41-19.41c0,0,0-9.336,0-20.708c0-4.107,0.467-6.755,0.917-8.436 c0.773-2.512,1.206-3.14,2.47-4.668c1.29-1.452,3.895-3.674,8.698-6.331c7.019-3.946,18.298-9.276,31.07-16.176 c19.121-10.456,42.367-24.646,61.972-48.062c9.752-11.686,18.374-25.758,24.323-41.968c6.001-16.21,9.242-34.431,9.226-53.96 C410.243,120.761,404.879,101.971,396.138,85.295z";
				const path2 = "M228.809,406.44c-29.152,0-52.788,23.644-52.788,52.788c0,29.136,23.637,52.772,52.788,52.772 c29.136,0,52.763-23.636,52.763-52.772C281.572,430.084,257.945,406.44,228.809,406.44z";
				const descriptionContainer = document.createElement('div');
				Object.assign(descriptionContainer.style, {
					position: "relative",
					display: "flex",
					left: "-20px",
				});

				const svg = createSvgElement([path1, path2], "0 0 512 512").svg;
				Object.assign(svg.style, {
					width: "1.5em",
					height: "1.5em",
					marginLeft: "1em",
				});

				const description = document.createElement('div');
				description.textContent = envText[e.getAttribute('settingID')].settings.description;
				Object.assign(description.style, {
					position: 'fixed',
					transform: 'translateX(-50%)',
					backgroundColor: 'rgba(0, 0, 0, 0.75)',
					color: colors.get('fontColor'),
					padding: '5px',
					borderRadius: '5px',
					whiteSpace: 'nowrap',
					display: 'none',
					zIndex: '20000',
				});

				svg.addEventListener('mouseenter', () => {
					appearDescription();
				});

				svg.addEventListener('mouseleave', () => {
					disappearDescription();
				});

				svg.addEventListener('click', () => {
					if(description.style.display === 'block'){
						disappearDescription();
					}else{
						appearDescription();
					}
				});
				svg.addEventListener('touchstart', (e) => {
					e.preventDefault();
					if(description.style.display === 'block'){
						disappearDescription();
					}else{
						appearDescription();
					}
				});
				function appearDescription(){
					settingsPage.addEventListener('click', disappearDescription, {once: true});
					const rect = svg.getBoundingClientRect();
					description.style.top = `${rect.top - description.offsetHeight - 50}px`;
					description.style.left = `${rect.left + rect.width / 2 - description.offsetWidth / 2}px`;
					description.style.display = 'block';
				}
				const disappearDescription = ()=>{
					description.style.display = 'none';
					settingsPage.removeEventListener('click', disappearDescription);
				}
				descriptionContainer.appendChild(svg);
				descriptionContainer.appendChild(description);
				e.appendChild(descriptionContainer);
			});
			page.style.display = "flex";
			page.style.zIndex = "auto";
			return page;
		}
		function createWebhookBringsTweetsToDiscordSettingsPage(){
			const settingsTarget = settingTargets.webhookBringsTweetsToDiscord;
			const scriptSetting = scriptSettings.webhookBringsTweetsToDiscord || {};
			const settingText = envText.webhookBringsTweetsToDiscord.settings;
			const page = createSettingsPageTemplate(settingsTarget.targetName);
			settingsTarget.specificSave = save;
			const settingEntries = [
				{type: 'text', text: settingText.displayMethod, size: "2em", weight: "400", position: "left", isHTML: false},
				{id: 'displayMethod', type: 'dropdown', option: Object.keys(settingText.displayMethodOptions).map(key => ({value: key, displayName: settingText.displayMethodOptions[key]}))},
				{type: 'text', text: settingText.sendLangage, size: "2em", weight: "400", position: "left", isHTML: false},
				{id: 'sendLangage', type: 'dropdown', option: Object.keys(Text).map(key => ({value: key, displayName: key}))},
				{type: 'text', text: settingText.downloadVideo, size: "2em", weight: "400", position: "left", isHTML: false},
				{id: 'downloadVideo', type: 'radioButton', option: Object.keys(settingText.downloadVideoOptions).map(key => ({value: key, displayName: settingText.downloadVideoOptions[key]}))},
				{type: 'text', text: settingText.sendDefaultOptions, size: "2em", weight: "400", position: "left", isHTML: false},
				{id: 'sendQuoteTweetDefault', type: 'toggleSwitch', name: settingText.sendQuoteTweetDefault, defaultValue: false},
				{id: 'sendTranslatedTextDefault', type: 'toggleSwitch', name: settingText.sendTranslatedTextDefault, defaultValue: true},
				/*{id: 'sendArticleTextDefault', type: 'toggleSwitch', name: settingText.sendArticleTextDefault, defaultValue: false},*/
			];

			page.appendChild(createSettingsElement({id: 'webhooks', type: 'text', text: "Webhookの設定", size: "2em", weight: "400", position: "left", isHTML: false}, scriptSetting).container);
			const webhookContainer = createSettingsElement({type: 'container'});
			webhookContainer.style.flexDirection = 'column';
			(scriptSetting?.data ? scriptSetting.data : []).forEach((s, i)=>{
				makeNewLow(i, s.name, `https://discord.com/api/webhooks/${atob(s.value)}`);
			});
			if(!scriptSetting?.data || (scriptSetting?.data.length === 0)){
				makeNewLow(false);
			}
			page.appendChild(webhookContainer);
			new Sortable(webhookContainer, {
				animation: 150,//アニメーションのスピード
				ghostClass: 'sortable-ghost',//ドラッグ中の要素に付与されるクラス
				handle: '.handle',//並び替えが可能な部分（クラス名）を指定
				filter: 'input', // テキストボックス部分を除外
				preventOnFilter: false, // テキストボックスのクリック動作を許可
				onStart: (evt) => {
					// テキストボックスがフォーカスされている場合はドラッグをキャンセル
					if(evt.item.querySelector('input:focus')){
						evt.preventDefault();
					}
				}
			});
			page.appendChild(createSettingsElement({type: "button", text: "+", position: "left" , event: ()=>{makeNewLow()}}, scriptSetting).container);
			page.appendChild(createSettingsElement({type: 'text', text: settingText.defaultWebhook, size: "2em", weight: "400", position: "left", isHTML: false}, scriptSetting).container);
			const defaultWebhookDropdown = createSettingsElement({id: 'defaultWebhook', type: 'dropdown', option: getValueFromObjectByPath(scriptSetting?.data, "name", []).map(key => ({value: key, displayName: key}))}, scriptSetting);
			page.appendChild(defaultWebhookDropdown.container);
			for(let i=0;i<settingEntries.length;i++){
				page.appendChild(createSettingsElement(settingEntries[i], scriptSetting).container);
			}
			return page;
			function makeNewLow(needBorder = true, name = "", webhook = ""){
				const container = document.createElement('div');
				container.setAttribute("webhookLow","true");
				container.classList.add('handle');
				container.style.width = "100%";
				container.style.display = "flex";
				container.style.flexWrap = "wrap";
				const nameContainer = document.createElement('div');
				nameContainer.style.margin = "0 2% 0 0";
				const nameLabel = document.createElement('label');
				nameLabel.style.fontSize = "1.2em";
				nameLabel.textContent = "Name: ";
				const nameInput = document.createElement('input');
				nameInput.type = "text";
				nameInput.setAttribute("webhookinput", "name");
				nameInput.style.maxWidth = "10em";
				nameInput.value = name;
				if(isMobile)nameInput.style.width = "5em";
				nameContainer.appendChild(nameLabel);
				nameContainer.appendChild(nameInput);

				const urlContainer = document.createElement('div');
				const urlLabel = document.createElement('label');
				urlLabel.style.fontSize = "1.2em";
				urlLabel.textContent = "Webhook: "
				const urlInput = document.createElement('input');
				urlInput.type = "text";
				urlInput.setAttribute("webhookinput", "webhook");
				urlInput.style.maxWidth = "10em";
				urlInput.value = webhook;
				if(isMobile)urlInput.style.width = "5em";
				urlContainer.appendChild(urlLabel);
				urlContainer.appendChild(urlInput);

				const removeButton = document.createElement('button');
				removeButton.textContent = "✕";
				removeButton.addEventListener('click',()=>{
					container.remove();
				});
				if(webhookContainer.children.length > 0)container.appendChild(createSettingsElement({id: 'functionsToggleFinBorder', type: 'border', length: 90, margin: "7px 0 7px 0"}).container);
				container.appendChild(nameContainer);
				container.appendChild(urlContainer);
				container.appendChild(removeButton);

				nameInput.addEventListener('input', validateInputs);
				urlInput.addEventListener('input', validateInputs);

				function validateInputs(){
					const webhookPattern = /^https:\/\/discord\.com\/api\/webhooks\/[\d]+\/[\w-]+$/;
					const isNameFilled = nameInput.value.trim() !== "";
					const isWebhookValid = webhookPattern.test(urlInput.value);

					// Nameフィールドが空の場合の警告
					if(isNameFilled && !urlInput.value){
						nameInput.style.backgroundColor = 'red';
						urlInput.style.backgroundColor = '';
					}else{
						nameInput.style.backgroundColor = '';
					}
					// NameとWebhookの片方が空のときに警告
					if(isNameFilled && !urlInput.value || (!isNameFilled && urlInput.value.trim() !== "")){
						nameInput.style.backgroundColor = 'red';
						urlInput.style.backgroundColor = 'red';
					}else{
						nameInput.style.backgroundColor = '';
						urlInput.style.backgroundColor = '';
					}
					// Webhookフィールドの正規表現チェックと警告
					if(!isWebhookValid && urlInput.value.trim() !== ""){
						urlInput.style.backgroundColor = 'red';
					}else{
						urlInput.style.backgroundColor = '';
					}
					const allNameInputs = document.querySelectorAll('input[webhookinput="name"]');
					const nameValues = Array.from(allNameInputs).map(input => input.value.trim());
					const isNameDuplicate = nameValues.filter(value => value === nameInput.value.trim()).length > 1;

					if(isNameDuplicate){
						nameInput.style.backgroundColor = 'red';
					}else if(isNameFilled){
						nameInput.style.backgroundColor = '';
					}
				}

				webhookContainer.appendChild(container);
				//return {container: container, name: nameContainer, webHook: urlContainer};
			}
			function save(){
				const save = [];
				webhookContainer.querySelectorAll('[webhookLow="true"]').forEach(s=>{
					const name = s.querySelector('[webhookinput="name"]').value;
					const webhook = s.querySelector('[webhookinput="webhook"]').value;
					if(name && webhook){
						if(webhook.match(/^https\:\/\/discord\.com\/api\/webhooks\/[\d]+\/[\w-]+$/)){
							save.push({name: name, value: btoa(webhook.replace(/^https\:\/\/discord\.com\/api\/webhooks\//,''))});
						}
					}
				});
				scriptSettings[settingsTarget.targetName].data = save;
				defaultWebhookDropdown.settingsElement.innerHTML = "";
				(scriptSetting.data?.length > 0 ? scriptSetting.data : []).forEach((opt, index) => {
					const option = document.createElement('option');
					option.value = index;
					option.text = opt.name;
					if(scriptSetting.defaultWebhook == index){
						option.selected = true;
					}
					defaultWebhookDropdown.settingsElement.appendChild(option);
				});
			}
		}

		function createQuickShareTweetLinkSettingsPage(){
			const settingsTarget = settingTargets.quickShareTweetLink;
			const scriptSetting = scriptSettings.quickShareTweetLink;
			const settingText = envText.quickShareTweetLink.settings;
			const page = createSettingsPageTemplate(settingsTarget.targetName);
			const settingEntries = [
				{type: 'text', text: settingText.copyDomain, size: "2.5em", weight: "400", position: "left", isHTML: false},
				{id: 'domain', type: 'dropdown', option: ['twitter.com', 'x.com', 'vxtwitter.com', 'other'].map(key => ({value: key, displayName: key}))},
				{type: 'text', text: settingText.customDomain, size: "2.0em", weight: "400", position: "left", isHTML: false},
				{id: 'otherDomain', type: 'textBox'}

			];
			for(let i=0;i<settingEntries.length;i++){
				page.appendChild(createSettingsElement(settingEntries[i], scriptSetting).container);
			}
			return page;
		}

		function createShowAllMediasSettingsPage(){
			const settingsTarget = settingTargets.showAllMedias;
			const scriptSetting = scriptSettings.showAllMedias;
			const settingText = envText.showAllMedias.settings;
			const page = createSettingsPageTemplate(settingsTarget.targetName);
			const settingEntries = [
				{type: 'text', text: settingText.displayMethod, size: "2em", weight: "400", position: "left", isHTML: false},
				{id: 'displayMethod', type: 'radioButton', option: [{value: "expand", displayName: settingText.expand}, {value: "likeTweet", displayName: settingText.likeTweet}]},
				{id: 'removeBlur', name: settingText.removeBlur, type: 'toggleSwitch'},
				{id: 'onlyRemoveBlur', name: settingText.onlyRemoveBlur, type: 'toggleSwitch'},
			];
			for(let i=0;i<settingEntries.length;i++){
				page.appendChild(createSettingsElement(settingEntries[i], scriptSetting).container);
			}
			return page;
		}

		function createHelloTweetWhereAreYouFromSettingsPage(){
			const settingsTarget = settingTargets.helloTweetWhereAreYouFrom;
			const scriptSetting = scriptSettings.helloTweetWhereAreYouFrom;
			const settingText = envText.helloTweetWhereAreYouFrom.settings;
			const page = createSettingsPageTemplate(settingsTarget.targetName);
			const settingEntries = [
				//{type: 'text', text: settingText.displayMethod, size: "2em", weight: "400", position: "left", isHTML: false},
				{id: 'showVideoUrl', type: 'toggleSwitch', name: settingText.showVideoUrl},
			];
			for(let i=0;i<settingEntries.length;i++){
				page.appendChild(createSettingsElement(settingEntries[i], scriptSetting).container);
			}
			return page;
		}

		function createcustomizeMenuButtonSettingsPage(){
			const settingsTarget = settingTargets.customizeMenuButton;
			const scriptSetting = scriptSettings.customizeMenuButton;
			const settingText = envText.customizeMenuButton.settings;
			settingsTarget.specificSave = save;
			const page = createSettingsPageTemplate(settingsTarget.targetName);
			const settingEntries = [
				{type: 'text', text: settingText.toAdd, size: "2em", weight: "400", position: "left", isHTML: false},
				{id: "connect_peopleButton", name: twitterTextI18n.getText("connect_people"), type: 'toggleSwitch', category: "toAddOptions", defaultValue: false},
				{id: "chatButton", name: twitterTextI18n.getText("chat"), type: 'toggleSwitch', category: "toAddOptions", defaultValue: true},
				{id: "grokButton", name: twitterTextI18n.getText("grok"), type: 'toggleSwitch', category: "toAddOptions", defaultValue: true},
				{id: "listsButton", name: twitterTextI18n.getText("lists"), type: 'toggleSwitch', category: "toAddOptions", defaultValue: false},
				{id: "bookmarksButton", name: twitterTextI18n.getText("bookmarks"), type: 'toggleSwitch', category: "toAddOptions", defaultValue: true},
				{id: "communitiesButton", name: twitterTextI18n.getText("communities"), type: 'toggleSwitch', category: "toAddOptions", defaultValue: true},
				{id: "businessButton", name: twitterTextI18n.getText("business"), type: 'toggleSwitch', category: "toAddOptions", defaultValue: false},
				{id: "premiumButton", name: twitterTextI18n.getText("premium"), type: 'toggleSwitch', category: "toAddOptions", defaultValue: false},
				{id: "creatorStudioButton", name: twitterTextI18n.getText("creatorStudio"), type: 'toggleSwitch', category: "toAddOptions", defaultValue: false},
				{id: "adsButton", name: twitterTextI18n.getText("ads"), type: 'toggleSwitch', category: "toAddOptions", defaultValue: false},
				{id: "createYourSpaceButton", name: twitterTextI18n.getText("createYourSpace"), type: 'toggleSwitch', category: "toAddOptions", defaultValue: false},
				{id: "settingsAndPrivacy", name: twitterTextI18n.getText("settingsAndPrivacy"), type: 'toggleSwitch', category: "toAddOptions", defaultValue: false},
			];
			for(let i=0;i<settingEntries.length;i++){
				page.appendChild(createSettingsElement(settingEntries[i], scriptSetting).container);
			}
			for(let i=1; i<=4; i++){
				const customButtonSettingsContainer = h('div', {
						style: {
							display: "flex",
							flexDirection: "column",
							width: "100%",
							height: "fit-content",
						},
					},
					createSettingsElement({type: 'border', length: 98, margin: "7px 0 7px 0"},).container,
					createSettingsElement({id: `shortCutButton${i}`, name: `${settingText.shortCutButton}${i}`, type: 'toggleSwitch', category: "toAddOptions", defaultValue: false}, scriptSetting).container,
					h('div', {
							style: {
								display: "flex",
								flexDirection: "row",
								fontSize: "1.2em",
								marginLeft: "1em",
							},
						},
						h('label', {
								style: {
									color: colors.get('fontColor'),
									marginRight: "1em",
								},
								textContent: settingText.shortCutButtonDisplayName,
							},
						),
						createSettingsElement({id: `shortCutButton${i}DisplayName`, type: 'textBox'}, scriptSetting).settingsElement,
					),
					h('div', {
							style: {
								display: "flex",
								flexDirection: "row",
								fontSize: "1.2em",
								marginLeft: "1em",
							},
						},
						h('label', {
								style: {
									color: colors.get('fontColor'),
									marginRight: "1em",
								},
								textContent: settingText.shortCutButtonUri,
							},
						),
						createSettingsElement({id: `shortCutButton${i}Uri`, type: 'textBox'}, scriptSetting).settingsElement,
					),
				);
				page.appendChild(customButtonSettingsContainer);
			}
			page.appendChild(createSettingsElement({type: 'border', length: 98, margin: "7px 0 15px 0"}).container);
			page.appendChild(createSettingsElement({type: 'text', text: settingText.sortOrder, size: "2.5em", weight: "400", position: "left", isHTML: false}).container);
			page.appendChild(createSettingsElement({type: 'button', text: settingText.sortOrderRestoreDefault, width: "fit-content", event: restoreDefaultSorting}).container);

			const buttonNames = ["homeButton", "exploreButton", "notificationsButton", "connect_peopleButton", "chatButton",
				"grokButton", "listsButton", "bookmarksButton", "communitiesButton", "premiumButton", "businessButton",
				"profileButton" , "creatorStudioButton", "adsButton", "createYourSpaceButton", "settingsAndPrivacy",
				"shortCutButton1", "shortCutButton2", "shortCutButton3", "shortCutButton4"];
			const buttonList = scriptSetting?.buttonSorting?.length === buttonNames.length ? scriptSetting.buttonSorting : buttonNames;

			const buttonSortingMenuContainer = h('div', {
					style: {
						display: "flex",
						flexDirection: "column",
						fontSize: "1.1em",
						borderTop: "5px solid",
						borderBottom: "5px solid",
						borderRight: "10px solid",
						borderLeft: "10px solid",
						borderColor: colors.get('borderColor'),
					},
				},
			);
			createButtonSortingMenuContainer();
			new Sortable(buttonSortingMenuContainer, {
				animation: 150,
				ghostClass: 'sortable-ghost',
				handle: '.handle',
			});
			page.appendChild(buttonSortingMenuContainer);
			page.addEventListener('click', (e)=>{
				switchDisplaying();
			});
			switchDisplaying();

			function createButtonSortingMenuContainer(reset = false){
				(reset ? buttonNames : buttonList).forEach(name => {
					const row = h('div', {
							className: "handle",
							style: {
								borderTop: "1px solid",
								borderBottom: "1px solid",
								borderColor: colors.get('borderColor'),
								display: "flex",
							},
							textContent: name.startsWith('shortCutButton') ? `${settingText.shortCutButton}${name.replace(/^shortCutButton/,'')}` : twitterTextI18n.getText(name.replace(/Button$/, '')),
							sortId: name,
							buttonSortingRow: true,
						}
					);
					buttonSortingMenuContainer.appendChild(row);
				});
				return buttonSortingMenuContainer;
			}

			function switchDisplaying(){
				buttonList.forEach(name => {
					const node = page.querySelector(`[settingID="${name}"]`);
					if(node){
						const isChecked = node.getAttribute('isselect') === "true";
						if(isChecked){
							buttonSortingMenuContainer.querySelector(`[sortId="${name}"]`).style.display = "flex";
						}else{
							buttonSortingMenuContainer.querySelector(`[sortId="${name}"]`).style.display = "none";
						}
					}else{
						buttonSortingMenuContainer.querySelector(`[sortId="${name}"]`).style.display = "flex";
					}
				});
			}
			function restoreDefaultSorting(){
				buttonSortingMenuContainer.innerHTML = "";
				createButtonSortingMenuContainer(true);
				switchDisplaying();
			}
			function save(){
				const save = [];
				buttonSortingMenuContainer.querySelectorAll('[buttonSortingRow="true"]').forEach(s=>{
					const name = s.getAttribute('sortId');
					save.push(name);
				});
				if(!scriptSettings[settingsTarget.targetName])scriptSettings[settingsTarget.targetName] = {};
				scriptSettings[settingsTarget.targetName].buttonSorting = save;
				if(sessionData.customizeMenuButton?.addAndSort)sessionData.customizeMenuButton.addAndSort();
			}
			return page;
		}

		function createAdvanceSettingsPage(){
			const settingsTarget = settingTargets.advance;
			const scriptSetting = scriptSettings.advance;
			const settingText = envText.advance.settings;
			const page = createSettingsPageTemplate(settingsTarget.targetName);
			const settingEntries = [
				{type: 'text', text: settingText.exportSettings, size: "2.5em", weight: "400", position: "left", isHTML: false},
				{type: 'button', text: settingText.export, width: "fit-content", event: exportSettings},
				{type: 'text', text: settingText.importSettings, size: "2.5em", weight: "400", position: "left", isHTML: false},
				{type: 'file', text: settingText.import, width: "fit-content", event: importSettings},
			];
			function exportSettings(){
				const data = {
					makeTwitterLittleUsefulSettings: scriptSettings,
				};
				const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
				const downloadAnchorNode = document.createElement('a');
				downloadAnchorNode.setAttribute("href", dataStr);
				downloadAnchorNode.setAttribute("download", "scriptSettings_makeTwitterLittleUseful.json");
				document.body.appendChild(downloadAnchorNode);
				downloadAnchorNode.click();
				downloadAnchorNode.remove();
			}
			function importSettings(event){
				const file = event.target.files[0];
				if(file){
					const reader = new FileReader();
					reader.onload = async function(e){
						try{
							const importedData = JSON.parse(e.target.result);
							if(!importedData || !importedData.makeTwitterLittleUsefulSettings){
								throw new Error(settingText.invaildSettings);
							}
							const importedSettings = importedData.makeTwitterLittleUsefulSettings;
							scriptSettings = importedSettings;
							await saveSettings();
							closeButton.click();
							_i18n();
							createSettingsPage();
						}catch(error){
							console.error(error);
							customAlert(settingText.invaildJson);
						}
					};
					reader.readAsText(file);
				}
			}
			for(let i=0;i<settingEntries.length;i++){
				page.appendChild(createSettingsElement(settingEntries[i], scriptSetting).container);
			}
			return page;
		}
		function createForDebugSettingsPage(){
			const settingsTarget = settingTargets.forDebug;
			const scriptSetting = scriptSettings[settingsTarget.targetName];
			const settingText = envText.forDebug.settings;
			const page = createSettingsPageTemplate(settingsTarget.targetName);
			const settingEntries = [
				{type: 'border', length: 100, margin: "7px 0 7px 0"},
				{type: 'text', text: settingText.showScriptSettings, size: "1em", weight: "400", position: "left", isHTML: false},
				{type: 'button', text: settingText.show, width: "fit-content", event: ()=>{console.log(scriptSettings)}},
				{type: 'text', text: settingText.showDataStore, size: "1em", weight: "400", position: "left", isHTML: false},
				{type: 'button', text: settingText.show, width: "fit-content", event: ()=>{console.log(settingText.coutionOpenDataStore);console.log(scriptDataStore)}},
				{type: 'text', text: settingText.showSessionData, size: "1em", weight: "400", position: "left", isHTML: false},
				{type: 'button', text: settingText.show, width: "fit-content", event: ()=>{console.log(sessionData)}},
				{type: 'text', text: settingText.showTweetsData, size: "1em", weight: "400", position: "left", isHTML: false},
				{type: 'button', text: settingText.show, width: "fit-content", event: ()=>{console.log(twitterApi.tweetsData)}},
				{type: 'text', text: settingText.showTweetsUserData, size: "1em", weight: "400", position: "left", isHTML: false},
				{type: 'button', text: settingText.show, width: "fit-content", event: ()=>{console.log(twitterApi.tweetsUserData)}},
				{type: 'text', text: settingText.showTweetsUserDataByUserName, size: "1em", weight: "400", position: "left", isHTML: false},
				{type: 'button', text: settingText.show, width: "fit-content", event: ()=>{console.log(twitterApi.tweetsUserDataByUserName)}},
				{type: 'text', text: settingText.showTwitterApiClassDebug, size: "1em", weight: "400", position: "left", isHTML: false},
				{type: 'button', text: settingText.show, width: "fit-content", event: ()=>{twitterApi.debug()}},
				{type: 'text', text: settingText.importPixivLinkCorrection, size: "1em", weight: "400", position: "left", isHTML: false},
				{type: 'file', text: settingText.import, width: "fit-content", event: impoertPixivLinkCorrection},
			];

			page.appendChild(createSettingsElement({type: 'text', text: settingText.allDataDisplayOnConsole, size: "2em", weight: "400", position: "left", isHTML: false},).container);
			createDebugInputMenu(settingText.showTweetData, settingText.show, async function(value){
				const tweetID = isUrl(value) ? extractTweetId(value) : value;
				if(!tweetID){
					console.error(settingText.invalidTweetId);
					return;
				}
				const tweetData = await twitterApi.getTweet(tweetID);
				console.log(tweetData);
			});

			createDebugInputMenu(settingText.showUserDataByScreenName, settingText.show, async function(value){
				const screenName = isUrl(value) ? extractUserName(value) : value;
				if(!screenName){
					console.error(settingText.invalidScreenName);
					return;
				}
				const userData = await twitterApi.getUser(screenName);
				console.log(userData);
			});

			createDebugInputMenu(settingText.showUserByUserID, settingText.show, async function(value){
				if(!value.match(/^[0-9]+$/)){
					console.error(settingText.invalidUserId);
					return;
				}
				const userData = await twitterApi.tweetsUserData[value];
				console.log(userData);
			});

			for(let i=0;i<settingEntries.length;i++){
				page.appendChild(createSettingsElement(settingEntries[i], scriptSetting).container);
			}
			return page;

			function createDebugInputMenu(title, buttonName, eventFunc = function(value){}){
				page.appendChild(createSettingsElement({type: 'text', text: title, size: "1.5em", weight: "400", position: "left", isHTML: false},).container);
				const showTweetDataContainer = createSettingsElement({type: 'container'});
				const showTweetDataTextBox = document.createElement('input');
				showTweetDataTextBox.type = "text";
				const showTweetDataButton = document.createElement('button');
				showTweetDataButton.addEventListener('click', ()=>{
					eventFunc(showTweetDataTextBox.value);
				});
				showTweetDataButton.textContent = buttonName;
				showTweetDataContainer.appendChild(showTweetDataTextBox);
				showTweetDataContainer.appendChild(showTweetDataButton);
				page.appendChild(showTweetDataContainer);
			}
			async function impoertPixivLinkCorrection(event){
				const file = await readFile(event, 'text');
				const data = JSON.parse(file);
				if(data){
					if(data["データチェック"] === "乱反射する眼差し"){
						const now = new Date();
						const YY = now.getFullYear().toString().slice(-4);
						const MM = String(now.getMonth() + 1).padStart(2, '0');
						const DD = String(now.getDate()).padStart(2, '0');
						if(!scriptDataStore.makeTwitterLittleUseful)scriptDataStore.makeTwitterLittleUseful = {};
						if(!scriptDataStore.makeTwitterLittleUseful.pixivLinkCollection)scriptDataStore.makeTwitterLittleUseful.pixivLinkCollection = {};
						scriptDataStore.makeTwitterLittleUseful.pixivLinkCollection.dataBase = data;
						scriptDataStore.makeTwitterLittleUseful.pixivLinkCollection.dataBaseVersion = `${YY}${MM}${DD}`;
						await saveScriptDataStore();
						customAlert("imported");
					}else{
						customAlert("invalid data");
					}
				}
			}
		}
		function createSettingsPageTemplate(name){
			const settingsPageContainer = document.createElement('div');
			settingsPageContainer.setAttribute('mtlu-id', 'settingsPageContainer');
			settingsPageContainer.setAttribute('settingsPageTarget', name);
			settingsPageContainer.style.width = "100%";
			settingsPageContainer.style.height = "100%";
			settingsPageContainer.style.overflowY = "auto";
			settingsPageContainer.style.zIndex = "-1";
			settingsPageContainer.style.display = "none";
			settingsPageContainer.style.flexDirection = "column"
			settingsPageContainer.style.paddingBottom = "10em";
			return settingsPageContainer;
		}
		function createSettingsElement(setting, storedValue) {
			let returnElement;
			const settingsElementWrapper = document.createElement('div');
			settingsElementWrapper.setAttribute('mtlu-id', 'settingsElementWrapper');
			settingsElementWrapper.style.width = "98%";
			settingsElementWrapper.style.height = "fit-content";
			settingsElementWrapper.style.display = "flex";
			settingsElementWrapper.style.overflowX = "hidden";
			settingsElementWrapper.style.overflowWrap = "break-word";
			settingsElementWrapper.style.margin = "0 0 0 2%";
			settingsElementWrapper.style.flexShrink = "0";

			let currentValue;
			if(!storedValue){
				currentValue = setting.defaultValue;
			}else if(setting.category){
				// 深いネストがある場合に対応
				currentValue = getValueFromObjectByPath(storedValue,`${setting.category}.${setting.id}`, setting.defaultValue);
			}else{
				currentValue = storedValue ? storedValue[setting.id] ?? setting.defaultValue : setting.defaultValue ?? undefined;
			}

			// タイプに応じた要素の生成
			switch(setting.type){
				case 'radioButton':
					returnElement = radioButton();
					break;
				case 'textBox':
					returnElement = textBox();
					break;
				case 'toggleSwitch':
					returnElement = toggleSwitch();
					break;
				case 'dropdown':
					returnElement = dropdown();
					break;
				case 'border':
					returnElement = border();
					break;
				case 'text':
					returnElement = text();
					break;
				case 'container':
					return settingsElementWrapper;
					break;
				case 'button':
					returnElement = button();
					break;
				case 'file':
					returnElement = file();
					break;
				default:
					console.error('Unknown setting');
					console.error({settingOBJ: setting, storedValues: storedValue});
					return;
			}
			settingsElementWrapper.appendChild(returnElement);

			return { container: settingsElementWrapper, settingsElement: returnElement };

			function file(){
				const {position = 'center', width = "1.5em", height = "1.5em", text = "", event = ()=>{}} = setting;
				const input = document.createElement('input');
				input.style.display = "none";
				input.type = "file";

				const button = document.createElement('button');
				button.style.width = width;
				button.style.height = height;
				button.textContent = text;
				button.addEventListener('click', () => {
				  input.click();
				});
				input.addEventListener('change', event);

				const container = document.createElement('div');
				container.style.textAlign = position;
				container.appendChild(button);
				container.appendChild(input);

				return container;
			}

			function button(){
				const {position = 'center', width = "1.5em", height = "1.5em", text = "", event = ()=>{}} = setting;
				const button = document.createElement('button');
				button.style.width = width;
				button.style.height = height;
				//button.style.fontSize = height;
				button.textContent = text;
				button.addEventListener('click', event);
				settingsElementWrapper.style.overflowY = "hidden";
				return button;
			}
			function text(){
				// デフォルト値を設定
				const {size = "1em", position = 'center', weight = 400, isHTML = false} = setting;

				// 新しい要素を作成（span要素）
				const element = document.createElement('span');

				// カスタム属性を設定
				element.setAttribute('needSave', "false");
				element.setAttribute('category', setting.category || '');
				element.setAttribute('type', setting.type || '');

				// テキストまたはHTMLの内容を設定
				if(isHTML){
					// HTMLとして扱う場合
					element.innerHTML = setting.text;
				}else{
					// プレーンテキストとして扱う場合
					element.textContent = setting.text;
				}
				if(position === 'center'){
					settingsElementWrapper.style.margin = "0";
					element.style.width = "100%";
				}
				// スタイルを設定
				element.style.fontSize = size;
				element.style.textAlign = position;
				element.style.fontWeight = weight;

				return element;
			}

			function border(){
				const {length = 95, position = 'center', margin = "0", thickness = 1} = setting;
				settingsElementWrapper.style.margin = "0";
				settingsElementWrapper.style.width = "100%";
				// ボーダーのスタイルを持つ要素を作成
				const borderElement = document.createElement('div');
				borderElement.setAttribute('needSave', "false");
				borderElement.setAttribute('type', setting.type);

				// ボーダーのスタイルを設定
				borderElement.style.width = length + '%'; // ボーダーの長さを設定
				borderElement.style.borderBottom = `${thickness}px solid ${colors.get('borderColor')}`; // 下側のボーダーだけ表示
				borderElement.style.margin = margin;

				// 親要素に対してボーダーを中央揃え（flexboxを使用）
				settingsElementWrapper.style.display = 'flex';

				if(position === 'left'){
					settingsElementWrapper.style.justifyContent = 'flex-start'; // 左寄せ
				}else if(position === 'right'){
					settingsElementWrapper.style.justifyContent = 'flex-end'; // 右寄せ
				}else if(position === 'center'){
					settingsElementWrapper.style.justifyContent = 'center'; // 中央揃え
				}

				return borderElement;
			}
			function radioButton(){
				const element = document.createElement('div');
				element.setAttribute('needSave', "true");
				element.setAttribute('category', `${setting.category}`);
				element.setAttribute('type', setting.type);
				element.setAttribute('settingID', setting.id);

				setting.option.forEach((opt, index) => {
					const label = document.createElement('label');
					const radioButton = document.createElement('input');
					radioButton.style.margin = "0 0 0 1em";
					radioButton.type = 'radio';
					radioButton.name = setting.id; // 同じグループにするためにname属性を設定
					radioButton.value = opt.value;
					if(currentValue === opt.value){
						radioButton.checked = true;
					}
					label.appendChild(radioButton);
					label.appendChild(document.createTextNode(opt.displayName));
					element.appendChild(label);
				});
				return element;
			}

			function textBox(){
				const element = document.createElement('input');
				element.type = 'text';
				element.setAttribute('needSave', "true");
				element.setAttribute('category', `${setting.category}`);
				element.setAttribute('type', setting.type);
				element.setAttribute('settingID', setting.id);
				element.value = currentValue || '';
				return element;
			}

			function toggleSwitch(){
				// トグルスイッチ全体を包むdivを作成
				const displaySwitchPosition = setting.displaySwitchPosition || "left";
				const container = document.createElement('div');
				container.setAttribute('needSave', "true");
				container.setAttribute('category', `${setting.category}`);
				container.setAttribute('type', setting.type);
				container.setAttribute('settingID', setting.id);
				container.setAttribute('isSelect', currentValue ? currentValue : 'false');
				container.style.display = 'flex';
				container.style.justifyContent = displaySwitchPosition === 'right' ? 'space-between' : 'flex-start';
				container.style.width = '100%'; // コンテナの全体幅
				container.style.margin = '10px 0';
				container.style.alignItems = 'center';

				// ラベルを作成（名前を表示）
				const label = document.createElement('span');
				label.textContent = setting.name;
				label.style.flex = '1'; // ラベルは自動で幅を調整
				//label.style.textAlign = displaySwitchPosition === 'right' ? 'left' : 'right';
				label.style.fontSize = "1.5em";
				label.style.margin = "0 0 0 5%";
				label.style.userSelect = 'none';

				// トグルスイッチ部分の要素を作成
				const toggleSwitch = document.createElement('div');
				toggleSwitch.style.position = 'relative';
				toggleSwitch.style.width = '50px';
				toggleSwitch.style.height = '20px';
				toggleSwitch.style.backgroundColor = currentValue ? '#4CAF50' : '#ccc';
				toggleSwitch.style.borderRadius = '30px';
				toggleSwitch.style.cursor = 'pointer';
				toggleSwitch.style.transition = 'background-color 0.3s';

				// 丸いスライダー部分を作成
				const toggleSlider = document.createElement('div');
				toggleSlider.style.position = 'absolute';
				toggleSlider.style.top = '2px';
				toggleSlider.style.left = currentValue ? '32px' : '2px';
				toggleSlider.style.width = '16px';
				toggleSlider.style.height = '16px';
				toggleSlider.style.backgroundColor = 'white';
				toggleSlider.style.borderRadius = '50%';
				toggleSlider.style.transition = 'transform 0.3s';

				// スイッチの状態を保持する変数
				let isChecked = currentValue;

				// トグルスイッチのクリックイベントを追加
				toggleSwitch.addEventListener('click', function (){
					isChecked = !isChecked;  // 状態を切り替える
					if(isChecked){
						toggleSwitch.style.backgroundColor = '#4CAF50';  // ON時の色
						toggleSlider.style.left = '32px';  // スライダーを右に動かす
						container.setAttribute('isSelect', 'true');
					}else{
						toggleSwitch.style.backgroundColor = '#ccc';  // OFF時の色
						toggleSlider.style.left = '2px';  // スライダーを左に戻す
						container.setAttribute('isSelect', 'false');
					}
				});

				// トグルスイッチにスライダーを追加
				toggleSwitch.appendChild(toggleSlider);

				// 要素の配置
				if(displaySwitchPosition === 'right'){
					toggleSwitch.style.margin = "0 2% 0 0";
					container.appendChild(label); // ラベルが左
					container.appendChild(toggleSwitch); // スイッチが右
				}else{
					container.appendChild(toggleSwitch); // スイッチが左
					container.appendChild(label); // ラベルが右
				}

				// 生成したコンテナをページに追加
				return container;
			}

			function dropdown(){
				const element = document.createElement('select');
				element.setAttribute('needSave', "true");
				element.setAttribute('category', `${setting.category}`);
				element.setAttribute('type', setting.type);
				element.setAttribute('settingID', setting.id);
				setting.option.forEach((opt, index) => {
					const option = document.createElement('option');
					option.value = opt.value;
					option.text = opt.displayName;
					if(currentValue === opt.value){
						option.selected = true;
					}
					element.appendChild(option);
				});
				return element;
			}
		}
		async function retrieveSettings(){
			for(let key of Object.keys(settingTargets)){
				if(settingTargets[key].needSave === false)continue;
				const save = {};
				const node = settingTargets[key].settingsNode;
				node.querySelectorAll('[needsave="true"]').forEach(s=>{
					const id = s.getAttribute("settingid");
					const category = s.getAttribute("category");
					const type = s.getAttribute("type");
					let value, selectedRadio;
					switch(type){
						case 'radioButton':
							selectedRadio = s.querySelector(`input:checked`);
							value = selectedRadio ? selectedRadio.value : null;
							break;
						case 'textBox':
							value = s.value;
							break;
						case 'toggleSwitch':
							value = (s.getAttribute('isselect') == 'true') ? true : false;
							break;
						case 'dropdown':
							value = s.value;
							break;
					}
					if(category && category !== "undefined"){
						// "hoge.fuga" のようなカテゴリを "." で分割
						const keys = category.split('.');

						// ネストされたオブジェクトを作成する
						keys.reduce((acc, key, index) => {
							if(index === keys.length - 1){
								// 最後のキーなら、value を設定
								if(!acc[key])acc[key] = {};
								acc[key][id] = value;
							}else{
								// まだ最終階層に達していない場合、次の階層を作成
								if(!acc[key])acc[key] = {};
							}
							return acc[key];
						}, save);
					}else{
						// category がない場合、普通に {id: value} を保存
						save[id] = value;
					}
					scriptSettings[key] = save;
				});
				if(settingTargets[key].specificSave)settingTargets[key].specificSave();
			}
			await saveSettings();
			_i18n();
			displayToast("セーブ完了",1000);
		}

		function generatePages(){
			for(let key of Object.keys(settingTargets)){
				//if(!(settingTargets[key].forPC ? isPC : true && settingTargets[key].forMobile ? isMobile : true))return;
				const node = settingTargets[key].pageGenerateFunction();
				settingContainerWrapper.appendChild(node);
				settingTargets[key].settingsNode = node;
				const padding = h('div', {style: {height: "100px", flexShrink: "0"}});
				node.appendChild(padding);
				pages.nodes.push(node);
			}
			pages.selecing.name = "makeTwitterLittleUseful";
			pages.selecing.node = settingTargets.makeTwitterLittleUseful.settingsNode;
		}
		generatePages();
	}
	GM_registerMenuCommand('script settings', createSettingsPage);

	// ###クラス###
	// 今までクラスとかあんまり使ったことなかったから使い方間違ってたら教えてちょ
	class Colors {
		constructor(){
			this.colors = {
				// [white, darkBlue, black]
				"fontColor":				['rgb(15, 20, 25)', 'rgb(247, 249, 249)', 'rgb(231, 233, 234)'], // ツイートの文字色など
				"fontColorDark":			['rgb(83, 100, 113)', 'rgb(139, 152, 165)', 'rgb(113, 118, 123)'], // いいねの数など
				"backgroundColor":			['rgba(255, 255, 255, 1.00)', 'rgb(21, 32, 43)', 'rgba(0, 0, 0, 1.00)'],
				"borderColor":				['rgb(239, 243, 244)', 'rgb(56, 68, 77)', 'rgb(47, 51, 54)'], // ツイートのボーダー色など
				"twitterBlue":				['rgb(29, 155, 240)', 'rgb(29, 155, 240)', 'rgb(29, 155, 240)'],
				"menuHoverEffect":			['rgba(15, 20, 25, 0.1)', 'rgba(247, 249, 249, 0.1)', 'rgba(231, 233, 234, 0.1)'], // 一番左のメニュー等のホバーエフェクト
				"menuHoverEffectLight":		['rgb(247, 249, 249)', 'rgb(30, 39, 50)', 'rgb(22, 24, 28)'], // 設定画面のホバーエフェクト
				"retweeted":				['rgb(0, 186, 124)', 'rgb(0, 186, 124)', 'rgb(0, 186, 124)'],
				"favorited":				['rgb(249, 24, 128)', 'rgb(249, 24, 128)', 'rgb(249, 24, 128)'],
				"dropdownBackgroundColor": 	['rgb(255, 255, 255)', 'rgb(59, 59, 59)', 'rgb(59, 59, 59)'],
				"dropdownFontColor":		['rgb(0, 0, 0)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)'],
				"dropdownBorderColor":		['rgb(118, 118, 118)', 'rgb(133, 133, 133)', 'rgb(133, 133, 133)'],
				"buttonBackgroundColor":	['rgb(239, 239, 239)', 'rgb(107, 107, 107)', 'rgb(107, 107, 107)'],
				"buttonFontColor":			['rgb(0, 0, 0)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)'],
				"buttonBorderColor":		['rgb(239, 239, 239)', 'rgb(107, 107, 107)', 'rgb(107, 107, 107)'],
				"conversationLineColor":	['rgb(207, 217, 222)', 'rgb(66, 83, 100)', 'rgb(51, 54, 57)'],
			};
		}

		/**
		* 指定されたカラーパレットから現在のテーマの色を返します
		* @param {string} colorName - 色名 (例: "fontColor")
		* @param {number} [darkMode] - テーマ番号 (0=デフォルト, 1=ダークブルー, 2=ブラック) (省略時は現在のテーマ)
		* @returns {string} - 色のRGB文字列 (例: "rgb(255,255,255)")
		*/
		get(colorName, darkMode = sessionData.themeMode?.themeNum ?? getCookie('night_mode') ?? 0){
			return this.colors[colorName][darkMode];
		}

		/**
		* 指定した色にアルファ値（透過）を加えたRGBA形式を返します
		* @param {string} colorName - 色名 (例: "borderColor")
		* @param {number} alpha - 透過度 (0.0〜1.0)
		* @param {number} [darkMode] - テーマ番号（0=デフォルト, 1=ダークブルー, 2=ブラック) (省略時は現在のテーマ)
		* @returns {string} - RGBA文字列 (例: "rgba(255,255,255,1.0)")
		*/
		getWithAlpha(colorName, alpha, darkMode = sessionData.themeMode?.themeNum ?? getCookie('night_mode') ?? 0){
			return `rgba(${this.colors[colorName][darkMode].match(/\d+/g).join(", ")}, ${alpha})`;
		}
	}
	const colors = new Colors();

	class TwitterTextI18n {
		#version = 202512208000;
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
			let jsonTextData = null;
			if(this.#testData){
				this.#textData = this.#testData;
				this.#isReady = true;
				return;
			}else if(storedData[lang]?.[type]?.jsonText && storedData?.[lang]?.[type]?.dataVersion === this.#version){
				jsonTextData = storedData[lang][type].jsonText;
			}else{
				const jsonTextDataBaseUrl = `https://raw.githubusercontent.com/Happy-come-come/UserScripts/main/Twitter%E3%82%92%E5%B0%91%E3%81%97%E4%BE%BF%E5%88%A9%E3%81%AB%E3%80%82/data/TwitterTextI18nData/textData/json/`
				jsonTextData = await request({url: `${jsonTextDataBaseUrl}${lang}_${type}.json?v=${this.#version}`, method: 'GET', respType: 'text'});
				if(!jsonTextData){
					throw new Error('Failed to load text data');
				}
				if(!storedData[lang])storedData[lang] = {};
				if(!storedData[lang][type])storedData[lang][type] = {};
				storedData[lang][type].jsonText = jsonTextData;
				storedData[lang][type].dataVersion = this.#version;
				await saveToIndexedDB('MTLU_TwitterTextI18n', 'textData', storedData);
			}
			const textData = JSON.parse(jsonTextData);
			if(!textData){
				throw new Error('Failed to load text data');
			}
			this.#textData = textData;
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
				}else if(Array.isArray(args)){
					for(let i = 0; i < selectedText.arguments.length; i++){
						argsObj[selectedText.arguments[i]] = args[i] ?? '';
					}
				}
				return this.#applyPlaceholders(selectedText.value, argsObj);
			}
			if(selectedText.type === 'webI18nTemplateFunction'){
				return this.#applyTemplate(selectedText.value, args, props);
			}
			if(selectedText.type === 'apkI18nTemplateFunction'){
				return this.#formatString(selectedText.value, args);
			}
		}

		#applyTemplate(templateParts, args, props){
			// templateParts は配列であることを前提
			let result = '';
			for(let i = 0; i < templateParts.length; i++){
				// まずテンプレートのプレースホルダーを props で展開
				result += this.#applyPlaceholders(templateParts[i], props);
				// そのあと、無名 args があるなら interleave
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

		#applyPlaceholders(templateStr, context = {}){
			return templateStr.replace(/{{\s*(\w+)\s*}}/g, (_, key) => {
				return context[key] !== undefined ? context[key] : '';
			});
		}
	}
	const twitterTextI18n = new TwitterTextI18n();

	immediateRunFunctions();



	async function displayChangelog(currentScriptVersion, lastScriptVersion){
		if(document.getElementById('changelogOverlay') || scriptSettings.makeTwitterLittleUseful.displayChangelog === false || compareVersions(currentScriptVersion, lastScriptVersion) !== 1)return;
		const changelogs = {
			"2.1.1.0": {
				"newFeatures": ["imageZoom"],
				"updateDate": "2025-01-27T01:00:00+09:00",
			},
			"2.2.3.0": {
				"newFeatures": ["customizeMenuButton"],
				"updateDate": "2025-05-16T07:00:00+09:00",
			},
			"2.3.1.13": {
				"notification":
	`
English text is below the Japanese text.

OldTweetDeck(このスクリプトとは無関係なプロジェクト)ユーザーが2025/11/07にアカウント凍結されたようです。
これはTwitter側から正規ではない方法のAPI利用を検出されたためかもしれません。
このスクリプトも同様に
・${envText.webhookBringsTweetsToDiscord.settings.displayName}
・${envText.engagementRestorer.settings.displayName}
・${envText.helloTweetWhereAreYouFrom.settings.displayName}
・${envText.sneakilyFavorite.settings.displayName}
・${envText.showAllMedias.settings.displayName}
でTwitterのAPIを利用しています。
これらのスクリプトを利用している場合、アカウントが凍結される可能性があります。
2025/11/07 04:00現在、私のアカウントでは問題が発生していませんが、今後どうなるのかは不明です。
また、2025/11/10にTwitterはtwitter.comドメインを手放すとしており、その変更に際して規制が強化される可能性もあります。
もし心配な場合は上記の機能を無効化するか、スクリプトの利用を中止してください。
このスクリプトの今後については、状況を見ながら判断したいと思います。
ご理解のほど、よろしくお願いいたします。

It seems that a user of OldTweetDeck (an unrelated project to this script) had their account suspended on 2025/11/07.
This may be because Twitter detected the use of non-official methods to access their API.
This script also uses Twitter's API in the following features:
・${envText.webhookBringsTweetsToDiscord.settings.displayName}
・${envText.engagementRestorer.settings.displayName}
・${envText.helloTweetWhereAreYouFrom.settings.displayName}
・${envText.sneakilyFavorite.settings.displayName}
・${envText.showAllMedias.settings.displayName}
If you are using these features, your account may be suspended.
As of 04:00 on 2025/11/07, my account has not experienced any issues, but it is unclear what will happen in the future.
Additionally, Twitter is set to relinquish the twitter.com domain on 2025/11/10, and there is a possibility that regulations may be strengthened during that change.
If you are concerned, please disable the above features or stop using the script.
I will decide on the future of this script while monitoring the situation.
Thank you for your understanding.`,
				"updateDate": "2025-11-07T01:00:00+09:00",
			},
			"2.4.0.0": {
				"newFeatures": ["fixChatLinkNavigation"],
				"updateDate": "2025-12-19T01:01:30+09:00",
			},
			"2.5.0.0": {
				"newFeatures": ["blackToDarkblue"],
				"updateDate": "2026-03-29T06:00:00+09:00",
			},
			"2.6.0.0": {
				"newFeatures": ["hideAuthenticityTag"],
				"updateDate": "2026-03-30T21:00:00+09:00",
			},
			"2.7.0.0": {
				"newFeatures": ["mediaOpenByPhotoFilter"],
				"updateDate": "2026-08-16T00:00:00+09:00",
			}
		};
		const allVersions = Object.keys(changelogs).sort((a, b) => compareVersions(b, a));
		const showVersions = allVersions.filter(v =>
			(compareVersions(v, lastScriptVersion) === 1) && (compareVersions(v, currentScriptVersion) !== 1)
		);
		if(showVersions.length === 0)return;
		const textData = envText.makeTwitterLittleUseful.displayChangelog;
		const changelogHeader = h('div', {
				style: {
					display: "flex",
					padding: "10px",
					borderBottom: `1px solid ${colors.get("borderColor")}`,
					borderTopLeftRadius: "10px",
					borderTopRightRadius: "10px",
					justifyContent: "space-between",
					alignItems: "center",
					flexDirection: "column",
				},
			},
			h('span', {
					style: {
						fontSize: "1.5em",
						margin: "0px",
					}
				},
				envText.makeTwitterLittleUseful.scriptName,
			),
			h('span', {
					style: {
						fontSize: "1.5em",
						margin: "0px",
					}
				},
				textData.changelogTitle,
			),
		);

		const changelogMain = h('div', {
				style: {
					display: "flex",
					padding: "10px",
					overflowY: "auto",
					overflowX: "hidden",
					flexDirection: "column",
					flex: "1 1 auto",
					minHeight: 0,
				},
			},
			h('span', {
					'MTLU-Id': 'selfProtectionText',
					style: {
						margin: "0px",
						padding: "0px",
					}
				},
				textData.selfProtection,
			),
			h('div', {
					'MTLU-Id': 'scriptUrlContainer',
					style: {
						display: "flex",
						padding: "0 0 10px 0",
						alignItems: "center",
					},
					onClick: (e) => {
						e.stopPropagation();
					}
				},
				h('label', {
						'MTLU-Id': 'scriptUrlLabel',
						style: {
							margin: "0px",
						}
					},
					textData.moreInfo,
				),
				h('a', {
						'MTLU-Id': 'scriptUrl',
						style: {
							margin: "0px",
							color: colors.get("twitterBlue"),
						},
						href: 'https://greasyfork.org/scripts/478248',
						textContent: textData.here,
						target: '_blank',
						rel: 'noopener noreferrer',
					}
				)
			),
			...showVersions.map((version)=>{
				const changelogVersionContainer = h('div', {
						'MTLU-Id': 'changelogVersionContainer',
						style: {
							marginBottom: "10px",
						},
					},
					h('span', {
							'MTLU-Id': 'changelogVersionHeader',
							style: {
								fontSize: "1.2em",
								margin: "0px",
							},
						},
						`${textData.version} ${version}`,
					),
					h('span', {
							'MTLU-Id': 'changelogVersionDate',
							style: {
								margin: "0px 0px 0px 10px",
							},
						},
						`${textData.updateDate} ${new Date(changelogs[version].updateDate).toLocaleString()}`,
					),
					(()=>{
						if(changelogs[version].notification){
							return h('div', {
									'MTLU-Id': 'changelogNotificationContainer',
									style: {
										padding: "10px",
										border: `1px solid ${colors.get("borderColor")}`,
										borderRadius: "5px",
									},
								},
								h('span', {
										'MTLU-Id': 'changelogNotificationHeader',
										style: {
											fontSize: "1.1em",
											fontWeight: "bold",
											margin: "0px 0 5px 0",
										},
									},
									textData.importantNoticeHeader,
								),
								h('br', {}),
								h('span', {
										'MTLU-Id': 'changelogNotificationText',
										innerHTML: escapeHTML(changelogs[version].notification).replace(/\n/g, '<br>'),
									},
								),
							);
						}
					})(),
					changelogs[version].newFeatures?.length && h('div', {
							'MTLU-Id': 'changelogVersionList',
							style: {
								listStyleType: "disc",
								padding: "10px",
								border: `1px solid ${colors.get("borderColor")}`,
								borderRadius: "5px",
							},
						},
						h('span', {
								'MTLU-Id': 'newFeaturesListHeader',
								style: {
									fontSize: "1.1em",
									margin: "0px",
								},
							},
							textData.newFeaturesListHeader,
						),
						h('ul', {
								'MTLU-Id': 'newFeaturesList',
								style: {
									paddingInlineStart: "20px",
								}
							},
							changelogs[version].newFeatures?.map((feature)=>{
								return h('li', {
										'MTLU-Id': 'changelogVersionListItem',
									},
									envText[feature].settings.displayName,
									h('ul', {
											'MTLU-Id': 'featureDescriptionList',
										},
										h('li', {
												'MTLU-Id': 'featureDescriptionListItem',
											},
											envText[feature].settings.description,
										),
									),
								);
							}),
						),
					),
				);
				return changelogVersionContainer;
			}),
		);

		const changelogFooter = h('div', {
				'MTLU-Id': 'changelogFooter',
				style: {
					display: "flex",
					padding: "10px",
					borderTop: `1px solid ${colors.get("borderColor")}`,
					borderBottomLeftRadius: "10px",
					borderBottomRightRadius: "10px",
					justifyContent: "flex-end",
					alignItems: "center",
				},
			},
			h('div', {
					'MTLU-Id': 'neverDisplayContainer',
					style: {
						display: "flex",
						alignItems: "center",
						userSelect: "none",
					},
					onClick: (e) => {
						e.stopPropagation();
					}
				},
				h('label', {
						'MTLU-Id': 'neverDisplayLabel',
						style: {
							margin: "0px",
						},
						for: 'neverDisplayCheckbox',
					},
					textData.neverDisplay,
				),
				h('input', {
						'MTLU-Id': 'neverDisplayCheckbox',
						type: 'checkbox',
						id: 'neverDisplayCheckbox',
					}
				)
			),
			h('button', {
					'MTLU-Id': 'closeButton',
					style: {
						marginLeft: "10px",
					},
					onClick: async () => {
						if(neverDisplayCheckbox.checked){
							scriptSettings.makeTwitterLittleUseful.displayChangelog = false;
							await saveSettings();
						}
						changelogOverlay.remove();
					}
				},
				textData.closeButtonText,
			),
			h('button', {
					'MTLU-Id': 'openSettingsButton',
					style: {
						marginLeft: "10px",
					},
					onClick: () => {
						createSettingsPage();
						changelogOverlay.remove();
					}
				},
				textData.openSettingsButtonText,
			),
		);
		const neverDisplayCheckbox = changelogFooter.querySelector('#neverDisplayCheckbox');
		const changelogContainer = h("div", {
				className: "MTLU_changelogContainer",
				style: {
					display: "flex",
					flexDirection: "column",
					backgroundColor: colors.get("backgroundColor"),
					color: colors.get("fontColor"),
					fontColor: colors.get("fontColor"),
					padding: "0px",
					borderRadius: "10px",
					maxHeight: "90%",
					maxWidth: "90%",
					overflowX: "hidden",
					overflowY: "hidden",
					flexShrink: "0",
					flexGrow: "0",
					border: `2px solid ${colors.get("borderColor")}`,
				},
				onClick: (e) => {
					e.stopPropagation();
				},
			},
			changelogHeader,
			changelogMain,
			changelogFooter,
		);
		const changelogOverlay = h("div", {
				id: "changelogOverlay",
				className: "MTLU_container MTLU_changelogOverlay",
				'MTLU-Id': 'changelogOverlay',
				style: {
					position: "fixed",
					top: "0",
					left: "0",
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					zIndex: "1000",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				},
				onClick: async (e) => {
					if(neverDisplayCheckbox.checked){
						scriptSettings.makeTwitterLittleUseful.displayChangelog = false;
						await saveSettings();
					}
					changelogOverlay.remove();
				},
			},
			changelogContainer,
		);
		document.body.appendChild(changelogOverlay);
	}

	async function firstTime(){
		if(!((await getFromIndexedDB('makeTwitterLittleUseful', 'settings')) || localStorage.getItem('Make_Twitter_little_useful'))){
			createSettingsPage();
		}
	}
	async function whenChangeScriptVersion(){
		const currentScriptVersion = GM_info.script.version;
		const lastScriptVersion = scriptDataStore.makeTwitterLittleUseful?.version || "99.0.0.0";
		if(compareVersions(currentScriptVersion, lastScriptVersion) === 1){
			displayChangelog(currentScriptVersion, lastScriptVersion);
			scriptDataStore.makeTwitterLittleUseful.version = currentScriptVersion;
			await saveScriptDataStore();
		}
	}
	async function init(){
		firstTime();
		whenChangeScriptVersion();
		updateThemeMode(whenChangeThemeMode);
		await fetchUserData();
		await twitterTextI18n.loadTextData(sessionData.userData.language, scriptSettings.makeTwitterLittleUseful.uiTextType || 'old');
		window.addEventListener("scroll", update);
		locationChange(document.getElementById('react-root'));
		main().then(()=>{sessionData.isFirstRun = false;});
		getPixivLinkCollection();
		addEventToHomeButton();
		addEventToScrollSnapSwipeableList();
		addSettingsButtonToTwitterSettingsMenu(true);
	}
	await init();
})();
