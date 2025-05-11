const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"ನಿಮಗಾಗಿ"+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"ಹಿಂಬಾಲಿಸುವುದು"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"ಪಿನ್ ಮಾಡಲಾಗಿರುವುದು"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s ಅವರು ಮರುಪೋಸ್ಟ್ ಮಾಡಿದ್ದಾರೆ"},
	"retweet": {"type":"string","value":"ಮರುಪೋಸ್ಟ್ ಮಾಡಿ"},
	"unDoRetweet": {"type":"string","value":"ಮರುಪೋಸ್ಟ್ ಅನ್ನು ರದ್ದುಗೊಳಿಸಿ"},
	"quoteTweet": {"type":"string","value":"ಉಲ್ಲೇಖ"},
	"profileTabTitleTimeline": {"type":"string","value":"ಪೋಸ್ಟ್‌ಗಳು"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"ಪ್ರತಿಕ್ರಿಯೆಗಳು"},
	"profileTabTitleHighlights": {"type":"string","value":"ಹೈಲೈಟ್‌ಗಳು"},
	"profileTabTitleMedia": {"type":"string","value":"ಮಾಧ್ಯಮ"},
	"profileTabTitleLikes": {"type":"string","value":"ಇಷ್ಟಗಳು"},
	"following": {"type":"string","value":"ಹಿಂಬಾಲಿಸಲಾಗುತ್ತಿದೆ"},
	"unfollow": {"type":"string","value":"ಹಿ೦ಬಾಲಿಸದಿರು"},
	"blocked": {"type":"string","value":"ತಡೆಹಿಡಿಯಲಾಗಿದೆ"},
	"unblock": {"type":"string","value":"ತಡೆತೆರವು"},
	"joinDateFrom": {
		"type": "function",
		"arguments": ["joinDate"],
		"value": function(e){return"ಸೇರಿದ ದಿನಾಂಕ "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," ಅವರು ಹಿಂಬಾಲಿಸುತ್ತಿದ್ದಾರೆ"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," ಮತ್ತು "," ಅವರು ಹಿಂಬಾಲಿಸುತ್ತಿದ್ದಾರೆ"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", ",", ಮತ್ತು "," ಅವರು ಹಿಂಬಾಲಿಸಿದ್ದಾರೆ"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", ",", ಮತ್ತು ನೀವು ಹಿಂಬಾಲಿಸುತ್ತಿರುವ "," ಇತರ ಜನರು ಹಿಂಬಾಲಿಸುತ್ತಿದ್ದಾರೆ"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" ಪೋಸ್ಟ್"+f(props.count,"","‌ಗಳು")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" ಇಷ್ಟ"+f(props.count,"","ಗಳು")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" ಫೋಟೋಗಳು ಮತ್ತು ವೀಡಿಯೋಗಳು"+f(props.count,';/"',"")]}
	},
	"home": {"type":"string","value":"ಹೋಮ್"},
	"search": {"type":"string","value":"ಅನ್ವೇಷಿಸಿ"},
	"notifications": {"type":"string","value":"ಸೂಚನೆಗಳು"},
	"messages": {"type":"string","value":"ಸಂದೇಶಗಳು"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"ಬುಕ್‌ಮಾರ್ಕ್‌ಗಳು"},
	"jobs": {"type":"string","value":"ಉದ್ಯೋಗಗಳು"},
	"communities": {"type":"string","value":"ಸಮುದಾಯ"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"ಪರಿಶೀಲಿಸಿದ ಸಂಸ್ಥೆಗಳು"},
	"profile": {"type":"string","value":"ನನ್ನ ಪ್ರೊಫೈಲ್"},
	"lists": {"type":"string","value":"ಪಟ್ಟಿ"},
	"monetization": {"type":"string","value":"ಮಾನಿಟೈಸೇಶನ್"},
	"ads": {"type":"string","value":"ಜಾಹೀರಾತುಗಳು"},
	"createYourSpace": {"type":"string","value":"ನಿಮ್ಮ ಸ್ಪೇಸ್ ರಚಿಸಿ"},
	"settingsAndPrivacy": {"type":"string","value":"ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಮತ್ತು ಗೌಪ್ಯತೆ"},
	"addAnExistingAccount": {"type":"string","value":"ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಖಾತೆಯನ್ನು ಸೇರಿಸಿ"},
	"manageAccounts": {"type":"string","value":"ಖಾತೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(e){return"@"+e.screenName+"ಗೆ ಬದಲಾಯಿಸಿ"}
	},
	"postTweet": {"type":"string","value":"ಪೋಸ್ಟ್"},
	"settings": {"type":"string","value":"ಸಂಯೋಜನೆಗಳು"},
	"now": {"type":"string","value":"ಇದೀಗ"},
	"day": {"type":"string","value":"ದಿನ"},
	"month": {"type":"string","value":"ತಿಂಗಳು"},
	"year": {"type":"string","value":"ವರ್ಷ"},
	"january": {"type":"string","value":"ಜನವರಿ"},
	"february": {"type":"string","value":"ಫೆಬ್ರವರಿ"},
	"march": {"type":"string","value":"ಮಾರ್ಚ್"},
	"april": {"type":"string","value":"ಏಪ್ರಿಲ್"},
	"may": {"type":"string","value":"ಮೇ"},
	"june": {"type":"string","value":"ಜೂನ್"},
	"july": {"type":"string","value":"ಜುಲೈ"},
	"august": {"type":"string","value":"ಆಗಸ್ಟ್"},
	"september": {"type":"string","value":"ಸೆಪ್ಟೆಂಬರ್"},
	"october": {"type":"string","value":"ಅಕ್ಟೋಬರ್"},
	"november": {"type":"string","value":"ನವೆಂಬರ್"},
	"december": {"type":"string","value":"ಡಿಸೆಂಬರ್"}
};

export default text;