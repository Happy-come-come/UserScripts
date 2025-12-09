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
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s repostede"},
	"retweet": {"type":"string","value":"Repost"},
	"unDoRetweet": {"type":"string","value":"Fortryd repost"},
	"quoteTweet": {"type":"string","value":"Citat"},
	"profileTabTitleTimeline": {"type":"string","value":"Posts"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Svar"},
	"profileTabTitleHighlights": {"type":"string","value":"Højdepunkter"},
	"profileTabTitleMedia": {"type":"string","value":"Medier"},
	"profileTabTitleLikes": {"type":"string","value":"Likes"},
	"following": {"type":"string","value":"Følger"},
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
		"value": function(){return["Følges af "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Følges af "," og "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Følges af ",", "," og "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Følges af ",", "," og "," andre, som du følger"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" post"+i(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Like"+i(props.count,"","s")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" billeder og videoer"]}
	},
	"home": {"type":"string","value":"Forside"},
	"explore": {"type":"string","value":"Udforsk"},
	"notifications": {"type":"string","value":"Meddelelser"},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Beskeder"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Bogmærker"},
	"jobs": {"type":"string","value":"Job"},
	"communities": {"type":"string","value":"Fællesskab"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verificerede org."},
	"profile": {"type":"string","value":"Min profil"},
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
	"postTweet": {"type":"string","value":"Post"},
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