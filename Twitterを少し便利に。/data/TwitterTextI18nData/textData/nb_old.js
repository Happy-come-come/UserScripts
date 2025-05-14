const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"For deg"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Følger"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Festet"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s retweetet"},
	"retweet": {"type":"string","value":"Retweet"},
	"unDoRetweet": {"type":"string","value":"Angre Retweet"},
	"quoteTweet": {"type":"string","value":"Sitat-Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweets"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Svar"},
	"profileTabTitleHighlights": {"type":"string","value":"Høydepunkter"},
	"profileTabTitleMedia": {"type":"string","value":"Medier"},
	"profileTabTitleLikes": {"type":"string","value":"Liker"},
	"following": {"type":"string","value":"Følger"},
	"unfollow": {"type":"string","value":"Avfølg"},
	"blocked": {"type":"string","value":"Blokkert"},
	"unblock": {"type":"string","value":"Opphev blokkering"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Registrerte seg "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Følges av "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Følges av "," og "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Følges av ",", "," og "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Følges av ",", "," og "," andre du følger"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"+i(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" likerklikk"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" bilder og videoer"]}
	},
	"home": {"type":"string","value":"Hjem"},
	"explore": {"type":"string","value":"Utforsk"},
	"notifications": {"type":"string","value":"Varsler"},
	"messages": {"type":"string","value":"Meldinger"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Bokmerker"},
	"jobs": {"type":"string","value":"Jobber"},
	"communities": {"type":"string","value":"Fellesskap"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verifiserte organisasjoner"},
	"profile": {"type":"string","value":"Min profil"},
	"lists": {"type":"string","value":"Liste"},
	"monetization": {"type":"string","value":"Inntektsgenerering"},
	"ads": {"type":"string","value":"Annonser"},
	"createYourSpace": {"type":"string","value":"Opprett området ditt"},
	"settingsAndPrivacy": {"type":"string","value":"Innstillinger og personvern"},
	"moreMenu": {"type":"string","value":"Mer"},
	"addAnExistingAccount": {"type":"string","value":"Legg til en eksisterende konto"},
	"manageAccounts": {"type":"string","value":"Administrer kontoer"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Bytt til @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweet"},
	"settings": {"type":"string","value":"Innstillinger"},
	"now": {"type":"string","value":"Nå"},
	"day": {"type":"string","value":"Dag"},
	"month": {"type":"string","value":"Måned"},
	"year": {"type":"string","value":"År"},
	"january": {"type":"string","value":"Januar"},
	"february": {"type":"string","value":"Februar"},
	"march": {"type":"string","value":"Mars"},
	"april": {"type":"string","value":"April"},
	"may": {"type":"string","value":"Mai"},
	"june": {"type":"string","value":"Juni"},
	"july": {"type":"string","value":"Juli"},
	"august": {"type":"string","value":"August"},
	"september": {"type":"string","value":"September"},
	"october": {"type":"string","value":"Oktober"},
	"november": {"type":"string","value":"November"},
	"december": {"type":"string","value":"Desember"}
};

export default text;