import {request} from '../fetch/request.js';
import {isUrl} from './isUrl.js';
export async function expandShorteningLink(urls){
	let isInputArray = true;
	const reqestHeaders = {
		"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
		"Referer": "https://geek-website.com/tool/shortlink_open/",
		"Host": 'geek-website.com',
	};
	if(typeof urls === 'string'){
		urls = [urls];
		isInputArray = false;
	}
	async function expandURL(url){
		if(!isUrl(url)){
			throw new Error(`Invalid URL: ${url}`);
		}
		const response = await request({url: 'https://geek-website.com/tool/shortlink_open/request.php', method: 'POST', headers: reqestHeaders, body: `shortlink=${encodeURIComponent(url)}`, respType: 'json'});
		return ({
			original: url,
			expanded: response
		});
	}
	const results = await Promise.all(urls.map(url => expandURL(url)));
	if(!isInputArray){
		return results[0];
	}
	return results;
}
