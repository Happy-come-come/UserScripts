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
	"following": {"type":"string","value":"Seguindo"},
	"unfollow": {"type":"string","value":"Deixar de seguir"},
	"blocked": {"type":"string","value":"Bloqueado"},
	"unblock": {"type":"string","value":"Desbloquear"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Uniuse en "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seguido por "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seguido por "," e "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seguido por ",", "," e "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seguido por ",", "," e "," usuarios máis que segues"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" post"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" gústame"+n(props.count,"","s")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" photos & videos"]}
	},
	"home": {"type":"string","value":"Inicio"},
	"explore": {"type":"string","value":"Explorar"},
	"notifications": {"type":"string","value":"Notificacións"},
	"connect_people": {"type":"string","value":"Conectar"},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Mensaxes"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Marcadores"},
	"jobs": {"type":"string","value":"Jobs"},
	"business": {"type":"string","value":"Empresa"},
	"communities": {"type":"string","value":"Comunidade"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"O meu perfil"},
	"lists": {"type":"string","value":"Listaxe"},
	"monetization": {"type":"string","value":"Monetización"},
	"ads": {"type":"string","value":"Anuncios"},
	"createYourSpace": {"type":"string","value":"Create your Space"},
	"settingsAndPrivacy": {"type":"string","value":"Axustes e privacidade"},
	"moreMenu": {"type":"string","value":"Máis"},
	"addAnExistingAccount": {"type":"string","value":"Engadir unha conta existente"},
	"manageAccounts": {"type":"string","value":"Xestionar contas"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Cambiar a @"+e.screenName}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"Configuración"},
	"now": {"type":"string","value":"Agora"},
	"day": {"type":"string","value":"Día"},
	"month": {"type":"string","value":"Mes"},
	"year": {"type":"string","value":"Ano"},
	"january": {"type":"string","value":"Xaneiro"},
	"february": {"type":"string","value":"Febreiro"},
	"march": {"type":"string","value":"Marzo"},
	"april": {"type":"string","value":"Abril"},
	"may": {"type":"string","value":"Maio"},
	"june": {"type":"string","value":"Xuño"},
	"july": {"type":"string","value":"Xullo"},
	"august": {"type":"string","value":"Agosto"},
	"september": {"type":"string","value":"Setembro"},
	"october": {"type":"string","value":"Outubro"},
	"november": {"type":"string","value":"Novembro"},
	"december": {"type":"string","value":"Decembro"}
};

export default text;
