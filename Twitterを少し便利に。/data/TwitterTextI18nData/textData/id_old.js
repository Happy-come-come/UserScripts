const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Untuk Anda"+a.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(a){return"Mengikuti"+a.noun}
	},
	"pinnedListsModuleHeader": undefined,
	"tweetsRetweeted": undefined,
	"retweet": {"type":"string","value":"Retweet"},
	"unDoRetweet": {"type":"string","value":"Batalkan Retweet"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"Mengikuti"},
	"unfollow": {"type":"string","value":"Setop Ikuti"},
	"blocked": {"type":"string","value":"Diblokir"},
	"unblock": {"type":"string","value":"Buka blokir"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(a){return"Bergabung "+a.joinDate}
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
		"value": function(){return["Diikuti oleh ",", ",", dan "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Diikuti oleh ",", ",", dan "," lainnya yang Anda ikuti"]}
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
	"home": {"type":"string","value":"Beranda"},
	"explore": {"type":"string","value":"Jelajahi"},
	"notifications": {"type":"string","value":"Notifikasi"},
	"messages": {"type":"string","value":"Pesan"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Markah"},
	"jobs": {"type":"string","value":"Karier"},
	"communities": {"type":"string","value":"Komunitas"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Organisasi Terverifikasi"},
	"profile": {"type":"string","value":"Profil Saya"},
	"lists": {"type":"string","value":"Daftar"},
	"monetization": {"type":"string","value":"Monetisasi"},
	"ads": {"type":"string","value":"Iklan"},
	"createYourSpace": {"type":"string","value":"Buat Space Anda"},
	"settingsAndPrivacy": {"type":"string","value":"Pengaturan dan privasi"},
	"moreMenu": {"type":"string","value":"Lainnya"},
	"addAnExistingAccount": {"type":"string","value":"Tambahkan akun yang sudah ada"},
	"manageAccounts": {"type":"string","value":"Kelola akun"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(a){return"Beralih ke @"+a.screenName}
	},
	"postTweet": undefined,
	"settings": {"type":"string","value":"Pengaturan"},
	"now": {"type":"string","value":"Sekarang"},
	"day": {"type":"string","value":"Hari"},
	"month": {"type":"string","value":"Bulan"},
	"year": {"type":"string","value":"Tahun"},
	"january": {"type":"string","value":"Januari"},
	"february": {"type":"string","value":"Februari"},
	"march": {"type":"string","value":"Maret"},
	"april": {"type":"string","value":"April"},
	"may": {"type":"string","value":"Mei"},
	"june": {"type":"string","value":"Juni"},
	"july": {"type":"string","value":"Juli"},
	"august": {"type":"string","value":"Agustus"},
	"september": {"type":"string","value":"September"},
	"october": {"type":"string","value":"Oktober"},
	"november": {"type":"string","value":"November"},
	"december": {"type":"string","value":"Desember"}
};

export default text;