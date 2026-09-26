const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Para você"+a.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Seguindo"+a.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Fixado"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s repostou"},
	"replyAction": {"type":"string","value":"Responder"},
	"repostAction": {"type":"string","value":"Repostar"},
	"likeAction": {"type":"string","value":"Curtir"},
	"bookmarkAction": {"type":"string","value":"Salvar post"},
	"showMore": {"type":"string","value":"Mostrar mais"},
	"viewThread": {"type":"string","value":"Mostrar esta sequência"},
	"previousImage": {"type":"string","value":"Imagem anterior"},
	"nextImage": {"type":"string","value":"Próxima imagem"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["De "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(a){return"classificações "+a.appStarRating+"/5.0 estrelas "+a.appNumRatings}
	},
	"verifiedAccount": {"type":"string","value":"Contas verificadas"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod"},
	"communityMemberBadge": {"type":"string","value":"Membro"},
	"viewsLabel": {"type":"string","value":"visualizações"},
	"viewQuotes": {"type":"string","value":"Ver comentários"},
	"viewActivity": {"type":"string","value":"Ver atividade"},
	"communityNotes": {"type":"string","value":"Notas da Comunidade"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Esta nota foi útil?"},
	"communityNoteHelpful": {"type":"string","value":"útil"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"um pouco útil"},
	"communityNoteNotHelpful": {"type":"string","value":"não útil"},
	"cashtagComingSoon": {"type":"string","value":"Em breve"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Agora por "]}
	},
	"grokAnswerFun": {"type":"string","value":"Resposta pelo Grok no modo Diversão"},
	"grokAnswer": {"type":"string","value":"Resposta pelo Grok"},
	"grokImageBy": {"type":"string","value":"Imagem feita pelo Grok"},
	"grokShowMore": {"type":"string","value":"Mostrar mais"},
	"grokCreateVersion": {"type":"string","value":"Crie sua versão com o Grok"},
	"grokAskYourself": {"type":"string","value":"Pergunte ao Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" página"+i(a.count,"","s")+" da web"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" post"+i(a.count,"","s")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" páginas da Web e posts"}
	},
	"mostRelevant": {"type":"string","value":"Relevante"},
	"mostLiked": {"type":"string","value":"Curtidas"},
	"mostRecent": {"type":"string","value":"Recente"},
	"sortReplies": {"type":"string","value":"Ordenar respostas"},
	"lastEdited": {"type":"string","value":"Última edição"},
	"newPostVersion": {"type":"string","value":"Há uma nova versão deste post."},
	"opensEditHistory": {"type":"string","value":"Abre o histórico de edições"},
	"viewLatestPost": {"type":"string","value":"Ver o post mais recente"},
	"opensLatestPost": {"type":"string","value":"Abre a nova versão deste post"},
	"mediaTaggedSelf": {"type":"string","value":"Você"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["De "]}
	},
	"poll": {"type":"string","value":"Enquete"},
	"viewPoll": {"type":"string","value":"Mostrar esta enquete"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(a){return a.formattedCount+" voto"+i(a.count,"","s")}
	},
	"pollEnded": {"type":"string","value":"Resultados finais"},
	"retweet": {"type":"string","value":"Repostar"},
	"unDoRetweet": {"type":"string","value":"Desfazer repost"},
	"quoteTweet": {"type":"string","value":"Comentário"},
	"profileTabTitleTimeline": {"type":"string","value":"Publicações"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Respostas"},
	"profileTabTitleHighlights": {"type":"string","value":"Destaques"},
	"profileTabTitleMedia": {"type":"string","value":"Mídia"},
	"profileTabTitleLikes": {"type":"string","value":"Curtidas"},
	"following": {"type":"string","value":"Seguindo"},
	"follow": {"type":"string","value":"Seguir"},
	"followBack": {"type":"string","value":"Seguir de volta"},
	"followers": {"type":"string","value":"Seguidores"},
	"followsYou": {"type":"string","value":"Segue você"},
	"subscriptions": {"type":"string","value":"Assinaturas"},
	"unfollow": {"type":"string","value":"Deixar de Seguir"},
	"blocked": {"type":"string","value":"Bloqueado"},
	"unblock": {"type":"string","value":"Desbloquear"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(a){return"Ingressou em "+a.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Seguido por "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Seguido por "," e "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Seguido por ",", "," e "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Seguido por ",", "," e outros "," que você segue"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" post"+i(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Curtida"+i(props.count,"","s")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" fotos e vídeos"]}
	},
	"home": {"type":"string","value":"Página Inicial"},
	"explore": {"type":"string","value":"Explorar"},
	"notifications": {"type":"string","value":"Notificações"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(a){return"Seguir"+a.verb}
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
		"value": function(a){return"Mudar para @"+a.screenName}
	},
	"postTweet": {"type":"string","value":"Publicar"},
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
