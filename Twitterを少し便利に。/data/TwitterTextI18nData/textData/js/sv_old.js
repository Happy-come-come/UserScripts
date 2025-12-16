const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"För dig"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Följer"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Fastnålat"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s retweetade"},
	"retweet": {"type":"string","value":"Retweeta"},
	"unDoRetweet": {"type":"string","value":"Ångra retweeten"},
	"quoteTweet": {"type":"string","value":"Citat-tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweets"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Svar"},
	"profileTabTitleHighlights": {"type":"string","value":"Höjdpunkter"},
	"profileTabTitleMedia": {"type":"string","value":"Medier"},
	"profileTabTitleLikes": {"type":"string","value":"Gillamarkeringar"},
	"following": {"type":"string","value":"Följer"},
	"unfollow": {"type":"string","value":"Avfölj"},
	"blocked": {"type":"string","value":"Blockerad"},
	"unblock": {"type":"string","value":"Häv blockering"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Gick med "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Följs av "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Följs av "," och "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Följs av ",", "," och "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Följs av ",", "," och "," till som du följer"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" gilla-markering"+r(props.count,"","ar")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" foton och videor"]}
	},
	"home": {"type":"string","value":"Hem"},
	"explore": {"type":"string","value":"Utforska"},
	"notifications": {"type":"string","value":"Notiser"},
	"connect_people": {"type":"string","value":"Ta kontakt"},
	"chat": {"type":"string","value":"Chatta"},
	"messages": {"type":"string","value":"Meddelanden"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Bokmärken"},
	"jobs": {"type":"string","value":"Jobb"},
	"business": {"type":"string","value":"Företag"},
	"communities": {"type":"string","value":"Grupp"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verifierade organisationer"},
	"profile": {"type":"string","value":"Min profil"},
	"lists": {"type":"string","value":"Lista"},
	"monetization": {"type":"string","value":"Intäktsgenerering"},
	"ads": {"type":"string","value":"Annonser"},
	"createYourSpace": {"type":"string","value":"Skapa ditt område"},
	"settingsAndPrivacy": {"type":"string","value":"Inställningar och integritet"},
	"moreMenu": {"type":"string","value":"Mer"},
	"addAnExistingAccount": {"type":"string","value":"Lägg till ett befintligt konto"},
	"manageAccounts": {"type":"string","value":"Hantera konton"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Växla till @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweeta"},
	"settings": {"type":"string","value":"Inställningar"},
	"now": {"type":"string","value":"Nu"},
	"day": {"type":"string","value":"Dag"},
	"month": {"type":"string","value":"Månad"},
	"year": {"type":"string","value":"År"},
	"january": {"type":"string","value":"Januari"},
	"february": {"type":"string","value":"Februari"},
	"march": {"type":"string","value":"Mars"},
	"april": {"type":"string","value":"April"},
	"may": {"type":"string","value":"Maj"},
	"june": {"type":"string","value":"Juni"},
	"july": {"type":"string","value":"Juli"},
	"august": {"type":"string","value":"Augusti"},
	"september": {"type":"string","value":"September"},
	"october": {"type":"string","value":"Oktober"},
	"november": {"type":"string","value":"November"},
	"december": {"type":"string","value":"December"}
};

export default text;
