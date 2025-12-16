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
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s Tweet semula"},
	"retweet": {"type":"string","value":"Tweet semula"},
	"unDoRetweet": {"type":"string","value":"Buat asal Tweet semula"},
	"quoteTweet": {"type":"string","value":"Petik Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweet"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Balasan"},
	"profileTabTitleHighlights": {"type":"string","value":"Sorotan"},
	"profileTabTitleMedia": {"type":"string","value":"Media"},
	"profileTabTitleLikes": {"type":"string","value":"Suka"},
	"following": {"type":"string","value":"Mengikuti"},
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
		"value": function(){return["Diikuti oleh "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Diikuti oleh "," dan "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Diikuti oleh ",", "," dan "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Diikuti oleh ",", "," dan "," yang lain yang anda ikuti"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Suka"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" foto & video"]}
	},
	"home": {"type":"string","value":"Laman Utama"},
	"explore": {"type":"string","value":"Teroka"},
	"notifications": {"type":"string","value":"Pemberitahuan"},
	"connect_people": {"type":"string","value":"Hubung"},
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
	"postTweet": {"type":"string","value":"Tweet"},
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
