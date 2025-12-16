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
	"retweet": {"type":"string","value":"Retweeter"},
	"unDoRetweet": {"type":"string","value":"Annuler le Retweet"},
	"quoteTweet": {"type":"string","value":"Citer le Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweets"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Réponses"},
	"profileTabTitleHighlights": {"type":"string","value":"Tweets marquants"},
	"profileTabTitleMedia": {"type":"string","value":"Médias"},
	"profileTabTitleLikes": {"type":"string","value":"\"J'aime\""},
	"following": {"type":"string","value":"Abonné"},
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
		"value": function(){return["Suivi par "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Suivi par "," et "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Suivi par ",", "," et "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Suivi par ",", "," et "," autres personnes que vous suivez"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" J'aime"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" photos et vidéos"]}
	},
	"home": {"type":"string","value":"Accueil"},
	"explore": {"type":"string","value":"Explorer"},
	"notifications": {"type":"string","value":"Notifications"},
	"connect_people": {"type":"string","value":"Se connecter"},
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
