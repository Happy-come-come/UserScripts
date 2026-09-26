const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Pentru tine"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"Urmărești"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Fixate"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s a redistribuit"},
	"replyAction": {"type":"string","value":"Răspunde"},
	"repostAction": {"type":"string","value":"Repostează"},
	"likeAction": {"type":"string","value":"Apreciază"},
	"bookmarkAction": {"type":"string","value":"Marcaj"},
	"showMore": {"type":"string","value":"Arată mai multe"},
	"viewThread": {"type":"string","value":"Afișează acest fir"},
	"previousImage": {"type":"string","value":"Imaginea anterioară"},
	"nextImage": {"type":"string","value":"Imaginea următoare"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["De la "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5.0 stele – "+e.appNumRatings+" evaluări"}
	},
	"verifiedAccount": {"type":"string","value":"Conturi verificate"},
	"communityAdminBadge": {"type":"string","value":"Admin"},
	"communityModeratorBadge": {"type":"string","value":"Mod."},
	"communityMemberBadge": {"type":"string","value":"Membru al"},
	"viewsLabel": {"type":"string","value":"vizualizări"},
	"viewQuotes": {"type":"string","value":"Vezi citări"},
	"viewActivity": {"type":"string","value":"Vezi activitatea"},
	"communityNotes": {"type":"string","value":"Notele Comunității"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"Nota este utilă?"},
	"communityNoteHelpful": {"type":"string","value":"Utilă"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"Oarecum utilă"},
	"communityNoteNotHelpful": {"type":"string","value":"Inutilă"},
	"cashtagComingSoon": {"type":"string","value":"În curând"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Acum la "]}
	},
	"grokAnswerFun": {"type":"string","value":"Răspuns de la Grok în modul distractiv"},
	"grokAnswer": {"type":"string","value":"Răspuns de la Grok"},
	"grokImageBy": {"type":"string","value":"Imagine generată de Grok"},
	"grokShowMore": {"type":"string","value":"Arată mai multe"},
	"grokCreateVersion": {"type":"string","value":"Creează o versiune proprie cu Grok"},
	"grokAskYourself": {"type":"string","value":"Întreabă-l pe Grok"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" pagin"+n(e.count,"i","ă","i")+" web"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" post"+n(e.count,"ări","are","ări")}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" pagini web și postări"}
	},
	"mostRelevant": {"type":"string","value":"Relevante"},
	"mostLiked": {"type":"string","value":"Aprecieri"},
	"mostRecent": {"type":"string","value":"Recente"},
	"sortReplies": {"type":"string","value":"Sortare răspunsuri"},
	"lastEdited": {"type":"string","value":"Editat ultima dată"},
	"newPostVersion": {"type":"string","value":"Există o versiune nouă a acestei postări."},
	"opensEditHistory": {"type":"string","value":"Se deschide istoricul modificărilor"},
	"viewLatestPost": {"type":"string","value":"Vezi cea mai recentă postare"},
	"opensLatestPost": {"type":"string","value":"Deschide versiunea nouă a acestei postări"},
	"mediaTaggedSelf": {"type":"string","value":"Ai"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["De la "]}
	},
	"poll": {"type":"string","value":"Sondaj"},
	"viewPoll": {"type":"string","value":"Afișează acest sondaj"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount","count"],
		"value": function(e){return e.formattedCount+" "+n(e.count,"voturi","vot","de voturi")}
	},
	"pollEnded": {"type":"string","value":"Rezultatele finale"},
	"retweet": {"type":"string","value":"Repostează"},
	"unDoRetweet": {"type":"string","value":"Anulează repostarea"},
	"quoteTweet": {"type":"string","value":"Citează Tweetul"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweeturi"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Răspunsuri"},
	"profileTabTitleHighlights": {"type":"string","value":"Evidențieri"},
	"profileTabTitleMedia": {"type":"string","value":"Conținut media"},
	"profileTabTitleLikes": {"type":"string","value":"Aprecieri"},
	"following": {"type":"string","value":"Urmărești"},
	"follow": {"type":"string","value":"Urmărește"},
	"followBack": {"type":"string","value":"Urmărește și tu"},
	"followers": {"type":"string","value":"Urmăritori"},
	"followsYou": {"type":"string","value":"Te urmărește"},
	"subscriptions": {"type":"string","value":"Abonamente"},
	"unfollow": {"type":"string","value":"Oprește urmărirea"},
	"blocked": {"type":"string","value":"Blocat"},
	"unblock": {"type":"string","value":"Deblochează"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"S-a alăturat în "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Urmărit de "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Urmărit de "," și de "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Urmărit de ",", de "," și de "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["Urmărit de ",", "," și de încă "," persoane pe care le urmărești"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" post"+n(props.count,"ări","are","ări")]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" Aprecier"+n(props.count,"i","e","i")]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" fotografi"+n(props.count,"i și clipuri","e și clip","i și clipuri")+" video"]}
	},
	"home": {"type":"string","value":"Pagina principală"},
	"explore": {"type":"string","value":"Explorează"},
	"notifications": {"type":"string","value":"Notificări"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"Urmărește"+e.verb}
	},
	"chat": {"type":"string","value":"Chat"},
	"messages": {"type":"string","value":"Mesaje"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"Marcaje"},
	"jobs": {"type":"string","value":"Locuri de muncă"},
	"business": {"type":"string","value":"Afaceri"},
	"communities": {"type":"string","value":"Comunitate"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"Organizații verificate"},
	"profile": {"type":"string","value":"Profilul meu"},
	"creatorStudio": {"type":"string","value":"Studio pentru creatori"},
	"lists": {"type":"string","value":"Listă"},
	"monetization": {"type":"string","value":"Monetizare"},
	"ads": {"type":"string","value":"Reclame"},
	"createYourSpace": {"type":"string","value":"Creează-ți Spațiul"},
	"settingsAndPrivacy": {"type":"string","value":"Setări și confidențialitate"},
	"moreMenu": {"type":"string","value":"Mai multe"},
	"addAnExistingAccount": {"type":"string","value":"Adaugă un cont existent"},
	"manageAccounts": {"type":"string","value":"Gestionează conturile"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"Comută la @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"Dă Tweet"},
	"settings": {"type":"string","value":"Setări"},
	"now": {"type":"string","value":"Acum"},
	"day": {"type":"string","value":"Zi"},
	"month": {"type":"string","value":"Lună"},
	"year": {"type":"string","value":"An"},
	"january": {"type":"string","value":"Ianuarie"},
	"february": {"type":"string","value":"Februarie"},
	"march": {"type":"string","value":"Martie"},
	"april": {"type":"string","value":"Aprilie"},
	"may": {"type":"string","value":"Mai"},
	"june": {"type":"string","value":"Iunie"},
	"july": {"type":"string","value":"Iulie"},
	"august": {"type":"string","value":"August"},
	"september": {"type":"string","value":"Septembrie"},
	"october": {"type":"string","value":"Octombrie"},
	"november": {"type":"string","value":"Noiembrie"},
	"december": {"type":"string","value":"Decembrie"}
};

export default text;
