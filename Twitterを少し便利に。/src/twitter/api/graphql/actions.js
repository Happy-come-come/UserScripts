import {getRateLimit} from '../cache/rateLimits.js';
import {requestGraphQL} from './requestGraphQL.js';

const endpointAliases = {
	favorite: 'FavoriteTweet',
	unfavorite: 'UnfavoriteTweet',
	retweet: 'CreateRetweet',
	deleteRetweet: 'DeleteRetweet',
	bookmark: 'CreateBookmark',
	deleteBookmark: 'DeleteBookmark',
};

/**
 * ツイートに対するGraphQL操作を実行する。
 *
 * @param {keyof typeof endpointAliases|string} action 操作名またはエンドポイント名。
 * @param {string} tweetId 対象のツイートID。
 * @returns {Promise<boolean>} 操作に成功した場合はtrue。
 */
export async function tweetAction(action, tweetId){
	if(!tweetId)throw new TypeError('tweetId is required');
	const endpointName = endpointAliases[action] ?? action;
	const response = await requestGraphQL(endpointName, {
		method: 'POST',
		variables: {tweet_id: String(tweetId)},
	});
	return response?.status >= 200 && response?.status < 300;
}

export function favoriteTweet(tweetId){
	return tweetAction('favorite', tweetId);
}

export function unfavoriteTweet(tweetId){
	return tweetAction('unfavorite', tweetId);
}

export function retweet(tweetId){
	return tweetAction('retweet', tweetId);
}

export function deleteRetweet(tweetId){
	return tweetAction('deleteRetweet', tweetId);
}

export function bookmark(tweetId){
	return tweetAction('bookmark', tweetId);
}

export function deleteBookmark(tweetId){
	return tweetAction('deleteBookmark', tweetId);
}

export function getTweetActionRateLimit(action){
	return getRateLimit('graphql', endpointAliases[action] ?? action);
}

