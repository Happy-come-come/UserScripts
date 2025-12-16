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
	"retweet": {"type":"string","value":"Зробити репост"},
	"unDoRetweet": {"type":"string","value":"Скасувати репост"},
	"quoteTweet": {"type":"string","value":"Цитата"},
	"profileTabTitleTimeline": {"type":"string","value":"Пости"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Відповіді"},
	"profileTabTitleHighlights": {"type":"string","value":"Вибране"},
	"profileTabTitleMedia": {"type":"string","value":"Медіафайли"},
	"profileTabTitleLikes": {"type":"string","value":"Вподобання"},
	"following": {"type":"string","value":"Підписки"},
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
		"value": function(){return[""," читає"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," і "," читають"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", "," і "," читають"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Читають ",", "," і ще "," з-поміж тих, кого ви читаєте"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" пост"+f(props.count,"и","ів","","у")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Уподобан"+f(props.count,"ня","ь","ня","ня")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" фото й відео"]}
	},
	"home": {"type":"string","value":"Головна"},
	"explore": {"type":"string","value":"Ознайомлення"},
	"notifications": {"type":"string","value":"Сповіщення"},
	"connect_people": {"type":"string","value":"Зв’язки"},
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
