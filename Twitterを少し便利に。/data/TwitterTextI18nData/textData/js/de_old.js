const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Für dich"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Folge ich"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Angeheftet"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s hat retweetet"},
	"retweet": {"type":"string","value":"Retweeten"},
	"unDoRetweet": {"type":"string","value":"Retweet rückgängig machen"},
	"quoteTweet": {"type":"string","value":"Tweet zitieren"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweets"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Antworten"},
	"profileTabTitleHighlights": {"type":"string","value":"Highlights"},
	"profileTabTitleMedia": {"type":"string","value":"Medien"},
	"profileTabTitleLikes": {"type":"string","value":"Gefällt mir"},
	"following": {"type":"string","value":"Folge ich"},
	"unfollow": {"type":"string","value":"Entfolgen"},
	"blocked": {"type":"string","value":"Blockiert"},
	"unblock": {"type":"string","value":"Entblocken"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Seit "+e.joinDate+" bei Twitter"}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Gefolgt von "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Gefolgt von "," und "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Gefolgt von ",", "," und "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Gefolgt von ",", "," und "," weiteren Personen, denen du folgst"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" „Gefällt mir“-Angabe"+r(props.count,"","n")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Fotos und Videos"]}
	},
	"home": {"type":"string","value":"Startseite"},
	"explore": {"type":"string","value":"Entdecken"},
	"notifications": {"type":"string","value":"Mitteilungen"},
	"connect_people": {"type":"string","value":"Verbinden"},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Nachrichten"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Lesezeichen"},
	"jobs": {"type":"string","value":"Jobs"},
	"communities": {"type":"string","value":"Community"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verifizierte Organisationen"},
	"profile": {"type":"string","value":"Mein Profil"},
	"lists": {"type":"string","value":"Liste"},
	"monetization": {"type":"string","value":"Monetarisierung"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Space erstellen"},
	"settingsAndPrivacy": {"type":"string","value":"Einstellungen und Datenschutz"},
	"moreMenu": {"type":"string","value":"Mehr"},
	"addAnExistingAccount": {"type":"string","value":"Bestehenden Account hinzufügen"},
	"manageAccounts": {"type":"string","value":"Accounts verwalten"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Zu @"+e.screenName+" wechseln"}
	},
	"postTweet": {"type":"string","value":"Twittern"},
	"settings": {"type":"string","value":"Einstellungen"},
	"now": {"type":"string","value":"Jetzt"},
	"day": {"type":"string","value":"Tag"},
	"month": {"type":"string","value":"Monat"},
	"year": {"type":"string","value":"Jahr"},
	"january": {"type":"string","value":"Januar"},
	"february": {"type":"string","value":"Februar"},
	"march": {"type":"string","value":"März"},
	"april": {"type":"string","value":"April"},
	"may": {"type":"string","value":"Mai"},
	"june": {"type":"string","value":"Juni"},
	"july": {"type":"string","value":"Juli"},
	"august": {"type":"string","value":"August"},
	"september": {"type":"string","value":"September"},
	"october": {"type":"string","value":"Oktober"},
	"november": {"type":"string","value":"November"},
	"december": {"type":"string","value":"Dezember"}
};

export default text;