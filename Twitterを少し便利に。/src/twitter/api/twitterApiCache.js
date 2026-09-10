import {getFromIndexedDB, saveToIndexedDB} from '../../generic/storage/indexedDB.js';
import {endpoints as restEndpoints} from './1_1/endpoints.js';
import {endpoints as graphqlEndpoints} from './graphql/endpoints.js';
import {generateClientUUIDv4} from './util/generateClientUUIDv4.js';

/**
 * 空のタイムラインキャッシュを生成する。
 *
 * @returns {Object} タイムラインの内容、カーソル、直近追加分を保持するキャッシュ。
 */
export function generateDefaultTimelineCache(){
	return {
		contents: {},
		contentsList: [],
		contentsBySortIndex: {},
		rawData: {},
		newContents: {contents: {}, contentsList: [], contentsBySortIndex: {}, rawData: {}},
		cursor: {
			top: {entryId: null, sortIndex: null, value: null},
			bottom: {entryId: null, sortIndex: null, value: null},
		},
	};
}

function createRateLimitCache(endpoints){
	return Object.keys(endpoints).reduce((result, endpointName) => {
		result[endpointName] = {remaining: null, limit: null, reset: null, resetDate: null};
		return result;
	}, {});
}

export const twitterApiCache = {
	entities: {
		tweets: {},
		users: {},
		usersByScreenName: {},
		lists: {},
	},
	timelines: {
		following: generateDefaultTimelineCache(),
		forYou: generateDefaultTimelineCache(),
		bookmarks: generateDefaultTimelineCache(),
		ownLists: {...generateDefaultTimelineCache(), pinningLists: {}},
		userMedia: {},
		userLikes: {},
		userTweets: {},
		userReplies: {},
		userReposts: {},
		userPhotos: {},
		userVideos: {},
		userHighlights: {},
		userLists: {},
		lists: {},
		search: {},
	},
	rateLimits: {
		graphql: createRateLimitCache(graphqlEndpoints),
		'1.1': createRateLimitCache(restEndpoints),
	},
	client: {
		uuid: null,
	},
};

let initializationPromise = null;

/**
 * 永続化されたクライアントUUIDを読み込み、APIキャッシュを初期化する。
 * import時にはIndexedDBへアクセスせず、この関数が呼ばれた時点で初期化する。
 *
 * @returns {Promise<typeof twitterApiCache>} 初期化済みのAPIキャッシュ。
 */
export function initializeTwitterApiCache(){
	if(twitterApiCache.client.uuid)return Promise.resolve(twitterApiCache);
	if(initializationPromise)return initializationPromise;

	initializationPromise = (async () => {
		const storedSettings = await getFromIndexedDB('MTLU_twitterApi', 'settings');
		let uuid = storedSettings?.uuid;

		if(!uuid){
			uuid = generateClientUUIDv4();
			await saveToIndexedDB('MTLU_twitterApi', 'settings', {...storedSettings, uuid});
		}

		twitterApiCache.client.uuid = uuid;
		return twitterApiCache;
	})().catch(error => {
		initializationPromise = null;
		throw error;
	});

	return initializationPromise;
}
