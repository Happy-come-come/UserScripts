
	// 便利なものを作ろうとしてクソを作ってしまった……助けてくれ…………
	// 負債すぎる……
	class TweetNodeBuilder {
		nodes;
		data;
		#colors = new Colors();
		#svgPaths = svgIconPaths;
		#textDatas = {};
		#textData;
		#isBuilt = false;
		get data(){
			return this.data;
		}
		constructor({screenName = null, tweetId = null, createdAt = null, avatar = null, author = null, tweetText = null, media = null, fotter = null}){
			if(!(screenName && tweetId)){
				console.error({error: "screenName または tweetId が指定されていません。これらは最初に必ず引数に含めてください。", screenName: screenName, tweetId: tweetId});
				return null;
			}
			this.data = {
				reply: {count: null, textElement: null},
				retweet: {count: null, textElement: null},
				favorite: {count: null, textElement: null},
				time: {createdAt: createdAt, element: null},
				tweetId : tweetId,
				screenName: screenName,
			}
			this.nodes = {
				rootContainer: null,
				article: null,
				header: null,
				main: null,
				avatar: null,
				contents: null,
				author: null,
				tweetText: null,
				media: null,
				footer: null,
				communitiyNote: null,
				/*
				quotedTweet: {
					container,
					article,
					avatar,
					author,
					tweetText,
					media,
				},
				*/
			}
			this.#createRootContainer();
			this.#createArticle();
			this.#createMainContainer();
			this.#createContentsContainer();

			this.#textDatas.ja = {
				"second": "秒",
				"minute": "分",
				"hour": "時間",
				"day": "日",
				"week": "週",
				"month": "月",
				"year": "年",
				"before": "前",
				"units": "万",
				"roundingScale": 10000,
				"decimalPlaces": 2,
			};
			this.#textDatas.en = {
				"second": "s",
				"minute": "m",
				"hour": "h",
				"day": "d",
				"week": "w",
				"month": "m",
				"year": "y",
				"before": "ago",
				"units": "k",
				"roundingScale": 1000,
				"decimalPlaces": 1,
			};
			this.#textData = this.#textDatas[scriptSettings?.makeTwitterLittleUseful?.language] || this.#textDatas.en;
			this.#appendCSS();
		}
		build(){
			if(!((this.nodes.tweetText || this.nodes.media) && this.nodes.author && this.nodes.footer)){
				console.error({error: "ツイートを構成する要素が足りていないようです。\n", nodes: this.nodes});
				return null;
			};
			if(this.#isBuilt){
				console.error("ビルドメソッドは1度だけしか使用できません。");
				return null;
			}
			this.#isBuilt = true;
			// rootContainer
			//   article
			//     header
			//     main
			//       avatar
			//       contents
			//         author
			//         tweetText
			//         media
			//	       footer

			const fragment = document.createDocumentFragment();
			this.nodes.contents.appendChild(this.nodes.author);
			if(this.nodes.tweetText)this.nodes.contents.appendChild(this.nodes.tweetText);
			if(this.nodes.media)this.nodes.contents.appendChild(this.nodes.media);
			this.nodes.contents.appendChild(this.nodes.footer);
			this.nodes.main.appendChild(this.nodes.avatar);
			this.nodes.main.appendChild(this.nodes.contents);
			if(!this.nodes.header)this.setHeader();
			this.nodes.articleBottom.appendChild(this.nodes.header);
			this.nodes.rootContainerBottomNode.appendChild(this.nodes.article);
			this.nodes.articleBottom.appendChild(this.nodes.main);
			fragment.appendChild(this.nodes.rootContainer);
			return fragment;
		}
		// functions
		#createRootContainer(){
			// rootContainer
			//   container2
			//     container3
			//   saparator
			const rootContainer = document.createElement('div');
			rootContainer.className = this.#classNameProcessor('css-175oi2r');
			rootContainer.style.width = '100%';
			rootContainer.setAttribute('data-testid', "cellInnerDiv");
			rootContainer.setAttribute('tnb-id', "cellInnerDiv");
			const container2 = document.createElement('div');
			container2.className = this.#classNameProcessor('css-175oi2r r-1adg3ll r-1ny4l3l');
			const saparator = document.createElement('div');
			saparator.className = this.#classNameProcessor('css-175oi2r r-109y4c4 r-13qz1uu');
			Object.assign(saparator.style, {
				backgroundColor: this.#colors.get('borderColor'),
			});
			container2.appendChild(saparator);
			const container3 = document.createElement('div');
			container3.className = this.#classNameProcessor('css-175oi2r');
			container2.appendChild(container3);
			rootContainer.appendChild(container2);
			this.nodes.rootContainerBottomNode = container3;
			this.nodes.rootContainer = rootContainer;
			return rootContainer;
		}
		#createArticle(){
			// article
			//   container2
			//     container3
			const article = document.createElement('article');
			article.setAttribute('data-testid', "tweet");
			article.setAttribute('tnb-id', "tweet");
			article.className = this.#classNameProcessor('css-175oi2r r-18u37iz r-1udh08x r-1c4vpko r-1c7gwzm r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21');
			const container2 = document.createElement('div');
			container2.className = this.#classNameProcessor('css-175oi2r r-eqz5dr r-16y2uox r-1wbh5a2');
			const container3 = document.createElement('div');
			container3.className = this.#classNameProcessor('css-175oi2r r-16y2uox r-1wbh5a2 r-1ny4l3l');
			container2.appendChild(container3);
			article.appendChild(container2);

			article.addEventListener('mouseover', (event)=>{
				article.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
			});
			function resetBackgroundColor(event){
				article.style.backgroundColor = '';
			}
			article.addEventListener('mouseout', resetBackgroundColor);
			article.addEventListener('touchend', resetBackgroundColor);
			article.addEventListener('touchcancel', resetBackgroundColor);
			article.addEventListener('click', (event)=>{
				event.stopPropagation();
				navigateTo(`/${this.data.screenName}/status/${this.data.tweetId}`);
			});
			this.nodes.articleBottom = container3;
			this.nodes.article = article;
			return article;
		}
		#createMainContainer(){
			const container = document.createElement('div');
			container.setAttribute('tnb-id', "mainContainer");
			container.className = this.#classNameProcessor('css-175oi2r r-18u37iz');
			this.nodes.main = container;
			return container;
		}
		#createContentsContainer(){
			const container = document.createElement('div');
			container.setAttribute('tnb-id', "contentsContainer");
			container.className = this.#classNameProcessor('css-175oi2r r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu');
			this.nodes.contents = container;
			return container;
		}
		setHeader({text = null, icon = null} = {}){
			// header
			//   container2
			//     container3
			//       additionalContainer1
			//         additionalContainer2
			//           svgContainer
			//             svgElement
			//           textContainer1
			//             textContainer2
			//               textContainer3
			//                 textElement


			if((text || icon)? !(text && icon) : false){
				console.error("[setHeader] ヘッダーをセットできませんでした。 何かヘッダーに表示する場合、textとiconはどちらも必要です。");
				return this;
			}
			if(icon ? (Object.keys(this.#svgPaths).indexOf(icon) == -1) : false){
				console.error(`[setHeader] ヘッダーをセットできませんでした。 iconは「${Object.keys(this.#svgPaths).join(", ")}」の中から選ぶ必要があります。`);
				return this;
			}
			const header = document.createElement('div');
			header.setAttribute('tnb-id', "header");
			header.className = this.#classNameProcessor('css-175oi2r');
			const container2 = document.createElement('div');
			container2.className = this.#classNameProcessor('css-175oi2r r-18u37iz');
			const container3 = document.createElement('div');
			container3.className = this.#classNameProcessor('css-175oi2r r-1iusvr4 r-16y2uox r-ttdzmv');

			if(text && icon){
				const additionalContainer1 = document.createElement('div');
				additionalContainer1.setAttribute('tnb-id', "additional-header");
				additionalContainer1.className = this.#classNameProcessor('css-175oi2r r-15zivkp r-q3we1');
				const additionalContainer2 = document.createElement('div');
				additionalContainer2.className = this.#classNameProcessor('css-175oi2r r-18u37iz');

				const svgContainer = document.createElement('div');
				svgContainer.className = this.#classNameProcessor('css-175oi2r r-18kxxzh r-1wron08 r-onrtq4 r-obd0qt r-1777fci');

				const svgElement = createSvgElement(icon).svg;
				svgElement.setAttribute('aria-hidden', "true");
				svgElement.className = this.#classNameProcessor('r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-10ptun7 r-1janqcz');

				svgContainer.appendChild(svgElement);
				additionalContainer2.append(svgContainer);

				const textContainer1 = document.createElement('div');
				textContainer1.className = this.#classNameProcessor('css-175oi2r r-1iusvr4 r-16y2uox');
				textContainer1.style.textOverflow = 'ellipsis';
				const textContainer2 = document.createElement('div');
				textContainer2.className = this.#classNameProcessor('css-175oi2r r-18u37iz');
				const textContainer3 = document.createElement('div');
				textContainer3.className = this.#classNameProcessor('css-175oi2r r-1habvwh r-1wbh5a2 r-1777fci');
				const textElement = document.createElement('div');
				textElement.setAttribute('data-testid', "socialContext");
				textElement.setAttribute('dir', "ltr");
				textElement.setAttribute('tnb-id', "socialContext");
				textElement.className = this.#classNameProcessor('css-146c3p1 r-8akbws r-krxsd3 r-dnmrzs r-1udh08x r-1udbk01 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-n6v787 r-1cwl3u0 r-b88u0q');
				textElement.textContent = text;
				textContainer3.appendChild(textElement);
				textContainer2.appendChild(textContainer3);
				textContainer1.appendChild(textContainer2);
				additionalContainer2.append(textContainer1);
				container3.appendChild(additionalContainer2);
			}

			container2.appendChild(container3);
			header.appendChild(container2);
			this.nodes.header = header;
			return this;
		}
		setAvatar({iconURL = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png", shape = 'circle', screenName = this.data.screenName} = {}){
			// avatorRootContainer
			//   container2
			//     container3
			//       container4
			//         container5
			//           container6
			//           container7
			//             container8
			//               avatarLink
			//                 container9
			//                   container10
			//                 container11
			//                   container12
			//                 imageContainer1
			//                   imageContainer2
			//                     imageContainer3
			//                   imageContainer4
			//                     imageContainer5
			//                     imageDisplayElement
			//                       imageElement
			//                 container13
			//                   container14


			if(!screenName){
				console.error({error: "[setAvatar] screenNameは必須です。", inputValue: screenName});
				return null;
			}else{
				this.data.screenName = screenName;
			}
			const shapeData = ['circle', 'square'];
			shape = shape.toLowerCase();
			if(shapeData.indexOf(shape) == -1){
				console.error({error: `[setAvatar]shapeは「${shapeData.join(", ")}」である必要があります`, inputValue: shape});
				return null;
			}
			const avatarRootContainer = document.createElement('div');
			avatarRootContainer.setAttribute('tnb-id', "avatarRootContainer");
			avatarRootContainer.className = this.#classNameProcessor("css-175oi2r r-18kxxzh r-1wron08 r-onrtq4 r-1awozwy");
			const container2 = document.createElement("div");
			container2.setAttribute('data-testid', "Tweet-User-Avatar");
			container2.setAttribute('tnb-id', "Tweet-User-Avatar");
			container2.className = this.#classNameProcessor("css-175oi2r");
			const container3 = document.createElement("div");
			container3.className = this.#classNameProcessor("css-175oi2r r-18kxxzh r-1wbh5a2 r-13qz1uu");
			const container4 = document.createElement("div");
			container4.className = this.#classNameProcessor("css-175oi2r r-1wbh5a2 r-dnmrzs");
			const container5 = document.createElement("div");
			container5.setAttribute('data-testid', `UserAvatar-Container-${screenName}`);
			container5.className = this.#classNameProcessor("css-175oi2r r-bztko3 r-1adg3ll");
			Object.assign(container5.style, {
				width: "40px",
				height: "40px",
			});
			const container6 = document.createElement("div");
			container6.className = this.#classNameProcessor("r-1adg3ll r-13qz1uu");
			container6.style.paddingBottom = "100%";
			container6.style.width = "100%";
			container6.style.display = "block";
			container5.appendChild(container6);
			const container7 = document.createElement("div");
			container7.className = this.#classNameProcessor("r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu");
			const container8 = document.createElement("div");
			container8.className = this.#classNameProcessor((shape == 'circle' ?
				"css-175oi2r r-sdzlij r-1udh08x r-5f1w11 r-u8s1d r-8jfcpp"
				:
				"css-175oi2r r-5f1w11 r-u8s1d r-8jfcpp"
			));
			Object.assign(container8.style, {
				width: "calc(100% + 4px)",
				height: "calc(100% + 4px)",
				...(shape == 'circle' ? {

				} : {
					clipPath: 'url("#shape-square")',
				}),
			});
			const avatarLink = document.createElement("a");
			avatarLink.setAttribute('aria-hidden', "true");
			avatarLink.setAttribute('role', "link");
			avatarLink.setAttribute('tabindex', "-1");
			avatarLink.href = `/${screenName}`;
			avatarLink.setAttribute('rel', "noopener nofollow");
			avatarLink.setAttribute('target', "_blank");
			avatarLink.className = this.#classNameProcessor("css-175oi2r r-1pi2tsx r-13qz1uu r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21");
			avatarLink.addEventListener('click', (event)=>{
				event.preventDefault();
				navigateTo(`/${screenName}`);
			});
			Object.assign(avatarLink.style, {
				backgroundColor: "rgba(0, 0, 0, 0)",
			});

			const container9 = document.createElement("div");
			container9.className = this.#classNameProcessor((shape == 'circle' ?
				"css-175oi2r r-sdzlij r-1udh08x r-633pao r-45ll9u r-u8s1d r-1v2oles r-176fswd"
				:
				"css-175oi2r r-633pao r-45ll9u r-u8s1d r-1v2oles r-176fswd"
			));
			Object.assign(container9.style, {
				width: "calc(100% + 4px)",
				height: "calc(100% + 4px)",
				...(shape == 'circle' ? {

				} : {
					clipPath: 'url("#shape-square-rx-16")',
				})
			});
			const container10 = document.createElement("div");
			container10.className = this.#classNameProcessor("css-175oi2r r-1pi2tsx r-13qz1uu");
			Object.assign(container10.style, {
				backgroundColor: "rgba(0, 0, 0, 0)",
			});
			container9.appendChild(container10);
			avatarLink.appendChild(container9);
			//
			const container11 = document.createElement("div");
			container11.className = this.#classNameProcessor((shape == 'circle' ?
				"css-175oi2r r-sdzlij r-1udh08x r-633pao r-45ll9u r-u8s1d r-1v2oles r-176fswd"
				:
				"css-175oi2r r-633pao r-45ll9u r-u8s1d r-1v2oles r-176fswd"
			));
			Object.assign(container11.style, {
				width: "calc(100% + 4px)",
				height: "calc(100% + 4px)",
				...(shape == 'circle' ? {

				} : {
					clipPath: 'url("#shape-square-rx-16")',
				})
			});
			const container12 = document.createElement("div");
			container10.className = this.#classNameProcessor("css-175oi2r r-1pi2tsx r-13qz1uu r-yfoy6g");
			Object.assign(container10.style, {
				backgroundColor: "rgba(0, 0, 0, 0)",
			});
			container11.appendChild(container12);
			avatarLink.appendChild(container11);
			//
			const imageContainer1 = document.createElement("div");
			imageContainer1.className = this.#classNameProcessor((shape == 'circle' ?
				"css-175oi2r r-sdzlij r-1udh08x r-633pao r-45ll9u r-u8s1d r-1v2oles r-176fswd"
				:
				"css-175oi2r r-633pao r-45ll9u r-u8s1d r-1v2oles r-176fswd"
			));
			Object.assign(imageContainer1.style, {
				width: "calc(100% + 4px)",
				height: "calc(100% + 4px)",
				...(shape == 'circle' ? {

				} : {
					clipPath: 'url("#shape-square-rx-16")',
				})
			});
			const imageContainer2 = document.createElement("div");
			imageContainer2.className = this.#classNameProcessor("css-175oi2r r-1adg3ll r-1udh08x");
			const imageContainer3 = document.createElement("div");
			imageContainer3.className = this.#classNameProcessor("r-1adg3ll r-13qz1uu");
			Object.assign(imageContainer3.style, {
				paddingBottom: "100%",
			});
			imageContainer2.appendChild(imageContainer3);
			const imageContainer4 = document.createElement("div");
			imageContainer4.className = this.#classNameProcessor("r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu");
			const imageContainer5 = document.createElement("div");
			imageContainer5.className = this.#classNameProcessor("css-175oi2r r-1mlwlqe r-1udh08x r-417010 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af");
			//if(shape === 'square')imageContainer5.setAttribute("aria-label", "正方形のプロフィール画像");
			const imageDisplayElement = document.createElement("div");
			Object.assign(imageDisplayElement.style, {
				backgroundImage: `url(${iconURL})`,
			});
			imageDisplayElement.className = this.#classNameProcessor("css-175oi2r r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv");
			imageContainer5.appendChild(imageDisplayElement);
			const imageElement = document.createElement("img");
			imageElement.setAttribute('draggable', "true");
			imageElement.className = this.#classNameProcessor("css-9pa8cd");
			imageElement.src = iconURL;
			imageElement.alt = shape === 'square' ? "正方形のプロフィール画像" : "";
			imageContainer5.appendChild(imageElement);
			imageContainer4.appendChild(imageContainer5);
			imageContainer2.appendChild(imageContainer4);
			imageContainer1.appendChild(imageContainer2);
			avatarLink.appendChild(imageContainer1);

			const container13 = document.createElement("div");
			container13.className = this.#classNameProcessor((shape == 'circle' ?
				"css-175oi2r r-sdzlij r-1udh08x r-45ll9u r-u8s1d r-1v2oles r-176fswd"
				:
				"css-175oi2r r-45ll9u r-u8s1d r-1v2oles r-176fswd"
			));
			Object.assign(container13.style, {
				width: "calc(100% + 4px)",
				height: "calc(100% + 4px)",
				...(shape == 'circle' ? {

				} : {
					clipPath: 'url("#shape-square-rx-16")',
				})
			});
			const container14 = document.createElement("div");
			container14.className = this.#classNameProcessor("css-175oi2r r-172uzmj r-1pi2tsx r-13qz1uu r-o7ynqc r-6416eg r-1ny4l3l");
			container13.appendChild(container14);
			avatarLink.appendChild(container13);

			container8.appendChild(avatarLink);
			container7.appendChild(container8);
			container5.appendChild(container7);
			container4.appendChild(container5);
			container3.appendChild(container4);
			container2.appendChild(container3);
			avatarRootContainer.appendChild(container2);
			this.nodes.avatar = avatarRootContainer;
			return this;
		}
		setAuthor({name = null, screenName = this.data.screenName, tweetId = this.data.tweetId, isProtected = false, verifiedBadge = false, affiliatesBadge = null, createdAt = this.data.time.createdAt} = {}){
			// authorContainer
			//   container2
			//     container3
			//       container4
			//         container5
			//           nameContainer
			//             nameContainer2
			//               nameLink
			//                 nameContainer3
			//                   nameDisplayContainer
			//                     nameDisplayContainer2
			//                       nameElement
			//                   badgeContainer
			//                     badgeContainer2
			//					     ?verifiedBadgeElement
			//					     ?affiliatesBadgeElement
			//                       ?protectedBadgeElement
			//                       ?affiliatesBadgeContainer
			//						   affiliatesBadgeContainer2
			//                           affiliatesBadgeContainer3
			//                           affiliatesBadgeContainer4
			//                             affiliatesBadgeContainer5
			//                               affiliatesBadgeDisplayElement
			//                               affiliatesBadgeImageElement
			//           screenNameContainer
			//             screenNameContainer2
			//               screenNameContainer3
			//                 screenNameLink
			//                   screenNameContainer4
			//                     screenNameElement
			//               dotContainer
			//                 dotElement
			//           timeContainer
			//             timeLink
			//               timeElement
			//     menuContainer
			//       menuContainer2
			//         menuContainer3
			//           menuContainer4
			//             menuButton
			//               menuContainer5
			//                 menuContainer6
			//                   menuContainer7
			//                   menuSvg

			if(!name){
				console.error({error: "[setAuthor] nameは必須です。", inputValue: name});
				return null;
			}
			if(!screenName){
				console.error({error: "[setAuthor] screenNameは必須です。", inputValue: screenName});
				return null;
			}
			screenName = screenName.replace(/^\@/, '');
			if(!tweetId){
				console.error({error: "[setAuthor] tweetIdは必須です。", inputValue: tweetId});
				return null;
			}
			verifiedBadge = verifiedBadge?.toLowerCase();
			if(verifiedBadge && !verifiedBadge?.match(/blue|business/)){
				console.error({error: `[setAuthor] verifiedBadgeは「blue」か「business」である必要があります`, inputValue: verifiedBadge});
				return null;
			}
			if(isUrl(affiliatesBadge)){
				console.error({error: `[setAuthor] affiliatesBadgeは画像のURLである必要があります`, inputValue: affiliatesBadge});
				return null;
			}
			if(createdAt){
				const time = new Date(createdAt);
				if(isNaN(time)){
					console.error({error: `[setAuthor] createdAtが必要です。また、正しい日付である必要があります`, inputValue: createdAt});
					return null;
				}
				this.data.time.createdAt = createdAt;
			}
			const authorContainer = document.createElement('div');
			authorContainer.setAttribute('tnb-id', "authorContainer");
			authorContainer.className = this.#classNameProcessor("css-175oi2r r-zl2h9q");
			const container2 = document.createElement('div');
			container2.className = this.#classNameProcessor("css-175oi2r r-k4xj1c r-18u37iz r-1wtj0ep");
			const container3 = document.createElement('div');
			container3.className = this.#classNameProcessor("css-175oi2r r-1d09ksm r-18u37iz r-1wbh5a2");
			const container4 = document.createElement('div');
			container4.className = this.#classNameProcessor("css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l");
			const container5 = document.createElement('div');
			container5.setAttribute('data-testid', `User-Name`);
			container5.setAttribute('tnb-id', `User-Name`);
			container5.className = this.#classNameProcessor("css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1awozwy r-18u37iz");
			const nameContainer = document.createElement('div');
			nameContainer.className = this.#classNameProcessor("css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs");
			const nameContainer2 = document.createElement('div');
			nameContainer2.className = this.#classNameProcessor("css-175oi2r r-1wbh5a2 r-dnmrzs");
			const nameLink = document.createElement('a');
			nameLink.setAttribute('role', "link");
			nameLink.className = this.#classNameProcessor("css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21");
			nameLink.href = `/${screenName}`;
			nameLink.addEventListener('click', (event)=>{
				event.preventDefault();
				navigateTo(`/${screenName}`);
			});
			const nameContainer3 = document.createElement('div');
			nameContainer3.className = this.#classNameProcessor("css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs");
			const nameDisplayContainer = document.createElement('div');
			nameDisplayContainer.setAttribute('dir', "ltr");
			nameDisplayContainer.className = this.#classNameProcessor("css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-1udh08x r-3s2u2q");
			Object.assign(nameDisplayContainer.style, {
				color: this.#colors.get('fontColor'),
			});
			const nameDisplayContainer2 = document.createElement('div');
			nameDisplayContainer2.className = this.#classNameProcessor("css-1jxf684 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc");
			const nameElement = document.createElement('span');
			nameElement.className = this.#classNameProcessor("css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc");
			nameElement.textContent = name;
			nameDisplayContainer2.appendChild(nameElement);
			nameDisplayContainer.appendChild(nameDisplayContainer2);

			const badgeContainer = document.createElement('div');
			badgeContainer.setAttribute('dir', "ltr");
			badgeContainer.className = this.#classNameProcessor("css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-a023e6 r-rjixqe r-16dba41 r-xoduu5 r-18u37iz r-1q142lx");
			Object.assign(badgeContainer.style, {
				color: this.#colors.get('fontColor'),
			});
			const badgeContainer2 = document.createElement('span');
			badgeContainer2.className = this.#classNameProcessor("css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-1awozwy r-xoduu5");

			if(verifiedBadge === 'blue'){
				const verifiedBadgeElement = createSvgElement(this.#svgPaths.blueBadge).svg;
				verifiedBadgeElement.setAttribute('aria-label', "認証済みアカウント");
				verifiedBadgeElement.setAttribute('role', "img");
				verifiedBadgeElement.setAttribute('data-testid', "icon-verified");
				verifiedBadgeElement.setAttribute('tnb-id', "icon-verified");
				verifiedBadgeElement.setAttribute("class", this.#classNameProcessor("r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i"));
				badgeContainer2.appendChild(verifiedBadgeElement);
			}
			if(verifiedBadge === 'business'){
				const svgNS = "http://www.w3.org/2000/svg";
				const affiliatesBadgeElement = document.createElementNS(svgNS, "svg");
				affiliatesBadgeElement.setAttribute("viewBox", "0 0 22 22");
				affiliatesBadgeElement.setAttribute("aria-label", "認証済みアカウント");
				affiliatesBadgeElement.setAttribute("role", "img");
				affiliatesBadgeElement.setAttribute("data-testid", "icon-verified");
				affiliatesBadgeElement.setAttribute("class", this.#classNameProcessor("r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-f9ja8p r-og9te1 r-3t4u6i"));

				const g = document.createElementNS(svgNS, "g");
				const linearGradient1 = document.createElementNS(svgNS, "linearGradient");
				linearGradient1.setAttribute("gradientUnits", "userSpaceOnUse");
				linearGradient1.setAttribute("id", "43-a");
				linearGradient1.setAttribute("x1", "4.411");
				linearGradient1.setAttribute("x2", "18.083");
				linearGradient1.setAttribute("y1", "2.495");
				linearGradient1.setAttribute("y2", "21.508");
				const stop1 = document.createElementNS(svgNS, "stop");
				stop1.setAttribute("offset", "0");
				stop1.setAttribute("stop-color", "#f4e72a");
				linearGradient1.appendChild(stop1);
				const stop2 = document.createElementNS(svgNS, "stop");
				stop2.setAttribute("offset", ".539");
				stop2.setAttribute("stop-color", "#cd8105");
				linearGradient1.appendChild(stop2);
				const stop3 = document.createElementNS(svgNS, "stop");
				stop3.setAttribute("offset", ".68");
				stop3.setAttribute("stop-color", "#cb7b00");
				linearGradient1.appendChild(stop3);
				const stop4 = document.createElementNS(svgNS, "stop");
				stop4.setAttribute("offset", "1");
				stop4.setAttribute("stop-color", "#f4ec26");
				linearGradient1.appendChild(stop4);
				const stop5 = document.createElementNS(svgNS, "stop");
				stop5.setAttribute("offset", "1");
				stop5.setAttribute("stop-color", "#f4e72a");
				linearGradient1.appendChild(stop5);

				const linearGradient2 = document.createElementNS(svgNS, "linearGradient");
				linearGradient2.setAttribute("gradientUnits", "userSpaceOnUse");
				linearGradient2.setAttribute("id", "43-b");
				linearGradient2.setAttribute("x1", "5.355");
				linearGradient2.setAttribute("x2", "16.361");
				linearGradient2.setAttribute("y1", "3.395");
				linearGradient2.setAttribute("y2", "19.133");
				const stop6 = document.createElementNS(svgNS, "stop");
				stop6.setAttribute("offset", "0");
				stop6.setAttribute("stop-color", "#f9e87f");
				linearGradient2.appendChild(stop6);
				const stop7 = document.createElementNS(svgNS, "stop");
				stop7.setAttribute("offset", ".406");
				stop7.setAttribute("stop-color", "#e2b719");
				linearGradient2.appendChild(stop7);
				const stop8 = document.createElementNS(svgNS, "stop");
				stop8.setAttribute("offset", ".989");
				stop8.setAttribute("stop-color", "#e2b719");
				linearGradient2.appendChild(stop8);

				const g2 = document.createElementNS(svgNS, "g");
				g2.setAttribute("clip-rule", "evenodd");
				g2.setAttribute("fill-rule", "evenodd");
				const path1 = document.createElementNS(svgNS, "path");
				path1.setAttribute("d", "M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z");
				path1.setAttribute("fill", "url(#43-a)");
				g2.appendChild(path1);
				const path2 = document.createElementNS(svgNS, "path");
				path2.setAttribute("d", "M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z");
				path2.setAttribute("fill", "url(#43-b)");
				g2.appendChild(path2);
				const path3 = document.createElementNS(svgNS, "path");
				path3.setAttribute("d", "M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z");
				path3.setAttribute("fill", "#d18800");
				g2.appendChild(path3);

				g.appendChild(linearGradient1);
				g.appendChild(linearGradient2);
				g.appendChild(g2);
				affiliatesBadgeElement.appendChild(g);
				badgeContainer2.appendChild(affiliatesBadgeElement);
			}
			if(isProtected){
				const protectedBadgeElement = createSvgElement(this.#svgPaths.protected).svg;
				protectedBadgeElement.setAttribute('aria-label', "非公開アカウント");
				protectedBadgeElement.setAttribute('role', "img");
				protectedBadgeElement.setAttribute('data-testid', "icon-lock");
				protectedBadgeElement.setAttribute('tnb-id', "icon-lock");
				protectedBadgeElement.setAttribute("class", this.#classNameProcessor("r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-3t4u6i r-vlxjld r-f9ja8p r-og9te1"));
				badgeContainer2.appendChild(protectedBadgeElement);
			}
			if(affiliatesBadge){
				const affiliatesBadgeContainer = document.createElement('div');
				affiliatesBadgeContainer.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1777fci r-x1x4zq r-1ez5h0i r-1ny4l3l r-1loqt21");
				affiliatesBadgeContainer.setAttribute('tabindex', "0");
				affiliatesBadgeContainer.setAttribute('role', "link");
				const affiliatesBadgeContainer2 = document.createElement('div');
				affiliatesBadgeContainer2.className = this.#classNameProcessor("css-175oi2r r-1adg3ll r-1udh08x");
				const affiliatesBadgeContainer3 = document.createElement('div');
				affiliatesBadgeContainer3.className = this.#classNameProcessor("r-1adg3ll r-13qz1uu");
				Object.assign(affiliatesBadgeContainer3.style, {
					paddingBottom: "100%",
				});
				affiliatesBadgeContainer2.appendChild(affiliatesBadgeContainer3);
				const affiliatesBadgeContainer4 = document.createElement('div');
				affiliatesBadgeContainer4.className = this.#classNameProcessor("r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu");
				const affiliatesBadgeContainer5 = document.createElement('div');
				affiliatesBadgeContainer5.className = this.#classNameProcessor("css-175oi2r r-1mlwlqe r-1udh08x r-417010 r-126aqm3 r-1jkafct r-rs99b7 r-6koalj r-1pi2tsx r-13qz1uu");
				const affiliatesBadgeDisplayElement = document.createElement('div');
				affiliatesBadgeDisplayElement.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv");
				Object.assign(affiliatesBadgeDisplayElement.style, {
					backgroundImage: `url(${affiliatesBadge})`,
				});
				affiliatesBadgeContainer5.appendChild(affiliatesBadgeDisplayElement);
				const affiliatesBadgeImageElement = document.createElement('img');
				affiliatesBadgeImageElement.setAttribute('draggable', "true");
				affiliatesBadgeImageElement.className = this.#classNameProcessor("css-9pa8cd");
				affiliatesBadgeImageElement.src = affiliatesBadge;
				affiliatesBadgeImageElement.alt = "";
				affiliatesBadgeContainer5.appendChild(affiliatesBadgeImageElement);
				affiliatesBadgeContainer4.appendChild(affiliatesBadgeContainer5);
				affiliatesBadgeContainer2.appendChild(affiliatesBadgeContainer4);
				affiliatesBadgeContainer.appendChild(affiliatesBadgeContainer2);
				badgeContainer2.appendChild(affiliatesBadgeContainer);
			}
			badgeContainer.appendChild(badgeContainer2);
			nameContainer3.appendChild(nameDisplayContainer);
			nameContainer3.appendChild(badgeContainer);
			nameLink.appendChild(nameContainer3);
			nameContainer2.appendChild(nameLink);
			nameContainer.appendChild(nameContainer2);

			const screenNameContainer = document.createElement('div');
			screenNameContainer.className = this.#classNameProcessor("css-175oi2r r-18u37iz r-1wbh5a2 r-1ez5h0i");
			const screenNameContainer2 = document.createElement('div');
			screenNameContainer2.className = this.#classNameProcessor("css-175oi2r r-1d09ksm r-18u37iz r-1wbh5a2");
			const screenNameContainer3 = document.createElement('div');
			screenNameContainer3.className = this.#classNameProcessor("css-175oi2r r-1wbh5a2 r-dnmrzs");
			const screenNameLink = document.createElement('a');
			screenNameLink.setAttribute('role', "link");
			screenNameLink.setAttribute('tabindex', "-1");
			screenNameLink.className = this.#classNameProcessor("css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21");
			screenNameLink.href = `/${screenName}`;
			const screenNameContainer4 = document.createElement('div');
			screenNameContainer4.className = this.#classNameProcessor("css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-18u37iz r-1wvb978");
			Object.assign(screenNameContainer4.style, {
				color: this.#colors.get('fontColorDark'),
			});
			const screenNameElement = document.createElement('span');
			screenNameElement.className = this.#classNameProcessor("css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc");
			screenNameElement.textContent = `@${screenName}`;
			screenNameContainer4.appendChild(screenNameElement);
			screenNameLink.appendChild(screenNameContainer4);
			screenNameContainer3.appendChild(screenNameLink);

			const dotContainer = document.createElement('div');
			dotContainer.className = this.#classNameProcessor("css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-a023e6 r-rjixqe r-16dba41 r-1q142lx r-n7gxbd");
			dotContainer.setAttribute('aria-hidden', "true");
			dotContainer.setAttribute('dir', "ltr");
			Object.assign(dotContainer.style, {
				color: this.#colors.get('fontColorDark'),
			});
			const dotElement = document.createElement('span');
			dotElement.className = this.#classNameProcessor("css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc");
			dotElement.textContent = "·";
			dotContainer.appendChild(dotElement);
			screenNameContainer2.appendChild(screenNameContainer3);
			screenNameContainer.appendChild(screenNameContainer2);

			const timeText = this.#timeProcessor(createdAt);
			const timeContainer = document.createElement('div');
			timeContainer.className = this.#classNameProcessor("css-175oi2r r-18u37iz r-1q142lx");
			const timeLink = document.createElement('a');
			timeLink.setAttribute('role', "link");
			timeLink.setAttribute('dir', "ltr");
			timeLink.setAttribute('aria-label', `${timeText.timeText}${timeText.flag ? this.#textData.before : ""}`);
			timeLink.className = this.#classNameProcessor("css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-a023e6 r-rjixqe r-16dba41 r-xoduu5 r-1q142lx r-1w6e6rj r-9aw3ui r-3s2u2q r-1loqt21");
			timeLink.href = `/${screenName}/status/${tweetId}`;
			Object.assign(timeLink.style, {
				color: this.#colors.get('fontColorDark'),
			});
			const timeElement = document.createElement('time');
			timeElement.setAttribute('datetime', timeText.ISO);
			timeElement.textContent = timeText.timeText;

			timeLink.appendChild(timeElement);
			timeContainer.appendChild(timeLink);
			container5.appendChild(nameContainer);
			container5.appendChild(screenNameContainer);
			container5.appendChild(dotContainer);
			container5.appendChild(timeContainer);
			container4.appendChild(container5);
			container3.appendChild(container4);
			container2.appendChild(container3);
			authorContainer.appendChild(container2);

			const menuContainer = document.createElement('div');
			menuContainer.setAttribute('tnb-id', "menuContainer");
			menuContainer.className = this.#classNameProcessor("css-175oi2r r-1kkk96v");
			const menuContainer2 = document.createElement('div');
			menuContainer2.className = this.#classNameProcessor("css-175oi2r r-1awozwy r-6koalj r-18u37iz");
			const menuContainer3 = document.createElement('div');
			menuContainer3.className = this.#classNameProcessor("css-175oi2r");
			const menuContainer4 = document.createElement('div');
			menuContainer4.className = this.#classNameProcessor("css-175oi2r r-18u37iz r-1h0z5md");
			const menuButton = document.createElement('button');
			menuButton.setAttribute('data-testid', "caret");
			menuButton.setAttribute('tnb-id', "caret");
			menuButton.setAttribute('role', "button");
			menuButton.setAttribute('aria-haspopup', "menu");
			menuButton.setAttribute('aria-expanded', "false");
			menuButton.setAttribute('type', "button");
			menuButton.className = this.#classNameProcessor("css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l");
			const menuContainer5 = document.createElement('div');
			menuContainer5.setAttribute('dir', "ltr");
			menuContainer5.className = this.#classNameProcessor("css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q");
			Object.assign(menuContainer5.style, {
				color: this.#colors.get('fontColorDark'),
			});
			const menuContainer6 = document.createElement('div');
			menuContainer6.className = this.#classNameProcessor("css-175oi2r r-xoduu5");
			const menuContainer7 = document.createElement('div');
			menuContainer7.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l");
			menuContainer6.appendChild(menuContainer7);
			const menuSvg = createSvgElement(this.#svgPaths.menu).svg;
			menuSvg.setAttribute('aria-hidden', "true");
			menuSvg.setAttribute('class', this.#classNameProcessor("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"));
			menuContainer7.appendChild(menuSvg);
			menuContainer5.appendChild(menuContainer6);
			menuButton.appendChild(menuContainer5);
			menuContainer4.appendChild(menuButton);
			menuContainer3.appendChild(menuContainer4);
			menuContainer2.appendChild(menuContainer3);
			menuContainer.appendChild(menuContainer2);

			container2.appendChild(menuContainer);
			this.nodes.author = authorContainer;
			return this;
		}
		setText(text){
			// textContainer
			//   textContainer2
			//     textElement
			if(typeof text === 'string'){
				// 文字列の場合はHTMLとしてパース
				const tempDiv = document.createElement('div');
				tempDiv.innerHTML = text;
				text = tempDiv.firstChild;
			}else if(("" || null || undefined) || (text instanceof Element)){
				//
			}else{
				console.error({error: "[setText] textは文字列かElementか空である必要があります", inputValue: text});
				return null;
			}
			const textContainer = document.createElement('div');
			textContainer.setAttribute('tnb-id', "textContainer");
			textContainer.className = this.#classNameProcessor("css-175oi2r");
			if(text){
				const textContainer2 = document.createElement('div');
				textContainer2.setAttribute('data-testid', "tweetText");
				textContainer2.setAttribute('tnb-id', "tweetText");
				textContainer2.setAttribute('dir', "auto");
				textContainer2.setAttribute('lang', "ja");
				textContainer2.className = this.#classNameProcessor("css-146c3p1 r-8akbws r-krxsd3 r-dnmrzs r-1udh08x r-1udbk01 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-bnwqim tweetExpanderChecked");
				Object.assign(textContainer2.style, {
					color: this.#colors.get('fontColor'),
				});
				const textElement = text;
				textElement.className = this.#classNameProcessor("css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc");
				textElement.querySelectorAll('a').forEach((link) => {
					link.addEventListener('mouseenter', function(){
						link.className = envSelector.link.hovered;
					});
					link.addEventListener('mouseleave', function(){
						link.className = envSelector.link.nomal;
					});
				});
				textContainer2.appendChild(textElement);
				textContainer.appendChild(textContainer2);
			}
			this.nodes.tweetText = textContainer;
			return this;
		}
		setMedia(medias = []){
			//[{media: "", type: "", size: {width: "", height: ""}, ?videoData: {thumbnail: "", source: {src: ""}, otherSource: [{src: ""}]}}]
			//type: photo, video, animated_gif
			const node = this.#createMediaNode(medias);
			if(node)this.nodes.media = node;
			return this;
		}
		setFooter({replyCount = 0, retweetCount = 0, quoteCount = 0, favoriteCount = 0, retweeted = false, favorited = false, bookmarked = false, analyticsCount = 0}={}){
			// footerContainer
			//   footerContainer2
			//     footerContainer3
			//       footerContainer4
			//         replyContainer
			//           replyButton
			//             replyContainer2
			//               replyContainer3
			//                 replyContainer4
			//                 replySvg
			//               replyCountContainer
			//                 replyCountElement
			//                   replyCountElement2
			//         retweetContainer

			this.data.reply.count = replyCount;
			this.data.retweet.count = retweetCount + quoteCount;
			this.data.favorite.count = favoriteCount;

			const footerContainer = document.createElement('div');
			footerContainer.setAttribute('tnb-id', "footerContainer");
			footerContainer.className = this.#classNameProcessor("css-175oi2r");
			const footerContainer2 = document.createElement('div');
			footerContainer2.className = this.#classNameProcessor("css-175oi2r");
			const footerContainer3 = document.createElement('div');
			footerContainer3.setAttribute('role', "group");
			footerContainer3.setAttribute('id', "dummy");
			footerContainer3.className = this.#classNameProcessor("css-175oi2r r-1kbdv8c r-18u37iz r-1wtj0ep r-1ye8kvj r-1s2bzr4");
			const footerContainer4 = document.createElement('div');
			footerContainer4.className = this.#classNameProcessor("css-175oi2r r-18u37iz r-1h0z5md r-13awgt0");
			const replyContainer = document.createElement('div');
			replyContainer.setAttribute('tnb-id', "replyContainer");
			replyContainer.className = this.#classNameProcessor("css-175oi2r r-18u37iz r-1h0z5md r-13awgt0");
			const replyButton = document.createElement('button');
			replyButton.setAttribute('data-testid', "reply");
			replyButton.setAttribute('tnb-id', "reply");
			replyButton.setAttribute('role', "button");
			replyButton.setAttribute('type', "button");
			replyButton.className = this.#classNameProcessor("css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l");
			const replyContainer2 = document.createElement('div');
			replyContainer2.className = this.#classNameProcessor("css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q");
			Object.assign(replyContainer2.style, {
				color: this.#colors.get('fontColorDark'),
			});
			const replyContainer3 = document.createElement('div');
			replyContainer3.className = this.#classNameProcessor("css-175oi2r r-xoduu5");
			const replyContainer4 = document.createElement('div');
			replyContainer4.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l");
			replyContainer3.appendChild(replyContainer4);
			const replySvg = createSvgElement(this.#svgPaths.reply).svg;
			replySvg.setAttribute('aria-hidden', "true");
			replySvg.setAttribute('class', this.#classNameProcessor("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"));
			replyContainer3.appendChild(replySvg);
			replyContainer2.appendChild(replyContainer3);
			const replyCountContainer = document.createElement('div');
			replyCountContainer.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1udh08x");
			const replyCountElement = document.createElement('span');
			replyCountElement.setAttribute('data-testid', "app-text-transition-container");
			replyCountElement.setAttribute('tnb-id', "app-text-transition-container");
			Object.assign(replyCountElement.style, {
				transitionProperty: "transform",
				transitionDuration: "0.3s",
				transform: "translate3d(0px, 0px, 0px)",
			});
			const replyCountElement2 = document.createElement('span');
			replyCountElement2.className = this.#classNameProcessor("css-1jxf684 r-1ttztb7 r-qvutc0 r-1tl8opc r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd");
			replyCountElement2.textContent = this.data.reply.count > 0 ? this.data.reply.count : "";
			this.data.reply.element = replyCountElement2;
			replyCountElement.appendChild(replyCountElement2);
			replyCountContainer.appendChild(replyCountElement);
			replyContainer2.appendChild(replyCountContainer);
			replyButton.appendChild(replyContainer2);
			replyContainer.appendChild(replyButton);
			footerContainer4.appendChild(replyContainer);
			this.#addChangeColorEventListener(replyContainer2, replyContainer4, this.#colors.get('twitterBlue'), this.#colors.getWithAlpha('twitterBlue', 0.1), this.#colors.get('fontColorDark'), "");

			const retweetContainer = document.createElement('div');
			retweetContainer.setAttribute('tnb-id', "retweetContainer");
			retweetContainer.className = this.#classNameProcessor("css-175oi2r r-18u37iz r-1h0z5md r-13awgt0");
			const retweetButton = document.createElement('button');
			retweetButton.setAttribute('data-testid', "retweet");
			retweetButton.setAttribute('tnb-id', "retweet");
			retweetButton.setAttribute('role', "button");
			retweetButton.setAttribute('type', "button");
			retweetButton.className = this.#classNameProcessor("css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l");
			const retweetContainer2 = document.createElement('div');
			retweetContainer2.className = this.#classNameProcessor("css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q");
			Object.assign(retweetContainer2.style, {
				color: this.#colors.get(retweeted ? 'retweeted' : 'fontColorDark'),
			});
			const retweetContainer3 = document.createElement('div');
			retweetContainer3.className = this.#classNameProcessor("css-175oi2r r-xoduu5");
			const retweetContainer4 = document.createElement('div');
			retweetContainer4.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l");
			retweetContainer3.appendChild(retweetContainer4);
			const retweetSvg = createSvgElement(this.#svgPaths[retweeted ? "retweeted" : "retweet"]).svg;
			retweetSvg.setAttribute('aria-hidden', "true");
			retweetSvg.setAttribute('class', this.#classNameProcessor("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"));
			if(retweeted)retweetSvg.style.color = this.#colors.get('retweeted');
			retweetContainer3.appendChild(retweetSvg);
			retweetContainer2.appendChild(retweetContainer3);
			const retweetCountContainer = document.createElement('div');
			retweetCountContainer.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1udh08x");
			const retweetCountElement = document.createElement('span');
			retweetCountElement.setAttribute('data-testid', "app-text-transition-container");
			retweetCountElement.setAttribute('tnb-id', "app-text-transition-container");
			Object.assign(retweetCountElement.style, {
				transitionProperty: "transform",
				transitionDuration: "0.3s",
				transform: "translate3d(0px, 0px, 0px)",
			});
			const retweetCountElement2 = document.createElement('span');
			retweetCountElement2.className = this.#classNameProcessor("css-1jxf684 r-1ttztb7 r-qvutc0 r-1tl8opc r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd");
			retweetCountElement2.textContent = this.data.retweet.count > 0 ? this.data.retweet.count : "";
			this.data.retweet.element = retweetCountElement2;
			retweetCountElement.appendChild(retweetCountElement2);
			retweetCountContainer.appendChild(retweetCountElement);
			retweetContainer2.appendChild(retweetCountContainer);
			retweetButton.appendChild(retweetContainer2);
			retweetContainer.appendChild(retweetButton);
			footerContainer4.appendChild(retweetContainer);
			this.#addChangeColorEventListener(retweetContainer2, retweetContainer4, this.#colors.get('retweeted'), this.#colors.getWithAlpha('retweeted', 0.1), this.#colors.get('fontColorDark'), "");
			addClickButtonEvent(retweetButton, retweetSvg, retweetSvg.querySelector('path'), "retweet");

			const favoriteContainer = document.createElement('div');
			favoriteContainer.setAttribute('tnb-id', "favoriteContainer");
			favoriteContainer.className = this.#classNameProcessor("css-175oi2r r-18u37iz r-1h0z5md r-13awgt0");
			const favoriteButton = document.createElement('button');
			favoriteButton.setAttribute('data-testid', "like");
			favoriteButton.setAttribute('tnb-id', "like");
			favoriteButton.setAttribute('role', "button");
			favoriteButton.setAttribute('type', "button");
			favoriteButton.className = this.#classNameProcessor("css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l");
			const favoriteContainer2 = document.createElement('div');
			favoriteContainer2.className = this.#classNameProcessor("css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q");
			Object.assign(favoriteContainer2.style, {
				color: this.#colors.get(favorited ? 'favorited' : 'fontColorDark'),
			});
			const favoriteContainer3 = document.createElement('div');
			favoriteContainer3.className = this.#classNameProcessor("css-175oi2r r-xoduu5");
			const favoriteContainer4 = document.createElement('div');
			favoriteContainer4.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l");
			favoriteContainer3.appendChild(favoriteContainer4);
			const favoriteSvg = createSvgElement(this.#svgPaths[favorited ? "favorited" : "favorite"]).svg;
			favoriteSvg.setAttribute('aria-hidden', "true");
			favoriteSvg.setAttribute('class', this.#classNameProcessor("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"));
			if(favorited)favoriteSvg.style.color = this.#colors.get('favorited');
			favoriteContainer3.appendChild(favoriteSvg);
			favoriteContainer2.appendChild(favoriteContainer3);
			const favoriteCountContainer = document.createElement('div');
			favoriteCountContainer.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1udh08x");
			const favoriteCountElement = document.createElement('span');
			favoriteCountElement.setAttribute('data-testid', "app-text-transition-container");
			favoriteCountElement.setAttribute('tnb-id', "app-text-transition-container");
			Object.assign(favoriteCountElement.style, {
				transitionProperty: "transform",
				transitionDuration: "0.3s",
				transform: "translate3d(0px, 0px, 0px)",
			});
			const favoriteCountElement2 = document.createElement('span');
			favoriteCountElement2.className = this.#classNameProcessor("css-1jxf684 r-1ttztb7 r-qvutc0 r-1tl8opc r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd");
			favoriteCountElement2.textContent = this.data.favorite.count > 0 ? this.data.favorite.count : "";
			this.data.favorite.element = favoriteCountElement2;
			favoriteCountElement.appendChild(favoriteCountElement2);
			favoriteCountContainer.appendChild(favoriteCountElement);
			favoriteContainer2.appendChild(favoriteCountContainer);
			favoriteButton.appendChild(favoriteContainer2);
			favoriteContainer.appendChild(favoriteButton);
			footerContainer4.appendChild(favoriteContainer);
			this.#addChangeColorEventListener(favoriteContainer2, favoriteContainer4, this.#colors.get('favorited'), this.#colors.getWithAlpha('favorited', 0.1), this.#colors.get('fontColorDark'), "");
			addClickButtonEvent(favoriteButton, favoriteSvg, favoriteSvg.querySelector('path'), "favorite");

			const analyticsContainer = document.createElement('div');
			analyticsContainer.setAttribute('tnb-id', "analyticsContainer");
			analyticsContainer.className = this.#classNameProcessor("css-175oi2r r-18u37iz r-1h0z5md r-13awgt0");
			const analyticsLink = document.createElement('a');
			analyticsLink.setAttribute('role', "link");
			analyticsLink.className = this.#classNameProcessor("css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1ny4l3l r-1loqt21");
			analyticsLink.href = `/${this.data.screenName}/status/${this.data.tweetId}/analytics`;
			const analyticsContainer2 = document.createElement('div');
			analyticsContainer2.className = this.#classNameProcessor("css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q");
			Object.assign(analyticsContainer2.style, {
				color: this.#colors.get('fontColorDark'),
			});
			const analyticsContainer3 = document.createElement('div');
			analyticsContainer3.className = this.#classNameProcessor("css-175oi2r r-xoduu5");
			const analyticsContainer4 = document.createElement('div');
			analyticsContainer4.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l");
			analyticsContainer3.appendChild(analyticsContainer4);
			const analyticsSvg = createSvgElement(this.#svgPaths.analytics).svg;
			analyticsSvg.setAttribute('aria-hidden', "true");
			analyticsSvg.setAttribute('class', this.#classNameProcessor("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"));
			analyticsContainer3.appendChild(analyticsSvg);
			analyticsContainer2.appendChild(analyticsContainer3);
			const analyticsCountContainer = document.createElement('div');
			analyticsCountContainer.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1udh08x");
			const analyticsCountElement = document.createElement('span');
			analyticsCountElement.setAttribute('data-testid', "app-text-transition-container");
			analyticsCountElement.setAttribute('tnb-id', "app-text-transition-container");
			Object.assign(analyticsCountElement.style, {
				transitionProperty: "transform",
				transitionDuration: "0.3s",
				transform: "translate3d(0px, 0px, 0px)",
			});
			const analyticsCountElement2 = document.createElement('span');
			analyticsCountElement2.className = this.#classNameProcessor("css-1jxf684 r-1ttztb7 r-qvutc0 r-1tl8opc r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd");
			analyticsCountElement2.textContent = roundHalfUp(analyticsCount,this.#textData.roundingScale,this.#textData.decimalPlaces,this.#textData.units);
			analyticsCountElement.appendChild(analyticsCountElement2);
			analyticsCountContainer.appendChild(analyticsCountElement);
			analyticsContainer2.appendChild(analyticsCountContainer);
			analyticsLink.appendChild(analyticsContainer2);
			analyticsContainer.appendChild(analyticsLink);
			footerContainer4.appendChild(analyticsContainer);
			this.#addChangeColorEventListener(analyticsContainer2, analyticsContainer4, this.#colors.get('twitterBlue'), this.#colors.getWithAlpha('twitterBlue', 0.1), this.#colors.get('fontColorDark'), "");

			const bookmarkContainer = document.createElement('div');
			bookmarkContainer.setAttribute('tnb-id', "bookmarkContainer");
			bookmarkContainer.className = this.#classNameProcessor("css-175oi2r r-18u37iz r-1h0z5md r-1wron08");
			const bookmarkButton = document.createElement('button');
			bookmarkButton.setAttribute('data-testid', "bookmark");
			bookmarkButton.setAttribute('tnb-id', "bookmark");
			bookmarkButton.setAttribute('role', "button");
			bookmarkButton.setAttribute('type', "button");
			bookmarkButton.className = this.#classNameProcessor("css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l");
			const bookmarkContainer2 = document.createElement('div');
			bookmarkContainer2.className = this.#classNameProcessor("css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q");
			Object.assign(bookmarkContainer2.style, {
				color: this.#colors.get(bookmarked ? 'bookmarked' : 'fontColorDark'),
			});
			const bookmarkContainer3 = document.createElement('div');
			bookmarkContainer3.className = this.#classNameProcessor("css-175oi2r r-xoduu5");
			const bookmarkContainer4 = document.createElement('div');
			bookmarkContainer4.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l");
			bookmarkContainer3.appendChild(bookmarkContainer4);
			const bookmarkSvg = createSvgElement(this.#svgPaths.bookmark).svg;
			bookmarkSvg.setAttribute('aria-hidden', "true");
			bookmarkSvg.setAttribute('class', this.#classNameProcessor("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"));
			if(bookmarked)bookmarkSvg.style.color = this.#colors.get('bookmarked');
			bookmarkContainer3.appendChild(bookmarkSvg);
			bookmarkContainer2.appendChild(bookmarkContainer3);
			bookmarkButton.appendChild(bookmarkContainer2);
			bookmarkContainer.appendChild(bookmarkButton);
			footerContainer4.appendChild(bookmarkContainer);
			this.#addChangeColorEventListener(bookmarkContainer2, bookmarkContainer4, this.#colors.get('twitterBlue'), this.#colors.getWithAlpha('twitterBlue', 0.1), this.#colors.get('fontColorDark'), "");
			addClickButtonEvent(bookmarkButton, bookmarkSvg, bookmarkSvg.querySelector('path'), "bookmark");

			const shareContainer = document.createElement('div');
			shareContainer.setAttribute('tnb-id', "shareContainer");
			shareContainer.className = this.#classNameProcessor("css-175oi2r");
			const shareButton = document.createElement('button');
			shareButton.setAttribute('data-testid', "quickShare");
			shareButton.setAttribute('tnb-id', "quickShare");
			shareButton.setAttribute('role', "button");
			shareButton.setAttribute('type', "button");
			shareButton.className = this.#classNameProcessor("css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l");
			const shareContainer2 = document.createElement('div');
			shareContainer2.className = this.#classNameProcessor("css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q");
			Object.assign(shareContainer2.style, {
				color: this.#colors.get('fontColorDark'),
			});
			const shareContainer3 = document.createElement('div');
			shareContainer3.className = this.#classNameProcessor("css-175oi2r r-xoduu5");
			const shareContainer4 = document.createElement('div');
			shareContainer4.className = this.#classNameProcessor("css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l");
			shareContainer3.appendChild(shareContainer4);
			const shareSvg = createSvgElement(this.#svgPaths.share2).svg;
			shareSvg.setAttribute('aria-hidden', "true");
			shareSvg.setAttribute('class', this.#classNameProcessor("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"));
			shareContainer3.appendChild(shareSvg);
			shareContainer2.appendChild(shareContainer3);
			shareButton.appendChild(shareContainer2);
			shareContainer.appendChild(shareButton);
			footerContainer4.appendChild(shareContainer);
			this.#addChangeColorEventListener(shareContainer2, shareContainer4, this.#colors.get('twitterBlue'), this.#colors.getWithAlpha('fontColorDark', 0.1), this.#colors.get('fontColorDark'), "");
			shareContainer.addEventListener('click', ()=>{
				let useDomain = scriptSettings.quickShareTweetLink?.domain || "twitter.com";
				if(useDomain === "other"){
					if(scriptSettings.quickShareTweetLink?.otherDomain){
						useDomain = scriptSettings.quickShareTweetLink.otherDomain;
					}else{
						useDomain = "twitter.com";
					}
				}
				copyToClipboard(`https://${useDomain}/${this.data.screenName}/status/${this.data.tweetId}`);
			});
			footerContainer3.appendChild(footerContainer4);
			footerContainer2.appendChild(footerContainer3);
			footerContainer.appendChild(footerContainer2);
			this.nodes.footer = footerContainer;
			return this;

			function addClickButtonEvent(button, svg, path, action){
				button.addEventListener('click', clickEvent);
				async function clickEvent(){
					if(button.getAttribute("undo") === "true"){
						let result;
						switch(action){
							case "retweet":
									result = await twitterApi.deleteRetweet(this.data.tweetId);
									if(!result)return;
									svg.style.color = this.#colors.get('fontColorDark');
									path.setAttribute('d', this.#svgPaths.retweet);
								break;
							case "favorite":
									result = await twitterApi.unfavoriteTweet(this.data.tweetId);
									if(!result)return;
									svg.style.color = this.#colors.get('fontColorDark');
									path.setAttribute('d', this.#svgPaths.favorite);
								break;
							case "bookmark":
									result = await twitterApi.deleteBookmark(this.data.tweetId);
									if(!result)return;
									svg.style.color = this.#colors.get('fontColorDark');
									path.setAttribute('d', this.#svgPaths.bookmark);
								break;
						}
						button.setAttribute("undo", "false");
						if(action !== "bookmark"){
							this.data.retweet.count--;
							if(this.data.retweet.count === 0){
								this.data[action].textElement.textContent = "";
							}else{
								this.data[action].textElement.textContent = this.data[action].count;
							}
						}
					}else{
						let result;
						switch(action){
							case "retweet":
								result = await twitterApi.retweet(this.data.tweetId);
								if(!result)return;
								svg.style.color = this.#colors.get('retweeted');
								path.setAttribute('d', this.#svgPaths.retweeted);
								break;
							case "favorite":
								result = await twitterApi.favoriteTweet(this.data.tweetId);
								if(!result)return;
								svg.style.color = this.#colors.get('favorited');
								path.setAttribute('d', this.#svgPaths.favorited);
								break;
							case "bookmark":
								result = await twitterApi.bookmark(this.data.tweetId);
								if(!result)return;
								svg.style.color = this.#colors.get('twitterBlue');
								path.setAttribute('d', this.#svgPaths.bookmarked);
								break;
						}
						button.setAttribute("undo", "true");
						if(action !== "bookmark"){
							this.data.retweet.count++;
							this.data[action].textElement.textContent = this.data[action].count;
						}
					}
				}
			}
		}
		// utility
		#addChangeColorEventListener(node, alphaNode, color, alphaColor, originalColor = "", originalAlphaColor = ""){
			node.addEventListener('mouseenter', function(){
				node.style.color = color;
				alphaNode.style.backgroundColor = alphaColor;
			});
			node.addEventListener('mouseleave', resetColor);
			node.addEventListener('touchend', resetColor);
			node.addEventListener('touchcancel', resetColor);
			function resetColor(){
				node.style.color = originalColor;
				alphaNode.style.backgroundColor = originalAlphaColor;
			}
		}
		#createMediaNode(medias, isQuoted = false){
			// mediaContainer
			const screenName = this.data.screenName;
			const tweetId = this.data.tweetId;
			let errorMessageFuncName;
			if(isQuoted){
				errorMessageFuncName = "[setQuoteMedia]";
			}else{
				errorMessageFuncName = "[setMedia]";
			}
			if(!Array.isArray(medias) || medias.length === 0){
				console.error({error: `${errorMessageFuncName} mediasは1つ以上の要素を持つ配列である必要があります`, inputValue: medias});
				return null;
			}
			medias.forEach(o=>{
				if(!(isUrl(o.media) || (o.media instanceof Blob) || o.videoData?.source?.src)){
					console.error({error: `${errorMessageFuncName} mediaはurlかblobである必要があります`, inputValue: o.media});
					return null;
				}
				if(!o.type){
					console.error({error: `${errorMessageFuncName} typeは必須です`, inputValue: o.type});
					return null;
				}
			});
			const mediaContainer = document.createElement('div');
			mediaContainer.setAttribute('tnb-id', "mediaContainer");
			mediaContainer.className = classNameProcessor("css-175oi2r r-9aw3ui r-1s2bzr4");
			const mediaContainer2 = document.createElement('div');
			mediaContainer2.className = classNameProcessor("css-175oi2r r-9aw3ui");
			const mediaContainer3 = document.createElement('div');
			mediaContainer3.className = classNameProcessor("css-175oi2r");
			const mediaContainer4 = document.createElement('div');
			mediaContainer4.className = classNameProcessor("css-175oi2r");
			const mediaContainer5 = document.createElement('div');
			mediaContainer5.className = classNameProcessor("css-175oi2r r-18bvks7 r-1phboty r-rs99b7 r-1867qdf r-1udh08x r-o7ynqc r-6416eg r-1ny4l3l");
			mediaContainer5.setAttribute('tnb-id', "mediaRoot");
			const mediaContainer6 = document.createElement('div');
			if(medias.length === 1){
				mediaContainer6.className = classNameProcessor("css-175oi2r");
				mediaContainer6.setAttribute('tnb-id', "media0");
				mediaContainer6.appendChild(createMediaElement(medias[0], 0));
				mediaContainer4.classList.add("r-k200y", "tnb-r-k200y");
				if(medias[0].type === "video"){
					const [newWidth, newHeight] = calculateMediaSize(medias[0].size.width, medias[0].size.height);
					Object.assign(mediaContainer6.style, {
						width: `${newWidth}px`,
						height: `${newHeight}px`,
					});
				}
			}else{
				mediaContainer6.className = classNameProcessor("css-175oi2r r-1adg3ll r-1udh08x");
				const mediaContainer7 = document.createElement('div');
				mediaContainer7.className = classNameProcessor("r-1adg3ll r-13qz1uu");
				Object.assign(mediaContainer7.style, {
					paddingBottom: "56.25%",
				});
				mediaContainer6.appendChild(mediaContainer7);
				const mediaContainer8 = document.createElement('div');
				mediaContainer8.className = classNameProcessor("r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu");
				if(medias.length === 2){
					const mediaContainer9 = document.createElement('div');
					mediaContainer9.className = classNameProcessor("css-175oi2r r-1pi2tsx r-13qz1uu r-18u37iz");
					const mediaContainer10 = document.createElement('div');
					mediaContainer10.className = classNameProcessor("css-175oi2r r-1iusvr4 r-16y2uox r-bnwqim r-x1x4zq");
					mediaContainer10.setAttribute('tnb-id', "media0");
					mediaContainer10.appendChild(createMediaElement(medias[0], 0));
					mediaContainer9.appendChild(mediaContainer10);
					const mediaContainer11 = document.createElement('div');
					mediaContainer11.className = classNameProcessor("css-175oi2r r-1iusvr4 r-16y2uox r-bnwqim");
					mediaContainer11.setAttribute('tnb-id', "media1");
					mediaContainer11.appendChild(createMediaElement(medias[1], 1));
					mediaContainer9.appendChild(mediaContainer11);
					mediaContainer8.appendChild(mediaContainer9);
				}else if(medias.length === 3){
					const mediaContainer9 = document.createElement('div');
					mediaContainer9.className = classNameProcessor("css-175oi2r r-1pi2tsx r-13qz1uu r-18u37iz");
					const mediaContainer10 = document.createElement('div');
					mediaContainer10.className = classNameProcessor("css-175oi2r r-1iusvr4 r-16y2uox r-bnwqim r-x1x4zq");
					mediaContainer10.setAttribute('tnb-id', "media0");
					mediaContainer10.appendChild(createMediaElement(medias[0], 0));
					mediaContainer9.appendChild(mediaContainer10);
					const mediaContainer11 = document.createElement('div');
					mediaContainer11.className = classNameProcessor("css-175oi2r r-1iusvr4 r-16y2uox r-eqz5dr");
					const mediaContainer12 = document.createElement('div');
					mediaContainer12.className = classNameProcessor("css-175oi2r r-1iusvr4 r-16y2uox r-bnwqim r-zl2h9q");
					mediaContainer12.setAttribute('tnb-id', "media1");
					mediaContainer12.appendChild(createMediaElement(medias[1], 1));
					mediaContainer11.appendChild(mediaContainer12);
					const mediaContainer13 = document.createElement('div');
					mediaContainer13.className = classNameProcessor("css-175oi2r r-1iusvr4 r-16y2uox r-bnwqim");
					mediaContainer13.setAttribute('tnb-id', "media2");
					mediaContainer13.appendChild(createMediaElement(medias[2], 2));
					mediaContainer11.appendChild(mediaContainer13);
					mediaContainer9.appendChild(mediaContainer11);
					mediaContainer8.appendChild(mediaContainer9);
				}else{
					const mediaContainer9 = document.createElement('div');
					mediaContainer9.className = classNameProcessor("css-175oi2r r-1pi2tsx r-13qz1uu r-eqz5dr");
					const mediaContainer10 = document.createElement('div');
					mediaContainer10.className = classNameProcessor("css-175oi2r r-zl2h9q r-1iusvr4 r-16y2uox r-18u37iz");
					const mediaContainer11 = document.createElement('div');
					mediaContainer11.className = classNameProcessor("css-175oi2r r-1iusvr4 r-16y2uox r-bnwqim r-x1x4zq");
					mediaContainer11.setAttribute('tnb-id', "media0");
					mediaContainer11.appendChild(createMediaElement(medias[0], 0));
					mediaContainer10.appendChild(mediaContainer11);
					const mediaContainer12 = document.createElement('div');
					mediaContainer12.className = classNameProcessor("css-175oi2r r-1iusvr4 r-16y2uox r-bnwqim");
					mediaContainer12.setAttribute('tnb-id', "media1");
					mediaContainer12.appendChild(createMediaElement(medias[1], 1));
					mediaContainer10.appendChild(mediaContainer12);
					mediaContainer9.appendChild(mediaContainer10);
					const mediaContainer13 = document.createElement('div');
					mediaContainer13.className = classNameProcessor("css-175oi2r r-1iusvr4 r-16y2uox r-18u37iz");
					const mediaContainer14 = document.createElement('div');
					mediaContainer14.className = classNameProcessor("css-175oi2r r-1iusvr4 r-16y2uox r-bnwqim r-x1x4zq");
					mediaContainer14.setAttribute('tnb-id', "media2");
					mediaContainer14.appendChild(createMediaElement(medias[2], 2));
					mediaContainer13.appendChild(mediaContainer14);
					const mediaContainer15 = document.createElement('div');
					mediaContainer15.className = classNameProcessor("css-175oi2r r-1iusvr4 r-16y2uox r-bnwqim");
					mediaContainer15.setAttribute('tnb-id', "media3");
					mediaContainer15.appendChild(createMediaElement(medias[3], 3));
					mediaContainer13.appendChild(mediaContainer15);
					mediaContainer9.appendChild(mediaContainer13);
					mediaContainer8.appendChild(mediaContainer9);
				}
				mediaContainer6.appendChild(mediaContainer8);
			}
			mediaContainer5.appendChild(mediaContainer6);
			mediaContainer4.appendChild(mediaContainer5);
			mediaContainer3.appendChild(mediaContainer4);
			mediaContainer2.appendChild(mediaContainer3);
			mediaContainer.appendChild(mediaContainer2);
			return mediaContainer;

			function createMediaElement(mediaData, index){
				if(mediaData.type === 'photo'){
					return createPhotoElement(mediaData, index);
				}else if(mediaData.type === 'video'){
					return createVideoElement(mediaData, index);
				}else if(mediaData.type === 'animated_gif'){
					return createAnimatedGifElement(mediaData, index);
				}else{
					console.error({error: `${errorMessageFuncName} typeはphoto, video, animated_gifのいずれかである必要があります`, inputValue: mediaData.type});
					return null;
				}
			}

			function createPhotoElement(mediaData, index){
				const photoContainer = document.createElement('div');
				photoContainer.className = classNameProcessor("css-175oi2r r-16y2uox r-1pi2tsx r-13qz1uu");
				const photoLink = document.createElement('a');
				photoLink.setAttribute('role', "link");
				photoLink.href = `/${screenName}/status/${tweetId}/photo/${index + 1}`;
				photoLink.className = classNameProcessor("css-175oi2r r-1pi2tsx r-1ny4l3l r-1loqt21");
				if(medias.length === 1){
					const [newWidth, newHeight] = calculateMediaSize(mediaData.size.width, mediaData.size.height);
					const photoContainer2 = document.createElement('div');
					photoContainer2.className = classNameProcessor("css-175oi2r r-1adg3ll r-1udh08x");
					Object.assign(photoContainer2.style, {
						height: `${newHeight}px`,
						width: `${newWidth}px`,
					});
					const photoContainer3 = document.createElement('div');
					photoContainer3.className = classNameProcessor("r-1adg3ll r-1udh08x");
					Object.assign(photoContainer3.style, {
						paddingBottom: `${(newHeight / newWidth) * 100}%`,
					});
					photoContainer2.appendChild(photoContainer3);
					const photoContainer4 = document.createElement('div');
					photoContainer4.className = classNameProcessor("r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu");
					photoContainer4.appendChild(createImageElement(mediaData));
					photoContainer2.appendChild(photoContainer4);
					photoLink.appendChild(photoContainer2);
				}else{
					const photoContainer2 = document.createElement('div');
					photoContainer2.className = classNameProcessor("css-175oi2r r-1p0dtai r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af");
					photoContainer2.appendChild(createImageElement(mediaData));
					photoLink.appendChild(photoContainer2);
				}
				photoContainer.appendChild(photoLink);
				return photoContainer;
				//
				function createImageElement(mediaData){
					const imageContainer1 = document.createElement('div');
					imageContainer1.className = classNameProcessor("css-175oi2r r-1mlwlqe r-1udh08x r-417010 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af");
					imageContainer1.setAttribute('data-testid', "tweetPhoto");
					imageContainer1.setAttribute('tnb-id', "tweetPhoto");
					imageContainer1.setAttribute('aria-label', "画像");
					Object.assign(imageContainer1.style, {
						margin: "0px",
					});
					const imageDisplayContainer = document.createElement('div');
					imageDisplayContainer.className = classNameProcessor("css-175oi2r r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv");
					const imageElement = document.createElement('img');
					imageElement.setAttribute('draggable', "true");
					imageElement.className = classNameProcessor("css-9pa8cd");
					if(mediaData.media instanceof Blob){
						const url = URL.createObjectURL(mediaData.media);
						Object.assign(imageDisplayContainer.style, {
							backgroundImage: `url(${url})`,
						});
						imageElement.src = url;
						imageElement.onload = function(){
							URL.revokeObjectURL(url);
						};
					}else{
						Object.assign(imageDisplayContainer.style, {
							backgroundImage: `url(${mediaData.media})`,
						});
						imageElement.src = mediaData.media;
					}
					imageElement.alt = "";
					imageContainer1.appendChild(imageDisplayContainer);
					imageContainer1.appendChild(imageElement);
					return imageContainer1;
				}
			}
			function createVideoElement(mediaData){
				const [newWidth, newHeight] = calculateMediaSize(mediaData.size.width, mediaData.size.height);
				const videoContainer = document.createElement('div');
				videoContainer.className = classNameProcessor("css-175oi2r r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af");
				videoContainer.setAttribute('data-testid', "videoPlayer");
				videoContainer.setAttribute('tnb-id', "videoPlayer");
				const videoContainer2 = document.createElement('div');
				videoContainer2.className = classNameProcessor("css-175oi2r r-1adg3ll r-1udh08x r-bnwqim r-1pi2tsx r-13qz1uu");
				const videoContainer3 = document.createElement('div');
				videoContainer3.className = classNameProcessor("r-1adg3ll r-13qz1uu");
				if(medias.length === 1){
					Object.assign(videoContainer2.style, {
						height: `${newHeight}px`,
						width: `${newWidth}px`,
					});
					Object.assign(videoContainer3.style, {
						paddingBottom: `${(newHeight / newWidth) * 100}%`,
					});
				}
				videoContainer2.appendChild(videoContainer3);
				const videoContainer4 = document.createElement('div');
				videoContainer4.className = classNameProcessor("r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu");
				const videoContainer5 = document.createElement('div');
				videoContainer5.setAttribute('data-testid', "videoComponent");
				videoContainer5.setAttribute('tnb-id', "videoComponent");
				Object.assign(videoContainer5.style, {
					height: "100%",
					width: "100%",
					position: "relative",
					transform: "translateZ(0px)",
				});
				const videoContainer6 = document.createElement('div');
				Object.assign(videoContainer6.style, {
					position: "relative",
					width: "100%",
					height: "100%",
					backgroundColor: "transparent",
					overflow: "hidden",
				});
				const videoElement = document.createElement('video');
				videoElement.setAttribute('preload', "none");
				videoElement.setAttribute('controls', "");
				Object.assign(videoElement.style, {
					width: "100%",
					height: "100%",
					backgroundColor: "black",
					position: "absolute",
					top: "0%",
					left: "0%",
				});
				if(mediaData.videoData){
					videoElement.poster = mediaData.videoData.thumbnail;
					const sourceElement = document.createElement('source');
					sourceElement.src = mediaData.videoData.source.src;
					sourceElement.type = getMimeType(mediaData.videoData.source.src);
					videoElement.appendChild(sourceElement);
					mediaData.videoData.otherSource?.forEach((source)=>{
						const sourceElement = document.createElement('source');
						sourceElement.src = source.src;
						sourceElement.type = getMimeType(source.src);
						videoElement.appendChild(sourceElement);
					});
				}else{
					const sourceElement = document.createElement('source');
					sourceElement.src = mediaData.media;
					sourceElement.type = getMimeType(mediaData.media);
					videoElement.appendChild(sourceElement);
				}
				videoContainer6.appendChild(videoElement);
				videoContainer5.appendChild(videoContainer6);
				videoContainer4.appendChild(videoContainer5);
				videoContainer2.appendChild(videoContainer4);
				videoContainer.appendChild(videoContainer2);
				return videoContainer;
				//
			}
			function createAnimatedGifElement(mediaData){
				const [newWidth, newHeight] = calculateMediaSize(mediaData.size.width, mediaData.size.height);
				const gifContainer = document.createElement('div');
				gifContainer.className = classNameProcessor("css-175oi2r r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af");
				gifContainer.setAttribute('data-testid', "videoPlayer");
				gifContainer.setAttribute('tnb-id', "videoPlayer");
				const gifContainer2 = document.createElement('div');
				gifContainer2.className = classNameProcessor("css-175oi2r r-1adg3ll r-1udh08x r-bnwqim r-1pi2tsx r-13qz1uu");
				const gifContainer3 = document.createElement('div');
				gifContainer3.className = classNameProcessor("r-1adg3ll r-13qz1uu");
				if(medias.length === 1){
					Object.assign(gifContainer2.style, {
						height: `${newHeight}px`,
						width: `${newWidth}px`,
					});
					Object.assign(gifContainer3.style, {
						paddingBottom: `${(newHeight / newWidth) * 100}%`,
					});
				}
				gifContainer2.appendChild(gifContainer3);
				const gifContainer4 = document.createElement('div');
				gifContainer4.className = classNameProcessor("r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu");
				const gifContainer5 = document.createElement('div');
				gifContainer5.setAttribute('tnb-id', "videoComponent");
				Object.assign(gifContainer5.style, {
					height: "100%",
					width: "100%",
					position: "relative",
					transform: "translateZ(0px)",
				});
				const gifContainer6 = document.createElement('div');
				gifContainer6.setAttribute('data-testid', "videoComponent");
				gifContainer6.setAttribute('tnb-id', "videoComponent");
				Object.assign(gifContainer6.style, {
					position: "relative",
					width: "100%",
					height: "100%",
					backgroundColor: "transparent",
					overflow: "hidden",
				});
				const gifElement = document.createElement('video');
				gifElement.setAttribute('preload', "auto");
				gifElement.poster = mediaData.videoData.thumbnail;
				gifElement.setAttribute('loop', "");
				gifElement.setAttribute('autoplay', "");
				gifElement.setAttribute('muted', "");
				Object.assign(gifElement.style, {
					width: "100%",
					height: "100%",
					backgroundColor: "black",
					position: "absolute",
					top: "0%",
					left: "0%",
				});
				gifElement.addEventListener('click', function(){
					if(gifElement.paused){
						gifElement.play();
					}else{
						gifElement.pause();
					}
				});
				if(mediaData.videoData){
					const sourceElement = document.createElement('source');
					sourceElement.src = mediaData.videoData.source.src;
					sourceElement.type = getMimeType(mediaData.videoData.source.src);
					gifElement.appendChild(sourceElement);
					mediaData.videoData.otherSource?.forEach((source)=>{
						const sourceElement = document.createElement('source');
						sourceElement.src = source.src;
						sourceElement.type = getMimeType(source.src);
						gifElement.appendChild(sourceElement);
					});
				}else{
					const sourceElement = document.createElement('source');
					sourceElement.src = mediaData.media;
					sourceElement.type = getMimeType(mediaData.media);
					gifElement.appendChild(sourceElement);
				}
				gifContainer6.appendChild(gifElement);
				gifContainer5.appendChild(gifContainer6);
				gifContainer4.appendChild(gifContainer5);
				gifContainer2.appendChild(gifContainer4);
				gifContainer.appendChild(gifContainer2);
				return gifContainer;
			}
			function calculateMediaSize(width, height){
				const maxSquareSize = 516;
				const maxVerticalSize = 510;
				const maxHorizontalSize = 516;
				const maxHorizontalAspectRatio = 5/1;
				const maxVerticalAspectRatio = 3/4;
				let newWidth, newHeight;
				if(width === height){
					if(width > maxSquareSize){
						newWidth = maxSquareSize;
						newHeight = maxSquareSize;
					}
				}else if(width > height){
					// 横長の場合
					const aspectRatio = width / height;
					if(aspectRatio > maxHorizontalAspectRatio){
						newWidth = maxHorizontalSize;
						newHeight = maxHorizontalSize / maxHorizontalAspectRatio;
					}else{
						if(width > maxHorizontalSize){
							newWidth = maxHorizontalSize;
							newHeight = maxHorizontalSize / aspectRatio;
						}else{
							newWidth = width;
							newHeight = height;
						}
					}
				}else{
					// 縦長の場合
					const aspectRatio = width / height;
					if(aspectRatio < maxVerticalAspectRatio){
						newHeight = maxVerticalSize;
						newWidth = maxVerticalSize * maxVerticalAspectRatio;
					}else{
						if(height > maxVerticalSize){
							newHeight = maxVerticalSize;
							newWidth = maxVerticalSize * aspectRatio;
						}else{
							newWidth = width;
							newHeight = height;
						}
					}
				}
				return [newWidth, newHeight];
			}
			function getMimeType(url){
				const cleanUrl = url.split('?')[0];
				const extension = cleanUrl.split('.').pop().toLowerCase();
				switch(extension){
					case 'mp4':
						return 'video/mp4';
					case 'webm':
						return 'video/webm';
					case 'ogv':
						return 'video/ogg';
					case 'mkv':
						return 'video/x-matroska';
					case 'm3u8':
						return 'application/x-mpegURL';
					default:
						return '';
				}
			}
			function classNameProcessor(className){
				const tnbClassName = className.split(" ").map((n) => `tnb-${n}`).join(" ");
				return `${className} ${tnbClassName}`;
			}
		}
		#timeProcessor(time){
			const timeZoneObject = Intl.DateTimeFormat().resolvedOptions();
			const locale = getLocale(scriptSettings.makeTwitterLittleUseful.lang);
			const date = new Date(time);
			const now = new Date();
			const diff = now - date;
			/*
			const options = {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				timeZone: timeZoneObject.timeZone
			};
			const formatter = new Intl.DateTimeFormat(locale, options);
			const formattedDate = formatter.format(date);
			const [month, day, year] = formattedDate.split('/');
			const [hour, minute, second] = date.toLocaleTimeString(locale, { hour12: false }).split(':');
			*/
			const diffInSeconds = Math.floor(diff / 1000);
			const diffInMinutes = Math.floor(diffInSeconds / 60);
			const diffInHours = Math.floor(diffInMinutes / 60);
			const diffInDays = Math.floor(diffInHours / 24);
			const diffInYears = Math.floor(diffInDays / 365);

			let timeDifferenceMessage;
			let addBeforeFlag = true;
			if(diffInYears >= 1){
				addBeforeFlag = false;
				timeDifferenceMessage = `${date.toLocaleString(locale, {timeZone: timeZoneObject.timeZone})}`;
			}else if(diffInDays >= 1){
				const monthDayFormatter = new Intl.DateTimeFormat(locale, {month: 'long', day: 'numeric', timeZone: timeZoneObject.timeZone});
				timeDifferenceMessage = monthDayFormatter.format(date);
			}else if(diffInHours >= 1){
				timeDifferenceMessage = `${diffInHours}${this.#textData.hour}`;
			}else if(diffInMinutes >= 1){
				timeDifferenceMessage = `${diffInMinutes}${this.#textData.minute}`;
			}else{
				timeDifferenceMessage = `${diffInSeconds}${this.#textData.second}`;
			}
			return {timeText: timeDifferenceMessage, ISO: date.toISOString(), flag: addBeforeFlag};
		}
		#classNameProcessor(className){
			const tnbClassName = className.split(" ").map((n) => `tnb-${n}`).join(" ");
			return `${className} ${tnbClassName}`;
		}
		#appendCSS(){
			if(document.getElementById("tnbCSS"))return;
			const style = document.createElement('style');
			style.id = "tnbCSS";
			style.textContent = `
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
			document.head.appendChild(style);
		}
	}
export { TweetNodeBuilder };
