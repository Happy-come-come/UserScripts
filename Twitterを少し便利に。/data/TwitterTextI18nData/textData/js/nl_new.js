const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Voor jou"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Volgend"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Vastgemaakt"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s heeft deze post opnieuw geplaatst"},
	"retweet": {"type":"string","value":"Repost"},
	"unDoRetweet": {"type":"string","value":"Maak repost ongedaan"},
	"quoteTweet": {"type":"string","value":"Geciteerde post"},
	"profileTabTitleTimeline": {"type":"string","value":"Posts"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Antwoorden"},
	"profileTabTitleHighlights": {"type":"string","value":"Hoogtepunten"},
	"profileTabTitleMedia": {"type":"string","value":"Media"},
	"profileTabTitleLikes": {"type":"string","value":"Vind-ik-leuks"},
	"following": {"type":"string","value":"Volgend"},
	"unfollow": {"type":"string","value":"Ontvolg"},
	"blocked": {"type":"string","value":"Geblokkeerd"},
	"unblock": {"type":"string","value":"Deblokkeren"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Lid sinds "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Gevolgd door "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Gevolgd door "," en "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Gevolgd door ",", "," en "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Gevolgd door ",", "," en "," anderen die jij volgt"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" post"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Vind-ik-leuk"+r(props.count,"","s")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" foto''s en video''s"]}
	},
	"home": {"type":"string","value":"Startpagina"},
	"explore": {"type":"string","value":"Verkennen"},
	"notifications": {"type":"string","value":"Meldingen"},
	"chat": {"type":"string","value":"Chatten"},
	"messages": {"type":"string","value":"Berichten"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Bladwijzers"},
	"jobs": {"type":"string","value":"Banen"},
	"communities": {"type":"string","value":"Community"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Geverifieerde Organisaties"},
	"profile": {"type":"string","value":"Mijn profiel"},
	"lists": {"type":"string","value":"Lijst"},
	"monetization": {"type":"string","value":"Geld verdienen"},
	"ads": {"type":"string","value":"Advertenties"},
	"createYourSpace": {"type":"string","value":"Je Space maken"},
	"settingsAndPrivacy": {"type":"string","value":"Instellingen en privacy"},
	"moreMenu": {"type":"string","value":"Meer"},
	"addAnExistingAccount": {"type":"string","value":"Een bestaand account toevoegen"},
	"manageAccounts": {"type":"string","value":"Accounts beheren"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Wisselen naar @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Plaatsen"},
	"settings": {"type":"string","value":"Instellingen"},
	"now": {"type":"string","value":"Nu"},
	"day": {"type":"string","value":"Dag"},
	"month": {"type":"string","value":"Maand"},
	"year": {"type":"string","value":"Jaar"},
	"january": {"type":"string","value":"januari"},
	"february": {"type":"string","value":"februari"},
	"march": {"type":"string","value":"maart"},
	"april": {"type":"string","value":"april"},
	"may": {"type":"string","value":"mei"},
	"june": {"type":"string","value":"juni"},
	"july": {"type":"string","value":"juli"},
	"august": {"type":"string","value":"augustus"},
	"september": {"type":"string","value":"september"},
	"october": {"type":"string","value":"oktober"},
	"november": {"type":"string","value":"november"},
	"december": {"type":"string","value":"december"}
};

export default text;