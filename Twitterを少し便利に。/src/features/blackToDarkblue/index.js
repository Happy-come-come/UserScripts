import { blackToDarkblueInit, blackToDarkblueApplyStyle, blackToDarkblueRemoveStyle, blackToDarkblueOnThemeChange } from './blackToDarkblue.js';
import { i18n } from './i18n/index.js';
export const blackToDarkblue = {
	featureId: "blackToDarkblue",
	init: blackToDarkblueInit,
	main: null,
	onUrlChange: null,
	onFeatureDisabled: blackToDarkblueRemoveStyle,
	onFeatureEnabled: blackToDarkblueApplyStyle,
	onThemeChange: blackToDarkblueOnThemeChange,
	textData: i18n,
};
