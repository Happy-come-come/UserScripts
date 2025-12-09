const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"為你推薦"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"跟隨中"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"已釘選"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s 已轉發"},
	"retweet": {"type":"string","value":"轉發"},
	"unDoRetweet": {"type":"string","value":"取消轉發"},
	"quoteTweet": {"type":"string","value":"引用"},
	"profileTabTitleTimeline": {"type":"string","value":"貼文"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"回覆"},
	"profileTabTitleHighlights": {"type":"string","value":"精選內容"},
	"profileTabTitleMedia": {"type":"string","value":"媒體"},
	"profileTabTitleLikes": {"type":"string","value":"喜歡的內容"},
	"following": {"type":"string","value":"正在跟隨"},
	"unfollow": {"type":"string","value":"取消跟隨"},
	"blocked": {"type":"string","value":"己封鎖"},
	"unblock": {"type":"string","value":"解除封鎖"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"已加入 "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["已被 "," 跟隨"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["已被 "," 和 "," 跟隨"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["已被 ","、"," 和 "," 跟隨"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["已被你跟隨的 ","、"," 和其他 "," 人跟隨"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" 則貼文"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" 個喜歡"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" 個相片和影片"]}
	},
	"home": {"type":"string","value":"首頁"},
	"explore": {"type":"string","value":"探索"},
	"notifications": {"type":"string","value":"通知"},
	"chat": {"type":"string","value":"聊天"},
	"messages": {"type":"string","value":"訊息"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"書籤"},
	"jobs": {"type":"string","value":"工作機會"},
	"communities": {"type":"string","value":"社群"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"已認證組織"},
	"profile": {"type":"string","value":"我的個人資料"},
	"lists": {"type":"string","value":"列表"},
	"monetization": {"type":"string","value":"營利"},
	"ads": {"type":"string","value":"廣告"},
	"createYourSpace": {"type":"string","value":"建立你的音訊空間"},
	"settingsAndPrivacy": {"type":"string","value":"設定和隱私"},
	"moreMenu": {"type":"string","value":"更多"},
	"addAnExistingAccount": {"type":"string","value":"加入現有的帳戶"},
	"manageAccounts": {"type":"string","value":"管理帳戶"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"切換至 @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"發佈"},
	"settings": {"type":"string","value":"設定"},
	"now": {"type":"string","value":"現在"},
	"day": {"type":"string","value":"日"},
	"month": {"type":"string","value":"月"},
	"year": {"type":"string","value":"年"},
	"january": {"type":"string","value":"1 月"},
	"february": {"type":"string","value":"2 月"},
	"march": {"type":"string","value":"3 月"},
	"april": {"type":"string","value":"4 月"},
	"may": {"type":"string","value":"5 月"},
	"june": {"type":"string","value":"6 月"},
	"july": {"type":"string","value":"7 月"},
	"august": {"type":"string","value":"8 月"},
	"september": {"type":"string","value":"9 月"},
	"october": {"type":"string","value":"10 月"},
	"november": {"type":"string","value":"11 月"},
	"december": {"type":"string","value":"12 月"}
};

export default text;