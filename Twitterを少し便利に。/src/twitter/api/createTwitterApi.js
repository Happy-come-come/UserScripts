import {getAccountSettings} from './1_1/account.js';
import {getRateLimit} from './cache/rateLimits.js';
import {
	bookmark,
	deleteBookmark,
	deleteRetweet,
	favoriteTweet,
	retweet,
	tweetAction,
	unfavoriteTweet,
} from './graphql/actions.js';
import {
	getFollowingTimeline,
	getForYouTimeline,
	getUserHighlights,
	getUserLikes,
	getUserMedia,
	getUserTweets,
} from './graphql/timelines.js';
import {getTweet} from './graphql/tweets.js';
import {getUser} from './graphql/users.js';
import {initializeTwitterApiCache, twitterApiCache} from './twitterApiCache.js';

/**
 * Twitter APIの公開インターフェースを生成する。
 * 内部実装は機能別モジュールへ委譲し、従来のTwitterApiに近い呼び出し方を提供する。
 *
 * @returns {Object} Twitter APIクライアント。
 */
export function createTwitterApi(){
	return {
		cache: twitterApiCache,

		get tweetsData(){
			return twitterApiCache.entities.tweets;
		},
		get tweetsUserData(){
			return twitterApiCache.entities.users;
		},
		get tweetsUserDataByUserName(){
			return twitterApiCache.entities.usersByScreenName;
		},
		get lists(){
			return twitterApiCache.entities.lists;
		},
		get timelines(){
			return twitterApiCache.timelines;
		},

		init: initializeTwitterApiCache,
		getTweet,
		getUser,
		getHomeTimeline: getFollowingTimeline,
		getFollowingTimeline,
		getForYouTimeline,
		getUserTweets,
		getUserMedia,
		getUserLikes,
		getUserHighlights,
		tweetAction,
		favoriteTweet,
		unfavoriteTweet,
		retweet,
		deleteRetweet,
		bookmark,
		deleteBookmark,
		getAccountSettings,

		getApiRateLimit(apiType = 'graphql', endpointName){
			if(endpointName)return getRateLimit(apiType, endpointName);
			return twitterApiCache.rateLimits[apiType] ?? null;
		},
	};
}
