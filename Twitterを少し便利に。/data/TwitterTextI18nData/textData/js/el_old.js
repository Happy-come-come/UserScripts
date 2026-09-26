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
	"replyAction": {"type":"string","value":"Απάντηση"},
	"repostAction": {"type":"string","value":"Αναδημοσίευση"},
	"likeAction": {"type":"string","value":"Σήμανση \"Μου αρέσει\""},
	"bookmarkAction": {"type":"string","value":"Προσθήκη στους σελιδοδείκτες"},
	"showMore": {"type":"string","value":"Εμφάνιση περισσότερων"},
	"viewThread": {"type":"string","value":"Προβολή αυτού του νήματος Tweet"},
	"previousImage": {"type":"string","value":"Προηγούμενη εικόνα"},
	"nextImage": {"type":"string","value":"Επόμενη εικόνα"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Από "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5,0 αστέρια - "+e.appNumRatings+" αξιολογήσεις"}
	},
	"verifiedAccount": {"type":"string","value":"Επιβεβαιωμένοι λογαριασμοί"},
	"communityAdminBadge": {"type":"string","value":"Διαχ."},
	"communityModeratorBadge": {"type":"string","value":"Επόπ."},
	"communityMemberBadge": {"type":"string","value":"Μέλος"},
	"viewsLabel": {"type":"string","value":"προβολές"},
	"viewQuotes": {"type":"string","value":"Προβολή παραθέσεων ανάρτησης"},
	"viewActivity": {"type":"string","value":"Προβολή δραστηριότητας"},
	"communityNotes": {"type":"string","value":"Σημειώματα κοινότητας"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Είναι χρήσιμη αυτή η σημείωση;"},
	"communityNoteHelpful": {"type":"string","value":"Χρήσιμη"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Κάπως χρήσιμη"},
	"communityNoteNotHelpful": {"type":"string","value":"Μη χρήσιμη"},
	"cashtagComingSoon": {"type":"string","value":"Προσεχώς"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Τώρα στο "]}
	},
	"grokAnswerFun": {"type":"string","value":"Απάντηση από Grok στη λειτουργία διασκέδασης"},
	"grokAnswer": {"type":"string","value":"Απάντηση από το Grok"},
	"grokImageBy": {"type":"string","value":"Εικόνα από το Grok"},
	"grokShowMore": {"type":"string","value":"Εμφάνιση περισσότερων"},
	"grokCreateVersion": {"type":"string","value":"Δημιουργήστε την έκδοσή σας με το Grok"},
	"grokAskYourself": {"type":"string","value":"Ρωτήστε εσείς το Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" ιστοσελίδ"+t(e.count,"α","ες")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" αν"+t(e.count,"άρτηση","αρτήσεις")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" ιστοσελίδες και αναρτήσεις"}
	},
	"mostRelevant": {"type":"string","value":"Σχετικό"},
	"mostLiked": {"type":"string","value":"\"Μου αρέσει\""},
	"mostRecent": {"type":"string","value":"Πρόσφατα"},
	"sortReplies": {"type":"string","value":"Ταξινόμηση απαντήσεων"},
	"lastEdited": {"type":"string","value":"Τελευταία επεξεργασία"},
	"newPostVersion": {"type":"string","value":"Υπάρχει μια νέα έκδοση αυτής της ανάρτησης."},
	"opensEditHistory": {"type":"string","value":"Ανοίγει το ιστορικό επεξεργασίας"},
	"viewLatestPost": {"type":"string","value":"Δείτε την πιο πρόσφατη ανάρτηση"},
	"opensLatestPost": {"type":"string","value":"Ανοίγει τη νέα έκδοση αυτής της ανάρτησης"},
	"mediaTaggedSelf": {"type":"string","value":"Εσείς"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Από τον χρήστη "]}
	},
	"poll": {"type":"string","value":"Ψηφοφορία"},
	"viewPoll": {"type":"string","value":"Εμφάνιση αυτής της ψηφοφορίας"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" ψήφο"+n(e.count,"ς","ι")}
	},
	"pollEnded": {"type":"string","value":"Τελικά αποτελέσματα"},
	"retweet": {"type":"string","value":"Retweet"},
	"unDoRetweet": {"type":"string","value":"Αναίρεση Retweet"},
	"quoteTweet": {"type":"string","value":"Παράθεση Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweet"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Απαντήσεις"},
	"profileTabTitleHighlights": {"type":"string","value":"Κορυφαία"},
	"profileTabTitleMedia": {"type":"string","value":"Πολυμέσα"},
	"profileTabTitleLikes": {"type":"string","value":"\\\"Μου αρέσει\\\""},
	"following": {"type":"string","value":"Ακολουθείτε"},
	"follow": {"type":"string","value":"Ακολουθήστε"},
	"followBack": {"type":"string","value":"Ακολουθήστε"},
	"followers": {"type":"string","value":"Ακόλουθοι"},
	"followsYou": {"type":"string","value":"Σας ακολουθεί"},
	"subscriptions": {"type":"string","value":"Συνδρομές"},
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
		"value": function(){return ["Ακολουθείται από τον χρήστη "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Ακολουθείται από τους χρήστες "," και "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Ακολουθείται από τους χρήστες ",", "," και "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Ακολουθείται από τους χρήστες ",", "," και από "," ακόμη που ακολουθείτε"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Tweet"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Επισ"+n(props.count,"ήμανση","ημάνσεις")+' "Μου αρέσει"']}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" φωτογραφίες & βίντεο"]}
	},
	"home": {"type":"string","value":"Αρχική σελίδα"},
	"explore": {"type":"string","value":"Εξερευνήστε"},
	"notifications": {"type":"string","value":"Ειδοποιήσεις"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Ακολουθήστε"+e.verb}
	},
	"chat": {"type":"string","value":"Συνομιλία"},
	"messages": {"type":"string","value":"Μηνύματα"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Σελιδοδείκτες"},
	"jobs": {"type":"string","value":"Αγγελίες εργασίας"},
	"business": {"type":"string","value":"Επιχείρηση"},
	"communities": {"type":"string","value":"Κοινότητα"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Επαληθευμένοι Οργανισμοί"},
	"profile": {"type":"string","value":"Το προφίλ μου"},
	"creatorStudio": {"type":"string","value":"Creator Studio"},
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
