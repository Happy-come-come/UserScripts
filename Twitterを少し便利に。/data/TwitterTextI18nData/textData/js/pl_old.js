const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Dla Ciebie"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Obserwujesz"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Przypięte"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s podał/a dalej Tweeta"},
	"retweet": {"type":"string","value":"Podaj dalej"},
	"unDoRetweet": {"type":"string","value":"Cofnij podanie dalej"},
	"quoteTweet": {"type":"string","value":"Cytuj tweeta"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweety"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Odpowiedzi"},
	"profileTabTitleHighlights": {"type":"string","value":"Najciekawsze"},
	"profileTabTitleMedia": {"type":"string","value":"Multimedia"},
	"profileTabTitleLikes": {"type":"string","value":"Polubienia"},
	"following": {"type":"string","value":"Obserwujesz"},
	"unfollow": {"type":"string","value":"Przestań obserwować"},
	"blocked": {"type":"string","value":"Zablokowano"},
	"unblock": {"type":"string","value":"Odblokuj"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Dołączył/a "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Obserwowany przez: "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Obserwowany przez: "," i "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Obserwowany przez: ",", "," i "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Obserwowany przez ",", "," i "," innych użytkowników. których obserwujesz"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"+n(props.count,"y","ów","","ów")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Polubie"+n(props.count,"nia","ń","nie","ń")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" zdję"+n(props.count,"cia i filmy","ć i filmów","cie i film","cia i filmu")]}
	},
	"home": {"type":"string","value":"Główna"},
	"explore": {"type":"string","value":"Przeglądaj"},
	"notifications": {"type":"string","value":"Powiadomienia"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Obserwuj"+e.verb}
	},
	"chat": {"type":"string","value":"Czat"},
	"messages": {"type":"string","value":"Wiadomości"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Zakładki"},
	"jobs": {"type":"string","value":"Oferty pracy"},
	"business": {"type":"string","value":"Biznes"},
	"communities": {"type":"string","value":"Grupa dyskusyjna"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Zweryfikowane Organizacje"},
	"profile": {"type":"string","value":"Mój profil"},
	"lists": {"type":"string","value":"Lista"},
	"monetization": {"type":"string","value":"Monetyzacja"},
	"ads": {"type":"string","value":"Reklamy"},
	"createYourSpace": {"type":"string","value":"Utwórz Pokój"},
	"settingsAndPrivacy": {"type":"string","value":"Ustawienia i prywatność"},
	"moreMenu": {"type":"string","value":"Więcej"},
	"addAnExistingAccount": {"type":"string","value":"Dodaj istniejące konto"},
	"manageAccounts": {"type":"string","value":"Zarządzaj kontami"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Przełącz na konto @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweetnij"},
	"settings": {"type":"string","value":"Ustawienia"},
	"now": {"type":"string","value":"Teraz"},
	"day": {"type":"string","value":"Dzień"},
	"month": {"type":"string","value":"Miesiąc"},
	"year": {"type":"string","value":"Rok"},
	"january": {"type":"string","value":"styczeń"},
	"february": {"type":"string","value":"luty"},
	"march": {"type":"string","value":"marzec"},
	"april": {"type":"string","value":"kwiecień"},
	"may": {"type":"string","value":"maj"},
	"june": {"type":"string","value":"czerwiec"},
	"july": {"type":"string","value":"lipiec"},
	"august": {"type":"string","value":"sierpień"},
	"september": {"type":"string","value":"wrzesień"},
	"october": {"type":"string","value":"październik"},
	"november": {"type":"string","value":"listopad"},
	"december": {"type":"string","value":"grudzień"}
};

export default text;
