const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"For you"+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Following"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Pinned"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s Retweeted"},
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"Undo Retweet"},
	"quoteTweet": {"type":"string","value":"Quote Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweets"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Replies"},
	"profileTabTitleHighlights": {"type":"string","value":"Highlights"},
	"profileTabTitleMedia": {"type":"string","value":"Media"},
	"profileTabTitleLikes": {"type":"string","value":"Likes"},
	"following": {"type":"string","value":"Following"},
	"unfollow": {"type":"string","value":"Unfollow"},
	"blocked": {"type":"string","value":"Blocked"},
	"unblock": {"type":"string","value":"Unblock"},
	"joinDateFrom": {
		"type": "function",
		"arguments": ["joinDate"],
		"value": function(e){return"Joined "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Followed by "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Followed by "," and "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Followed by ",", ",", and "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Followed by ",", ",", and "," others you follow"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"+n(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Like"+n(props.count,"","s")]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"Home"},
	"search": {"type":"string","value":"Explore"},
	"notifications": {"type":"string","value":"Notifications"},
	"messages": {"type":"string","value":"Messages"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"Bookmarks"},
	"jobs": {"type":"string","value":"Jobs"},
	"communities": {"type":"string","value":"Community"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"My Profile"},
	"lists": {"type":"string","value":"List"},
	"monetization": {"type":"string","value":"Monetisation"},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"Settings and privacy"},
	"addAnExistingAccount": {"type":"string","value":"Add an existing account"},
	"manageAccounts": {"type":"string","value":"Manage accounts"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(e){return"Switch to @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweet"},
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