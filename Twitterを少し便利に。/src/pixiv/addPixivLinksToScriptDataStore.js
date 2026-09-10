import { scriptState } from '../core/state.js';
import { saveScriptDataStore, loadScriptDataStore } from '../core/util/scriptDataStore.js';
import { twitterApi } from '../twitter/api/index.js';
import { findPixivLinkFromUrls } from './findPixivLinkFromUrls.js';

export async function addPixivLinksToScriptDataStore(screenNames, force = false){
	const promises = screenNames.map(async screenName => {
		const customData = scriptState.dataStore.makeTwitterLittleUseful?.pixivLinkCollection?.customData;
		if((customData ? customData[screenName] : null) && !force)return "Already exists";
		//if((((scriptDataStore.Show_me_your_Pixiv[screen_name]?.Create_date || 0) + 604800000) <= new Date().getTime()) || force){
		if(force){
			const userData = await twitterApi.getUser(screenName);
			const bioUrls = [];
			if(userData.bio){
				Object.keys(userData.bio.entityMap).forEach(k=>{
					const entry = userData.bio.entityMap[k];
					if(entry.type === "LINK")bioUrls.push(entry.data.url);
				});
			}
			const userEntitiesData = userData.legacy?.entities || userData.entities;
			const endStat = await findPixivLinkFromUrls(extractUrls(userEntitiesData).concat(bioUrls));
			await loadScriptDataStore();
			if(!scriptState.dataStore.makeTwitterLittleUseful)scriptState.dataStore.makeTwitterLittleUseful = {};
			if(!scriptState.dataStore.makeTwitterLittleUseful.pixivLinkCollection)scriptState.dataStore.makeTwitterLittleUseful.pixivLinkCollection = {};
			if(!scriptState.dataStore.makeTwitterLittleUseful.pixivLinkCollection.customData)scriptState.dataStore.makeTwitterLittleUseful.pixivLinkCollection.customData = {};
			if(endStat == "Too Many Requests"){
				console.log("API limit.");
			}else if(!endStat || endStat?.match(/(?:users\/|member.php\?id=)(11|9949830|15241365)(\/|$)/)){
				scriptState.dataStore.makeTwitterLittleUseful.pixivLinkCollection.customData[screenName] = {"pixivUrl": null};
				return `${screenName}: Pixivリンクなし`;
			}else{
				scriptState.dataStore.makeTwitterLittleUseful.pixivLinkCollection.customData[screenName] = {"pixivUrl": endStat.replace(/^https?/,'https')};
				return `${screenName}: ${endStat}`;
			}
		}else{
			return "nothing to do";
		}
	});
	const results = await Promise.allSettled(promises);
	results.forEach(result => {
		if(result.status === 'fulfilled'){
			//debug(result.value);
		}else{
			console.error(`Failure: ${result.reason}`);
		}
	});
	await saveScriptDataStore();
	return "finished!";
	function extractUrls(entities){
		const urls = [];
		if(entities.description && entities.description.urls){
			entities.description.urls.forEach(urlObj => {
				urls.push(urlObj.expanded_url || urlObj.url);
			});
		}
		if(entities.url && entities.url.urls){
			entities.url.urls.forEach(urlObj => {
				urls.push(urlObj.expanded_url || urlObj.url);
			});
		}
		return urls;
	}
}
