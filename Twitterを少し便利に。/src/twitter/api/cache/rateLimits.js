import {twitterApiCache} from '../twitterApiCache.js';

export class TwitterApiRateLimitError extends Error{
	constructor(apiType, endpointName, resetDate){
		super(`Twitter API rate limit exceeded: ${apiType}/${endpointName}`);
		this.name = 'TwitterApiRateLimitError';
		this.apiType = apiType;
		this.endpointName = endpointName;
		this.resetDate = resetDate;
	}
}

function parseHeaderNumber(responseHeaders, headerName){
	if(typeof responseHeaders !== 'string')return null;
	const match = responseHeaders.match(new RegExp(`^${headerName}:\\s*(\\d+)`, 'im'));
	return match ? Number(match[1]) : null;
}

export function getRateLimit(apiType, endpointName){
	return twitterApiCache.rateLimits[apiType]?.[endpointName] ?? null;
}

export function assertRateLimitAvailable(apiType, endpointName){
	const rateLimit = getRateLimit(apiType, endpointName);
	if(rateLimit?.remaining === 0 && rateLimit.resetDate?.getTime() > Date.now()){
		throw new TwitterApiRateLimitError(apiType, endpointName, rateLimit.resetDate);
	}
}

/**
 * GM_xmlhttpRequestのレスポンスヘッダーからレート制限情報を更新する。
 *
 * @param {'graphql'|'1.1'} apiType APIの種類。
 * @param {string} endpointName エンドポイント名。
 * @param {Object} response GM_xmlhttpRequestのレスポンス。
 * @returns {Object|null} 更新後のレート制限情報。
 */
export function updateRateLimit(apiType, endpointName, response){
	const responseHeaders = response?.responseHeaders;
	if(typeof responseHeaders !== 'string')return getRateLimit(apiType, endpointName);

	if(!twitterApiCache.rateLimits[apiType])twitterApiCache.rateLimits[apiType] = {};
	const current = twitterApiCache.rateLimits[apiType][endpointName] ?? {};
	const remaining = parseHeaderNumber(responseHeaders, 'x-rate-limit-remaining');
	const limit = parseHeaderNumber(responseHeaders, 'x-rate-limit-limit');
	const reset = parseHeaderNumber(responseHeaders, 'x-rate-limit-reset');

	const updated = {
		remaining: remaining ?? current.remaining ?? null,
		limit: limit ?? current.limit ?? null,
		reset: reset ?? current.reset ?? null,
		resetDate: reset !== null
			? new Date(reset * 1000)
			: current.resetDate ?? null,
	};

	twitterApiCache.rateLimits[apiType][endpointName] = updated;
	return updated;
}

