const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"உங்களுக்கானவை"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"பின்தொடர்கிறீர்கள்"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"பின் செய்யப்பட்டவை"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s மறுட்வீட் செய்துள்ளார்"},
	"retweet": {"type":"string","value":"மறுட்விட் செய்"},
	"unDoRetweet": {"type":"string","value":"மறுகீச்சை செயல்தவிர்"},
	"quoteTweet": {"type":"string","value":"ட்விட்டை மேற்கோள் காட்டு"},
	"profileTabTitleTimeline": {"type":"string","value":"ட்விட்கள்"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"பதில்கள்"},
	"profileTabTitleHighlights": {"type":"string","value":"சிறப்புக் கூறுகள்"},
	"profileTabTitleMedia": {"type":"string","value":"ஊடகம்"},
	"profileTabTitleLikes": {"type":"string","value":"விருப்பங்கள்"},
	"following": {"type":"string","value":"பின்தொடர்கிறீர்கள்"},
	"unfollow": {"type":"string","value":"பின்தொடராதே"},
	"blocked": {"type":"string","value":"தடைசெய்யப்பட்டது"},
	"unblock": {"type":"string","value":"தடைநீக்கு"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"இணைந்த தேதி: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," இவரைப் பின்தொடர்கிறார்"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," ஆகியோர் இவரைப் பின்தொடர்கின்றனர்"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", ",", "," ஆகியோர் இவரைப் பின்தொடர்கின்றனர்"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["நீங்கள் பின்தொடரும் ",", ",", மற்றும் "," பேர் இவரைப் பின்தொடர்கின்றனர்"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" கீச்சு"+n(props.count,"","கள்")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" விருப்ப"+n(props.count,"ம","ங்கள")+"்"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" புகைப்படங்கள் & வீடியோக்கள்"]}
	},
	"home": {"type":"string","value":"முகப்பு"},
	"explore": {"type":"string","value":"ஆராய்க"},
	"notifications": {"type":"string","value":"அறிவிப்புகள்"},
	"messages": {"type":"string","value":"செய்திகள்"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"புத்தகக்குறிகள்"},
	"jobs": {"type":"string","value":"வேலைவாய்ப்புகள்"},
	"communities": {"type":"string","value":"கம்யூனிட்டி"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"சரிபார்க்கப்பட்ட அமைப்புகள்"},
	"profile": {"type":"string","value":"எனது சுயவிவரம்"},
	"lists": {"type":"string","value":"பட்டியல்"},
	"monetization": {"type":"string","value":"பணமாக்குதல்"},
	"ads": {"type":"string","value":"விளம்பரங்கள்"},
	"createYourSpace": {"type":"string","value":"உங்கள் ஸ்பேஸை உருவாக்குக"},
	"settingsAndPrivacy": {"type":"string","value":"அமைப்புகள் மற்றும் தனியுரிமை"},
	"moreMenu": {"type":"string","value":"மேலும்"},
	"addAnExistingAccount": {"type":"string","value":"ஏற்கனவே உள்ள கணக்கைச் சேர்க்கவும்"},
	"manageAccounts": {"type":"string","value":"கணக்குகளை நிர்வகி"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"@"+e.screenName+"க்கு மாறு"}
	},
	"postTweet": {"type":"string","value":"ட்விட் செய்"},
	"settings": {"type":"string","value":"அமைப்புகள்"},
	"now": {"type":"string","value":"இப்போது"},
	"day": {"type":"string","value":"நாள்"},
	"month": {"type":"string","value":"மாதம்"},
	"year": {"type":"string","value":"ஆண்டு"},
	"january": {"type":"string","value":"ஜனவரி"},
	"february": {"type":"string","value":"பிப்ரவரி"},
	"march": {"type":"string","value":"மார்ச்"},
	"april": {"type":"string","value":"ஏப்ரல்"},
	"may": {"type":"string","value":"மே"},
	"june": {"type":"string","value":"ஜுன்"},
	"july": {"type":"string","value":"ஜுலை"},
	"august": {"type":"string","value":"ஆகஸ்ட்"},
	"september": {"type":"string","value":"செப்டம்பர்"},
	"october": {"type":"string","value":"அக்டோபர்"},
	"november": {"type":"string","value":"நவம்பர்"},
	"december": {"type":"string","value":"டிசம்பர்"}
};

export default text;