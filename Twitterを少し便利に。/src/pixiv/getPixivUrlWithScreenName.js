import { scriptState } from '../core/state.js';

export function getPixivUrlWithScreenName(screenName){
	const customData = scriptState.dataStore.makeTwitterLittleUseful?.pixivLinkCollection?.customData;
	let pixivUrl = customData ? customData[screenName] : null;
	if(pixivUrl?.pixivUrl){
		return pixivUrl.pixivUrl;
	}else{
		const dataBase = scriptState.dataStore.makeTwitterLittleUseful?.pixivLinkCollection?.dataBase;
		pixivUrl = dataBase ? dataBase[screenName] : null;
		if(Array.isArray(pixivUrl)){
			return `https://www.pixiv.net/users/${pixivUrl[0]}`;
		}else if(pixivUrl){
			return `https://www.pixiv.net/users/${pixivUrl}`;
		}else{
			return null;
		}
	}
}
