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
	"replyAction": {"type":"string","value":"Svara"},
	"repostAction": {"type":"string","value":"Återpublicera"},
	"likeAction": {"type":"string","value":"Gilla"},
	"bookmarkAction": {"type":"string","value":"Bokmärke"},
	"showMore": {"type":"string","value":"Visa fler"},
	"viewThread": {"type":"string","value":"Visa denna tråd"},
	"previousImage": {"type":"string","value":"Föregående bild"},
	"nextImage": {"type":"string","value":"Nästa bild"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Från "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5,0 stjärnor – "+e.appNumRatings+" betyg"}
	},
	"verifiedAccount": {"type":"string","value":"Verifierade konton"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod."},
	"communityMemberBadge": {"type":"string","value":"Medlem"},
	"viewsLabel": {"type":"string","value":"visningar"},
	"viewQuotes": {"type":"string","value":"Visa citat"},
	"viewActivity": {"type":"string","value":"Visa aktiviteten"},
	"communityNotes": {"type":"string","value":"Gruppanmärkningar"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Är denna anmärkning till någon hjälp?"},
	"communityNoteHelpful": {"type":"string","value":"Till nytta"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Till viss nytta"},
	"communityNoteNotHelpful": {"type":"string","value":"Inte till nytta"},
	"cashtagComingSoon": {"type":"string","value":"Kommer snart"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Nu "]}
	},
	"grokAnswerFun": {"type":"string","value":"Svar från Grok i roligt läge"},
	"grokAnswer": {"type":"string","value":"Svar från Grok"},
	"grokImageBy": {"type":"string","value":"Bild av Grok"},
	"grokShowMore": {"type":"string","value":"Visa fler"},
	"grokCreateVersion": {"type":"string","value":"Skapa din version med Grok"},
	"grokAskYourself": {"type":"string","value":"Fråga Grok själv"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" webbsid"+i(e.count,"a","or")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" "+i(e.count,"","nya ")+"inlägg"}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" webbsidor och inlägg"}
	},
	"mostRelevant": {"type":"string","value":"Relevant"},
	"mostLiked": {"type":"string","value":"Gilla-markeringar"},
	"mostRecent": {"type":"string","value":"Senaste"},
	"sortReplies": {"type":"string","value":"Sortera svar"},
	"lastEdited": {"type":"string","value":"Senast redigerad"},
	"newPostVersion": {"type":"string","value":"Det finns en ny version av detta inlägg."},
	"opensEditHistory": {"type":"string","value":"Öppnar redigeringshistoriken"},
	"viewLatestPost": {"type":"string","value":"Se det senaste inlägget"},
	"opensLatestPost": {"type":"string","value":"Öppnar den nya versionen av detta inlägg"},
	"mediaTaggedSelf": {"type":"string","value":"Du"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Från "]}
	},
	"poll": {"type":"string","value":"Omröstning"},
	"viewPoll": {"type":"string","value":"Visa denna omröstning"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" röst"+r(e.count,"","er")}
	},
	"pollEnded": {"type":"string","value":"Slutresultat"},
	"retweet": {"type":"string","value":"Retweeta"},
	"unDoRetweet": {"type":"string","value":"Ångra retweeten"},
	"quoteTweet": {"type":"string","value":"Citat-tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweets"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Svar"},
	"profileTabTitleHighlights": {"type":"string","value":"Höjdpunkter"},
	"profileTabTitleMedia": {"type":"string","value":"Medier"},
	"profileTabTitleLikes": {"type":"string","value":"Gillamarkeringar"},
	"following": {"type":"string","value":"Följer"},
	"follow": {"type":"string","value":"Följ"},
	"followBack": {"type":"string","value":"Följ du också"},
	"followers": {"type":"string","value":"Följare"},
	"followsYou": {"type":"string","value":"Följer dig"},
	"subscriptions": {"type":"string","value":"Prenumerationer"},
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
		"value": function(){return ["Följs av "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Följs av "," och "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Följs av ",", "," och "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Följs av ",", "," och "," till som du följer"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Tweet"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" gilla-markering"+r(props.count,"","ar")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" foton och videor"]}
	},
	"home": {"type":"string","value":"Hem"},
	"explore": {"type":"string","value":"Utforska"},
	"notifications": {"type":"string","value":"Notiser"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Följ"+e.verb}
	},
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
	"creatorStudio": {"type":"string","value":"Kreatörsstudion"},
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
