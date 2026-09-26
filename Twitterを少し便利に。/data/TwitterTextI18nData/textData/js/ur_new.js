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
	"replyAction": {"type":"string","value":"جواب"},
	"repostAction": {"type":"string","value":"Repost"},
	"likeAction": {"type":"string","value":"لائک"},
	"bookmarkAction": {"type":"string","value":"بک مارک کریں"},
	"showMore": {"type":"string","value":"مزید دکھائیں"},
	"viewThread": {"type":"string","value":"یہ تھریڈ دکھائیں"},
	"previousImage": {"type":"string","value":"پچھلی تصویر"},
	"nextImage": {"type":"string","value":"اگلی تصویر"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["From "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5.0 stars – "+e.appNumRatings+" ratings"}
	},
	"verifiedAccount": {"type":"string","value":"Verified accounts"},
	"communityAdminBadge": {"type":"string","value":"ایڈمن"},
	"communityModeratorBadge": {"type":"string","value":"موڈ"},
	"communityMemberBadge": {"type":"string","value":"رکن"},
	"viewsLabel": {"type":"string","value":"views"},
	"viewQuotes": {"type":"string","value":"View quotes"},
	"viewActivity": {"type":"string","value":"View activity"},
	"communityNotes": undefined,
	"communityNoteHelpfulQuestion": {"type":"string","value":"کیا یہ نوٹ مددگار ہے؟"},
	"communityNoteHelpful": {"type":"string","value":"کارآمد"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"کسی حد تک کارآمد"},
	"communityNoteNotHelpful": {"type":"string","value":"غیر کارآمد"},
	"cashtagComingSoon": {"type":"string","value":"جلد آ رہا ہے"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Now at "]}
	},
	"grokAnswerFun": {"type":"string","value":"Answer by Grok in Fun Mode"},
	"grokAnswer": {"type":"string","value":"Answer by Grok"},
	"grokImageBy": {"type":"string","value":"Image by Grok"},
	"grokShowMore": {"type":"string","value":"مزید دکھائیں"},
	"grokCreateVersion": {"type":"string","value":"Create your version with Grok"},
	"grokAskYourself": {"type":"string","value":"Ask Grok yourself"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web page"+c(e.count,"","s")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" post"+c(e.count,"","s")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web pages and posts"}
	},
	"mostRelevant": {"type":"string","value":"Relevant"},
	"mostLiked": {"type":"string","value":"لائک"},
	"mostRecent": {"type":"string","value":"حالیہ"},
	"sortReplies": {"type":"string","value":"Sort replies"},
	"lastEdited": {"type":"string","value":"آخری مرتبہ ترمیم کیا گیا"},
	"newPostVersion": {"type":"string","value":"There’s a new version of this post."},
	"opensEditHistory": {"type":"string","value":"ترمیم کی ہسٹری کو کھولتا ہے"},
	"viewLatestPost": {"type":"string","value":"See the latest post"},
	"opensLatestPost": {"type":"string","value":"Opens the new version of this post"},
	"mediaTaggedSelf": {"type":"string","value":"آپ"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["منجانب "]}
	},
	"poll": {"type":"string","value":"پول"},
	"viewPoll": {"type":"string","value":"یہ پول دکھائیں"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" ووٹ"+n(e.count,"","س")}
	},
	"pollEnded": {"type":"string","value":"حتمی نتائج"},
	"retweet": {"type":"string","value":"Repost"},
	"unDoRetweet": {"type":"string","value":"Undo repost"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"فالو کر رہے ہیں"},
	"follow": {"type":"string","value":"فالو کریں"},
	"followBack": {"type":"string","value":"اسے بھی فالو کریں"},
	"followers": {"type":"string","value":"فالورز"},
	"followsYou": {"type":"string","value":"آپ کو فالو کر رہے ہیں"},
	"subscriptions": {"type":"string","value":"سبسکرپشن"},
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
		"value": function(){return [""," کے ذریعہ فالو کردہ"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," اور "," کی جانب سے فالو کردہ"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["","، ","، اور "," کی جانب سے فالو کردہ"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["","، ","، اور "," دیگر جنہیں آپ فالو کرتے ہیں کی جانب سے فالو کردہ"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" post"+c(props.count,"","s")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" لائک"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" photos & videos"]}
	},
	"home": {"type":"string","value":"ہوم"},
	"explore": {"type":"string","value":"دریافت کریں"},
	"notifications": {"type":"string","value":"اطلاعات"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Follow"+e.verb}
	},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"پیغامات"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"بُک مارکس"},
	"jobs": {"type":"string","value":"Jobs"},
	"business": {"type":"string","value":"کاروبار"},
	"communities": {"type":"string","value":"کمیونٹی"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Verified Orgs"},
	"profile": {"type":"string","value":"میری پروفائل"},
	"creatorStudio": {"type":"string","value":"اسٹوڈیو تخلیق کار"},
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
