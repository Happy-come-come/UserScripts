const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Sana özel"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Takip edilenler"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Sabitlenenler"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s Retweetledi"},
	"replyAction": {"type":"string","value":"Yanıtla"},
	"repostAction": {"type":"string","value":"Yeniden gönder"},
	"likeAction": {"type":"string","value":"Beğen"},
	"bookmarkAction": {"type":"string","value":"Yer işareti"},
	"showMore": {"type":"string","value":"Daha fazla göster"},
	"viewThread": {"type":"string","value":"Bu Tweet dizisini göster"},
	"previousImage": {"type":"string","value":"Önceki resim"},
	"nextImage": {"type":"string","value":"Sonraki resim"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Kaynak: "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"5,0 yıldız - "+e.appNumRatings+" değerlendirme"}
	},
	"verifiedAccount": {"type":"string","value":"Onaylanmış hesaplar"},
	"communityAdminBadge": {"type":"string","value":"Yntc."},
	"communityModeratorBadge": {"type":"string","value":"Mod"},
	"communityMemberBadge": {"type":"string","value":"Üye"},
	"viewsLabel": {"type":"string","value":"görüntülenme"},
	"viewQuotes": {"type":"string","value":"Alıntıları görüntüle"},
	"viewActivity": {"type":"string","value":"Etkinliği görüntüle"},
	"communityNotes": {"type":"string","value":"Topluluk Notları"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Bu not yardımcı oldu mu?"},
	"communityNoteHelpful": {"type":"string","value":"Yardımcı oldu"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Biraz Yardımcı oldu"},
	"communityNoteNotHelpful": {"type":"string","value":"Yardımcı olmadı"},
	"cashtagComingSoon": {"type":"string","value":"Çok yakında"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Artık "]}
	},
	"grokAnswerFun": {"type":"string","value":"Yanıt Grok tarafından Eğlence Modu'nda verilmiştir"},
	"grokAnswer": {"type":"string","value":"Yanıt Grok tarafından verilmiştir"},
	"grokImageBy": {"type":"string","value":"Resim Grok tarafından oluşturuldu"},
	"grokShowMore": {"type":"string","value":"Daha fazla göster"},
	"grokCreateVersion": {"type":"string","value":"Grok ile kendi versiyonunu oluştur"},
	"grokAskYourself": {"type":"string","value":"Grok'a kendin sor"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web sayfası"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" gönderi"+r(e.count,"yi","")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" web sayfası ve gönderi"}
	},
	"mostRelevant": {"type":"string","value":"Alakalı"},
	"mostLiked": {"type":"string","value":"Beğeni"},
	"mostRecent": {"type":"string","value":"En yeni"},
	"sortReplies": {"type":"string","value":"Yanıtları sırala"},
	"lastEdited": {"type":"string","value":"Son düzenleme:"},
	"newPostVersion": {"type":"string","value":"Bu gönderinin yeni bir sürümü var."},
	"opensEditHistory": {"type":"string","value":"Düzenleme geçmişini açar"},
	"viewLatestPost": {"type":"string","value":"En yeni gönderileri gör"},
	"opensLatestPost": {"type":"string","value":"Bu gönderinin yeni sürümünü açar"},
	"mediaTaggedSelf": {"type":"string","value":"Sen"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," adlı kullanıcıdan"]}
	},
	"poll": {"type":"string","value":"Anket"},
	"viewPoll": {"type":"string","value":"Bu anketi göster"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount"],
		"value": function(e){return e.formattedCount+" oy"}
	},
	"pollEnded": {"type":"string","value":"Kesin sonuçlar"},
	"retweet": {"type":"string","value":"Retweet"},
	"unDoRetweet": {"type":"string","value":"Retweeti Geri Al"},
	"quoteTweet": {"type":"string","value":"Tweeti Alıntıla"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweetler"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Yanıtlar"},
	"profileTabTitleHighlights": {"type":"string","value":"Öne Çıkanlar"},
	"profileTabTitleMedia": {"type":"string","value":"Medya"},
	"profileTabTitleLikes": {"type":"string","value":"Beğeniler"},
	"following": {"type":"string","value":"Takip ediliyor"},
	"follow": {"type":"string","value":"Takip et"},
	"followBack": {"type":"string","value":"Geri takip et"},
	"followers": {"type":"string","value":"Takipçiler"},
	"followsYou": {"type":"string","value":"Seni takip ediyor"},
	"subscriptions": {"type":"string","value":"Abonelikler"},
	"unfollow": {"type":"string","value":"Takibi bırak"},
	"blocked": {"type":"string","value":"Engellendi"},
	"unblock": {"type":"string","value":"Engeli kaldır"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return e.joinDate+" tarihinde katıldı"}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," tarafından takip ediliyor"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," ve "," tarafından takip ediliyor"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["",", "," ve "," tarafından takip ediliyor"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["",", "," ve takip ettiğin diğer "," kişi tarafından takip ediliyor"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Tweet"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Beğeni"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" fotoğraf ve video"]}
	},
	"home": {"type":"string","value":"Anasayfa"},
	"explore": {"type":"string","value":"Keşfet"},
	"notifications": {"type":"string","value":"Bildirimler"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Takip et"+e.verb}
	},
	"chat": {"type":"string","value":"Sohbet"},
	"messages": {"type":"string","value":"Mesajlar"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Yer İşaretleri"},
	"jobs": {"type":"string","value":"İşler"},
	"business": {"type":"string","value":"Kurumsal"},
	"communities": {"type":"string","value":"Topluluk"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Onaylı Kuruluşlar"},
	"profile": {"type":"string","value":"Profilim"},
	"creatorStudio": {"type":"string","value":"İçerik Üreticisi Stüdyosu"},
	"lists": {"type":"string","value":"Liste"},
	"monetization": {"type":"string","value":"Para kazanma"},
	"ads": {"type":"string","value":"Reklamlar"},
	"createYourSpace": {"type":"string","value":"Sohbet Odanı oluştur"},
	"settingsAndPrivacy": {"type":"string","value":"Ayarlar ve gizlilik"},
	"moreMenu": {"type":"string","value":"Daha fazla"},
	"addAnExistingAccount": {"type":"string","value":"Var olan bir hesap ekle"},
	"manageAccounts": {"type":"string","value":"Hesapları yönet"},
	"switchToAccount": {
		"type": "webI18nFunction",
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
