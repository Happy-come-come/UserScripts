const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"आपके लिए"+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"फ़ॉलोइंग"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"पिन की गई"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s ने रीट्वीट किया"},
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"रीट्वीट को पूर्ववत करें"},
	"quoteTweet": {"type":"string","value":"कोट ट्वीट"},
	"profileTabTitleTimeline": {"type":"string","value":"ट्वीट्स"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"जवाब"},
	"profileTabTitleHighlights": {"type":"string","value":"हाइलाइट्स"},
	"profileTabTitleMedia": {"type":"string","value":"मीडिया"},
	"profileTabTitleLikes": {"type":"string","value":"पसंद"},
	"following": {"type":"string","value":"फ़ॉलो कर रहे हैं"},
	"unfollow": {"type":"string","value":"अनफ़ॉलो करें"},
	"blocked": {"type":"string","value":"अवरोधित"},
	"unblock": {"type":"string","value":"अवरोध हटाएँ"},
	"joinDateFrom": {
		"type": "function",
		"arguments": ["joinDate"],
		"value": function(e){return e.joinDate+" में शामिल हुए"}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," फ़ॉलो करते हैं"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," और "," फ़ॉलो करते हैं"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," और "," फ़ॉलो करते हैं"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," और "," अन्य जिन्हें आप फ़ॉलो करते हैं, फ़ॉलो कर रहे हैं"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" ट्वीट"+n(props.count,"","्स")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" पसंद"+n(props.count,"‍","")]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"होम"},
	"search": {"type":"string","value":"देखें"},
	"notifications": {"type":"string","value":"सूचनाएं"},
	"messages": {"type":"string","value":"संदेश"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"बुकमार्क"},
	"jobs": {"type":"string","value":"जॉब"},
	"communities": {"type":"string","value":"कम्यूनिटी"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"सत्यापित संगठन"},
	"profile": {"type":"string","value":"मेरी प्रोफ़ाइल"},
	"lists": {"type":"string","value":"सूची"},
	"monetization": {"type":"string","value":"मुद्रीकरण"},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"सेटिंग्स और गोपनीयता"},
	"addAnExistingAccount": {"type":"string","value":"एक मौजूदा खाता जोड़ें"},
	"manageAccounts": {"type":"string","value":"खातों को प्रबंधित करें"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(e){return"@"+e.screenName+" पर स्विच करें"}
	},
	"postTweet": {"type":"string","value":"ट्वीट"},
	"settings": {"type":"string","value":"सेटिंग्स"},
	"now": {"type":"string","value":"अभी"},
	"day": {"type":"string","value":"दिन"},
	"month": {"type":"string","value":"महीना"},
	"year": {"type":"string","value":"साल"},
	"january": {"type":"string","value":"जनवरी"},
	"february": {"type":"string","value":"फरवरी"},
	"march": {"type":"string","value":"मार्च"},
	"april": {"type":"string","value":"अप्रैल"},
	"may": {"type":"string","value":"मई"},
	"june": {"type":"string","value":"जून"},
	"july": {"type":"string","value":"जुलाई"},
	"august": {"type":"string","value":"अगस्त"},
	"september": {"type":"string","value":"सितंबर"},
	"october": {"type":"string","value":"अक्टूबर"},
	"november": {"type":"string","value":"नवंबर"},
	"december": {"type":"string","value":"दिसंबर"}
};

export default text;