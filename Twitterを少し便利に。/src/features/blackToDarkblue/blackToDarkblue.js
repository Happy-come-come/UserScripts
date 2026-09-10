import { colors } from '../../data/colors.js';
import { scriptState } from '../../core/state.js'

function generateBlackToDarkblueCSS(){
	return `
.r-1nao33i {
	color: ${colors.get('fontColor', 1)} !important;
}
[style*="color: rgb(113, 118, 123)"], .MTLU_fontColorDark {
	color: ${colors.get('fontColorDark', 1)} !important;
}
[style*="background-color: rgb(0, 0, 0)"],
.r-kemksi,
.r-cl2sl0
{
	background-color: ${colors.get('backgroundColor', 1)} !important;
}
.r-1roi411 {
	border-color: ${colors.get('borderColor', 1)} !important;
}
.r-1hdo0pc {
	background-color: ${colors.get('menuHoverEffect', 1)} !important;
}
.r-g2wdr4, [style*="color: rgb(22, 24, 28)"], .MTLU_menuHoverEffectLight {
	background-color: ${colors.get('menuHoverEffectLight', 1)} !important;
}
.r-1bnu78o {
	background-color: ${colors.get('conversationLineColor', 1)} !important;
}
.r-5zmot,
.bg-background,
.j-vdda9x11
{
	background-color: ${colors.get('backgroundColor', 1)} !important;
}
`;
}

function blackToDarkblueInit(){
	scriptState.sessionData.blackToDarkblue = {
		styleElement: null,
	};
	blackToDarkblueApplyStyle();
}

function blackToDarkblueApplyStyle(){
	if(scriptState.sessionData.themeMode === 2){
		scriptState.sessionData.blackToDarkblue.styleElement = document.createElement('style');
		scriptState.sessionData.blackToDarkblue.styleElement.textContent = generateBlackToDarkblueCSS();
		document.head.appendChild(scriptState.sessionData.blackToDarkblue.styleElement);
	}
}

function blackToDarkblueRemoveStyle(){
	if(scriptState.sessionData.blackToDarkblue.styleElement){
		document.head.removeChild(scriptState.sessionData.blackToDarkblue.styleElement);
		scriptState.sessionData.blackToDarkblue.styleElement = null;
	}
}

function blackToDarkblueOnThemeChange(){
	blackToDarkblueRemoveStyle();
	blackToDarkblueApplyStyle();
}

export { blackToDarkblueInit, blackToDarkblueApplyStyle, blackToDarkblueRemoveStyle, blackToDarkblueOnThemeChange };