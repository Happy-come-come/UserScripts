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
	"replyAction": {"type":"string","value":"Freagair"},
	"repostAction": {"type":"string","value":"Repost"},
	"likeAction": {"type":"string","value":"Thaitin seo le"},
	"bookmarkAction": {"type":"string","value":"Leabharmharc"},
	"showMore": {"type":"string","value":"Taispeáin tuilleadh"},
	"viewThread": {"type":"string","value":"Taispeáin an snáithe seo"},
	"previousImage": {"type":"string","value":"An íomhá roimhe"},
	"nextImage": {"type":"string","value":"An chéad íomhá eile"},
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
	"communityAdminBadge": {"type":"string","value":"Riarachán"},
	"communityModeratorBadge": {"type":"string","value":"Modhnóir"},
	"communityMemberBadge": {"type":"string","value":"Ball"},
	"viewsLabel": {"type":"string","value":"views"},
	"viewQuotes": {"type":"string","value":"Féach ar shleachta"},
	"viewActivity": {"type":"string","value":"Féach ar ghníomhaíocht"},
	"communityNotes": undefined,
	"communityNoteHelpfulQuestion": {"type":"string","value":"An bhfuil an nóta seo úsáideach?"},
	"communityNoteHelpful": {"type":"string","value":"Cuidiúil"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Beagáinín Cuidiúil"},
	"communityNoteNotHelpful": {"type":"string","value":"Nach Raibh Cuidiúil"},
	"cashtagComingSoon": {"type":"string","value":"Ag teacht go luath"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Now at "]}
	},
	"grokAnswerFun": {"type":"string","value":"Answer by Grok in Fun Mode"},
	"grokAnswer": {"type":"string","value":"Answer by Grok"},
	"grokImageBy": {"type":"string","value":"Image by Grok"},
	"grokShowMore": {"type":"string","value":"Taispeáin tuilleadh"},
	"grokCreateVersion": {"type":"string","value":"Create your version with Grok"},
	"grokAskYourself": {"type":"string","value":"Ask Grok yourself"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web page"+c(e.count,"","s")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" post"+c(e.count,"","s")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web pages and posts"}
	},
	"mostRelevant": {"type":"string","value":"Ábhartha"},
	"mostLiked": {"type":"string","value":"Thaitin siad seo le"},
	"mostRecent": {"type":"string","value":"Le déanaí"},
	"sortReplies": {"type":"string","value":"Sort replies"},
	"lastEdited": {"type":"string","value":"Last edited"},
	"newPostVersion": {"type":"string","value":"There’s a new version of this post."},
	"opensEditHistory": {"type":"string","value":"Opens edit history"},
	"viewLatestPost": {"type":"string","value":"See the latest post"},
	"opensLatestPost": {"type":"string","value":"Opens the new version of this post"},
	"mediaTaggedSelf": {"type":"string","value":"Tusa"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Ó "]}
	},
	"poll": {"type":"string","value":"Vótáil"},
	"viewPoll": {"type":"string","value":"Taispeáin an phobalbhreith seo"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["count","formattedCount"],
		"value": function(e){return o(e.count,""+e.count,""+e.count,"1",""+e.count,""+e.count)+" vóta "+e.formattedCount}
	},
	"pollEnded": {"type":"string","value":"Torthaí deiridh"},
	"retweet": {"type":"string","value":"Repost"},
	"unDoRetweet": {"type":"string","value":"Undo repost"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"Á Leanúint"},
	"follow": {"type":"string","value":"Lean"},
	"followBack": {"type":"string","value":"Lean ar ais"},
	"followers": {"type":"string","value":"Leantóirí"},
	"followsYou": {"type":"string","value":"Tá an duine seo do do leanúint"},
	"subscriptions": {"type":"string","value":"Subscriptions"},
	"unfollow": {"type":"string","value":"Ná lean"},
	"blocked": {"type":"string","value":"Coiscthe"},
	"unblock": {"type":"string","value":"Díchoisc"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Cláraithe "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Á leanúint ag "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Á leanúint ag "," agus "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Á leanúint ag ",", "," agus "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Á leanúint ag ",", "," agus ag "," eile atá á leanúint agat"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" post"+c(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" "+o(props.count,""+props.count,""+props.count,"1",""+props.count,"2")+" Is maith liom"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" photos & videos"]}
	},
	"home": {"type":"string","value":"Baile"},
	"explore": {"type":"string","value":"Féach thart"},
	"notifications": {"type":"string","value":"Fógraí"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Follow"+e.verb}
	},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Teachtaireachtaí"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Leabharmharcanna"},
	"jobs": {"type":"string","value":"Jobs"},
	"business": {"type":"string","value":"Gnó"},
	"communities": {"type":"string","value":"Pobal"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"Mo Phróifíl"},
	"creatorStudio": {"type":"string","value":"Stiúideo Cruthaitheoir"},
	"lists": {"type":"string","value":"Liosta"},
	"monetization": {"type":"string","value":"Luach airgid a chur ar rud"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Create your Space"},
	"settingsAndPrivacy": {"type":"string","value":"Socruithe agus príobháideachas"},
	"moreMenu": {"type":"string","value":"Tuilleadh"},
	"addAnExistingAccount": {"type":"string","value":"Cuir cuntas atá ann leis"},
	"manageAccounts": {"type":"string","value":"Bainistigh cuntais"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Athraigh go @"+e.screenName}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"Socruithe"},
	"now": {"type":"string","value":"Anois"},
	"day": {"type":"string","value":"Lá"},
	"month": {"type":"string","value":"Mí"},
	"year": {"type":"string","value":"Bliain"},
	"january": {"type":"string","value":"Eanáir"},
	"february": {"type":"string","value":"Feabhra"},
	"march": {"type":"string","value":"Márta"},
	"april": {"type":"string","value":"Aibreán"},
	"may": {"type":"string","value":"Bealtaine"},
	"june": {"type":"string","value":"Meitheamh"},
	"july": {"type":"string","value":"Iúil"},
	"august": {"type":"string","value":"Lúnasa"},
	"september": {"type":"string","value":"Meán Fómhair"},
	"october": {"type":"string","value":"Deireadh Fómhair"},
	"november": {"type":"string","value":"Samhain"},
	"december": {"type":"string","value":"Nollaig"}
};

export default text;
