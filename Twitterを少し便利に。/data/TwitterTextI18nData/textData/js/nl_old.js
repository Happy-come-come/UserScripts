const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Voor jou"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Volgend"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Vastgemaakt"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s heeft geretweet"},
	"replyAction": {"type":"string","value":"Beantwoorden"},
	"repostAction": {"type":"string","value":"Repost"},
	"likeAction": {"type":"string","value":"Leuk"},
	"bookmarkAction": {"type":"string","value":"Bladwijzer"},
	"showMore": {"type":"string","value":"Meer weergeven"},
	"viewThread": {"type":"string","value":"Deze collectie weergeven"},
	"previousImage": {"type":"string","value":"Vorige afbeelding"},
	"nextImage": {"type":"string","value":"Volgende afbeelding"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Van "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5 sterren – "+e.appNumRatings+" beoordelingen"}
	},
	"verifiedAccount": {"type":"string","value":"Geverifieerde accounts"},
	"communityAdminBadge": {"type":"string","value":"Beh."},
	"communityModeratorBadge": {"type":"string","value":"Mod."},
	"communityMemberBadge": {"type":"string","value":"Lid"},
	"viewsLabel": {"type":"string","value":"weergaven"},
	"viewQuotes": {"type":"string","value":"Geciteerde posts bekijken"},
	"viewActivity": {"type":"string","value":"Activiteit bekijken"},
	"communityNotes": {"type":"string","value":"Community-opmerkingen"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Is deze opmerking nuttig?"},
	"communityNoteHelpful": {"type":"string","value":"nuttig"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"een beetje nuttig"},
	"communityNoteNotHelpful": {"type":"string","value":"niet nuttig"},
	"cashtagComingSoon": {"type":"string","value":"Binnenkort beschikbaar"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Nu voor "]}
	},
	"grokAnswerFun": {"type":"string","value":"Antwoord van Grok in de Funmodus"},
	"grokAnswer": {"type":"string","value":"Antwoord van Grok"},
	"grokImageBy": {"type":"string","value":"Afbeelding van Grok"},
	"grokShowMore": {"type":"string","value":"Meer weergeven"},
	"grokCreateVersion": {"type":"string","value":"Maak jouw versie met Grok"},
	"grokAskYourself": {"type":"string","value":"Vraag het zelf aan Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" webpagina"+i(e.count,"","''s")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" post"+i(e.count,"","s")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" webpagina's en posts"}
	},
	"mostRelevant": {"type":"string","value":"Relevant"},
	"mostLiked": {"type":"string","value":"Vind-ik-leuks"},
	"mostRecent": {"type":"string","value":"Recent"},
	"sortReplies": {"type":"string","value":"Antwoorden sorteren"},
	"lastEdited": {"type":"string","value":"Laatste bewerking"},
	"newPostVersion": {"type":"string","value":"Er is een nieuwe versie van deze post."},
	"opensEditHistory": {"type":"string","value":"Hierdoor wordt de bewerkingsgeschiedenis geopend"},
	"viewLatestPost": {"type":"string","value":"De nieuwste post bekijken"},
	"opensLatestPost": {"type":"string","value":"Hierdoor wordt de nieuwe versie van deze post geopend"},
	"mediaTaggedSelf": {"type":"string","value":"Jij"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Van "]}
	},
	"poll": {"type":"string","value":"Poll"},
	"viewPoll": {"type":"string","value":"Deze poll weergeven"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" stem"+r(e.count,"","men")}
	},
	"pollEnded": {"type":"string","value":"Eindresultaten"},
	"retweet": {"type":"string","value":"Retweeten"},
	"unDoRetweet": {"type":"string","value":"Retweet ongedaan maken"},
	"quoteTweet": {"type":"string","value":"Tweet citeren"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweets"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Antwoorden"},
	"profileTabTitleHighlights": {"type":"string","value":"Hoogtepunten"},
	"profileTabTitleMedia": {"type":"string","value":"Media"},
	"profileTabTitleLikes": {"type":"string","value":"Vind-ik-leuks"},
	"following": {"type":"string","value":"Volgend"},
	"follow": {"type":"string","value":"Volgen"},
	"followBack": {"type":"string","value":"Ook volgen"},
	"followers": {"type":"string","value":"Volgers"},
	"followsYou": {"type":"string","value":"Volgt jou"},
	"subscriptions": {"type":"string","value":"Abonnementen"},
	"unfollow": {"type":"string","value":"Ontvolg"},
	"blocked": {"type":"string","value":"Geblokkeerd"},
	"unblock": {"type":"string","value":"Deblokkeren"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Lid sinds "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Gevolgd door "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Gevolgd door "," en "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Gevolgd door ",", "," en "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Gevolgd door ",", "," en "," anderen die jij volgt"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Tweet"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Vind-ik-leuk"+r(props.count,"","s")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" foto''s en video''s"]}
	},
	"home": {"type":"string","value":"Startpagina"},
	"explore": {"type":"string","value":"Verkennen"},
	"notifications": {"type":"string","value":"Meldingen"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Volgen"+e.verb}
	},
	"chat": {"type":"string","value":"Chatten"},
	"messages": {"type":"string","value":"Berichten"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Bladwijzers"},
	"jobs": {"type":"string","value":"Banen"},
	"business": {"type":"string","value":"Zakelijk"},
	"communities": {"type":"string","value":"Community"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Geverifieerde Organisaties"},
	"profile": {"type":"string","value":"Mijn profiel"},
	"creatorStudio": {"type":"string","value":"Makersstudio"},
	"lists": {"type":"string","value":"Lijst"},
	"monetization": {"type":"string","value":"Geld verdienen"},
	"ads": {"type":"string","value":"Advertenties"},
	"createYourSpace": {"type":"string","value":"Je Space maken"},
	"settingsAndPrivacy": {"type":"string","value":"Instellingen en privacy"},
	"moreMenu": {"type":"string","value":"Meer"},
	"addAnExistingAccount": {"type":"string","value":"Een bestaand account toevoegen"},
	"manageAccounts": {"type":"string","value":"Accounts beheren"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Wisselen naar @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweeten"},
	"settings": {"type":"string","value":"Instellingen"},
	"now": {"type":"string","value":"Nu"},
	"day": {"type":"string","value":"Dag"},
	"month": {"type":"string","value":"Maand"},
	"year": {"type":"string","value":"Jaar"},
	"january": {"type":"string","value":"januari"},
	"february": {"type":"string","value":"februari"},
	"march": {"type":"string","value":"maart"},
	"april": {"type":"string","value":"april"},
	"may": {"type":"string","value":"mei"},
	"june": {"type":"string","value":"juni"},
	"july": {"type":"string","value":"juli"},
	"august": {"type":"string","value":"augustus"},
	"september": {"type":"string","value":"september"},
	"october": {"type":"string","value":"oktober"},
	"november": {"type":"string","value":"november"},
	"december": {"type":"string","value":"december"}
};

export default text;
