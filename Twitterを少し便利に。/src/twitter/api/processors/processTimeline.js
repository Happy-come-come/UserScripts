import {generateDefaultTimelineCache, twitterApiCache} from '../twitterApiCache.js';
import {processGraphQL} from './processGraphQL.js';

const singletonTimelineTypes = new Set(['following', 'forYou', 'bookmarks', 'ownLists']);
const keyedTimelineTypes = new Set([
	'userMedia', 'userLikes', 'userTweets', 'userReplies', 'userReposts',
	'userPhotos', 'userVideos', 'userHighlights', 'userLists', 'lists', 'search',
]);

function getTimelineTarget(cache, type, cacheKey){
	if(singletonTimelineTypes.has(type))return cache.timelines[type];
	if(!keyedTimelineTypes.has(type))throw new Error(`Invalid timeline type: ${type}`);
	if(cacheKey === null || cacheKey === undefined){
		throw new Error(`A cache key is required for timeline type: ${type}`);
	}

	if(!cache.timelines[type][cacheKey]){
		cache.timelines[type][cacheKey] = generateDefaultTimelineCache();
	}
	return cache.timelines[type][cacheKey];
}

/**
 * GraphQLのtimeline entriesを正規化し、対象タイムラインのキャッシュへ統合する。
 *
 * @param {Object} options 処理設定。
 * @param {Array<Object>} [options.entries=[]] timeline entries。
 * @param {string} options.type キャッシュするタイムラインの種類。
 * @param {string|null} [options.cacheKey=null] ユーザーIDやリストIDなど、タイムラインを識別するキー。
 * @param {typeof twitterApiCache} [options.cache=twitterApiCache] 保存先のAPIキャッシュ。
 * @returns {Object} 更新後のタイムラインキャッシュ。
 */
export function processTimeline({entries = [], type, cacheKey = null, cache = twitterApiCache} = {}){
	const timelineTarget = getTimelineTarget(cache, type, cacheKey);
	if(!Array.isArray(entries) || entries.length === 0)return timelineTarget;

	processGraphQL(entries, cache);
	const newContents = {};
	const newRawData = {};
	const newContentsData = {contents: {}, rawData: {}, contentsList: [], contentsBySortIndex: {}};

	for(const entry of entries){
		const entryId = entry?.entryId;
		if(!entryId || entryId.includes('promoted'))continue;

		if(entryId.includes('tweet-')){
			const tweetId = entryId.split('-').pop();
			const itemContent = entry.item?.itemContent ?? entry.content?.itemContent;
			const sortIndex = entry.sortIndex ?? tweetId;
			newRawData[entryId] = entry;
			newContents[entryId] = {
				sortIndex,
				entryId,
				tweetDisplayType: itemContent?.tweetDisplayType,
				controllerData: (entry.item ?? entry.content)?.clientEventInfo?.details?.timelinesDetails?.controllerData,
				tweetData: cache.entities.tweets[tweetId],
			};
			continue;
		}

		if(entryId.startsWith('profile-conversation')){
			const tweetIds = [];
			newRawData[entryId] = entry;
			for(const item of entry.content?.items ?? []){
				const tweet = extractTimelineTweet(item);
				if(tweet?.rest_id)tweetIds.push(tweet.rest_id);
			}
			newContents[entryId] = {
				sortIndex: entry.sortIndex,
				entryId,
				tweetDisplayType: entry.content?.displayType,
				controllerData: entry.content?.clientEventInfo?.details?.timelinesDetails?.controllerData,
				tweetData: tweetIds.map(tweetId => cache.entities.tweets[tweetId]).filter(Boolean),
				allTweetIds: entry.content?.metadata?.conversationMetadata?.allTweetIds,
			};
			continue;
		}

		if(entryId.startsWith('cursor-top') || entryId.startsWith('cursor-bottom')){
			const position = entryId.startsWith('cursor-top') ? 'top' : 'bottom';
			timelineTarget.cursor[position] = {
				sortIndex: entry.sortIndex ?? null,
				entryId,
				value: entry.content?.value ?? null,
			};
			newRawData[entryId] = entry;
			continue;
		}

		if(entryId.includes('subscribed-list-module')){
			newRawData[entryId] = entry;
			for(const item of entry.content?.items ?? []){
				const listContent = {
					sortIndex: item.sortIndex,
					entryId: item.entryId,
					listData: item.itemContent?.list,
					isPinning: item.itemContent?.list?.pinning,
				};
				newContents[item.entryId] = listContent;
				if(listContent.isPinning && cache.timelines.ownLists.pinningLists){
					cache.timelines.ownLists.pinningLists[item.entryId] = listContent;
				}
			}
			continue;
		}

		if(entryId.startsWith('list-')){
			newRawData[entryId] = entry;
			newContents[entryId] = {
				sortIndex: entry.sortIndex,
				entryId,
				listData: entry.content?.itemContent?.list,
			};
		}
	}

	for(const [entryId, content] of Object.entries(newContents)){
		const isNew = !timelineTarget.contents[entryId];
		timelineTarget.contents[entryId] = content;
		timelineTarget.rawData[entryId] = newRawData[entryId];
		if(content.sortIndex !== undefined && content.sortIndex !== null){
			timelineTarget.contentsBySortIndex[content.sortIndex] = content;
		}

		if(isNew){
			newContentsData.contents[entryId] = content;
			newContentsData.rawData[entryId] = newRawData[entryId];
			newContentsData.contentsList.push(content);
			if(content.sortIndex !== undefined && content.sortIndex !== null){
				newContentsData.contentsBySortIndex[content.sortIndex] = content;
			}
		}
	}

	const sortByIndex = (left, right) => String(right.sortIndex ?? '').localeCompare(String(left.sortIndex ?? ''));
	timelineTarget.contentsList = Object.values(timelineTarget.contents).sort(sortByIndex);
	newContentsData.contentsList.sort(sortByIndex);
	timelineTarget.newContents = newContentsData;
	return timelineTarget;
}

function extractTimelineTweet(item){
	const result = item?.item?.itemContent?.tweet_results?.result
		?? item?.itemContent?.tweet_results?.result;
	return result?.tweet ?? result;
}

