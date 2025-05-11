const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"为你推荐"+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"关注"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"已置顶"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s 已转帖"},
	"retweet": {"type":"string","value":"转帖"},
	"unDoRetweet": {"type":"string","value":"撤销转帖"},
	"quoteTweet": {"type":"string","value":"引用"},
	"profileTabTitleTimeline": {"type":"string","value":"帖子"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"回复"},
	"profileTabTitleHighlights": {"type":"string","value":"亮点"},
	"profileTabTitleMedia": {"type":"string","value":"媒体"},
	"profileTabTitleLikes": {"type":"string","value":"喜欢"},
	"following": {"type":"string","value":"正在关注"},
	"unfollow": {"type":"string","value":"取消关注"},
	"blocked": {"type":"string","value":"已屏蔽"},
	"unblock": {"type":"string","value":"取消屏蔽"},
	"joinDateFrom": {
		"type": "function",
		"arguments": ["joinDate"],
		"value": function(e){return e.joinDate+" 加入"}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," 关注了此账号"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," 和 "," 关注了此账号"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["","、"," 和 "," 都已关注"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["","、"," 和你关注的另外 "," 人关注了此账号"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" 帖子"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" 喜欢次数"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" 照片和视频"]}
	},
	"home": {"type":"string","value":"主页"},
	"search": {"type":"string","value":"探索"},
	"notifications": {"type":"string","value":"通知"},
	"messages": {"type":"string","value":"私信"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"书签"},
	"jobs": {"type":"string","value":"工作"},
	"communities": {"type":"string","value":"社群"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"认证组织"},
	"profile": {"type":"string","value":"我的个人资料"},
	"lists": {"type":"string","value":"列表"},
	"monetization": {"type":"string","value":"盈利"},
	"ads": {"type":"string","value":"广告"},
	"createYourSpace": {"type":"string","value":"创建你的空间"},
	"settingsAndPrivacy": {"type":"string","value":"设置和隐私"},
	"addAnExistingAccount": {"type":"string","value":"添加已有账号"},
	"manageAccounts": {"type":"string","value":"管理账号"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(e){return"切换到 @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"发帖"},
	"settings": {"type":"string","value":"设置"},
	"now": {"type":"string","value":"现在"},
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