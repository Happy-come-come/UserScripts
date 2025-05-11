const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Para sa iyo"+a.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Sinusundan"+a.noun}
	},
	"pinnedListsModuleHeader": undefined,
	"tweetsRetweeted": undefined,
	"retweet": {"type":"string","value":"I-retweet"},
	"unDoRetweet": {"type":"string","value":"Huwag nang I-retweet"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"Sinusundan"},
	"unfollow": {"type":"string","value":"I-unfollow"},
	"blocked": {"type":"string","value":"Na-block"},
	"unblock": {"type":"string","value":"I-unblock"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(a){return"Sumali noong "+a.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Sinusundan ni "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Sinusundan nina "," at "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Sinusundan nina ",", ",", at "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Sinusundan nina ",", ",", at ng "," pang sinusundan mo"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" "+e(props.count,"","Mga ")+"Tweet"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" "+e(props.count,"","Mga ")+"Like"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" "+e(props.count,"","(na) ")+"larawan at video"]}
	},
	"home": {"type":"string","value":"Home"},
	"search": {"type":"string","value":"Mag-explore"},
	"notifications": {"type":"string","value":"Mga Abiso"},
	"messages": {"type":"string","value":"Mga Mensahe"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Mga Bookmark"},
	"jobs": {"type":"string","value":"Mga trabaho"},
	"communities": {"type":"string","value":"Komunidad"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Mga Beripikadong Org"},
	"profile": {"type":"string","value":"Ang Aking Profile"},
	"lists": {"type":"string","value":"Listahan"},
	"monetization": {"type":"string","value":"Monetization"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Gumawa ng Space mo"},
	"settingsAndPrivacy": {"type":"string","value":"Mga setting at pagkapribado"},
	"addAnExistingAccount": {"type":"string","value":"Magdagdag ng kasalukuyang account"},
	"manageAccounts": {"type":"string","value":"Pamahalaan ang mga account"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(a){return"Lumipat kay @"+a.screenName}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"Mga Setting"},
	"now": {"type":"string","value":"Ngayon"},
	"day": {"type":"string","value":"Araw"},
	"month": {"type":"string","value":"Buwan"},
	"year": {"type":"string","value":"Taon"},
	"january": {"type":"string","value":"Enero"},
	"february": {"type":"string","value":"Pebrero"},
	"march": {"type":"string","value":"Marso"},
	"april": {"type":"string","value":"Abril"},
	"may": {"type":"string","value":"Mayo"},
	"june": {"type":"string","value":"Hunyo"},
	"july": {"type":"string","value":"Hulyo"},
	"august": {"type":"string","value":"Agosto"},
	"september": {"type":"string","value":"Setyembre"},
	"october": {"type":"string","value":"Oktubre"},
	"november": {"type":"string","value":"Nobyembre"},
	"december": {"type":"string","value":"Disyembre"}
};

export default text;