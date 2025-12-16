const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Pre vás"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Sledujem"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Pripnuté"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s opätovne uverejnil príspevok"},
	"retweet": {"type":"string","value":"Opätovné uverejnenie"},
	"unDoRetweet": {"type":"string","value":"Zrušiť opätovné uverejnenie"},
	"quoteTweet": {"type":"string","value":"Citácia"},
	"profileTabTitleTimeline": {"type":"string","value":"Príspevky"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Odpovede"},
	"profileTabTitleHighlights": {"type":"string","value":"Výber"},
	"profileTabTitleMedia": {"type":"string","value":"Médiá"},
	"profileTabTitleLikes": {"type":"string","value":"Páči sa"},
	"following": {"type":"string","value":"Sledujem"},
	"unfollow": {"type":"string","value":"Nesledovať"},
	"blocked": {"type":"string","value":"Zablokovaný"},
	"unblock": {"type":"string","value":"Odblokovať"},
	"joinDateFrom": {
		"type": "webI18nFunction",
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
		"value": function(){return[props.formattedCount+" "+t(props.count,"príspevky","príspevku","nový príspevok","príspevku")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" označen"+t(props.count,"ia","ia","ie","í")+" Páči sa"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" fot"+t(props.count,"ky a videá","ky a videa","ka a video","iek a videí")]}
	},
	"home": {"type":"string","value":"Domov"},
	"explore": {"type":"string","value":"Preskúmať"},
	"notifications": {"type":"string","value":"Notifikácie"},
	"connect_people": {"type":"string","value":"Pripojiť"},
	"chat": {"type":"string","value":"Četovať"},
	"messages": {"type":"string","value":"Správy"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Záložky"},
	"jobs": {"type":"string","value":"Pracovné miesta"},
	"business": {"type":"string","value":"Firma"},
	"communities": {"type":"string","value":"Komunita"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Overené organizácie"},
	"profile": {"type":"string","value":"Môj profil"},
	"lists": {"type":"string","value":"Zoznam"},
	"monetization": {"type":"string","value":"Speňažovanie"},
	"ads": {"type":"string","value":"Reklamy"},
	"createYourSpace": {"type":"string","value":"Vytvoriť priestor"},
	"settingsAndPrivacy": {"type":"string","value":"Nastavenia a súkromie"},
	"moreMenu": {"type":"string","value":"Viac"},
	"addAnExistingAccount": {"type":"string","value":"Pridať existujúci účet"},
	"manageAccounts": {"type":"string","value":"Spravovať účty"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Prepnúť na účet @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Uverejniť"},
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
