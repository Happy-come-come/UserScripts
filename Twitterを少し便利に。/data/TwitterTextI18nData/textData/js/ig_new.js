const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Maka gi"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Na-eso"+e.noun}
	},
	"pinnedListsModuleHeader": undefined,
	"tweetsRetweeted": undefined,
	"replyAction": {"type":"string","value":"Zaghachi"},
	"repostAction": {"type":"string","value":"Repost"},
	"likeAction": {"type":"string","value":"Mmasị"},
	"bookmarkAction": {"type":"string","value":"Ebenrụtụakā"},
	"showMore": {"type":"string","value":"Gosikwuo"},
	"viewThread": {"type":"string","value":"Gosi eriri okwu a"},
	"previousImage": {"type":"string","value":"Onyonyo gara aga"},
	"nextImage": {"type":"string","value":"Onyonyo na-esote"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["From "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5.0 stars – "+e.appNumRatings+" ratings"}
	},
	"verifiedAccount": {"type":"string","value":"Verified accounts"},
	"communityAdminBadge": {"type":"string","value":"O.nch"},
	"communityModeratorBadge": {"type":"string","value":"O.nhz"},
	"communityMemberBadge": {"type":"string","value":"Onyeòtù"},
	"viewsLabel": {"type":"string","value":"views"},
	"viewQuotes": {"type":"string","value":"View quotes"},
	"viewActivity": {"type":"string","value":"View activity"},
	"communityNotes": undefined,
	"communityNoteHelpfulQuestion": {"type":"string","value":"Ndetu a ọ na-enyere aka?"},
	"communityNoteHelpful": {"type":"string","value":"Ọ na-enyere aka"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Na-enye Obere Aka"},
	"communityNoteNotHelpful": {"type":"string","value":"Ọ Naghị Enye Aka"},
	"cashtagComingSoon": {"type":"string","value":"Na-abịa n'oge adịghị anya"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Now at "]}
	},
	"grokAnswerFun": {"type":"string","value":"Answer by Grok in Fun Mode"},
	"grokAnswer": {"type":"string","value":"Answer by Grok"},
	"grokImageBy": {"type":"string","value":"Image by Grok"},
	"grokShowMore": {"type":"string","value":"Gosikwuo"},
	"grokCreateVersion": {"type":"string","value":"Create your version with Grok"},
	"grokAskYourself": {"type":"string","value":"Ask Grok yourself"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web page"+r(e.count,"","s")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" post"+r(e.count,"","s")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web pages and posts"}
	},
	"mostRelevant": {"type":"string","value":"Relevant"},
	"mostLiked": {"type":"string","value":"Mmasị"},
	"mostRecent": {"type":"string","value":"Nke nso nso"},
	"sortReplies": {"type":"string","value":"Sort replies"},
	"lastEdited": {"type":"string","value":"Oge ikpeazụ edeziri ya"},
	"newPostVersion": {"type":"string","value":"There’s a new version of this post."},
	"opensEditHistory": {"type":"string","value":"N'emepe ndezi aguguala"},
	"viewLatestPost": {"type":"string","value":"See the latest post"},
	"opensLatestPost": {"type":"string","value":"Opens the new version of this post"},
	"mediaTaggedSelf": {"type":"string","value":"Gị"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["From "]}
	},
	"poll": {"type":"string","value":"Ntuli aka"},
	"viewPoll": {"type":"string","value":"Show this poll"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount"],
		"value": function(e){return e.formattedCount+" votu gasi"}
	},
	"pollEnded": {"type":"string","value":"Nsonaazụ ikpeazụ"},
	"retweet": {"type":"string","value":"Repost"},
	"unDoRetweet": {"type":"string","value":"Undo repost"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"Na-eso"},
	"follow": {"type":"string","value":"Soro"},
	"followBack": {"type":"string","value":"Follow back"},
	"followers": {"type":"string","value":"Ndị na-eso"},
	"followsYou": {"type":"string","value":"Na-eso gị"},
	"subscriptions": {"type":"string","value":"Ndenye Aha"},
	"unfollow": {"type":"string","value":"Kwụsị iso"},
	"blocked": {"type":"string","value":"Egbochiri"},
	"unblock": {"type":"string","value":"Wepụ mgbochi"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Sonyere "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Followed by "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Followed by "," and "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Followed by ",", ",", and "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Followed by ",", ",", and "," others you follow"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" post"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Mmasị gasị"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" photos & videos"]}
	},
	"home": {"type":"string","value":"Ụlọ"},
	"explore": {"type":"string","value":"Nyochaa"},
	"notifications": {"type":"string","value":"Nziọkwa"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Follow"+e.verb}
	},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Ozi"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Ebenrụtụakā gasị"},
	"jobs": {"type":"string","value":"Jobs"},
	"business": {"type":"string","value":"Azụmahịa"},
	"communities": {"type":"string","value":"Ogbe"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"My Profile"},
	"creatorStudio": {"type":"string","value":"Studio Onye okike"},
	"lists": {"type":"string","value":"Ndepụta"},
	"monetization": {"type":"string","value":"Ịkpata ego"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Create your Space"},
	"settingsAndPrivacy": {"type":"string","value":"Nchekwa na nzuzo"},
	"moreMenu": {"type":"string","value":"Ọzọ"},
	"addAnExistingAccount": {"type":"string","value":"Tinye akaụntụ dị adị"},
	"manageAccounts": {"type":"string","value":"Jikwaa akaụntụ"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Gbanwee na @"+e.screenName}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"Ntọala"},
	"now": {"type":"string","value":"Ugbu a"},
	"day": {"type":"string","value":"Ụbọchị"},
	"month": {"type":"string","value":"Ọnwa"},
	"year": {"type":"string","value":"Afọ"},
	"january": {"type":"string","value":"Janwarị"},
	"february": {"type":"string","value":"Febụwarị"},
	"march": {"type":"string","value":"Maachị"},
	"april": {"type":"string","value":"Epurel"},
	"may": {"type":"string","value":"Mee"},
	"june": {"type":"string","value":"Juun"},
	"july": {"type":"string","value":"Julaị"},
	"august": {"type":"string","value":"Ọgọstụ"},
	"september": {"type":"string","value":"Septemba"},
	"october": {"type":"string","value":"Ọctoba"},
	"november": {"type":"string","value":"Nọvemba"},
	"december": {"type":"string","value":"Disemba"}
};

export default text;
