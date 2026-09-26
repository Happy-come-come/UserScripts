const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(t){return"Sinulle"+t.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(t){return"Seurataan"+t.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Kiinnitetyt"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s uudelleentwiittasi"},
	"replyAction": {"type":"string","value":"Vastaa"},
	"repostAction": {"type":"string","value":"Uudelleenjulkaise"},
	"likeAction": {"type":"string","value":"Tykkää"},
	"bookmarkAction": {"type":"string","value":"Lisää kirjanmerkkeihin"},
	"showMore": {"type":"string","value":"Näytä lisää"},
	"viewThread": {"type":"string","value":"Näytä tämä ketju"},
	"previousImage": {"type":"string","value":"Edellinen kuva"},
	"nextImage": {"type":"string","value":"Seuraava kuva"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Lähteestä "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(a){return a.appStarRating+"/5.0 tähteä – "+a.appNumRatings+" arvostelua"}
	},
	"verifiedAccount": {"type":"string","value":"Varmennetut tilit"},
	"communityAdminBadge": {"type":"string","value":"Järj.valv."},
	"communityModeratorBadge": {"type":"string","value":"Mod"},
	"communityMemberBadge": {"type":"string","value":"Jäsen"},
	"viewsLabel": {"type":"string","value":"näyttöä"},
	"viewQuotes": {"type":"string","value":"Näytä lainaukset"},
	"viewActivity": {"type":"string","value":"Näytä toiminnat"},
	"communityNotes": {"type":"string","value":"Yhteisöhuomautukset"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Onko tämä huomautus hyödyllinen?"},
	"communityNoteHelpful": {"type":"string","value":"hyödylliseksi"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"jossain määrin hyödylliseksi"},
	"communityNoteNotHelpful": {"type":"string","value":"hyödyttömäksi"},
	"cashtagComingSoon": {"type":"string","value":"Tulossa pian"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Nyt hintaan "]}
	},
	"grokAnswerFun": {"type":"string","value":"Grokin vastaus hupailutilassa"},
	"grokAnswer": {"type":"string","value":"Grokin vastaus"},
	"grokImageBy": {"type":"string","value":"Kuvan muodosti Grok"},
	"grokShowMore": {"type":"string","value":"Näytä lisää"},
	"grokCreateVersion": {"type":"string","value":"Laadi oma versio Grokin avulla"},
	"grokAskYourself": {"type":"string","value":"Kysy itse Grokilta"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" verkkosivu"+s(a.count,"","a")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" "+s(a.count,"julkaisu","uutta julkaisua")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(a){return a.count+" verkkosivua ja julkaisua"}
	},
	"mostRelevant": {"type":"string","value":"Relevantti"},
	"mostLiked": {"type":"string","value":"Tykkäykset"},
	"mostRecent": {"type":"string","value":"Uusimmat"},
	"sortReplies": {"type":"string","value":"Lajittele vastaukset"},
	"lastEdited": {"type":"string","value":"Muokattu viimeksi"},
	"newPostVersion": {"type":"string","value":"Tästä julkaisusta on saatavana uusi versio."},
	"opensEditHistory": {"type":"string","value":"Avaa muokkaushistorian"},
	"viewLatestPost": {"type":"string","value":"Näytä uusin julkaisu"},
	"opensLatestPost": {"type":"string","value":"Avaa uuden version tästä julkaisusta"},
	"mediaTaggedSelf": {"type":"string","value":"Sinä"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Käyttäjältä "]}
	},
	"poll": {"type":"string","value":"Kysely"},
	"viewPoll": {"type":"string","value":"Näytä tämä kysely"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(t){return t.formattedCount+" ään"+n(t.count,"i","tä")}
	},
	"pollEnded": {"type":"string","value":"Lopulliset tulokset"},
	"retweet": {"type":"string","value":"Uudelleentwiittaa"},
	"unDoRetweet": {"type":"string","value":"Kumoa uudelleentwiittaus"},
	"quoteTweet": {"type":"string","value":"Lainaa twiittiä"},
	"profileTabTitleTimeline": {"type":"string","value":"Twiitit"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Vastaukset"},
	"profileTabTitleHighlights": {"type":"string","value":"Kohokohdat"},
	"profileTabTitleMedia": {"type":"string","value":"Media"},
	"profileTabTitleLikes": {"type":"string","value":"Tykkäykset"},
	"following": {"type":"string","value":"Seurataan"},
	"follow": {"type":"string","value":"Seuraa"},
	"followBack": {"type":"string","value":"Seuraa takaisin"},
	"followers": {"type":"string","value":"Seuraajat"},
	"followsYou": {"type":"string","value":"Seuraa sinua"},
	"subscriptions": {"type":"string","value":"Tilaukset"},
	"unfollow": {"type":"string","value":"Älä seuraa"},
	"blocked": {"type":"string","value":"Estetty"},
	"unblock": {"type":"string","value":"Poista esto"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(t){return"Liittyi "+t.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Seuraajana "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Seuraajina "," ja "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Seuraajina ",", "," ja "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Seuraajina ",", "," ja "," muuta, joita seuraat"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" twiitti"+n(props.count,"","ä")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" tykkäys"+n(props.count,"","tä")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" kuvaa ja videota"]}
	},
	"home": {"type":"string","value":"Etusivu"},
	"explore": {"type":"string","value":"Selaa"},
	"notifications": {"type":"string","value":"Ilmoitukset"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(a){return"Seuraa"+a.verb}
	},
	"chat": {"type":"string","value":"Keskustelu"},
	"messages": {"type":"string","value":"Viestit"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Kirjanmerkit"},
	"jobs": {"type":"string","value":"Työpaikat"},
	"business": {"type":"string","value":"Yritys"},
	"communities": {"type":"string","value":"Yhteisö"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Varmennetut organisaatiot"},
	"profile": {"type":"string","value":"Oma profiili"},
	"creatorStudio": {"type":"string","value":"Creator Studio"},
	"lists": {"type":"string","value":"Lista"},
	"monetization": {"type":"string","value":"Kaupallinen käyttö"},
	"ads": {"type":"string","value":"Mainokset"},
	"createYourSpace": {"type":"string","value":"Perusta Huone"},
	"settingsAndPrivacy": {"type":"string","value":"Asetukset ja yksityisyys"},
	"moreMenu": {"type":"string","value":"Lisää"},
	"addAnExistingAccount": {"type":"string","value":"Lisää olemassa oleva tili"},
	"manageAccounts": {"type":"string","value":"Hallitse tilejä"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(t){return"Vaihda tiliin @"+t.screenName}
	},
	"postTweet": {"type":"string","value":"Twiittaa"},
	"settings": {"type":"string","value":"Asetukset"},
	"now": {"type":"string","value":"Nyt"},
	"day": {"type":"string","value":"Päivä"},
	"month": {"type":"string","value":"Kuukausi"},
	"year": {"type":"string","value":"Vuosi"},
	"january": {"type":"string","value":"tammikuu"},
	"february": {"type":"string","value":"helmikuu"},
	"march": {"type":"string","value":"maaliskuu"},
	"april": {"type":"string","value":"huhtikuu"},
	"may": {"type":"string","value":"toukokuu"},
	"june": {"type":"string","value":"kesäkuu"},
	"july": {"type":"string","value":"heinäkuu"},
	"august": {"type":"string","value":"elokuu"},
	"september": {"type":"string","value":"syyskuu"},
	"october": {"type":"string","value":"lokakuu"},
	"november": {"type":"string","value":"marraskuu"},
	"december": {"type":"string","value":"joulukuu"}
};

export default text;
