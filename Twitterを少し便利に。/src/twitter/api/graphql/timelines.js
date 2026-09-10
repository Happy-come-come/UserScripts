import {runWithPendingRequest} from '../cache/pendingRequests.js';
import {getRateLimit} from '../cache/rateLimits.js';
import {processTimeline} from '../processors/processTimeline.js';
import {twitterApiCache} from '../twitterApiCache.js';
import {requestGraphQL} from './requestGraphQL.js';
import {getUser} from './users.js';

function getCursor(type, place, cacheKey = null){
	const timeline = cacheKey === null
		? twitterApiCache.timelines[type]
		: twitterApiCache.timelines[type][cacheKey];

	if(place === 'refresh'){
		if(timeline){
			timeline.cursor.top = {entryId: null, sortIndex: null, value: null};
			timeline.cursor.bottom = {entryId: null, sortIndex: null, value: null};
		}
		return null;
	}

	if(place !== 'top' && place !== 'bottom'){
		throw new TypeError(`Invalid timeline place: ${place}`);
	}
	return timeline?.cursor?.[place]?.value ?? null;
}

function collectTimelineEntries(instructions){
	if(!Array.isArray(instructions))return [];
	const entries = [];
	for(const instruction of instructions){
		if(Array.isArray(instruction.moduleItems))entries.push(...instruction.moduleItems);
		if(instruction.type === 'TimelineAddEntries'){
			for(const entry of instruction.entries ?? []){
				if(Array.isArray(entry.content?.items))entries.push(...entry.content.items);
				entries.push(entry);
			}
		}
	}
	return entries;
}

async function getHomeTimeline({endpointName, type, responsePath, place}){
	const cursor = getCursor(type, place);
	const variables = cursor ? {cursor} : {};
	return runWithPendingRequest(`timeline:${type}:${place}:${cursor ?? ''}`, async () => {
		const response = await requestGraphQL(endpointName, {variables});
		const instructions = responsePath(response?.response);
		const timeline = processTimeline({entries: collectTimelineEntries(instructions), type});
		return {...timeline, apiRateLimit: getRateLimit('graphql', endpointName)};
	});
}

export function getFollowingTimeline(place = 'bottom'){
	return getHomeTimeline({
		endpointName: 'HomeLatestTimeline',
		type: 'following',
		place,
		responsePath: body => body?.data?.home?.home_timeline_urt?.instructions ?? [],
	});
}

export function getForYouTimeline(place = 'bottom'){
	return getHomeTimeline({
		endpointName: 'HomeTimeline',
		type: 'forYou',
		place,
		responsePath: body => body?.data?.home?.home_timeline_urt?.instructions ?? [],
	});
}

async function getUserTimeline({screenName, place, endpointName, type}){
	const user = await getUser(screenName);
	if(!user?.rest_id)return null;
	const userId = user.rest_id;
	const cursor = getCursor(type, place, userId);
	const variables = {userId, ...(cursor ? {cursor} : {})};

	return runWithPendingRequest(`timeline:${type}:${userId}:${place}:${cursor ?? ''}`, async () => {
		const response = await requestGraphQL(endpointName, {variables});
		const result = response.response?.data?.user?.result;
		const instructions = result?.timeline_v2?.timeline?.instructions
			?? result?.timeline?.timeline?.instructions
			?? [];
		const timeline = processTimeline({
			entries: collectTimelineEntries(instructions),
			type,
			cacheKey: userId,
		});
		return {...timeline, apiRateLimit: getRateLimit('graphql', endpointName)};
	});
}

export function getUserTweets(screenName, place = 'bottom'){
	return getUserTimeline({screenName, place, endpointName: 'UserTweets', type: 'userTweets'});
}

export function getUserMedia(screenName, place = 'bottom'){
	return getUserTimeline({screenName, place, endpointName: 'UserMedia', type: 'userMedia'});
}

export function getUserLikes(screenName, place = 'bottom'){
	return getUserTimeline({screenName, place, endpointName: 'Likes', type: 'userLikes'});
}

export function getUserHighlights(screenName, place = 'bottom'){
	return getUserTimeline({screenName, place, endpointName: 'UserHighlightsTweets', type: 'userHighlights'});
}

