const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"آپ کے لیے"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"فالو کر رہا ہے"+e.noun}
	},
	"pinnedListsModuleHeader": undefined,
	"tweetsRetweeted": undefined,
	"retweet": {"type":"string","value":"Repost"},
	"unDoRetweet": {"type":"string","value":"Undo repost"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"فالو کر رہے ہیں"},
	"unfollow": {"type":"string","value":"ان فالو کریں"},
	"blocked": {"type":"string","value":"بلاک شدہ"},
	"unblock": {"type":"string","value":"ان بلاک کریں"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return e.joinDate+" میں شامل ہوئے"}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," کے ذریعہ فالو کردہ"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," اور "," کی جانب سے فالو کردہ"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["","، ","، اور "," کی جانب سے فالو کردہ"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["","، ","، اور "," دیگر جنہیں آپ فالو کرتے ہیں کی جانب سے فالو کردہ"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" post"+r(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" لائک"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" photos & videos"]}
	},
	"home": {"type":"string","value":"ہوم"},
	"explore": {"type":"string","value":"دریافت کریں"},
	"notifications": {"type":"string","value":"اطلاعات"},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"پیغامات"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"بُک مارکس"},
	"jobs": {"type":"string","value":"Jobs"},
	"communities": {"type":"string","value":"کمیونٹی"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"میری پروفائل"},
	"lists": {"type":"string","value":"فہرست"},
	"monetization": {"type":"string","value":"پیسہ کمانا"},
	"ads": {"type":"string","value":"اشتہارات"},
	"createYourSpace": {"type":"string","value":"Create your Space"},
	"settingsAndPrivacy": {"type":"string","value":"ترتیبات اور رازداری"},
	"moreMenu": {"type":"string","value":"مزید"},
	"addAnExistingAccount": {"type":"string","value":"ایک موجودہ اکاؤنٹ شامل کریں"},
	"manageAccounts": {"type":"string","value":"اکاؤنٹس کا نظم کریں"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"@"+e.screenName+" پر سوئچ کریں"}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"سیٹنگز"},
	"now": {"type":"string","value":"اب"},
	"day": {"type":"string","value":"دن"},
	"month": {"type":"string","value":"مہینہ"},
	"year": {"type":"string","value":"سال"},
	"january": {"type":"string","value":"جنوری"},
	"february": {"type":"string","value":"فروری"},
	"march": {"type":"string","value":"مارچ"},
	"april": {"type":"string","value":"اپریل"},
	"may": {"type":"string","value":"مئی"},
	"june": {"type":"string","value":"جون"},
	"july": {"type":"string","value":"جولائی"},
	"august": {"type":"string","value":"اگست"},
	"september": {"type":"string","value":"ستمبر"},
	"october": {"type":"string","value":"اکتوبر"},
	"november": {"type":"string","value":"نومبر"},
	"december": {"type":"string","value":"دسمبر"}
};

export default text;