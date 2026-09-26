const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"For deg"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Følger"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Festet"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s retweetet"},
	"replyAction": {"type":"string","value":"Svar"},
	"repostAction": {"type":"string","value":"Republiser"},
	"likeAction": {"type":"string","value":"Liker"},
	"bookmarkAction": {"type":"string","value":"Bokmerke"},
	"showMore": {"type":"string","value":"Vis mer"},
	"viewThread": {"type":"string","value":"Vis denne tråden"},
	"previousImage": {"type":"string","value":"Forrige bilde"},
	"nextImage": {"type":"string","value":"Neste bilde"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Fra "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5 stjerner – "+e.appNumRatings+" vurderinger"}
	},
	"verifiedAccount": {"type":"string","value":"Verifiserte kontoer"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod."},
	"communityMemberBadge": {"type":"string","value":"Medlem"},
	"viewsLabel": {"type":"string","value":"visninger"},
	"viewQuotes": {"type":"string","value":"Se sitater"},
	"viewActivity": {"type":"string","value":"Vis aktivitet"},
	"communityNotes": {"type":"string","value":"Fellesskapsmerknader"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Er denne merknaden hjelpsom?"},
	"communityNoteHelpful": {"type":"string","value":"nyttig"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"litt nyttig"},
	"communityNoteNotHelpful": {"type":"string","value":"ikke nyttig"},
	"cashtagComingSoon": {"type":"string","value":"Kommer snart"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Nå "]}
	},
	"grokAnswerFun": {"type":"string","value":"Svar fra Grok i gøyal modus"},
	"grokAnswer": {"type":"string","value":"Svar fra Grok"},
	"grokImageBy": {"type":"string","value":"Bilde laget av Grok"},
	"grokShowMore": {"type":"string","value":"Vis mer"},
	"grokCreateVersion": {"type":"string","value":"Lag din egen versjon med Grok"},
	"grokAskYourself": {"type":"string","value":"Spør Grok selv"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" nettside"+i(e.count,"","r")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" innlegg"}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" nettsider og innlegg"}
	},
	"mostRelevant": {"type":"string","value":"Relevant"},
	"mostLiked": {"type":"string","value":"Liker"},
	"mostRecent": {"type":"string","value":"Nylig"},
	"sortReplies": {"type":"string","value":"Sorter svar"},
	"lastEdited": {"type":"string","value":"Sist redigert"},
	"newPostVersion": {"type":"string","value":"Det finnes en ny versjon av dette innlegget."},
	"opensEditHistory": {"type":"string","value":"Åpner redigeringshistorikken"},
	"viewLatestPost": {"type":"string","value":"Se det nyeste innlegget"},
	"opensLatestPost": {"type":"string","value":"Åpner den nye versjonen av dette innlegget"},
	"mediaTaggedSelf": {"type":"string","value":"Du"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Fra "]}
	},
	"poll": {"type":"string","value":"Avstemning"},
	"viewPoll": {"type":"string","value":"Vis denne avstemningen"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" stemme"+i(e.count,"","r")}
	},
	"pollEnded": {"type":"string","value":"Endelige resultater"},
	"retweet": {"type":"string","value":"Republiser"},
	"unDoRetweet": {"type":"string","value":"Angre republisering"},
	"quoteTweet": {"type":"string","value":"Sitat-Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweets"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Svar"},
	"profileTabTitleHighlights": {"type":"string","value":"Høydepunkter"},
	"profileTabTitleMedia": {"type":"string","value":"Medier"},
	"profileTabTitleLikes": {"type":"string","value":"Liker"},
	"following": {"type":"string","value":"Følger"},
	"follow": {"type":"string","value":"Følg"},
	"followBack": {"type":"string","value":"Følg tilbake"},
	"followers": {"type":"string","value":"Følgere"},
	"followsYou": {"type":"string","value":"Følger deg"},
	"subscriptions": {"type":"string","value":"Abonnementer"},
	"unfollow": {"type":"string","value":"Avfølg"},
	"blocked": {"type":"string","value":"Blokkert"},
	"unblock": {"type":"string","value":"Opphev blokkering"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Registrerte seg "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Følges av "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Følges av "," og "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Følges av ",", "," og "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Følges av ",", "," og "," andre du følger"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" innlegg"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" likerklikk"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" bilder og videoer"]}
	},
	"home": {"type":"string","value":"Hjem"},
	"explore": {"type":"string","value":"Utforsk"},
	"notifications": {"type":"string","value":"Varsler"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Følg"+e.verb}
	},
	"chat": {"type":"string","value":"Nettprat"},
	"messages": {"type":"string","value":"Meldinger"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Bokmerker"},
	"jobs": {"type":"string","value":"Jobber"},
	"business": {"type":"string","value":"Bedrift"},
	"communities": {"type":"string","value":"Fellesskap"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verifiserte organisasjoner"},
	"profile": {"type":"string","value":"Min profil"},
	"creatorStudio": {"type":"string","value":"Innholdsskaperstudio"},
	"lists": {"type":"string","value":"Liste"},
	"monetization": {"type":"string","value":"Inntektsgenerering"},
	"ads": {"type":"string","value":"Annonser"},
	"createYourSpace": {"type":"string","value":"Opprett området ditt"},
	"settingsAndPrivacy": {"type":"string","value":"Innstillinger og personvern"},
	"moreMenu": {"type":"string","value":"Mer"},
	"addAnExistingAccount": {"type":"string","value":"Legg til en eksisterende konto"},
	"manageAccounts": {"type":"string","value":"Administrer kontoer"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Bytt til @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweet"},
	"settings": {"type":"string","value":"Innstillinger"},
	"now": {"type":"string","value":"Nå"},
	"day": {"type":"string","value":"Dag"},
	"month": {"type":"string","value":"Måned"},
	"year": {"type":"string","value":"År"},
	"january": {"type":"string","value":"Januar"},
	"february": {"type":"string","value":"Februar"},
	"march": {"type":"string","value":"Mars"},
	"april": {"type":"string","value":"April"},
	"may": {"type":"string","value":"Mai"},
	"june": {"type":"string","value":"Juni"},
	"july": {"type":"string","value":"Juli"},
	"august": {"type":"string","value":"August"},
	"september": {"type":"string","value":"September"},
	"october": {"type":"string","value":"Oktober"},
	"november": {"type":"string","value":"November"},
	"december": {"type":"string","value":"Desember"}
};

export default text;
