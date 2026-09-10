import {runWithPendingRequest} from '../cache/pendingRequests.js';
import {getRateLimit} from '../cache/rateLimits.js';
import {twitterApiCache} from '../twitterApiCache.js';
import {requestGraphQL} from './requestGraphQL.js';

/**
 * スクリーンネームからユーザーデータを取得する。
 *
 * @param {string} screenName `@`を含まないスクリーンネーム。
 * @param {boolean} [refresh=false] キャッシュを無視して再取得するかどうか。
 * @returns {Promise<Object|null>} ユーザーデータ。ユーザーが存在しない場合はnull。
 */
export function getUser(screenName, refresh = false){
	if(!screenName)throw new TypeError('screenName is required');
	const normalizedScreenName = String(screenName).replace(/^@/, '');
	const cachedUser = twitterApiCache.entities.usersByScreenName[normalizedScreenName];
	if(cachedUser && !refresh){
		return Promise.resolve({...cachedUser, apiRateLimit: getRateLimit('graphql', 'UserByScreenName')});
	}

	return runWithPendingRequest(`user:${normalizedScreenName}`, async () => {
		const response = await requestGraphQL('UserByScreenName', {
			variables: {screen_name: normalizedScreenName},
		});
		const user = response?.response?.data?.user?.result;
		if(!user?.rest_id)return null;

		const storedUser = {...user, API_type: 'graphQL'};
		twitterApiCache.entities.users[user.rest_id] = storedUser;
		const responseScreenName = user.legacy?.screen_name ?? normalizedScreenName;
		twitterApiCache.entities.usersByScreenName[responseScreenName] = storedUser;

		return {...storedUser, apiRateLimit: getRateLimit('graphql', 'UserByScreenName')};
	});
}

