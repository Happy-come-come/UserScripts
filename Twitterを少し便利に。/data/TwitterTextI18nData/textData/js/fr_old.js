const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Pour vous"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Abonnements"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Épinglées"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s a retweeté"},
	"replyAction": {"type":"string","value":"Répondre"},
	"repostAction": {"type":"string","value":"Repost"},
	"likeAction": {"type":"string","value":"Aimer"},
	"bookmarkAction": {"type":"string","value":"Ajouter aux signets"},
	"showMore": {"type":"string","value":"Voir plus"},
	"viewThread": {"type":"string","value":"Afficher cette discussion"},
	"previousImage": {"type":"string","value":"Image précédente"},
	"nextImage": {"type":"string","value":"Image suivante"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["De "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5 étoiles – "+e.appNumRatings+" votes"}
	},
	"verifiedAccount": {"type":"string","value":"Comptes certifiés"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Modo"},
	"communityMemberBadge": {"type":"string","value":"Membre"},
	"viewsLabel": {"type":"string","value":"vues"},
	"viewQuotes": {"type":"string","value":"Voir les citations"},
	"viewActivity": {"type":"string","value":"Afficher l'activité"},
	"communityNotes": {"type":"string","value":"Notes de la Communauté"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Cette note est-elle utile ?"},
	"communityNoteHelpful": {"type":"string","value":"utile"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"en partie utile"},
	"communityNoteNotHelpful": {"type":"string","value":"inutile"},
	"cashtagComingSoon": {"type":"string","value":"Bientôt disponible"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Maintenant à "]}
	},
	"grokAnswerFun": {"type":"string","value":"Réponse de Grok en mode Fun"},
	"grokAnswer": {"type":"string","value":"Réponse de Grok"},
	"grokImageBy": {"type":"string","value":"Image de Grok"},
	"grokShowMore": {"type":"string","value":"Voir plus"},
	"grokCreateVersion": {"type":"string","value":"Créer ma version avec Grok"},
	"grokAskYourself": {"type":"string","value":"Demander à Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" page"+n(e.count,"","s")+" Web"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" "+n(e.count,"post","nouveaux posts")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" pages Web et posts"}
	},
	"mostRelevant": {"type":"string","value":"Pertinence"},
	"mostLiked": {"type":"string","value":"J'aime"},
	"mostRecent": {"type":"string","value":"Récents"},
	"sortReplies": {"type":"string","value":"Trier les réponses"},
	"lastEdited": {"type":"string","value":"Dernière modification :"},
	"newPostVersion": {"type":"string","value":"Il existe une nouvelle version de ce post."},
	"opensEditHistory": {"type":"string","value":"Ouvre l'historique des modifications"},
	"viewLatestPost": {"type":"string","value":"Voir le dernier post"},
	"opensLatestPost": {"type":"string","value":"Ouvre la nouvelle version de ce post"},
	"mediaTaggedSelf": {"type":"string","value":"Vous"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["De "]}
	},
	"poll": {"type":"string","value":"Question"},
	"viewPoll": {"type":"string","value":"Afficher cette question"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" vote"+r(e.count,"","s")}
	},
	"pollEnded": {"type":"string","value":"Résultats finaux"},
	"retweet": {"type":"string","value":"Retweeter"},
	"unDoRetweet": {"type":"string","value":"Annuler le Retweet"},
	"quoteTweet": {"type":"string","value":"Citer le Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweets"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Réponses"},
	"profileTabTitleHighlights": {"type":"string","value":"Tweets marquants"},
	"profileTabTitleMedia": {"type":"string","value":"Médias"},
	"profileTabTitleLikes": {"type":"string","value":"\"J'aime\""},
	"following": {"type":"string","value":"Abonné"},
	"follow": {"type":"string","value":"Suivre"},
	"followBack": {"type":"string","value":"Suivre en retour"},
	"followers": {"type":"string","value":"Abonnés"},
	"followsYou": {"type":"string","value":"Vous suit"},
	"subscriptions": {"type":"string","value":"Souscriptions"},
	"unfollow": {"type":"string","value":"Se désabonner"},
	"blocked": {"type":"string","value":"Bloqué"},
	"unblock": {"type":"string","value":"Débloquer"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"A rejoint Twitter en "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Suivi par "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Suivi par "," et "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Suivi par ",", "," et "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Suivi par ",", "," et "," autres personnes que vous suivez"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Tweet"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" J'aime"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" photos et vidéos"]}
	},
	"home": {"type":"string","value":"Accueil"},
	"explore": {"type":"string","value":"Explorer"},
	"notifications": {"type":"string","value":"Notifications"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Suivre"+e.verb}
	},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Messages"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Signets"},
	"jobs": {"type":"string","value":"Tâches"},
	"business": {"type":"string","value":"Entreprise"},
	"communities": {"type":"string","value":"Communauté"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Organisations certifiées"},
	"profile": {"type":"string","value":"Mon profil"},
	"creatorStudio": {"type":"string","value":"Creator Studio"},
	"lists": {"type":"string","value":"Liste"},
	"monetization": {"type":"string","value":"Monétisation"},
	"ads": {"type":"string","value":"Publicités"},
	"createYourSpace": {"type":"string","value":"Créer votre Espace"},
	"settingsAndPrivacy": {"type":"string","value":"Paramètres et confidentialité"},
	"moreMenu": {"type":"string","value":"Plus"},
	"addAnExistingAccount": {"type":"string","value":"Ajouter un compte existant"},
	"manageAccounts": {"type":"string","value":"Gérer les comptes"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Basculer vers @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweeter"},
	"settings": {"type":"string","value":"Paramètres"},
	"now": {"type":"string","value":"Maintenant"},
	"day": {"type":"string","value":"Jour"},
	"month": {"type":"string","value":"Mois"},
	"year": {"type":"string","value":"Année"},
	"january": {"type":"string","value":"Janvier"},
	"february": {"type":"string","value":"Février"},
	"march": {"type":"string","value":"Mars"},
	"april": {"type":"string","value":"Avril"},
	"may": {"type":"string","value":"Mai"},
	"june": {"type":"string","value":"Juin"},
	"july": {"type":"string","value":"Juillet"},
	"august": {"type":"string","value":"Août"},
	"september": {"type":"string","value":"Septembre"},
	"october": {"type":"string","value":"Octobre"},
	"november": {"type":"string","value":"Novembre"},
	"december": {"type":"string","value":"Décembre"}
};

export default text;
