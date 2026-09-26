const text = {
	"forYouTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"สำหรับคุณ"+e.noun}
	},
	"followingTab": {
		"type": "webI18nFunction",
		"arguments": ["noun"],
		"value": function(e){return"กําลังติดตาม"+e.noun}
	},
	"pinnedListsModuleHeader": {"type":"string","value":"ปักหมุดแล้ว"},
	"tweetsRetweeted": {"type":"apkI18nTemplateFunction","value":"%s รีโพสต์แล้ว"},
	"replyAction": {"type":"string","value":"ตอบกลับ"},
	"repostAction": {"type":"string","value":"รีโพสต์"},
	"likeAction": {"type":"string","value":"ชื่นชอบ"},
	"bookmarkAction": {"type":"string","value":"บุ๊คมาร์ก"},
	"showMore": {"type":"string","value":"แสดงเพิ่มเติม"},
	"viewThread": {"type":"string","value":"แสดงเธรดนี้"},
	"previousImage": {"type":"string","value":"รูปภาพก่อนหน้า"},
	"nextImage": {"type":"string","value":"รูปภาพถัดไป"},
	"cardSource": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["จาก "]}
	},
	"cardAppRating": {
		"type": "webI18nFunction",
		"arguments": ["appStarRating","appNumRatings"],
		"value": function(e){return e.appStarRating+"/5.0 ดาว – "+e.appNumRatings+" คะแนน"}
	},
	"verifiedAccount": {"type":"string","value":"บัญชีที่ยืนยันแล้ว"},
	"communityAdminBadge": {"type":"string","value":"ผดลรบ"},
	"communityModeratorBadge": {"type":"string","value":"ผดล"},
	"communityMemberBadge": {"type":"string","value":"สมาชิก"},
	"viewsLabel": {"type":"string","value":"ยอดดู"},
	"viewQuotes": {"type":"string","value":"ดูการอ้างอิง"},
	"viewActivity": {"type":"string","value":"ดูความเคลื่อนไหว"},
	"communityNotes": {"type":"string","value":"หมายเหตุจากชุมชน"},
	"communityNoteHelpfulQuestion": {"type":"string","value":"โน้ตนี้เป็นประโยชน์หรือไม่"},
	"communityNoteHelpful": {"type":"string","value":"เป็นประโยชน์"},
	"communityNoteSomewhatHelpful": {"type":"string","value":"เป็นประโยชน์บางส่วน"},
	"communityNoteNotHelpful": {"type":"string","value":"ไม่เป็นประโยชน์"},
	"cashtagComingSoon": {"type":"string","value":"เร็วๆ นี้"},
	"cashtagNowAt": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["ราคาเพียง "]}
	},
	"grokAnswerFun": {"type":"string","value":"ตอบโดย Grok ในโหมดสนุกสนาน"},
	"grokAnswer": {"type":"string","value":"ตอบโดย Grok"},
	"grokImageBy": {"type":"string","value":"รูปภาพโดย Grok"},
	"grokShowMore": {"type":"string","value":"แสดงเพิ่มเติม"},
	"grokCreateVersion": {"type":"string","value":"สร้างเวอร์ชันของคุณด้วย Grok"},
	"grokAskYourself": {"type":"string","value":"ถาม Grok ด้วยตัวคุณเอง"},
	"grokWebPages": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" เว็บเพจ"}
	},
	"grokPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return e.count+" โพสต์"}
	},
	"grokWebAndPosts": {
		"type": "webI18nFunction",
		"arguments": ["count"],
		"value": function(e){return"หน้าเว็บและโพสต์ "+e.count+" รายการ"}
	},
	"mostRelevant": {"type":"string","value":"เกี่ยวข้อง"},
	"mostLiked": {"type":"string","value":"ความชอบ"},
	"mostRecent": {"type":"string","value":"ล่าสุด"},
	"sortReplies": {"type":"string","value":"จัดเรียงการตอบกลับ"},
	"lastEdited": {"type":"string","value":"แก้ไขล่าสุด"},
	"newPostVersion": {"type":"string","value":"โพสต์นี้มีเวอร์ชันใหม่"},
	"opensEditHistory": {"type":"string","value":"เปิดประวัติการแก้ไข"},
	"viewLatestPost": {"type":"string","value":"ดูโพสต์ล่าสุด"},
	"opensLatestPost": {"type":"string","value":"เปิดเวอร์ชันใหม่ของโพสต์นี้"},
	"mediaTaggedSelf": {"type":"string","value":"คุณ"},
	"mediaSourcePrefix": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["จาก "]}
	},
	"poll": {"type":"string","value":"โพล"},
	"viewPoll": {"type":"string","value":"แสดงโพลนี้"},
	"pollVotes": {
		"type": "webI18nFunction",
		"arguments": ["formattedCount"],
		"value": function(e){return e.formattedCount+" โหวต"}
	},
	"pollEnded": {"type":"string","value":"ผลลัพธ์สุดท้าย"},
	"retweet": {"type":"string","value":"รีโพสต์"},
	"unDoRetweet": {"type":"string","value":"ยกเลิกการรีโพสต์"},
	"quoteTweet": {"type":"string","value":"อ้างอิง"},
	"profileTabTitleTimeline": {"type":"string","value":"โพสต์"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"การตอบกลับ"},
	"profileTabTitleHighlights": {"type":"string","value":"ไฮไลต์"},
	"profileTabTitleMedia": {"type":"string","value":"สื่อ"},
	"profileTabTitleLikes": {"type":"string","value":"ความชอบ"},
	"following": {"type":"string","value":"กําลังติดตาม"},
	"follow": {"type":"string","value":"ติดตาม"},
	"followBack": {"type":"string","value":"ติดตามกลับ"},
	"followers": {"type":"string","value":"ผู้ติดตาม"},
	"followsYou": {"type":"string","value":"ติดตามคุณ"},
	"subscriptions": {"type":"string","value":"ระบบสมาชิก"},
	"unfollow": {"type":"string","value":"เลิกติดตาม"},
	"blocked": {"type":"string","value":"ถูกบล็อค"},
	"unblock": {"type":"string","value":"ยกเลิกการบล็อค"},
	"joinDateFrom": {
		"type": "webI18nFunction",
		"arguments": ["joinDate"],
		"value": function(e){return"เข้าร่วมเมื่อ "+e.joinDate}
	},
	"followedBy1": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["ติดตามโดย "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["ติดตามโดย "," และ "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["ติดตามโดย ",", "," และ "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return ["ติดตามโดย ",", "," และอีก "," คนที่คุณติดตาม"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" โพสต์"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" ความชอบ"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return [props.formattedCount+" รูปภาพและวีดีโอ"]}
	},
	"home": {"type":"string","value":"หน้าแรก"},
	"explore": {"type":"string","value":"สำรวจ"},
	"notifications": {"type":"string","value":"การแจ้งเตือน"},
	"connect_people": {
		"type": "webI18nFunction",
		"arguments": ["verb"],
		"value": function(e){return"ติดตาม"+e.verb}
	},
	"chat": {"type":"string","value":"สนทนา"},
	"messages": {"type":"string","value":"ข้อความ"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"บุ๊คมาร์ก"},
	"jobs": {"type":"string","value":"งาน"},
	"business": {"type":"string","value":"ธุรกิจ"},
	"communities": {"type":"string","value":"ชุมชน"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"องค์กรที่ได้รับการยืนยัน"},
	"profile": {"type":"string","value":"ข้อมูลส่วนตัวของฉัน"},
	"creatorStudio": {"type":"string","value":"สตูดิโอผู้สร้าง"},
	"lists": {"type":"string","value":"รายชื่อ"},
	"monetization": {"type":"string","value":"การสร้างเงิน"},
	"ads": {"type":"string","value":"โฆษณา"},
	"createYourSpace": {"type":"string","value":"สร้างพื้นที่สนทนาของคุณ"},
	"settingsAndPrivacy": {"type":"string","value":"การตั้งค่าและความเป็นส่วนตัว"},
	"moreMenu": {"type":"string","value":"เพิ่มเติม"},
	"addAnExistingAccount": {"type":"string","value":"เพิ่มบัญชีที่มีอยู่แล้ว"},
	"manageAccounts": {"type":"string","value":"จัดการบัญชี"},
	"switchToAccount": {
		"type": "webI18nFunction",
		"arguments": ["screenName"],
		"value": function(e){return"สลับไปยัง @"+e.screenName}
	},
	"postTweet": {"type":"string","value":"โพสต์"},
	"settings": {"type":"string","value":"การตั้งค่า"},
	"now": {"type":"string","value":"ขณะนี้"},
	"day": {"type":"string","value":"วัน"},
	"month": {"type":"string","value":"เดือน"},
	"year": {"type":"string","value":"ปี"},
	"january": {"type":"string","value":"มกราคม"},
	"february": {"type":"string","value":"กุมภาพันธ์"},
	"march": {"type":"string","value":"มีนาคม"},
	"april": {"type":"string","value":"เมษายน"},
	"may": {"type":"string","value":"พฤษภาคม"},
	"june": {"type":"string","value":"มิถุนายน"},
	"july": {"type":"string","value":"กรกฎาคม"},
	"august": {"type":"string","value":"สิงหาคม"},
	"september": {"type":"string","value":"กันยายน"},
	"october": {"type":"string","value":"ตุลาคม"},
	"november": {"type":"string","value":"พฤศจิกายน"},
	"december": {"type":"string","value":"ธันวาคม"}
};

export default text;
