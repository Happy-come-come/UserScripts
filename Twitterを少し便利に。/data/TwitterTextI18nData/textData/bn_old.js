const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"আপনার জন্য "+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return e.noun+" করছেন"}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"পিন করা হয়েছে"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s দ্বারা পুনঃ টুইটকৃত"},
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"পুনঃ টুইট পুর্বাবস্থায় ফেরান"},
	"quoteTweet": {"type":"string","value":"টুইট উদ্ধৃত করুন"},
	"profileTabTitleTimeline": {"type":"string","value":"টুইট"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"উত্তর"},
	"profileTabTitleHighlights": {"type":"string","value":"হাইলাইট"},
	"profileTabTitleMedia": {"type":"string","value":"মিডিয়া"},
	"profileTabTitleLikes": {"type":"string","value":"পছন্দ"},
	"following": {"type":"string","value":"অনুসরণ করছেন"},
	"unfollow": {"type":"string","value":"অনুসরণ বাতিল করুন"},
	"blocked": {"type":"string","value":"অবরুদ্ধ"},
	"unblock": {"type":"string","value":"অবরোধ মুক্ত করুন"},
	"joinDateFrom": {
		"type": "function",
		"arguments": ["joinDate"],
		"value": function(e){return e.joinDate+"-এ যোগদান করেছেন"}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," অনুসরণ করছেন"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," এবং "," অনুসরণ করছেন"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", ",", এবং ","  অনুসরণ করছেন"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["আপনার অনুসরণ করা ",", ",", এবং অন্য "," জন অনুসরণ করেছেন"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" টুইট"+n(props.count,"","গুলো")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" পছন্দ"+n(props.count," করুন","গুলো")]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"হোম"},
	"search": {"type":"string","value":"এক্সপ্লোর করুন"},
	"notifications": {"type":"string","value":"বিজ্ঞপ্তি"},
	"messages": {"type":"string","value":"বার্তাগুলি"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"বুকমার্কগুলি"},
	"jobs": {"type":"string","value":"কাজ"},
	"communities": {"type":"string","value":"কমিউনিটি"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"যাচাইকৃত প্রতিষ্ঠান"},
	"profile": {"type":"string","value":"আমার প্রোফাইল"},
	"lists": {"type":"string","value":"সূচী"},
	"monetization": {"type":"string","value":"নগদীকরণ"},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"সেটিংস ও গোপনীয়তা"},
	"addAnExistingAccount": {"type":"string","value":"একটি বিদ্যমান অ্যাকাউন্ট যোগ করুন"},
	"manageAccounts": {"type":"string","value":"অ্যাকাউন্ট পরিচালনা করুন"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(e){return"@"+e.screenName+"-তে পাল্টান"}
	},
	"postTweet": {"type":"string","value":"ট্যুইট"},
	"settings": {"type":"string","value":"সেটিংস"},
	"now": {"type":"string","value":"এখনই"},
	"day": {"type":"string","value":"দিন"},
	"month": {"type":"string","value":"মাস"},
	"year": {"type":"string","value":"বছর"},
	"january": {"type":"string","value":"জানুয়ারি"},
	"february": {"type":"string","value":"ফেব্রুয়ারী"},
	"march": {"type":"string","value":"মার্চ"},
	"april": {"type":"string","value":"এপ্রিল"},
	"may": {"type":"string","value":"মে"},
	"june": {"type":"string","value":"জুন"},
	"july": {"type":"string","value":"জুলাই"},
	"august": {"type":"string","value":"আগস্ট"},
	"september": {"type":"string","value":"সেপ্টেম্বর"},
	"october": {"type":"string","value":"অক্টোবর"},
	"november": {"type":"string","value":"নভেম্বর"},
	"december": {"type":"string","value":"ডিসেম্বর"}
};

export default text;