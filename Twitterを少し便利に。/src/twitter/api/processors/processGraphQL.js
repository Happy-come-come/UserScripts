import {twitterApiCache} from '../twitterApiCache.js';

function extractTweet(result){
	return result?.tweet ?? result?.result?.tweet ?? result?.result ?? result ?? null;
}

/**
 * GraphQLのtimeline entriesからツイートとユーザーを抽出し、正規化してキャッシュする。
 *
 * @param {Array<Object>} entries GraphQLレスポンス内のtimeline entries。
 * @param {typeof twitterApiCache} [cache=twitterApiCache] 保存先のAPIキャッシュ。
 * @returns {number} 保存または更新したツイートの数。
 */
export function processGraphQL(entries, cache = twitterApiCache){
	if(!Array.isArray(entries))return 0;
	let processedCount = 0;

	const storeTweet = tweet => {
		if(!tweet?.rest_id || tweet.tombstone)return null;

		const storeNestedTweet = propertyName => {
			const container = tweet[propertyName];
			const nestedTweet = extractTweet(container);
			if(!nestedTweet?.rest_id)return;
			const storedNestedTweet = storeTweet(nestedTweet);
			if(!storedNestedTweet)return;

			if(container?.result?.tweet){
				container.result.tweet = storedNestedTweet;
			}else if(container?.tweet){
				container.tweet = storedNestedTweet;
			}else if(container && 'result' in container){
				container.result = storedNestedTweet;
			}
		};

		storeNestedTweet('quoted_status_result');
		storeNestedTweet('retweeted_status_result');

		const user = tweet.core?.user_results?.result;
		if(user?.rest_id){
			const storedUser = {...user, API_type: 'graphQL'};
			cache.entities.users[user.rest_id] = storedUser;
			if(user.legacy?.screen_name){
				cache.entities.usersByScreenName[user.legacy.screen_name] = storedUser;
			}
			tweet.core.user_results.result = storedUser;
		}

		const storedTweet = {...tweet, API_type: 'graphQL'};
		cache.entities.tweets[tweet.rest_id] = storedTweet;
		processedCount++;
		return storedTweet;
	};

	const processEntries = targetEntries => {
		for(const entry of targetEntries){
			const tweetResults = entry?.content?.itemContent?.tweet_results
				?? entry?.item?.itemContent?.tweet_results;

			if(tweetResults){
				storeTweet(extractTweet(tweetResults.result ?? tweetResults));
			}

			const items = entry?.content?.items;
			if(Array.isArray(items))processEntries(items);
		}
	};

	processEntries(entries);
	return processedCount;
}

