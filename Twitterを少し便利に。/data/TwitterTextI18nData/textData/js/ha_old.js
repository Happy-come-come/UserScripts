const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Don kai"+a.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Ana bin"+a.noun}
	},
	"pinnedListsModuleHeader": undefined,
	"tweetsRetweeted": undefined,
	"retweet": {"type":"string","value":"Sake yin tweet"},
	"unDoRetweet": {"type":"string","value":"Fasa Sake tweet"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"Ana bin"},
	"unfollow": {"type":"string","value":"Fasa bi"},
	"blocked": {"type":"string","value":"An toshe"},
	"unblock": {"type":"string","value":"Buɗe"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(a){return"An shiga "+a.joinDate}
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
		"value": function(){return[props.formattedCount+" Tweet"+t(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Like"+t(props.count,"","s")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" photos & videos"]}
	},
	"home": {"type":"string","value":"Gida"},
	"explore": {"type":"string","value":"Bincike"},
	"notifications": {"type":"string","value":"Sanarwa"},
	"connect_people": {"type":"string","value":"Haɗa"},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Saƙonni"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Alamomi"},
	"jobs": {"type":"string","value":"Jobs"},
	"communities": {"type":"string","value":"Al'umma"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"My Profile"},
	"lists": {"type":"string","value":"Jeri"},
	"monetization": {"type":"string","value":"Samun kuɗi"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Create your Space"},
	"settingsAndPrivacy": {"type":"string","value":"Saitunan da sirrantawa"},
	"moreMenu": {"type":"string","value":"Ƙari"},
	"addAnExistingAccount": {"type":"string","value":"Ƙara asusun da ke akwai"},
	"manageAccounts": {"type":"string","value":"Gudanar da asusu"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(a){return"Sauya zuwa @"+a.screenName}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"Saituna"},
	"now": {"type":"string","value":"Yanzu"},
	"day": {"type":"string","value":"Rana"},
	"month": {"type":"string","value":"Wata"},
	"year": {"type":"string","value":"Shekara"},
	"january": {"type":"string","value":"Janairu"},
	"february": {"type":"string","value":"Faburairu"},
	"march": {"type":"string","value":"Maris"},
	"april": {"type":"string","value":"Afrilu"},
	"may": {"type":"string","value":"Mayu"},
	"june": {"type":"string","value":"Yuni"},
	"july": {"type":"string","value":"Yuli"},
	"august": {"type":"string","value":"Agusta"},
	"september": {"type":"string","value":"Satumba"},
	"october": {"type":"string","value":"Oktuba"},
	"november": {"type":"string","value":"Nuwamba"},
	"december": {"type":"string","value":"Disamba"}
};

export default text;