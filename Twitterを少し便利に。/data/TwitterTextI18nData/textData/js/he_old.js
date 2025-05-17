const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"עבורך"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"עוקב"+e.noun}
	},
	"pinnedListsModuleHeader": undefined,
	"tweetsRetweeted": undefined,
	"retweet": {"type":"string","value":"צייץ מחדש"},
	"unDoRetweet": {"type":"string","value":"ביטול ציוץ מחדש"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"עוקב"},
	"unfollow": {"type":"string","value":"הפסק לעקוב"},
	"blocked": {"type":"string","value":"חסום"},
	"unblock": {"type":"string","value":"שחרר חסימה"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"הצטרף ב-"+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["ברשימת המעקב של "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["ברשימת המעקב של "," ושל "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["ברשימת המעקב של ","‏, "," ו-"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["ברשימת המעקב של ",",‏ "," ו-"," אחרים שאחריהם אתה עוקב"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" ציו"+n(props.count,"צים","ץ","צים","צים")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" אוהב"+n(props.count,"","ים","","")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" תמונות וסרטונים"]}
	},
	"home": {"type":"string","value":"דף הבית"},
	"explore": {"type":"string","value":"גילוי"},
	"notifications": {"type":"string","value":"הודעות"},
	"messages": {"type":"string","value":"מסרים"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"סימניות"},
	"jobs": {"type":"string","value":"משרות"},
	"communities": {"type":"string","value":"קהילה"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"ארגונים מאומתים"},
	"profile": {"type":"string","value":"הפרופיל שלי"},
	"lists": {"type":"string","value":"רשימה"},
	"monetization": {"type":"string","value":"הפקת רווח"},
	"ads": {"type":"string","value":"מודעות"},
	"createYourSpace": {"type":"string","value":"צור מקום משלך"},
	"settingsAndPrivacy": {"type":"string","value":"הגדרות ופרטיות"},
	"moreMenu": {"type":"string","value":"עוד"},
	"addAnExistingAccount": {"type":"string","value":"הוסף חשבון קיים"},
	"manageAccounts": {"type":"string","value":"נהל חשבונות"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"עבור אל ‎@"+e.screenName+"‎"}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"הגדרות"},
	"now": {"type":"string","value":"עכשיו"},
	"day": {"type":"string","value":"יום"},
	"month": {"type":"string","value":"חודש"},
	"year": {"type":"string","value":"שנה"},
	"january": {"type":"string","value":"ינואר"},
	"february": {"type":"string","value":"פברואר"},
	"march": {"type":"string","value":"מרץ"},
	"april": {"type":"string","value":"אפריל"},
	"may": {"type":"string","value":"מאי"},
	"june": {"type":"string","value":"יוני"},
	"july": {"type":"string","value":"יולי"},
	"august": {"type":"string","value":"אוגוסט"},
	"september": {"type":"string","value":"ספטמבר"},
	"october": {"type":"string","value":"אוקטובר"},
	"november": {"type":"string","value":"נובמבר"},
	"december": {"type":"string","value":"דצמבר"}
};

export default text;