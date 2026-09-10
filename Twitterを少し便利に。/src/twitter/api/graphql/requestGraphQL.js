import {assertRateLimitAvailable} from '../cache/rateLimits.js';
import {requestTwitterApi} from '../client/requestTwitterApi.js';
import {endpoints, graphqlBaseUrl} from './endpoints.js';

function addJsonParameter(searchParams, name, value){
	if(value !== undefined && value !== null){
		searchParams.set(name, JSON.stringify(value));
	}
}

/**
 * 定義済みのGraphQLエンドポイントへリクエストする。
 *
 * @param {keyof typeof endpoints|string} endpointName エンドポイント名。
 * @param {Object} [options={}] リクエスト設定。
 * @param {Record<string, any>} [options.variables={}] エンドポイント既定値へ上書きするvariables。
 * @param {Record<string, any>} [options.features] featuresの上書き。
 * @param {Record<string, any>} [options.fieldToggles] fieldTogglesの上書き。
 * @param {'GET'|'POST'} [options.method] 使用するHTTPメソッド。
 * @returns {Promise<Object>} GM_xmlhttpRequestの完全なレスポンス。
 */
export async function requestGraphQL(endpointName, {
	variables = {},
	features,
	fieldToggles,
	method,
} = {}){
	const endpoint = endpoints[endpointName];
	if(!endpoint)throw new Error(`Unknown GraphQL endpoint: ${endpointName}`);

	const requestMethod = method ?? endpoint.method?.[0] ?? 'GET';
	if(!endpoint.method?.includes(requestMethod)){
		throw new Error(`${endpointName} does not support ${requestMethod}`);
	}

	assertRateLimitAvailable('graphql', endpointName);

	const requestVariables = {...(endpoint.variables ?? {}), ...variables};
	const requestFeatures = features ?? endpoint.features;
	const requestFieldToggles = fieldToggles ?? endpoint.fieldToggles;
	let url = `${graphqlBaseUrl}${endpoint.url}`;
	let body = null;

	if(requestMethod === 'GET'){
		const searchParams = new URLSearchParams();
		addJsonParameter(searchParams, 'variables', requestVariables);
		addJsonParameter(searchParams, 'features', requestFeatures);
		addJsonParameter(searchParams, 'fieldToggles', requestFieldToggles);
		url += `?${searchParams.toString()}`;
	}else{
		body = JSON.stringify({
			variables: requestVariables,
			queryId: endpoint.url.split('/')[1],
			...(requestFeatures ? {features: requestFeatures} : {}),
			...(requestFieldToggles ? {fieldToggles: requestFieldToggles} : {}),
		});
	}

	return requestTwitterApi({
		url,
		endpointName,
		endpointPath: endpoint.url,
		method: requestMethod,
		apiType: 'graphql',
		body,
	});
}

