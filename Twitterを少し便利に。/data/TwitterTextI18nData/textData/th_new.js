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
	"retweet": {"type":"string","value":"รีโพสต์"},
	"unDoRetweet": {"type":"string","value":"ยกเลิกการรีโพสต์"},
	"quoteTweet": {"type":"string","value":"อ้างอิง"},
	"profileTabTitleTimeline": {"type":"string","value":"โพสต์"},
	"profileTabTitleTimelineTweetsAndRepliesSentenceCase": {"type":"string","value":"การตอบกลับ"},
	"profileTabTitleHighlights": {"type":"string","value":"ไฮไลต์"},
	"profileTabTitleMedia": {"type":"string","value":"สื่อ"},
	"profileTabTitleLikes": {"type":"string","value":"ความชอบ"},
	"following": {"type":"string","value":"กําลังติดตาม"},
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
		"value": function(){return["ติดตามโดย "]}
	},
	"followedBy2": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["ติดตามโดย "," และ "]}
	},
	"followedBy3": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["ติดตามโดย ",", "," และ "]}
	},
	"followedByLots": {
		"type": "webI18nTemplateFunction",
		"value": function(){return["ติดตามโดย ",", "," และอีก "," คนที่คุณติดตาม"]}
	},
	"postedTweetsNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" โพสต์"]}
	},
	"likesNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" ความชอบ"]}
	},
	"mediaNum": {
		"type": "webI18nTemplateFunction",
		"value": function(){return[props.formattedCount+" รูปภาพและวีดีโอ"]}
	},
	"home": {"type":"string","value":"หน้าแรก"},
	"search": {"type":"string","value":"สำรวจ"},
	"notifications": {"type":"string","value":"การแจ้งเตือน"},
	"messages": {"type":"string","value":"ข้อความ"},
	"grok": {"type":"string","value":"Grok"},
	"bookmarks": {"type":"string","value":"บุ๊คมาร์ก"},
	"jobs": {"type":"string","value":"งาน"},
	"communities": {"type":"string","value":"ชุมชน"},
	"premium": {"type":"string","value":"Premium"},
	"verifiedOrg": {"type":"string","value":"องค์กรที่ได้รับการยืนยัน"},
	"profile": {"type":"string","value":"ข้อมูลส่วนตัวของฉัน"},
	"lists": {"type":"string","value":"รายชื่อ"},
	"monetization": {"type":"string","value":"การสร้างเงิน"},
	"ads": {"type":"string","value":"โฆษณา"},
	"createYourSpace": {"type":"string","value":"สร้างพื้นที่สนทนาของคุณ"},
	"settingsAndPrivacy": {"type":"string","value":"การตั้งค่าและความเป็นส่วนตัว"},
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