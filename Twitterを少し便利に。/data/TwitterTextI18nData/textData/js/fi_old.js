const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(t){return"Sinulle"+t.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(t){return"Seurataan"+t.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Kiinnitetyt"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s uudelleentwiittasi"},
	"retweet": {"type":"string","value":"Uudelleentwiittaa"},
	"unDoRetweet": {"type":"string","value":"Kumoa uudelleentwiittaus"},
	"quoteTweet": {"type":"string","value":"Lainaa twiittiä"},
	"profileTabTitleTimeline": {"type":"string","value":"Twiitit"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Vastaukset"},
	"profileTabTitleHighlights": {"type":"string","value":"Kohokohdat"},
	"profileTabTitleMedia": {"type":"string","value":"Media"},
	"profileTabTitleLikes": {"type":"string","value":"Tykkäykset"},
	"following": {"type":"string","value":"Seurataan"},
	"unfollow": {"type":"string","value":"Älä seuraa"},
	"blocked": {"type":"string","value":"Estetty"},
	"unblock": {"type":"string","value":"Poista esto"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(t){return"Liittyi "+t.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seuraajana "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seuraajina "," ja "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seuraajina ",", "," ja "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Seuraajina ",", "," ja "," muuta, joita seuraat"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" twiitti"+n(props.count,"","ä")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" tykkäys"+n(props.count,"","tä")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" kuvaa ja videota"]}
	},
	"home": {"type":"string","value":"Etusivu"},
	"explore": {"type":"string","value":"Selaa"},
	"notifications": {"type":"string","value":"Ilmoitukset"},
	"messages": {"type":"string","value":"Viestit"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Kirjanmerkit"},
	"jobs": {"type":"string","value":"Työpaikat"},
	"communities": {"type":"string","value":"Yhteisö"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Varmennetut organisaatiot"},
	"profile": {"type":"string","value":"Oma profiili"},
	"lists": {"type":"string","value":"Lista"},
	"monetization": {"type":"string","value":"Kaupallinen käyttö"},
	"ads": {"type":"string","value":"Mainokset"},
	"createYourSpace": {"type":"string","value":"Perusta Huone"},
	"settingsAndPrivacy": {"type":"string","value":"Asetukset ja yksityisyys"},
	"moreMenu": {"type":"string","value":"Lisää"},
	"addAnExistingAccount": {"type":"string","value":"Lisää olemassa oleva tili"},
	"manageAccounts": {"type":"string","value":"Hallitse tilejä"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(t){return"Vaihda tiliin @"+t.screenName}
	},
	"postTweet": {"type":"string","value":"Twiittaa"},
	"settings": {"type":"string","value":"Asetukset"},
	"now": {"type":"string","value":"Nyt"},
	"day": {"type":"string","value":"Päivä"},
	"month": {"type":"string","value":"Kuukausi"},
	"year": {"type":"string","value":"Vuosi"},
	"january": {"type":"string","value":"tammikuu"},
	"february": {"type":"string","value":"helmikuu"},
	"march": {"type":"string","value":"maaliskuu"},
	"april": {"type":"string","value":"huhtikuu"},
	"may": {"type":"string","value":"toukokuu"},
	"june": {"type":"string","value":"kesäkuu"},
	"july": {"type":"string","value":"heinäkuu"},
	"august": {"type":"string","value":"elokuu"},
	"september": {"type":"string","value":"syyskuu"},
	"october": {"type":"string","value":"lokakuu"},
	"november": {"type":"string","value":"marraskuu"},
	"december": {"type":"string","value":"joulukuu"}
};

export default text;