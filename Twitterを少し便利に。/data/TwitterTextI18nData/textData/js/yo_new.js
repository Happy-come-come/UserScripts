const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Fún ọ"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Ń tẹ̀lé"+e.noun}
	},
	"pinnedListsModuleHeader": undefined,
	"tweetsRetweeted": undefined,
	"replyAction": {"type":"string","value":"Fúnlésì"},
	"repostAction": {"type":"string","value":"Repost"},
	"likeAction": {"type":"string","value":"Fẹ́rán"},
	"bookmarkAction": {"type":"string","value":"Búkúmáàkì"},
	"showMore": {"type":"string","value":"Fihàn sii"},
	"viewThread": {"type":"string","value":"Ṣàfihàn tírẹ́ẹ̀dì yìí"},
	"previousImage": {"type":"string","value":"Àwòran ti tẹ́lẹ̀"},
	"nextImage": {"type":"string","value":"Àwọ̀ran tó kàn"},
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
	"communityAdminBadge": {"type":"string","value":"Olú"},
	"communityModeratorBadge": {"type":"string","value":"Apẹ̀tù"},
	"communityMemberBadge": {"type":"string","value":"Omọ-ẹgbẹ́"},
	"viewsLabel": {"type":"string","value":"views"},
	"viewQuotes": {"type":"string","value":"View quotes"},
	"viewActivity": {"type":"string","value":"View activity"},
	"communityNotes": undefined,
	"communityNoteHelpfulQuestion": {"type":"string","value":"Ǹjẹ́ àkọsílẹ̀ yí ṣe ìrànlọ́wọ́?"},
	"communityNoteHelpful": {"type":"string","value":"Ranni Lọ́wọ́"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Sá Ranni Lọ́wọ́"},
	"communityNoteNotHelpful": {"type":"string","value":"Kò Rannilọ́wọ́"},
	"cashtagComingSoon": {"type":"string","value":"Ó ń bọ̀ láìpẹ́"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Now at "]}
	},
	"grokAnswerFun": {"type":"string","value":"Answer by Grok in Fun Mode"},
	"grokAnswer": {"type":"string","value":"Answer by Grok"},
	"grokImageBy": {"type":"string","value":"Image by Grok"},
	"grokShowMore": {"type":"string","value":"Fihàn sii"},
	"grokCreateVersion": {"type":"string","value":"Create your version with Grok"},
	"grokAskYourself": {"type":"string","value":"Ask Grok yourself"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web page"+i(e.count,"","s")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" post"+i(e.count,"","s")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web pages and posts"}
	},
	"mostRelevant": {"type":"string","value":"Relevant"},
	"mostLiked": {"type":"string","value":"Àwọn ìfẹ́ràn"},
	"mostRecent": {"type":"string","value":"Àìpẹ́"},
	"sortReplies": {"type":"string","value":"Sort replies"},
	"lastEdited": {"type":"string","value":"Àtúnṣe kẹyìn"},
	"newPostVersion": {"type":"string","value":"There’s a new version of this post."},
	"opensEditHistory": {"type":"string","value":"Ó ń ṣí ṣàtúnṣe ìtàn"},
	"viewLatestPost": {"type":"string","value":"See the latest post"},
	"opensLatestPost": {"type":"string","value":"Opens the new version of this post"},
	"mediaTaggedSelf": {"type":"string","value":"Ìwọ"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["From "]}
	},
	"poll": {"type":"string","value":"Ìwádìí"},
	"viewPoll": {"type":"string","value":"Show this poll"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount"],
		"value": function(e){return"Àwọn ìbò "+e.formattedCount}
	},
	"pollEnded": {"type":"string","value":"Àwọn àbájáde ìkẹyìn"},
	"retweet": {"type":"string","value":"Repost"},
	"unDoRetweet": {"type":"string","value":"Undo repost"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"Ń tẹ̀lé"},
	"follow": {"type":"string","value":"Tẹ̀lé"},
	"followBack": {"type":"string","value":"Follow back"},
	"followers": {"type":"string","value":"Àwọn Olùtẹ̀lé"},
	"followsYou": {"type":"string","value":"Ń tẹ̀lé ọ"},
	"subscriptions": {"type":"string","value":"Àwọn Ìforúkọsílẹ̀"},
	"unfollow": {"type":"string","value":"Má tẹ̀lé mọ́"},
	"blocked": {"type":"string","value":"Ti Dínà"},
	"unblock": {"type":"string","value":"Yọ ìdínà kúro"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Darapọ̀ "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Followed by "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Followed by "," and "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Followed by ",", ",", and "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Followed by ",", ",", and "," others you follow"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" post"+i(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Àwọn ìfẹ́ràn"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" photos & videos"]}
	},
	"home": {"type":"string","value":"Ilé"},
	"explore": {"type":"string","value":"Ìwádìí"},
	"notifications": {"type":"string","value":"Àwọn ìfitónilétí"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Follow"+e.verb}
	},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Àwọn ìfiránṣẹ́"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Àwọn Búkúmáàkì"},
	"jobs": {"type":"string","value":"Jobs"},
	"business": {"type":"string","value":"Òwò"},
	"communities": {"type":"string","value":"Àwùjọ"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"My Profile"},
	"creatorStudio": {"type":"string","value":"Sítúdíò Olùṣẹ̀dà"},
	"lists": {"type":"string","value":"Àtòkọ"},
	"monetization": {"type":"string","value":"Fifipawó"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Create your Space"},
	"settingsAndPrivacy": {"type":"string","value":"Àwọn ààtò àti ìpamọ́"},
	"moreMenu": {"type":"string","value":"Síwájú síi"},
	"addAnExistingAccount": {"type":"string","value":"Fi àkántì tó ti wà tẹ́lẹ̀ kún u"},
	"manageAccounts": {"type":"string","value":"Ṣàkóso àwọn àkántì"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Yí sí @"+e.screenName}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"Àwọn ààtò"},
	"now": {"type":"string","value":"Nísinyí "},
	"day": {"type":"string","value":"Ọjọ"},
	"month": {"type":"string","value":"Oṣù"},
	"year": {"type":"string","value":"Ọdún"},
	"january": {"type":"string","value":"Oṣù Ṣẹẹrẹ"},
	"february": {"type":"string","value":"Oṣù Èrèlé"},
	"march": {"type":"string","value":"Oṣù Ẹrẹ́nà"},
	"april": {"type":"string","value":"Oṣù Igbe"},
	"may": {"type":"string","value":"Oṣù Èbìbí"},
	"june": {"type":"string","value":"Oṣù Okúdù"},
	"july": {"type":"string","value":"Oṣù Agẹmọ"},
	"august": {"type":"string","value":"Oṣù Ògún"},
	"september": {"type":"string","value":"Oṣù Ọwẹ́wẹ̀"},
	"october": {"type":"string","value":"Oṣù Ọ̀wàrà"},
	"november": {"type":"string","value":"Oṣù Bélú"},
	"december": {"type":"string","value":"Oṣù Ọpẹ́"}
};

export default text;
