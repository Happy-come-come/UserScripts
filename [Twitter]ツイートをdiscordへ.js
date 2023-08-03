// ==UserScript==
// @name			[Twitter]ツイートをdiscordへ
// @namespace		https://greasyfork.org/ja/users/1023652
// @version			1145141919810.0.1
// @description		ツイートをdiscordにウェブフックでポストします
// @author			ゆにてぃー
// @match			https://twitter.com/*
// @connect			discord.com
// @icon			https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant			GM_xmlhttpRequest
// @license			MIT
// ==/UserScript==

(function() {
	'use strict';
	const desktop_env = {'tweet_field': 'article[data-testid="tweet"]','retweeted': '[data-testid="socialContext"]','liked_color': 'r-vkub15','liked':'M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'};
	const mobile_env = {'tweet_field': 'article[data-testid="tweet"]','retweeted': '[data-testid="socialContext"]','liked_color': 'r-vkub15','liked':'M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'};
	const webHooks = {
		"freedom": 'https://discord.com/api/webhooks/828655860859142176/v_G4iz-sUshYoss3-moYTv2QS1r4I2S8ZiizYRhZchrvwcHR0BBMPrbmFOJwGxds3sbi',
	};

	const def_server = "freedom";
	var env_selector;
	function isMobileDevice(){
		const userAgent = navigator.userAgent || navigator.vendor || window.opera;
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
	}
	if(isMobileDevice()){
		env_selector = mobile_env;
	}else{
		env_selector = desktop_env;
	}
	let updating = false;
	window.addEventListener("scroll", update);
	init();

	async function main(tweets){
		tweets.forEach(function(element){
			if(element.querySelector(".quickDimg")) return;
			let tweet_link = Array.from(element.querySelectorAll("a[aria-label]")).filter(function(tmp){return tmp.href.match(/\/status\/[0-9]*(\/analytics)?$/)})[0].href.replace(/\/analytics$/,'');
			let fotter = element.querySelector('div[id][role="group"]');
			const flexContainer = document.createElement('div');
			flexContainer.classList.add('quickDimg');
			flexContainer.style.display = 'flex';

			// 1つ目のドロップダウン（サーバー選択）
			const dropdown1 = document.createElement('select');
			for(const server in discord_servers){
				const option = document.createElement('option');
				option.value = discord_servers[server];
				option.textContent = server;
				if(server === def_server){
					option.selected = true;
				}
				dropdown1.appendChild(option);
			}
			flexContainer.appendChild(dropdown1);
			dropdown1.addEventListener('click', (event) => {
				event.stopPropagation();
			});
			// 2つ目のドロップダウン（チャンネル選択）
			const dropdown2 = document.createElement('select');
			const selectedServerId = discord_servers[def_server];
			const channels = discord_channels[selectedServerId];
			for(const channel in channels){
				const option = document.createElement('option');
				option.value = channels[channel];
				option.textContent = channel;
				if(channel === def_channel){
					option.selected = true;
				}
				dropdown2.appendChild(option);
			}
			flexContainer.appendChild(dropdown2);

			// 1つ目のドロップダウンの変更を監視して、2つ目のドロップダウンを更新
			dropdown1.addEventListener('change', () => {
				const channels = discord_channels[dropdown1.value];
				dropdown2.innerHTML = ''; // 既存のオプションをクリア
				for(const channel in channels){
					const option = document.createElement('option');
					option.value = channels[channel];
					option.textContent = channel;
					if(channel === def_channel){
						option.selected = true;
					}
					dropdown2.appendChild(option);
				}
			});

			dropdown2.addEventListener('click', (event) => {
				event.stopPropagation();
			});
			// 3つ目のドロップダウン（数字選択）
			const dropdown3 = document.createElement('select');
			for(let i = 1; i <= 5; i++){
				const option = document.createElement('option');
				option.value = i;
				option.textContent = i;
				dropdown3.appendChild(option);
			}
			flexContainer.appendChild(dropdown3);

			dropdown3.addEventListener('click', (event) => {
				event.stopPropagation();
			});
			// 4つ目のドロップダウン（Boolean選択）
			const dropdown4 = document.createElement('select');
			['false','true'].forEach(value => {
				const option = document.createElement('option');
				option.value = value;
				option.textContent = value;
				dropdown4.appendChild(option);
			});
			flexContainer.appendChild(dropdown4);

			dropdown4.addEventListener('click', (event) => {
				event.stopPropagation();
			});
			// ボタンを作成
			const button = document.createElement('button');
			button.textContent = '送信';
			flexContainer.appendChild(button);

			// ボタンのクリックイベントを監視
			button.addEventListener('click',async function(){
				// ここでドロップダウンの選択値に基づいて処理を行う
				this.disabled = true;
				const selectedServer = dropdown1.value;
				const selectedChannel = dropdown2.value;
				const selectedNumber = dropdown3.value;
				const selectedBoolean = dropdown4.value === 'true';
				let num = new Date().getTime();
				let send_page;
				if(selectedNumber != 5){
					send_page = `\{\"type\":10,\"name\":\"win1\",\"value\":${selectedNumber}\}`
				}else{
					send_page = '{\"type\":5,\"name\":\"page_all\",\"value\":true}'
				}
				let useGraphql = "";
				if(selectedBoolean){
					useGraphql = ',{\"type\":5,\"name\":\"use_graphql\",\"value\":true}';
				}
				let sendObject = new requestObject(selectedServer,selectedChannel);
				console.log(dropdown1.value)
				console.log(selectedChannel)
				await make_send_data(tweet_link)
				console.log(sendObject)
				let res = await request(sendObject);
				console.log(res)
			});
			fotter.parentNode.appendChild(flexContainer);
		});
	}
	async function make_send_data(tweet_link,select_page,use_graphQL){
		let return_object = get_Tweet_data();

		async function get_Tweet_data(){

		}
	}
	
	async function find_pixiv_link(screen_name){
		const Pixiv_url_regex = /^https?:\/\/(((www|touch)\.)?pixiv\.(net\/([a-z]{2}\/)?((member(_illust)?\.php\?id\=|(users|u)\/)[0-9]*)|me\/.*))/;
		return new Promise(async function(resolve){
			const request_object = new requestObject_twitter_1_1(screen_name);
			const Twitter_author_data = await request(request_object);
			if(Twitter_author_data.statusText == "Too Many Requests") return resolve("Too Many Requests");
			const urls_in_description = get_only_particular_key_value(Twitter_author_data,'response.entities.description.urls.url',[]);
			const urls_in_description_expanded = get_only_particular_key_value(Twitter_author_data,'response.entities.description.urls.expanded_url',[]);
			const urls_in_url_place = get_only_particular_key_value(Twitter_author_data,'response.entities.url.urls.url',[]);
			const urls_in_url_place_expanded = get_only_particular_key_value(Twitter_author_data,'response.entities.url.urls.expanded_url',[]);
			var urls = urls_in_description.concat(urls_in_description_expanded,urls_in_url_place,urls_in_url_place_expanded).filter(item => !/^https?:\/\/t\.co\//.test(item));
			var Pixiv_url;
			if(urls.length > 0){
				Pixiv_url = await find_pixiv_link_from_profile_urls(urls);
				if(Pixiv_url === undefined || Pixiv_url === null || Pixiv_url === false){
					urls = await expand_shortening_link(urls);
					Pixiv_url = await find_pixiv_link_from_profile_urls(urls);
					return resolve(Pixiv_url);
				}else{
					return resolve(Pixiv_url);
				}
			}
			return resolve(false);
		});
		async function expand_shortening_link(urls_in_profile){
			return new Promise(async function(resolve){
				var return_urls = [];
				if(urls_in_profile.length == 0 || urls_in_profile.length === null || urls_in_profile.length === undefined) return ;
				var promise_list = [];
				urls_in_profile.forEach(target=>{
					switch(true){
						case /^https?:\/\/bit\.ly\/[\w]{1,9}$/.test(target):
							promise_list.push(request(new requestObject('https://lab.syncer.jp/api/32/' + target)));
							break;
						default:
							break;
					}
				});
				await Promise.allSettled(promise_list).then(results => {
					 const res_tmp = get_only_particular_key_value(results, 'value.response', undefined);
					 var tmp;
					 for(let i=0;i<res_tmp.length;i++){
					 	tmp = JSON.parse(res_tmp[i]).pop();
						tmp = tmp.pop();
					 	return_urls[i] = tmp[0];
					 }
				});
				resolve(return_urls);
			});
		}
		async function find_pixiv_link_from_profile_urls(urls_in_profile){
			const Fanbox_url_regex = /^https?:(\/\/www\.pixiv\.net\/fanbox\/creator\/[0-9]*|\/\/.*\.fanbox\.cc\/?)/;
			return new Promise(async function(resolve,reject){
				var tmp_pixiv_url;
				tmp_pixiv_url = findMatch_from_array(urls_in_profile,Pixiv_url_regex,true);
				if (tmp_pixiv_url !== undefined) return resolve(tmp_pixiv_url);
				if(findMatch_from_array(urls_in_profile,Fanbox_url_regex) !== undefined){
					tmp_pixiv_url = await when_fanbox(findMatch_from_array(urls_in_profile,Fanbox_url_regex,true));
					if (Pixiv_url_regex.test(tmp_pixiv_url)){
						console.log(`「${screen_name}」のPixivのURLをFanboxから発見！`)
						return resolve(tmp_pixiv_url);
					}
				}else{
					var get_url_promise_list = [];
					urls_in_profile.forEach(target=>{
						switch(true){
							case /^https?:\/\/((skeb\.jp\/\@.*)|(fantia\.jp\/(fanclubs\/[0-9])?.*)|(.*\.booth\.pm)|(.*linktr\.ee)|(.*profcard\.info)|(.*lit\.link)|(potofu\.me)|(.*\.carrd\.co)|(.*\.tumblr\.com$)|(twpf\.jp))\/?/.test(target):
								get_url_promise_list.push(new Promise(
									async function(resolve,reject){
										try{
											return resolve(await when_general(target));
										}catch(error){
											return reject(error);
										}
									}
								));
								break;
							case /^https?:\/\/.*\.creatorlink\.net(\/.*)?/.test(target):
								get_url_promise_list.push(new Promise(
									async function(resolve,reject){
										try{
											return resolve(await when_general(`${target.match(/^https?:\/\/.*\.creatorlink\.net/)[0]}\/Contact`));
										}catch(error){
											return reject(error);
										}
									}
								));
								break;
							case /^https?:\/\/sketch\.pixiv\.net\//.test(target):
								get_url_promise_list.push(new Promise(
									async function(resolve,reject){
										try{
											return resolve(await when_pixiv_sketch(target));
										}catch(error){
											return reject(error);
										}
									}
								));
								break;
							default:
								break;
						}
					});
					if(get_url_promise_list.length > 0){
						await Promise.any(get_url_promise_list).then((value) => {tmp_pixiv_url = value}).catch(() => {tmp_pixiv_url = undefined});
						if(!Pixiv_url_regex.test(tmp_pixiv_url)) return resolve(undefined);
						return resolve(tmp_pixiv_url.replace(/^https?/,'https').replace(/(\/|\\)$/,''));
					}
				}
				return resolve(false);
				async function when_general(target_url){
					return new Promise(async function(resolve,reject){
						const response_data = await request(new requestObject(target_url.replace(/^https?/,"https")));
						var response_data_urls = response_data.response.split(/\"|\<|\>/).filter(function(data_str){return data_str.match(/^https?:(\/\/(((www|touch)\.)?pixiv\.(net\/([a-z]{2}\/)?((member(_illust)?\.php\?id\=|(users|u|fanbox\/creator)\/)[0-9].*)|me\/.*))|.*\.fanbox\.cc\/?)$/)});
						if(response_data_urls.find(function(element){return element.match(Pixiv_url_regex)}) !== undefined){
							console.log(`「${screen_name}」のPixivのURLを ${target_url.split("/")[2]} から発見！`);
							return resolve(response_data_urls.find(function(element){return element.match(Pixiv_url_regex)}));
						}else if(response_data_urls.find(function(element){return element.match(Fanbox_url_regex)}) !== undefined){
							return when_fanbox(response_data_urls.find(function(element){return element.match(Fanbox_url_regex)}));
						}else{
							return reject(undefined);
						}
					});
				}
				async function when_pixiv_sketch(target_url){
						return new Promise(async function(resolve,reject){
							const response_data = await request(new requestObject(target_url));
							var User_id = response_data.response.split(',').filter(function(data_str){return data_str.match(/\\"pixiv_user_id\\":\\"[0-9]*\\"/)});
							if(User_id){
								console.log(`「${screen_name}」のPixivのURLを pixiv sketchから発見！`);
								return resolve("https://www.pixiv.net/users/" + User_id[0].split(/\"|\\/)[6]);
							}else{
								return reject(undefined);
							}
						});
					}
				async function when_fanbox(fanbox_url){
					if(fanbox_url.match(/^https?:\/\/www\.pixiv\.net\/fanbox\/creator\/[0-9]*/)){
						return fanbox_url.replace('fanbox/creator', 'users');
					}else{
						const fanbox_response = await request(new requestObject_fanbox(`https://api.fanbox.cc/creator.get?creatorId=${fanbox_url.replace(/(https?:\/\/|\.fanbox.*)/g,'')}`,fanbox_url.replace(/^http:/, 'https:').replace(/\/$/, '')));
						if(fanbox_response.status == "404") return undefined;
						tmp_pixiv_url = findMatch_from_array(fanbox_response.response.body.profileLinks,Pixiv_url_regex,true);
						if(tmp_pixiv_url !== undefined){
							return tmp_pixiv_url;
						}else{
							return `https://www.pixiv.net/users/${fanbox_response.response.body.user.userId}`;
						}
					}
				}
			}
		)}
	}
	function get_only_particular_key_value(object, path, defaultValue = undefined){
		//オブジェクトから任意のpathの値を取得する。
		//オブジェクト内に配列がある場合などに便利。
		/*
			{
				a: "1",
				b: [
					{hoge: "2"},
					{hoge: "3"}
				]
			}
			こんな感じになってるときに
			get_only_particular_key_value(object, "b.hoge")
			とやると
			>>[2,3]
			って帰ってくる。
			get_only_particular_key_value(object, "a")
			なら
			>> 1
			って帰ってくる。
		*/
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
					// 配列に対する処理
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
	function findMatch_from_array(arr, regex, is_strict = false){
		//配列に正規表現にマッチするテキストがあるかを調べる。
		//「is_strict」が「true」ならマッチした部分だけど返す。
		for(let i = 0; i < arr.length; i++){
			if(regex.test(arr[i])){
				if(is_strict === true){
					return arr[i].match(regex)[0];
				}else{
					return arr[i];
				}
			}
		}
		return undefined;
	}
	function init() {
		main(document.querySelectorAll(env_selector.tweet_field));
	}
	function update() {
		if(updating) return;
		updating = true;
		init();
		setTimeout(() => {updating = false;}, 1000);
	}
	function GetCookie(name){
		let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if(arr = document.cookie.match(reg)){
			return decodeURIComponent(arr[2]);
    	}else{
        	return null;
		}
	}
	class sendObject{
		constructor(webhook,sendEmbeds){
			this.method = 'POST';
			this.respType = 'json';
			this.url = webhook;
			this.headers = {
				'Content-Type': 'multipart/form-data'
			};
			this.package = null;
			this.anonymous = true;
			this.body = sendEmbeds;
		}
	}
	class requestObject{
		constructor(URL,addtional_cookie = undefined){
			this.method = 'GET';
			this.url = `${URL}`;
			this.headers = {
				"Content-Type": "text/html,application/xhtml+xml,application/xml",
				'User-agent': navigator.userAgent || navigator.vendor || window.opera,
				'accept': '*/*',
				'Referer': URL,
				"Sec-Fetch-Mode": "navigate",
				"Sec-Fetch-Site": "cross-site",
				'cookie': `${addtional_cookie}`
			};
			this.package = null;
		}
	}
	class requestObject_twitter{
		constructor(ID){
			this.method = 'GET';
			this.respType = 'json';
			this.url = `https://api.twitter.com/graphql/rePnxwe9LZ51nQ7Sn_xN_A/UserByScreenName?variables=%7B%22screen_name%22%3A%22${ID}%22%2C%22withSafetyModeUserFields%22%3Afalse%2C%22withSuperFollowsUserFields%22%3Afalse%7D&features=%7B%22responsive_web_twitter_blue_verified_badge_is_enabled%22%3Afalse%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Afalse%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Afalse%7D`;
			this.body = null;
			this.headers = {
				"Content-Type": "application/json",
				'User-agent': navigator.userAgent || navigator.vendor || window.opera,
				'accept': '*/*',
				'Referer': "https://twitter.com/",
				'Host': 'api.twitter.com',
				'authorization': `Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA`,
				'x-csrf-token': GetCookie("ct0"),
			};
			this.package = null;
			this.anonymous = false;
			this.screen_name = ID;
		}
	}
	class requestObject_twitter_1_1{
		constructor(ID){
			this.method = 'GET';
			this.respType = 'json';
			this.url = `https://api.twitter.com/1.1/users/show.json?screen_name=${ID}`;
			this.body = null;
			this.headers = {
				"Content-Type": "application/json",
				'User-agent': navigator.userAgent || navigator.vendor || window.opera,
				'accept': '*/*',
				'Referer': "https://twitter.com/",
				'Host': 'api.twitter.com',
				'authorization': `Bearer  AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA`,
				'x-csrf-token': GetCookie("ct0"),
			};
			this.package = null;
			this.anonymous = false;
			this.screen_name = ID;
		}
	}
	class requestObject_fanbox{
		constructor(URL,fanbox_URL){
			this.method = 'GET';
			this.url = `${URL}`;
			this.body = null;
			this.headers = {
				'User-agent': navigator.userAgent || navigator.vendor || window.opera,
				'origin': fanbox_URL,
				'Host': 'api.fanbox.cc',
				'cookie': '',
			};
		}
	}
	class requestObject_binary_data{
		constructor(URL,addtional_cookie = undefined){
			this.method = 'GET';
			this.respType = '';
			this.url = `${URL}`;
			this.body = null;
			this.encoding = null;
			this.headers = {
				"Content-Type": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*",
				'User-agent': navigator.userAgent || navigator.vendor || window.opera,
				'accept': '*/*',
				'Referer': URL,
				"Sec-Fetch-Mode": "navigate",
				'cookie': `${addtional_cookie}`
			};
			this.package = null;
		}
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
					return resolve(responseDetails);
				},
				ontimeout: function(responseDetails) {
					return reject(`[request]time out:\nresponse ${responseDetails}`);
				},
				onerror: function(responseDetails) {
					return reject(`[request]error:\nresponse ${responseDetails}`);
				}
			});
		});
	}
})();
