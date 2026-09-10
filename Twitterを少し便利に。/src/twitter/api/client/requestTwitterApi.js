import {request} from '../../../generic/fetch/request.js';
import {updateRateLimit} from '../cache/rateLimits.js';
import {generateRequestHeaders} from '../util/generateRequestHeaders.js';

function getErrorResponse(error){
	return error?.response
		?? error?.error?.response
		?? error?.error?.error?.response
		?? null;
}

/**
 * Twitter APIへのリクエストを実行し、ヘッダー生成、X-Client-Transaction IDの
 * 一度限りの更新、レート制限キャッシュの更新を行う。
 *
 * @param {Object} options リクエスト設定。
 * @param {string} options.url リクエストURL。
 * @param {string} options.endpointName キャッシュで使用するエンドポイント名。
 * @param {string} options.endpointPath X-Client-Transaction IDに使用するエンドポイントパス。
 * @param {'GET'|'POST'} options.method HTTPメソッド。
 * @param {'graphql'|'1.1'} [options.apiType='graphql'] APIの種類。
 * @param {string|null} [options.body=null] リクエストボディ。
 * @param {boolean} [options.updateRateLimitCache=true] レート制限情報を更新するかどうか。
 * @param {number} [options.maxRetries=1] 通常の通信エラーに対する最大再試行回数。
 * @returns {Promise<Object>} GM_xmlhttpRequestの完全なレスポンス。
 */
export async function requestTwitterApi({
	url,
	endpointName,
	endpointPath,
	method,
	apiType = 'graphql',
	body = null,
	updateRateLimitCache = true,
	maxRetries = 1,
}){
	let refreshTransactionId = false;

	for(let transactionAttempt = 0; transactionAttempt < 2; transactionAttempt++){
		const headers = await generateRequestHeaders(
			endpointPath,
			method,
			apiType,
			{refreshTransactionId},
		);

		try{
			const response = await request({
				url,
				method,
				body,
				headers,
				onlyResponse: false,
				dontUseGenericHeaders: true,
				maxRetries,
			});

			if(updateRateLimitCache)updateRateLimit(apiType, endpointName, response);
			return response;
		}catch(error){
			const errorResponse = getErrorResponse(error);
			if(updateRateLimitCache && errorResponse){
				updateRateLimit(apiType, endpointName, errorResponse);
			}

			if(errorResponse?.status === 404 && transactionAttempt === 0){
				refreshTransactionId = true;
				continue;
			}

			throw error;
		}
	}

	throw new Error(`Twitter API request failed: ${endpointName}`);
}

