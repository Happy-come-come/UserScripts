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
	"pinnedListsModuleHeader": {"type":"string","value":"Pinned"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s reposted"},
	"replyAction": {"type":"string","value":"Reply"},
	"repostAction": {"type":"string","value":"Repost"},
	"likeAction": {"type":"string","value":"Like"},
	"bookmarkAction": {"type":"string","value":"Bookmark"},
	"showMore": {"type":"string","value":"Show more"},
	"viewThread": {"type":"string","value":"Show this thread"},
	"previousImage": {"type":"string","value":"Previous image"},
	"nextImage": {"type":"string","value":"Next image"},
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
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod"},
	"communityMemberBadge": {"type":"string","value":"Member"},
	"viewsLabel": {"type":"string","value":"views"},
	"viewQuotes": {"type":"string","value":"View quotes"},
	"viewActivity": {"type":"string","value":"View activity"},
	"communityNotes": {"type":"string","value":"Community Notes"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Is this note helpful?"},
	"communityNoteHelpful": {"type":"string","value":"Helpful"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Somewhat Helpful"},
	"communityNoteNotHelpful": {"type":"string","value":"Not Helpful"},
	"cashtagComingSoon": {"type":"string","value":"Coming soon"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Now at "]}
	},
	"grokAnswerFun": {"type":"string","value":"Answer by Grok in Fun Mode"},
	"grokAnswer": {"type":"string","value":"Answer by Grok"},
	"grokImageBy": {"type":"string","value":"Image by Grok"},
	"grokShowMore": {"type":"string","value":"Show more"},
	"grokCreateVersion": {"type":"string","value":"Create your version with Grok"},
	"grokAskYourself": {"type":"string","value":"Ask Grok yourself"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web page"+r(e.count,"","s")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" post"+r(e.count,"","s")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web pages and posts"}
	},
	"mostRelevant": {"type":"string","value":"Relevant"},
	"mostLiked": {"type":"string","value":"Likes"},
	"mostRecent": {"type":"string","value":"Recent"},
	"sortReplies": {"type":"string","value":"Sort replies"},
	"lastEdited": {"type":"string","value":"Last edited"},
	"newPostVersion": {"type":"string","value":"There’s a new version of this post."},
	"opensEditHistory": {"type":"string","value":"Opens edit history"},
	"viewLatestPost": {"type":"string","value":"See the latest post"},
	"opensLatestPost": {"type":"string","value":"Opens the new version of this post"},
	"mediaTaggedSelf": {"type":"string","value":"You"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["From "]}
	},
	"poll": {"type":"string","value":"Poll"},
	"viewPoll": {"type":"string","value":"Show this poll"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" vote"+r(e.count,"","s")}
	},
	"pollEnded": {"type":"string","value":"Final results"},
	"retweet": {"type":"string","value":"Repost"},
	"unDoRetweet": {"type":"string","value":"Undo repost"},
	"quoteTweet": {"type":"string","value":"Quote"},
	"profileTabTitleTimeline": {"type":"string","value":"Posts"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Replies"},
	"profileTabTitleHighlights": {"type":"string","value":"Highlights"},
	"profileTabTitleMedia": {"type":"string","value":"Media"},
	"profileTabTitleLikes": {"type":"string","value":"Likes"},
	"following": {"type":"string","value":"Following"},
	"follow": {"type":"string","value":"Follow"},
	"followBack": {"type":"string","value":"Follow back"},
	"followers": {"type":"string","value":"Followers"},
	"followsYou": {"type":"string","value":"Follows you"},
	"subscriptions": {"type":"string","value":"Subscriptions"},
	"unfollow": {"type":"string","value":"Unfollow"},
	"blocked": {"type":"string","value":"Blocked"},
	"unblock": {"type":"string","value":"Unblock"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Joined "+e.joinDate}
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
		"value": function(){return [props.formattedCount+" post"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Like"+r(props.count,"","s")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" photos & videos"]}
	},
	"home": {"type":"string","value":"Home"},
	"explore": {"type":"string","value":"Explore"},
	"notifications": {"type":"string","value":"Notifications"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Follow"+e.verb}
	},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Messages"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Bookmarks"},
	"jobs": {"type":"string","value":"Jobs"},
	"business": {"type":"string","value":"Business"},
	"communities": {"type":"string","value":"Community"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"My Profile"},
	"creatorStudio": {"type":"string","value":"Creator Studio"},
	"lists": {"type":"string","value":"List"},
	"monetization": {"type":"string","value":"Monetisation"},
	"ads": {"type":"string","value":"Ads"},
	"createYourSpace": {"type":"string","value":"Create your Space"},
	"settingsAndPrivacy": {"type":"string","value":"Settings and privacy"},
	"moreMenu": {"type":"string","value":"More"},
	"addAnExistingAccount": {"type":"string","value":"Add an existing account"},
	"manageAccounts": {"type":"string","value":"Manage accounts"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Switch to @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Post"},
	"settings": {"type":"string","value":"Settings"},
	"now": {"type":"string","value":"Now"},
	"day": {"type":"string","value":"Day"},
	"month": {"type":"string","value":"Month"},
	"year": {"type":"string","value":"Year"},
	"january": {"type":"string","value":"January"},
	"february": {"type":"string","value":"February"},
	"march": {"type":"string","value":"March"},
	"april": {"type":"string","value":"April"},
	"may": {"type":"string","value":"May"},
	"june": {"type":"string","value":"June"},
	"july": {"type":"string","value":"July"},
	"august": {"type":"string","value":"August"},
	"september": {"type":"string","value":"September"},
	"october": {"type":"string","value":"October"},
	"november": {"type":"string","value":"November"},
	"december": {"type":"string","value":"December"}
};

export default text;
