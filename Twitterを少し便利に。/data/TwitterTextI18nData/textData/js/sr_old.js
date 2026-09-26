const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"За тебе"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Пратиш"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Закачено"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s је ретвитовао/ла"},
	"replyAction": {"type":"string","value":"Одговори"},
	"repostAction": {"type":"string","value":"Поново објави"},
	"likeAction": {"type":"string","value":"Свиђа ми се"},
	"bookmarkAction": {"type":"string","value":"Обележивач"},
	"showMore": {"type":"string","value":"Прикажи још"},
	"viewThread": {"type":"string","value":"Прикажи овај низ"},
	"previousImage": {"type":"string","value":"Претходна слика"},
	"nextImage": {"type":"string","value":"Следећа слика"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Од "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5.0 звезда – "+e.appNumRatings+" оцена"}
	},
	"verifiedAccount": {"type":"string","value":"Потврђени налози"},
	"communityAdminBadge": {"type":"string","value":"Админ"},
	"communityModeratorBadge": {"type":"string","value":"Мод."},
	"communityMemberBadge": {"type":"string","value":"Члан"},
	"viewsLabel": {"type":"string","value":"прегледа"},
	"viewQuotes": {"type":"string","value":"Прикажи цитате"},
	"viewActivity": {"type":"string","value":"Прикажи активност"},
	"communityNotes": {"type":"string","value":"Белешке заједнице"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Да ли је ова белешка корисна?"},
	"communityNoteHelpful": {"type":"string","value":"корисну"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"донекле корисну"},
	"communityNoteNotHelpful": {"type":"string","value":"није корисна"},
	"cashtagComingSoon": {"type":"string","value":"Ускоро"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Тренутна цена: "]}
	},
	"grokAnswerFun": {"type":"string","value":"Одговоре обезбеђује Grok у забавном режиму"},
	"grokAnswer": {"type":"string","value":"Одговоре обезбеђује Grok"},
	"grokImageBy": {"type":"string","value":"Слику обезбеђује Grok"},
	"grokShowMore": {"type":"string","value":"Прикажи још"},
	"grokCreateVersion": {"type":"string","value":"Креирај сопствену верзију уз Grok"},
	"grokAskYourself": {"type":"string","value":"Самостално питај Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" веб-страниц"+n(e.count,"е","а","а")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" објав"+n(e.count,"е","а","а")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return"Број веб страница и објава: "+e.count}
	},
	"mostRelevant": {"type":"string","value":"Релевантно"},
	"mostLiked": {"type":"string","value":"Свиђања"},
	"mostRecent": {"type":"string","value":"Недавни"},
	"sortReplies": {"type":"string","value":"Сортирање одговора"},
	"lastEdited": {"type":"string","value":"Последњи пут измењено"},
	"newPostVersion": {"type":"string","value":"Постоји нова верзија ове објаве."},
	"opensEditHistory": {"type":"string","value":"Отвара историју измена"},
	"viewLatestPost": {"type":"string","value":"Погледај најновију објаву"},
	"opensLatestPost": {"type":"string","value":"Отвара нову верзију ове објаве"},
	"mediaTaggedSelf": {"type":"string","value":"Ти"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Од корисника "]}
	},
	"poll": {"type":"string","value":"Анкета"},
	"viewPoll": {"type":"string","value":"Прикажи ову анкету"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" глас"+n(e.count,"а","","ова")}
	},
	"pollEnded": {"type":"string","value":"Коначни резултат"},
	"retweet": {"type":"string","value":"Ретвитуј"},
	"unDoRetweet": {"type":"string","value":"Опозови ретвит"},
	"quoteTweet": {"type":"string","value":"Цитирај твит"},
	"profileTabTitleTimeline": {"type":"string","value":"Твитови"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Одговори"},
	"profileTabTitleHighlights": {"type":"string","value":"Истакнуто"},
	"profileTabTitleMedia": {"type":"string","value":"Медији"},
	"profileTabTitleLikes": {"type":"string","value":"Свиђања"},
	"following": {"type":"string","value":"Пратиш"},
	"follow": {"type":"string","value":"Прати"},
	"followBack": {"type":"string","value":"Прати и ти"},
	"followers": {"type":"string","value":"Пратилаца"},
	"followsYou": {"type":"string","value":"Прати те"},
	"subscriptions": {"type":"string","value":"Претплате"},
	"unfollow": {"type":"string","value":"Не прати"},
	"blocked": {"type":"string","value":"Блокиран/а"},
	"unblock": {"type":"string","value":"Одблокирај"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Датум придруживања: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Овог корисника прати "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Овог корисника прате "," и "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Овог корисника прате ",", "," и "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Овог корисника прате ",", "," и "," других које ти пратиш"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" твит"+n(props.count,"а","","ова")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" свиђањ"+n(props.count,"а","е","а")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" "+n(props.count,"фотографије и видео записа","фотографија и видео запис","Фотографија и видео записа")]}
	},
	"home": {"type":"string","value":"Почетна"},
	"explore": {"type":"string","value":"Истражи"},
	"notifications": {"type":"string","value":"Обавештења"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Прати"+e.verb}
	},
	"chat": {"type":"string","value":"Ћаскање"},
	"messages": {"type":"string","value":"Поруке"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Обележивачи"},
	"jobs": {"type":"string","value":"Послови"},
	"business": {"type":"string","value":"Пословање"},
	"communities": {"type":"string","value":"Заједница"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Потврђене организације"},
	"profile": {"type":"string","value":"Мој профил"},
	"creatorStudio": {"type":"string","value":"Студио за ауторе"},
	"lists": {"type":"string","value":"Листа"},
	"monetization": {"type":"string","value":"Монетизација"},
	"ads": {"type":"string","value":"Огласи"},
	"createYourSpace": {"type":"string","value":"Направи простор"},
	"settingsAndPrivacy": {"type":"string","value":"Подешавања и приватност"},
	"moreMenu": {"type":"string","value":"Још"},
	"addAnExistingAccount": {"type":"string","value":"Додај постојећи налог"},
	"manageAccounts": {"type":"string","value":"Управљај налозима"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Пређи на налог @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Твит"},
	"settings": {"type":"string","value":"Подешавања"},
	"now": {"type":"string","value":"Сада"},
	"day": {"type":"string","value":"Дан"},
	"month": {"type":"string","value":"Месец"},
	"year": {"type":"string","value":"Година"},
	"january": {"type":"string","value":"Јануар"},
	"february": {"type":"string","value":"Фебруар"},
	"march": {"type":"string","value":"Март"},
	"april": {"type":"string","value":"Април"},
	"may": {"type":"string","value":"Мај"},
	"june": {"type":"string","value":"Јун"},
	"july": {"type":"string","value":"Јул"},
	"august": {"type":"string","value":"Август"},
	"september": {"type":"string","value":"Септембар"},
	"october": {"type":"string","value":"Октобар"},
	"november": {"type":"string","value":"Новембар"},
	"december": {"type":"string","value":"Децембар"}
};

export default text;
