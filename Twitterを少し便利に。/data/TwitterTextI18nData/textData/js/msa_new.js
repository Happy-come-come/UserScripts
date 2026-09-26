const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Untuk anda"+a.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Mengikuti"+a.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Dipinkan"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s menyiarkan semula"},
	"replyAction": {"type":"string","value":"Balas"},
	"repostAction": {"type":"string","value":"Siaran semula"},
	"likeAction": {"type":"string","value":"Suka"},
	"bookmarkAction": {"type":"string","value":"Tandai"},
	"showMore": {"type":"string","value":"Tunjukkan lagi"},
	"viewThread": {"type":"string","value":"Tunjukkan thread ini"},
	"previousImage": {"type":"string","value":"Imej sebelumnya"},
	"nextImage": {"type":"string","value":"Imej seterusnya"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Dari "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(a){return"Penarafan "+a.appStarRating+"/5.0 bintang – "+a.appNumRatings}
	},
	"verifiedAccount": {"type":"string","value":"Akaun disahkan"},
	"communityAdminBadge": {"type":"string","value":"Pntdbr"},
	"communityModeratorBadge": {"type":"string","value":"Mod"},
	"communityMemberBadge": {"type":"string","value":"Ahli"},
	"viewsLabel": {"type":"string","value":"tontonan"},
	"viewQuotes": {"type":"string","value":"Lihat petikan"},
	"viewActivity": {"type":"string","value":"Lihat aktiviti"},
	"communityNotes": {"type":"string","value":"Nota Komuniti"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Adakah nota ini membantu?"},
	"communityNoteHelpful": {"type":"string","value":"Membantu"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Agak Membantu"},
	"communityNoteNotHelpful": {"type":"string","value":"Tidak Membantu"},
	"cashtagComingSoon": {"type":"string","value":"Akan datang"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Sekarang di "]}
	},
	"grokAnswerFun": {"type":"string","value":"Jawapan daripada Grok dalam Mod Seronok"},
	"grokAnswer": {"type":"string","value":"Jawapan daripada Grok"},
	"grokImageBy": {"type":"string","value":"Imej oleh Grok"},
	"grokShowMore": {"type":"string","value":"Tunjukkan lagi"},
	"grokCreateVersion": {"type":"string","value":"Cipta versi anda dengan Grok"},
	"grokAskYourself": {"type":"string","value":"Tanya sendiri kepada Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" halaman web"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" siaran"}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" halaman web dan siaran"}
	},
	"mostRelevant": {"type":"string","value":"Berkaitan"},
	"mostLiked": {"type":"string","value":"Suka"},
	"mostRecent": {"type":"string","value":"Terkini"},
	"sortReplies": {"type":"string","value":"Isih balasan"},
	"lastEdited": {"type":"string","value":"Kali terakhir diedit"},
	"newPostVersion": {"type":"string","value":"Terdapat versi baharu bagi siaran ini."},
	"opensEditHistory": {"type":"string","value":"Membuka sejarah edit"},
	"viewLatestPost": {"type":"string","value":"Lihat siaran yang terkini"},
	"opensLatestPost": {"type":"string","value":"Membuka versi baharu bagi siaran ini"},
	"mediaTaggedSelf": {"type":"string","value":"Anda"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Daripada "]}
	},
	"poll": {"type":"string","value":"Undian"},
	"viewPoll": {"type":"string","value":"Tunjukkan undian ini"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount"],
		"value": function(a){return a.formattedCount+" undi"}
	},
	"pollEnded": {"type":"string","value":"Keputusan akhir"},
	"retweet": {"type":"string","value":"Siaran semula"},
	"unDoRetweet": {"type":"string","value":"Buat asal siaran semula"},
	"quoteTweet": {"type":"string","value":"Petikan"},
	"profileTabTitleTimeline": {"type":"string","value":"Siaran"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Balasan"},
	"profileTabTitleHighlights": {"type":"string","value":"Sorotan"},
	"profileTabTitleMedia": {"type":"string","value":"Media"},
	"profileTabTitleLikes": {"type":"string","value":"Suka"},
	"following": {"type":"string","value":"Mengikuti"},
	"follow": {"type":"string","value":"Ikut"},
	"followBack": {"type":"string","value":"Ikut kembali"},
	"followers": {"type":"string","value":"Pengikut"},
	"followsYou": {"type":"string","value":"Mengikuti Anda"},
	"subscriptions": {"type":"string","value":"Langganan"},
	"unfollow": {"type":"string","value":"Nyahikut"},
	"blocked": {"type":"string","value":"Disekat"},
	"unblock": {"type":"string","value":"Nyahsekat"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(a){return"Sertai pada "+a.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Diikuti oleh "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Diikuti oleh "," dan "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Diikuti oleh ",", "," dan "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Diikuti oleh ",", "," dan "," yang lain yang anda ikuti"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" siaran"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Suka"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" foto & video"]}
	},
	"home": {"type":"string","value":"Laman Utama"},
	"explore": {"type":"string","value":"Teroka"},
	"notifications": {"type":"string","value":"Pemberitahuan"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(a){return"Ikut"+a.verb}
	},
	"chat": {"type":"string","value":"Perbualan"},
	"messages": {"type":"string","value":"Mesej"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Bookmark"},
	"jobs": {"type":"string","value":"Pekerjaan"},
	"business": {"type":"string","value":"Perniagaan"},
	"communities": {"type":"string","value":"Komuniti"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Organisasi Disahkan"},
	"profile": {"type":"string","value":"Profil Saya"},
	"creatorStudio": {"type":"string","value":"Studio Pencipta"},
	"lists": {"type":"string","value":"Senarai"},
	"monetization": {"type":"string","value":"Pengewangan"},
	"ads": {"type":"string","value":"Iklan"},
	"createYourSpace": {"type":"string","value":"Cipta Space anda"},
	"settingsAndPrivacy": {"type":"string","value":"Tetapan dan privasi"},
	"moreMenu": {"type":"string","value":"Lagi"},
	"addAnExistingAccount": {"type":"string","value":"Tambah akaun sedia ada"},
	"manageAccounts": {"type":"string","value":"Urus akaun"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(a){return"Tukar kepada @"+a.screenName}
	},
	"postTweet": {"type":"string","value":"Siarkan"},
	"settings": {"type":"string","value":"Tetapan"},
	"now": {"type":"string","value":"Sekarang"},
	"day": {"type":"string","value":"Hari"},
	"month": {"type":"string","value":"Bulan"},
	"year": {"type":"string","value":"Tahun"},
	"january": {"type":"string","value":"Januari"},
	"february": {"type":"string","value":"Februari"},
	"march": {"type":"string","value":"Mac"},
	"april": {"type":"string","value":"April"},
	"may": {"type":"string","value":"Mei"},
	"june": {"type":"string","value":"Jun"},
	"july": {"type":"string","value":"Julai"},
	"august": {"type":"string","value":"Ogos"},
	"september": {"type":"string","value":"September"},
	"october": {"type":"string","value":"Oktober"},
	"november": {"type":"string","value":"November"},
	"december": {"type":"string","value":"Disember"}
};

export default text;
