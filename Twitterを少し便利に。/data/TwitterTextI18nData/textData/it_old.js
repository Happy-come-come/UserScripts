const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Per te"+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Seguiti"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Fissate"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"Ritwittato da %s"},
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"Annulla Retweet"},
	"quoteTweet": {"type":"string","value":"Cita il Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweet"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Risposte"},
	"profileTabTitleHighlights": {"type":"string","value":"Highlight"},
	"profileTabTitleMedia": {"type":"string","value":"Contenuti"},
	"profileTabTitleLikes": {"type":"string","value":"Mi piace"},
	"following": {"type":"string","value":"Following"},
	"unfollow": {"type":"string","value":"Smetti di seguire"},
	"blocked": {"type":"string","value":"Bloccato"},
	"unblock": {"type":"string","value":"Sblocca"},
	"joinDateFrom": {
		"type": "function",
		"arguments": ["joinDate"],
		"value": function(e){return"Iscrizione: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seguito da "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seguito da "," e "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seguito da ",", "," e "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seguito da ",", "," e altri "," che segui"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Mi piace"]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"Home"},
	"search": {"type":"string","value":"Esplora"},
	"notifications": {"type":"string","value":"Notifiche"},
	"messages": {"type":"string","value":"Messaggi"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"Segnalibri"},
	"jobs": {"type":"string","value":"Lavora con noi"},
	"communities": {"type":"string","value":"Community"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"Organizzazioni verificate"},
	"profile": {"type":"string","value":"Il mio profilo"},
	"lists": {"type":"string","value":"Lista"},
	"monetization": {"type":"string","value":"Monetizzazione"},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"Impostazioni e privacy"},
	"addAnExistingAccount": {"type":"string","value":"Aggiungi un account esistente"},
	"manageAccounts": {"type":"string","value":"Gestisci account"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(e){return"Passa a @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Twitta"},
	"settings": {"type":"string","value":"Impostazioni"},
	"now": {"type":"string","value":"Ora"},
	"day": {"type":"string","value":"Giorno"},
	"month": {"type":"string","value":"Mese"},
	"year": {"type":"string","value":"Anno"},
	"january": {"type":"string","value":"Gennaio"},
	"february": {"type":"string","value":"Febbraio"},
	"march": {"type":"string","value":"Marzo"},
	"april": {"type":"string","value":"Aprile"},
	"may": {"type":"string","value":"Maggio"},
	"june": {"type":"string","value":"Giugno"},
	"july": {"type":"string","value":"Luglio"},
	"august": {"type":"string","value":"Agosto"},
	"september": {"type":"string","value":"Settembre"},
	"october": {"type":"string","value":"Ottobre"},
	"november": {"type":"string","value":"Novembre"},
	"december": {"type":"string","value":"Dicembre"}
};

export default text;