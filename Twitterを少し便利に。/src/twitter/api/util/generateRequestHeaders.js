import {userAgent} from '../../../core/environment.js';
import {scriptState} from '../../../core/state.js';
import {getCookie} from '../../../generic/util/getCookie.js';
import {initializeTwitterApiCache, twitterApiCache} from '../twitterApiCache.js';
import {getXClientTransactionID} from './XClientTransaction/getXClientTransactionID.js';

const authorization = 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA';

function createHeadersTemplate(){
	return {
		'Content-Type': 'application/json',
		'User-agent': userAgent || '',
		'accept': '*/*',
		'Accept-Encoding': 'zstd, br, gzip, deflate',
		'Origin': `https://${window.location.hostname}`,
		'authorization': authorization,
		'x-csrf-token': getCookie('ct0') || '',
		'x-twitter-auth-type': 'OAuth2Session',
		'x-twitter-client-language': scriptState.sessionData?.userData?.language || 'ja',
		'x-twitter-active-user': 'yes',
		...(twitterApiCache.client.uuid ? {'x-twitter-client-uuid': twitterApiCache.client.uuid} : {}),
		'Sec-Fetch-Site': 'same-origin',
		'Sec-Fetch-Mode': 'navigate',
	};
}

/**
 * Twitter APIへのリクエストに使用するHTTPヘッダーを生成する。
 * 生成できた場合は、X-Client-Transaction IDを共通ヘッダーへ追加して返す。
 *
 * @param {string} endpoint リクエスト先APIのエンドポイント。
 * @param {'GET'|'POST'} method HTTPメソッド。
 * @param {'graphql'|'1.1'} [apiType='graphql'] APIの種類。
 * @param {Object} [options={}] ヘッダー生成オプション。
 * @param {boolean} [options.refreshTransactionId=false] X-Client-Transaction IDの生成データを再取得するかどうか。
 * @returns {Promise<Record<string, string>>} リクエストヘッダーで解決するPromise。
 * X-Client-Transaction IDの生成に失敗した場合は拒否される。
 */
export async function generateRequestHeaders(endpoint, method, apiType = 'graphql', {refreshTransactionId = false} = {}){
	await initializeTwitterApiCache();
	const apiBasePath = apiType === 'graphql' ? '/i/api/graphql' : `/i/api/${apiType}`;
	const id = await getXClientTransactionID({
		path: `${apiBasePath}${endpoint}`,
		method,
		refresh: refreshTransactionId,
	});

	return {
		...createHeadersTemplate(),
		...(id ? {'x-client-transaction-id': id} : {}),
	};
}
