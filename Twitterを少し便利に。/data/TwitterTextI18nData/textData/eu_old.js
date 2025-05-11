const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"For you"+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Following"+e.noun}
	},
	"pinnedListsModuleHeader": undefined,
	"tweetsRetweeted": undefined,
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"Desegin birtxiokatzea"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"Jarraitzen"},
	"unfollow": {"type":"string","value":"Utzi jarraitzeari"},
	"blocked": {"type":"string","value":"Blokeatua"},
	"unblock": {"type":"string","value":"Desblokeatu"},
	"joinDateFrom": {
		"type": "function",
		"arguments": ["joinDate"],
		"value": function(e){return"Erregistratze-data: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," erabiltzaileak jarraitua"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," eta "," erabiltzaileek jarraitua"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," eta "," erabiltzaileek jarraitua"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," erabiltzaileak, "," erabiltzaileak eta zuk jarraitutako beste "," erabiltzailek jarraitua"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" txio"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" atsegite"]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"Hasiera"},
	"search": {"type":"string","value":"Arakatu"},
	"notifications": {"type":"string","value":"Jakinarazpenak"},
	"messages": {"type":"string","value":"Mezuak"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"Laster-markak"},
	"jobs": {"type":"string","value":"Jobs"},
	"communities": {"type":"string","value":"Erkidegoa"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"Nire profila"},
	"lists": {"type":"string","value":"Zerrenda"},
	"monetization": {"type":"string","value":"Dirua irabaztea "},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"Ezarpenak eta pribatutasuna"},
	"addAnExistingAccount": {"type":"string","value":"Gehitu lehendik duzun beste kontu bat"},
	"manageAccounts": {"type":"string","value":"Kudeatu kontuak"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(e){return"Aldatu @"+e.screenName+" erabiltzailera"}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"Ezarpenak"},
	"now": {"type":"string","value":"Orain"},
	"day": {"type":"string","value":"Eguna"},
	"month": {"type":"string","value":"Hilabetea"},
	"year": {"type":"string","value":"Urtea"},
	"january": {"type":"string","value":"Urtarrila"},
	"february": {"type":"string","value":"Otsaila"},
	"march": {"type":"string","value":"Martxoa"},
	"april": {"type":"string","value":"Apirila"},
	"may": {"type":"string","value":"Maiatza"},
	"june": {"type":"string","value":"Ekaina"},
	"july": {"type":"string","value":"Uztaila"},
	"august": {"type":"string","value":"Abuztua"},
	"september": {"type":"string","value":"Iraila"},
	"october": {"type":"string","value":"Urria"},
	"november": {"type":"string","value":"Azaroa"},
	"december": {"type":"string","value":"Abendua"}
};

export default text;