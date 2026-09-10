import {scriptState} from './state.js';
import {isMobile, isPC, envSelector} from './environment.js';
import {extractTweetId, extractScreenName} from '../twitter/util/index.js';
import {debugLog} from '../generic/util/debugLog.js';

export async function main({refresh = false, urlChange = false, firstRun = false} = {}){
	const featurestoggle = scriptState.settings.makePixivLittleUseful?.enableFunction ?? {};
	const selector = refresh ? 'article[data-testid="tweet"]' : 'article[data-testid="tweet"]:not([mtlu_checked="true"])';
	const tweets = Array.from(document.querySelectorAll(selector)).map(tweet => {
		tweet.setAttribute('mtlu_checked', "true");
		const link = tweet.querySelector(`[data-testid="User-Name"] a[aria-label], ${envSelector.infoField} a[aria-label]`);
		if(link){
			const tweetId = extractTweetId(link.href);
			const screenName = extractScreenName(link.href);
			if(tweetId && screenName){
				return { id: tweetId, link: link.href, node: tweet, screenName: screenName, isFirstRun: sessionData.isFirstRun};
			}
		}
	}).filter(Boolean);
	const isTweetDetail = !!extractTweetId(scriptState.currentUrl);
	const promises = [];
	for(const key in functions){
		const func = functions[key];
		if(!featurestoggle[key] && !func.ignoreFeatureToggle)continue;
		if(((isPC && func.forPC) || (isMobile && func.forMobile)) === false)continue;
		if(func.isRunning && !func.ignoreIsRunning)continue;
		if(refresh
			|| func.timing.includes("always")
			|| (func.timing.includes("onLoad") && firstRun)
			|| (func.timing.includes("afterUrlChange") && (urlChange || firstRun))){
			const p = (async () => {
				let result;
				try{
					func.isRunning = true;
					result = await func.function({tweets, refresh, urlChange, firstRun, isTweetDetail});
					debugLog({functionName: key, result});
				}catch(error){
					console.error({functionName: key, error});
				}finally{
					func.isRunning = false;
				}
			})();
			promises.push(p);
		}
	}
	await Promise.allSettled(promises);
}
