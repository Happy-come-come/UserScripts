const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Dla Ciebie"+a.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Obserwujesz"+a.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Przypięte"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"Użytkownik %s podał dalej"},
	"replyAction": {"type":"string","value":"Odpowiedz"},
	"repostAction": {"type":"string","value":"Podaj dalej wpis"},
	"likeAction": {"type":"string","value":"Lubię"},
	"bookmarkAction": {"type":"string","value":"Zakładka"},
	"showMore": {"type":"string","value":"Pokaż więcej"},
	"translatePost": {"type":"string","value":"Przetłumacz wpis"},
	"showTranslation": {"type":"string","value":"Pokaż tłumaczenie"},
	"showOriginal": {"type":"string","value":"Pokaż oryginał"},
	"translatedFrom": {
		"type": "webI18nFunction",
		"arguments": ["sourceLanguageDisplayName"],
		"value": function(a){return"Tłumaczenie z języka "+a.sourceLanguageDisplayName}
	},
	"hideTranslatedPost": {"type":"string","value":"Ukryj przetłumaczony wpis"},
	"showTranslatedPost": {"type":"string","value":"Pokaż przetłumaczony wpis"},
	"translatedByGrok": {"type":"string","value":"Przetłumaczone przez Groka"},
	"viewThread": {"type":"string","value":"Pokaż ten wątek"},
	"previousImage": {"type":"string","value":"Poprzedni obraz"},
	"nextImage": {"type":"string","value":"Następny obraz"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Ze strony "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(a){return"Gwiazdki: "+a.appStarRating+"/5,0; oceny: "+a.appNumRatings}
	},
	"verifiedAccount": {"type":"string","value":"Zweryfikowane konta"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod"},
	"communityMemberBadge": {"type":"string","value":"Członek"},
	"viewsLabel": {"type":"string","value":"wyświetl."},
	"viewQuotes": {"type":"string","value":"Wyświetl cytaty"},
	"viewActivity": {"type":"string","value":"Wyświetl aktywność"},
	"communityNotes": {"type":"string","value":"Uwagi Społeczności"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Czy ta uwaga jest pomocna?"},
	"communityNoteHelpful": {"type":"string","value":"pomocną"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"średnio pomocną"},
	"communityNoteNotHelpful": {"type":"string","value":"niepomocną"},
	"cashtagComingSoon": {"type":"string","value":"Wkrótce"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Teraz za "]}
	},
	"grokAnswerFun": {"type":"string","value":"Odpowiedź Groka w trybie zabawnym"},
	"grokAnswer": {"type":"string","value":"Odpowiedź Groka"},
	"grokImageBy": {"type":"string","value":"Obraz utworzony przez Groka"},
	"grokShowMore": {"type":"string","value":"Pokaż więcej"},
	"grokCreateVersion": {"type":"string","value":"Utwórz swoją wersję za pomocą Groka"},
	"grokAskYourself": {"type":"string","value":"Zapytaj Groka samodzielnie"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" stron"+r(a.count,"y internetowe"," internetowych","a internetowa","y internetowej")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" wpis"+r(a.count,"y","ów","","u")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return"Strony internetowe i wpisy: "+a.count}
	},
	"mostRelevant": {"type":"string","value":"Trafne"},
	"mostLiked": {"type":"string","value":"Polubienia"},
	"mostRecent": {"type":"string","value":"Najnowsze"},
	"sortReplies": {"type":"string","value":"Sortuj odpowiedzi"},
	"lastEdited": {"type":"string","value":"Ostatnia zmiana:"},
	"newPostVersion": {"type":"string","value":"Istnieje nowa wersja tego wpisu."},
	"opensEditHistory": {"type":"string","value":"Otwiera historię edycji"},
	"viewLatestPost": {"type":"string","value":"Zobacz najnowszy wpis"},
	"opensLatestPost": {"type":"string","value":"Otwiera nową wersję tego wpisu"},
	"mediaTaggedSelf": {"type":"string","value":"Ty"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Od "]}
	},
	"poll": {"type":"string","value":"Głosowanie"},
	"viewPoll": {"type":"string","value":"Pokaż głosowanie"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(a){return a.formattedCount+" głos"+r(a.count,"y","ów","","ów")}
	},
	"pollEnded": {"type":"string","value":"Wyniki końcowe"},
	"pollTimeLeftMinutes": {
		"type": "webI18nFunction",
		"arguments": ["count","formattedCount"],
		"value": function(a){return"Pozostał"+r(a.count,"y "+a.formattedCount+" minuty","o "+a.formattedCount+" minut","a "+a.formattedCount+" minuta","o "+a.formattedCount+" minut")}
	},
	"pollTimeLeftHours": {
		"type": "webI18nFunction",
		"arguments": ["count","formattedCount"],
		"value": function(a){return"Pozostał"+r(a.count,"y "+a.formattedCount+" godziny","o "+a.formattedCount+" godzin","a "+a.formattedCount+" godzina","o "+a.formattedCount+" godzin")}
	},
	"pollTimeLeftDays": {
		"type": "webI18nFunction",
		"arguments": ["count","formattedCount"],
		"value": function(a){return"Pozostał"+r(a.count,"y "+a.formattedCount+" dni","o "+a.formattedCount+" dni"," "+a.formattedCount+" dzień","o "+a.formattedCount+" dni")}
	},
	"imageAltTitle": {"type":"string","value":"Opis obrazu"},
	"imageAltRead": {"type":"string","value":"przeczytaj opis obrazu"},
	"imageAltHide": {"type":"string","value":"Odrzuć"},
	"retweet": {"type":"string","value":"Podaj dalej wpis"},
	"unDoRetweet": {"type":"string","value":"Cofnij podanie dalej wpisu"},
	"quoteTweet": {"type":"string","value":"Cytuj"},
	"profileTabTitleTimeline": {"type":"string","value":"Wpisy"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Odpowiedzi"},
	"profileTabTitleHighlights": {"type":"string","value":"Najciekawsze"},
	"profileTabTitleMedia": {"type":"string","value":"Multimedia"},
	"profileTabTitleLikes": {"type":"string","value":"Polubienia"},
	"following": {"type":"string","value":"Obserwujesz"},
	"follow": {"type":"string","value":"Obserwuj"},
	"followBack": {"type":"string","value":"Również obserwuj"},
	"followers": {"type":"string","value":"Obserwujący"},
	"followsYou": {"type":"string","value":"Obserwuje Cię"},
	"subscriptions": {"type":"string","value":"Subskrypcje"},
	"unfollow": {"type":"string","value":"Przestań obserwować"},
	"blocked": {"type":"string","value":"Zablokowano"},
	"unblock": {"type":"string","value":"Odblokuj"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(a){return"Dołączył/a "+a.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Obserwowany przez: "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Obserwowany przez: "," i "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Obserwowany przez: ",", "," i "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Obserwowany przez ",", "," i "," innych użytkowników. których obserwujesz"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" wpis"+r(props.count,"y","ów","","u")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" "+r(props.count,"Lubię to","Lubię to","Polubienie","Polubień")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" zdję"+r(props.count,"cia i filmy","ć i filmów","cie i film","cia i filmu")]}
	},
	"home": {"type":"string","value":"Główna"},
	"explore": {"type":"string","value":"Przeglądaj"},
	"notifications": {"type":"string","value":"Powiadomienia"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(a){return"Obserwuj"+a.verb}
	},
	"chat": {"type":"string","value":"Czat"},
	"call": undefined,
	"messages": {"type":"string","value":"Wiadomości"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Zakładki"},
	"history": {"type":"string","value":"Historia"},
	"jobs": {"type":"string","value":"Oferty pracy"},
	"business": {"type":"string","value":"Biznes"},
	"communities": {"type":"string","value":"Grupa dyskusyjna"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Zweryfikowane Organizacje"},
	"profile": {"type":"string","value":"Mój profil"},
	"creatorStudio": {"type":"string","value":"Creator Studio"},
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
		"value": function(a){return"Przełącz na konto @"+a.screenName}
	},
	"postTweet": {"type":"string","value":"Opublikuj"},
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
