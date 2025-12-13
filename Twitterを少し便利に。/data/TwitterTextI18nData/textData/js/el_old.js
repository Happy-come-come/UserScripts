const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Για εσάς"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Ακολουθείτε"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Καρφιτσωμένες"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"Ο χρήστης %s έκανε Retweet"},
	"retweet": {"type":"string","value":"Retweet"},
	"unDoRetweet": {"type":"string","value":"Αναίρεση Retweet"},
	"quoteTweet": {"type":"string","value":"Παράθεση Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweet"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Απαντήσεις"},
	"profileTabTitleHighlights": {"type":"string","value":"Κορυφαία"},
	"profileTabTitleMedia": {"type":"string","value":"Πολυμέσα"},
	"profileTabTitleLikes": {"type":"string","value":"\\\"Μου αρέσει\\\""},
	"following": {"type":"string","value":"Ακολουθείτε"},
	"unfollow": {"type":"string","value":"Άρση ακολούθησης"},
	"blocked": {"type":"string","value":"Αποκλεισμένος"},
	"unblock": {"type":"string","value":"Άρση αποκλεισμού"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Έγινε μέλος: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Ακολουθείται από τον χρήστη "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Ακολουθείται από τους χρήστες "," και "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Ακολουθείται από τους χρήστες ",", "," και "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Ακολουθείται από τους χρήστες ",", "," και από "," ακόμη που ακολουθείτε"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Επισ"+n(props.count,"ήμανση","ημάνσεις")+' "Μου αρέσει"']}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" φωτογραφίες & βίντεο"]}
	},
	"home": {"type":"string","value":"Αρχική σελίδα"},
	"explore": {"type":"string","value":"Εξερευνήστε"},
	"notifications": {"type":"string","value":"Ειδοποιήσεις"},
	"connect_people": {"type":"string","value":"Σύνδεση"},
	"chat": {"type":"string","value":"Συνομιλία"},
	"messages": {"type":"string","value":"Μηνύματα"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Σελιδοδείκτες"},
	"jobs": {"type":"string","value":"Αγγελίες εργασίας"},
	"communities": {"type":"string","value":"Κοινότητα"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Επαληθευμένοι Οργανισμοί"},
	"profile": {"type":"string","value":"Το προφίλ μου"},
	"lists": {"type":"string","value":"Λίστα"},
	"monetization": {"type":"string","value":"Δημιουργία εσόδων"},
	"ads": {"type":"string","value":"Διαφημίσεις"},
	"createYourSpace": {"type":"string","value":"Δημιουργήστε τον Χώρο σας"},
	"settingsAndPrivacy": {"type":"string","value":"Ρυθμίσεις και απόρρητο"},
	"moreMenu": {"type":"string","value":"Περισσότερα"},
	"addAnExistingAccount": {"type":"string","value":"Προσθήκη υπάρχοντος λογαριασμού"},
	"manageAccounts": {"type":"string","value":"Διαχείριση λογαριασμών"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Μετάβαση στον λογαριασμό @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweet"},
	"settings": {"type":"string","value":"Ρυθμίσεις"},
	"now": {"type":"string","value":"Τώρα"},
	"day": {"type":"string","value":"Ημέρα"},
	"month": {"type":"string","value":"Μήνας"},
	"year": {"type":"string","value":"Έτος"},
	"january": {"type":"string","value":"Ιανουάριος"},
	"february": {"type":"string","value":"Φεβρουάριος"},
	"march": {"type":"string","value":"Μάρτιος"},
	"april": {"type":"string","value":"Απρίλιος"},
	"may": {"type":"string","value":"Μάιος"},
	"june": {"type":"string","value":"Ιούνιος"},
	"july": {"type":"string","value":"Ιούλιος"},
	"august": {"type":"string","value":"Αύγουστος"},
	"september": {"type":"string","value":"Σεπτέμβριος"},
	"october": {"type":"string","value":"Οκτώβριος"},
	"november": {"type":"string","value":"Νοέμβριος"},
	"december": {"type":"string","value":"Δεκέμβριος"}
};

export default text;