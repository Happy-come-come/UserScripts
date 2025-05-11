const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"તમારા માટે"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"અનુસરી રહ્યા છો"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"પિન કરેલ"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s રીપોસ્ટ થઈ"},
	"retweet": {"type":"string","value":"રીપોસ્ટ કરો"},
	"unDoRetweet": {"type":"string","value":"પુનઃપોસ્ટ પૂર્વવત્ કરો"},
	"quoteTweet": {"type":"string","value":"અવતરણ"},
	"profileTabTitleTimeline": {"type":"string","value":"પોસ્ટ્સ"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"પ્રત્યુત્તરો"},
	"profileTabTitleHighlights": {"type":"string","value":"હાઇલાઇટ્સ"},
	"profileTabTitleMedia": {"type":"string","value":"મીડિયા"},
	"profileTabTitleLikes": {"type":"string","value":"લાઈક્સ"},
	"following": {"type":"string","value":"અનુસરે છે"},
	"unfollow": {"type":"string","value":"અનુસરવાનું બંધ કરો"},
	"blocked": {"type":"string","value":"અવરોધિત કરેલું"},
	"unblock": {"type":"string","value":"અનાવરોધિત"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return e.joinDate+"એ જોડાયા"}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," દ્વારા અનુસરવામાં આવેલ છે"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," અને "," દ્વારા અનુસર્યા"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," અને "," દ્વારા અનુસર્યા"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," અને તમે અનુસરો છો તે "," અન્યો દ્વારા અનુસર્યા"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" પોસ્ટ"+f(props.count,"","્સ ")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" લાઈક"+f(props.count,"","્સ")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" ફોટા અને વિડિયોઝ"]}
	},
	"home": {"type":"string","value":"હોમ"},
	"search": {"type":"string","value":"એક્સપ્લોર"},
	"notifications": {"type":"string","value":"સૂચનાઓ"},
	"messages": {"type":"string","value":"સંદેશાઓ"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"બુકમાર્ક્સ"},
	"jobs": {"type":"string","value":"નોકરીઓ"},
	"communities": {"type":"string","value":"કોમ્યુનિટી"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"ચકાસાયેલી સંસ્થા"},
	"profile": {"type":"string","value":"મારી પ્રોફાઈલ"},
	"lists": {"type":"string","value":"યાદી"},
	"monetization": {"type":"string","value":"મોનેટાઇઝેશન"},
	"ads": {"type":"string","value":"જાહેરાતો"},
	"createYourSpace": {"type":"string","value":"તમારી સ્પેસ બનાવો"},
	"settingsAndPrivacy": {"type":"string","value":"સેટિંગ્સ અને ગોપનીયતા"},
	"addAnExistingAccount": {"type":"string","value":"કોઈ મોજૂદ એકાઉન્ટ ઉમેરો"},
	"manageAccounts": {"type":"string","value":"એકાઉન્ટ્સનું વ્યવસ્થાપન કરો"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"@"+e.screenName+" પર ફેરબદલી કરો"}
	},
	"postTweet": {"type":"string","value":"પોસ્ટ કરો"},
	"settings": {"type":"string","value":"સેટિંગ્સ"},
	"now": {"type":"string","value":"હવે"},
	"day": {"type":"string","value":"દિવસ"},
	"month": {"type":"string","value":"મહિનો"},
	"year": {"type":"string","value":"વર્ષ"},
	"january": {"type":"string","value":"જાન્યુઆરી"},
	"february": {"type":"string","value":"ફેબ્રુઆરી"},
	"march": {"type":"string","value":"માર્ચ"},
	"april": {"type":"string","value":"એપ્રિલ"},
	"may": {"type":"string","value":"મે"},
	"june": {"type":"string","value":"જૂન"},
	"july": {"type":"string","value":"જુલાઈ"},
	"august": {"type":"string","value":"ઓગસ્ટ"},
	"september": {"type":"string","value":"સપ્ટેમ્બર"},
	"october": {"type":"string","value":"ઓક્ટોબર"},
	"november": {"type":"string","value":"નવેમ્બર"},
	"december": {"type":"string","value":"ડિસેમ્બર"}
};

export default text;