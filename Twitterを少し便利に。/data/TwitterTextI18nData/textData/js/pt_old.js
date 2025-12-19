const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Para você"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Seguindo"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Fixado"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s Retweetou"},
	"retweet": {"type":"string","value":"Retweetar"},
	"unDoRetweet": {"type":"string","value":"Desfazer Retweet"},
	"quoteTweet": {"type":"string","value":"Tweet com comentário"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweets"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Respostas"},
	"profileTabTitleHighlights": {"type":"string","value":"Destaques"},
	"profileTabTitleMedia": {"type":"string","value":"Mídia"},
	"profileTabTitleLikes": {"type":"string","value":"Curtidas"},
	"following": {"type":"string","value":"Seguindo"},
	"unfollow": {"type":"string","value":"Deixar de Seguir"},
	"blocked": {"type":"string","value":"Bloqueado"},
	"unblock": {"type":"string","value":"Desbloquear"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Ingressou em "+e.joinDate}
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
		"value": function(){return["Seguido por ",", "," e outros "," que você segue"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Curtida"+r(props.count,"","s")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" fotos e vídeos"]}
	},
	"home": {"type":"string","value":"Página Inicial"},
	"explore": {"type":"string","value":"Explorar"},
	"notifications": {"type":"string","value":"Notificações"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Seguir"+e.verb}
	},
	"chat": {"type":"string","value":"Bate-papo"},
	"messages": {"type":"string","value":"Mensagens"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Itens salvos"},
	"jobs": {"type":"string","value":"Empregos"},
	"business": {"type":"string","value":"Empresas"},
	"communities": {"type":"string","value":"Comunidade"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Organizações Verificadas"},
	"profile": {"type":"string","value":"Meu perfil"},
	"creatorStudio": {"type":"string","value":"Creator Studio"},
	"lists": {"type":"string","value":"Lista"},
	"monetization": {"type":"string","value":"Monetização"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Crie seu Espaço"},
	"settingsAndPrivacy": {"type":"string","value":"Configurações e privacidade"},
	"moreMenu": {"type":"string","value":"Mais"},
	"addAnExistingAccount": {"type":"string","value":"Adicionar uma conta existente"},
	"manageAccounts": {"type":"string","value":"Gerenciar contas"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Mudar para @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweetar"},
	"settings": {"type":"string","value":"Configurações"},
	"now": {"type":"string","value":"Agoraㅤ"},
	"day": {"type":"string","value":"Dia"},
	"month": {"type":"string","value":"Mês"},
	"year": {"type":"string","value":"Ano"},
	"january": {"type":"string","value":"Janeiro"},
	"february": {"type":"string","value":"Fevereiro"},
	"march": {"type":"string","value":"Março"},
	"april": {"type":"string","value":"Abril"},
	"may": {"type":"string","value":"Maio"},
	"june": {"type":"string","value":"Junho"},
	"july": {"type":"string","value":"Julho"},
	"august": {"type":"string","value":"Agosto"},
	"september": {"type":"string","value":"Setembro"},
	"october": {"type":"string","value":"Outubro"},
	"november": {"type":"string","value":"Novembro"},
	"december": {"type":"string","value":"Dezembro"}
};

export default text;
