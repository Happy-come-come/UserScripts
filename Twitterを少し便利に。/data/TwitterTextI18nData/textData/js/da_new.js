const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Til dig"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Følger"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Fastgjort"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s retweetede"},
	"replyAction": {"type":"string","value":"Svar"},
	"repostAction": {"type":"string","value":"Repost"},
	"likeAction": {"type":"string","value":"Like"},
	"bookmarkAction": {"type":"string","value":"Føj til bogmærker"},
	"showMore": {"type":"string","value":"Vis mere"},
	"viewThread": {"type":"string","value":"Vis denne tråd"},
	"previousImage": {"type":"string","value":"Forrige billede"},
	"nextImage": {"type":"string","value":"Næste billede"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Fra "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5,0 stjerner – "+e.appNumRatings+" bedømmelser"}
	},
	"verifiedAccount": {"type":"string","value":"Verificerede konti"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod."},
	"communityMemberBadge": {"type":"string","value":"Medlem"},
	"viewsLabel": {"type":"string","value":"visninger"},
	"viewQuotes": {"type":"string","value":"Vis citater"},
	"viewActivity": {"type":"string","value":"Vis aktivitet"},
	"communityNotes": {"type":"string","value":"Fællesskabsnoter"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Er denne note nyttig?"},
	"communityNoteHelpful": {"type":"string","value":"Nyttig"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Nogenlunde nyttig"},
	"communityNoteNotHelpful": {"type":"string","value":"Ikke nyttig"},
	"cashtagComingSoon": {"type":"string","value":"Kommer snart"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Nu kl. "]}
	},
	"grokAnswerFun": {"type":"string","value":"Svar fra Grok i tilstanden Sjov"},
	"grokAnswer": {"type":"string","value":"Svar fra Grok"},
	"grokImageBy": {"type":"string","value":"Billede af Grok"},
	"grokShowMore": {"type":"string","value":"Vis mere"},
	"grokCreateVersion": {"type":"string","value":"Opret din version med Grok"},
	"grokAskYourself": {"type":"string","value":"Spørg selv Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" webside"+a(e.count,"","r")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" post"+a(e.count,"","s")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" websider og posts"}
	},
	"mostRelevant": {"type":"string","value":"Relevant"},
	"mostLiked": {"type":"string","value":"Likes"},
	"mostRecent": {"type":"string","value":"Nye"},
	"sortReplies": {"type":"string","value":"Sortér svar"},
	"lastEdited": {"type":"string","value":"Sidst redigeret"},
	"newPostVersion": {"type":"string","value":"Der er en ny version af denne post."},
	"opensEditHistory": {"type":"string","value":"Åbner redigeringshistorik"},
	"viewLatestPost": {"type":"string","value":"Se den seneste post"},
	"opensLatestPost": {"type":"string","value":"Åbner den nye version af denne post"},
	"mediaTaggedSelf": {"type":"string","value":"Dig"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Fra "]}
	},
	"poll": {"type":"string","value":"Afstemning"},
	"viewPoll": {"type":"string","value":"Vis denne afstemning."},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" stemme"+a(e.count,"","r")}
	},
	"pollEnded": {"type":"string","value":"Endelige resultater"},
	"retweet": {"type":"string","value":"Repost"},
	"unDoRetweet": {"type":"string","value":"Fortryd repost"},
	"quoteTweet": {"type":"string","value":"Citér tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweets"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Svar"},
	"profileTabTitleHighlights": {"type":"string","value":"Højdepunkter"},
	"profileTabTitleMedia": {"type":"string","value":"Medier"},
	"profileTabTitleLikes": {"type":"string","value":"Likes"},
	"following": {"type":"string","value":"Følger"},
	"follow": {"type":"string","value":"Følg"},
	"followBack": {"type":"string","value":"Følg tilbage"},
	"followers": {"type":"string","value":"Følgere"},
	"followsYou": {"type":"string","value":"Følger dig"},
	"subscriptions": {"type":"string","value":"Abonnementer"},
	"unfollow": {"type":"string","value":"Følg ikke længere"},
	"blocked": {"type":"string","value":"Blokeret"},
	"unblock": {"type":"string","value":"Fjern blokering"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Medlem siden "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Følges af "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Følges af "," og "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Følges af ",", "," og "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Følges af ",", "," og "," andre, som du følger"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" post"+a(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Like"+a(props.count,"","s")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" billeder og videoer"]}
	},
	"home": {"type":"string","value":"Forside"},
	"explore": {"type":"string","value":"Udforsk"},
	"notifications": {"type":"string","value":"Meddelelser"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Følg"+e.verb}
	},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Beskeder"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Bogmærker"},
	"jobs": {"type":"string","value":"Job"},
	"business": {"type":"string","value":"Erhverv"},
	"communities": {"type":"string","value":"Fællesskab"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verificerede org."},
	"profile": {"type":"string","value":"Min profil"},
	"creatorStudio": {"type":"string","value":"Skaberstudie"},
	"lists": {"type":"string","value":"Liste"},
	"monetization": {"type":"string","value":"Indtægtsgenerering"},
	"ads": {"type":"string","value":"Annoncer"},
	"createYourSpace": {"type":"string","value":"Opret dit Rum"},
	"settingsAndPrivacy": {"type":"string","value":"Indstillinger og privatliv"},
	"moreMenu": {"type":"string","value":"Mere"},
	"addAnExistingAccount": {"type":"string","value":"Tilføj en eksisterende konto"},
	"manageAccounts": {"type":"string","value":"Administrer konti"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Skift til @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweet"},
	"settings": {"type":"string","value":"Indstillinger"},
	"now": {"type":"string","value":"Nu"},
	"day": {"type":"string","value":"Dag"},
	"month": {"type":"string","value":"Måned"},
	"year": {"type":"string","value":"År"},
	"january": {"type":"string","value":"Januar"},
	"february": {"type":"string","value":"Februar"},
	"march": {"type":"string","value":"Marts"},
	"april": {"type":"string","value":"April"},
	"may": {"type":"string","value":"Maj"},
	"june": {"type":"string","value":"Juni"},
	"july": {"type":"string","value":"Juli"},
	"august": {"type":"string","value":"August"},
	"september": {"type":"string","value":"September"},
	"october": {"type":"string","value":"Oktober"},
	"november": {"type":"string","value":"November"},
	"december": {"type":"string","value":"December"}
};

export default text;
