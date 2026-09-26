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
	"replyAction": {"type":"string","value":"Responder"},
	"repostAction": {"type":"string","value":"Repostear"},
	"likeAction": {"type":"string","value":"Me gusta"},
	"bookmarkAction": {"type":"string","value":"Marcador"},
	"showMore": {"type":"string","value":"Mostrar más"},
	"viewThread": {"type":"string","value":"Mostrar este hilo"},
	"previousImage": {"type":"string","value":"Imagen anterior"},
	"nextImage": {"type":"string","value":"Siguiente imagen"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["De "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5.0 estrellas – "+e.appNumRatings+" calificaciones"}
	},
	"verifiedAccount": {"type":"string","value":"Cuentas verificadas"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod"},
	"communityMemberBadge": {"type":"string","value":"Miembro"},
	"viewsLabel": {"type":"string","value":"visualizaciones"},
	"viewQuotes": {"type":"string","value":"Ver citas"},
	"viewActivity": {"type":"string","value":"Ver actividad"},
	"communityNotes": {"type":"string","value":"Notas de la comunidad"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"¿Esta nota es útil?"},
	"communityNoteHelpful": {"type":"string","value":"útil"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"algo útil"},
	"communityNoteNotHelpful": {"type":"string","value":"no útil"},
	"cashtagComingSoon": {"type":"string","value":"Próximamente"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Valor actual "]}
	},
	"grokAnswerFun": {"type":"string","value":"Respuesta de Grok en modo Divertido"},
	"grokAnswer": {"type":"string","value":"Respuesta de Grok"},
	"grokImageBy": {"type":"string","value":"Imagen de Grok"},
	"grokShowMore": {"type":"string","value":"Mostrar más"},
	"grokCreateVersion": {"type":"string","value":"Crea tu versión con Grok"},
	"grokAskYourself": {"type":"string","value":"Pregúntale a Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" página"+r(e.count,"","s")+" web"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" post"+r(e.count,"","s")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" páginas web y posts"}
	},
	"mostRelevant": {"type":"string","value":"Relevante"},
	"mostLiked": {"type":"string","value":"Me gusta"},
	"mostRecent": {"type":"string","value":"Recientes"},
	"sortReplies": {"type":"string","value":"Organizar respuestas"},
	"lastEdited": {"type":"string","value":"Última edición"},
	"newPostVersion": {"type":"string","value":"Hay una versión nueva de este post."},
	"opensEditHistory": {"type":"string","value":"Abre el historial de ediciones"},
	"viewLatestPost": {"type":"string","value":"Ver el post más reciente"},
	"opensLatestPost": {"type":"string","value":"Abre la nueva versión de este post"},
	"mediaTaggedSelf": {"type":"string","value":"Tú"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["De "]}
	},
	"poll": {"type":"string","value":"Encuesta"},
	"viewPoll": {"type":"string","value":"Mostrar esta encuesta"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" voto"+r(e.count,"","s")}
	},
	"pollEnded": {"type":"string","value":"Resultados finales"},
	"retweet": {"type":"string","value":"Repostear"},
	"unDoRetweet": {"type":"string","value":"Deshacer repost"},
	"quoteTweet": {"type":"string","value":"Cita"},
	"profileTabTitleTimeline": {"type":"string","value":"Publicaciones"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Respuestas"},
	"profileTabTitleHighlights": {"type":"string","value":"Destacados"},
	"profileTabTitleMedia": {"type":"string","value":"Multimedia"},
	"profileTabTitleLikes": {"type":"string","value":"Me gusta"},
	"following": {"type":"string","value":"Siguiendo"},
	"follow": {"type":"string","value":"Seguir"},
	"followBack": {"type":"string","value":"Seguir tú también"},
	"followers": {"type":"string","value":"Seguidores"},
	"followsYou": {"type":"string","value":"Te sigue"},
	"subscriptions": {"type":"string","value":"Suscripciones"},
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
		"value": function(){return [""," sigue a este usuario"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," y "," siguen a este usuario"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["",", "," y "," siguen a este usuario"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["",", "," y "," más de las cuentas que sigues siguen a este usuario"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" post"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Me gusta"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" fotos y videos"]}
	},
	"home": {"type":"string","value":"Inicio"},
	"explore": {"type":"string","value":"Explorar"},
	"notifications": {"type":"string","value":"Notificaciones"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Seguir"+e.verb}
	},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Mensajes"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Guardados"},
	"jobs": {"type":"string","value":"Trabajos"},
	"business": {"type":"string","value":"Empresa"},
	"communities": {"type":"string","value":"Comunidad"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Organizaciones verificadas"},
	"profile": {"type":"string","value":"Mi perfil"},
	"creatorStudio": {"type":"string","value":"Estudio para creadores"},
	"lists": {"type":"string","value":"Lista"},
	"monetization": {"type":"string","value":"Monetización"},
	"ads": {"type":"string","value":"Anuncios"},
	"createYourSpace": {"type":"string","value":"Crear tu Espacio"},
	"settingsAndPrivacy": {"type":"string","value":"Configuración y privacidad"},
	"moreMenu": {"type":"string","value":"Más opciones"},
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
