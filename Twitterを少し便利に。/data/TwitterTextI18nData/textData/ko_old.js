const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"추천"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"팔로우 중"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"메인에 올라감"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s 님이 리트윗했습니다"},
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"리트윗 취소"},
	"quoteTweet": {"type":"string","value":"트윗 인용하기"},
	"profileTabTitleTimeline": {"type":"string","value":"트윗"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"답글"},
	"profileTabTitleHighlights": {"type":"string","value":"하이라이트"},
	"profileTabTitleMedia": {"type":"string","value":"미디어"},
	"profileTabTitleLikes": {"type":"string","value":"마음에 들어요"},
	"following": {"type":"string","value":"팔로잉"},
	"unfollow": {"type":"string","value":"언팔로우"},
	"blocked": {"type":"string","value":"차단됨"},
	"unblock": {"type":"string","value":"차단 해제"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"가입일: "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," 님이 팔로우합니다"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," 및 "," 님이 팔로우합니다"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["",", ",", "," 님이 팔로우합니다"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[""," 님, "," 님 외 "," 명이 팔로우했습니다"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" 트윗"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" 마음에 들어요"]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"홈"},
	"search": {"type":"string","value":"탐색하기"},
	"notifications": {"type":"string","value":"알림"},
	"messages": {"type":"string","value":"쪽지"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"북마크"},
	"jobs": {"type":"string","value":"채용"},
	"communities": {"type":"string","value":"커뮤니티"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"인증된 조직"},
	"profile": {"type":"string","value":"내 프로필"},
	"lists": {"type":"string","value":"리스트"},
	"monetization": {"type":"string","value":"수익 창출"},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"설정 및 개인정보"},
	"addAnExistingAccount": {"type":"string","value":"기존 계정 추가"},
	"manageAccounts": {"type":"string","value":"계정 관리"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"@"+e.screenName+" 계정으로 전환"}
	},
	"postTweet": {"type":"string","value":"트윗"},
	"settings": {"type":"string","value":"설정"},
	"now": {"type":"string","value":"지금"},
	"day": {"type":"string","value":"일"},
	"month": {"type":"string","value":"월"},
	"year": {"type":"string","value":"년"},
	"january": {"type":"string","value":"1월"},
	"february": {"type":"string","value":"2월"},
	"march": {"type":"string","value":"3월"},
	"april": {"type":"string","value":"4월"},
	"may": {"type":"string","value":"5월"},
	"june": {"type":"string","value":"6월"},
	"july": {"type":"string","value":"7월"},
	"august": {"type":"string","value":"8월"},
	"september": {"type":"string","value":"9월"},
	"october": {"type":"string","value":"10월"},
	"november": {"type":"string","value":"11월"},
	"december": {"type":"string","value":"12월"}
};

export default text;