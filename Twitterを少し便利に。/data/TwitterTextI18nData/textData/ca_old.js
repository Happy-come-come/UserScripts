const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Per a tu"+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Seguint"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Fixades"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s ha retuitat"},
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"Desfés el retuit"},
	"quoteTweet": {"type":"string","value":"Cita el tuit"},
	"profileTabTitleTimeline": {"type":"string","value":"Tuits"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Respostes"},
	"profileTabTitleHighlights": {"type":"string","value":"Destacats"},
	"profileTabTitleMedia": {"type":"string","value":"Continguts"},
	"profileTabTitleLikes": {"type":"string","value":"Agradaments"},
	"following": {"type":"string","value":"Seguint"},
	"unfollow": {"type":"string","value":"Deixa de seguir"},
	"blocked": {"type":"string","value":"Blocat"},
	"unblock": {"type":"string","value":"Desbloca"},
	"joinDateFrom": {
		"type": "function",
		"arguments": ["joinDate"],
		"value": function(e){return"Data en què s'hi va unir: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seguit per l'usuari "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seguit pels usuaris "," i "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seguit pels usuaris ",", "," i "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seguit pels usuaris "," i "," i per "," usuaris més que segueixes"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tuit"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Agradament"+r(props.count,"","s")]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"Inici"},
	"search": {"type":"string","value":"Explora"},
	"notifications": {"type":"string","value":"Notificacions"},
	"messages": {"type":"string","value":"Missatges"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"Preferits"},
	"jobs": {"type":"string","value":"Feina"},
	"communities": {"type":"string","value":"Comunitat"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"Organitzacions verificades"},
	"profile": {"type":"string","value":"El meu perfil"},
	"lists": {"type":"string","value":"Llista"},
	"monetization": {"type":"string","value":"Monetització"},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"Configuració i privacitat"},
	"addAnExistingAccount": {"type":"string","value":"Afegeix un compte existent"},
	"manageAccounts": {"type":"string","value":"Gestiona els comptes"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(e){return"Canvia a: @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tuit"},
	"settings": {"type":"string","value":"Configuració"},
	"now": {"type":"string","value":"Ara"},
	"day": {"type":"string","value":"Dia"},
	"month": {"type":"string","value":"Mes"},
	"year": {"type":"string","value":"Any"},
	"january": {"type":"string","value":"gener"},
	"february": {"type":"string","value":"febrer"},
	"march": {"type":"string","value":"març"},
	"april": {"type":"string","value":"abril"},
	"may": {"type":"string","value":"maig"},
	"june": {"type":"string","value":"juny"},
	"july": {"type":"string","value":"juliol"},
	"august": {"type":"string","value":"agost"},
	"september": {"type":"string","value":"setembre"},
	"october": {"type":"string","value":"octubre"},
	"november": {"type":"string","value":"novembre"},
	"december": {"type":"string","value":"desembre"}
};

export default text;