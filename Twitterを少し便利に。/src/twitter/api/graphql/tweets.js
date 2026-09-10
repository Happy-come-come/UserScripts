import {runWithPendingRequest} from '../cache/pendingRequests.js';
import {getRateLimit} from '../cache/rateLimits.js';
import {processGraphQL} from '../processors/processGraphQL.js';
import {twitterApiCache} from '../twitterApiCache.js';
import {requestGraphQL} from './requestGraphQL.js';

/**
 * ツイートの詳細を取得する。
 *
 * @param {string} tweetId ツイートID。
 * @param {boolean} [refresh=false] キャッシュを無視して再取得するかどうか。
 * @returns {Promise<Object>} ツイートデータとレート制限情報。
 */
export function getTweet(tweetId, refresh = false){
	if(!tweetId)throw new TypeError('tweetId is required');
	const cachedTweet = twitterApiCache.entities.tweets[tweetId];
	if(cachedTweet && !refresh){
		return Promise.resolve({...cachedTweet, apiRateLimit: getRateLimit('graphql', 'TweetDetail')});
	}

	return runWithPendingRequest(`tweet:${tweetId}`, async () => {
		const response = await requestGraphQL('TweetDetail', {
			variables: {focalTweetId: String(tweetId)},
		});
		const instructions = response?.response?.data
			?.threaded_conversation_with_injections_v2?.instructions ?? [];
		const entries = instructions
			.filter(instruction => instruction.type === 'TimelineAddEntries')
			.flatMap(instruction => instruction.entries ?? []);

		processGraphQL(entries);
		const tweet = twitterApiCache.entities.tweets[tweetId];
		if(!tweet)throw new Error(`TweetDetail did not contain tweet: ${tweetId}`);
		return {...tweet, apiRateLimit: getRateLimit('graphql', 'TweetDetail')};
	});
}

