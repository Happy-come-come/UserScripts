const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Для вас"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Підписки"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Закріплені"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s зробив(-ла) репост"},
	"replyAction": {"type":"string","value":"Відповісти"},
	"repostAction": {"type":"string","value":"Зробити репост"},
	"likeAction": {"type":"string","value":"Вподобати"},
	"bookmarkAction": {"type":"string","value":"Закладка"},
	"showMore": {"type":"string","value":"Показати більше"},
	"viewThread": {"type":"string","value":"Показати цей потік"},
	"previousImage": {"type":"string","value":"Попереднє зображення"},
	"nextImage": {"type":"string","value":"Наступне зображення"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["З "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+" із 5 зірок. Оцінок: "+e.appNumRatings}
	},
	"verifiedAccount": {"type":"string","value":"Підтверджені профілі"},
	"communityAdminBadge": {"type":"string","value":"Адмін"},
	"communityModeratorBadge": {"type":"string","value":"Модер"},
	"communityMemberBadge": {"type":"string","value":"Учасник"},
	"viewsLabel": {"type":"string","value":"перегл."},
	"viewQuotes": {"type":"string","value":"Переглянути цитати"},
	"viewActivity": {"type":"string","value":"Переглянути дії"},
	"communityNotes": {"type":"string","value":"Примітки"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Ця примітка корисна?"},
	"communityNoteHelpful": {"type":"string","value":"корисну"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"корисну певною мірою"},
	"communityNoteNotHelpful": {"type":"string","value":"некорисну"},
	"cashtagComingSoon": {"type":"string","value":"Незабаром"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Зараз по "]}
	},
	"grokAnswerFun": {"type":"string","value":"Відповідь від Grok у кумедному режимі"},
	"grokAnswer": {"type":"string","value":"Відповідь від Grok"},
	"grokImageBy": {"type":"string","value":"Зображення від Grok"},
	"grokShowMore": {"type":"string","value":"Показати більше"},
	"grokCreateVersion": {"type":"string","value":"Створити власну версію з Grok"},
	"grokAskYourself": {"type":"string","value":"Поставити Grok те саме запитання"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" веб-сторін"+n(e.count,"ки","ок","ка","ки")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" пост"+n(e.count,"и","ів","","и")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return"Веб-сторінок і постів: "+e.count}
	},
	"mostRelevant": {"type":"string","value":"Актуальні"},
	"mostLiked": {"type":"string","value":"Вподобання"},
	"mostRecent": {"type":"string","value":"Нещодавні"},
	"sortReplies": {"type":"string","value":"Сортувати відповіді"},
	"lastEdited": {"type":"string","value":"Востаннє змінено"},
	"newPostVersion": {"type":"string","value":"Є нова версія цього посту."},
	"opensEditHistory": {"type":"string","value":"Відкриває історію редагування"},
	"viewLatestPost": {"type":"string","value":"Переглянути останній пост"},
	"opensLatestPost": {"type":"string","value":"Відкриває нову версію цього посту"},
	"mediaTaggedSelf": {"type":"string","value":"Ви"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Від "]}
	},
	"poll": {"type":"string","value":"Опитування"},
	"viewPoll": {"type":"string","value":"Показати це опитування"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" голос"+n(e.count,"и","ів","","у")}
	},
	"pollEnded": {"type":"string","value":"Остаточні результати"},
	"retweet": {"type":"string","value":"Зробити репост"},
	"unDoRetweet": {"type":"string","value":"Скасувати репост"},
	"quoteTweet": {"type":"string","value":"Цитата"},
	"profileTabTitleTimeline": {"type":"string","value":"Пости"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Відповіді"},
	"profileTabTitleHighlights": {"type":"string","value":"Вибране"},
	"profileTabTitleMedia": {"type":"string","value":"Медіафайли"},
	"profileTabTitleLikes": {"type":"string","value":"Вподобання"},
	"following": {"type":"string","value":"Підписки"},
	"follow": {"type":"string","value":"Читати"},
	"followBack": {"type":"string","value":"Теж читати"},
	"followers": {"type":"string","value":"Читачі"},
	"followsYou": {"type":"string","value":"Читає вас"},
	"subscriptions": {"type":"string","value":"Передплати"},
	"unfollow": {"type":"string","value":"Не читати"},
	"blocked": {"type":"string","value":"Заблоковано"},
	"unblock": {"type":"string","value":"Розблокувати"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Дата приєднання: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," читає"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," і "," читають"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["",", "," і "," читають"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Читають ",", "," і ще "," з-поміж тих, кого ви читаєте"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" пост"+n(props.count,"и","ів","","у")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Уподобан"+n(props.count,"ня","ь","ня","ня")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" фото й відео"]}
	},
	"home": {"type":"string","value":"Головна"},
	"explore": {"type":"string","value":"Ознайомлення"},
	"notifications": {"type":"string","value":"Сповіщення"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Читати"+e.verb}
	},
	"chat": {"type":"string","value":"Чат"},
	"messages": {"type":"string","value":"Повідомлення"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Закладки"},
	"jobs": {"type":"string","value":"Вакансії"},
	"business": {"type":"string","value":"Компанія"},
	"communities": {"type":"string","value":"Спільнота"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Підтверджені організації"},
	"profile": {"type":"string","value":"Мій профіль"},
	"creatorStudio": {"type":"string","value":"Студія для творців"},
	"lists": {"type":"string","value":"Список"},
	"monetization": {"type":"string","value":"Монетизація"},
	"ads": {"type":"string","value":"Реклама"},
	"createYourSpace": {"type":"string","value":"Створіть власну аудіокімнату"},
	"settingsAndPrivacy": {"type":"string","value":"Налаштування та конфіденційність"},
	"moreMenu": {"type":"string","value":"Інші дії"},
	"addAnExistingAccount": {"type":"string","value":"Додати наявний профіль"},
	"manageAccounts": {"type":"string","value":"Керувати профілями"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Переключитися на @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Опублікувати пост"},
	"settings": {"type":"string","value":"Налаштування"},
	"now": {"type":"string","value":"Зараз"},
	"day": {"type":"string","value":"День"},
	"month": {"type":"string","value":"Місяць"},
	"year": {"type":"string","value":"Рік"},
	"january": {"type":"string","value":"Січень"},
	"february": {"type":"string","value":"Лютий"},
	"march": {"type":"string","value":"Березень"},
	"april": {"type":"string","value":"Квітень"},
	"may": {"type":"string","value":"Травень"},
	"june": {"type":"string","value":"Червень"},
	"july": {"type":"string","value":"Липень"},
	"august": {"type":"string","value":"Серпень"},
	"september": {"type":"string","value":"Вересень"},
	"october": {"type":"string","value":"Жовтень"},
	"november": {"type":"string","value":"Листопад"},
	"december": {"type":"string","value":"Грудень"}
};

export default text;
