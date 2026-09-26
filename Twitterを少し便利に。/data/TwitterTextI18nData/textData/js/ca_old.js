const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Per a tu"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Seguint"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Fixades"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s ha retuitat"},
	"replyAction": {"type":"string","value":"Respon"},
	"repostAction": {"type":"string","value":"Republicació"},
	"likeAction": {"type":"string","value":"M'agrada"},
	"bookmarkAction": {"type":"string","value":"Afegeix als preferits"},
	"showMore": {"type":"string","value":"Mostra'n més"},
	"viewThread": {"type":"string","value":"Mostra el fil"},
	"previousImage": {"type":"string","value":"Imatge anterior"},
	"nextImage": {"type":"string","value":"Imatge següent"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["De "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5,0 estrelles – "+e.appNumRatings+" qualificacions"}
	},
	"verifiedAccount": {"type":"string","value":"Comptes verificats"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod"},
	"communityMemberBadge": {"type":"string","value":"Membre"},
	"viewsLabel": {"type":"string","value":"visualitzacions"},
	"viewQuotes": {"type":"string","value":"Mostra les cites"},
	"viewActivity": {"type":"string","value":"Mostra l'activitat"},
	"communityNotes": {"type":"string","value":"Notes de la Comunitat"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"La nota t'ha semblat útil?"},
	"communityNoteHelpful": {"type":"string","value":"útil"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"en certa manera útil"},
	"communityNoteNotHelpful": {"type":"string","value":"poc útil"},
	"cashtagComingSoon": {"type":"string","value":"Pròximament"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Ara a "]}
	},
	"grokAnswerFun": {"type":"string","value":"Resposta de Grok en mode divertit"},
	"grokAnswer": {"type":"string","value":"Resposta de Grok"},
	"grokImageBy": {"type":"string","value":"Imatge creada per Grok"},
	"grokShowMore": {"type":"string","value":"Mostra'n més"},
	"grokCreateVersion": {"type":"string","value":"Crea'n una versió teva amb Grok"},
	"grokAskYourself": {"type":"string","value":"Pregunta-li-ho a Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" pàgin"+s(e.count,"a","es")+" web"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" publicaci"+s(e.count,"ó","ons")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" pàgines web i publicacions"}
	},
	"mostRelevant": {"type":"string","value":"Rellevant"},
	"mostLiked": {"type":"string","value":"Agradaments"},
	"mostRecent": {"type":"string","value":"Recents"},
	"sortReplies": {"type":"string","value":"Ordena les respostes"},
	"lastEdited": {"type":"string","value":"Última edició"},
	"newPostVersion": {"type":"string","value":"Hi ha una versió nova de la publicació."},
	"opensEditHistory": {"type":"string","value":"Obre l'historial d'edicions"},
	"viewLatestPost": {"type":"string","value":"Mostra la publicació més recent"},
	"opensLatestPost": {"type":"string","value":"Obre la versió nova de la publicació"},
	"mediaTaggedSelf": {"type":"string","value":"Has"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["De: "]}
	},
	"poll": {"type":"string","value":"Enquesta"},
	"viewPoll": {"type":"string","value":"Mostra l'enquesta"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" vot"+r(e.count,"","s")}
	},
	"pollEnded": {"type":"string","value":"Resultats finals"},
	"retweet": {"type":"string","value":"Retuit"},
	"unDoRetweet": {"type":"string","value":"Desfés el retuit"},
	"quoteTweet": {"type":"string","value":"Cita el tuit"},
	"profileTabTitleTimeline": {"type":"string","value":"Tuits"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Respostes"},
	"profileTabTitleHighlights": {"type":"string","value":"Destacats"},
	"profileTabTitleMedia": {"type":"string","value":"Continguts"},
	"profileTabTitleLikes": {"type":"string","value":"Agradaments"},
	"following": {"type":"string","value":"Seguint"},
	"follow": {"type":"string","value":"Segueix"},
	"followBack": {"type":"string","value":"Segueix-lo també"},
	"followers": {"type":"string","value":"Seguidors"},
	"followsYou": {"type":"string","value":"Et segueix"},
	"subscriptions": {"type":"string","value":"Subscripcions"},
	"unfollow": {"type":"string","value":"Deixa de seguir"},
	"blocked": {"type":"string","value":"Blocat"},
	"unblock": {"type":"string","value":"Desbloca"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Data en què s'hi va unir: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Seguit per l'usuari "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Seguit pels usuaris "," i "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Seguit pels usuaris ",", "," i "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Seguit pels usuaris "," i "," i per "," usuaris més que segueixes"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Tuit"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Agradament"+r(props.count,"","s")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" fotos i vídeos"]}
	},
	"home": {"type":"string","value":"Inici"},
	"explore": {"type":"string","value":"Explora"},
	"notifications": {"type":"string","value":"Notificacions"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Segueix"+e.verb}
	},
	"chat": {"type":"string","value":"Xat"},
	"messages": {"type":"string","value":"Missatges"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Preferits"},
	"jobs": {"type":"string","value":"Feina"},
	"business": {"type":"string","value":"Negoci"},
	"communities": {"type":"string","value":"Comunitat"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Organitzacions verificades"},
	"profile": {"type":"string","value":"El meu perfil"},
	"creatorStudio": {"type":"string","value":"Creator Studio"},
	"lists": {"type":"string","value":"Llista"},
	"monetization": {"type":"string","value":"Monetització"},
	"ads": {"type":"string","value":"Anuncis"},
	"createYourSpace": {"type":"string","value":"Crea el teu Espai"},
	"settingsAndPrivacy": {"type":"string","value":"Configuració i privacitat"},
	"moreMenu": {"type":"string","value":"Més"},
	"addAnExistingAccount": {"type":"string","value":"Afegeix un compte existent"},
	"manageAccounts": {"type":"string","value":"Gestiona els comptes"},
	"switchToAccount": {
		"type": "webI18nFunction",
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
