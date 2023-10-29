// ==UserScript==
// @name			[Twitter]長いツイートをTLで展開
// @name:ja			[Twitter]長いツイートをTLで展開
// @name:en			[Twitter]Note_Tweet expander
// @version			1145141919810.0.15
// @description			長いツイートを「更に表示」を押さなくてもTLで展開します。
// @description:ja			長いツイートを「更に表示」を押さなくてもTLで展開します。
// @description:en			Long tweets will expand in the TimeLine without having to press "Show More".
// @author			ゆにてぃー
// @match			https://twitter.com/*
// @match			https://mobile.twitter.com/*
// @match			https://x.com/*
// @match			https://X.com/*
// @connect			api.twitter.com
// @icon			data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJkSURBVHgB7VZBbtpQEH3zIW0WVYuXVaH4Bs0NSk4AOUFhEarskhMknIDsqkKlcIT0BNAT1D1B3ZJK3dmVuirwp/MhVmzAxiagKBJv9+ePZ97M/JkxsMMODwzChlD84FWQp3MxeCDHAhiumB+MJrr1+8Ryw3p/9+H4DctfIPCq49Xlw8Kv99YlMuB19885gy/i7llziwGfFFWJyR02XzSCuwiBUse7BlFVaz5LS8KQVkRXaXRJsqImfDjKSZBNyzEyFWFKVJ4KFbWLElUao6KbSk8i9TXgTPaorxTskPwOxa7/9baGt4zg8oQbNyfWYJlRU0/KUx9ZwNwYNq1ecFRzl18QpW0bB0Ks//KjV1uwlbuLJA3GxEdh5wb5yGEPl3qMd2xecYQHKnlFlVLX95kxYCFKGg5IlU2a0uLpCM68LEJA+sJ/Dm6Jy3aMjQIRakRUm+UuvfOp/X34iQSejeFo0Hdx4optG5uFH/R+GHNvANcm3VtwLs+Lvy2TRwhIOnrYHhysIuDKcCDwGbYAjglOzQt+HssElF6dvoNNOZeuCSbfSgIGMjILMo4/ExZf7TqghNLmlwm1gpSC2tmaLAZMvWGz0Iu7XpqBm2NrQNN5cD+Y5ZOTdZyok3RZMusZOJUN+QZrQFb0oQkG6xIIYHe8A03Unx/Ryd6jS2ctAsbxmFRVynGKlM5na5ePVkUe0p+h9MmraS2zXqYgmSWjOPtElHbLTVB3Q79gqQlMScxqXpeav0UWiGMmXKSNOpZAAPvKs/U/1MRoxRxl+5WD+psUy2D5IdmRVoWjnqDnLlkyO+zwaPAf1zXwZL751PUAAAAASUVORK5CYII=
// @grant			GM_xmlhttpRequest
// @license			MIT
// @namespace			https://greasyfork.org/ja/users/1023652
// ==/UserScript==

(function() {
	'use strict';
	let updating = false;
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;
	const isFirefox = !!userAgent.match("Firefox")
	let fetchedTweets = {};
	let fetchedTweetsUserData = {};
	let fetchedTweetsUserDataByUserName = {};
	window.addEventListener("scroll", update);
	init();
	async function main(){
		const link_class = "r-18u37iz css-4rbku5 css-18t94o4 css-901oao css-16my406 r-1cvl2hr r-1loqt21 r-poiln3 r-bcqeeo r-qvutc0";
		document.querySelectorAll('article[data-testid="tweet"]:not(.tweetExpanderChecked)').forEach(async function(tweet){
			tweet.classList.add('tweetExpanderChecked');
			const elements = tweet.querySelectorAll('[data-testid="tweetText"]');
			const show_more_link = tweet.querySelectorAll('[data-testid="tweet-text-show-more-link"]');
			const tweetId = tweet.querySelector(`[data-testid="User-Name"] a[aria-label], .css-1dbjc4n.r-1d09ksm.r-1471scf.r-18u37iz.r-1wbh5a2 a[aria-label]`)?.href.match(/twitter\.com\/[^/]+\/status\/(\d+)/)[1];
			if(!tweetId)return;
			if(show_more_link[0])show_more_link[0].style.display = "none";
			if(show_more_link[1])show_more_link[1].style.display = "none";
			elements.forEach(async (element,index) =>{
				if(!element.innerText.match(/…$/)){
					element.classList.add('tweetExpanderChecked');
					//if(element.innerText.split('\n').length >= 10)
					element.style.webkitLineClamp = null;
					return;
				}
				let tweet_data,note_tweet;
				if(index == 0){
					tweet_data = await getTweetData(tweetId,"graphQL");
					note_tweet = tweet_data.note_tweet?.note_tweet_results.result || tweet_data.note_tweet?.note_tweet_results.result || null;
				}else{
					tweet_data = await getTweetData(tweetId,"graphQL");
					tweet_data = await getTweetData(tweet_data.legacy.quoted_status_id_str,"graphQL");
					note_tweet = tweet_data.note_tweet?.note_tweet_results.result || tweet_data.note_tweet?.note_tweet_results.result || null;
				}
				if(!note_tweet){
					element.style.webkitLineClamp = null;
					element.classList.add('tweetExpanderChecked');
					return;
				}
				const hashtags = note_tweet.entity_set?.hashtags || [];
				const user_mentions = note_tweet.entity_set?.user_mentions || [];
				const symbols = note_tweet.entity_set?.symbols || [];
				const urls = note_tweet.entity_set?.urls;
				var new_tweet_text = note_tweet.text;
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
							replacement = `<a class="${link_class}" dir="ltr" role="link" href="https://twitter.com/hashtag/${item.text}" target="_blank" rel="noopener">#${item.text}</a>`;
							break;
						case 'mention':
							replacement = `<a class="${link_class}" dir="ltr" role="link" href="https://twitter.com/${item.text}" target="_blank" rel="noopener">@${item.text}</a>`;
							break;
						case 'symbol':
							replacement = `<a class="${link_class}" dir="ltr" role="link" href="https://twitter.com/search?q=%24${item.text}&src=cashtag_click" target="_blank" rel="noopener">$${item.text}</a>`;
							break;
					}
					transformedText = transformedText.slice(0, start) + replacement + transformedText.slice(end);
				});
				new_tweet_text = transformedText;
				urls.forEach(target =>{
					new_tweet_text = new_tweet_text.replace(new RegExp(`${target.url}(?=(\\s|$|\\u3000|\\W)(?!\\.|,))`, 'gu'), `<a class="${link_class}" dir="ltr" role="link" href="${target.url}" target="_blank" rel="noopener">${target.display_url}</a>`);
				});
				var new_tweet_node = document.createElement("span");
				new_tweet_node.className = 'css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0';
				new_tweet_node.innerHTML = new_tweet_text;
				while(element.firstChild){
					element.removeChild(element.firstChild);
				}
				element.appendChild(new_tweet_node);
				element.style.webkitLineClamp = null;
			});
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
	function GetCookie(name){
		let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if(arr = document.cookie.match(reg)){
			return decodeURIComponent(arr[2]);
		}else{
			return null;
		}
	}
	function findParent(element, selector){
		let current = element;
		while(current !== null){
			if(current.matches(selector)){
				return current;
			}
			current = current.parentNode;
		}
		return null;
	}
	async function fetchAndProcessTwitterApi(method,id = undefined,forceFetch = false){
		return new Promise(async (resolve, reject) => {
			try{
				switch(method){
					case 'graphQL':
						if(fetchedTweets[id] && !(forceFetch === true))return resolve(fetchedTweets[id]);
						await graphQL();
						break;
					default:
						console.warn("なにか間違ってないか？")
						return reject("something wrong.");
				}
				return resolve("OK!");
			}catch(error){
				console.error(error);
				throw new Error(`Failed to fetch API data.\nmethod: ${method}\nid: ${id}`);
			}
		});

		async function graphQL(){
			const response = await request(new requestObject_twitter_api_graphql(id));
			if(!response.status === "200")throw new Error(`Failed to fetch`);
			processgraphQL(response.response.data.threaded_conversation_with_injections_v2.instructions[0].entries);
		}
		function processgraphQL(entries){
			if(!entries)return null;
			entries.forEach(entry=>{
				let tweetData = entry.content?.itemContent?.tweet_results?.result?.tweet || entry.content?.itemContent?.tweet_results?.result;
				if(!tweetData)return;
				if(tweetData.quoted_status_result){
					let quoted = tweetData.quoted_status_result.result;
					fetchedTweetsUserData[quoted.core.user_results.result.rest_id] = {...quoted.core.user_results.result,"API_type": "graphQL"};
					fetchedTweetsUserDataByUserName[quoted.core.user_results.result.legacy.screen_name] = fetchedTweetsUserData[quoted.core.user_results.result.rest_id];
					quoted.core.user_results.result = fetchedTweetsUserData[quoted.core.user_results.result.rest_id];
					fetchedTweets[quoted.rest_id] = {...quoted,"API_type": "graphQL"};
					tweetData.quoted_status_result.result = fetchedTweets[quoted.rest_id];
				}
				fetchedTweetsUserData[tweetData.core.user_results.result.rest_id] = {...tweetData.core.user_results.result,"API_type": "graphQL"};
				fetchedTweetsUserDataByUserName[tweetData.core.user_results.result.legacy.screen_name] = fetchedTweetsUserData[tweetData.core.user_results.result.rest_id];
				tweetData.core.user_results.result = fetchedTweetsUserData[tweetData.core.user_results.result.rest_id];
				fetchedTweets[tweetData.rest_id] = {...tweetData,"API_type": "graphQL"};
			});
		}
	}
	async function getTweetData(id, method = 'graphQL', forceFetch = false){
		const dataStore = fetchedTweets;
		if(typeof id === 'string'){
			if(dataStore[id] && !forceFetch)return dataStore[id];
		}else{
			throw new Error("Invalid ID type.");
		}
		await fetchAndProcessTwitterApi(method, id, forceFetch);
		if(dataStore[id]){
			return dataStore[id];
		}else{
			throw new Error("Failed to fetch tweet data for ID: " + id);
		}
	}
	async function request(object, maxRetries = 0, timeout = 60000){
		let retryCount = 0;
		while(retryCount <= maxRetries){
			try{
				return await new Promise((resolve, reject) => {
					GM_xmlhttpRequest({
						method: object.method,
						url: object.url,
						headers: object.headers,
						responseType: object.respType,
						data: object.body,
						anonymous: object.anonymous,
						timeout: timeout,
						onload: function(responseDetails){
							return resolve(responseDetails);
						},
						ontimeout: function(responseDetails){
							reject(`[request]time out:\nresponse ${responseDetails}`);
						},
						onerror: function(responseDetails){
							reject(`[request]error:\nresponse ${responseDetails}`);
						}
					});
				});
			}catch(error){
				retryCount++;
				console.warn(`Retry ${retryCount}: Failed to fetch ${object.url}. Reason: ${error}`);
				if(retryCount === maxRetries){
					throw new Error(`Failed to fetch ${object.url} after ${maxRetries} retries.`);
				}
			}
		}
	}
	class requestObject_twitter_api_graphql{
		constructor(ID) {
			this.method = 'GET';
			this.respType = 'json';
			this.url = `https://twitter.com/i/api/graphql/TuC3CinYecrqAyqccUyFhw/TweetDetail?variables=%7B%22focalTweetId%22%3A%22${ID}%22%2C%22referrer%22%3A%22home%22%2C%22with_rux_injections%22%3Afalse%2C%22includePromotedContent%22%3Atrue%2C%22withCommunity%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withArticleRichContent%22%3Atrue%2C%22withBirdwatchNotes%22%3Atrue%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22rweb_lists_timeline_redesign_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_media_download_video_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withArticleRichContentState%22%3Atrue%7D`;
			this.body = null;
			this.headers = {
				"Content-Type": "application/json",
				'User-agent': navigator.userAgent || navigator.vendor || window.opera,
				'accept': '*/*',
				'authorization': `Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA`,
				'Accept-Encoding': 'br, gzip, deflate',
				'x-csrf-token': GetCookie("ct0"),
			};
			this.package = null;
			this.anonymous = false;
		}
	}
})();
