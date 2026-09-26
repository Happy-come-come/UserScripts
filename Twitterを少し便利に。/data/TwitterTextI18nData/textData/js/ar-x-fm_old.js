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
	"replyAction": {"type":"string","value":"ردّ"},
	"repostAction": {"type":"string","value":"إعادة النشر"},
	"likeAction": {"type":"string","value":"أعجبني"},
	"bookmarkAction": {"type":"string","value":"إضافة إلى العلامات المرجعية"},
	"showMore": {"type":"string","value":"عرض المزيد"},
	"viewThread": {"type":"string","value":"عرض هذه السلسلة"},
	"previousImage": {"type":"string","value":"الصورة السابقة"},
	"nextImage": {"type":"string","value":"الصورة التالية"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["من "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5.0 من النجوم – "+e.appNumRatings+" تقييم"}
	},
	"verifiedAccount": {"type":"string","value":"الحسابات الموَثّقة"},
	"communityAdminBadge": {"type":"string","value":"مسؤول"},
	"communityModeratorBadge": {"type":"string","value":"مشرف"},
	"communityMemberBadge": {"type":"string","value":"عضو فيها"},
	"viewsLabel": {"type":"string","value":"مشاهدات"},
	"viewQuotes": {"type":"string","value":"عرض الاقتباسات"},
	"viewActivity": {"type":"string","value":"عرض النشاط"},
	"communityNotes": {"type":"string","value":"‏ملاحظات المجتمع"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"هل هذه الملاحظة مفيدة؟"},
	"communityNoteHelpful": {"type":"string","value":"مفيدة"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"مفيدة قليلاً"},
	"communityNoteNotHelpful": {"type":"string","value":"غير مفيدة"},
	"cashtagComingSoon": {"type":"string","value":"متوفّر قريبًا"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["الآن في "]}
	},
	"grokAnswerFun": {"type":"string","value":"الإجابة بواسطة Grok في وضع المتعة"},
	"grokAnswer": {"type":"string","value":"الإجابة بواسطة Grok"},
	"grokImageBy": {"type":"string","value":"صورة بواسطة Grok"},
	"grokShowMore": {"type":"string","value":"عرض المزيد"},
	"grokCreateVersion": {"type":"string","value":"أنشئي نسختكِ باستخدام Grok"},
	"grokAskYourself": {"type":"string","value":"اسألي Grok بنفسكِ"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" صفح"+n(e.count,"ات ويب","ةَ ويب","ة ويب واحدة","ةِ ويب","تا ويب","ة ويب")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" من"+n(e.count,"شورات","شورات"," المنشورات","شور"," المنشورات","شور")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" من صفحات الويب والمنشورات"}
	},
	"mostRelevant": {"type":"string","value":"ذو صلة"},
	"mostLiked": {"type":"string","value":"الإعجابات"},
	"mostRecent": {"type":"string","value":"الحديثة"},
	"sortReplies": {"type":"string","value":"فرز الردود"},
	"lastEdited": {"type":"string","value":"تاريخ آخر تعديل"},
	"newPostVersion": {"type":"string","value":"تتوفر نسخة جديدة من هذا المنشور."},
	"opensEditHistory": {"type":"string","value":"يفتح سِجل التعديلات"},
	"viewLatestPost": {"type":"string","value":"شاهدي أحدث المنشورات"},
	"opensLatestPost": {"type":"string","value":"لفتح النسخة الجديدة من هذا المنشور"},
	"mediaTaggedSelf": {"type":"string","value":"أنتِ"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["من "]}
	},
	"poll": {"type":"string","value":"استطلاع"},
	"viewPoll": {"type":"string","value":"عرض هذا الاستطلاع"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" "+n(e.count,"أصوات","صوتًا","صوت","صوت","صوتان","صوت")}
	},
	"pollEnded": {"type":"string","value":"النتائج النهائية"},
	"retweet": {"type":"string","value":"إعادة التغريد"},
	"unDoRetweet": {"type":"string","value":"التراجع عن التغريدة"},
	"quoteTweet": {"type":"string","value":"‏اقتباس التغريدة"},
	"profileTabTitleTimeline": {"type":"string","value":"‏التغريدات"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"‏الردود"},
	"profileTabTitleHighlights": {"type":"string","value":"‏المميزة"},
	"profileTabTitleMedia": {"type":"string","value":"‏الوسائط"},
	"profileTabTitleLikes": {"type":"string","value":"‏الإعجابات"},
	"following": {"type":"string","value":"متابَع"},
	"follow": {"type":"string","value":"تابِعي"},
	"followBack": {"type":"string","value":"المتابعة أيضًا"},
	"followers": {"type":"string","value":"المتابِعون"},
	"followsYou": {"type":"string","value":"يُتابعكِ"},
	"subscriptions": {"type":"string","value":"الاشتراكات"},
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
		"value": function(){return ["متابَع بواسطة "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["متابَع بواسطة "," و"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["متابَع بواسطة "," و"," و"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["متابَع بواسطة "," و"," و"," آخرين تتابعينهم"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" تغريد"+n(props.count,"ات","ة","ة","ة","تين","ة")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" إعجاب"+n(props.count,"ات","ات","","","ان","")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" صور"+n(props.count," ومقاطع فيديو","ة وفيديو","ة واحدة وفيديو واحد","ة وفيديو","تان ومقطعا فيديو","ة وفيديو")]}
	},
	"home": {"type":"string","value":"الرئيسيّة"},
	"explore": {"type":"string","value":"استكشفي"},
	"notifications": {"type":"string","value":"التنبيهات"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"متابَعة"+e.verb}
	},
	"chat": {"type":"string","value":"الدردشة"},
	"messages": {"type":"string","value":"الرسائل"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"العلامات المرجعية"},
	"jobs": {"type":"string","value":"Jobs"},
	"business": {"type":"string","value":"النشاط التجاري"},
	"communities": {"type":"string","value":"المجتمع"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"مؤسسات موّثَقة"},
	"profile": {"type":"string","value":"My Profile"},
	"creatorStudio": {"type":"string","value":"إستوديو منشئة المحتوى"},
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
