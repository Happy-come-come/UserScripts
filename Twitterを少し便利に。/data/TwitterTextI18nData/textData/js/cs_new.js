const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Pro vás"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Sledování"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Připnuté"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"Uživatel %s retweetnul"},
	"replyAction": {"type":"string","value":"Odpovědět"},
	"repostAction": {"type":"string","value":"Repost"},
	"likeAction": {"type":"string","value":"Lajknout"},
	"bookmarkAction": {"type":"string","value":"Záložka"},
	"showMore": {"type":"string","value":"Zobrazit více"},
	"viewThread": {"type":"string","value":"Zobrazit toto vlákno"},
	"previousImage": {"type":"string","value":"Předchozí obrázek"},
	"nextImage": {"type":"string","value":"Další obrázek"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Od "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5,0 hvězd – "+e.appNumRatings+" hodnocení"}
	},
	"verifiedAccount": {"type":"string","value":"Ověřené účty"},
	"communityAdminBadge": {"type":"string","value":"Správce"},
	"communityModeratorBadge": {"type":"string","value":"Moder"},
	"communityMemberBadge": {"type":"string","value":"Člen"},
	"viewsLabel": {"type":"string","value":"zobrazení"},
	"viewQuotes": {"type":"string","value":"Zobrazit citace"},
	"viewActivity": {"type":"string","value":"Zobrazit aktivitu"},
	"communityNotes": {"type":"string","value":"Komunitní poznámky"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Je tato poznámka užitečná?"},
	"communityNoteHelpful": {"type":"string","value":"užitečnou"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"částečně užitečnou"},
	"communityNoteNotHelpful": {"type":"string","value":"neužitečnou"},
	"cashtagComingSoon": {"type":"string","value":"Připravujeme"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Nyní za "]}
	},
	"grokAnswerFun": {"type":"string","value":"Odpověděl Grok v režimu Zábava"},
	"grokAnswer": {"type":"string","value":"Odpověděl Grok"},
	"grokImageBy": {"type":"string","value":"Obrázek od funkce Grok"},
	"grokShowMore": {"type":"string","value":"Zobrazit více"},
	"grokCreateVersion": {"type":"string","value":"Vytvořte si svou verzi funkce Grok"},
	"grokAskYourself": {"type":"string","value":"Zeptejte se Grok na něco"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" webov"+r(e.count,"é stránky","é stránky","á stránka","ých stránek")}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" post"+r(e.count,"y","y","","y")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" webových stránek a postů"}
	},
	"mostRelevant": {"type":"string","value":"Související"},
	"mostLiked": {"type":"string","value":"Lajky"},
	"mostRecent": {"type":"string","value":"Poslední"},
	"sortReplies": {"type":"string","value":"Seřadit odpovědi"},
	"lastEdited": {"type":"string","value":"Poslední úprava"},
	"newPostVersion": {"type":"string","value":"Existuje nová verze tohoto postu."},
	"opensEditHistory": {"type":"string","value":"Otevře historii úprav"},
	"viewLatestPost": {"type":"string","value":"Zobrazit nejnovější post"},
	"opensLatestPost": {"type":"string","value":"Otevře novou verzi tohoto postu"},
	"mediaTaggedSelf": {"type":"string","value":"Vy"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Od uživatele "]}
	},
	"poll": {"type":"string","value":"Hlasování"},
	"viewPoll": {"type":"string","value":"Zobrazit toto hlasování"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" hlas"+r(e.count,"y","y","","ů")}
	},
	"pollEnded": {"type":"string","value":"Finální výsledky"},
	"retweet": {"type":"string","value":"Repost"},
	"unDoRetweet": {"type":"string","value":"Zrušit repost"},
	"quoteTweet": {"type":"string","value":"Citovat Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweety"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Odpovědi"},
	"profileTabTitleHighlights": {"type":"string","value":"Výběr"},
	"profileTabTitleMedia": {"type":"string","value":"Média"},
	"profileTabTitleLikes": {"type":"string","value":"Lajky"},
	"following": {"type":"string","value":"Sleduji"},
	"follow": {"type":"string","value":"Sledovat"},
	"followBack": {"type":"string","value":"Také sledovat"},
	"followers": {"type":"string","value":"Sledující"},
	"followsYou": {"type":"string","value":"vás sleduje"},
	"subscriptions": {"type":"string","value":"Předplatná"},
	"unfollow": {"type":"string","value":"Přestat sledovat"},
	"blocked": {"type":"string","value":"Blokovaný"},
	"unblock": {"type":"string","value":"Odblokovat"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"Uživatel se připojil "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Uživatele sleduje "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Uživatele sledují "," a "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Uživatel sledován uživateli ",", "," a "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Uživatele sledují uživatelé ",", "," a další uživatelé (","), které sledujete"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" post"+r(props.count,"y","y","","y")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Lajk"+r(props.count,"y","ů","","ů")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" fotografie a videa"]}
	},
	"home": {"type":"string","value":"Hlavní stránka"},
	"explore": {"type":"string","value":"Prozkoumat"},
	"notifications": {"type":"string","value":"Oznámení"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Sledovat"+e.verb}
	},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Zprávy"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Záložky"},
	"jobs": {"type":"string","value":"Práce"},
	"business": {"type":"string","value":"Firma"},
	"communities": {"type":"string","value":"Komunita"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Ověřené organizace"},
	"profile": {"type":"string","value":"Můj profil"},
	"creatorStudio": {"type":"string","value":"Tvůrčí studio"},
	"lists": {"type":"string","value":"Seznam"},
	"monetization": {"type":"string","value":"Monetizace"},
	"ads": {"type":"string","value":"Reklamy"},
	"createYourSpace": {"type":"string","value":"Vytvořte svůj Prostor"},
	"settingsAndPrivacy": {"type":"string","value":"Nastavení a soukromí"},
	"moreMenu": {"type":"string","value":"Víc"},
	"addAnExistingAccount": {"type":"string","value":"Přidat existující účet"},
	"manageAccounts": {"type":"string","value":"Spravovat účty"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Přepnout na účet @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Tweetnout"},
	"settings": {"type":"string","value":"Nastavení"},
	"now": {"type":"string","value":"Nyní"},
	"day": {"type":"string","value":"Den"},
	"month": {"type":"string","value":"Měsíc"},
	"year": {"type":"string","value":"Rok"},
	"january": {"type":"string","value":"leden"},
	"february": {"type":"string","value":"únor"},
	"march": {"type":"string","value":"březen"},
	"april": {"type":"string","value":"duben"},
	"may": {"type":"string","value":"květen"},
	"june": {"type":"string","value":"červen"},
	"july": {"type":"string","value":"červenec"},
	"august": {"type":"string","value":"srpen"},
	"september": {"type":"string","value":"září"},
	"october": {"type":"string","value":"říjen"},
	"november": {"type":"string","value":"listopad"},
	"december": {"type":"string","value":"prosinec"}
};

export default text;
