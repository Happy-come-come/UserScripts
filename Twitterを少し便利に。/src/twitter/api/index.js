import {createTwitterApi} from './createTwitterApi.js';

export const twitterApi = createTwitterApi();

export {createTwitterApi} from './createTwitterApi.js';
export {twitterApiCache, initializeTwitterApiCache} from './twitterApiCache.js';
export {getTweet} from './graphql/tweets.js';
export {getUser} from './graphql/users.js';
export {
	getFollowingTimeline,
	getForYouTimeline,
	getUserTweets,
	getUserMedia,
	getUserLikes,
	getUserHighlights,
} from './graphql/timelines.js';
export {
	tweetAction,
	favoriteTweet,
	unfavoriteTweet,
	retweet,
	deleteRetweet,
	bookmark,
	deleteBookmark,
} from './graphql/actions.js';
export {getAccountSettings} from './1_1/account.js';
