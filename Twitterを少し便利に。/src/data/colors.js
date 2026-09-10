import { scriptState } from "../core/state";

export const colors = {
	"fontColor":				['rgb(15, 20, 25)', 'rgb(247, 249, 249)', 'rgb(231, 233, 234)'], // ツイートの文字色など
	"fontColorDark":			['rgb(83, 100, 113)', 'rgb(139, 152, 165)', 'rgb(113, 118, 123)'], // いいねの数など
	"backgroundColor":			['rgba(255, 255, 255, 1.00)', 'rgb(21, 32, 43)', 'rgba(0, 0, 0, 1.00)'],
	"borderColor":				['rgb(239, 243, 244)', 'rgb(56, 68, 77)', 'rgb(47, 51, 54)'], // ツイートのボーダー色など
	"twitterBlue":				['rgb(29, 155, 240)', 'rgb(29, 155, 240)', 'rgb(29, 155, 240)'],
	"menuHoverEffect":			['rgba(15, 20, 25, 0.1)', 'rgba(247, 249, 249, 0.1)', 'rgba(231, 233, 234, 0.1)'], // 一番左のメニュー等のホバーエフェクト
	"menuHoverEffectLight":		['rgb(247, 249, 249)', 'rgb(30, 39, 50)', 'rgb(22, 24, 28)'], // 設定画面のホバーエフェクト
	"retweeted":				['rgb(0, 186, 124)', 'rgb(0, 186, 124)', 'rgb(0, 186, 124)'],
	"favorited":				['rgb(249, 24, 128)', 'rgb(249, 24, 128)', 'rgb(249, 24, 128)'],
	"dropdownBackgroundColor": 	['rgb(255, 255, 255)', 'rgb(59, 59, 59)', 'rgb(59, 59, 59)'],
	"dropdownFontColor":		['rgb(0, 0, 0)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)'],
	"dropdownBorderColor":		['rgb(118, 118, 118)', 'rgb(133, 133, 133)', 'rgb(133, 133, 133)'],
	"buttonBackgroundColor":	['rgb(239, 239, 239)', 'rgb(107, 107, 107)', 'rgb(107, 107, 107)'],
	"buttonFontColor":			['rgb(0, 0, 0)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)'],
	"buttonBorderColor":		['rgb(239, 239, 239)', 'rgb(107, 107, 107)', 'rgb(107, 107, 107)'],
	"conversationLineColor":	['rgb(207, 217, 222)', 'rgb(66, 83, 100)', 'rgb(51, 54, 57)'],
	get: (colorName, darkMode = scriptState.sessionData.themeMode?.themeNum ?? getCookie('night_mode') ?? 0)=>{
		return this.colors[colorName][darkMode];
	},
	getWithAlpha: (colorName, alpha, darkMode = scriptState.sessionData.themeMode?.themeNum ?? getCookie('night_mode') ?? 0)=>{
		return `rgba(${this.colors[colorName][darkMode].match(/\d+/g).join(", ")}, ${alpha})`;
	}
}
