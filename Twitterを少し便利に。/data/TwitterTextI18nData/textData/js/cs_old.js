const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Pro vás"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Sledování"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Připnuté"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"Uživatel %s retweetnul"},
	"retweet": {"type":"string","value":"Retweetnout"},
	"unDoRetweet": {"type":"string","value":"Zrušit Retweet"},
	"quoteTweet": {"type":"string","value":"Citovat Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweety"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Odpovědi"},
	"profileTabTitleHighlights": {"type":"string","value":"Výběr"},
	"profileTabTitleMedia": {"type":"string","value":"Média"},
	"profileTabTitleLikes": {"type":"string","value":"Lajky"},
	"following": {"type":"string","value":"Sleduji"},
	"unfollow": {"type":"string","value":"Přestat sledovat"},
	"blocked": {"type":"string","value":"Blokovaný"},
	"unblock": {"type":"string","value":"Odblokovat"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Uživatel se připojil "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Uživatele sleduje "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Uživatele sledují "," a "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Uživatel sledován uživateli ",", "," a "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Uživatele sledují uživatelé ",", "," a další uživatelé (","), které sledujete"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"+n(props.count,"y","y","","ů")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Lajk"+n(props.count,"y","y","","ů")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" fotografie a videa"]}
	},
	"home": {"type":"string","value":"Hlavní stránka"},
	"explore": {"type":"string","value":"Prozkoumat"},
	"notifications": {"type":"string","value":"Oznámení"},
	"connect_people": {"type":"string","value":"Spojit se"},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Zprávy"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Záložky"},
	"jobs": {"type":"string","value":"Práce"},
	"business": {"type":"string","value":"Firma"},
	"communities": {"type":"string","value":"Komunita"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Ověřené organizace"},
	"profile": {"type":"string","value":"Můj profil"},
	"lists": {"type":"string","value":"Seznam"},
	"monetization": {"type":"string","value":"Monetizace"},
	"ads": {"type":"string","value":"Reklamy"},
	"createYourSpace": {"type":"string","value":"Vytvořte svůj Prostor"},
	"settingsAndPrivacy": {"type":"string","value":"Nastavení a soukromí"},
	"moreMenu": {"type":"string","value":"Víc"},
	"addAnExistingAccount": {"type":"string","value":"Přidat existující účet"},
	"manageAccounts": {"type":"string","value":"Spravovat účty"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Přepnout na účet @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweetnout"},
	"settings": {"type":"string","value":"Nastavení"},
	"now": {"type":"string","value":"Nyní"},
	"day": {"type":"string","value":"Den"},
	"month": {"type":"string","value":"Měsíc"},
	"year": {"type":"string","value":"Rok"},
	"january": {"type":"string","value":"leden"},
	"february": {"type":"string","value":"únor"},
	"march": {"type":"string","value":"březen"},
	"april": {"type":"string","value":"duben"},
	"may": {"type":"string","value":"květen"},
	"june": {"type":"string","value":"červen"},
	"july": {"type":"string","value":"červenec"},
	"august": {"type":"string","value":"srpen"},
	"september": {"type":"string","value":"září"},
	"october": {"type":"string","value":"říjen"},
	"november": {"type":"string","value":"listopad"},
	"december": {"type":"string","value":"prosinec"}
};

export default text;
