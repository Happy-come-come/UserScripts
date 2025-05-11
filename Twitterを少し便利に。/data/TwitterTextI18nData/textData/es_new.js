const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Para ti"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Siguiendo"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Fijadas"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s reposteado"},
	"retweet": {"type":"string","value":"Repostear"},
	"unDoRetweet": {"type":"string","value":"Deshacer repost"},
	"quoteTweet": {"type":"string","value":"Cita"},
	"profileTabTitleTimeline": {"type":"string","value":"Publicaciones"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Respuestas"},
	"profileTabTitleHighlights": {"type":"string","value":"Destacados"},
	"profileTabTitleMedia": {"type":"string","value":"Multimedia"},
	"profileTabTitleLikes": {"type":"string","value":"Me gusta"},
	"following": {"type":"string","value":"Siguiendo"},
	"unfollow": {"type":"string","value":"Dejar de seguir"},
	"blocked": {"type":"string","value":"Bloqueado"},
	"unblock": {"type":"string","value":"Desbloquear"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Se unió el "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," sigue a este usuario"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," y "," siguen a este usuario"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," y "," siguen a este usuario"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," y "," más de las cuentas que sigues siguen a este usuario"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" post"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Me gusta"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" fotos y videos"]}
	},
	"home": {"type":"string","value":"Inicio"},
	"search": {"type":"string","value":"Explorar"},
	"notifications": {"type":"string","value":"Notificaciones"},
	"messages": {"type":"string","value":"Mensajes"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Guardados"},
	"jobs": {"type":"string","value":"Trabajos"},
	"communities": {"type":"string","value":"Comunidad"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Organizaciones verificadas"},
	"profile": {"type":"string","value":"Mi perfil"},
	"lists": {"type":"string","value":"Lista"},
	"monetization": {"type":"string","value":"Monetización"},
	"ads": {"type":"string","value":"Anuncios"},
	"createYourSpace": {"type":"string","value":"Crear tu Espacio"},
	"settingsAndPrivacy": {"type":"string","value":"Configuración y privacidad"},
	"addAnExistingAccount": {"type":"string","value":"Agregar una cuenta existente"},
	"manageAccounts": {"type":"string","value":"Administrar cuentas"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Cambiar a @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Publicar"},
	"settings": {"type":"string","value":"Configuración"},
	"now": {"type":"string","value":"Ahora"},
	"day": {"type":"string","value":"Día"},
	"month": {"type":"string","value":"Mes"},
	"year": {"type":"string","value":"Año"},
	"january": {"type":"string","value":"enero"},
	"february": {"type":"string","value":"febrero"},
	"march": {"type":"string","value":"marzo"},
	"april": {"type":"string","value":"abril"},
	"may": {"type":"string","value":"mayo"},
	"june": {"type":"string","value":"junio"},
	"july": {"type":"string","value":"julio"},
	"august": {"type":"string","value":"agosto"},
	"september": {"type":"string","value":"septiembre"},
	"october": {"type":"string","value":"octubre"},
	"november": {"type":"string","value":"noviembre"},
	"december": {"type":"string","value":"diciembre"}
};

export default text;