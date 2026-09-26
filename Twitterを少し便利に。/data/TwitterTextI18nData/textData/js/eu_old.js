const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"For you"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Following"+e.noun}
	},
	"pinnedListsModuleHeader": undefined,
	"tweetsRetweeted": undefined,
	"replyAction": {"type":"string","value":"Erantzun"},
	"repostAction": {"type":"string","value":"Repost"},
	"likeAction": {"type":"string","value":"Atsegin"},
	"bookmarkAction": {"type":"string","value":"Laster-marka"},
	"showMore": {"type":"string","value":"Gehiago erakutsi"},
	"viewThread": {"type":"string","value":"Erakutsi haria"},
	"previousImage": {"type":"string","value":"Aurreko irudia"},
	"nextImage": {"type":"string","value":"Hurrengo irudia"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["From "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5.0 stars – "+e.appNumRatings+" ratings"}
	},
	"verifiedAccount": {"type":"string","value":"Verified accounts"},
	"communityAdminBadge": {"type":"string","value":"Administratzailea"},
	"communityModeratorBadge": {"type":"string","value":"Moderatzailea"},
	"communityMemberBadge": {"type":"string","value":"Kidea"},
	"viewsLabel": {"type":"string","value":"views"},
	"viewQuotes": {"type":"string","value":"Ikusi aipamenak"},
	"viewActivity": {"type":"string","value":"Ikusi jarduerak"},
	"communityNotes": undefined,
	"communityNoteHelpfulQuestion": {"type":"string","value":"Lagungarria da ohar hau?"},
	"communityNoteHelpful": {"type":"string","value":"Lagungarri"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Nahiko lagungarri"},
	"communityNoteNotHelpful": {"type":"string","value":"Ez-lagungarri"},
	"cashtagComingSoon": {"type":"string","value":"Laister"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Now at "]}
	},
	"grokAnswerFun": {"type":"string","value":"Answer by Grok in Fun Mode"},
	"grokAnswer": {"type":"string","value":"Answer by Grok"},
	"grokImageBy": {"type":"string","value":"Image by Grok"},
	"grokShowMore": {"type":"string","value":"Gehiago erakutsi"},
	"grokCreateVersion": {"type":"string","value":"Create your version with Grok"},
	"grokAskYourself": {"type":"string","value":"Ask Grok yourself"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web page"+n(e.count,"","s")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" post"+n(e.count,"","s")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web pages and posts"}
	},
	"mostRelevant": {"type":"string","value":"Aipagarria"},
	"mostLiked": {"type":"string","value":"Atsegiteak"},
	"mostRecent": {"type":"string","value":"Azkenak"},
	"sortReplies": {"type":"string","value":"Sort replies"},
	"lastEdited": {"type":"string","value":"Last edited"},
	"newPostVersion": {"type":"string","value":"There’s a new version of this post."},
	"opensEditHistory": {"type":"string","value":"Opens edit history"},
	"viewLatestPost": {"type":"string","value":"See the latest post"},
	"opensLatestPost": {"type":"string","value":"Opens the new version of this post"},
	"mediaTaggedSelf": {"type":"string","value":"Zu"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Norena: "]}
	},
	"poll": {"type":"string","value":"Bozketa"},
	"viewPoll": {"type":"string","value":"Erakutsi bozketa hau"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["count","formattedCount"],
		"value": function(e){return""+r(e.count,"bozka "+e.formattedCount,e.formattedCount+" bozka")}
	},
	"pollEnded": {"type":"string","value":"Azken emaitzak"},
	"retweet": {"type":"string","value":"Bertxiotu"},
	"unDoRetweet": {"type":"string","value":"Desegin birtxiokatzea"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"Jarraitzen"},
	"follow": {"type":"string","value":"Jarraitu"},
	"followBack": {"type":"string","value":"Jarraitu berriro"},
	"followers": {"type":"string","value":"Jarraitzaileak"},
	"followsYou": {"type":"string","value":"Jarraitzen zaitu"},
	"subscriptions": {"type":"string","value":"Subscriptions"},
	"unfollow": {"type":"string","value":"Utzi jarraitzeari"},
	"blocked": {"type":"string","value":"Blokeatua"},
	"unblock": {"type":"string","value":"Desblokeatu"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Erregistratze-data: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," erabiltzaileak jarraitua"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," eta "," erabiltzaileek jarraitua"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["",", "," eta "," erabiltzaileek jarraitua"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," erabiltzaileak, "," erabiltzaileak eta zuk jarraitutako beste "," erabiltzailek jarraitua"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" txio"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" atsegite"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" photos & videos"]}
	},
	"home": {"type":"string","value":"Hasiera"},
	"explore": {"type":"string","value":"Arakatu"},
	"notifications": {"type":"string","value":"Jakinarazpenak"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Follow"+e.verb}
	},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Mezuak"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Laster-markak"},
	"jobs": {"type":"string","value":"Jobs"},
	"business": {"type":"string","value":"Enpresa"},
	"communities": {"type":"string","value":"Erkidegoa"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"Nire profila"},
	"creatorStudio": {"type":"string","value":"Creator Studio"},
	"lists": {"type":"string","value":"Zerrenda"},
	"monetization": {"type":"string","value":"Dirua irabaztea "},
	"ads": {"type":"string","value":"Iragarkiak"},
	"createYourSpace": {"type":"string","value":"Create your Space"},
	"settingsAndPrivacy": {"type":"string","value":"Ezarpenak eta pribatutasuna"},
	"moreMenu": {"type":"string","value":"Gehiago"},
	"addAnExistingAccount": {"type":"string","value":"Gehitu lehendik duzun beste kontu bat"},
	"manageAccounts": {"type":"string","value":"Kudeatu kontuak"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Aldatu @"+e.screenName+" erabiltzailera"}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"Ezarpenak"},
	"now": {"type":"string","value":"Orain"},
	"day": {"type":"string","value":"Eguna"},
	"month": {"type":"string","value":"Hilabetea"},
	"year": {"type":"string","value":"Urtea"},
	"january": {"type":"string","value":"Urtarrila"},
	"february": {"type":"string","value":"Otsaila"},
	"march": {"type":"string","value":"Martxoa"},
	"april": {"type":"string","value":"Apirila"},
	"may": {"type":"string","value":"Maiatza"},
	"june": {"type":"string","value":"Ekaina"},
	"july": {"type":"string","value":"Uztaila"},
	"august": {"type":"string","value":"Abuztua"},
	"september": {"type":"string","value":"Iraila"},
	"october": {"type":"string","value":"Urria"},
	"november": {"type":"string","value":"Azaroa"},
	"december": {"type":"string","value":"Abendua"}
};

export default text;
