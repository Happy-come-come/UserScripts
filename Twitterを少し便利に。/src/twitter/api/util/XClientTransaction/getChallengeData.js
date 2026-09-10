import {request} from '../../../../generic/fetch/request.js';
import {saveToIndexedDB, getFromIndexedDB} from '../../../../generic/storage/indexedDB.js';

let getChallengeDataPromise = null;

export async function getChallengeData({refresh = false} = {}){
	if(!refresh){
		const cachedData = await getFromIndexedDB('MTLU_twitterApi', 'challengeData');
		if(cachedData && cachedData.expires > Date.now())return cachedData;
	}
	if(getChallengeDataPromise)return getChallengeDataPromise;

	getChallengeDataPromise = (async () => {
		const response = await request({ url: 'https://x.com/home', respType: 'text', anonymous: true });
		const html = response;
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");

		const metaTag = doc.querySelector('meta[name="twitter-site-verification"]');
		const verificationCode = metaTag?.content;
		if(!verificationCode)throw new Error("Verification code not found");

		const challengeKeyMatch = html.match(/(\d+):\s*["']ondemand\.s["']/);
		if(!challengeKeyMatch){
			throw new Error("Challenge key for ondemand.s not found");
		}

		const challengeKey = challengeKeyMatch[1];
		const challengeCodeRegex = new RegExp(`\\b${challengeKey}:\\s*["']([a-zA-Z0-9_-]+)["']`);
		const challengeCodeMatch = html.match(challengeCodeRegex);
		if(!challengeCodeMatch){
			throw new Error("Challenge code not found");
		}

		const challengeCode = challengeCodeMatch[1];

		const svgs = Array.from(doc.querySelectorAll('svg[id^="loading-x"]'));
		const challengeAnimationSvgCodes = svgs.map(svg => svg.outerHTML);

		const jsUrl = `https://abs.twimg.com/responsive-web/client-web/ondemand.s.${challengeCode}a.js`;
		const challengeJsCode = await request({ url: jsUrl, respType: 'text' });
		const challengeData = {
			verificationCode,
			challengeCode,
			challengeJsCode,
			challengeAnimationSvgCodes,
			expires: Date.now() + 60 * 60 * 1000, // 60 min
		};
		await saveToIndexedDB('MTLU_twitterApi', 'challengeData', challengeData);
		return challengeData;
	})();

	try{
		return await getChallengeDataPromise;
	}finally{
		getChallengeDataPromise = null;
	}
}
