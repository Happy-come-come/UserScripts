const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"為你推薦"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"正在跟隨"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"已釘選"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s 已轉推"},
	"replyAction": {"type":"string","value":"回覆"},
	"repostAction": {"type":"string","value":"轉發"},
	"likeAction": {"type":"string","value":"喜歡"},
	"bookmarkAction": {"type":"string","value":"書籤"},
	"showMore": {"type":"string","value":"顯示更多"},
	"viewThread": {"type":"string","value":"顯示此對話串"},
	"previousImage": {"type":"string","value":"上一張圖片"},
	"nextImage": {"type":"string","value":"下一張圖片"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["來自 "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5.0 顆星 – "+e.appNumRatings+" 個評分"}
	},
	"verifiedAccount": {"type":"string","value":"已認證的帳戶"},
	"communityAdminBadge": {"type":"string","value":"管理員"},
	"communityModeratorBadge": {"type":"string","value":"版主"},
	"communityMemberBadge": {"type":"string","value":"成員"},
	"viewsLabel": {"type":"string","value":"次觀看"},
	"viewQuotes": {"type":"string","value":"查看引用"},
	"viewActivity": {"type":"string","value":"查看活動"},
	"communityNotes": {"type":"string","value":"社群備註"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"這則備註有幫助嗎？"},
	"communityNoteHelpful": {"type":"string","value":"有幫助"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"有點幫助"},
	"communityNoteNotHelpful": {"type":"string","value":"沒有幫助"},
	"cashtagComingSoon": {"type":"string","value":"即將推出"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["現價 "]}
	},
	"grokAnswerFun": {"type":"string","value":"由 Grok 以趣味模式回答"},
	"grokAnswer": {"type":"string","value":"由 Grok 回答"},
	"grokImageBy": {"type":"string","value":"由 Grok 創作的圖片"},
	"grokShowMore": {"type":"string","value":"顯示更多"},
	"grokCreateVersion": {"type":"string","value":"使用 Grok 建立你的版本"},
	"grokAskYourself": {"type":"string","value":"來問 Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" 個網頁"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" 則貼文"}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" 個網頁和貼文"}
	},
	"mostRelevant": {"type":"string","value":"相關"},
	"mostLiked": {"type":"string","value":"喜歡的內容"},
	"mostRecent": {"type":"string","value":"最近"},
	"sortReplies": {"type":"string","value":"將回覆排序"},
	"lastEdited": {"type":"string","value":"上次編輯時間："},
	"newPostVersion": {"type":"string","value":"這則貼文有新版本。"},
	"opensEditHistory": {"type":"string","value":"開啟編輯記錄"},
	"viewLatestPost": {"type":"string","value":"查看最新貼文"},
	"opensLatestPost": {"type":"string","value":"開啟此貼文的新版本"},
	"mediaTaggedSelf": {"type":"string","value":"你"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["來自 "]}
	},
	"poll": {"type":"string","value":"投票"},
	"viewPoll": {"type":"string","value":"顯示此投票"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount"],
		"value": function(e){return e.formattedCount+" 票"}
	},
	"pollEnded": {"type":"string","value":"最終結果"},
	"retweet": {"type":"string","value":"轉推"},
	"unDoRetweet": {"type":"string","value":"取消轉推"},
	"quoteTweet": {"type":"string","value":"引用推文"},
	"profileTabTitleTimeline": {"type":"string","value":"推文"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"回覆"},
	"profileTabTitleHighlights": {"type":"string","value":"精選內容"},
	"profileTabTitleMedia": {"type":"string","value":"媒體"},
	"profileTabTitleLikes": {"type":"string","value":"喜歡的內容"},
	"following": {"type":"string","value":"正在跟隨"},
	"follow": {"type":"string","value":"跟隨"},
	"followBack": {"type":"string","value":"回跟"},
	"followers": {"type":"string","value":"跟隨者"},
	"followsYou": {"type":"string","value":"跟隨你"},
	"subscriptions": {"type":"string","value":"訂閱服務"},
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
		"value": function(){return ["已被 "," 跟隨"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["已被 "," 和 "," 跟隨"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["已被 ","、"," 和 "," 跟隨"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["已被你跟隨的 ","、"," 和其他 "," 人跟隨"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" 則推文"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" 個喜歡"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" 個相片和影片"]}
	},
	"home": {"type":"string","value":"首頁"},
	"explore": {"type":"string","value":"探索"},
	"notifications": {"type":"string","value":"通知"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"跟隨"+e.verb}
	},
	"chat": {"type":"string","value":"聊天"},
	"messages": {"type":"string","value":"訊息"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"書籤"},
	"jobs": {"type":"string","value":"工作機會"},
	"business": {"type":"string","value":"商業"},
	"communities": {"type":"string","value":"社群"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"已認證組織"},
	"profile": {"type":"string","value":"我的個人資料"},
	"creatorStudio": {"type":"string","value":"創作者工作室"},
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
	"postTweet": {"type":"string","value":"推文"},
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
