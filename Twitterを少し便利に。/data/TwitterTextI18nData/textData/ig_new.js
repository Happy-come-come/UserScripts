const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Maka gi"+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Na-eso"+e.noun}
	},
	"pinnedListsModuleHeader": undefined,
	"tweetsRetweeted": undefined,
	"retweet": {"type":"string","value":"Repost"},
	"unDoRetweet": {"type":"string","value":"Undo repost"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"Na-eso"},
	"unfollow": {"type":"string","value":"Kwụsị iso"},
	"blocked": {"type":"string","value":"Egbochiri"},
	"unblock": {"type":"string","value":"Wepụ mgbochi"},
	"joinDateFrom": {
		"type": "function",
		"arguments": ["joinDate"],
		"value": function(e){return"Sonyere "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Followed by "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Followed by "," and "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Followed by ",", ",", and "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Followed by ",", ",", and "," others you follow"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" post"+i(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Mmasị gasị"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" photos & videos"]}
	},
	"home": {"type":"string","value":"Ụlọ"},
	"search": {"type":"string","value":"Nyochaa"},
	"notifications": {"type":"string","value":"Nziọkwa"},
	"messages": {"type":"string","value":"Ozi"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Ebenrụtụakā gasị"},
	"jobs": {"type":"string","value":"Jobs"},
	"communities": {"type":"string","value":"Ogbe"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"My Profile"},
	"lists": {"type":"string","value":"Ndepụta"},
	"monetization": {"type":"string","value":"Ịkpata ego"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Create your Space"},
	"settingsAndPrivacy": {"type":"string","value":"Nchekwa na nzuzo"},
	"addAnExistingAccount": {"type":"string","value":"Tinye akaụntụ dị adị"},
	"manageAccounts": {"type":"string","value":"Jikwaa akaụntụ"},
	"switchToAccount": {
		"type": "function",
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