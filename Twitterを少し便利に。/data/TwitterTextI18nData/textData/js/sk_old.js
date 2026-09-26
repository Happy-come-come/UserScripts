const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Pre vás"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Sledujem"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Pripnuté"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"Retweetol používateľ %s"},
	"replyAction": {"type":"string","value":"Odpovedať"},
	"repostAction": {"type":"string","value":"Opätovné uverejnenie"},
	"likeAction": {"type":"string","value":"Páči sa"},
	"bookmarkAction": {"type":"string","value":"Uložiť ako záložku"},
	"showMore": {"type":"string","value":"Zobraziť viac"},
	"viewThread": {"type":"string","value":"Zobraziť toto vlákno"},
	"previousImage": {"type":"string","value":"Predchádzajúci obrázok"},
	"nextImage": {"type":"string","value":"Nasledujúci obrázok"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Z adresy "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+" z 5 hviezdičiek – počet hodnotení: "+e.appNumRatings}
	},
	"verifiedAccount": {"type":"string","value":"Overené účty"},
	"communityAdminBadge": {"type":"string","value":"Spr."},
	"communityModeratorBadge": {"type":"string","value":"Mod."},
	"communityMemberBadge": {"type":"string","value":"Členstvo:"},
	"viewsLabel": {"type":"string","value":"zobr."},
	"viewQuotes": {"type":"string","value":"Zobraziť citácie"},
	"viewActivity": {"type":"string","value":"Zobraziť aktivitu"},
	"communityNotes": {"type":"string","value":"Poznámky komunity"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Je táto poznámka užitočná?"},
	"communityNoteHelpful": {"type":"string","value":"užitočnú"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"čiastočne užitočnú"},
	"communityNoteNotHelpful": {"type":"string","value":"neužitočnú"},
	"cashtagComingSoon": {"type":"string","value":"Už čoskoro"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Teraz za "]}
	},
	"grokAnswerFun": {"type":"string","value":"Odpoveď od Groka v zábavnom režime"},
	"grokAnswer": {"type":"string","value":"Odpoveď od Groka"},
	"grokImageBy": {"type":"string","value":"Obrázok od Groka"},
	"grokShowMore": {"type":"string","value":"Zobraziť viac"},
	"grokCreateVersion": {"type":"string","value":"Vytvorte si svoju verziu pomocou Groka"},
	"grokAskYourself": {"type":"string","value":"Spýtajte sa Groka"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" webov"+i(e.count,"é stránky","é stránky","á stránka","é stránky")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" príspev"+i(e.count,"ky","ku","ok","ku")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return"Webové stránky a príspevky: "+e.count}
	},
	"mostRelevant": {"type":"string","value":"Relevantné"},
	"mostLiked": {"type":"string","value":"Páči sa"},
	"mostRecent": {"type":"string","value":"Nedávne"},
	"sortReplies": {"type":"string","value":"Zoradiť odpovede"},
	"lastEdited": {"type":"string","value":"Naposledy upravené"},
	"newPostVersion": {"type":"string","value":"K dispozícii je nová verzia tohto príspevku."},
	"opensEditHistory": {"type":"string","value":"Otvorí históriu úprav"},
	"viewLatestPost": {"type":"string","value":"Zobraziť najnovší príspevok"},
	"opensLatestPost": {"type":"string","value":"Otvorí novú verziu tohto príspevku"},
	"mediaTaggedSelf": {"type":"string","value":"Vy"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Od používateľa "]}
	},
	"poll": {"type":"string","value":"Hlasovanie"},
	"viewPoll": {"type":"string","value":"Zobraziť toto hlasovanie"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" hlas"+n(e.count,"y","u","","ov")}
	},
	"pollEnded": {"type":"string","value":"Konečné výsledky"},
	"retweet": {"type":"string","value":"Retweetnuť"},
	"unDoRetweet": {"type":"string","value":"Zrušiť retweet"},
	"quoteTweet": {"type":"string","value":"Citovať Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweety"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Odpovede"},
	"profileTabTitleHighlights": {"type":"string","value":"Výber"},
	"profileTabTitleMedia": {"type":"string","value":"Médiá"},
	"profileTabTitleLikes": {"type":"string","value":"Páči sa"},
	"following": {"type":"string","value":"Sledujem"},
	"follow": {"type":"string","value":"Sledovať"},
	"followBack": {"type":"string","value":"Sledovať tiež"},
	"followers": {"type":"string","value":"Sledujúci"},
	"followsYou": {"type":"string","value":"Vás sleduje"},
	"subscriptions": {"type":"string","value":"Predplatné"},
	"unfollow": {"type":"string","value":"Nesledovať"},
	"blocked": {"type":"string","value":"Zablokovaný"},
	"unblock": {"type":"string","value":"Odblokovať"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Pripojil/-a sa "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Sleduje používateľ "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Sledujú používatelia "," a "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Sledujú používatelia ",", "," a "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Sledujú používatelia ",", "," a ďalší (","), ktorých sledujete"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Tweet"+n(props.count,"y","u","","ov")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" označen"+n(props.count,"ia","ia","ie","í")+" Páči sa"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" fot"+i(props.count,"ky a videá","ky a videa","ka a video","iek a videí")]}
	},
	"home": {"type":"string","value":"Domov"},
	"explore": {"type":"string","value":"Preskúmať"},
	"notifications": {"type":"string","value":"Notifikácie"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Sledovať"+e.verb}
	},
	"chat": {"type":"string","value":"Četovať"},
	"messages": {"type":"string","value":"Správy"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Záložky"},
	"jobs": {"type":"string","value":"Pracovné miesta"},
	"business": {"type":"string","value":"Firma"},
	"communities": {"type":"string","value":"Komunita"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Overené organizácie"},
	"profile": {"type":"string","value":"Môj profil"},
	"creatorStudio": {"type":"string","value":"Creator Studio"},
	"lists": {"type":"string","value":"Zoznam"},
	"monetization": {"type":"string","value":"Speňažovanie"},
	"ads": {"type":"string","value":"Reklamy"},
	"createYourSpace": {"type":"string","value":"Vytvoriť priestor"},
	"settingsAndPrivacy": {"type":"string","value":"Nastavenia a súkromie"},
	"moreMenu": {"type":"string","value":"Viac"},
	"addAnExistingAccount": {"type":"string","value":"Pridať existujúci účet"},
	"manageAccounts": {"type":"string","value":"Spravovať účty"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Prepnúť na účet @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweetnuť"},
	"settings": {"type":"string","value":"Nastavenia"},
	"now": {"type":"string","value":"Teraz"},
	"day": {"type":"string","value":"Deň"},
	"month": {"type":"string","value":"Mesiac"},
	"year": {"type":"string","value":"Rok"},
	"january": {"type":"string","value":"január"},
	"february": {"type":"string","value":"február"},
	"march": {"type":"string","value":"marec"},
	"april": {"type":"string","value":"apríl"},
	"may": {"type":"string","value":"máj"},
	"june": {"type":"string","value":"jún"},
	"july": {"type":"string","value":"júl"},
	"august": {"type":"string","value":"august"},
	"september": {"type":"string","value":"september"},
	"october": {"type":"string","value":"október"},
	"november": {"type":"string","value":"november"},
	"december": {"type":"string","value":"december"}
};

export default text;
