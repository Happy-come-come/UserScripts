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
	"retweet": {"type":"string","value":"Proslijedi tweet"},
	"unDoRetweet": {"type":"string","value":"Poništi prosljeđivanje tweeta"},
	"quoteTweet": {"type":"string","value":"Citiraj Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweetovi"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Odgovori"},
	"profileTabTitleHighlights": {"type":"string","value":"Istaknuto"},
	"profileTabTitleMedia": {"type":"string","value":"Medijski sadržaj"},
	"profileTabTitleLikes": {"type":"string","value":"Lajkovi"},
	"following": {"type":"string","value":"Pratim"},
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
		"value": function(){return["Prati korisnik/ca "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Prate korisnici/ce "," i "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Prate ",", "," i "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Prate ",", "," i još njih "," koje i vi pratite"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" "+t(props.count,"tweeta","Tweet","tweetova")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" oznak"+t(props.count,"e","a","a")+" „sviđa mi se”"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" fotografij"+n(props.count,"e i videozapisa","a i videozapis","a i videozapisa")]}
	},
	"home": {"type":"string","value":"Naslovnica"},
	"search": {"type":"string","value":"Istraži"},
	"notifications": {"type":"string","value":"Obavijesti"},
	"messages": {"type":"string","value":"Poruke"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Knjižne oznake"},
	"jobs": {"type":"string","value":"Poslovi"},
	"communities": {"type":"string","value":"Zajednica"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Provjerene organizacije"},
	"profile": {"type":"string","value":"Moj profil"},
	"lists": {"type":"string","value":"Popis"},
	"monetization": {"type":"string","value":"Monetizacija"},
	"ads": {"type":"string","value":"Oglasi"},
	"createYourSpace": {"type":"string","value":"Stvorite svoj Prostor"},
	"settingsAndPrivacy": {"type":"string","value":"Postavke i zaštita privatnosti"},
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