const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Pentru tine"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Urmărești"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Fixate"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s a redistribuit"},
	"retweet": {"type":"string","value":"Redistribuie"},
	"unDoRetweet": {"type":"string","value":"Anulează Retweetul"},
	"quoteTweet": {"type":"string","value":"Citează Tweetul"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweeturi"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Răspunsuri"},
	"profileTabTitleHighlights": {"type":"string","value":"Evidențieri"},
	"profileTabTitleMedia": {"type":"string","value":"Conținut media"},
	"profileTabTitleLikes": {"type":"string","value":"Aprecieri"},
	"following": {"type":"string","value":"Urmărești"},
	"unfollow": {"type":"string","value":"Oprește urmărirea"},
	"blocked": {"type":"string","value":"Blocat"},
	"unblock": {"type":"string","value":"Deblochează"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"S-a alăturat în "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Urmărit de "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Urmărit de "," și de "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Urmărit de ",", de "," și de "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Urmărit de ",", "," și de încă "," persoane pe care le urmărești"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" "+r(props.count,"Tweeturi","Tweet","de Tweeturi")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Aprecier"+r(props.count,"i","e","i")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" fotografi"+r(props.count,"i și clipuri","e și clip","i și clipuri")+" video"]}
	},
	"home": {"type":"string","value":"Pagina principală"},
	"search": {"type":"string","value":"Explorează"},
	"notifications": {"type":"string","value":"Notificări"},
	"messages": {"type":"string","value":"Mesaje"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Marcaje"},
	"jobs": {"type":"string","value":"Locuri de muncă"},
	"communities": {"type":"string","value":"Comunitate"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Organizații verificate"},
	"profile": {"type":"string","value":"Profilul meu"},
	"lists": {"type":"string","value":"Listă"},
	"monetization": {"type":"string","value":"Monetizare"},
	"ads": {"type":"string","value":"Reclame"},
	"createYourSpace": {"type":"string","value":"Creează-ți Spațiul"},
	"settingsAndPrivacy": {"type":"string","value":"Setări și confidențialitate"},
	"addAnExistingAccount": {"type":"string","value":"Adaugă un cont existent"},
	"manageAccounts": {"type":"string","value":"Gestionează conturile"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Comută la @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Dă Tweet"},
	"settings": {"type":"string","value":"Setări"},
	"now": {"type":"string","value":"Acum"},
	"day": {"type":"string","value":"Zi"},
	"month": {"type":"string","value":"Lună"},
	"year": {"type":"string","value":"An"},
	"january": {"type":"string","value":"Ianuarie"},
	"february": {"type":"string","value":"Februarie"},
	"march": {"type":"string","value":"Martie"},
	"april": {"type":"string","value":"Aprilie"},
	"may": {"type":"string","value":"Mai"},
	"june": {"type":"string","value":"Iunie"},
	"july": {"type":"string","value":"Iulie"},
	"august": {"type":"string","value":"August"},
	"september": {"type":"string","value":"Septembrie"},
	"october": {"type":"string","value":"Octombrie"},
	"november": {"type":"string","value":"Noiembrie"},
	"december": {"type":"string","value":"Decembrie"}
};

export default text;