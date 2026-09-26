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
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s Retweetelte"},
	"replyAction": {"type":"string","value":"Válasz"},
	"repostAction": {"type":"string","value":"Újraposztolás"},
	"likeAction": {"type":"string","value":"Kedvelés"},
	"bookmarkAction": {"type":"string","value":"Könyvjelző"},
	"showMore": {"type":"string","value":"Még több megjelenítése"},
	"viewThread": {"type":"string","value":"Hozzászóláslánc megjelenítése"},
	"previousImage": {"type":"string","value":"Előző kép"},
	"nextImage": {"type":"string","value":"Következő kép"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Innen: "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5 csillag– "+e.appNumRatings+" értékelés"}
	},
	"verifiedAccount": {"type":"string","value":"Ellenőrzött felhasználói fiókok"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod."},
	"communityMemberBadge": {"type":"string","value":"Tag"},
	"viewsLabel": {"type":"string","value":"megtekintés"},
	"viewQuotes": {"type":"string","value":"Idézetek megtekintése"},
	"viewActivity": {"type":"string","value":"Tevékenység megtekintése"},
	"communityNotes": {"type":"string","value":"Közösségi Megjegyzések"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Hasznos ez a megjegyzés?"},
	"communityNoteHelpful": {"type":"string","value":"Hasznosként"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Valamelyest hasznosként"},
	"communityNoteNotHelpful": {"type":"string","value":"Nem hasznosként"},
	"cashtagComingSoon": {"type":"string","value":"Hamarosan:"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Most csak "]}
	},
	"grokAnswerFun": {"type":"string","value":"Válasz a Groktól Szórakoztató módban"},
	"grokAnswer": {"type":"string","value":"Válasz a Groktól"},
	"grokImageBy": {"type":"string","value":"A képet a Grok készítette"},
	"grokShowMore": {"type":"string","value":"Még több megjelenítése"},
	"grokCreateVersion": {"type":"string","value":"Készítsd el a saját verziódat a Grokkal!"},
	"grokAskYourself": {"type":"string","value":"Kérdezz a Groktól!"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" weboldal"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" bejegyzés"}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" weboldal és bejegyzés"}
	},
	"mostRelevant": {"type":"string","value":"Releváns"},
	"mostLiked": {"type":"string","value":"Kedvelések"},
	"mostRecent": {"type":"string","value":"Legutóbbi"},
	"sortReplies": {"type":"string","value":"Válaszok rendezése"},
	"lastEdited": {"type":"string","value":"Utolsó szerkesztés"},
	"newPostVersion": {"type":"string","value":"A bejegyzésnek egy új verziója érhető el."},
	"opensEditHistory": {"type":"string","value":"A szerkesztési előzmények megnyitása"},
	"viewLatestPost": {"type":"string","value":"A legutóbbi bejegyzés megtekintése"},
	"opensLatestPost": {"type":"string","value":"Megnyitja a bejegyzés új verzióját"},
	"mediaTaggedSelf": {"type":"string","value":"Te"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," felhasználótól"]}
	},
	"poll": {"type":"string","value":"Felmérés"},
	"viewPoll": {"type":"string","value":"Felmérés megjelenítése"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount"],
		"value": function(e){return e.formattedCount+" szavazat"}
	},
	"pollEnded": {"type":"string","value":"Végeredmények"},
	"retweet": {"type":"string","value":"Retweet"},
	"unDoRetweet": {"type":"string","value":"Retweet visszavonása"},
	"quoteTweet": {"type":"string","value":"Tweet idézése"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweetek"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Válaszok"},
	"profileTabTitleHighlights": {"type":"string","value":"Kiemelések"},
	"profileTabTitleMedia": {"type":"string","value":"Média"},
	"profileTabTitleLikes": {"type":"string","value":"Kedvelések"},
	"following": {"type":"string","value":"követés"},
	"follow": {"type":"string","value":"Követés"},
	"followBack": {"type":"string","value":"Viszontkövetés"},
	"followers": {"type":"string","value":"Követők"},
	"followsYou": {"type":"string","value":"Követ téged"},
	"subscriptions": {"type":"string","value":"Előfizetések"},
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
		"value": function(){return [""," követi"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," és "," követi"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["",", "," és "," követi"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["",", "," és "," másik felhasználó követi, akiket te is követsz"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Tweet"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Kedvelés"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" fotó és videó"]}
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
	"creatorStudio": {"type":"string","value":"Alkotói stúdió"},
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
	"postTweet": {"type":"string","value":"Tweet küldése"},
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
