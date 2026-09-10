import {assertRateLimitAvailable} from '../cache/rateLimits.js';
import {requestTwitterApi} from '../client/requestTwitterApi.js';
import {endpoints, restBaseUrl} from './endpoints.js';

export async function request1_1(endpointName, {parameters = {}, method} = {}){
	const endpoint = endpoints[endpointName];
	if(!endpoint)throw new Error(`Unknown Twitter API 1.1 endpoint: ${endpointName}`);
	const requestMethod = method ?? endpoint.method?.[0] ?? 'GET';
	if(!endpoint.method?.includes(requestMethod)){
		throw new Error(`${endpointName} does not support ${requestMethod}`);
	}

	assertRateLimitAvailable('1.1', endpointName);
	const searchParams = new URLSearchParams(parameters);
	const query = searchParams.toString();
	return requestTwitterApi({
		url: `${restBaseUrl}${endpoint.url}${query ? `?${query}` : ''}`,
		endpointName,
		endpointPath: endpoint.url,
		method: requestMethod,
		apiType: '1.1',
	});
}

