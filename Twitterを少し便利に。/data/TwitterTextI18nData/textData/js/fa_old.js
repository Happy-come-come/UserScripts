const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"برای شما"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"دنبال‌شده"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"‏سنجاق‌شده"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"‏%s بازتوییت کرد"},
	"replyAction": {"type":"string","value":"پاسخ"},
	"repostAction": {"type":"string","value":"بازپست"},
	"likeAction": {"type":"string","value":"پسندیدن"},
	"bookmarkAction": {"type":"string","value":"نشانک"},
	"showMore": {"type":"string","value":"نمایش موارد بیشتر"},
	"viewThread": {"type":"string","value":"این رشته‌توییت نشان داده شود"},
	"previousImage": {"type":"string","value":"تصویر قبلی"},
	"nextImage": {"type":"string","value":"تصویر بعدی"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["از "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/۵٫۰ ستاره – "+e.appNumRatings+" رتبه‌بندی"}
	},
	"verifiedAccount": {"type":"string","value":"حساب‌های کاربری تأییدشده"},
	"communityAdminBadge": {"type":"string","value":"مدیر"},
	"communityModeratorBadge": {"type":"string","value":"ناظم"},
	"communityMemberBadge": {"type":"string","value":"عضو"},
	"viewsLabel": {"type":"string","value":"بازدید"},
	"viewQuotes": {"type":"string","value":"دیدن نقل‌قول‌ها"},
	"viewActivity": {"type":"string","value":"مشاهده فعالیت"},
	"communityNotes": {"type":"string","value":"‏یادداشت‌های کاربران"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"این یادداشت مفید بود؟"},
	"communityNoteHelpful": {"type":"string","value":"مفید"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"تا حدودی مفید"},
	"communityNoteNotHelpful": {"type":"string","value":"غیرمفید"},
	"cashtagComingSoon": {"type":"string","value":"به‌زودی"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["اکنون "]}
	},
	"grokAnswerFun": {"type":"string","value":"پاسخ توسط Grok در «حالت سرگرمی»"},
	"grokAnswer": {"type":"string","value":"پاسخ توسط Grok"},
	"grokImageBy": {"type":"string","value":"تصویر از Grok"},
	"grokShowMore": {"type":"string","value":"نمایش موارد بیشتر"},
	"grokCreateVersion": {"type":"string","value":"نسخه خودتان را با Grok بسازید"},
	"grokAskYourself": {"type":"string","value":"خودتان از Grok بپرسید"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" صفحه وب"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" پست"}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return"پست‌ها و صفحه‌های وب "+e.count}
	},
	"mostRelevant": {"type":"string","value":"مربوط"},
	"mostLiked": {"type":"string","value":"پسندها"},
	"mostRecent": {"type":"string","value":"اخیر"},
	"sortReplies": {"type":"string","value":"مرتب‌سازی پاسخ‌ها"},
	"lastEdited": {"type":"string","value":"آخرین ویرایش"},
	"newPostVersion": {"type":"string","value":"نسخه جدیدی از این پست وجود دارد."},
	"opensEditHistory": {"type":"string","value":"سابقه ویرایش را باز می‌کند"},
	"viewLatestPost": {"type":"string","value":"مشاهده جدیدترین پست"},
	"opensLatestPost": {"type":"string","value":"نسخه جدید این پست را باز می‌کند"},
	"mediaTaggedSelf": {"type":"string","value":"شما"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["از "]}
	},
	"poll": {"type":"string","value":"نظرسنجی"},
	"viewPoll": {"type":"string","value":"این نظرسنجی نشان داده شود"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount"],
		"value": function(e){return e.formattedCount+" رأی"}
	},
	"pollEnded": {"type":"string","value":"نتايج نهايى"},
	"retweet": {"type":"string","value":"بازتوییت"},
	"unDoRetweet": {"type":"string","value":"لغو بازتوییت"},
	"quoteTweet": {"type":"string","value":"‏نقل‌توییت"},
	"profileTabTitleTimeline": {"type":"string","value":"‏توییت‌ها"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"‏پاسخ‌ها"},
	"profileTabTitleHighlights": {"type":"string","value":"‏موارد برتر"},
	"profileTabTitleMedia": {"type":"string","value":"‏رسانه تصویری"},
	"profileTabTitleLikes": {"type":"string","value":"‏پسند"},
	"following": {"type":"string","value":"دنبال‌شده"},
	"follow": {"type":"string","value":"دنبال کردن"},
	"followBack": {"type":"string","value":"شما هم دنبالش کنید"},
	"followers": {"type":"string","value":"دنبال‌کنندگان"},
	"followsYou": {"type":"string","value":"شما را دنبال می‌کند"},
	"subscriptions": {"type":"string","value":"اشتراک‌ها"},
	"unfollow": {"type":"string","value":"دنبال نشود"},
	"blocked": {"type":"string","value":"مسدود شده‌"},
	"unblock": {"type":"string","value":"عدم انسداد"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"تاریخ پیوستن "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["دنبال‌شده توسط "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["دنبال‌شده توسط "," و "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["دنبال‌شده توسط ","، ","، و "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["دنبال‌شده توسط ","، ","، و "," نفر دیگر که شما دنبال می‌کنید"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" تو"+n(props.count,"یی","يي")+"ت"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" پسند"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" عکس و ویدئو"]}
	},
	"home": {"type":"string","value":"خانه"},
	"explore": {"type":"string","value":"کاوش"},
	"notifications": {"type":"string","value":"آگاه‌سازی‌ها"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"دنبال کردن"+e.verb}
	},
	"chat": {"type":"string","value":"گپ"},
	"messages": {"type":"string","value":"پیام‌ها"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"نشانک‌ها"},
	"jobs": {"type":"string","value":"شغل‌ها"},
	"business": {"type":"string","value":"کسب‌وکار"},
	"communities": {"type":"string","value":"انجمن"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"سازمان‌های تأییدشده"},
	"profile": {"type":"string","value":"نمایه من"},
	"creatorStudio": {"type":"string","value":"استودیوی آفرینندگان آثار"},
	"lists": {"type":"string","value":"فهرست"},
	"monetization": {"type":"string","value":"درآمدزایی"},
	"ads": {"type":"string","value":"آگهی‌ها"},
	"createYourSpace": {"type":"string","value":"ایجاد «اتاق گفت‌وگو»"},
	"settingsAndPrivacy": {"type":"string","value":"تنظیمات و حریم خصوصی"},
	"moreMenu": {"type":"string","value":"بیشتر"},
	"addAnExistingAccount": {"type":"string","value":"افزودن حساب کاربری موجود"},
	"manageAccounts": {"type":"string","value":"مدیریت حساب‌ها"},
	"switchToAccount": {
		"type": "webI18nFunction",
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
