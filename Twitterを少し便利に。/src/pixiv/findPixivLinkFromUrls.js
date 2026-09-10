import {request} from '../generic/fetch/request.js';
import {findMatchFromArray} from '../generic/util/findMatchFromArray.js';
import {expandShorteningLink} from '../generic/util/expandShorteningLink.js';

export async function findPixivLinkFromUrls(urls){
	const pixivUrlRegex = /^https?:\/\/(((www|touch)\.)?pixiv\.(net\/([a-z]{2}\/)?((member(_illust)?\.php\?id\=|(users|u)\/)[0-9]*)|me\/.*))/;
	const fanboxUrlRegex = /^https?:\/\/(www\.pixiv\.net\/fanbox\/creator\/[0-9]*|(.*\.)?fanbox\.cc\/?(@.*)?)/;
	return new Promise(async function(resolve){
		let pixivUrl;
		if(urls.length > 0){
			try{
				pixivUrl = await finder(urls);
				if(!pixivUrl){
					urls = (await expandShorteningLink(urls))?.expanded || [];
					pixivUrl = (urls?.length > 0) ? await finder(urls) : null;
					return resolve(pixivUrl);
				}else{
					return resolve(pixivUrl);
				}
			}catch(error){
				console.error(error);
				return resolve(null);
			}
		}
		return resolve(null);
	});
	async function finder(){
		let tmpPixivUrl = findMatchFromArray(urls, pixivUrlRegex, true);
		if(tmpPixivUrl)return tmpPixivUrl;
		const tmpFanboxUrl = findMatchFromArray(urls, fanboxUrlRegex, true);
		if(tmpFanboxUrl){
			tmpPixivUrl = await whenFanbox(findMatchFromArray(urls, fanboxUrlRegex, true));
			if(tmpPixivUrl)return tmpPixivUrl;
		}else{
			const promiseList = [];
			urls.forEach(url=>{
				switch(true){
					case /^https?:\/\/sketch\.pixiv\.net\//.test(url):
						promiseList.push(new Promise(
							async function(resolve, reject){
								try{
									return resolve(await whenPixivSketch(url));
								}catch(error){
									return reject(error);
								}
							}
						));
						break;
					case /^https?:\/\/((fantia\.jp\/(fanclubs\/[0-9])?.*)|(.*\.booth\.pm)|(.*linktr\.ee)|(.*profcard\.info)|(.*lit\.link)|(potofu\.me)|(.*\.carrd\.co)|(.*\.tumblr\.com$)|(twpf\.jp)|(ci\-en\.dlsite\.com\/creator\/[0-9]*)|(profu\.link)|(xfolio\.jp))\/?/.test(url):
						promiseList.push(new Promise(
							async function(resolve, reject){
								try{
									return resolve(await whenGeneral(url));
								}catch(error){
									return reject(error);
								}
							}
						));
						break;
					case /^https?:\/\/.*\.creatorlink\.net(\/.*)?/.test(url):
						promiseList.push(new Promise(
							async function(resolve, reject){
								try{
									return resolve(await whenGeneral(`${url.match(/^https?:\/\/.*\.creatorlink\.net/)[0]}\/Contact`));
								}catch(error){
									return reject(error);
								}
							}
						));
						break;
					case /^https?:\/\/skeb\.jp\/\@.*/.test(url):
						promiseList.push(new Promise(
							async function(resolve, reject){
								try{
									return resolve(await whenSkeb(url.replace(/^https?:\/\/skeb\.jp\/\@/,'')));
								}catch(error){
									return reject(error);
								}
							}
						));
						break;
					default:
						break;
				}
			});
			if(promiseList.length > 0){
				await Promise.any(promiseList).then((value) => {tmpPixivUrl = value}).catch(() => {tmpPixivUrl = undefined});
				if(!pixivUrlRegex.test(tmpPixivUrl))return null;
				return tmpPixivUrl.replace(/^https?/,'https').replace(/(\/|\\)$/,'');
			}
		}
		return null;
		async function whenGeneral(targetUrl){
			const response = await request({url: targetUrl.replace(/^https?/,"https"), respType: 'text'});
			//debug({url: targetUrl, response:response});
			const urlRegex = /https?:\/\/(?:www\.|touch\.)?pixiv\.net\/[^\s"'<>\\]+|https?:\/\/[^\s"'<>\\]*\.fanbox\.cc\/?[^\s"'<>\\]*/g;
			const tmpUrl = (response.match(urlRegex) || []);
			const pixivUrl = tmpUrl.find(function(element){return element.match(pixivUrlRegex)});
			if(pixivUrl)return pixivUrl;
			const fanboxUrl = tmpUrl.find(function(element){return element.match(fanboxUrlRegex)});
			if(fanboxUrl)return await whenFanbox(fanboxUrl);
			throw new Error("not found");
		}
		async function whenFanbox(targetUrl){
			if(targetUrl.match(/^https?:\/\/www\.pixiv\.net\/fanbox\/creator\/[0-9]*/))return targetUrl.replace('fanbox/creator', 'users');
			let fanboxName = targetUrl.match(/https?:\/\/(?:www\.)?(?:fanbox\.cc\/@([^\/]+)|([^\.]+)\.fanbox\.cc)/);
			fanboxName = fanboxName[1] || fanboxName[2];
			const headers = {
				"Host": 'api.fanbox.cc',
				"Origin": `https://${fanboxName}.fanbox.cc`
			};
			const response = await request({url: `https://api.fanbox.cc/creator.get?creatorId=${fanboxName}`, headers: headers, onlyResponse: false});
			if(response.status == "404")throw new Error("not found");
			const pixivUrl = findMatchFromArray(response.response.body.profileLinks, pixivUrlRegex, true);
			return (pixivUrl ? pixivUrl : `https://www.pixiv.net/users/${response.response.body.user.userId}`);
		}
		async function whenPixivSketch(targetUrl){
			const response = await request({url: targetUrl});
			const pixivId = response.match(/\\"pixiv_user_id\\":\\"([\d]+)\\"/);
			if(!pixivId)throw new Error("not found");
			return `https://www.pixiv.net/users/${pixivId[1]}`;
		}
		async function whenSkeb(target){
			const headers = {
				"Referer": `https://skeb.jp/@${target}`,
				"Alt-Used": 'skeb.jp',
				"Authorization": 'Bearer null'
			};
			const response = await request({url: `https://skeb.jp/api/users/${target}`, headers: headers});
			const pixivId = response.pixiv_id;
			if(!pixivId)throw new Error("not found");
			return `https://www.pixiv.net/users/${pixivId}`;
		}
	}
}
