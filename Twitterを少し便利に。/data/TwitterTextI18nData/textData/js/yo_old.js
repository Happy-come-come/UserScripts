const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(n){return"Fún ọ"+n.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(n){return"Ń tẹ̀lé"+n.noun}
	},
	"pinnedListsModuleHeader": undefined,
	"tweetsRetweeted": undefined,
	"retweet": {"type":"string","value":"Rìtíwìtì"},
	"unDoRetweet": {"type":"string","value":"Dá Rìtwíìtì padà "},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"Ń tẹ̀lé"},
	"unfollow": {"type":"string","value":"Má tẹ̀lé mọ́"},
	"blocked": {"type":"string","value":"Ti Dínà"},
	"unblock": {"type":"string","value":"Yọ ìdínà kúro"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(n){return"Darapọ̀ "+n.joinDate}
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
		"value": function(){return[props.formattedCount+" Àwọn Twíìtì"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Àwọn ìfẹ́ràn"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" photos & videos"]}
	},
	"home": {"type":"string","value":"Ilé"},
	"explore": {"type":"string","value":"Ìwádìí"},
	"notifications": {"type":"string","value":"Àwọn ìfitónilétí"},
	"connect_people": {"type":"string","value":"Sopọ̀"},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Àwọn ìfiránṣẹ́"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Àwọn Búkúmáàkì"},
	"jobs": {"type":"string","value":"Jobs"},
	"business": {"type":"string","value":"Òwò"},
	"communities": {"type":"string","value":"Àwùjọ"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"My Profile"},
	"lists": {"type":"string","value":"Àtòkọ"},
	"monetization": {"type":"string","value":"Fifipawó"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Create your Space"},
	"settingsAndPrivacy": {"type":"string","value":"Àwọn ààtò àti ìpamọ́"},
	"moreMenu": {"type":"string","value":"Síwájú síi"},
	"addAnExistingAccount": {"type":"string","value":"Fi àkántì tó ti wà tẹ́lẹ̀ kún u"},
	"manageAccounts": {"type":"string","value":"Ṣàkóso àwọn àkántì"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(n){return"Yí sí @"+n.screenName}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"Àwọn ààtò"},
	"now": {"type":"string","value":"Nísinyí "},
	"day": {"type":"string","value":"Ọjọ"},
	"month": {"type":"string","value":"Oṣù"},
	"year": {"type":"string","value":"Ọdún"},
	"january": {"type":"string","value":"Oṣù Ṣẹẹrẹ"},
	"february": {"type":"string","value":"Oṣù Èrèlé"},
	"march": {"type":"string","value":"Oṣù Ẹrẹ́nà"},
	"april": {"type":"string","value":"Oṣù Igbe"},
	"may": {"type":"string","value":"Oṣù Èbìbí"},
	"june": {"type":"string","value":"Oṣù Okúdù"},
	"july": {"type":"string","value":"Oṣù Agẹmọ"},
	"august": {"type":"string","value":"Oṣù Ògún"},
	"september": {"type":"string","value":"Oṣù Ọwẹ́wẹ̀"},
	"october": {"type":"string","value":"Oṣù Ọ̀wàrà"},
	"november": {"type":"string","value":"Oṣù Bélú"},
	"december": {"type":"string","value":"Oṣù Ọpẹ́"}
};

export default text;
