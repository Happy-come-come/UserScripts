import {_cloneInto} from '../../generic/util/cloneInto.js';

const pageWindow = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
const webpackChunkName = "webpackChunk_twitter_responsive_web";

let webpackRequire = null;
let richHistory = null;
let runtimeChunkId = 0;

function unwrap(value){
	try{
		return value?.wrappedJSObject || value;
	}catch{
		return value;
	}
}

function isRichHistory(value){
	const candidate = unwrap(value);
	try{
		return (
			candidate
			&& candidate._id === "RichHistory"
			&& typeof candidate.push === "function"
			&& typeof candidate.replace === "function"
			&& typeof candidate.goBack === "function"
			&& typeof candidate.goBackThroughModals === "function"
			&& Array.isArray(candidate._locationsHistory)
		);
	}catch{
		return false;
	}
}

function findRichHistory(value){
	const queue = [{value, depth: 0}];
	const visited = new Set();

	while(queue.length > 0){
		const {value, depth} = queue.shift();
		const candidate = unwrap(value);
		if(isRichHistory(candidate))return candidate;
		if(candidate === null || depth >= 2 || (typeof candidate !== "object" && typeof candidate !== "function"))continue;
		if(visited.has(candidate))continue;
		visited.add(candidate);

		let keys;
		try{
			keys = Object.keys(candidate);
		}catch{
			continue;
		}

		for(const key of keys){
			try{
				queue.push({value: candidate[key], depth: depth + 1});
			}catch{}
		}
	}

	return null;
}

function captureWebpackRequire(){
	let webpackChunk;
	try{
		webpackChunk = unwrap(pageWindow[webpackChunkName]);
	}catch{
		return null;
	}
	if(typeof webpackChunk?.push !== "function")return null;

	let capturedRequire = null;
	const runtimeCallback = (_webpackRequire)=>{
		capturedRequire = unwrap(_webpackRequire);
	};

	try{
		const chunkId = `mtlu-rich-history-${Date.now()}-${runtimeChunkId++}`;
		const payload = _cloneInto(
			[[chunkId], {}, runtimeCallback],
			pageWindow,
			{cloneFunctions: true},
		);
		webpackChunk.push(payload);
	}catch{
		return null;
	}

	return typeof capturedRequire === "function" ? capturedRequire : null;
}

function getWebpackRequire(){
	try{
		if(typeof webpackRequire === "function" && webpackRequire.c)return webpackRequire;
	}catch{}

	webpackRequire = captureWebpackRequire();
	return webpackRequire;
}

function searchRichHistory(){
	const _webpackRequire = getWebpackRequire();
	if(!_webpackRequire)return null;

	let moduleCache;
	try{
		moduleCache = unwrap(_webpackRequire.c);
	}catch{
		return null;
	}
	if(!moduleCache)return null;

	let moduleIds;
	try{
		moduleIds = Object.keys(moduleCache);
	}catch{
		return null;
	}

	for(const moduleId of moduleIds){
		try{
			const found = findRichHistory(unwrap(moduleCache[moduleId])?.exports);
			if(found)return found;
		}catch{}
	}

	return null;
}

function getRichHistory(){
	if(isRichHistory(richHistory))return richHistory;
	richHistory = searchRichHistory();
	return richHistory;
}

function pushWithRichHistory(uri, state){
	const history = getRichHistory();
	if(!history)throw new Error("Xの内部ルーター（RichHistory）を取得できませんでした。");

	if(state === undefined){
		history.push(uri);
	}else{
		const pageState = _cloneInto(state, pageWindow);
		history.push(uri, pageState);
	}
}

function pushWithBrowserHistory(uri, state = {}){
	if(new URL(pageWindow.location.href).pathname === new URL(uri, pageWindow.location.origin).pathname)return;
	pageWindow.history.pushState(state, "", uri);
	pageWindow.dispatchEvent(new Event("popstate"));
}

export function navigateTo(uri, state){
	let targetUrl;
	try{
		targetUrl = new URL(uri, pageWindow.location.origin);
	}catch(error){
		console.error({error: "[navigateTo] 遷移先のURLが正しくありません。", inputValue: uri, cause: error});
		return false;
	}

	if(targetUrl.origin !== pageWindow.location.origin){
		console.error({error: "[navigateTo] X以外のURLへは遷移できません。", inputValue: uri});
		return false;
	}

	const currentUrl = new URL(pageWindow.location.href);
	const targetPath = `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`;
	const currentPath = `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`;
	if(targetPath === currentPath)return true;

	try{
		pushWithRichHistory(targetPath, state);
		return true;
	}catch(firstError){
		console.error({
			error: "[navigateTo] Xの内部ルーターによる画面遷移に失敗しました。内部ルーターを再取得します。",
			uri: targetPath,
			cause: firstError,
		});
		richHistory = null;
		webpackRequire = null;
		try{
			pushWithRichHistory(targetPath, state);
			return true;
		}catch(retryError){
			console.error({
				error: "[navigateTo] Xの内部ルーターを再取得しても画面遷移できませんでした。従来方式へフォールバックします。",
				uri: targetPath,
				cause: retryError,
			});
			try{
				pushWithBrowserHistory(targetPath, state);
				return true;
			}catch(fallbackError){
				console.error({
					error: "[navigateTo] 従来方式でも画面遷移できませんでした。",
					uri: targetPath,
					cause: fallbackError,
				});
				return false;
			}
		}
	}
}

export function openPhoto(screenName, statusId, index = 1){
	const photoIndex = Number(index);
	if(!screenName || !/^\d+$/.test(String(statusId)) || !Number.isInteger(photoIndex) || photoIndex < 1){
		console.error({error: "[openPhoto] 引数が正しくありません。", screenName, statusId, index});
		return false;
	}

	const normalizedScreenName = String(screenName).replace(/^@/, "");
	return navigateTo(`/${encodeURIComponent(normalizedScreenName)}/status/${statusId}/photo/${photoIndex}`);
}
