const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(i){return"Per te"+i.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(i){return"Seguiti"+i.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Fissate"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"Repost di %s"},
	"retweet": {"type":"string","value":"Repost"},
	"unDoRetweet": {"type":"string","value":"Annulla repost"},
	"quoteTweet": {"type":"string","value":"Cita"},
	"profileTabTitleTimeline": {"type":"string","value":"Post"},
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
		"value": function(i){return"Iscrizione: "+i.joinDate}
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
		"value": function(){return[props.formattedCount+" post"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Mi piace"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" foto e video"]}
	},
	"home": {"type":"string","value":"Home"},
	"search": {"type":"string","value":"Esplora"},
	"notifications": {"type":"string","value":"Notifiche"},
	"messages": {"type":"string","value":"Messaggi"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Segnalibri"},
	"jobs": {"type":"string","value":"Offerte di lavoro"},
	"communities": {"type":"string","value":"Community"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Organizzazioni verificate"},
	"profile": {"type":"string","value":"Il mio profilo"},
	"lists": {"type":"string","value":"Lista"},
	"monetization": {"type":"string","value":"Monetizzazione"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Crea il tuo spazio"},
	"settingsAndPrivacy": {"type":"string","value":"Impostazioni e privacy"},
	"addAnExistingAccount": {"type":"string","value":"Aggiungi un account esistente"},
	"manageAccounts": {"type":"string","value":"Gestisci account"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(i){return"Passa a @"+i.screenName}
	},
	"postTweet": {"type":"string","value":"Posta"},
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