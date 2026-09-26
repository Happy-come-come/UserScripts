const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Za vas"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Pratim"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Prikvačeno"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s proslijedio/la je Tweet"},
	"replyAction": {"type":"string","value":"Odgovori"},
	"repostAction": {"type":"string","value":"Proslijedi objavu"},
	"likeAction": {"type":"string","value":"Označi sa \"sviđa mi se\""},
	"bookmarkAction": {"type":"string","value":"Dodaj u knjižne oznake"},
	"showMore": {"type":"string","value":"Prikaži još"},
	"viewThread": {"type":"string","value":"Pokaži tu nit razgovora"},
	"previousImage": {"type":"string","value":"Prethodna slika"},
	"nextImage": {"type":"string","value":"Sljedeća slika"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Od "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(a){return a.appStarRating+"/5,0 zvjezdica – broj ocjena: "+a.appNumRatings}
	},
	"verifiedAccount": {"type":"string","value":"Provjereni računi"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod."},
	"communityMemberBadge": {"type":"string","value":"Član"},
	"viewsLabel": {"type":"string","value":"prikaza"},
	"viewQuotes": {"type":"string","value":"Prikaz citata"},
	"viewActivity": {"type":"string","value":"Prikaz aktivnosti"},
	"communityNotes": {"type":"string","value":"Bilješke zajednice"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Je li ta napomena korisna?"},
	"communityNoteHelpful": {"type":"string","value":"korisnom"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"donekle korisnom"},
	"communityNoteNotHelpful": {"type":"string","value":"ne smatrate korisnom"},
	"cashtagComingSoon": {"type":"string","value":"Uskoro"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Sada za "]}
	},
	"grokAnswerFun": {"type":"string","value":"Odgovor omogućuje Grok u Zabavnom načinu rada"},
	"grokAnswer": {"type":"string","value":"Odgovor omogućuje Grok"},
	"grokImageBy": {"type":"string","value":"Sliku omogućuje Grok"},
	"grokShowMore": {"type":"string","value":"Prikaži još"},
	"grokCreateVersion": {"type":"string","value":"Izradite svoju verziju uz značajku Grok"},
	"grokAskYourself": {"type":"string","value":"Sami pitajte Groka"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" web-stranic"+t(a.count,"e","a","a")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" nov"+t(a.count,"e objave","u objavu","ih objava")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return"Web-stranice i objave: "+a.count}
	},
	"mostRelevant": {"type":"string","value":"Relevantno"},
	"mostLiked": {"type":"string","value":"Oznake „sviđa mi se”"},
	"mostRecent": {"type":"string","value":"Nedavno"},
	"sortReplies": {"type":"string","value":"Sortiraj odgovore"},
	"lastEdited": {"type":"string","value":"Zadnja izmjena"},
	"newPostVersion": {"type":"string","value":"Postoji nova verzija te objave."},
	"opensEditHistory": {"type":"string","value":"Otvara se povijest izmjena"},
	"viewLatestPost": {"type":"string","value":"Pogledajte najnoviju objavu"},
	"opensLatestPost": {"type":"string","value":"Otvara novu verziju te objave"},
	"mediaTaggedSelf": {"type":"string","value":"Vi"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Od korisnika/ce "]}
	},
	"poll": {"type":"string","value":"Anketa"},
	"viewPoll": {"type":"string","value":"Prikaži tu anketu"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" glas"+t(e.count,"a","","ova")}
	},
	"pollEnded": {"type":"string","value":"Konačni rezultati"},
	"retweet": {"type":"string","value":"Proslijedi tweet"},
	"unDoRetweet": {"type":"string","value":"Poništi prosljeđivanje tweeta"},
	"quoteTweet": {"type":"string","value":"Citiraj Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweetovi"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Odgovori"},
	"profileTabTitleHighlights": {"type":"string","value":"Istaknuto"},
	"profileTabTitleMedia": {"type":"string","value":"Medijski sadržaj"},
	"profileTabTitleLikes": {"type":"string","value":"Lajkovi"},
	"following": {"type":"string","value":"Pratim"},
	"follow": {"type":"string","value":"Počni pratiti"},
	"followBack": {"type":"string","value":"Počni pratiti"},
	"followers": {"type":"string","value":"Osobe koje vas prate"},
	"followsYou": {"type":"string","value":"Prati vas"},
	"subscriptions": {"type":"string","value":"Pretplate"},
	"unfollow": {"type":"string","value":"Prestani pratiti"},
	"blocked": {"type":"string","value":"Blokirano"},
	"unblock": {"type":"string","value":"Deblokiraj"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Datum pridruživanja: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Prati korisnik/ca "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Prate korisnici/ce "," i "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Prate ",", "," i "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Prate ",", "," i još njih "," koje i vi pratite"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" "+t(props.count,"tweeta","Tweet","tweetova")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" oznak"+t(props.count,"e","a","a")+" „sviđa mi se”"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" fotografij"+t(props.count,"e i videozapisa","a i videozapis","a i videozapisa")]}
	},
	"home": {"type":"string","value":"Naslovnica"},
	"explore": {"type":"string","value":"Istraži"},
	"notifications": {"type":"string","value":"Obavijesti"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(a){return"Počni pratiti"+a.verb}
	},
	"chat": {"type":"string","value":"Čavrljanje"},
	"messages": {"type":"string","value":"Poruke"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Knjižne oznake"},
	"jobs": {"type":"string","value":"Poslovi"},
	"business": {"type":"string","value":"Tvrtke"},
	"communities": {"type":"string","value":"Zajednica"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Provjerene organizacije"},
	"profile": {"type":"string","value":"Moj profil"},
	"creatorStudio": {"type":"string","value":"Creator Studio"},
	"lists": {"type":"string","value":"Popis"},
	"monetization": {"type":"string","value":"Monetizacija"},
	"ads": {"type":"string","value":"Oglasi"},
	"createYourSpace": {"type":"string","value":"Stvorite svoj Prostor"},
	"settingsAndPrivacy": {"type":"string","value":"Postavke i zaštita privatnosti"},
	"moreMenu": {"type":"string","value":"Više"},
	"addAnExistingAccount": {"type":"string","value":"Dodavanje postojećeg računa"},
	"manageAccounts": {"type":"string","value":"Upravljanje računima"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Prijelaz na račun @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweetaj"},
	"settings": {"type":"string","value":"Postavke"},
	"now": {"type":"string","value":"Odmah"},
	"day": {"type":"string","value":"Dan"},
	"month": {"type":"string","value":"Mjesec"},
	"year": {"type":"string","value":"Godina"},
	"january": {"type":"string","value":"Siječanj"},
	"february": {"type":"string","value":"Veljača"},
	"march": {"type":"string","value":"Ožujak"},
	"april": {"type":"string","value":"Travanj"},
	"may": {"type":"string","value":"Svibanj"},
	"june": {"type":"string","value":"Lipanj"},
	"july": {"type":"string","value":"Srpanj"},
	"august": {"type":"string","value":"Kolovoz"},
	"september": {"type":"string","value":"Rujan"},
	"october": {"type":"string","value":"Listopad"},
	"november": {"type":"string","value":"Studeni"},
	"december": {"type":"string","value":"Prosinac"}
};

export default text;
