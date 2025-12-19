const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"आपल्यासाठी "+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"फॉलो करत आहेत"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"पिन केलेल्या"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s पुन्हा पोस्ट केले गेले"},
	"retweet": {"type":"string","value":"पुन्हा पोस्ट करा"},
	"unDoRetweet": {"type":"string","value":"पुन्हा पोस्ट करणे रद्द करा"},
	"quoteTweet": {"type":"string","value":"कोट"},
	"profileTabTitleTimeline": {"type":"string","value":"पोस्ट"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"प्रत्युत्तरे"},
	"profileTabTitleHighlights": {"type":"string","value":"हायलाईट्स"},
	"profileTabTitleMedia": {"type":"string","value":"मीडिया"},
	"profileTabTitleLikes": {"type":"string","value":"पसंती"},
	"following": {"type":"string","value":"फॉलोइंग"},
	"unfollow": {"type":"string","value":"अनफॉलो करा"},
	"blocked": {"type":"string","value":"अवरोधित केले"},
	"unblock": {"type":"string","value":"अनब्लॉक करा"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"सहभागी: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," यांनी फॉलो केले"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," आणि "," यांनी फॉलो केले"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", ",", आणि "," यांनी फॉलो केले"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["आपण फॉलो करत असलेल्या ",", ",", आणि  अन्य "," जणांनी फॉलो केले"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" पोस्ट"+f(props.count,"","्स")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" पसंती"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" छायाचित्रे आणि व्हिडिओज"]}
	},
	"home": {"type":"string","value":"होम"},
	"explore": {"type":"string","value":"एक्सप्लोर करा"},
	"notifications": {"type":"string","value":"सूचनापत्रे"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"फॉलो करा"+e.verb}
	},
	"chat": {"type":"string","value":"चॅट"},
	"messages": {"type":"string","value":"संदेश"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"बुकमार्क्स"},
	"jobs": {"type":"string","value":"नोकऱ्या"},
	"business": {"type":"string","value":"व्यवसाय"},
	"communities": {"type":"string","value":"कम्युनिटी"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"सत्यापित संस्था"},
	"profile": {"type":"string","value":"माझा प्रोफाइल"},
	"lists": {"type":"string","value":"यादी"},
	"monetization": {"type":"string","value":"कमाई"},
	"ads": {"type":"string","value":"जाहिराती"},
	"createYourSpace": {"type":"string","value":"आपली स्पेस तयार करा"},
	"settingsAndPrivacy": {"type":"string","value":"सेटिंग्ज आणि गोपनीयता"},
	"moreMenu": {"type":"string","value":"अधिक"},
	"addAnExistingAccount": {"type":"string","value":"विद्यमान खाते समाविष्ट करा"},
	"manageAccounts": {"type":"string","value":"खाती व्यवस्थापित करा"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"@"+e.screenName+" वर स्विच करा"}
	},
	"postTweet": {"type":"string","value":"पोस्ट करा"},
	"settings": {"type":"string","value":"सेटिंग्ज"},
	"now": {"type":"string","value":"आता"},
	"day": {"type":"string","value":"दिवस"},
	"month": {"type":"string","value":"महिना"},
	"year": {"type":"string","value":"वर्ष"},
	"january": {"type":"string","value":"जानेवारी"},
	"february": {"type":"string","value":"फेब्रुवारी"},
	"march": {"type":"string","value":"मार्च"},
	"april": {"type":"string","value":"एप्रिल"},
	"may": {"type":"string","value":"मे"},
	"june": {"type":"string","value":"जून"},
	"july": {"type":"string","value":"जुलै"},
	"august": {"type":"string","value":"ऑगस्ट"},
	"september": {"type":"string","value":"सप्टेंबर"},
	"october": {"type":"string","value":"ऑक्टोबर"},
	"november": {"type":"string","value":"नोव्हेंबर"},
	"december": {"type":"string","value":"डिसेंबर"}
};

export default text;
