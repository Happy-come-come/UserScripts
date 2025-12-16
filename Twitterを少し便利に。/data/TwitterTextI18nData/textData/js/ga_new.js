const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"For you"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Following"+e.noun}
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
	"following": {"type":"string","value":"Á Leanúint"},
	"unfollow": {"type":"string","value":"Ná lean"},
	"blocked": {"type":"string","value":"Coiscthe"},
	"unblock": {"type":"string","value":"Díchoisc"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Cláraithe "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Á leanúint ag "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Á leanúint ag "," agus "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Á leanúint ag ",", "," agus "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Á leanúint ag ",", "," agus ag "," eile atá á leanúint agat"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" post"+o(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" "+i(props.count,""+props.count,""+props.count,"1",""+props.count,"2")+" Is maith liom"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" photos & videos"]}
	},
	"home": {"type":"string","value":"Baile"},
	"explore": {"type":"string","value":"Féach thart"},
	"notifications": {"type":"string","value":"Fógraí"},
	"connect_people": {"type":"string","value":"Nasc"},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Teachtaireachtaí"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Leabharmharcanna"},
	"jobs": {"type":"string","value":"Jobs"},
	"business": {"type":"string","value":"Gnó"},
	"communities": {"type":"string","value":"Pobal"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"Mo Phróifíl"},
	"lists": {"type":"string","value":"Liosta"},
	"monetization": {"type":"string","value":"Luach airgid a chur ar rud"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Create your Space"},
	"settingsAndPrivacy": {"type":"string","value":"Socruithe agus príobháideachas"},
	"moreMenu": {"type":"string","value":"Tuilleadh"},
	"addAnExistingAccount": {"type":"string","value":"Cuir cuntas atá ann leis"},
	"manageAccounts": {"type":"string","value":"Bainistigh cuntais"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Athraigh go @"+e.screenName}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"Socruithe"},
	"now": {"type":"string","value":"Anois"},
	"day": {"type":"string","value":"Lá"},
	"month": {"type":"string","value":"Mí"},
	"year": {"type":"string","value":"Bliain"},
	"january": {"type":"string","value":"Eanáir"},
	"february": {"type":"string","value":"Feabhra"},
	"march": {"type":"string","value":"Márta"},
	"april": {"type":"string","value":"Aibreán"},
	"may": {"type":"string","value":"Bealtaine"},
	"june": {"type":"string","value":"Meitheamh"},
	"july": {"type":"string","value":"Iúil"},
	"august": {"type":"string","value":"Lúnasa"},
	"september": {"type":"string","value":"Meán Fómhair"},
	"october": {"type":"string","value":"Deireadh Fómhair"},
	"november": {"type":"string","value":"Samhain"},
	"december": {"type":"string","value":"Nollaig"}
};

export default text;
