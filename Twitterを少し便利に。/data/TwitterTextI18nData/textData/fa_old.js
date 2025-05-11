const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"برای شما"+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"دنبال‌شده"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"‏سنجاق‌شده"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"‏%s بازتوییت کرد"},
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"لغو بازتوییت"},
	"quoteTweet": {"type":"string","value":"‏نقل‌توییت"},
	"profileTabTitleTimeline": {"type":"string","value":"‏توییت‌ها"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"‏پاسخ‌ها"},
	"profileTabTitleHighlights": {"type":"string","value":"‏موارد برتر"},
	"profileTabTitleMedia": {"type":"string","value":"‏رسانه تصویری"},
	"profileTabTitleLikes": {"type":"string","value":"‏پسند"},
	"following": {"type":"string","value":"دنبال‌شده"},
	"unfollow": {"type":"string","value":"دنبال نشود"},
	"blocked": {"type":"string","value":"مسدود شده‌"},
	"unblock": {"type":"string","value":"عدم انسداد"},
	"joinDateFrom": {
		"type": "function",
		"arguments": ["joinDate"],
		"value": function(e){return"تاریخ پیوستن "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["دنبال‌شده توسط "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["دنبال‌شده توسط "," و "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["دنبال‌شده توسط ","، ","، و "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["دنبال‌شده توسط ","، ","، و "," نفر دیگر که شما دنبال می‌کنید"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" تو"+n(props.count,"یی","يي")+"ت"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" پسند"]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"خانه"},
	"search": {"type":"string","value":"کاوش"},
	"notifications": {"type":"string","value":"آگاه‌سازی‌ها"},
	"messages": {"type":"string","value":"پیام‌ها"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"نشانک‌ها"},
	"jobs": {"type":"string","value":"شغل‌ها"},
	"communities": {"type":"string","value":"انجمن"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"سازمان‌های تأییدشده"},
	"profile": {"type":"string","value":"نمایه من"},
	"lists": {"type":"string","value":"فهرست"},
	"monetization": {"type":"string","value":"درآمدزایی"},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"تنظیمات و حریم خصوصی"},
	"addAnExistingAccount": {"type":"string","value":"افزودن حساب کاربری موجود"},
	"manageAccounts": {"type":"string","value":"مدیریت حساب‌ها"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(e){return"رفتن به @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"‏توییت"},
	"settings": {"type":"string","value":"تنظیمات"},
	"now": {"type":"string","value":"اکنون"},
	"day": {"type":"string","value":"روز"},
	"month": {"type":"string","value":"ماه"},
	"year": {"type":"string","value":"سال"},
	"january": {"type":"string","value":"ژانویه"},
	"february": {"type":"string","value":"فوریه"},
	"march": {"type":"string","value":"مارس"},
	"april": {"type":"string","value":"آوریل"},
	"may": {"type":"string","value":"مه"},
	"june": {"type":"string","value":"ژوئن"},
	"july": {"type":"string","value":"ژوئيه"},
	"august": {"type":"string","value":"اوت"},
	"september": {"type":"string","value":"سپتامبر"},
	"october": {"type":"string","value":"اکتبر"},
	"november": {"type":"string","value":"نوامبر"},
	"december": {"type":"string","value":"دسامبر"}
};

export default text;