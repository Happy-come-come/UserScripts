const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Sana özel"+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Takip edilenler"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Sabitlenenler"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s Retweetledi"},
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"Retweeti Geri Al"},
	"quoteTweet": {"type":"string","value":"Tweeti Alıntıla"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweetler"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Yanıtlar"},
	"profileTabTitleHighlights": {"type":"string","value":"Öne Çıkanlar"},
	"profileTabTitleMedia": {"type":"string","value":"Medya"},
	"profileTabTitleLikes": {"type":"string","value":"Beğeniler"},
	"following": {"type":"string","value":"Takip ediliyor"},
	"unfollow": {"type":"string","value":"Takibi bırak"},
	"blocked": {"type":"string","value":"Engellendi"},
	"unblock": {"type":"string","value":"Engeli kaldır"},
	"joinDateFrom": {
		"type": "function",
		"arguments": ["joinDate"],
		"value": function(e){return e.joinDate+" tarihinde katıldı"}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," tarafından takip ediliyor"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," ve "," tarafından takip ediliyor"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," ve "," tarafından takip ediliyor"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," ve takip ettiğin diğer "," kişi tarafından takip ediliyor"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Beğeni"]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"Anasayfa"},
	"search": {"type":"string","value":"Keşfet"},
	"notifications": {"type":"string","value":"Bildirimler"},
	"messages": {"type":"string","value":"Mesajlar"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"Yer İşaretleri"},
	"jobs": {"type":"string","value":"İşler"},
	"communities": {"type":"string","value":"Topluluk"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"Onaylı Kuruluşlar"},
	"profile": {"type":"string","value":"Profilim"},
	"lists": {"type":"string","value":"Liste"},
	"monetization": {"type":"string","value":"Para kazanma"},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"Ayarlar ve gizlilik"},
	"addAnExistingAccount": {"type":"string","value":"Var olan bir hesap ekle"},
	"manageAccounts": {"type":"string","value":"Hesapları yönet"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(e){return"@"+e.screenName+" hesabına geç"}
	},
	"postTweet": {"type":"string","value":"Tweetle"},
	"settings": {"type":"string","value":"Ayarlar"},
	"now": {"type":"string","value":"Şimdi"},
	"day": {"type":"string","value":"Gün"},
	"month": {"type":"string","value":"Ay"},
	"year": {"type":"string","value":"Yıl"},
	"january": {"type":"string","value":"Ocak"},
	"february": {"type":"string","value":"Şubat"},
	"march": {"type":"string","value":"Mart"},
	"april": {"type":"string","value":"Nisan"},
	"may": {"type":"string","value":"Mayıs"},
	"june": {"type":"string","value":"Haziran"},
	"july": {"type":"string","value":"Temmuz"},
	"august": {"type":"string","value":"Ağustos"},
	"september": {"type":"string","value":"Eylül"},
	"october": {"type":"string","value":"Ekim"},
	"november": {"type":"string","value":"Kasım"},
	"december": {"type":"string","value":"Aralık"}
};

export default text;