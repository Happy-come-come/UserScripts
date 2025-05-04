class TweetNodeBuilder {
	/*
		必要な外部変数
		- sessionData
		- isMobile
		- isPC
		- colors
		- svgIconPaths
	*/
	#tweetData = {
		rest_id: null,
		view_count: null,
		source: null,
		created_at: null,
		entities: null,
		extended_entities: null,
		favorite_count: null,
		favorited: null,
		retweet_count: null,
		retweeted: null,
		quote_count: null,
		reply_count: null,
		full_text: null,
		isRetweeted: null,
		isPinned: null,
		note_tweet: {
			entity_set: null,
			media: null,
			richtext: null,
			text: null,
		},
	};
	#userData = {
		rest_id: null,
		name: null,
		screen_name: null,
		profile_image_url_https: null,
		description: null,
		followers_count: null,
		friends_count: null,
		profile_image_shape: null,
		is_blue_verified: null,
		verified: null,
		verified_type: null,
		affiliates_highlighted_label: null,
	};
	#quoteTweetData = {
		rest_id: null,
		view_count: null,
		source: null,
		created_at: null,
		entities: null,
		extended_entities: null,
		favorite_count: null,
		favorited: null,
		retweet_count: null,
		retweeted: null,
		quote_count: null,
		reply_count: null,
		full_text: null,
		note_tweet: {
			entity_set: null,
			media: null,
			richtext: null,
			text: null,
		},
	};
	#quoteTweetUserData = {
		rest_id: null,
		name: null,
		screen_name: null,
		profile_image_url_https: null,
		description: null,
		followers_count: null,
		friends_count: null,
		profile_image_shape: null,
		is_blue_verified: null,
		verified: null,
		verified_type: null,
		affiliates_highlighted_label: null,
	};
	#nodeVisualData = {
		conversationPlace: null, // top, center, bottom, expand
		isMediaGrid: null, // true or falsy
		isMediaGridExpand: null, // true or false
		attatchQuoteTweet: "auto", // true or false or auto
		attachCard: "auto", // true or false or auto  リンクのプレビューやアンケートなど
	};
	#nodeSettings = {
		isMobile: isMobile || false,
		isPC: isPC || false,
		themeMode: sessionData.themeMode.themeNum || 0,
		pageTransitionPath: null,
		pushState: {},
	}
	constructor({apiResponseData = null} = {}){
	}
	build(){
		const rootContainer = this.#createRootContainer();

		return rootContainer;
	}
	setTweetData(tweetData){
		this.#tweetData = tweetData;
		return this;
	}
	setUserData(userData){
		this.#userData = userData;
		return this;
	}
	setNodeVisualData(nodeVisualData){
		this.#nodeVisualData = nodeVisualData;
		return this;
	}
	loadApiresponseData(apiResponseData){
		if(apiResponseData === null)return this;
		
	}
	#createRootContainer(article){
		/*
			<div class="css-175oi2r" style="width: 100%; max-width: 600px;" data-testid="cellInnerDiv" tnb-id="cellInnerDiv">
				<div class="css-175oi2r r-1adg3ll r-1ny4l3l">
					<div class="css-175oi2r">
					</div>
				</div>
				?<div class="css-175oi2r r-109y4c4 r-13qz1uu" style="background-color: rgb(239, 243, 244);" roll="separator">
				</div>
			</div>
		*/
		const rootContainer =
			h("div", {
					class: this.#classNameProcessor("tnb-container css-175oi2r"),
					style: {
						'width': "100%",
						...( !isMobile ? { maxWidth: "600px" } : {} ),
					},
					'data-testid': "cellInnerDiv",
					'tnb-id': "cellInnerDiv",
					onClick: (e)=>{
						e.preventDefault();
						const targetPath = this.#nodeSettings.pageTransitionPath 
							|| `/${this.#userData.screen_name}/status/${this.#tweetData.rest_id}${this.#nodeVisualData.isMediaGrid ? `/photo/1` : ""}`;
						this.#navigateTo(targetPath);
					},
				},
				h("div", {
						class: this.#classNameProcessor("css-175oi2r r-1adg3ll r-1ny4l3l"),
					},
					h("div", {
							class: this.#classNameProcessor("css-175oi2r"),
						},
						article,
					),
				),
				(!(conversationPlace && isMediaGrid))
				&& h("div", { //separator
						class: this.#classNameProcessor("tnb-border css-175oi2r r-109y4c4 r-13qz1uu"), // r-1sw30gj, r-kuekak, r-gu4em3 はテーマごとの線の色なのでクラス固有のものに変更する
						"roll": "separator",
					},
				)
			);
		return rootContainer;
	}

	#createArticle(header, main){
		const article =
			h("article", {
				class: this.#classNameProcessor("css-175oi2r r-18u37iz r-1udh08x r-1c4vpko r-1c7gwzm r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21"),
				"data-testid": "tweet",
				'tnb-id': "tweet",
				},
				h("div", {
					class: this.#classNameProcessor("css-175oi2r r-eqz5dr r-16y2uox r-1wbh5a2"),
					},
					h("div", {
						class: this.#classNameProcessor("css-175oi2r r-16y2uox r-1wbh5a2 r-1ny4l3l"),
						},
						header,
						main,
					)
				)
			);
	}

	#createHeader(){
		const header =
			h("div",{
					class: this.#classNameProcessor("css-175oi2r"),
					'tnb-id': "header",
				},
				h("div", {
						class: this.#classNameProcessor("css-175oi2r r-18u37iz"),
					},
					["center", "bottom", "expand"].includes(this.#nodeVisualData?.conversationPlace)
					&& h("div", { // this.#nodeVisualData.conversationPlace が center, bottom, expand の場合の線
							class: this.#classNameProcessor("css-175oi2r r-18kxxzh r-1wron08 r-onrtq4 r-15zivkp"),
						},
						h("div", {
							class: this.#classNameProcessor("tnb-conversationLine css-175oi2r r-f8sm7e r-m5arl1 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af"), // r-1bimlpy, r-157er04, r-1bnu78o はテーマごとの線の色なのでクラス固有のものに変更する
						})
					),
					h("div", {
							class: this.#classNameProcessor("css-175oi2r r-1iusvr4 r-16y2uox r-ttdzmv"),
						},
						h("div", { // 固定やリツイートであることを表示する場所
								class: this.#classNameProcessor("css-175oi2r r-15zivkp r-q3we1"),
							},
						),
					),
				),
			);
	}

	#classNameProcessor(className){
		const tnbClassName = className.split(" ").map((n) => n.startsWith("tnb")? "" : `tnb-${n}`).join(" ");
		return `${className} ${tnbClassName}`;
	}

	#navigateTo(uri, state = this.#nodeSettings.pushState){
		if(!uri)return;
		history.pushState(state, "", uri);
		dispatchEvent(new Event("popstate"));
	}

	static appendCSS(){
		let isStyleNodeExist = true;
		let style = document.getElementById("tnbCSS");
		if(!style){
			isStyleNodeExist = false;
			style = document.createElement('style');
			style.id = "tnbCSS";
		}
		style.textContent = `
			div.ntb-container article:hover{
				background-color: rgba(255, 255, 255, 0.03);
			}
			div.tnb-container .tnb-conversationLine{
				background-color: ${colors.get("conversationLineColor")};
			}
			div.tnb-container .tnb-border{
				background-color: ${colors.get("borderColor")};
			}
			/* view-source:https://twitter.com/home */
			[stylesheet-group="1"]{}
			/*
			.tnb-css-146c3p1{background-color:rgba(0,0,0,0.00);border:0 solid black;box-sizing:border-box;color:rgba(0,0,0,1.00);display:inline;font:14px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;list-style:none;margin:0px;padding:0px;position:relative;text-align:start;text-decoration:none;white-space:pre-wrap;word-wrap:break-word;}
			.tnb-css-175oi2r{align-items:stretch;background-color:rgba(0,0,0,0.00);border:0 solid black;box-sizing:border-box;display:flex;flex-basis:auto;flex-direction:column;flex-shrink:0;list-style:none;margin:0px;min-height:0px;min-width:0px;padding:0px;position:relative;text-decoration:none;z-index:0;}
			.tnb-css-1jxf684{background-color:rgba(0,0,0,0.00);border:0 solid black;box-sizing:border-box;color:inherit;display:inline;font:inherit;list-style:none;margin:0px;padding:0px;position:relative;text-align:inherit;text-decoration:none;white-space:inherit;word-wrap:break-word;}
			.tnb-css-9pa8cd{bottom:0px;height:100%;left:0px;opacity:0;position:absolute;right:0px;top:0px;width:100%;z-index:-1;}
			*/
			[stylesheet-group="2"]{}
			.tnb-r-13awgt0{flex:1;}
			.tnb-r-1adg3ll{display:block;}
			.tnb-r-1jkafct{border-bottom-left-radius:2px;border-bottom-right-radius:2px;border-top-left-radius:2px;border-top-right-radius:2px;}
			.tnb-r-1phboty{border-bottom-style:solid;border-left-style:solid;border-right-style:solid;border-top-style:solid;}
			.tnb-r-1udh08x{overflow-x:hidden;overflow-y:hidden;}
			.tnb-r-4iw3lz{border-bottom-width:0;border-left-width:0;border-right-width:0;border-top-width:0;}
			.tnb-r-4qtqp9{display:inline-block;}
			.tnb-r-6koalj{display:flex;}
			.tnb-r-bztko3{overflow-x:visible;overflow-y:visible;}
			.tnb-r-crgep1{margin:0px;}
			.tnb-r-hvic4v{display:none;}
			.tnb-r-krxsd3{display:-webkit-box;}
			.tnb-r-rs99b7{border-bottom-width:1px;border-left-width:1px;border-right-width:1px;border-top-width:1px;}
			.tnb-r-sdzlij{border-bottom-left-radius:9999px;border-bottom-right-radius:9999px;border-top-left-radius:9999px;border-top-right-radius:9999px;}
			.tnb-r-t60dpp{padding:0px;}
			.tnb-r-wwvuq4{padding:0;}
			.tnb-r-xoduu5{display:inline-flex;}
			.tnb-r-ywje51{margin:auto;}
			.tnb-r-z2wwpe{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:4px;border-top-right-radius:4px;}
			[stylesheet-group="2.1"]{}
			.tnb-r-1559e4e{padding-bottom:2px;padding-top:2px;}
			.tnb-r-1fkl15p{padding-left:32px;padding-right:32px;}
			.tnb-r-3o4zer{padding-left:12px;padding-right:12px;}
			.tnb-r-3pj75a{padding-left:16px;padding-right:16px;}
			.tnb-r-cxgwc0{padding-left:24px;padding-right:24px;}
			.tnb-r-dd0y9b{padding-bottom:20px;padding-top:20px;}
			.tnb-r-dp7rxi{padding-bottom:40px;padding-top:40px;}
			.tnb-r-f8sm7e{margin-left:auto;margin-right:auto;}
			.tnb-r-n7gxbd{padding-left:4px;padding-right:4px;}
			.tnb-r-s49dbf{margin-bottom:1px;margin-top:1px;}
			.tnb-r-sjygvo{padding-left:1em;padding-right:1em;}
			[stylesheet-group="2.2"]{}
			.tnb-r-1ca1ndr{margin-left:0.5em;}
			.tnb-r-1ez5h0i{margin-left:4px;}
			.tnb-r-1gs4q39{margin-right:4px;}
			.tnb-r-1kkk96v{margin-left:8px;}
			.tnb-r-1kpi4qh{margin-left:0.075em;}
			.tnb-r-1l2kgy{margin-right:0.5em;}
			.tnb-r-1q6cnnd{right:-2px;}
			.tnb-r-1wron08{margin-right:8px;}
			.tnb-r-3t4u6i{margin-left:2px;}
			.tnb-r-45ll9u{left:50%;}
			.tnb-r-5f1w11{left:-2px;}
			.tnb-r-k4bwe5{margin-right:0.075em;}
			.tnb-r-o59np7{padding-right:8px;}
			.tnb-r-ocobd0{right:50%;}
			.tnb-r-qjj4hq{padding-left:8px;}
			.tnb-r-x1x4zq{margin-right:2px;}
			[stylesheet-group="3"]{}
			.tnb-r-105ug2t{pointer-events:auto!important;}
			.tnb-r-109y4c4{height:1px;}
			.tnb-r-10ptun7{height:16px;}
			.tnb-r-10v3vxq{transform:scaleX(-1);}
			.tnb-r-117bsoe{margin-bottom:20px;}
			.tnb-r-11c0sde{margin-top:24px;}
			.tnb-r-11j9u27{visibility:hidden;}
			.tnb-r-12181gd{box-shadow:0 0 2px rgba(0,0,0,0.03) inset;}
			.tnb-r-12sks89{min-height:22px;}
			.tnb-r-12vffkv>*{pointer-events:auto;}
			.tnb-r-12vffkv{pointer-events:none!important;}
			.tnb-r-12ym1je{width:18px;}
			.tnb-r-135wba7{line-height:24px;}
			.tnb-r-13qz1uu{width:100%;}
			.tnb-r-13wfysu{-webkit-text-decoration-line:none;text-decoration-line:none;}
			.tnb-r-146iojx{max-width:300px;}
			.tnb-r-1472mwg{height:24px;}
			.tnb-r-14j79pv{color:rgba(83,100,113,1.00);}
			.tnb-r-14lw9ot{background-color:rgba(255,255,255,1.00);}
			.tnb-r-15ysp7h{min-height:32px;}
			.tnb-r-16dba41{font-weight:400;}
			.tnb-r-16y2uox{flex-grow:1;}
			.tnb-r-176fswd{transform:translateX(-50%) translateY(-50%);}
			.tnb-r-1777fci{justify-content:center;}
			.tnb-r-17bb2tj{animation-duration:0.75s;}
			.tnb-r-17leim2{background-repeat:repeat;}
			.tnb-r-17s6mgv{justify-content:flex-end;}
			.tnb-r-18jsvk2{color:rgba(15,20,25,1.00);}
			.tnb-r-18tzken{width:56px;}
			.tnb-r-18u37iz{flex-direction:row;}
			.tnb-r-18yzcnr{height:22px;}
			.tnb-r-19wmn03{width:20px;}
			.tnb-r-19yznuf{min-height:52px;}
			.tnb-r-1abnn5w{animation-play-state:paused;}
			.tnb-r-1acpoxo{width:36px;}
			.tnb-r-1ad0z5i{word-break:break-all;}
			.tnb-r-1awozwy{align-items:center;}
			.tnb-r-1b43r93{font-size:14px;}
			.tnb-r-1b91i6u{max-width:752px;}
			.tnb-r-1blnp2b{width:72px;}
			.tnb-r-1blvdjr{font-size:23px;}
			.tnb-r-1ceczpf{min-height:24px;}
			.tnb-r-1cwl3u0{line-height:16px;}
			.tnb-r-1d2f490{left:0px;}
			.tnb-r-1ddef8g{-webkit-text-decoration-line:underline;text-decoration-line:underline;}
			.tnb-r-1ebb2ja{list-style:none;}
			.tnb-r-1ff274t{text-align:right;}
			.tnb-r-1gkfh8e{font-size:11px;}
			.tnb-r-1h0z5md{justify-content:flex-start;}
			.tnb-r-1h8ys4a{padding-top:4px;}
			.tnb-r-1hjwoze{height:18px;}
			.tnb-r-1iln25a{word-wrap:normal;}
			.tnb-r-1inkyih{font-size:17px;}
			.tnb-r-1ipicw7{width:300px;}
			.tnb-r-1iusvr4{flex-basis:0px;}
			.tnb-r-1janqcz{width:16px;}
			.tnb-r-1jaylin{width:-webkit-max-content;width:-moz-max-content;width:max-content;}
			.tnb-r-1k78y06{font-family:Tahoma, Arial, sans-serif;}
			.tnb-r-1kihuf0{align-self:center;}
			.tnb-r-1ldzwu0{animation-timing-function:linear;}
			.tnb-r-1loqt21{cursor:pointer;}
			.tnb-r-1mlwlqe{flex-basis:auto;}
			.tnb-r-1mrlafo{background-position:0;}
			.tnb-r-1muvv40{animation-iteration-count:infinite;}
			.tnb-r-1mwlp6a{height:56px;}
			.tnb-r-1nao33i{color:rgba(231,233,234,1.00);}
			.tnb-r-1niwhzg{background-color:rgba(0,0,0,0.00);}
			.tnb-r-1ny4l3l{outline-style:none;}
			.tnb-r-1oifz5y{background-color:rgba(170,17,0,1.00);}
			.tnb-r-1oszu61{align-items:stretch;}
			.tnb-r-1otgn73{touch-action:manipulation;}
			.tnb-r-1p0dtai{bottom:0px;}
			.tnb-r-1pi2tsx{height:100%;}
			.tnb-r-1ps3wis{min-width:44px;}
			.tnb-r-1qd0xha{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;}
			.tnb-r-1qi8awa{min-width:36px;}
			.tnb-r-1r5jyh0{min-height:130px;}
			.tnb-r-1r8g8re{height:36px;}
			.tnb-r-1s2hp8q{min-height:26px;}
			.tnb-r-1sxrcry{background-size:auto;}
			.tnb-r-1tl8opc{font-family:"Segoe UI",Meiryo,system-ui,-apple-system,BlinkMacSystemFont,sans-serif;}
			.tnb-r-1to6hqq{background-color:rgba(255,212,0,1.00);}
			.tnb-r-1ttztb7{text-align:inherit;}
			.tnb-r-1udbk01{text-overflow:ellipsis;}
			.tnb-r-1v2oles{top:50%;}
			.tnb-r-1vmecro{direction:rtl;}
			.tnb-r-1vr29t4{font-weight:800;}
			.tnb-r-1wb8bfx{text-decoration-thickness:2px;}
			.tnb-r-1wbh5a2{flex-shrink:1;}
			.tnb-r-1wyyakw{z-index:-1;}
			.tnb-r-1xcajam{position:fixed;}
			.tnb-r-1xk2f4g{clip:rect(1px, 1px, 1px, 1px);}
			.tnb-r-1xnzce8{-moz-user-select:text;-webkit-user-select:text;user-select:text;}
			.tnb-r-1xvli5t{height:1.25em;}
			.tnb-r-1y7e96w{min-width:22px;}
			.tnb-r-1ye8kvj{max-width:600px;}
			.tnb-r-1yef0xd{animation-name:r-11cv4x;}
			.tnb-r-1yjpyg1{font-size:31px;}
			.tnb-r-1ykxob0{top:60%;}
			.tnb-r-2o02ov{margin-top:40px;}
			.tnb-r-2tavb8{background-color:rgba(0,0,0,0.60);}
			.tnb-r-2yi16{min-height:36px;}
			.tnb-r-36ujnk{font-style:italic;}
			.tnb-r-37tt59{line-height:32px;}
			.tnb-r-3s2u2q{white-space:nowrap;}
			.tnb-r-417010{z-index:0;}
			.tnb-r-4gszlv{background-size:cover;}
			.tnb-r-4wgw6l{min-width:32px;}
			.tnb-r-54znze{color:rgba(239,243,244,1.00);}
			.tnb-r-56xrmm{line-height:12px;}
			.tnb-r-633pao{pointer-events:none!important;}
			.tnb-r-6416eg{-moz-transition-property:background-color, box-shadow;-webkit-transition-property:background-color, box-shadow;transition-property:background-color, box-shadow;}
			.tnb-r-64el8z{min-width:52px;}
			.tnb-r-7q8q6z{cursor:default;}
			.tnb-r-8akbws{-webkit-box-orient:vertical;}
			.tnb-r-8jfcpp{top:-2px;}
			.tnb-r-92ng3h{width:1px;}
			.tnb-r-a023e6{font-size:15px;}
			.tnb-r-adyw6z{font-size:20px;}
			.tnb-r-ah5dr5>*{pointer-events:none;}
			.tnb-r-ah5dr5{pointer-events:auto!important;}
			.tnb-r-aqfbo4{backface-visibility:hidden;}
			.tnb-r-b88u0q{font-weight:700;}
			.tnb-r-bcqeeo{min-width:0px;}
			.tnb-r-bnwqim{position:relative;}
			.tnb-r-bt1l66{min-height:20px;}
			.tnb-r-bvlit7{margin-bottom:-12px;}
			.tnb-r-deolkf{box-sizing:border-box;}
			.tnb-r-dflpy8{height:1.2em;}
			.tnb-r-dnmrzs{max-width:100%;}
			.tnb-r-ehq7j7{background-size:contain;}
			.tnb-r-emqnss{transform:translateZ(0px);}
			.tnb-r-eqz5dr{flex-direction:column;}
			.tnb-r-ero68b{min-height:40px;}
			.tnb-r-fdjqy7{text-align:left;}
			.tnb-r-fm7h5w{font-family:"TwitterChirpExtendedHeavy","Verdana",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;}
			.tnb-r-h9hxbl{width:1.2em;}
			.tnb-r-icoktb{opacity:0.5;}
			.tnb-r-ifefl9{min-height:0px;}
			.tnb-r-impgnl{transform:translateX(50%) translateY(-50%);}
			.tnb-r-iphfwy{padding-bottom:4px;}
			.tnb-r-ipm5af{top:0px;}
			.tnb-r-jmul1s{transform:scale(1.1);}
			.tnb-r-jwli3a{color:rgba(255,255,255,1.00);}
			.tnb-r-kemksi{background-color:rgba(0,0,0,1.00);}
			.tnb-r-lp5zef{min-width:24px;}
			.tnb-r-lrsllp{width:24px;}
			.tnb-r-lrvibr{-moz-user-select:none;-webkit-user-select:none;user-select:none;}
			.tnb-r-m6rgpd{vertical-align:text-bottom;}
			.tnb-r-majxgm{font-weight:500;}
			.tnb-r-n6v787{font-size:13px;}
			.tnb-r-nwxazl{line-height:40px;}
			.tnb-r-o7ynqc{transition-duration:0.2s;}
			.tnb-r-peo1c{min-height:44px;}
			.tnb-r-poiln3{font-family:inherit;}
			.tnb-r-pp5qcn{vertical-align:-20%;}
			.tnb-r-q4m81j{text-align:center;}
			.tnb-r-qlhcfr{font-size:0.001px;}
			.tnb-r-qvk6io{line-height:0px;}
			.tnb-r-qvutc0{word-wrap:break-word;}
			.tnb-r-rjixqe{line-height:20px;}
			.tnb-r-rki7wi{bottom:12px;}
			.tnb-r-sb58tz{max-width:1000px;}
			.tnb-r-tjvw6i{text-decoration-thickness:1px;}
			.tnb-r-u6sd8q{background-repeat:no-repeat;}
			.tnb-r-u8s1d{position:absolute;}
			.tnb-r-ueyrd6{line-height:36px;}
			.tnb-r-uho16t{font-size:34px;}
			.tnb-r-vkv6oe{min-width:40px;}
			.tnb-r-vlxjld{color:rgba(247,249,249,1.00);}
			.tnb-r-vqxq0j{border:0 solid black;}
			.tnb-r-vrz42v{line-height:28px;}
			.tnb-r-vvn4in{background-position:center;}
			.tnb-r-wy61xf{height:72px;}
			.tnb-r-x3cy2q{background-size:100% 100%;}
			.tnb-r-x572qd{background-color:rgba(247,249,249,1.00);}
			.tnb-r-xigjrr{-webkit-filter:blur(4px);filter:blur(4px);}
			.tnb-r-yc9v9c{width:22px;}
			.tnb-r-yfoy6g{background-color:rgba(21,32,43,1.00);}
			.tnb-r-yy2aun{font-size:26px;}
			.tnb-r-yyyyoo{fill:currentcolor;}
			.tnb-r-z7pwl0{max-width:700px;}
			.tnb-r-z80fyv{height:20px;}
			.tnb-r-zchlnj{right:0px;}
			@-webkit-keyframes tnb-r-11cv4x{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
			@keyframes tnb-r-11cv4x{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
			.tnb-r-24i0{position:absolute;visibility:hidden;top:0;width:50px;pointer-events:none}
			.tnb-r-24i0.loaded{visibility:visible;top:50vh;width:50px}
			/*なかったので追加*/
			.tnb-r-1s2bzr4{margin-top:12px;}
			.tnb-r-9aw3ui{gap:4px;}
		`.replace(/^[\ |	]+/, '');
		if(!isStyleNodeExist)document.head.appendChild(style);
	}
}



class Colors {
	constructor(){
		this.colors = {
			// [white, darkBlue, black]
			"fontColor":				['rgb(15, 20, 25)', 'rgb(247, 249, 249)', 'rgb(231, 233, 234)'], // ツイートの文字色など
			"fontColorDark":			['rgb(83, 100, 113)', 'rgb(139, 152, 165)', 'rgb(113, 118, 123)'], // いいねの数など
			"backgroundColor":			['rgba(255, 255, 255, 1.00)', 'rgb(21, 32, 43)', 'rgba(0, 0, 0, 1.00)'],
			"borderColor":				['rgb(239, 243, 244)', 'rgb(56, 68, 77)', 'rgb(47, 51, 54)'], // ツイートのボーダー色など
			"twitterBlue":				['rgb(29, 155, 240)', 'rgb(29, 155, 240)', 'rgb(29, 155, 240)'],
			"menuHoverEffect":			['rgba(15, 20, 25, 0.1)', 'rgba(247, 249, 249, 0.1)', 'rgba(231, 233, 234, 0.1)'], // 一番左のメニュー等のホバーエフェクト
			"menuHoverEffectLight":		['rgb(247, 249, 249)', 'rgb(30, 39, 50)', 'rgb(22, 24, 28)'], // 設定画面のホバーエフェクト
			"retweeted":				['rgb(0, 186, 124)', 'rgb(0, 186, 124)', 'rgb(0, 186, 124)'],
			"favorited":				['rgb(249, 24, 128)', 'rgb(249, 24, 128)', 'rgb(249, 24, 128)'],
			"dropdownBackgroundColor": 	['rgb(255, 255, 255)', 'rgb(59, 59, 59)', 'rgb(59, 59, 59)'],
			"dropdownFontColor":		['rgb(0, 0, 0)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)'],
			"dropdownBorderColor":		['rgb(118, 118, 118)', 'rgb(133, 133, 133)', 'rgb(133, 133, 133)'],
			"buttonBackgroundColor":	['rgb(239, 239, 239)', 'rgb(107, 107, 107)', 'rgb(107, 107, 107)'],
			"buttonFontColor":			['rgb(0, 0, 0)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)'],
			"buttonBorderColor":		['rgb(239, 239, 239)', 'rgb(107, 107, 107)', 'rgb(107, 107, 107)'],
			"conversationLineColor":	['rgb(207, 217, 222)', 'rgb(66, 83, 100)', 'rgb(51, 54, 57)'],
		};
	}

	/**
	* 指定されたカラーパレットから現在のテーマの色を返します
	* @param {string} colorName - 色名 (例: "fontColor")
	* @param {number} [darkMode] - テーマ番号 (0=デフォルト, 1=ダークブルー, 2=ブラック) (省略時は現在のテーマ)
	* @returns {string} - 色のRGB文字列 (例: "rgb(255,255,255)")
	*/
	get(colorName, darkMode = sessionData.themeMode.themeNum){
		return this.colors[colorName][darkMode];
	}

	/**
	* 指定した色にアルファ値（透過）を加えたRGBA形式を返します
	* @param {string} colorName - 色名 (例: "borderColor")
	* @param {number} alpha - 透過度 (0.0〜1.0)
	* @param {number} [darkMode] - テーマ番号（0=デフォルト, 1=ダークブルー, 2=ブラック) (省略時は現在のテーマ)
	* @returns {string} - RGBA文字列 (例: "rgba(255,255,255,1.0)")
	*/
	getWithAlpha(colorName, alpha, darkMode = sessionData.themeMode.themeNum){
		return `rgba(${this.colors[colorName][darkMode].match(/\d+/g).join(", ")}, ${alpha})`;
	}
}
const colors = new Colors();
function h(tag, props = {}, ...children){
	const el = document.createElement(tag);
	for(const key in props){
		const val = props[key];
		if(key === "style" && typeof val === "object"){
			Object.assign(el.style, val);
		}else if(key.startsWith("on") && typeof val === "function"){
			el.addEventListener(key.slice(2).toLowerCase(), val);
		}else if(key.startsWith("aria-") || key === "role"){
			el.setAttribute(key, val); // 強制的に属性にする
		}else if(key === "dataset" && typeof val === "object"){
			for(const dataKey in val){
				if(val[dataKey] != null){
					el.dataset[dataKey] = val[dataKey];
				}
			}
		}else if(key.startsWith("data-")){
			const prop = key.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase()); // dataset
			el.dataset[prop] = val;
		}else if(key === "ref" && typeof val === "function"){
			val(el); // 作成直後のDOMノードを渡す
		}else if(key in el){
			el[key] = val; // DOMプロパティ
		}else{
			el.setAttribute(key, val); // その他属性
		}
	}
	for(let i = 0; i < children.length; i++){
		const child = children[i];
		if(Array.isArray(child)){
			for(const nested of child){
				if(nested == null || nested === false)continue; // nullやfalseは無視
				el.appendChild(typeof nested === "string" || typeof nested === "number"
					? document.createTextNode(nested)
					: nested);
			}
		}else if(child != null && child !== false){
			el.appendChild(typeof child === "string" || typeof child === "number"
				? document.createTextNode(child)
				: child);
		}
	}
	return el;
}

