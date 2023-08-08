// ==UserScript==
// @name			[Twitter]長いツイートをTLで展開
// @name:ja			[Twitter]長いツイートをTLで展開
// @name:en			[Twitter]Note_Tweet expander
// @version			1145141919810.0.8
// @description			長いツイートを「更に表示」を押さなくてもTLで展開します。
// @description:ja			長いツイートを「更に表示」を押さなくてもTLで展開します。
// @description:en			Long tweets will expand in the TimeLine without having to press "Show More".
// @author			ゆにてぃー
// @match			https://twitter.com/*
// @match			https://mobile.twitter.com/*
// @connect			api.twitter.com
// @icon			https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant			GM_xmlhttpRequest
// @license			MIT
// @namespace			https://greasyfork.org/ja/users/1023652
// ==/UserScript==

(function() {
	'use strict';
	const cookies = getCookieArray();
	let updating = false;
	window.addEventListener("scroll", update);
	init();
	async function main(){
		const link_class = "r-18u37iz css-4rbku5 css-18t94o4 css-901oao css-16my406 r-1cvl2hr r-1loqt21 r-poiln3 r-bcqeeo r-qvutc0";
		document.querySelectorAll('span[data-testid="tweet-text-show-more-link"]').forEach(async function(element){
			const tweet_id = Array.from(element.parentNode.parentNode.parentNode.parentNode.querySelectorAll("a[aria-label]")).filter(function(tmp){return tmp.href.match(/\/status\/[0-9]*(\/analytics)?$/)})[0].href.match(/status\/(\d+)/)[1];
			const response_data = await request(new requestObject_twitter(tweet_id,cookies));
			const twitter_qraphql_json = response_data.data.threaded_conversation_with_injections_v2.instructions[0];
			const tweet_data = twitter_qraphql_json.entries[twitter_qraphql_json.entries.findIndex((tmp) => tmp.entryId == `tweet-${tweet_id}`)].content.itemContent.tweet_results;
			const note_tweet = tweet_data.result.note_tweet?.note_tweet_results.result || tweet_data.result.tweet.note_tweet.note_tweet_results.result;
			const hashtags = get_only_particular_key_value(note_tweet.entity_set,"hashtags",[]);
			const user_mentions = get_only_particular_key_value(note_tweet.entity_set,"user_mentions",[]);
			const symbols = get_only_particular_key_value(note_tweet.entity_set,"symbols",[]);
			const urls = note_tweet.entity_set.urls;
			const tweet_node = element.parentNode.parentNode.querySelector('[data-testid="tweetText"]');
			var new_tweet_text = note_tweet.text;
			urls.forEach(target =>{
				new_tweet_text = new_tweet_text.replace(new RegExp(`${target.url}(?=(\\s|$|\\u3000|\\W)(?!\\.|,))`, 'gu'), `<a class="${link_class}" dir="ltr" role="link" href="${target.url}">${target.display_url}</a>`);
			});
			function countSurrogatePairs(str){
				return Array.from(str).filter(char => char.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/)).length;
			}
			let combined = [].concat(
				hashtags.map(tag => ({
					type: 'hashtag',
					indices: tag.indices,
					text: tag.text
				})),
				user_mentions.map(mention => ({
					type: 'mention',
					indices: mention.indices,
					text: mention.screen_name
				})),
				symbols.map(symbol => ({
					type: 'symbol',
					indices: symbol.indices,
					text: symbol.text
				}))
			);


			// combinedをindicesの順にソート
			combined.sort((a, b) => b.indices[0] - a.indices[0]);
			let transformedText = new_tweet_text;

			combined.forEach(item => {
				let start = item.indices[0];
				let end = item.indices[1];

				// サロゲートペアの数をカウントして調整
				const adjustment = countSurrogatePairs(transformedText.slice(0, end));
				start += adjustment;
				end += adjustment;

				let replacement = '';
				switch(item.type){
					case 'hashtag':
						replacement = `<a class="${link_class}" dir="ltr" role="link" href="https://twitter.com/hashtag/${item.text}">#${item.text}</a>`;
						break;
					case 'mention':
						replacement = `<a class="${link_class}" dir="ltr" role="link" href="https://twitter.com/${item.text}">@${item.text}</a>`;
						break;
					case 'symbol':
						replacement = `<a class="${link_class}" dir="ltr" role="link" href="https://twitter.com/search?q=%24${item.text}&src=cashtag_click">$${item.text}</a>`;
						break;
				}
				transformedText = transformedText.slice(0, start) + replacement + transformedText.slice(end);
			});
			new_tweet_text = transformedText;

			var new_tweet_node = document.createElement("span");
			new_tweet_node.className = 'css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0';
			new_tweet_node.innerHTML = new_tweet_text;
			while (tweet_node.firstChild) {
				tweet_node.removeChild(tweet_node.firstChild);
			}
			tweet_node.appendChild(new_tweet_node);
			element.remove();
		});
	}
	function init() {
		main();
	}
	function update() {
		if(updating) return;
		updating = true;
		init();
		setTimeout(() => {updating = false;}, 1500);
	}
	function get_only_particular_key_value(object, path, defaultValue = undefined){
		var isArray = Array.isArray;
		if(object == null || typeof object != 'object') return defaultValue;
		return (isArray(object)) ? object.map(createProcessFunction(path)) : createProcessFunction(path)(object);
		function createProcessFunction(path){
			if(typeof path == 'string') path = path.split('.');
			if(!isArray(path)) path = [path];
			return function(object){
				var index = 0,
					length = path.length;
				while(index < length){
					const key = toString_(path[index++]);
					if(object === undefined){
						return defaultValue;
					}
					if(isArray(object)){
						object = object.map(item => item[key]);
					}else{
						object = object[key];
					}
				}
				return (index && index == length) ? object : void 0;
			};
		}
		function toString_(value){
			if(value == null) return '';
			if(typeof value == 'string') return value;
			if(isArray(value)) return value.map(toString) + '';
			var result = value + '';
			return '0' == result && 1 / value == -(1 / 0) ? '-0' : result;
		}
	}
	function getCookieArray() {
		var arr = [];
		if(document.cookie != '') {
			var tmp = document.cookie.split('; ');
			for(var i = 0; i < tmp.length; i++) {
				var data = tmp[i].split('=');
				arr[data[0]] = decodeURIComponent(data[1]);
			}
		}
		return arr;
	}
	async function request(object, timeout = 60000) {
		return new Promise((resolve, reject) => {
			GM_xmlhttpRequest({
				method: object.method,
				url: object.url,
				headers: object.headers,
				responseType: object.respType,
				data: object.body,
				anonymous: object.anonymous,
				timeout: timeout,
				onload: function(responseDetails) {
					return resolve(responseDetails.response);
				},
				ontimeout: function(responseDetails) {
					reject(`[request]time out:\nresponse ${responseDetails}`)
				},
				onerror: function(responseDetails) {
					reject(`[request]error:\nresponse ${responseDetails}`)
				}
			});
		});
	}
	class requestObject_twitter {
		constructor(ID, cookies) {
			this.method = 'GET';
			this.respType = 'json';
			this.url = `https://twitter.com/i/api/graphql/TuC3CinYecrqAyqccUyFhw/TweetDetail?variables=%7B%22focalTweetId%22%3A%22${ID}%22%2C%22referrer%22%3A%22home%22%2C%22with_rux_injections%22%3Afalse%2C%22includePromotedContent%22%3Atrue%2C%22withCommunity%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withArticleRichContent%22%3Atrue%2C%22withBirdwatchNotes%22%3Atrue%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22rweb_lists_timeline_redesign_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_media_download_video_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withArticleRichContentState%22%3Atrue%7D`;
			this.body = null;
			this.headers = {
				"Content-Type": "application/json",
				'User-agent': navigator.userAgent || navigator.vendor || window.opera,
				'accept': '*/*',
				'authorization': `Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA`,
				'x-csrf-token': cookies.ct0
			};
			this.package = null;
			this.anonymous = false;
		}
	}
})();
