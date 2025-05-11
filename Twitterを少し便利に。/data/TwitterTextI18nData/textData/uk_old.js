const text = {
	"forYouTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Для вас"+e.noun}
	},
	"followingTab": {
		"type": "function",
		"arguments": ["noun"],
		"value": function(e){return"Стрічка підписок"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Закріплені"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s ретвітнув(ла)"},
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"Скасувати ретвіт"},
	"quoteTweet": {"type":"string","value":"Цитувати твіт"},
	"profileTabTitleTimeline": {"type":"string","value":"Твіти"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Відповіді"},
	"profileTabTitleHighlights": {"type":"string","value":"Вибране"},
	"profileTabTitleMedia": {"type":"string","value":"Медіафайли"},
	"profileTabTitleLikes": {"type":"string","value":"Вподобання"},
	"following": {"type":"string","value":"Стрічка"},
	"unfollow": {"type":"string","value":"Не читати"},
	"blocked": {"type":"string","value":"Заблоковано"},
	"unblock": {"type":"string","value":"Розблокувати"},
	"joinDateFrom": {
		"type": "function",
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
		"value": function(){return[props.formattedCount+" Твіт"+n(props.count,"и","ів","","а")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Уподобан"+n(props.count,"ня","ь","ня","ня")]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"Головна"},
	"search": {"type":"string","value":"Ознайомлення"},
	"notifications": {"type":"string","value":"Сповіщення"},
	"messages": {"type":"string","value":"Повідомлення"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"Закладки"},
	"jobs": {"type":"string","value":"Вакансії"},
	"communities": {"type":"string","value":"Спільнота"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"Підтверджені організації"},
	"profile": {"type":"string","value":"Мій профіль"},
	"lists": {"type":"string","value":"Список"},
	"monetization": {"type":"string","value":"Монетизація"},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"Налаштування та конфіденційність"},
	"addAnExistingAccount": {"type":"string","value":"Додати наявний профіль"},
	"manageAccounts": {"type":"string","value":"Керувати профілями"},
	"switchToAccount": {
		"type": "function",
		"arguments": ["screenName"],
		"value": function(e){return"Переключитися на @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Твітнути"},
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