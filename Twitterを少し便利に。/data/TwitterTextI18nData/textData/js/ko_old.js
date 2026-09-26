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
	"replyAction": {"type":"string","value":"답글"},
	"repostAction": {"type":"string","value":"재게시"},
	"likeAction": {"type":"string","value":"마음에 들어요"},
	"bookmarkAction": {"type":"string","value":"북마크"},
	"showMore": {"type":"string","value":"더 보기"},
	"viewThread": {"type":"string","value":"이 스레드 보기"},
	"previousImage": {"type":"string","value":"이전 이미지"},
	"nextImage": {"type":"string","value":"다음 이미지"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["출처: "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5.0(별점) - "+e.appNumRatings+"개의 평가"}
	},
	"verifiedAccount": {"type":"string","value":"인증된 계정"},
	"communityAdminBadge": {"type":"string","value":"관리자"},
	"communityModeratorBadge": {"type":"string","value":"중재자"},
	"communityMemberBadge": {"type":"string","value":"멤버"},
	"viewsLabel": {"type":"string","value":"조회수"},
	"viewQuotes": {"type":"string","value":"인용 보기"},
	"viewActivity": {"type":"string","value":"활동 보기"},
	"communityNotes": {"type":"string","value":"그룹 노트"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"이 메모가 도움이 되었나요?"},
	"communityNoteHelpful": {"type":"string","value":"유용하다"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"다소 유용하다"},
	"communityNoteNotHelpful": {"type":"string","value":"유용하지 않다"},
	"cashtagComingSoon": {"type":"string","value":"기대해 주세요"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["현재 가격: "]}
	},
	"grokAnswerFun": {"type":"string","value":"Grok 재미 모드 답변"},
	"grokAnswer": {"type":"string","value":"Grok 답변"},
	"grokImageBy": {"type":"string","value":"Grok으로 이미지 생성"},
	"grokShowMore": {"type":"string","value":"더 보기"},
	"grokCreateVersion": {"type":"string","value":"Grok으로 나만의 버전을 만드세요"},
	"grokAskYourself": {"type":"string","value":"Grok에게 직접 물어보세요"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" 웹페이지"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" 게시물"}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+"개의 웹페이지 및 게시물"}
	},
	"mostRelevant": {"type":"string","value":"관련 있음"},
	"mostLiked": {"type":"string","value":"마음에 들어요"},
	"mostRecent": {"type":"string","value":"최근"},
	"sortReplies": {"type":"string","value":"답글 정렬하기"},
	"lastEdited": {"type":"string","value":"마지막으로 수정됨"},
	"newPostVersion": {"type":"string","value":"이 게시물의 새로운 버전이 있습니다."},
	"opensEditHistory": {"type":"string","value":"수정 내역 열기"},
	"viewLatestPost": {"type":"string","value":"최신 게시물 보기"},
	"opensLatestPost": {"type":"string","value":"이 게시물의 새로운 버전을 엽니다"},
	"mediaTaggedSelf": {"type":"string","value":"나"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," 님의"]}
	},
	"poll": {"type":"string","value":"투표"},
	"viewPoll": {"type":"string","value":"이 투표 표시하기"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount"],
		"value": function(e){return e.formattedCount+"표"}
	},
	"pollEnded": {"type":"string","value":"최종 결과"},
	"retweet": {"type":"string","value":"리트윗"},
	"unDoRetweet": {"type":"string","value":"리트윗 취소"},
	"quoteTweet": {"type":"string","value":"트윗 인용하기"},
	"profileTabTitleTimeline": {"type":"string","value":"트윗"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"답글"},
	"profileTabTitleHighlights": {"type":"string","value":"하이라이트"},
	"profileTabTitleMedia": {"type":"string","value":"미디어"},
	"profileTabTitleLikes": {"type":"string","value":"마음에 들어요"},
	"following": {"type":"string","value":"팔로잉"},
	"follow": {"type":"string","value":"팔로우"},
	"followBack": {"type":"string","value":"서로 팔로우하기"},
	"followers": {"type":"string","value":"팔로워"},
	"followsYou": {"type":"string","value":"나를 팔로우합니다"},
	"subscriptions": {"type":"string","value":"구독."},
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
		"value": function(){return [""," 님이 팔로우합니다"]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," 및 "," 님이 팔로우합니다"]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["",", ",", "," 님이 팔로우합니다"]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [""," 님, "," 님 외 "," 명이 팔로우했습니다"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" 트윗"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" 마음에 들어요"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" 사진 및 동영상"]}
	},
	"home": {"type":"string","value":"홈"},
	"explore": {"type":"string","value":"탐색하기"},
	"notifications": {"type":"string","value":"알림"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"팔로우하기"+e.verb}
	},
	"chat": {"type":"string","value":"채팅"},
	"messages": {"type":"string","value":"쪽지"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"북마크"},
	"jobs": {"type":"string","value":"채용"},
	"business": {"type":"string","value":"비즈니스"},
	"communities": {"type":"string","value":"커뮤니티"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"인증된 조직"},
	"profile": {"type":"string","value":"내 프로필"},
	"creatorStudio": {"type":"string","value":"크리에이터 스튜디오"},
	"lists": {"type":"string","value":"리스트"},
	"monetization": {"type":"string","value":"수익 창출"},
	"ads": {"type":"string","value":"광고"},
	"createYourSpace": {"type":"string","value":"스페이스 만들기"},
	"settingsAndPrivacy": {"type":"string","value":"설정 및 개인정보"},
	"moreMenu": {"type":"string","value":"더 보기"},
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
