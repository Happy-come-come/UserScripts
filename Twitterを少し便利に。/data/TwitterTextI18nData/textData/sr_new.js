const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"За тебе"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Праћење"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Закачено"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"Поново објавио корисник %s"},
	"retweet": {"type":"string","value":"Поново објави"},
	"unDoRetweet": {"type":"string","value":"Опозови поновну објаву"},
	"quoteTweet": {"type":"string","value":"Цитат"},
	"profileTabTitleTimeline": {"type":"string","value":"Објаве"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Одговори"},
	"profileTabTitleHighlights": {"type":"string","value":"Истакнуто"},
	"profileTabTitleMedia": {"type":"string","value":"Медији"},
	"profileTabTitleLikes": {"type":"string","value":"Свиђања"},
	"following": {"type":"string","value":"Пратиш"},
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
		"value": function(){return["Овог корисника прати "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Овог корисника прате "," и "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Овог корисника прате ",", "," и "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Овог корисника прате ",", "," и "," других које ти пратиш"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" објав"+f(props.count,"е","а","а")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" свиђањ"+f(props.count,"а","е","а")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" "+f(props.count,"фотографије и видео записа","фотографија и видео запис","Фотографија и видео записа")]}
	},
	"home": {"type":"string","value":"Почетна"},
	"search": {"type":"string","value":"Истражи"},
	"notifications": {"type":"string","value":"Обавештења"},
	"messages": {"type":"string","value":"Поруке"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Обележивачи"},
	"jobs": {"type":"string","value":"Послови"},
	"communities": {"type":"string","value":"Заједница"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Потврђене организације"},
	"profile": {"type":"string","value":"Мој профил"},
	"lists": {"type":"string","value":"Листа"},
	"monetization": {"type":"string","value":"Монетизација"},
	"ads": {"type":"string","value":"Огласи"},
	"createYourSpace": {"type":"string","value":"Направи простор"},
	"settingsAndPrivacy": {"type":"string","value":"Подешавања и приватност"},
	"addAnExistingAccount": {"type":"string","value":"Додај постојећи налог"},
	"manageAccounts": {"type":"string","value":"Управљај налозима"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Пређи на налог @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Објави"},
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