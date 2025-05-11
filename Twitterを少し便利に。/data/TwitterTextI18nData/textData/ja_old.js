const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"おすすめ"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"フォロー中"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"固定"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%sさんがリツイートしました"},
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"リツイートを取り消す"},
	"quoteTweet": {"type":"string","value":"引用ツイート"},
	"profileTabTitleTimeline": {"type":"string","value":"ツイート"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"返信"},
	"profileTabTitleHighlights": {"type":"string","value":"ハイライト"},
	"profileTabTitleMedia": {"type":"string","value":"メディア"},
	"profileTabTitleLikes": {"type":"string","value":"いいね"},
	"following": {"type":"string","value":"フォロー中"},
	"unfollow": {"type":"string","value":"フォロー解除"},
	"blocked": {"type":"string","value":"ブロック中"},
	"unblock": {"type":"string","value":"ブロック解除"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return e.joinDate+"からTwitterを利用しています"}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["","さんにフォローされています"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["","さんと","さんにフォローされています"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["","さん、","さん、","さんにフォローされています"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["フォローしている","さん、","さん、他","人にフォローされています"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" 件のツイート"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" 件のいいね"]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"ホーム"},
	"search": {"type":"string","value":"話題を検索"},
	"notifications": {"type":"string","value":"通知"},
	"messages": {"type":"string","value":"メッセージ"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"ブックマーク"},
	"jobs": {"type":"string","value":"求人"},
	"communities": {"type":"string","value":"コミュニティ"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"認証済み組織"},
	"profile": {"type":"string","value":"プロフィール"},
	"lists": {"type":"string","value":"リスト"},
	"monetization": {"type":"string","value":"収益化"},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"設定とプライバシー"},
	"addAnExistingAccount": {"type":"string","value":"既存のアカウントを追加"},
	"manageAccounts": {"type":"string","value":"アカウントを管理"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"@"+e.screenName+"に切り替える"}
	},
	"postTweet": {"type":"string","value":"ツイートする"},
	"settings": {"type":"string","value":"設定"},
	"now": {"type":"string","value":"現在"},
	"day": {"type":"string","value":"日"},
	"month": {"type":"string","value":"月"},
	"year": {"type":"string","value":"年"},
	"january": {"type":"string","value":"1月"},
	"february": {"type":"string","value":"2月"},
	"march": {"type":"string","value":"3"},
	"april": {"type":"string","value":"4月"},
	"may": {"type":"string","value":"5月"},
	"june": {"type":"string","value":"6月"},
	"july": {"type":"string","value":"7月"},
	"august": {"type":"string","value":"8月"},
	"september": {"type":"string","value":"9月"},
	"october": {"type":"string","value":"10月"},
	"november": {"type":"string","value":"11月"},
	"december": {"type":"string","value":"12月"}
};

export default text;