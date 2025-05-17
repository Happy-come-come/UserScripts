const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Для вас"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Вы читаете"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Закрепленные"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s сделал(а) репост"},
	"retweet": {"type":"string","value":"Сделать репост"},
	"unDoRetweet": {"type":"string","value":"Отменить репост"},
	"quoteTweet": {"type":"string","value":"Цитата"},
	"profileTabTitleTimeline": {"type":"string","value":"Посты"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Ответы"},
	"profileTabTitleHighlights": {"type":"string","value":"Избранное"},
	"profileTabTitleMedia": {"type":"string","value":"Медиа"},
	"profileTabTitleLikes": {"type":"string","value":"Нравится"},
	"following": {"type":"string","value":"Читаю"},
	"unfollow": {"type":"string","value":"Перестать читать"},
	"blocked": {"type":"string","value":"В черном списке"},
	"unblock": {"type":"string","value":"Убрать из черного списка"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Регистрация: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["В читаемых у "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["В читаемых у "," и "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["В читаемых у ",", "," и "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["В читаемых у ",", "," и еще "," пользователей, которых вы читаете"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" пост"+f(props.count,"а","ов","","а")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" отмет"+f(props.count,"ки","ок","ка","ки")+" «Нравится»"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" фото и видео"]}
	},
	"home": {"type":"string","value":"Главная"},
	"explore": {"type":"string","value":"Обзор"},
	"notifications": {"type":"string","value":"Уведомления"},
	"messages": {"type":"string","value":"Сообщения"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Закладки"},
	"jobs": {"type":"string","value":"Вакансии"},
	"communities": {"type":"string","value":"Сообщество"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Подлинные организации"},
	"profile": {"type":"string","value":"Мой профиль"},
	"lists": {"type":"string","value":"Список"},
	"monetization": {"type":"string","value":"Монетизация"},
	"ads": {"type":"string","value":"Реклама"},
	"createYourSpace": {"type":"string","value":"Создать аудиокомнату"},
	"settingsAndPrivacy": {"type":"string","value":"Настройки и конфиденциальность"},
	"moreMenu": {"type":"string","value":"Ещё"},
	"addAnExistingAccount": {"type":"string","value":"Добавить существующую учетную запись"},
	"manageAccounts": {"type":"string","value":"Управление учетными записями"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Переключиться на учетную запись @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Опубликовать пост"},
	"settings": {"type":"string","value":"Настройки"},
	"now": {"type":"string","value":"Сейчас"},
	"day": {"type":"string","value":"День"},
	"month": {"type":"string","value":"Месяц"},
	"year": {"type":"string","value":"Год"},
	"january": {"type":"string","value":"января"},
	"february": {"type":"string","value":"февраля"},
	"march": {"type":"string","value":"марта"},
	"april": {"type":"string","value":"апреля"},
	"may": {"type":"string","value":"мая"},
	"june": {"type":"string","value":"июня"},
	"july": {"type":"string","value":"июля"},
	"august": {"type":"string","value":"августа"},
	"september": {"type":"string","value":"сентября"},
	"october": {"type":"string","value":"октября"},
	"november": {"type":"string","value":"ноября"},
	"december": {"type":"string","value":"декабря"}
};

export default text;