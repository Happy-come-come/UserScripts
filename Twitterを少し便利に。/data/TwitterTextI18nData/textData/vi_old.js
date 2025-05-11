const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(n){return"Dành cho bạn"+n.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(n){return"Đang theo dõi"+n.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"Đã ghim"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s đã Tweet lại"},
	"retweet": undefined,
	"unDoRetweet": {"type":"string","value":"Hoàn tác Tweet lại"},
	"quoteTweet": {"type":"string","value":"Trích dẫn Tweet"},
	"profileTabTitleTimeline": {"type":"string","value":"Tweet"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"Lượt trả lời"},
	"profileTabTitleHighlights": {"type":"string","value":"Sự kiện nổi bật"},
	"profileTabTitleMedia": {"type":"string","value":"Phương tiện"},
	"profileTabTitleLikes": {"type":"string","value":"Lượt thích"},
	"following": {"type":"string","value":"Đang theo dõi"},
	"unfollow": {"type":"string","value":"Ngừng theo dõi"},
	"blocked": {"type":"string","value":"Bị chặn"},
	"unblock": {"type":"string","value":"Bỏ chặn"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(n){return"Tham gia "+n.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Được theo dõi bởi "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Được theo dõi bởi "," và "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Được theo dõi bởi ",", ",", và "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["Được theo dõi bởi ",", ",", và "," người khác mà bạn theo dõi"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Tweet"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" Lượt thích"]}
	},
	"mediaNum": undefined,
	"home": {"type":"string","value":"Trang chủ"},
	"search": {"type":"string","value":"Khám phá"},
	"notifications": {"type":"string","value":"Thông báo"},
	"messages": {"type":"string","value":"Tin nhắn"},
	"grok": undefined,
	"bookmarks": {"type":"string","value":"Dấu trang"},
	"jobs": {"type":"string","value":"Công việc"},
	"communities": {"type":"string","value":"Cộng đồng"},
	"premium": undefined,
	"verifiedOrg": {"type":"string","value":"Tổ chức đã xác nhận"},
	"profile": {"type":"string","value":"Hồ sơ của tôi"},
	"lists": {"type":"string","value":"Danh sách"},
	"monetization": {"type":"string","value":"Kiếm tiền"},
	"ads": undefined,
	"createYourSpace": undefined,
	"settingsAndPrivacy": {"type":"string","value":"Cài đặt và riêng tư"},
	"addAnExistingAccount": {"type":"string","value":"Thêm tài khoản hiện có"},
	"manageAccounts": {"type":"string","value":"Quản lý tài khoản"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(n){return"Chuyển sang @"+n.screenName}
	},
	"postTweet": {"type":"string","value":"Đăng Tweet"},
	"settings": {"type":"string","value":"Cài đặt"},
	"now": {"type":"string","value":"Bây giờ"},
	"day": {"type":"string","value":"Ngày"},
	"month": {"type":"string","value":"Tháng"},
	"year": {"type":"string","value":"Năm"},
	"january": {"type":"string","value":"Tháng một"},
	"february": {"type":"string","value":"Tháng hai"},
	"march": {"type":"string","value":"Tháng ba"},
	"april": {"type":"string","value":"Tháng tư"},
	"may": {"type":"string","value":"Tháng năm"},
	"june": {"type":"string","value":"Tháng sáu"},
	"july": {"type":"string","value":"Tháng bảy"},
	"august": {"type":"string","value":"Tháng tám"},
	"september": {"type":"string","value":"Tháng chín"},
	"october": {"type":"string","value":"Tháng mười"},
	"november": {"type":"string","value":"Tháng  mười một"},
	"december": {"type":"string","value":"Tháng mười hai"}
};

export default text;