const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"За теб"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Следван(а)"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Закачени"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s ретуитна"},
	"retweet": {"type":"string","value":"Ретуитване"},
	"unDoRetweet": {"type":"string","value":"Отмяна на ретуитването"},
	"quoteTweet": {"type":"string","value":"Цитиране на туита"},
	"profileTabTitleTimeline": {"type":"string","value":"Туитове"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Отговори"},
	"profileTabTitleHighlights": {"type":"string","value":"Акценти"},
	"profileTabTitleMedia": {"type":"string","value":"Мултимедийно съдържание"},
	"profileTabTitleLikes": {"type":"string","value":"Харесвания"},
	"following": {"type":"string","value":"Следвано"},
	"unfollow": {"type":"string","value":"Спиране на следването"},
	"blocked": {"type":"string","value":"Блокиран/а"},
	"unblock": {"type":"string","value":"Разблокиране"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Присъединяване: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Следван/а от "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Следван/а от "," и "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Следван/а от ",", "," и "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Следван/а от ",", "," и още ",", които следваш"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" туит"+n(props.count,"","а")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" харесван"+n(props.count,"е","ия")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" снимки и видеоклипове"]}
	},
	"home": {"type":"string","value":"Начало"},
	"search": {"type":"string","value":"Изследване"},
	"notifications": {"type":"string","value":"Известия"},
	"messages": {"type":"string","value":"Съобщения"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Отметки"},
	"jobs": {"type":"string","value":"Кариери"},
	"communities": {"type":"string","value":"Общност"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Потвърдени организации"},
	"profile": {"type":"string","value":"Моят профил"},
	"lists": {"type":"string","value":"Списък"},
	"monetization": {"type":"string","value":"Монетизация"},
	"ads": {"type":"string","value":"Реклами"},
	"createYourSpace": {"type":"string","value":"Създаване на твоя зала"},
	"settingsAndPrivacy": {"type":"string","value":"Настройки и поверителност"},
	"addAnExistingAccount": {"type":"string","value":"Добавяне на съществуващ профил"},
	"manageAccounts": {"type":"string","value":"Управление на профилите"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Превключване към @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Туит"},
	"settings": {"type":"string","value":"Настройки"},
	"now": {"type":"string","value":"Сега"},
	"day": {"type":"string","value":"Ден"},
	"month": {"type":"string","value":"Месец"},
	"year": {"type":"string","value":"Година"},
	"january": {"type":"string","value":"януари"},
	"february": {"type":"string","value":"февруари"},
	"march": {"type":"string","value":"март"},
	"april": {"type":"string","value":"април"},
	"may": {"type":"string","value":"май"},
	"june": {"type":"string","value":"юни"},
	"july": {"type":"string","value":"юли"},
	"august": {"type":"string","value":"август"},
	"september": {"type":"string","value":"септември"},
	"october": {"type":"string","value":"октомври"},
	"november": {"type":"string","value":"ноември"},
	"december": {"type":"string","value":"декември"}
};

export default text;