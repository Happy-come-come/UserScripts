const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"为你推荐"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"正在关注"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"已置顶"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s 已转推"},
	"replyAction": {"type":"string","value":"回复"},
	"repostAction": {"type":"string","value":"转帖"},
	"likeAction": {"type":"string","value":"喜欢"},
	"bookmarkAction": {"type":"string","value":"书签"},
	"showMore": {"type":"string","value":"显示更多"},
	"viewThread": {"type":"string","value":"显示这个主题帖"},
	"previousImage": {"type":"string","value":"上一张图片"},
	"nextImage": {"type":"string","value":"下一张图片"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["来自 "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5.0 星 – "+e.appNumRatings+" 份评分"}
	},
	"verifiedAccount": {"type":"string","value":"认证账号"},
	"communityAdminBadge": {"type":"string","value":"管理员"},
	"communityModeratorBadge": {"type":"string","value":"版主"},
	"communityMemberBadge": {"type":"string","value":"成员"},
	"viewsLabel": {"type":"string","value":"次观看"},
	"viewQuotes": {"type":"string","value":"查看引用"},
	"viewActivity": {"type":"string","value":"查看动态"},
	"communityNotes": {"type":"string","value":"社群附注"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"这条附注有用吗？"},
	"communityNoteHelpful": {"type":"string","value":"很有用"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"有点用"},
	"communityNoteNotHelpful": {"type":"string","value":"没有用"},
	"cashtagComingSoon": {"type":"string","value":"即将推出"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["当前价格 "]}
	},
	"grokAnswerFun": {"type":"string","value":"由 Grok 在趣味模式下回答"},
	"grokAnswer": {"type":"string","value":"由 Grok 回答"},
	"grokImageBy": {"type":"string","value":"图片由 Grok 生成"},
	"grokShowMore": {"type":"string","value":"显示更多"},
	"grokCreateVersion": {"type":"string","value":"使用 Grok 创建你的版本"},
	"grokAskYourself": {"type":"string","value":"自己去问 Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" 网页"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" 帖子"}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" 网页和帖子"}
	},
	"mostRelevant": {"type":"string","value":"相关"},
	"mostLiked": {"type":"string","value":"喜欢"},
	"mostRecent": {"type":"string","value":"最近"},
	"sortReplies": {"type":"string","value":"对回复排序"},
	"lastEdited": {"type":"string","value":"上次编辑"},
	"newPostVersion": {"type":"string","value":"这个帖子有新的版本。"},
	"opensEditHistory": {"type":"string","value":"打开编辑历史记录"},
	"viewLatestPost": {"type":"string","value":"查看最新帖子"},
	"opensLatestPost": {"type":"string","value":"打开这个帖子的新版本"},
	"mediaTaggedSelf": {"type":"string","value":"你"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["来自 "]}
	},
	"poll": {"type":"string","value":"投票"},
	"viewPoll": {"type":"string","value":"显示投票"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount"],
		"value": function(e){return e.formattedCount+" 次投票"}
	},
	"pollEnded": {"type":"string","value":"最终结果"},
	"retweet": {"type":"string","value":"转推"},
	"unDoRetweet": {"type":"string","value":"撤销转推"},
	"quoteTweet": {"type":"string","value":"引用推文"},
	"profileTabTitleTimeline": {"type":"string","value":"推文"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"回复"},
	"profileTabTitleHighlights": {"type":"string","value":"亮点"},
	"profileTabTitleMedia": {"type":"string","value":"媒体"},
	"profileTabTitleLikes": {"type":"string","value":"喜欢"},
	"following": {"type":"string","value":"正在关注"},
	"follow": {"type":"string","value":"关注"},
	"followBack": {"type":"string","value":"回关"},
	"followers": {"type":"string","value":"关注者"},
	"followsYou": {"type":"string","value":"关注了你"},
	"subscriptions": {"type":"string","value":"订阅服务"},
	"unfollow": {"type":"string","value":"取消关注"},
	"blocked": {"type":"string","value":"已屏蔽"},
	"unblock": {"type":"string","value":"取消屏蔽"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return e.joinDate+" 加入"}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," 关注了此账号"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," 和 "," 关注了此账号"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["","、"," 和 "," 都已关注"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["","、"," 和你关注的另外 "," 人关注了此账号"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" 推文"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" 喜欢次数"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" 照片和视频"]}
	},
	"home": {"type":"string","value":"主页"},
	"explore": {"type":"string","value":"探索"},
	"notifications": {"type":"string","value":"通知"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"关注"+e.verb}
	},
	"chat": {"type":"string","value":"聊天"},
	"messages": {"type":"string","value":"私信"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"书签"},
	"jobs": {"type":"string","value":"工作"},
	"business": {"type":"string","value":"商业"},
	"communities": {"type":"string","value":"社群"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"认证组织"},
	"profile": {"type":"string","value":"我的个人资料"},
	"creatorStudio": {"type":"string","value":"创作者工作室"},
	"lists": {"type":"string","value":"列表"},
	"monetization": {"type":"string","value":"盈利"},
	"ads": {"type":"string","value":"广告"},
	"createYourSpace": {"type":"string","value":"创建你的空间"},
	"settingsAndPrivacy": {"type":"string","value":"设置和隐私"},
	"moreMenu": {"type":"string","value":"更多"},
	"addAnExistingAccount": {"type":"string","value":"添加已有账号"},
	"manageAccounts": {"type":"string","value":"管理账号"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"切换到 @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"发推"},
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
