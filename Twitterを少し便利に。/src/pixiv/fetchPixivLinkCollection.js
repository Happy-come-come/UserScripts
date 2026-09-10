import { scriptState } from '../core/state.js';
import { saveScriptDataStore } from '../core/util/scriptDataStore.js';
import { request } from '../generic/fetch/request.js';

export async function fetchPixivLinkCollection(){
	const pixivLinkCollectionDatabeseVersion = 20260905;
	const fileUrl = 'https://raw.githubusercontent.com/Happy-come-come/UserScripts/refs/heads/main/Twitter%E3%82%92%E5%B0%91%E3%81%97%E4%BE%BF%E5%88%A9%E3%81%AB%E3%80%82/data/screenName2PixivID.json';
	const thisStoredData = scriptState.dataStore?.makeTwitterLittleUseful?.pixivLinkCollection;
	if(!thisStoredData?.dataBaseVersion || (thisStoredData?.dataBaseVersion < pixivLinkCollectionDatabeseVersion)){
		const response = await request({url: `${fileUrl}?v=${pixivLinkCollectionDatabeseVersion}`});
		if(response["データチェック"] === "乱反射する眼差し"){
			if(!scriptState.dataStore.makeTwitterLittleUseful)scriptState.dataStore.makeTwitterLittleUseful = {};
			if(!scriptState.dataStore.makeTwitterLittleUseful.pixivLinkCollection)scriptState.dataStore.makeTwitterLittleUseful.pixivLinkCollection = {};
			scriptState.dataStore.makeTwitterLittleUseful.pixivLinkCollection.dataBase = response;
			scriptState.dataStore.makeTwitterLittleUseful.pixivLinkCollection.dataBaseVersion = pixivLinkCollectionDatabeseVersion;
			await saveScriptDataStore();
			return "OK";
		}else{
			throw({error: envText.makeTwitterLittleUseful.invaildData, response: response});
		}
	}
}
