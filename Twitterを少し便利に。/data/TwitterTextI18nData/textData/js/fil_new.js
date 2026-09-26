const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Para sa iyo"+a.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Fina-follow"+a.noun}
	},
	"pinnedListsModuleHeader": undefined,
	"tweetsRetweeted": undefined,
	"replyAction": {"type":"string","value":"Sumagot"},
	"repostAction": {"type":"string","value":"I-repost"},
	"likeAction": {"type":"string","value":"Gustuhin"},
	"bookmarkAction": {"type":"string","value":"Bookmark"},
	"showMore": {"type":"string","value":"Magpakita pa"},
	"viewThread": {"type":"string","value":"Ipakita ang thread na ito"},
	"previousImage": {"type":"string","value":"Nakaraang larawan"},
	"nextImage": {"type":"string","value":"Susunod na larawan"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Mula sa "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(a){return a.appStarRating+"/5.0 star – "+a.appNumRatings+" (na) rating"}
	},
	"verifiedAccount": {"type":"string","value":"Mga Beripikadong account"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod"},
	"communityMemberBadge": {"type":"string","value":"Miyembro"},
	"viewsLabel": {"type":"string","value":"(na) view"},
	"viewQuotes": {"type":"string","value":"Tingnan ang mga quote"},
	"viewActivity": {"type":"string","value":"Tingnan ang aktibidad"},
	"communityNotes": undefined,
	"communityNoteHelpfulQuestion": {"type":"string","value":"Kapaki-pakinabang ba ang note na ito?"},
	"communityNoteHelpful": {"type":"string","value":"Kapaki-pakinabang"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Medyo Kapaki-pakinabang"},
	"communityNoteNotHelpful": {"type":"string","value":"Hindi Kapaki-pakinabang"},
	"cashtagComingSoon": {"type":"string","value":"Malapit na"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Ngayon sa halagang "]}
	},
	"grokAnswerFun": {"type":"string","value":"Sinagot ng Grok sa Fun Mode"},
	"grokAnswer": {"type":"string","value":"Sinagot ng Grok "},
	"grokImageBy": {"type":"string","value":"Larawang ginawa ni Grok"},
	"grokShowMore": {"type":"string","value":"Magpakita pa"},
	"grokCreateVersion": {"type":"string","value":"Gumawa ng bersyon mo gamit ang Grok"},
	"grokAskYourself": {"type":"string","value":"Ikaw ang mismong magtanong sa Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" "+e(a.count,"","mga ")+"web page"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" "+e(a.count,"","(na) ")+"post"}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" (na) web page at post"}
	},
	"mostRelevant": {"type":"string","value":"Nauugnay"},
	"mostLiked": {"type":"string","value":"Mga Gusto"},
	"mostRecent": {"type":"string","value":"Kamakailan"},
	"sortReplies": {"type":"string","value":"I-sort ang mga reply"},
	"lastEdited": {"type":"string","value":"Huling na-edit"},
	"newPostVersion": {"type":"string","value":"May bagong bersyon ng post na ito."},
	"opensEditHistory": {"type":"string","value":"Binubuksan ang history ng pag-edit"},
	"viewLatestPost": {"type":"string","value":"Tingnan ang pinakabagong post"},
	"opensLatestPost": {"type":"string","value":"Binubuksan ang bagong bersyon ng post na ito"},
	"mediaTaggedSelf": {"type":"string","value":"Ikaw"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Mula kay "]}
	},
	"poll": {"type":"string","value":"Poll"},
	"viewPoll": {"type":"string","value":"Ipakita ang poll na ito"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(a){return a.formattedCount+" "+e(a.count,"","(na) ")+"boto"}
	},
	"pollEnded": {"type":"string","value":"Pinal na mga resulta"},
	"retweet": {"type":"string","value":"I-repost"},
	"unDoRetweet": {"type":"string","value":"I-undo ang repost"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"Sinusundan"},
	"follow": {"type":"string","value":"Sundan"},
	"followBack": {"type":"string","value":"Sundan din"},
	"followers": {"type":"string","value":"Mga Tagasunod"},
	"followsYou": {"type":"string","value":"Sinusundan ka"},
	"subscriptions": {"type":"string","value":"Subscriptions"},
	"unfollow": {"type":"string","value":"I-unfollow"},
	"blocked": {"type":"string","value":"Na-block"},
	"unblock": {"type":"string","value":"I-unblock"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(a){return"Sumali noong "+a.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Sinusundan ni "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Sinusundan nina "," at "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Sinusundan nina ",", ",", at "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Sinusundan nina ",", ",", at ng "," pang sinusundan mo"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" "+e(props.count,"","(na) ")+"post"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" "+e(props.count,"","Mga ")+"Like"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" "+e(props.count,"","(na) ")+"larawan at video"]}
	},
	"home": {"type":"string","value":"Home"},
	"explore": {"type":"string","value":"Mag-explore"},
	"notifications": {"type":"string","value":"Mga Abiso"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(a){return"I-follow"+a.verb}
	},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Mga Message"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Mga Bookmark"},
	"jobs": {"type":"string","value":"Mga Trabaho"},
	"business": {"type":"string","value":"Negosyo"},
	"communities": {"type":"string","value":"Komunidad"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Mga Beripikadong Org"},
	"profile": {"type":"string","value":"Ang Aking Profile"},
	"creatorStudio": {"type":"string","value":"Creator Studio"},
	"lists": {"type":"string","value":"Listahan"},
	"monetization": {"type":"string","value":"Monetization"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Gumawa ng Space mo"},
	"settingsAndPrivacy": {"type":"string","value":"Mga setting at pagkapribado"},
	"moreMenu": {"type":"string","value":"Higit pa"},
	"addAnExistingAccount": {"type":"string","value":"Magdagdag ng kasalukuyang account"},
	"manageAccounts": {"type":"string","value":"Pamahalaan ang mga account"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(a){return"Lumipat kay @"+a.screenName}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"Mga Setting"},
	"now": {"type":"string","value":"Ngayon"},
	"day": {"type":"string","value":"Araw"},
	"month": {"type":"string","value":"Buwan"},
	"year": {"type":"string","value":"Taon"},
	"january": {"type":"string","value":"Enero"},
	"february": {"type":"string","value":"Pebrero"},
	"march": {"type":"string","value":"Marso"},
	"april": {"type":"string","value":"Abril"},
	"may": {"type":"string","value":"Mayo"},
	"june": {"type":"string","value":"Hunyo"},
	"july": {"type":"string","value":"Hulyo"},
	"august": {"type":"string","value":"Agosto"},
	"september": {"type":"string","value":"Setyembre"},
	"october": {"type":"string","value":"Oktubre"},
	"november": {"type":"string","value":"Nobyembre"},
	"december": {"type":"string","value":"Disyembre"}
};

export default text;
