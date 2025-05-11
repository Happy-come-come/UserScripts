const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Pre vás"+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Sledujem"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Pripnuté"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"Retweetol používateľ %s"},
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"Zrušiť retweet"},
	"quoteTweet": {"type":"string","value":"Citovať Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweety"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Odpovede"},
	"profileTabTitleHighlights": {"type":"string","value":"Výber"},
	"profileTabTitleMedia": {"type":"string","value":"Médiá"},
	"profileTabTitleLikes": {"type":"string","value":"Páči sa"},
	"following": {"type":"string","value":"Sledujem"},
	"unfollow": {"type":"string","value":"Nesledovať"},
	"blocked": {"type":"string","value":"Zablokovaný"},
	"unblock": {"type":"string","value":"Odblokovať"},
	"joinDateFrom": {
		"type": "function",
		"arguments": ["joinDate"],
		"value": function(e){return"Pripojil/-a sa "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Sleduje používateľ "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Sledujú používatelia "," a "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Sledujú používatelia ",", "," a "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Sledujú používatelia ",", "," a ďalší (","), ktorých sledujete"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"+n(props.count,"y","u","","ov")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" označen"+n(props.count,"ia","ia","ie","í")+" Páči sa"]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"Domov"},
	"search": {"type":"string","value":"Preskúmať"},
	"notifications": {"type":"string","value":"Notifikácie"},
	"messages": {"type":"string","value":"Správy"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"Záložky"},
	"jobs": {"type":"string","value":"Pracovné miesta"},
	"communities": {"type":"string","value":"Komunita"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"Overené organizácie"},
	"profile": {"type":"string","value":"Môj profil"},
	"lists": {"type":"string","value":"Zoznam"},
	"monetization": {"type":"string","value":"Speňažovanie"},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"Nastavenia a súkromie"},
	"addAnExistingAccount": {"type":"string","value":"Pridať existujúci účet"},
	"manageAccounts": {"type":"string","value":"Spravovať účty"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(e){return"Prepnúť na účet @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweetnuť"},
	"settings": {"type":"string","value":"Nastavenia"},
	"now": {"type":"string","value":"Teraz"},
	"day": {"type":"string","value":"Deň"},
	"month": {"type":"string","value":"Mesiac"},
	"year": {"type":"string","value":"Rok"},
	"january": {"type":"string","value":"január"},
	"february": {"type":"string","value":"február"},
	"march": {"type":"string","value":"marec"},
	"april": {"type":"string","value":"apríl"},
	"may": {"type":"string","value":"máj"},
	"june": {"type":"string","value":"jún"},
	"july": {"type":"string","value":"júl"},
	"august": {"type":"string","value":"august"},
	"september": {"type":"string","value":"september"},
	"october": {"type":"string","value":"október"},
	"november": {"type":"string","value":"november"},
	"december": {"type":"string","value":"december"}
};

export default text;