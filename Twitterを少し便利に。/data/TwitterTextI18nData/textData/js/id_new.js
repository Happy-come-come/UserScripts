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
	"replyAction": {"type":"string","value":"Balas"},
	"repostAction": {"type":"string","value":"Posting ulang"},
	"likeAction": {"type":"string","value":"Suka"},
	"bookmarkAction": {"type":"string","value":"Markah"},
	"showMore": {"type":"string","value":"Tampilkan lebih banyak"},
	"viewThread": {"type":"string","value":"Tampilkan utas ini"},
	"previousImage": {"type":"string","value":"Gambar sebelumnya"},
	"nextImage": {"type":"string","value":"Gambar selanjutnya"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Dari "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(a){return a.appStarRating+"/5 bintang – "+a.appNumRatings+" peringkat"}
	},
	"verifiedAccount": {"type":"string","value":"Akun Terverifikasi"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod"},
	"communityMemberBadge": {"type":"string","value":"Anggota"},
	"viewsLabel": {"type":"string","value":"tayangan"},
	"viewQuotes": {"type":"string","value":"Lihat kutipan"},
	"viewActivity": {"type":"string","value":"Lihat aktivitas"},
	"communityNotes": undefined,
	"communityNoteHelpfulQuestion": {"type":"string","value":"Apakah catatan ini membantu?"},
	"communityNoteHelpful": {"type":"string","value":"Membantu"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Cukup Membantu"},
	"communityNoteNotHelpful": {"type":"string","value":"Tidak Membantu"},
	"cashtagComingSoon": {"type":"string","value":"Segera hadir"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Sekarang hanya "]}
	},
	"grokAnswerFun": {"type":"string","value":"Jawaban dari Grok dalam Mode Santai"},
	"grokAnswer": {"type":"string","value":"Jawaban dari Grok"},
	"grokImageBy": {"type":"string","value":"Gambar dari Grok"},
	"grokShowMore": {"type":"string","value":"Tampilkan lebih banyak"},
	"grokCreateVersion": {"type":"string","value":"Buat versi Anda dengan Grok"},
	"grokAskYourself": {"type":"string","value":"Tanya langsung pada Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" halaman web"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" postingan"}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" halaman web dan postingan"}
	},
	"mostRelevant": {"type":"string","value":"Relevan"},
	"mostLiked": {"type":"string","value":"Suka"},
	"mostRecent": {"type":"string","value":"Terkini"},
	"sortReplies": {"type":"string","value":"Urutkan balasan"},
	"lastEdited": {"type":"string","value":"Terakhir diedit"},
	"newPostVersion": {"type":"string","value":"Ada versi baru postingan ini."},
	"opensEditHistory": {"type":"string","value":"Membuka riwayat pengeditan"},
	"viewLatestPost": {"type":"string","value":"Lihat postingan terbaru"},
	"opensLatestPost": {"type":"string","value":"Membuka versi baru postingan ini"},
	"mediaTaggedSelf": {"type":"string","value":"Anda"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Dari "]}
	},
	"poll": {"type":"string","value":"Jajak pendapat"},
	"viewPoll": {"type":"string","value":"Tampilkan jajak pendapat ini"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount"],
		"value": function(a){return a.formattedCount+" suara"}
	},
	"pollEnded": {"type":"string","value":"Hasil akhir"},
	"retweet": {"type":"string","value":"Posting ulang"},
	"unDoRetweet": {"type":"string","value":"Batalkan posting ulang"},
	"quoteTweet": undefined,
	"profileTabTitleTimeline": undefined,
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": undefined,
	"profileTabTitleHighlights": undefined,
	"profileTabTitleMedia": undefined,
	"profileTabTitleLikes": undefined,
	"following": {"type":"string","value":"Mengikuti"},
	"follow": {"type":"string","value":"Ikuti"},
	"followBack": {"type":"string","value":"Ikuti balik"},
	"followers": {"type":"string","value":"Pengikut"},
	"followsYou": {"type":"string","value":"Mengikuti Anda"},
	"subscriptions": {"type":"string","value":"Berlangganan"},
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
		"value": function(){return ["Diikuti oleh "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Diikuti oleh "," dan "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Diikuti oleh ",", ",", dan "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Diikuti oleh ",", ",", dan "," lainnya yang Anda ikuti"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" postingan"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Suka"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" foto & video"]}
	},
	"home": {"type":"string","value":"Beranda"},
	"explore": {"type":"string","value":"Jelajahi"},
	"notifications": {"type":"string","value":"Notifikasi"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(a){return"Ikuti"+a.verb}
	},
	"chat": {"type":"string","value":"Obrolan"},
	"messages": {"type":"string","value":"Pesan"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Markah"},
	"jobs": {"type":"string","value":"Karier"},
	"business": {"type":"string","value":"Bisnis"},
	"communities": {"type":"string","value":"Komunitas"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Organisasi Terverifikasi"},
	"profile": {"type":"string","value":"Profil Saya"},
	"creatorStudio": {"type":"string","value":"Studio Kreator"},
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
