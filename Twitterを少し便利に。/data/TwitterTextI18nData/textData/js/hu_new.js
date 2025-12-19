const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Neked"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Követés"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Kitűzött"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s újraposztolta"},
	"retweet": {"type":"string","value":"Újraposztolás"},
	"unDoRetweet": {"type":"string","value":"Újraposztolás visszavonása"},
	"quoteTweet": {"type":"string","value":"Idézés"},
	"profileTabTitleTimeline": {"type":"string","value":"Bejegyzések"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Válaszok"},
	"profileTabTitleHighlights": {"type":"string","value":"Kiemelések"},
	"profileTabTitleMedia": {"type":"string","value":"Média"},
	"profileTabTitleLikes": {"type":"string","value":"Kedvelések"},
	"following": {"type":"string","value":"követés"},
	"unfollow": {"type":"string","value":"Követés megszüntetése"},
	"blocked": {"type":"string","value":"Letiltva"},
	"unblock": {"type":"string","value":"Tiltás feloldása"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Csatlakozás: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," követi"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," és "," követi"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," és "," követi"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," és "," másik felhasználó követi, akiket te is követsz"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" bejegyzés"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Kedvelés"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" fotó és videó"]}
	},
	"home": {"type":"string","value":"Kezdőlap"},
	"explore": {"type":"string","value":"Felfedezés"},
	"notifications": {"type":"string","value":"Értesítések"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Követés"+e.verb}
	},
	"chat": {"type":"string","value":"Csevegés"},
	"messages": {"type":"string","value":"Üzenetek"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Könyvjelzők"},
	"jobs": {"type":"string","value":"Munkalehetőségek"},
	"business": {"type":"string","value":"Üzleti"},
	"communities": {"type":"string","value":"Közösség"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Ellenőrzött szervezetek"},
	"profile": {"type":"string","value":"Saját profil"},
	"lists": {"type":"string","value":"Lista"},
	"monetization": {"type":"string","value":"Pénzszerzés"},
	"ads": {"type":"string","value":"Hirdetések"},
	"createYourSpace": {"type":"string","value":"Hozd létre a saját Tered!"},
	"settingsAndPrivacy": {"type":"string","value":"Beállítások és adatvédelem"},
	"moreMenu": {"type":"string","value":"Továbbiak"},
	"addAnExistingAccount": {"type":"string","value":"Létező felhasználói fiók hozzáadása"},
	"manageAccounts": {"type":"string","value":"Felhasználói fiókok kezelése"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Váltás @"+e.screenName+" névre"}
	},
	"postTweet": {"type":"string","value":"Közzététel"},
	"settings": {"type":"string","value":"Beállítások"},
	"now": {"type":"string","value":"Most"},
	"day": {"type":"string","value":"Nap"},
	"month": {"type":"string","value":"Hónap"},
	"year": {"type":"string","value":"Év"},
	"january": {"type":"string","value":"január"},
	"february": {"type":"string","value":"február"},
	"march": {"type":"string","value":"március"},
	"april": {"type":"string","value":"április"},
	"may": {"type":"string","value":"május"},
	"june": {"type":"string","value":"június"},
	"july": {"type":"string","value":"július"},
	"august": {"type":"string","value":"augusztus"},
	"september": {"type":"string","value":"szeptember"},
	"october": {"type":"string","value":"október"},
	"november": {"type":"string","value":"november"},
	"december": {"type":"string","value":"december"}
};

export default text;
