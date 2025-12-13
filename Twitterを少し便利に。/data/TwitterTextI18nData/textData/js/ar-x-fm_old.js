const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"لكِ"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"متابَعات"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"‏مثبت"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"‏%s مُعاد تغريدها"},
	"retweet": {"type":"string","value":"إعادة التغريد"},
	"unDoRetweet": {"type":"string","value":"التراجع عن التغريدة"},
	"quoteTweet": {"type":"string","value":"‏اقتباس التغريدة"},
	"profileTabTitleTimeline": {"type":"string","value":"‏التغريدات"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"‏الردود"},
	"profileTabTitleHighlights": {"type":"string","value":"‏المميزة"},
	"profileTabTitleMedia": {"type":"string","value":"‏الوسائط"},
	"profileTabTitleLikes": {"type":"string","value":"‏الإعجابات"},
	"following": {"type":"string","value":"متابَع"},
	"unfollow": {"type":"string","value":"إلغاء المتابعة"},
	"blocked": {"type":"string","value":"محظور"},
	"unblock": {"type":"string","value":"إلغاء الحظر"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"انضم في "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["متابَع بواسطة "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["متابَع بواسطة "," و"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["متابَع بواسطة "," و"," و"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["متابَع بواسطة "," و"," و"," آخرين تتابعينهم"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" تغريد"+n(props.count,"ات","ة","ة","ة","تين","ة")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" إعجاب"+n(props.count,"ات","ات","","","ان","")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" صور"+t(props.count," ومقاطع فيديو","ة وفيديو","ة واحدة وفيديو واحد","ة وفيديو","تان ومقطعا فيديو","ة وفيديو")]}
	},
	"home": {"type":"string","value":"الرئيسيّة"},
	"explore": {"type":"string","value":"استكشفي"},
	"notifications": {"type":"string","value":"التنبيهات"},
	"connect_people": {"type":"string","value":"التواصل"},
	"chat": {"type":"string","value":"الدردشة"},
	"messages": {"type":"string","value":"الرسائل"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"العلامات المرجعية"},
	"jobs": {"type":"string","value":"Jobs"},
	"communities": {"type":"string","value":"المجتمع"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"مؤسسات موّثَقة"},
	"profile": {"type":"string","value":"My Profile"},
	"lists": {"type":"string","value":"قائمة"},
	"monetization": {"type":"string","value":"تحقيق الأرباح"},
	"ads": {"type":"string","value":"الإعلانات"},
	"createYourSpace": {"type":"string","value":"إنشاء مساحتكِ"},
	"settingsAndPrivacy": {"type":"string","value":"الإعدادات والخصوصية"},
	"moreMenu": {"type":"string","value":"المزيد"},
	"addAnExistingAccount": {"type":"string","value":"إضافة حساب موجود"},
	"manageAccounts": {"type":"string","value":"إدارة الحسابات"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"تبديل إلى "+e.screenName+"@"}
	},
	"postTweet": {"type":"string","value":"‏تغريد"},
	"settings": {"type":"string","value":"إعدادات"},
	"now": {"type":"string","value":"الآن"},
	"day": {"type":"string","value":"يوم"},
	"month": {"type":"string","value":"شهر"},
	"year": {"type":"string","value":"سنة"},
	"january": {"type":"string","value":"يناير"},
	"february": {"type":"string","value":"فبراير"},
	"march": {"type":"string","value":"مارس"},
	"april": {"type":"string","value":"أبريل"},
	"may": {"type":"string","value":"مايو"},
	"june": {"type":"string","value":"يونيو"},
	"july": {"type":"string","value":"يوليو"},
	"august": {"type":"string","value":"أغسطس"},
	"september": {"type":"string","value":"سبتمبر"},
	"october": {"type":"string","value":"أكتوبر"},
	"november": {"type":"string","value":"نوفمبر"},
	"december": {"type":"string","value":"ديسمبر"}
};

export default text;