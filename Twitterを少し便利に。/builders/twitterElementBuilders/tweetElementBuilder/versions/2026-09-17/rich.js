/* 6687/63857: legacy card変換、153256: poll判定、983808/303084: メディアprops。
 * DOM境界・native videoはアダプター。原版のReact/player全体の移植ではない。
 */
(function(root){
	'use strict';
	const imagePollName = '1906814671912599552:poll_choice_images';
	// 893059/114197/896192/54756のSVG factoryを隔離テスト環境で木構造へ変換。
	const authorIcons = {"verified":{"tag":"svg","props":{"aria-hidden":true,"style":[{},null],"viewBox":"0 0 22 22","children":{"tag":"g","props":{"children":{"tag":"path","props":{"d":"M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"}}}}}},"business":{"tag":"svg","props":{"aria-hidden":true,"style":[{},null],"viewBox":"0 0 22 22","children":{"tag":"g","props":{"children":[{"tag":"linearGradient","props":{"gradientUnits":"userSpaceOnUse","id":"TEB_BADGE_ID-a","x1":"4.411","x2":"18.083","y1":"2.495","y2":"21.508","children":[{"tag":"stop","props":{"offset":"0","stopColor":"#f4e72a"}},{"tag":"stop","props":{"offset":".539","stopColor":"#cd8105"}},{"tag":"stop","props":{"offset":".68","stopColor":"#cb7b00"}},{"tag":"stop","props":{"offset":"1","stopColor":"#f4ec26"}},{"tag":"stop","props":{"offset":"1","stopColor":"#f4e72a"}}]}},{"tag":"linearGradient","props":{"gradientUnits":"userSpaceOnUse","id":"TEB_BADGE_ID-b","x1":"5.355","x2":"16.361","y1":"3.395","y2":"19.133","children":[{"tag":"stop","props":{"offset":"0","stopColor":"#f9e87f"}},{"tag":"stop","props":{"offset":".406","stopColor":"#e2b719"}},{"tag":"stop","props":{"offset":".989","stopColor":"#e2b719"}}]}},{"tag":"g","props":{"clipRule":"evenodd","fillRule":"evenodd","children":[{"tag":"path","props":{"d":"M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z","fill":"url(#TEB_BADGE_ID-a)"}},{"tag":"path","props":{"d":"M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z","fill":"url(#TEB_BADGE_ID-b)"}},{"tag":"path","props":{"d":"M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z","fill":"#d18800"}}]}}]}}}},"government":{"tag":"svg","props":{"aria-hidden":true,"style":[{},null],"viewBox":"0 0 22 22","children":{"tag":"g","props":{"children":{"tag":"path","props":{"clipRule":"evenodd","d":"M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z","fill":"#829aab","fillRule":"evenodd"}}}}}},"protected":{"tag":"svg","props":{"aria-hidden":true,"style":[{},null],"viewBox":"0 0 24 24","children":{"tag":"g","props":{"children":{"tag":"path","props":{"clipRule":"evenodd","d":"M12 1.5c2.761 0 5 2.239 5 5v.745c.22.06.431.138.638.235 1.045.495 1.887 1.337 2.381 2.382.267.563.378 1.165.43 1.849.052.673.051 1.505.051 2.539 0 1.034 0 1.866-.05 2.54-.053.683-.164 1.285-.43 1.848-.495 1.045-1.337 1.887-2.382 2.381-.563.267-1.165.378-1.849.43-.673.052-1.505.051-2.539.051h-2.5c-1.034 0-1.866 0-2.54-.05-.683-.053-1.285-.164-1.848-.43-1.045-.495-1.887-1.337-2.382-2.382-.266-.563-.377-1.165-.43-1.849-.05-.673-.05-1.505-.05-2.539 0-1.034 0-1.866.05-2.54.053-.683.164-1.285.43-1.848.495-1.045 1.337-1.887 2.382-2.382.207-.097.419-.174.638-.235V6.5c0-2.761 2.239-5 5-5zM9.5 15h5v-2h-5v2zM12 3.5c-1.657 0-3 1.343-3 3v.515C9.508 7 10.088 7 10.75 7h2.5l1.405.006c.119.002.234.006.345.009V6.5c0-1.657-1.343-3-3-3z","fillRule":"evenodd"}}}}}}};
	// 797572 / 684246。2026-09-25の配信icons chunkから保存。
	authorIcons.subscriber = {tag:'svg',props:{'aria-hidden':true,viewBox:'0 0 24 24',children:{tag:'g',props:{children:{tag:'path',props:{d:'M16 6c0 2.21-1.79 4-4 4S8 8.21 8 6s1.79-4 4-4 4 1.79 4 4zm-.76 8.57l-3.95.58 2.86 2.78-.68 3.92L17 20l3.53 1.85-.68-3.92 2.86-2.78-3.95-.58L17 11l-1.76 3.57zm-.45-3.09c-.89-.32-1.86-.48-2.89-.48-2.35 0-4.37.85-5.86 2.44-1.48 1.57-2.36 3.8-2.63 6.46l-.11 1.09h8.58l.52-2.49-4.05-4.3 5.59-.99.85-1.73z'}}}}}};
	authorIcons.translator = {tag:'svg',props:{'aria-hidden':true,viewBox:'0 0 24 24',children:{tag:'g',props:{children:{tag:'path',props:{d:'M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z'}}}}}};
	function verifiedDisplayType(user){
		// 22229:getVerifiedDisplayType。blueフラグよりverified_typeが優先。
		if(user.verified_type === 'Business')return 'business';
		if(user.verified_type === 'Government')return 'government';
		return user.verified ? 'verified' : user.is_blue_verified ? 'blue' : 'none';
	}
	// 864808 → 260845 → 679670。ラベルのRichTextをコードポイントindexで分割する。
	function labelTextFragments(value){
		const content = String(value?.text || ''), points = Array.from(content), entities = Array.isArray(value?.entities) ? value.entities : [];
		const fragments = [], sorted = entities.map(item => ({...item, fromIndex:item.fromIndex ?? item.from_index, toIndex:item.toIndex ?? item.to_index})).filter(item => Number.isInteger(item.fromIndex) && Number.isInteger(item.toIndex) && item.fromIndex >= 0 && item.toIndex > item.fromIndex && item.toIndex <= points.length).sort((a,b) => a.fromIndex-b.fromIndex);
		let cursor = 0;
		const add = (from,to,item) => {if(to <= from)return;const ref = item?.ref || {}, kind = ['cashtag','hashtag','mention','twitterList','url','urlWithDisplayUrl','user'].find(key => ref[key] != null) || ({TimelineRichTextCashtag:'cashtag',TimelineRichTextHashtag:'hashtag',TimelineRichTextMention:'mention',TimelineRichTextList:'twitterList',TimelineUrl:'url',TimelineRichTextUser:'user'})[ref.type || ref.__typename];fragments.push({text:points.slice(from,to).join(''),kind,ref:kind ? ref[kind] || ref : null,strong:item?.format === 'Strong'});};
		for(const item of sorted){if(item.fromIndex < cursor)continue;add(cursor,item.fromIndex);add(item.fromIndex,item.toIndex,item);cursor=item.toIndex;}
		add(cursor,points.length);
		return fragments;
	}
	function labelTextHref(fragment){
		const ref = fragment.ref || {};
		let url;
		switch(fragment.kind){
			case 'cashtag': url = `https://x.com/search?q=${encodeURIComponent(`$${ref.text || fragment.text.replace(/^\$/, '')}`)}&src=cashtag_click`; break;
			case 'hashtag': url = `https://x.com/search?q=${encodeURIComponent(`#${ref.text || fragment.text.replace(/^#/, '')}`)}&src=hashtag_click`; break;
			case 'mention': url = `https://x.com/${encodeURIComponent(ref.screenName || ref.screen_name || fragment.text.replace(/^@/, ''))}`; break;
			case 'twitterList': if(ref.id)url = `https://x.com/i/lists/${encodeURIComponent(ref.id)}`; break;
			case 'url': case 'urlWithDisplayUrl': url = ref.url || ref.expanded_url; break;
			default: return null;
		}
		try{const parsed = new URL(url);return ['http:','https:'].includes(parsed.protocol) ? parsed.href : null;}catch{return null;}
	}
	const labelTextListeners = new WeakSet();
	function renderLabelText(target, label, doc){
		const rich = label?.longDescription;
		target.replaceChildren();
		if(!rich){target.textContent = label?.description || '';target.removeAttribute('dir');target.style.removeProperty('text-align');return;}
		target.dir = rich.rtl ? 'rtl' : 'ltr';
		if(rich.alignment === 'Center')target.style.textAlign = 'center'; else target.style.removeProperty('text-align');
		for(const fragment of labelTextFragments(rich)){
			const piece = doc.createElement('span');piece.textContent = fragment.text;
			if(fragment.strong || fragment.kind === 'user' || fragment.kind === 'twitterList')piece.style.fontWeight = '700';
			const href = labelTextHref(fragment);
			if(href){piece.dataset.tebLabelHref = href;piece.setAttribute('role','link');piece.tabIndex = 0;piece.style.cursor = 'pointer';}
			if(['cashtag','hashtag','mention','url','urlWithDisplayUrl'].includes(fragment.kind))piece.style.color = 'var(--teb-link, rgb(29, 155, 240))';
			target.append(piece);
		}
		if(!labelTextListeners.has(target)){
			const navigate = event => {
				const piece = event.target.closest('[data-teb-label-href]');
				if(!piece || !target.contains(piece) || event.type === 'keydown' && !['Enter',' '].includes(event.key))return;
				if(event.type === 'click' && event.button !== 0)return;
				event.preventDefault();event.stopPropagation();
				piece.dispatchEvent(new doc.defaultView.CustomEvent('teb:navigate',{bubbles:true,cancelable:true,detail:{element:piece,kind:'entity',href:piece.dataset.tebLabelHref,originalEvent:event}}));
			};
			target.addEventListener('click',navigate);target.addEventListener('keydown',navigate);labelTextListeners.add(target);
		}
	}
	const actionClasses = "css-g5y9jx r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l";
	const actionSvgClasses = "r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi";
	// 実DOMから保存したSVG path。upstream/.../action-dom.jsonと対応。
	const actionIcons = {"reply":["M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"],"retweet":["M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"],"like":["M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"],"analytics":["M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"],"bookmark":["M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"],"share":["M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"]};
	function bindings(card){
		const data = card?.binding_values;
		return Array.isArray(data) ? Object.fromEntries(data.map(item => [item.key, item.value])) : data || {};
	}
	function value(data, type, keys){
		// 63857:d。false/空文字はundefinedになる点も原版と同じ。
		return (Array.isArray(keys) ? keys : [keys]).map(key => data[key]?.[type]).find(Boolean);
	}
	function isPoll(name = ''){
		if(name.includes(':')){
			const parts = name.split(':');
			return parts.length === 2 && parts[1].startsWith('poll');
		}
		return name.startsWith('poll');
	}
	function convertCard(raw, options = {}){
		if(!raw)return null;
		const card = raw.legacy || raw;
		const data = bindings(card);
		const string = keys => value(data, 'string_value', keys);
		const image = keys => value(data, 'image_value', keys);
		const type = card.name;
		const id = card.url || raw.rest_id;
		const required = keys => keys.every(key => !!data[key]);
		if(type === imagePollName || /^poll[234]choice_(text_only|image|video)$/.test(type || '')){
			if(type === imagePollName && options.imagePollEnabled === false)return null;
			if(!required(['choice1_label', 'choice2_label', 'end_datetime_utc', 'counts_are_final', 'api', 'card_url']))return null;
			const count = type === imagePollName ? (string('choice_count') ? parseInt(string('choice_count'), 10) : 4) : 4;
			// 不正入力による巨大allocationの防止。原版にないアダプター境界。
			if(!Number.isInteger(count) || count < 0 || count > 100)throw new RangeError('Invalid poll choice_count');
			const choices = Array.from({length: count}, (_, index) => index + 1).map(index => {
				const cta = string(`choice${index}_label`);
				if(!cta)return null;
				const choice = {index, cta, count: parseInt(string(`choice${index}_count`), 10) || 0, destination: 'destination_default'};
				if(type === imagePollName){
					const picture = image([`choice${index}_image_original`, `choice${index}_image_large`, `choice${index}_image`]);
					if(picture)Object.assign(choice, {image: picture, imageDestination: `destination_choice${index}_image`, imageEntityKey: `image_entity_choice${index}`});
					const color = value(data, 'image_color_value', `choice${index}_image_color`);
					if(color)choice.imageColor = color;
				}
				return choice;
			}).filter(Boolean);
			const selected = string('selected_choice');
			return {id, type: type === imagePollName ? 'image_poll' : 'poll', name: type, choices,
				isFinal: value(data, 'boolean_value', 'counts_are_final'), endDatetimeUtc: string('end_datetime_utc'),
				...(selected && (type !== imagePollName || !Number.isNaN(parseInt(selected, 10))) ? {selectedChoice: parseInt(selected, 10)} : {}),
				totalVotes: choices.reduce((total, choice) => total + choice.count, 0),
				image: image('image_original'), stream: string('player_stream_url'), playerImage: image('player_image_original'),
				playerHlsUrl: string('player_hls_url'), playerContentId: string('player_content_id'),
				playerDurationMs: Number.isFinite(Number(string('content_duration_seconds'))) ? Number(string('content_duration_seconds')) * 1000 : undefined,
				playerAspectRatio: Number(string('player_width')) / Number(string('player_height')),
			};
		}
		if(['summary', 'summary_large_image'].includes(type)){
			if(!required(['card_url', 'title']))return null;
			const picture = image(type === 'summary' ? 'thumbnail_image_original' : 'summary_photo_image_original');
			return {id, type, title: string('title'), description: string('description'), image: picture,
				url: string('card_url'), domain: string(['domain', 'vanity_url']), vanity: string(['vanity_url', 'card_url']),
				size: type === 'summary_large_image' && picture ? 'large' : 'small', aspectRatio: type === 'summary_large_image' && picture ? 1.91 : 1};
		}
		if(['app','direct_store_link_app'].includes(type)){
			if(!required(['card_url','title']))return null;
			const rating = string('app_star_rating'), count = string('app_num_ratings');
			return {id,type,title:string('title'),description:string('description'),image:image('thumbnail_original'),url:string('card_url'),
				size:'small',aspectRatio:1,...(rating && count ? {rating,count} : {})};
		}
		if(type === 'player'){
			if(!required(['card_url', 'player_url', 'player_height', 'player_width', 'title']))return null;
			// 6687のstaticコンポーネントのみ。iframeへの状態遷移は未移植。
			return {id, type, title: string('title'), description: string('description'), image: image('player_image_original'),
				url: string('card_url'), vanity: string(['vanity_url', 'card_url']), playerUrl: string('player_url'), size: 'small', aspectRatio: 1};
		}
		return null;
	}
	// 153256:tK。viewer/tweet IDを種にした決定的shuffle。
	function pollChoiceOrder(choices, viewerId, tweetId){
		if(!viewerId || !tweetId)return choices.slice();
		function hash(value){
			let result = 9;
			for(let i = 0; i < value.length;)result = Math.imul(result ^ value.charCodeAt(i++), 0x17179149);
			return result ^ result >>> 9;
		}
		const viewer = hash(String(viewerId)), tweet = hash(String(tweetId));
		let seed = (viewer ^ tweet) + (viewer + tweet) | 0;
		function random(){
			let value = seed += 0x6d2b79f5;
			value = Math.imul(value ^ value >>> 15, 1 | value);
			return ((value ^= value + Math.imul(value ^ value >>> 7, 61 | value)) ^ value >>> 14) >>> 0;
		}
		const result = choices.slice();
		for(let i = result.length - 1; i > 0; i--){
			const j = Math.floor(random() / 0x100000000 * (i + 1));
			[result[i], result[j]] = [result[j], result[i]];
		}
		return result;
	}
	// 171594:getTimeLeftLabelの単位選択。負数/不正日時は表示境界で補正する。
	function pollTimeLeft(end, now = Date.now()){
		const seconds = Math.floor((new Date(end).getTime() - now) / 1000);
		if(!Number.isFinite(seconds))return null;
		if(seconds >= 86400)return {unit: 'day', value: Math.floor(seconds / 86400)};
		if(seconds >= 3600)return {unit: 'hour', value: Math.floor(seconds / 3600)};
		return {unit: 'minute', value: Math.max(0, Math.floor(seconds / 60))};
	}
	function pollResults(poll, isAuthor = false, sortByVoteCount = false){
		const maximum = Math.max(...poll.choices.map(choice => choice.count));
		const choices = poll.type === 'image_poll' && sortByVoteCount ? [...poll.choices].sort((a, b) => b.count - a.count || a.index - b.index) : poll.choices;
		return {showResults: !!(poll.selectedChoice || poll.isFinal || isAuthor), choices: choices.map(choice => {
			const percentage = Math.round(choice.count / poll.totalVotes * 1000) / 10 || 0;
			return {...choice, percentage, isSelected: poll.selectedChoice === choice.index, isWinner: !!poll.isFinal && choice.count === maximum,
				barWidth: choice.count === 0 ? (poll.type === 'image_poll' ? '0%' : '7px') : `${percentage}%`};
		})};
	}
	function originalImage(media){
		return media.original_info ? {url: media.media_url_https, width: media.original_info.width, height: media.original_info.height} : undefined;
	}
	function videoProps(media){
		const info = media.video_info || {};
		const [width, height] = info.aspect_ratio || [];
		const views = media.mediaStats?.viewCount && parseInt(media.mediaStats.viewCount, 10);
		return {aspectRatio: width && height ? Math.max(1, width / height) : 1,
			durationMs: info.duration_millis, poster: originalImage(media), videoType: media.type,
			viewCount: views && Number.isFinite(views) && views >= 0 ? views : undefined,
			source: {contentId: media.id_str, variants: info.variants || [], downloadLink: media.allow_download_status?.allow_download ? info.variants?.reduce((best, variant) => variant.bitrate && variant.content_type === 'video/mp4' && (!best || best.bitrate && best.bitrate < variant.bitrate) ? variant : best, undefined)?.url : undefined}};
	}
	// 938845: features.all.tagsのuserだけを全メディアから集め、user_idの先勝ちで重複除去。
	function mergeTaggedUsers(media = []){
		const seen = new Set();
		return media.flatMap(item => item.features?.all?.tags || []).filter(tag => {
			if(tag?.type !== 'user' || tag.user_id == null)return false;
			const id = String(tag.user_id);
			if(seen.has(id))return false;
			seen.add(id); return true;
		});
	}
	// 274488:N,y,b,M。高さはcontainer幅の比率＋gap補正px。
	function carouselLayout(media, compact = false){
		const ratios = media.map(item => {
			const ratio = item.type === 'photo' ? (item.height > 0 ? item.width / item.height : undefined) : (item.poster?.width > 0 && item.poster?.height > 0 ? item.poster.width / item.poster.height : item.aspectRatio);
			return ratio != null && Number.isFinite(ratio) && ratio > 0 ? ratio : null;
		});
		const smaller = (a, b) => a.ratio <= b.ratio ? a : b;
		const sum = items => items.reduce((total, value) => total + value, 0);
		const width = (height, ratio) => ratio == null ? height : Math.min(height * ratio, .8);
		function fitAll(){
			if(ratios.length < 2 || ratios.some(ratio => ratio == null))return null;
			let remaining = ratios, capped = 0;
			for(let index = 0; index < ratios.length; index++){
				const total = sum(remaining);
				if(total <= 0)break;
				const height = (1 - .8 * capped) / total;
				if(height <= 0)break;
				const next = remaining.filter(ratio => height * ratio <= .8);
				if(next.length === remaining.length)return {ratio: height, offset: -4 * (ratios.length - 1) / total};
				capped += remaining.length - next.length;
				remaining = next;
			}
			return null;
		}
		function secondVisibility(height){
			const first = width(height, ratios[0]), second = width(height, ratios[1]);
			return second <= 0 ? 0 : Math.min(Math.max(1 - first, 0), second) / second;
		}
		function peekHeight(){
			const first = ratios[0] ?? 1, second = ratios[1] ?? 1;
			const knownFirst = ratios[0] != null, knownSecond = ratios[1] != null;
			const candidates = [];
			function add(numerator, denominator){
				if(denominator > 0 && numerator / denominator > 0)candidates.push({ratio: numerator / denominator, offset: -4 / denominator});
			}
			const total = first + .6699999999999999 * second;
			const height = total > 0 ? 1 / total : 0;
			if(height > 0 && (!knownFirst || height * first <= .8) && (!knownSecond || height * second <= .8))add(1, total);
			if(knownFirst){
				const denominator = .6699999999999999 * second;
				const h = denominator > 0 ? .19999999999999996 / denominator : 0;
				if(h > 0 && h * first >= .8 && (!knownSecond || h * second <= .8))add(.19999999999999996, denominator);
			}
			if(knownSecond){
				const h = first > 0 ? .4640000000000001 / first : 0;
				if(h > 0 && h * second >= .8 && (!knownFirst || h * first <= .8))add(.4640000000000001, first);
			}
			return candidates.reduce((best, item) => best == null ? item : smaller(best, item), null);
		}
		const maximum = {ratio: compact ? .66 : 1.24446, offset: 0};
		const minimum = smaller({ratio: .68 * (compact ? .85 : 1), offset: 0}, maximum);
		const fitted = fitAll();
		let height = fitted == null || fitted.ratio < minimum.ratio ? minimum : smaller(fitted, maximum);
		if(ratios.length === 2){
			if(fitted != null && fitted.ratio < height.ratio && secondVisibility(height.ratio) >= .33)height = fitted;
		}else if(ratios.length > 2 && 1 - secondVisibility(height.ratio) < .33){
			const peek = peekHeight();
			if(peek){
				let next = smaller(peek, maximum);
				const known = ratios.slice(0, 2).filter(ratio => ratio != null && ratio > 0);
				if(known.length){
					const cap = {ratio: Math.min(...known.map(ratio => .8 / ratio)), offset: 0};
					next = smaller(next, cap.ratio >= height.ratio ? cap : height);
				}
				if(next.ratio > height.ratio)height = next;
			}
		}
		const itemAspectRatios = ratios.map(ratio => width(height.ratio, ratio) / height.ratio);
		return {heightRatio: height.ratio, heightOffset: height.offset, itemAspectRatios, overflowsWidth: height.ratio * sum(itemAspectRatios) > 1 + 1e-6};
	}
	// 180577 / 616377: 表示は背景div、imgは代替テキスト・画像としての意味を担当。
	// Reactのeffect/ref境界のみDOMへ置換。URL variantの選択はこの層の責務ではない。
	function createImage({doc, node, safeUrl}, picture, alt = ''){
		const element = node('div', 'css-g5y9jx r-1mlwlqe r-1udh08x r-417010 r-13qz1uu');
		element.dataset.tebImage = 'true';
		const background = node('div', 'css-g5y9jx r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv');
		background.dataset.tebPart = 'imageBackground';
		const img = node('img', 'css-9pa8cd');
		img.draggable = false;
		element.append(background, img);
		let loader, generation = 0, current = null, disposed = false;
		function cancel(){
			generation++;
			if(loader){ loader.onload = null; loader.onerror = null; loader = null; }
		}
		function setSource(value, label = ''){
			if(disposed)return;
			img.alt = label;
			element.setAttribute('aria-label', label);
			const src = safeUrl(value?.url || value);
			if(src === current)return;
			cancel();
			current = src;
			background.style.backgroundImage = src ? `url(${JSON.stringify(src)})` : '';
			if(src)img.src = src;
			else img.removeAttribute('src');
			element.dataset.tebImageState = src ? 'loading' : 'idle';
			if(!src)return;
			const token = generation;
			loader = new doc.defaultView.Image();
			const pending = loader;
			pending.onload = async () => {
				try{ await pending.decode?.(); }catch{}
				if(token !== generation || disposed)return;
				element.dataset.tebImageState = 'loaded';
			};
			pending.onerror = () => {
				if(token !== generation || disposed)return;
				element.dataset.tebImageState = 'errored';
				// 180577: defaultSource未指定時のエラー状態では背景を外す。
				background.style.backgroundImage = '';
				img.removeAttribute('src');
			};
			pending.src = src;
		}
		if(picture?.width > 0 && picture?.height > 0)element.style.setProperty('--teb-image-ratio', String(picture.width / picture.height));
		setSource(picture, alt);
		return {element, background, img, setSource, dispose(){ disposed = true; cancel(); }};
	}
	// 132907 + 693365: 同点は後の候補。837030:b/S: 焦点矩形→負margin。
	function imageCrop(image, layout, candidates = []){
		const ratio = layout.width / layout.height;
		if(!(ratio > 0) || !(image?.width > 0) || !(image?.height > 0))return {marginInlineStart: '0px', marginInlineEnd: '0px', marginTop: '0px', marginBottom: '0px'};
		const score = item => Math.min(ratio / (item.w / item.h), (item.w / item.h) / ratio);
		const valid = candidates.filter(item => item && item.w > 0 && item.h > 0 && [item.x, item.y, item.w, item.h].every(Number.isFinite));
		const crop = valid.reduce((best, item) => best && score(best) > score(item) ? best : item, null);
		let dx = 0, dy = 0;
		const clamp = (value, limit) => Math.min(limit, Math.max(-limit, value));
		if(crop){
			if(image.width / image.height < ratio){
				const height = image.width / ratio;
				dy = 2 * clamp(image.height / 2 - (crop.y + crop.h / 2), (image.height - height) / 2) / image.width;
			}else{
				const width = ratio * image.height;
				dx = 2 * clamp(image.width / 2 - (crop.x + crop.w / 2), (image.width - width) / 2) / width;
			}
		}
		return {marginInlineStart: dx < 0 ? `${Math.floor(100 * dx)}%` : '0px', marginInlineEnd: dx > 0 ? `${Math.ceil(-100 * dx)}%` : '0px', marginTop: dy < 0 ? `${Math.floor(100 * dy)}%` : '0px', marginBottom: dy > 0 ? `${Math.ceil(-100 * dy)}%` : '0px'};
	}
	// 488789:D/F/u/d/z/selectBestUrl の通常media経路。
	// 未確認のCDN/カテゴリは元URLを保持する。
	function imageVersions(image){
		const fallback = [{uri: image.url, width: image.width || 1000, height: image.height || 1000}];
		if(!/^https:\/\/(pbs\.twimg\.com|pbs-0\.twimg\.com|pbs-o\.twimg\.com)\/media\//.test(image.url || ''))return fallback;
		const match = /^(https:\/\/.+\/[^/]+?)(\.[a-zA-Z_0-9]+)?(\?.*)?$/i.exec(image.url);
		if(!match)return fallback;
		const params = new URLSearchParams(match[3] || '');
		const format = params.get('format') || match[2]?.slice(1) || 'jpg';
		let width = image.width, height = image.height;
		if(!width || !height || Math.min(width, height) < 24){
			const ratio = width && height ? width / height : 1;
			width = ratio >= 1 ? 4096 : 4096 * ratio;
			height = ratio >= 1 ? 4096 / ratio : 4096;
		}
		const maximum = Math.max(width, height), versions = [];
		for(const [name, dimension] of [['tiny',64], ['120x120',120], ['240x240',240], ['360x360',360], ['small',680], ['900x900',900], ['medium',1200], ['large',2048], ['4096x4096',4096]]){
			const size = Math.min(dimension, maximum);
			versions.push({uri: `${match[1]}?format=${name === 'tiny' && format === 'png' ? 'jpg' : format}&name=${name}`, width: width >= height ? size : size * width / height, height: width >= height ? size * height / width : size, name});
			if(dimension > maximum)break;
		}
		return versions;
	}
	function selectImageUrl(layout, image, pixelRatio = 1, dataSaver = false){
		const versions = imageVersions(image).filter(item => item.name !== 'tiny');
		// z: 元画像の寸法に届いた最初の候補までを採用。
		const end = versions.findIndex(item => item.width >= image.width && item.height >= image.height);
		const candidates = end < 0 ? versions : versions.slice(0, end + 1);
		const ratio = dataSaver ? Math.min(pixelRatio || 1, 1.5) : Math.min(pixelRatio || 1, 2);
		return (candidates.find(item => item.width >= layout.width * ratio && item.height >= layout.height * ratio) || candidates.at(-1))?.uri;
	}
	// 488789:selectPreviewUrl。先頭候補が160px四方以内のときだけpreviewを返す。
	function selectPreviewUrl(image){
		const first = imageVersions(image)[0];
		return first && first.width <= 160 && first.height <= 160 ? first.uri : undefined;
	}
	// 12381:getReplyContextParticipants。本文表示範囲より前の宛先と直接の返信先。
	function replyParticipants(tweet){
		const mentions = tweet.entities?.user_mentions || [];
		const id = tweet.in_reply_to_user_id_str;
		const selected = mentions.filter(item => item.indices?.[0] < (tweet.display_text_range?.[0] || 0) || item.id_str === id);
		if(!mentions.some(item => item.id_str === id) && id && tweet.in_reply_to_screen_name)selected.push({id_str: id, name: tweet.in_reply_to_name || tweet.in_reply_to_screen_name, screen_name: tweet.in_reply_to_screen_name, indices: []});
		const seen = new Set();
		return selected.filter(item => !seen.has(item.id_str) && (seen.add(item.id_str), true));
	}
	function mount(context){
		const {doc, model, options, node, setLink, safeUrl, normalize, textPort, container, buildTweet, articleEmbeddedTweets} = context;
		const text = options.uiText || ((key, fallback) => fallback);
		const base = 'css-g5y9jx';
		const border = 'r-1867qdf r-1kqtdi0 r-rs99b7 r-1phboty r-1udh08x';
		const parts = {media: [], inlineMedia: [], carousels: [], cashtags: [], grokShare: null, grokFollowups: null, jetfuel: null, article: null, card: null, poll: null, quote: null, communityNote: null, navigation: []};
		const cleanups = [];
		const warnings = [];
		const contextLinks = [];
		const inlineMediaViews = new Map();
		function link(text, url, kind = 'card'){
			const a = node('a', 'css-1jxf684 r-poiln3');
			a.textContent = text;
			setLink(a, url);
			if(a.hasAttribute('href'))parts.navigation.push({element: a, kind, href: a.href});
			return a;
		}
		function image(picture, alt){
			const view = createImage({doc, node, safeUrl}, picture, alt || '');
			cleanups.push(view.dispose);
			view.element.tebImage = view;
			return view.element;
		}
		function cashtagSearchUrl(restId, ticker){
			const tag = `$${String(restId).replace(/^\$/, '')}`;
			const query = ticker === restId || ticker === tag ? tag : `${tag} OR ${ticker}`;
			return `https://x.com/search?q=${encodeURIComponent(query)}&src=typeahead_click`;
		}
		function cashtagAsset(payload, attachment){
			return payload?.finance_asset_data?.asset || payload?.asset || attachment?.asset || null;
		}
		function cashtagNumber(value){
			if(value == null)return NaN;
			return typeof value === 'object' ? Number(value.units || 0) + Number(value.nanos || 0) / 1e9 : Number(value);
		}
		function cashtagPoints(payload, attachment){
			const value = payload?.finance_chart_data?.data_points || payload?.data_points || payload?.chart || attachment?.data_points || attachment?.chart || [];
			return Array.isArray(value) ? value.map((item,index) => ({raw:item,price:cashtagNumber(item?.price ?? item?.value ?? item),timestamp:Number(item?.timestamp ?? index),volume:Number(item?.volume || 0)})).filter(item=>Number.isFinite(item.price)) : [];
		}
		function cashtagInfo(payload, attachment){
			return payload?.smart_tag_by_rest_id?.info?.info || payload?.smartTagInfo || attachment?.smart_tag_info || {};
		}
		function validCssColor(value){
			return typeof value === 'string' && value.length < 80 && (doc.defaultView.CSS?.supports?.('color',value) ?? false) ? value : null;
		}
		function cashtagSession(point,sessions){
			if(!Array.isArray(sessions) || !sessions.length)return null;
			const scale = point.timestamp > 0 && point.timestamp < 1e12 ? 1000 : 1;
			return sessions.find(session=>{const start=Number(session.start_timestamp_ms)/scale,end=Number(session.end_timestamp_ms)/scale;return Number.isFinite(start)&&Number.isFinite(end)&&point.timestamp>=start&&point.timestamp<end;}) || null;
		}
		function cashtagInGap(point,gaps){
			if(!Array.isArray(gaps))return false;
			return gaps.some(gap=>{const start=Number(gap.start ?? gap.start_timestamp_ms),end=Number(gap.end ?? gap.end_timestamp_ms);return Number.isFinite(start)&&Number.isFinite(end)&&point.timestamp>=start&&point.timestamp<=end;});
		}
		function cashtagMoney(value, locale, currency){
			if(value == null)return '';
			let amount;
			if(typeof value === 'object')amount = Number(value.units || 0) + Number(value.nanos || 0) / 1e9;
			else amount = Number(value);
			if(!Number.isFinite(amount))return String(value);
			try{return new Intl.NumberFormat(locale, currency ? {style:'currency',currency,maximumFractionDigits:amount < 1 ? 6 : 2} : {maximumFractionDigits:amount < 1 ? 6 : 2}).format(amount);}catch{return String(amount);}
		}
		function renderCashtagCard(attachment, parent, {inQuote=false} = {}){
			const sizeVariant = inQuote ? 0 : Number(attachment.size_variant) === 1 ? 1 : 0;
			const card = node(inQuote ? 'div' : 'a', base, 'cashtagCard');
			card.dataset.tebSizeVariant = String(sizeVariant);
			card.dataset.tebCashtagId = attachment.rest_id;
			const header = node('div', base, 'cashtagHeader');
			const logo = node('div', base, 'cashtagLogo');
			const identity = node('div', base, 'cashtagIdentity');
			const ticker = node('div', 'css-1jxf684', 'cashtagTicker');
			const name = node('div', 'css-1jxf684', 'cashtagName');
			const exchange = node('span', 'css-1jxf684', 'cashtagExchange');
			const quote = node('div', base, 'cashtagQuote');
			const price = node('div', 'css-1jxf684', 'cashtagPrice');
			const change = node('div', 'css-1jxf684', 'cashtagChange');
			const background = node('div',base,'cashtagBackground');
			const chart = doc.createElementNS('http://www.w3.org/2000/svg','svg'); chart.setAttribute('viewBox','0 0 100 36'); chart.setAttribute('preserveAspectRatio','none'); chart.dataset.tebPart='cashtagChart';
			const path = doc.createElementNS(chart.namespaceURI,'path'), afterHoursPath=doc.createElementNS(chart.namespaceURI,'path'), inspectLine=doc.createElementNS(chart.namespaceURI,'line');afterHoursPath.dataset.tebPart='cashtagChartAfterHours';inspectLine.dataset.tebPart='cashtagInspectLine';inspectLine.setAttribute('y1','0');inspectLine.setAttribute('y2','36');inspectLine.hidden=true;chart.append(path,afterHoursPath,inspectLine);
			const inspectTime=node('div','css-1jxf684','cashtagInspectTime');inspectTime.hidden=true;
			const footer = node('div',base,'cashtagFooter'), livePrice = node('span','css-1jxf684','cashtagLivePrice'), livePriceValue = node('span','css-1jxf684','cashtagLivePriceValue'), platforms = node('div',base,'cashtagPlatforms');
			identity.append(ticker,name); quote.append(price,change,inspectTime); header.append(logo,identity,quote);
			livePrice.append(doc.createTextNode(`${text('cashtagNowAt','Now at')} `),livePriceValue); footer.append(livePrice,platforms);
			card.append(background,header,chart); if(sizeVariant === 1)card.append(footer);
			parent.append(card);
			let logoView = null, platformImages = [], chartPoints = [], defaultPrice = '', current = attachment.finance_data || attachment.finance_asset_data || attachment.asset ? attachment : null;
			function update(payload){
				// latest quoteだけのpoll応答でも、先に解決したasset/chartを失わない。
				if(payload)current={...(current||{}),...payload};
				const asset = cashtagAsset(current,attachment), info = cashtagInfo(current,attachment), shownTicker = asset?.ticker || attachment.rest_id, active = info.active ?? true;
				ticker.textContent = `$${String(shownTicker).replace(/^\$/,'')}`;
				name.replaceChildren(doc.createTextNode(asset?.name || ''));
				const exchangeName = asset?.stock?.exchange_short_name || asset?.exchange_short_name;
				if(exchangeName){exchange.textContent=` · ${exchangeName}`;name.append(exchange);}
				const q = asset?.quote || current?.quote || {}, percent = Number(q.change_24h_percent ?? asset?.change_24h_percent ?? current?.change_24h_percent);
				price.textContent = cashtagMoney(q.price ?? asset?.price ?? current?.price,options.locale,q.currency_code || asset?.currency || asset?.stock?.currency);defaultPrice=price.textContent;
				change.textContent = Number.isFinite(percent) ? `${percent > 0 ? '+' : ''}${new Intl.NumberFormat(options.locale,{maximumFractionDigits:2}).format(percent)}%` : '';
				card.dataset.tebCashtagTrend = Number.isFinite(percent) ? percent > 0 ? 'positive' : percent < 0 ? 'negative' : 'neutral' : 'unknown';
				let points = cashtagPoints(current,attachment), sessions=current?.finance_chart_data?.sessions || current?.sessions || attachment?.sessions || [], gaps=current?.finance_chart_data?.gaps || current?.gaps || attachment?.gaps || [];
				if(!active && points.length < 2)points = [47,51,49,56,52,61,58,64,62,68].map((price,index)=>({price,timestamp:index,volume:0,raw:price}));
				// 705025: compactではPRE/POST marketを除外。mediumは別色の線として保持する。
				if(sizeVariant===0)points=points.filter(point=>!['PRE_MARKET','POST_MARKET'].includes(cashtagSession(point,sessions)?.session_type));
				chartPoints=points;
				if(points.length >= 2){
					const min=Math.min(...points.map(item=>item.price)),max=Math.max(...points.map(item=>item.price)),range=max-min||1;
					const coords=points.map((item,index)=>({item,x:index*100/(points.length-1),y:34-(item.price-min)*32/range,extended:['PRE_MARKET','POST_MARKET'].includes(cashtagSession(item,sessions)?.session_type),gap:cashtagInGap(item,gaps)}));
					const makePath=extended=>coords.map((point,index)=>{const previous=coords[index-1],visible=point.extended===extended,boundary=previous&&previous.extended!==point.extended; if(!visible&&!boundary)return '';const command=!previous||point.gap||previous.gap||!visible||boundary?'M':'L';return `${command}${point.x} ${point.y}`;}).filter(Boolean).join(' ');
					path.setAttribute('d',makePath(false));afterHoursPath.setAttribute('d',sizeVariant===1?makePath(true):'');
				}else{path.removeAttribute('d');afterHoursPath.removeAttribute('d');}
				chart.hidden = active && points.length < 2;
				const logoUrl = asset?.logo_url || asset?.logoUrl;
				if(logoUrl && !logoView){logoView=image({url:logoUrl},'');logo.append(logoView);}
				const backgroundUrl = safeUrl(asset?.background_url || asset?.backgroundUrl); background.style.backgroundImage = backgroundUrl ? `url("${backgroundUrl.replace(/["\\]/g,'\\$&')}")` : '';
				const theme = info.theme_override || current?.theme_override || {};
				const cardBackground = validCssColor(theme.cardBackground || theme.card_background), borderColor = validCssColor(theme.border), themeText = validCssColor(theme.text), secondary = validCssColor(theme.textSecondary || theme.text_secondary);
				card.style.backgroundColor = cardBackground || ''; card.style.borderColor = borderColor || ''; if(themeText)card.style.color=themeText; else card.style.color=''; if(secondary){name.style.color=secondary;livePrice.style.color=secondary;}else{name.style.color='';livePrice.style.color='';}
				const snapshot = attachment.candle_size != null && attachment.from_timestamp_ms != null && attachment.timeframe != null && attachment.to_timestamp_ms != null;
				card.dataset.tebCashtagActive=String(active);card.dataset.tebCashtagSnapshot=String(snapshot);
				const latest = current?.finance_latest_quote?.quote?.price ?? current?.latest_quote?.price ?? q.price;
				livePrice.firstChild.nodeValue = active ? `${text('cashtagNowAt','Now at')} ` : text('cashtagComingSoon','Coming soon');
				livePriceValue.textContent = active ? cashtagMoney(latest,options.locale,latest?.currency_code || q.currency_code || asset?.stock?.currency) : '';
				footer.hidden = sizeVariant !== 1 || active && !snapshot;
				platformImages.splice(0).forEach(view=>view.dispose?.()); platforms.replaceChildren();
				const platformData = info.tradable_platforms || current?.tradable_platforms || [];
				for(const platform of platformData){
					if(!platform?.name)continue;
					const button=node('button',base,'cashtagPlatform');button.type='button';const platformName=node('span','css-1jxf684','cashtagPlatformName');platformName.textContent=platform.name;
					if(platform.logo_url || platform.logoURL){const icon=image({url:platform.logo_url || platform.logoURL},'');platformImages.push(icon.tebImage);button.append(icon);}
					button.append(platformName);const url=safeUrl(platform.url);if(url){button.dataset.tebUrl=url;button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();button.dispatchEvent(new doc.defaultView.CustomEvent('teb:navigate',{bubbles:true,cancelable:true,detail:{element:button,kind:'cashtag-platform',href:url,originalEvent:event}}));});}
					platforms.append(button);
				}
				card.dataset.tebCashtagUnresolved = String(!asset);
				if(!inQuote){const url=cashtagSearchUrl(attachment.rest_id,shownTicker);setLink(card,url);if(card.hasAttribute('href'))parts.navigation.push({element:card,kind:'cashtag',href:card.href});}
				return api;
			}
			function inspect(event){
				if(sizeVariant!==1||chartPoints.length<2)return;
				if(event.type==='pointerleave'){inspectLine.hidden=true;inspectTime.hidden=true;price.textContent=defaultPrice;return;}
				const rect=chart.getBoundingClientRect(),ratio=Math.max(0,Math.min(1,(event.clientX-rect.left)/Math.max(rect.width,1))),index=Math.round(ratio*(chartPoints.length-1)),point=chartPoints[index];
				if(!point)return;inspectLine.hidden=false;inspectLine.setAttribute('x1',String(index*100/(chartPoints.length-1)));inspectLine.setAttribute('x2',String(index*100/(chartPoints.length-1)));price.textContent=cashtagMoney(point.raw?.price ?? point.price,options.locale,point.raw?.price?.currency_code);inspectTime.hidden=false;const timestamp=point.timestamp>0&&point.timestamp<1e12?point.timestamp*1000:point.timestamp;inspectTime.textContent=Number.isFinite(timestamp)&&timestamp>1e11?new Intl.DateTimeFormat(options.locale,{month:'short',day:'numeric',hour:'numeric',minute:'2-digit',...(options.timeZone?{timeZone:options.timeZone}:{})}).format(new Date(timestamp)):'';
			}
			chart.addEventListener('pointermove',inspect);chart.addEventListener('pointerleave',inspect);cleanups.push(()=>{chart.removeEventListener('pointermove',inspect);chart.removeEventListener('pointerleave',inspect);});
			let requestController=null,pendingRequest=null,pollTimer=null,pollInterval=0,disposed=false;
			async function refresh(reason='manual'){
				if(disposed || typeof options.resolveCashtagAsset!=='function')return current;
				if(pendingRequest)return pendingRequest;
				requestController=new AbortController();
				card.dataset.tebCashtagRefreshing='true';
				pendingRequest=Promise.resolve(options.resolveCashtagAsset({restId:attachment.rest_id,attachment,signal:requestController.signal,reason,previousData:current})).then(value=>{if(!disposed&&!requestController.signal.aborted&&value)update(value);return current;}).catch(error=>{if(!disposed&&!requestController.signal.aborted){const message=`cashtag ${attachment.rest_id}: ${error?.message||error}`;if(!warnings.includes(message))warnings.push(message);}return current;}).finally(()=>{pendingRequest=null;card.dataset.tebCashtagRefreshing='false';});
				return pendingRequest;
			}
			function schedulePoll(){
				if(pollTimer){doc.defaultView.clearTimeout(pollTimer);pollTimer=null;}
				if(disposed||pollInterval<=0)return;
				pollTimer=doc.defaultView.setTimeout(async()=>{pollTimer=null;if(doc.visibilityState!=='hidden'&&card.dataset.tebCashtagActive!=='false')await refresh('poll');schedulePoll();},pollInterval);
			}
			function setPolling(value){
				if(value==null||value===0)pollInterval=0;
				else if(!Number.isFinite(value)||value<10)throw new RangeError('cashtag polling intervalは10ms以上または0です。');
				else pollInterval=Math.trunc(value);
				schedulePoll();return api;
			}
			const api = {element:card,attachment,background,header,logo,identity,ticker,name,exchange,quote,price,change,chart,path,afterHoursPath,inspectLine,inspectTime,footer,livePrice,livePriceValue,platforms,setData:update,refresh,setPolling,get pollingInterval(){return pollInterval;},get isRefreshing(){return !!pendingRequest;},get data(){return current;}};
			update(current);
			if(typeof options.resolveCashtagAsset === 'function'){
				refresh('initial');
				const snapshot=attachment.candle_size!=null&&attachment.from_timestamp_ms!=null&&attachment.timeframe!=null&&attachment.to_timestamp_ms!=null;
				if(sizeVariant===1&&snapshot&&Number(options.cashtagPollingIntervalMs)>0)setPolling(Number(options.cashtagPollingIntervalMs));
			}
			const foreground=()=>{if(doc.visibilityState!=='hidden'&&pollInterval>0)refresh('foreground');};doc.addEventListener('visibilitychange',foreground);
			cleanups.push(()=>{disposed=true;if(pollTimer)doc.defaultView.clearTimeout(pollTimer);requestController?.abort();doc.removeEventListener('visibilitychange',foreground);});
			return api;
		}
		function renderCashtags(tweet,parent,target=parts.cashtags,{inQuote=false}={}){
			const attachments = Array.isArray(tweet.cashtag_attachments) ? tweet.cashtag_attachments : [];
			if(!attachments.length || inQuote && tweet.extended_entities?.media?.length)return null;
			const root = node('div',base,inQuote?'quoteCashtagAttachment':'cashtagCarousel');
			const track = inQuote ? root : node('div',base,'cashtagTrack'); if(!inQuote)root.append(track);
			for(const attachment of (inQuote ? attachments.slice(0,1) : attachments.slice(0,3))){
				const slide = inQuote ? track : node('div',base,'cashtagSlide');
				if(!inQuote)track.append(slide);
				target.push(renderCashtagCard(attachment,slide,{inQuote}));
			}
			parent.append(root); return root;
		}
		function grokPlainText(value=''){
			return String(value).replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*/gm,'').replace(/<grok:render[^>]*>[\s\S]*?<\/grok:render>/g,'').replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,'$1').replace(/```.*?\n|```/gs,'').replace(/<[^>]*>/g,'').replace(/!\[(.*?)\]\([^)]*\)/g,'$1').replace(/\[([^\]]*?)\]\([^)]*\)/g,'$1').replace(/^(\n)?\s{0,3}>\s?/gm,'$1').replace(/^\s{0,}#{1,6}\s*/gm,'').replace(/(\*{1,2})(.*?)\1/g,'$2').replace(/`(.+?)`/g,'$1').replace(/~~(.*?)~~/g,'$1').trim();
		}
		function grokSources(item){
			const headers=item?.deepsearchHeaders || item?.deepsearch_headers || [],web=new Set(),posts=new Set();
			for(const header of headers)for(const step of header.steps||[]){
				for(const result of step.webResults||step.web_results||[])if(result?.url)web.add(result.url);
				for(const id of step.xPostIds||step.x_post_ids||[])posts.add(id);
				for(const card of step.toolUsageCardResults||step.tool_usage_card_results||[]){for(const result of card.webResults||card.web_results||[])if(result?.url)web.add(result.url);for(const id of card.xPostIds||card.x_post_ids||[])posts.add(id);}
			}
			return {web:[...web],posts:[...posts]};
		}
		function renderGrokShare(tweet,parent){
			const conversation=tweet.grok_share_attachment;
			if(!Array.isArray(conversation)||conversation.length<2)return null;
			const prompt=conversation.at(-2),answer=conversation.at(-1),promptText=grokPlainText(prompt?.message),answerText=grokPlainText(answer?.message),promptImage=safeUrl(prompt?.mediaUrls?.[0]),answerImage=safeUrl(answer?.mediaUrls?.[0]);
			const root=node('section',base,'grokShare'),destination=safeUrl(tweet.card?.url || tweet.card?.binding_values?.destination?.string_value || tweet.grok_share_destination),main=node(destination?'a':'div',base,'grokShareMain');
			if(destination){setLink(main,destination);parts.navigation.push({element:main,kind:'grok-share',href:destination});}
			const label=answerImage?text('grokImageBy','Image by Grok'):prompt?.grokMode==='FUN'?text('grokAnswerFun','Answer by Grok in Fun Mode'):text('grokAnswer','Answer by Grok');
			let header=null,headerImage=null,analysisPost=null;
			if(!answerImage){
				header=node('div',base,'grokShareHeader');
				if(promptImage){headerImage=node('div',base,'grokShareHeaderImage');headerImage.append(image({url:promptImage},''));header.append(headerImage);}
				const headerText=node('div',base,'grokShareHeaderText'),analysisRaw=conversation[0]?.analysis_post;
				if(analysisRaw){
					let analysis;try{analysis=normalize(analysisRaw);}catch{analysis=null;}
					if(analysis){analysisPost=node('div',base,'grokShareAnalysisPost');const analysisName=node('div','css-1jxf684','grokShareAnalysisName'),analysisText=node('div','css-1jxf684','grokShareAnalysisText');analysisName.textContent=analysis.user?.name||analysis.user?.screen_name||'';analysisText.textContent=analysis.text||'';analysisPost.append(analysisName,analysisText);headerText.append(analysisPost);}
				}
				if(!analysisPost){const promptNode=node('div','css-1jxf684','grokSharePrompt');promptNode.textContent=promptText;headerText.append(promptNode);}
				const mode=node('div','css-1jxf684','grokShareMode');mode.textContent=label;headerText.append(mode);header.append(headerText);main.append(header);
			}
			let answerElement=null,answerImageElement=null,overlay=null,more=null,sourcesElement=null;
			if(answerImage){
				answerImageElement=node('div',base,'grokShareImage');answerImageElement.append(image({url:answerImage},''));overlay=node('div',base,'grokShareImageOverlay');const title=node('div','css-1jxf684','grokSharePrompt'),mode=node('div','css-1jxf684','grokShareMode');title.textContent=promptText;mode.textContent=label;overlay.append(title,mode);answerImageElement.append(overlay);main.append(answerImageElement);
			}else{
				answerElement=node('div',base,'grokShareAnswer');const sources=grokSources(answer);
				if(sources.web.length||sources.posts.length){sourcesElement=node('div',base,'grokShareSources');const count=sources.web.length+sources.posts.length;const sourceText=sources.web.length&&sources.posts.length?text('grokWebAndPosts',`${count} web pages and posts`,{count}):sources.web.length?text('grokWebPages',`${count} web pages`,{count}):text('grokPosts',`${count} posts`,{count});sourcesElement.textContent=`◉ ${sourceText}`;answerElement.append(sourcesElement);}
				const response=node('div','css-1jxf684','grokShareAnswerText');response.textContent=answerText;response.style.webkitLineClamp='8';answerElement.append(response);
				if(answerText.length>420||sourcesElement){more=node('button',base,'grokShareMore');more.type='button';more.textContent=text('grokShowMore','Show more');let lines=8;more.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();lines+=24;response.style.webkitLineClamp=String(lines);if(lines>=56)more.hidden=true;});answerElement.append(more);}
				main.append(answerElement);
			}
			root.append(main);
			let continueButton=null;
			if(options.withGrokContinue!==false){continueButton=node('button',base,'grokShareContinue');continueButton.type='button';continueButton.textContent=answerImage?text('grokCreateVersion','Create your version with Grok'):text('grokAskYourself','Ask Grok yourself');continueButton.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();continueButton.dispatchEvent(new doc.defaultView.CustomEvent('teb:grok',{bubbles:true,cancelable:true,detail:{text:promptText,imageUrl:promptImage,source:`grok_share_card${answerImage?'_image':'_text'}`,originalEvent:event}}));});root.append(continueButton);}
			parent.append(root);parts.grokShare={element:root,main,header,headerImage,analysisPost,answer:answerElement,answerImage:answerImageElement,overlay,more,sources:sourcesElement,continueButton,conversation,prompt,answerModel:answer};return parts.grokShare;
		}
		function renderGrokFollowups(tweet,parent){
			const followups=tweet.grok_analysis_followups;
			const pathname=options.locationPath ?? doc.defaultView?.location?.pathname ?? '';
			if(options.grokAnalyzePostFollowupsEnabled===false || pathname.startsWith('/i/trending') || !Array.isArray(followups) || !followups.length)return null;
			const root=node('section',base,'grokFollowups'),carousel=node('div',base,'grokFollowupsCarousel'),buttons=[];
			root.id=`followups_${tweet.id_str || ''}`;root.dataset.testid=root.id;
			for(const [index,message] of followups.entries()){
				const button=node('button',base,'grokFollowup');button.type='button';button.textContent=message;
				if(index===0){const icon=doc.createElementNS('http://www.w3.org/2000/svg','svg');icon.setAttribute('viewBox','0 0 33 32');icon.setAttribute('aria-hidden','true');icon.dataset.tebPart='grokFollowupIcon';const path=doc.createElementNS(icon.namespaceURI,'path');path.setAttribute('d','M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466');icon.append(path);button.prepend(icon);}
				button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();button.dispatchEvent(new doc.defaultView.CustomEvent('teb:grok',{bubbles:true,cancelable:true,detail:{text:`${message}\n${tweet.permalink || ''}`,analysisEntityId:tweet.id_str,autoSubmit:true,source:options.displayMode==='detail'?'post_analysis_followup_details_page':'post_analysis_followup_timeline',promptMetadata:{promptSource:'GROK_ANALYZE',action:'INPUT',properties:{element:'FOLLOW_UP'}},itemIndex:index,message,originalEvent:event}}));});
				carousel.append(button);buttons.push(button);
			}
			const start=node('div',base,'grokFollowupsShadow'),end=node('div',base,'grokFollowupsShadow');start.dataset.tebSide='start';end.dataset.tebSide='end';
			const updateShadows=()=>{start.hidden=carousel.scrollLeft<=1;end.hidden=carousel.scrollLeft+carousel.clientWidth>=carousel.scrollWidth-1;};
			carousel.addEventListener('scroll',updateShadows,{passive:true});cleanups.push(()=>carousel.removeEventListener('scroll',updateShadows));
			root.append(carousel,start,end);parent.append(root);queueMicrotask(updateShadows);
			parts.grokFollowups={element:root,carousel,buttons,startShadow:start,endShadow:end,messages:[...followups]};return parts.grokFollowups;
		}
		function notice(message){ warnings.push(message); }
		function renderJetfuel(tweet, parent, target, inQuote=false){
			const payload = tweet?.jetfuel_payload;
			if(payload == null)return null;
			// 937363:_renderJetfuelFrame / 562776 / 517867。X本体もpayloadを解釈せず
			// 専用Runtimeへ渡すので、その境界を注入可能なrendererとして公開する。
			if(typeof options.renderJetfuelFrame !== 'function'){
				notice('Jetfuel payloadを表示するにはrenderJetfuelFrameが必要です。');
				return null;
			}
			const wrapper = node('div', base, inQuote ? 'quoteJetfuelFrame' : 'jetfuelFrame');
			let rendered;
			try{ rendered = options.renderJetfuelFrame({payload, tweet, inQuote, document: doc}); }
			catch(error){ notice(`Jetfuel renderer: ${error?.message || error}`); return null; }
			const content = rendered?.element || rendered;
			if(!(content instanceof doc.defaultView.Node)){
				notice('renderJetfuelFrameはNodeまたは{element}を返す必要があります。');
				return null;
			}
			wrapper.append(content); parent.append(wrapper);
			if(typeof rendered?.dispose === 'function')cleanups.push(()=>rendered.dispose());
			const view = {element: wrapper, content, payload, inQuote};
			if(target)target.jetfuel = view;
			return view;
		}
		function communityNoteIcon(type){
			const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
			svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('aria-hidden', 'true'); svg.dataset.tebPart = 'communityNoteIcon'; svg.dataset.tebCommunityNoteIcon = type || 'BirdwatchFill';
			if(/^BirdwatchLevel(?:Low|Medium|High)$/.test(type || '')){
				const level = {BirdwatchLevelLow:1,BirdwatchLevelMedium:2,BirdwatchLevelHigh:3}[type];
				for(const [index, attrs] of [[0,{x:3,y:11,width:5,height:10}],[1,{x:9.5,y:7,width:5,height:14}],[2,{x:16,y:3,width:5,height:18}]]){
					const rect = doc.createElementNS(svg.namespaceURI, 'rect');
					for(const [key,value] of Object.entries({...attrs,rx:1}))rect.setAttribute(key, value);
					if(index >= level)rect.style.color = 'rgb(207,217,222)';
					svg.append(rect);
				}
			}else{
				const paths = {
					BirdwatchLoading:['M13 2v4h-2V2h2zm-2 16v4h2v-4h-2zm6.294-14.54l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-9.74 12.69l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-1-6.86L2.729 8.12l-.584 1.91L5.97 11.2l.584-1.91zm15.301 4.68L18.03 12.8l-.585 1.91 3.826 1.17.584-1.91zm-.584-5.85l-3.826 1.17.585 1.91 3.825-1.17-.584-1.91zM5.97 12.8l-3.825 1.17.584 1.91 3.825-1.17-.584-1.91zm3.171-6.17L6.706 3.46 5.119 4.67l2.435 3.18 1.587-1.22zm9.74 12.69l-2.435-3.17-1.587 1.22 2.435 3.17 1.587-1.22z'],
					BirdwatchBarChart:['M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z'],
					BirdwatchCameraVideo:['M12 4c2.485 0 4.5 2.015 4.5 4.5v7c0 2.485-2.015 4.5-4.5 4.5H6c-2.485 0-4.5-2.015-4.5-4.5v-7C1.5 6.015 3.515 4 6 4h6z','M22.5 19.081l-4.125-3.3-.375-.3V8.52l.375-.301 4.125-3.3v14.162z'],
					BirdwatchLink:['M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z'],
					BirdwatchPhoto:['M14.1 2.5c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487.941.48 1.707 1.245 2.186 2.185.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14.1c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96-.48.941-1.245 1.707-2.185 2.186-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487-.941-.48-1.707-1.245-2.186-2.185-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V9.9c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96.48-.941 1.245-1.707 2.185-2.186.593-.302 1.233-.428 1.961-.487.718-.059 1.606-.058 2.71-.058H14.1zM4.506 14.442c.006.473.017 1.865.045 2.203.05.606.142.954.276 1.217.288.565.746 1.023 1.31 1.31.264.135.612.228 1.217.277.617.05 1.41.051 2.546.051h4.2c.36 0 1.685-.003 1.981-.005L7.96 11.373l-3.453 3.07zM15 7c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z'],
					BirdwatchEyeOff:['M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z'],
					BirdwatchFlagFill:['M20.579 3.098c-3.035 1.41-5.521.931-8.154.422C10.1 3.072 7.704 2.624 5 3.515V2.001H3V22h2v-4.346c2.466-1.033 4.603-.641 7.047-.17 1.354.261 2.798.539 4.359.539 1.548 0 3.212-.273 5.015-1.11l.579-.269V2.438l-1.421.659zm-2.501 8.672c-.372.182-.822.025-1.002-.348-.78-1.61-2.878-1.556-3.575.124l-.306.74c-.116.281-.391.463-.694.463s-.577-.184-.693-.464l-.308-.74c-.697-1.679-2.795-1.733-3.575-.123-.182.373-.629.529-1.002.347-.373-.18-.528-.628-.348-1 1.23-2.542 4.46-2.648 5.925-.495 1.465-2.154 4.695-2.047 5.925.496h.001c.182.372.025.82-.348 1z'],
					BirdwatchFlagStroke:['M18.425 10.77h.001c.182.372.025.82-.348 1-.372.182-.822.025-1.002-.348-.78-1.61-2.878-1.556-3.575.124l-.306.74c-.116.281-.391.463-.694.463s-.577-.184-.693-.464l-.308-.74c-.697-1.679-2.795-1.733-3.575-.123-.182.373-.629.529-1.002.347-.373-.18-.528-.628-.348-1 1.23-2.542 4.46-2.648 5.925-.495 1.465-2.154 4.695-2.047 5.925.496zM22 2.439v14.205l-.579.269c-1.803.837-3.466 1.11-5.015 1.11-1.561 0-3.005-.278-4.359-.539-2.443-.471-4.581-.863-7.047.17V22H3V2h2v1.514c2.705-.89 5.1-.443 7.425.005 2.633.509 5.12.988 8.154-.422L22 2.438zM20 5.47c-3.009.967-5.616.464-7.953.014-2.443-.471-4.581-.863-7.047.17v9.86c2.705-.891 5.1-.442 7.425.005 2.462.475 4.798.925 7.575-.173V5.47z'],
					BirdwatchFlask:['M7 6h10v2h-1v2.7l3.316 4.97c.446.67.684 1.46.684 2.26 0 2.25-1.822 4.07-4.07 4.07H8.07C5.822 22 4 20.18 4 17.93c0-.8.238-1.59.684-2.26L8 10.7V8H7V6zm9.742 9.42c-.227-.04-.531-.08-.873-.12-.757-.08-1.62-.13-2.25-.06-.572.07-.983.15-1.424.24h-.005c-.445.09-.92.19-1.571.26-.869.11-1.922.03-2.707-.05-.288-.04-.55-.07-.769-.1l-.795 1.19c-.227.34-.348.74-.348 1.15C6 19.07 6.927 20 8.07 20h7.86c1.143 0 2.07-.93 2.07-2.07 0-.41-.121-.81-.348-1.15l-.91-1.36zM10 3c-.552 0-1 .45-1 1s.448 1 1 1 1-.45 1-1-.448-1-1-1zm3.5-2c-.828 0-1.5.67-1.5 1.5S12.672 4 13.5 4 15 3.33 15 2.5 14.328 1 13.5 1z'],
					BirdwatchFlaskStroke:['M7 6h10v2h-1v2.7l3.316 4.97c.446.67.684 1.46.684 2.26 0 2.25-1.822 4.07-4.07 4.07H8.07C5.822 22 4 20.18 4 17.93c0-.8.238-1.59.684-2.26L8 10.7V8H7V6zm3 2v3.3l-1.615 2.42c.691.07 1.436.1 1.996.04.572-.07.983-.15 1.424-.24h.005c.445-.09.92-.19 1.571-.26.599-.07 1.286-.06 1.912-.02L14 11.3V8h-4zm6.742 7.42c-.227-.04-.531-.08-.873-.12-.757-.08-1.62-.13-2.25-.06-.572.07-.983.15-1.424.24h-.005c-.445.09-.92.19-1.571.26-.869.11-1.922.03-2.707-.05-.288-.04-.55-.07-.769-.1l-.795 1.19c-.227.34-.348.74-.348 1.15C6 19.07 6.927 20 8.07 20h7.86c1.143 0 2.07-.93 2.07-2.07 0-.41-.121-.81-.348-1.15l-.91-1.36zM10 3c-.552 0-1 .45-1 1s.448 1 1 1 1-.45 1-1-.448-1-1-1zm3.5-2c-.828 0-1.5.67-1.5 1.5S12.672 4 13.5 4 15 3.33 15 2.5 14.328 1 13.5 1z'],
					BirdwatchIconWriting:['M17.3906 11.8044L10.0459 19.4167C9.37191 20.1152 8.46631 20.5441 7.49902 20.6247L3 20.9997L3.375 16.5007C3.45561 15.5334 3.8855 14.6288 4.58398 13.9548L12.1953 6.60907L17.3906 11.8044Z','M15.2061 3.70477C16.6185 2.34219 18.8622 2.36205 20.25 3.74969C21.6379 5.13757 21.6578 7.38218 20.2949 8.79461L18.7793 10.3649L13.6348 5.2204L15.2061 3.70477Z'],
					BirdwatchStarRising:['M9.207 16.207l-5.25 5.25-1.414-1.414 5.25-5.25 1.414 1.414zm5 1l-4.25 4.25-1.414-1.414 4.25-4.25 1.414 1.414zm.413-14.358c.83-1.133 2.57-.866 3.048.418l.042.127.729 2.499 2.471.816c1.377.455 1.637 2.29.439 3.108l-2.153 1.464-.012 2.605c-.008 1.45-1.674 2.262-2.82 1.375l-2.06-1.593-2.478.793c-1.381.442-2.67-.892-2.18-2.258l.878-2.45-1.52-2.113c-.847-1.177.024-2.814 1.473-2.77l2.602.078 1.54-2.1zm-6.413 8.358l-4.25 4.25-1.414-1.414 4.25-4.25 1.414 1.414z']
				};
				if(paths[type]){
					for(const value of paths[type]){const path=doc.createElementNS(svg.namespaceURI,'path');path.setAttribute('d',value);svg.append(path);}
					return svg;
				}
				// 54591: BirdwatchFill。個別icon typeがない場合の492593既定factory。
				const path = doc.createElementNS(svg.namespaceURI, 'path');
				path.setAttribute('d','M5.5 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18.25 13.91c-.18-2.01-.78-3.72-1.81-4.96C20.89 10.7 19.45 10 17.75 10c-.35 0-.68.03-1.01.09-.18.54-.45 1.05-.8 1.49.74.46 1.41 1.05 1.99 1.76 1.05 1.3 1.71 2.91 2.06 4.66h3.85l-.09-1.09zM18.5 9c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM6.07 13.34c.58-.71 1.25-1.3 1.99-1.76-.35-.44-.62-.95-.8-1.49-.33-.06-.66-.09-1.01-.09-1.7 0-3.14.7-4.19 1.95C1.032 13.19.433 14.9.254 16.91L.157 18H4.01c.35-1.75 1.01-3.36 2.06-4.66zM15 8.5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm-7.37 6.1c-1.07 1.32-1.69 3.15-1.88 5.31L5.66 21h12.68l-.09-1.09c-.19-2.16-.81-3.99-1.88-5.31-1.08-1.35-2.59-2.1-4.37-2.1s-3.28.75-4.37 2.1z');
				svg.append(path);
			}
			return svg;
		}
		function communityNoteText(value, part, size = 'body'){
			if(!value)return null;
			const data = typeof value === 'string' ? {text:value,entities:{}} : value;
			if(typeof data.text !== 'string' || !data.text)return null;
			const root = node('div', 'css-1jxf684', part); root.dir = 'auto';
			let rendered = false;
			try{
				const items = textPort.displayParts({text:data.text,entities:data.entities || {},display_text_range:[0,data.text.length]},{withCardLinks:true,withMediaLinks:true,withQuoteLinks:true});
				for(const item of items){
					const label = item.displayUrl ?? `${item.prefix || ''}${item.text || ''}`;
					const child = item.entityType === 'text' ? doc.createTextNode(textPort.decodeHtmlEntities(label)) : link(textPort.decodeHtmlEntities(label), item.url, 'community-note-entity');
					root.append(child); rendered = true;
				}
			}catch{}
			if(!rendered)root.textContent = textPort.decodeHtmlEntities(data.text);
			root.dataset.tebTextSize = size; return root;
		}
		// 492593。translationの取得・投票scribeは外部責務、pivotの表示とnavigation境界を移植。
		function renderCommunityNote(tweet, parent, inQuote = false){
			const pivot = tweet?.birdwatch_pivot;
			if(!pivot)return null;
			const root = node('section', base, 'communityNote');
			root.dataset.tebInQuote = String(inQuote); root.dataset.tebVisualStyle = pivot.visualStyle || '';
			const destination = pivot.destinationUrl || pivot.destination_url;
			const header = link('', destination, 'community-note'); header.dataset.tebPart = 'communityNoteHeader';
			const headerMain = node('div', base, 'communityNoteHeaderMain');
			const icon = communityNoteIcon(pivot.iconType || pivot.icon_type); headerMain.append(icon);
			const compactTitle = (inQuote || options.containerWidth <= 768) && pivot.shorttitle;
			const title = node('div', 'css-1jxf684', 'communityNoteTitle'); title.textContent = compactTitle || pivot.title || text('communityNotes','Community Notes');
			let detail = null;
			if(!compactTitle && pivot.titleDetail){detail = node('span','css-1jxf684','communityNoteTitleDetail');detail.textContent = typeof pivot.titleDetail === 'string' ? pivot.titleDetail : pivot.titleDetail.text || '';title.append(detail);}
			headerMain.append(title);
			let arrow = null;
			if(!pivot.callToAction){arrow = doc.createElementNS('http://www.w3.org/2000/svg','svg');arrow.setAttribute('viewBox','0 0 24 24');arrow.setAttribute('aria-hidden','true');arrow.dataset.tebPart='communityNoteArrow';const path=doc.createElementNS(arrow.namespaceURI,'path');path.setAttribute('d','M12.957 4.54L20.414 12l-7.457 7.46-1.414-1.42L16.586 13H3v-2h13.586l-5.043-5.04 1.414-1.42z');arrow.append(path);headerMain.append(arrow);}
			header.append(headerMain); root.append(header);
			const subtitleValue = pivot.grokTranslation?.subtitle || pivot.subtitle;
			const subtitle = communityNoteText(subtitleValue, 'communityNoteSubtitle'); if(subtitle)root.append(subtitle);
			let cta = null, ctaButton = null;
			if(pivot.callToAction){
				cta = node('div', base, 'communityNoteCta'); const prompt = node('span','css-1jxf684','communityNoteCtaPrompt');prompt.textContent=pivot.callToAction.prompt || text('communityNoteHelpfulQuestion','Is this note helpful?');
				ctaButton=link(pivot.callToAction.title || '',pivot.callToAction.destinationUrl || pivot.callToAction.destination_url,'community-note-cta');ctaButton.dataset.tebPart='communityNoteCtaButton';cta.append(prompt,ctaButton);root.append(cta);
			}
			let footer = null;
			if(!inQuote && pivot.visualStyle !== 'Tentative'){footer=communityNoteText(pivot.footer,'communityNoteFooter','subtext2');if(footer)root.append(footer);}
			parent.append(root);
			return {element:root,header,icon,title,titleDetail:detail,arrow,subtitle,footer,cta,ctaButton,noteId:pivot.noteId || pivot.note_id || null,model:pivot};
		}
		function articleLabel(onImage){
			const label = node('span', 'css-1jxf684', 'articleLabel');
			label.setAttribute('aria-label', text('xArticle', 'X Article'));
			label.style.backgroundColor = onImage ? 'rgba(0, 0, 0, .55)' : 'rgb(239, 243, 244)';
			label.style.color = onImage ? 'white' : 'rgb(15, 20, 25)';
			if(onImage)Object.assign(label.style, {position: 'absolute', left: '12px', bottom: '12px'});
			const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
			svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('aria-hidden', 'true');
			Object.assign(svg.style, {width: '11px', height: '11px', marginRight: '3px', fill: 'currentColor'});
			const path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
			path.setAttribute('d', 'M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z');
			svg.append(path); label.append(svg, doc.createTextNode(text('article', 'Article'))); return label;
		}
		// 595371 ArticleCardの通常投稿経路。記事本文そのもののrendererは別経路。
		function renderArticle(article, parent, target, renderInQuote = false){
			if(!article?.rest_id || !article.title)return;
			if(model.possibly_sensitive || model.mediaVisibilityResults?.blurred_image_interstitial){notice('制限付き記事のreveal UIは未移植です。Xで確認してください。');return;}
			const element = node('a', base, 'article');
			element.dataset.tebArticleQuote = String(renderInQuote);
			const url = `https://x.com/i/article/${encodeURIComponent(article.rest_id)}`;
			setLink(element, url);
			const cover = article.cover_media?.media_info;
			if(cover?.original_img_url){
				const coverElement = node('div', base, 'articleCover');
				coverElement.dataset.testid = 'article-cover-image';
				const imageElement = image({url: cover.original_img_url, width: cover.original_img_width || 0, height: cover.original_img_height || 0}, text('articleCoverImage', 'Article cover image'));
				Object.assign(imageElement.style, {position: 'absolute', inset: '0', width: '100%', height: '100%'});
				coverElement.append(imageElement, articleLabel(true)); element.append(coverElement);
			}
			const body = node('div', base, 'articleBody'), header = node('div', base, 'articleHeader');
			const title = node('div', 'css-1jxf684', 'articleTitle'); title.dir = 'auto'; title.textContent = article.title;
			if(!cover?.original_img_url)header.append(title, articleLabel(false)); else header.append(title);
			body.append(header);
			let preview = null;
			if(article.preview_text){preview = node('div', 'css-1jxf684', 'articlePreview'); preview.dir = 'auto'; preview.textContent = `${article.preview_text.trim()}...`; body.append(preview);}
			element.append(body); parent.append(element);
			const navigation = {element, kind: 'article', href: url};
			Object.assign(target, {element, cover: cover ? element.querySelector('[data-teb-part="articleCover"]') : null, title, preview, label: element.querySelector('[data-teb-part="articleLabel"]'), url, navigation});
			parts.navigation.push(navigation);
			const requestNavigation = event => {
				if(event.defaultPrevented || event.button !== 0 || doc.defaultView.getSelection()?.toString())return;
				event.preventDefault(); event.stopPropagation();
				element.dispatchEvent(new doc.defaultView.CustomEvent('teb:navigate', {bubbles: true, cancelable: true, detail: {...navigation, originalEvent: event}}));
			};
			element.addEventListener('click', requestNavigation);
			cleanups.push(() => element.removeEventListener('click', requestNavigation));
		}
		function articleEntityMap(contentState){
			const source = contentState.entityMap || contentState.entity_map || {};
			return Array.isArray(source) ? Object.fromEntries(source.map((entry, index) => [String(entry.key ?? index), entry])) : source;
		}
		function articleText(block, contentState){
			const element = doc.createDocumentFragment(), text = block.text || '';
			const ranges = [];
			for(const range of block.inlineStyleRanges || block.inline_style_ranges || [])ranges.push({from: range.offset, to: range.offset + range.length, style: String(range.style || '').toUpperCase()});
			for(const range of block.entityRanges || block.entity_ranges || [])ranges.push({from: range.offset, to: range.offset + range.length, entity: String(range.key)});
			const boundaries = new Set([0, text.length]);
			for(const range of ranges){boundaries.add(Math.max(0, range.from));boundaries.add(Math.min(text.length, range.to));}
			const points = [...boundaries].filter(value => value >= 0 && value <= text.length).sort((a, b) => a - b);
			const entityMap = articleEntityMap(contentState);
			for(let index = 0; index < points.length - 1; index++){
				const from = points[index], to = points[index + 1]; if(from === to)continue;
				const active = ranges.filter(range => range.from <= from && range.to >= to);
				const entityRange = active.find(range => range.entity != null), entity = entityRange ? entityMap[entityRange.entity]?.value || entityMap[entityRange.entity] : null;
				const data = entity?.data || {}, isLink = entity?.type === 'LINK' && safeUrl(data.url);
				const span = node(isLink ? 'a' : 'span', 'css-1jxf684'); span.textContent = text.substring(from, to);
				if(isLink){setLink(span, data.url); parts.navigation.push({element: span, kind: 'article-link', href: span.href});}
				if(active.some(range => range.style === 'BOLD'))span.style.fontWeight = '700';
				if(active.some(range => range.style === 'ITALIC'))span.style.fontStyle = 'italic';
				if(active.some(range => range.style === 'STRIKETHROUGH'))span.style.textDecoration = 'line-through';
				element.append(span);
			}
			return element;
		}
		function articleEntity(contentState, key){
			const map = articleEntityMap(contentState);
			return map[String(key)]?.value || map[String(key)] || null;
		}
		function articleTweetEmbed(tweetId, atomic){
			const frame = node('div', base, 'articleTweetEmbed');
			const fallback = node('a', 'css-1jxf684', 'articleTweetFallback');
			fallback.textContent = text('viewEmbeddedPost', 'View embedded post');
			setLink(fallback, tweetId ? `https://x.com/i/status/${encodeURIComponent(tweetId)}` : null);
			frame.append(fallback); atomic.append(frame);
			let nested = null;
			const setTweet = value => {
				nested?.dispose(); nested = null;
				if(value == null || typeof buildTweet !== 'function'){
					frame.replaceChildren(fallback);
					return null;
				}
				const depth = Number(options.articleEmbedDepth) || 0;
				if(depth >= 2){frame.replaceChildren(fallback);return null;}
				// 918427:tw → 778104.Ay は withActionsDisabled:false。
				nested = buildTweet(value, {...options, document: doc, displayMode: 'timeline', withActionsDisabled: false, articleEmbedDepth: depth + 1});
				nested.element.dataset.tebArticleEmbeddedTweet = tweetId || '';
				frame.replaceChildren(nested.element);
				return nested;
			};
			cleanups.push(() => {nested?.dispose();nested = null;});
			const entry = {type: 'tweet', tweetId, element: frame, fallback, link: fallback, setTweet, get view(){return nested;}};
			if(tweetId && articleEmbeddedTweets?.has(tweetId))setTweet(articleEmbeddedTweets.get(tweetId));
			return entry;
		}
		// 133173: Markdown token renderer。X本体はmarked lexerを利用するが、公開builderでは
		// 外部依存を必須にせず、同じ表示token（heading/list/table/code/link/strong/LaTeX）へ正規化する。
		function renderArticleLatex(tex, displayMode = false){
			const host = node('span', 'css-g5y9jx', displayMode ? 'articleLatexBlock' : 'articleLatexInline');
			host.dataset.testid = 'tex-block';
			const renderer = options.katex?.render || root.katex?.render;
			if(typeof renderer === 'function'){
				try{
					renderer(tex, host, {trust: false, output: 'mathml', displayMode, throwOnError: true});
					return host;
				}catch{}
			}
			// 133173:S / 608221:f と同じく、parse失敗時は式を失わず原文表示する。
			host.dataset.tebLatexFallback = 'true'; host.textContent = tex; return host;
		}
		function appendMarkdownInline(parent, source, disableLinks = false){
			const pattern = /(\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$|\\\([^\n]*?\\\)|\$(?:\\.|[^\\\n])*?\$|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|__([^_]+)__|`([^`]+)`)/g;
			let cursor = 0, match;
			while((match = pattern.exec(source))){
				if(match.index > cursor)parent.append(doc.createTextNode(source.slice(cursor, match.index)));
				const raw = match[0];
				if(raw.startsWith('\\[') || raw.startsWith('$$'))parent.append(renderArticleLatex(raw.slice(2, -2).trim(), true));
				else if(raw.startsWith('\\('))parent.append(renderArticleLatex(raw.slice(2, -2).trim(), false));
				else if(raw.startsWith('$'))parent.append(renderArticleLatex(raw.slice(1, -1).trim(), false));
				else if(match[2] != null){
					const href = safeUrl(match[3]);
					if(disableLinks || !href)parent.append(doc.createTextNode(match[2] === match[3] ? match[2] : `${match[2]} (${match[3] || ''})`));
					else{const anchor = node('a', 'css-1jxf684', 'articleMarkdownLink');anchor.textContent = match[2];setLink(anchor, href);parent.append(anchor);}
				}else if(match[4] != null || match[5] != null){const strong = node('strong', 'css-1jxf684');strong.textContent = match[4] ?? match[5];parent.append(strong);}
				else{const code = node('code', 'css-1jxf684', 'articleMarkdownCodeSpan');code.textContent = match[6] || '';parent.append(code);}
				cursor = pattern.lastIndex;
			}
			if(cursor < source.length)parent.append(doc.createTextNode(source.slice(cursor)));
		}
		function renderArticleMarkdown(source, disableLinks = false){
			const rootElement = node('div', base, 'articleMarkdown');
			const lines = String(source || '').replace(/\r\n?/g, '\n').split('\n');
			for(let index = 0; index < lines.length;){
				const line = lines[index];
				if(/^```/.test(line)){
					const language = line.slice(3).trim(), buffer = []; index++;
					while(index < lines.length && !/^```/.test(lines[index]))buffer.push(lines[index++]);
					if(index < lines.length)index++;
					const pre = node('pre', base, 'articleMarkdownCode'), code = node('code', 'css-1jxf684');
					if(language)code.dataset.language = language; code.textContent = buffer.join('\n'); pre.append(code); rootElement.append(pre); continue;
				}
				const tableNext = index + 1 < lines.length && /^\s*\|?\s*:?-{3,}/.test(lines[index + 1]);
				if(line.includes('|') && tableNext){
					const tableWrap = node('div', base, 'articleMarkdownTableContainer'), table = doc.createElement('table');
					const rows = [line]; let next = index + 2;
					while(next < lines.length && lines[next].includes('|'))rows.push(lines[next++]);
					rows.forEach((row, rowIndex) => {const tr=doc.createElement('tr');row.replace(/^\s*\||\|\s*$/g,'').split('|').forEach(cell=>{const el=doc.createElement(rowIndex?'td':'th');appendMarkdownInline(el,cell.trim(),disableLinks);tr.append(el);});table.append(tr);});
					tableWrap.append(table); rootElement.append(tableWrap); index = next; continue;
				}
				const listMatch = line.match(/^\s*(?:(\d+)\.|[-*+])\s+(.+)$/);
				if(listMatch){
					const ordered = !!listMatch[1], list = doc.createElement(ordered ? 'ol' : 'ul'); if(ordered)list.start = Number(listMatch[1]); list.dataset.tebPart = 'articleMarkdownList';
					while(index < lines.length){const item=lines[index].match(/^\s*(?:(\d+)\.|[-*+])\s+(.+)$/);if(!item || !!item[1] !== ordered)break;const li=doc.createElement('li');appendMarkdownInline(li,item[2],disableLinks);list.append(li);index++;}rootElement.append(list);continue;
				}
				const heading = line.match(/^(#{1,6})\s+(.+)$/), blockLatex = line.match(/^\s*(?:\$\$|\\\[)([\s\S]*?)(?:\$\$|\\\])\s*$/);
				if(blockLatex)rootElement.append(renderArticleLatex(blockLatex[1].trim(), true));
				else if(heading){const h=doc.createElement(`h${Math.min(heading[1].length,6)}`);h.dataset.tebPart='articleMarkdownHeading';appendMarkdownInline(h,heading[2],disableLinks);rootElement.append(h);}
				else if(!line.trim())rootElement.append(doc.createElement('br'));
				else{const paragraph=node('p','css-1jxf684','articleMarkdownParagraph');appendMarkdownInline(paragraph,line,disableLinks);rootElement.append(paragraph);}
				index++;
			}
			return rootElement;
		}
		// 918427:tT/tw + 834718:cE。Draft本文を通常DOMへ適合する。
		function renderArticleBody(article, parent, target){
			const contentState = article.content_state;
			if(!contentState?.blocks?.length)return false;
			const root = node('section', base, 'articleReadView'); root.setAttribute('role', 'article'); root.dataset.testid = 'twitterArticleReadView';
			if(article.cover_media?.media_info?.original_img_url){
				const info = article.cover_media.media_info, cover = node('div', base, 'articleReadCover');
				const view = image({url: info.original_img_url, width: info.original_img_width || 0, height: info.original_img_height || 0}, text('articleCoverImage', 'Article cover image'));
				Object.assign(view.style, {position: 'absolute', inset: '0', width: '100%', height: '100%'}); cover.append(view); root.append(cover); target.cover = cover;
			}
			const content = node('div', base, 'articleReadContent'), title = node('h1', 'css-1jxf684', 'articleReadTitle');
			title.textContent = article.title; title.dir = 'auto'; content.append(title);
			const body = node('div', base, 'articleReadBody'); body.dataset.testid = 'twitterArticleRichTextView';
			const blocks = [], media = [], embeds = [];
			let list = null, listType = null;
			const finishList = () => {list = null;listType = null;};
			for(const block of contentState.blocks){
				const type = block.type || 'unstyled';
				if(type === 'unordered-list-item' || type === 'ordered-list-item'){
					const wanted = type === 'ordered-list-item' ? 'ol' : 'ul';
					if(!list || listType !== wanted){list = node(wanted, base, 'articleList');listType = wanted;body.append(list);}
					const item = node('li', 'css-1jxf684', 'articleListItem'); item.append(articleText(block, contentState)); list.append(item); blocks.push(item); continue;
			}
			finishList();
			if(type === 'atomic'){
				const key = block.entityRanges?.[0]?.key ?? block.entity_ranges?.[0]?.key, entity = articleEntity(contentState, key);
				if(!entity)continue;
				const data = entity.data || {}, atomic = node('div', base, 'articleAtomic'); atomic.dataset.tebArticleEntity = entity.type || '';
				if(entity.type === 'DIVIDER'){atomic.append(node('hr', base, 'articleDivider'));}
				else if(entity.type === 'MEDIA'){
					for(const entry of data.mediaItems || data.media_items || []){
						const mediaId = entry.mediaId || entry.media_id, source = (article.media_entities || []).find(value => (value.media_id || value.id) === mediaId), info = source?.media_info;
						if(info?.__typename !== 'ApiImage' || !info.original_img_url)continue;
						const frame = node('div', base, 'articleMedia');
						const view = image({url: info.original_img_url, width: info.original_img_width || 0, height: info.original_img_height || 0}, data.caption || text('articleImage', 'Article image')); frame.append(view); atomic.append(frame); media.push({id: mediaId, element: frame, image: view.tebImage});
					}
					if(data.caption){const caption = node('div', 'css-1jxf684', 'articleCaption');caption.textContent = data.caption;atomic.append(caption);}
				}else if(entity.type === 'TWEET'){
					const tweetId = data.tweetId || data.tweet_id; embeds.push(articleTweetEmbed(tweetId, atomic));
				}else if(entity.type === 'LINK'){
					const link = node('a', 'css-1jxf684', 'articleLinkCard'); link.textContent = data.url || ''; setLink(link, data.url); atomic.append(link);
				}else if(entity.type === 'MARKDOWN'){
					atomic.append(renderArticleMarkdown(data.markdown || '', !!options.disableArticleMarkdownLinks));
				}else if(entity.type === 'LATEX'){
					atomic.append(renderArticleLatex(block.text || data.latex || '', true));
				}
				if(atomic.childNodes.length){body.append(atomic);blocks.push(atomic);} continue;
			}
			const tags = {'header-one':'h2','header-two':'h3','blockquote':'blockquote'}, blockElement = node(tags[type] || 'p', 'css-1jxf684', `articleBlock-${type}`);
			blockElement.append(articleText(block, contentState)); body.append(blockElement); blocks.push(blockElement);
			}
			content.append(body); root.append(content); parent.append(root);
			Object.assign(target, {element: root, body, title, blocks, media, embeds, full: true, url: `https://x.com/i/article/${encodeURIComponent(article.rest_id)}`});
			return true;
		}
		// 548812の非carousel経路。Reactのrow/columnを同じ入れ子のDOMへ移す。
		function arrangeCarousel(group, target, compact){
			const children = Array.from(group.children);
			const layout = carouselLayout(target.map(item => item.type === 'photo' ? {type: 'photo', ...item.original} : item.props), compact);
			group.dataset.tebLayout = 'carousel';
			group.dataset.tebCompact = String(compact);
			// 963893: ScrollSnapの外枠はnavigation/live、スクロールリストはtablist。
			group.setAttribute('role', 'navigation');
			group.setAttribute('aria-live', 'polite');
			group.setAttribute('aria-label', text('attachedMedia', 'Attached media'));
			group.replaceChildren();
			const sizer = node('div', base, 'mediaSizer');
			const round = (value, digits) => Math.round(value * 10 ** digits) / 10 ** digits;
			const percent = round(100 * layout.heightRatio, 4), offset = round(layout.heightOffset, 3);
			sizer.style.paddingBottom = offset === 0 ? `${percent}%` : `calc(${percent}% ${offset < 0 ? '-' : '+'} ${Math.abs(offset)}px)`;
			const scroller = node('div', `${base} r-18u37iz r-9aw3ui`, 'mediaScroller');
			scroller.tabIndex = 0;
			scroller.setAttribute('role', 'tablist');
			const focal = !compact && options.displayMode === 'detail';
			const start = compact ? 12 : focal ? 16 : 64, end = compact ? 12 : 16;
			scroller.style.setProperty('--teb-scroll-start', `${start}px`);
			scroller.style.setProperty('--teb-scroll-end', `${end}px`);
			const cells = children.map((child, index) => {
				const cell = node('div', `${base} r-1kqtdi0 r-1xfd6ze r-1phboty r-rs99b7 r-1udh08x`, 'mediaCarouselCell');
				cell.setAttribute('role', 'presentation');
				cell.style.aspectRatio = String(layout.itemAspectRatios[index]);
				cell.append(child); scroller.append(cell); return cell;
			});
			sizer.append(scroller); group.append(sizer);
			const bars = [];
			if(layout.overflowsWidth && !compact && !focal && options.mediaPageIndicator !== false){
				const indicator = node('div', '', 'mediaIndicator');
				indicator.setAttribute('aria-hidden', 'true');
				for(const cell of cells){ const bar = node('span'); bars.push(bar); indicator.append(bar); }
				group.prepend(indicator);
			}
			const previous = node('button', '', 'mediaPrevious'), next = node('button', '', 'mediaNext');
			previous.type = next.type = 'button';
			function carouselArrow(direction){
				const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('aria-hidden', 'true');
				const path = doc.createElementNS(svg.namespaceURI, 'path');
				// ログイン版実DOMのArrowLeft・ArrowRight icon。
				path.setAttribute('d', direction === 'previous' ? 'M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z' : 'M12.957 4.54L20.414 12l-7.457 7.46-1.414-1.42L16.586 13H3v-2h13.586l-5.043-5.04 1.414-1.42z');
				svg.append(path); return svg;
			}
			previous.append(carouselArrow('previous')); next.append(carouselArrow('next'));
			previous.setAttribute('aria-label', text('previousImage', 'Previous image')); next.setAttribute('aria-label', text('nextImage', 'Next image'));
			sizer.append(previous, next);
			// 963893のcenter scroll/キーボード操作をnative scrollへ適合。API通信なし。
			let focused = 0, requestedIndex = null, settleTimer = 0;
			function measuredIndex(){
				const box = scroller.getBoundingClientRect(), center = (box.left + box.right) / 2;
				let nearest = 0, distance = Infinity;
				cells.forEach((cell, index) => {
					const rect = cell.getBoundingClientRect(), nextDistance = Math.abs((rect.left + rect.right) / 2 - center);
					if(nextDistance < distance){distance = nextDistance; nearest = index;}
				});
				return nearest;
			}
			function goTo(index){
				focused = Math.max(0, Math.min(cells.length - 1, index));
				requestedIndex = focused;
				doc.defaultView.clearTimeout(settleTimer);
				settleTimer = doc.defaultView.setTimeout(() => {requestedIndex = null; focused = measuredIndex(); update();}, 500);
				previous.hidden = focused === 0;
				next.hidden = focused === cells.length - 1;
				const behavior = doc.defaultView.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
				cells[focused].firstElementChild?.focus({preventScroll: true});
				cells[focused].scrollIntoView({behavior, block: 'nearest', inline: 'center'});
			}
			// 963893:_goToClosestOffScreen。手動スクロール後も直近の画面外要素を選ぶ。
			function closestOffscreen(direction){
				const rtl = doc.defaultView.getComputedStyle(scroller).direction === 'rtl';
				const bounds = scroller.getBoundingClientRect();
				const ordered = direction === 'previous' ? cells : [...cells].reverse();
				let index = focused;
				if(rtl !== (direction === 'next')){
					const found = ordered.findIndex(cell => cell.getBoundingClientRect().right < bounds.right);
					if(found !== -1)index = rtl ? found - 1 : cells.length - found;
				}else{
					const found = ordered.findIndex(cell => cell.getBoundingClientRect().left > bounds.left);
					if(found !== -1)index = rtl ? cells.length - found : found - 1;
				}
				if(index === focused)index += direction === 'next' ? 1 : -1;
				goTo(index);
			}
			function update(){
				const travel = scroller.scrollWidth - scroller.clientWidth;
				const measured = measuredIndex();
				if(requestedIndex == null || measured === requestedIndex){
					focused = measured;
					if(measured === requestedIndex){requestedIndex = null; doc.defaultView.clearTimeout(settleTimer);}
				}
				const position = travel > 0 ? Math.min(1, Math.abs(scroller.scrollLeft) / travel) * (cells.length - 1) : focused;
				bars.forEach((bar, index) => {const near = 1 - Math.min(1, Math.abs(position - index)); bar.style.opacity = String(.35 + .65 * near); bar.style.width = `${12 + 10 * near}px`;});
				const box = scroller.getBoundingClientRect();
				const first = cells[0].getBoundingClientRect(), last = cells.at(-1).getBoundingClientRect();
				previous.hidden = first.left >= box.left - 1 && first.right <= box.right + 1;
				next.hidden = last.left >= box.left - 1 && last.right <= box.right + 1;
			}
			// smooth scroll完了前の連打でも、DOM位置ではなく予約済みindexから進める。
			const onPrevious = event => {event.stopPropagation();if(previous.hidden)return;goTo(focused - 1);};
			const onNext = event => {event.stopPropagation();if(next.hidden)return;goTo(focused + 1);};
			const onKey = event => {
				if(event.target.isContentEditable || event.target.closest('input, textarea, select, video'))return;
				if(event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')return;
				event.preventDefault(); event.stopPropagation();
				const rtl = doc.defaultView.getComputedStyle(scroller).direction === 'rtl';
				const delta = (event.key === 'ArrowRight') !== rtl ? 1 : -1;
				goTo((focused + delta + cells.length) % cells.length);
			};
			// 963893:_handleItemClick は選択したセルを現在位置として記録する。
			const cellClicks = cells.map((cell,index) => {const handler = () => goTo(index);cell.addEventListener('click',handler);return [cell,handler];});
			previous.addEventListener('click', onPrevious); next.addEventListener('click', onNext);
			scroller.addEventListener('scroll', update, {passive: true}); scroller.addEventListener('keydown', onKey);
			const observer = new doc.defaultView.ResizeObserver(update); observer.observe(scroller);
			cleanups.push(() => {doc.defaultView.clearTimeout(settleTimer); observer.disconnect(); previous.removeEventListener('click', onPrevious); next.removeEventListener('click', onNext); scroller.removeEventListener('scroll', update); scroller.removeEventListener('keydown', onKey);for(const [cell,handler] of cellClicks)cell.removeEventListener('click',handler);});
			parts.carousels.push({element: group, scroller, cells, previous, next, layout});
		}
		function arrangeMedia(group, condensed, target, compact){
			const cells = Array.from(group.children);
			if(!cells.length){ group.remove(); return; }
			group.dataset.tebMediaCount = String(cells.length);
			if(cells.length === 1)return;
			if(!condensed && options.mediaLayout !== 'grid'){ arrangeCarousel(group, target, compact); return; }
			group.dataset.tebLayout = 'grid';
			group.style.aspectRatio = String(condensed ? 1 : 16 / 9);
			group.replaceChildren();
			function branch(indices, column = false){
				const row = node('div', `${base} r-16y2uox r-1iusvr4${column ? '' : ' r-18u37iz'}`, 'mediaGridBranch');
				for(const index of indices){
					const cell = node('div', `${base} r-16y2uox r-1iusvr4`, 'mediaGridCell');
					cell.append(cells[index]);
					row.append(cell);
				}
				return row;
			}
			if(cells.length === 2)group.append(branch([0, 1]));
			else if(cells.length === 3){
				const row = branch([0]);
				row.append(branch([1, 2], true));
				group.append(row);
			}else{
				const split = cells.length === 6 ? 3 : 2;
				group.append(branch(cells.slice(0, split).map((_, i) => i)), branch(cells.slice(split).map((_, i) => i + split)));
			}
		}
		function renderMedia(tweet, parent, target, condensed = false, compact = false, mediaOverride){
			const media = mediaOverride || tweet.extended_entities?.media || [];
			const result = {element: null, metadata: null, caption: null, tags: null, attribution: null, taggedUsers: []};
			if(!media.length)return result;
			const targetStart = target.length;
			const group = node('div', `${base} r-9aw3ui`, 'mediaGroup');
			result.element = group;
			parent.append(group);
			for(const item of media){
				// 548812:maxGroupSize。未表示分の本文リンクはmain側で残す。
				if((condensed || options.mediaLayout === 'grid') && target.length >= 6)break;
				const warning = item.sensitive_media_warning || item.ext_sensitive_media_warning;
				if(tweet.possibly_sensitive || Object.values(warning || {}).some(Boolean) || (item.ext_media_availability?.status && item.ext_media_availability.status.toLowerCase() !== 'available')){
					notice('制限付きメディアのreveal UIは未移植です。Xで確認してください。');
					continue;
				}
				// 879747:_getMediaMemoizedの前提条件。
				if(!item.expanded_url)continue;
				if(item.type === 'photo'){
					const picture = originalImage(item);
					if(!picture || !safeUrl(picture.url))continue;
					const a = link('', item.expanded_url, 'media');
					a.classList.add('teb-photo');
					const alt = item.ext_alt_text || tweet.post_image_description || text('image', 'Image');
					// 837030はlayoutが決まるまで高解像度版を選ばない。初期URLを即取得しない。
					const img = image({url:null,width:picture.width,height:picture.height}, alt);
					// 837030のonLayoutをResizeObserverに適合。パネル幅変更にも追従する。
					const layer = node('div', base);
					Object.assign(layer.style, {position: 'absolute', inset: '0', width: 'auto', height: 'auto', aspectRatio: 'auto', overflow: 'hidden', zIndex: '1'});
					const imageView = img.tebImage;
					const previewUrl = safeUrl(selectPreviewUrl(picture));
					let preview = null;
					if(previewUrl){
						preview = node('div', base, 'mediaPreview');preview.setAttribute('aria-hidden','true');
						Object.assign(preview.style,{position:'absolute',inset:'0',zIndex:'0',backgroundImage:`url(${JSON.stringify(previewUrl)})`,backgroundPosition:'center',backgroundSize:'cover',filter:'blur(4px)',transform:'scale(1.1)'});
						img.append(preview);layer.style.opacity = '0';
					}
					layer.append(imageView.background, imageView.img);
					img.append(layer);
					// 共通画像CSSの直下指定を保つため、この内部層も画像所有者とする。
					layer.dataset.tebImage = 'true';
					const updateCrop = () => {
						const layout = {width: img.clientWidth, height: img.clientHeight};
						if(!layout.width || !layout.height)return;
						Object.assign(layer.style, imageCrop(picture, layout, item.original_info?.focus_rects));
						if(options.mediaPreviewMode === true){imageView.setSource(null,alt);img.dataset.tebPreviewMode = 'true';return;}
						imageView.setSource(selectImageUrl(layout, picture, doc.defaultView.devicePixelRatio, options.dataSaver === true), alt);
						if(preview)layer.style.opacity = imageView.element.dataset.tebImageState === 'loaded' ? '1' : '0';
					};
					if(preview){
						const previewObserver = new doc.defaultView.MutationObserver(() => {
							const loaded = imageView.element.dataset.tebImageState === 'loaded';
							layer.style.opacity = loaded ? '1' : '0';preview.hidden = loaded;
						});
						previewObserver.observe(imageView.element,{attributes:true,attributeFilter:['data-teb-image-state']});
						cleanups.push(() => previewObserver.disconnect());
					}
					const observer = new doc.defaultView.ResizeObserver(updateCrop);
					observer.observe(img);
					cleanups.push(() => observer.disconnect());
					imageView.cropLayer = layer;
					a.append(img);
					group.append(a);
					imageView.preview = preview;
					target.push({type: 'photo', id: item.id_str, element: img.tebImage.img, image: img.tebImage, link: a, original: picture, cropCandidates: item.original_info?.focus_rects});
				}else if(['video', 'animated_gif', 'vine'].includes(item.type)){
					const props = videoProps(item);
					const video = node('video', 'r-13qz1uu');
					video.controls = true;
					video.playsInline = true;
					video.preload = 'none';
					video.setAttribute('aria-label', item.ext_alt_text || tweet.post_video_description || text('video', 'Video'));
					if(safeUrl(props.poster?.url))video.poster = safeUrl(props.poster.url);
					// 配信順序を保持。最高bitrateは原版ではdownload用であり再生選択に流用しない。
					for(const variant of props.source.variants){
						if(!safeUrl(variant.url) || !video.canPlayType(variant.content_type || ''))continue;
						const source = doc.createElement('source');
						source.src = safeUrl(variant.url);
						source.type = variant.content_type;
						video.append(source);
					}
					if(item.type === 'animated_gif'){ video.muted = true; video.loop = true; }
					group.append(video);
					target.push({type: item.type, id: item.id_str, element: video, props, variants: props.source.variants});
					if(!video.children.length)notice('この動画にはブラウザで再生できるsourceがありません。Xで確認してください。');
				}else notice(`未対応メディア: ${item.type}`);
			}
			arrangeMedia(group, condensed, target, compact);
			// builder生成中はtweet全体がまだdocumentへ接続されていない。全item除外時だけarrangeMediaがgroupを外す。
			if(!group.parentElement)return result;
			// 879747:_renderMediaMetadata。callerが有効化した場合のみ、先頭mediaの情報を枠直後へ置く。
			const info = media[0]?.additional_media_info;
			if(options.displayMediaMetadata === true && (info?.title || info?.description)){
				const metadata = node('div', base, 'mediaMetadata');
				if(info.title){const title = node('div', 'css-1jxf684', 'mediaMetadataTitle');title.textContent = info.title;metadata.append(title);}
				if(info.description){const description = node('div', 'css-1jxf684', 'mediaMetadataDescription');description.textContent = info.description;metadata.append(description);}
				parent.append(metadata); result.metadata = metadata;
			}
			// 879747:_renderMediaCaption。通常API外から渡されるpropだが、保持済みdataにも対応する。
			const captionValue = options.mediaCaption ?? tweet.media_caption;
			if(captionValue != null && String(captionValue)){
				const caption = node('div', 'css-1jxf684', 'mediaCaption');
				caption.id = `caption-${tweet.id_str || 'media'}`; caption.textContent = String(captionValue);
				parent.append(caption); result.caption = caption;
				for(const item of target.slice(targetStart))if(item.image?.img)item.image.img.setAttribute('aria-describedby', caption.id);
			}
			// 917353 / 938845。タグは既定で表示し、tweet permalinkがある場合だけmedia_tagsへリンク。
			const taggedUsers = mergeTaggedUsers(media);
			result.taggedUsers = taggedUsers;
			if(options.displayMediaTags !== false && taggedUsers.length && tweet.permalink){
				const names = taggedUsers.map(user => String(user.user_id) === String(options.viewerId) ? text('mediaTaggedSelf', 'You') : user.name).filter(Boolean);
				if(names.length){
					const tags = link(new Intl.ListFormat(options.locale, {style: 'long', type: 'conjunction'}).format(names), `${tweet.permalink}/media_tags`, 'media-tags');
					tags.dataset.tebPart = 'mediaTags'; parent.append(tags); result.tags = tags;
				}
			}
			// 879747:_renderMediaAttribution。先頭mediaのsource_userだけを使う。
			const source = info?.source_user;
			if(options.displayMediaAttribution !== false && source?.name && source?.screen_name){
				const href = media[0].source_status_id_str ? `https://x.com/i/status/${encodeURIComponent(media[0].source_status_id_str)}` : `https://x.com/${encodeURIComponent(source.screen_name)}`;
				const attribution = node('div', 'css-1jxf684', 'mediaAttribution');
				const sourceLink = link(source.name, href, 'media-attribution');
				attribution.append(text('mediaSourcePrefix', 'From '), sourceLink);
				parent.append(attribution); result.attribution = {element: attribution, link: sourceLink, user: source};
			}
			return result;
		}
		// 398338:_getInlineMediaSpec。ID解決後は通常のRichContent media rendererへ1件だけ渡す。
		function renderInlineMedia(mediaId){
			if(inlineMediaViews.has(mediaId))return inlineMediaViews.get(mediaId);
			const item = (model.extended_entities?.media || []).find(media => media.id_str === mediaId);
			if(!item)return null;
			const wrapper = node('div', `${base} r-18u37iz`, 'inlineMedia');
			Object.assign(wrapper.style, {display: 'flex', marginTop: '12px', marginBottom: '12px', width: '100%'});
			const mediaInfo = renderMedia(model, wrapper, parts.inlineMedia, false, false, [item]);
			wrapper.tebMediaInfo = mediaInfo;
			inlineMediaViews.set(mediaId, wrapper);
			return wrapper;
		}
		function renderPoll(card, parent){
			const element = node('section', `${base} r-9aw3ui`, 'poll');
			element.dataset.testid = card.type === 'image_poll' ? 'cardImagePoll' : 'cardPoll';
			parent.append(element);
			const state = pollResults(card, options.viewerId != null && String(options.viewerId) === String(model.user.id_str), options.imagePollSortByVoteCount === true);
			if(card.type === 'image_poll' && !state.showResults && options.imagePollShuffle === true)state.choices = pollChoiceOrder(state.choices, options.viewerId, model.id_str);
			element.dataset.tebPollType = card.type;
			element.dataset.tebPollResults = String(state.showResults);
			const list = node('div', `${base} r-9aw3ui`, 'pollChoices');
			const imageCarousel = card.type === 'image_poll' && !state.showResults;
			list.setAttribute('role', state.showResults || imageCarousel ? 'list' : 'radiogroup');
			list.setAttribute('aria-label', text('poll', 'Poll'));
			const carousel = imageCarousel ? node('div', base, 'pollCarousel') : null;
			if(carousel){carousel.setAttribute('role','group');carousel.setAttribute('aria-roledescription','carousel');carousel.setAttribute('aria-label',text('poll','Poll'));carousel.tabIndex=0;carousel.append(list);element.append(carousel);}
			else element.append(list);
			const poll = {element, cardId: card.id, tweetId: model.id_str, model: card, choices: [], submitButton: null};
			parts.poll = poll;
			function renderChoiceLabel(target,label){
				for(const segment of options.nativeEmoji ? [{type:'text',text:label}] : textPort.twemojiSegments(label)){
					if(segment.type==='emoji'){const emoji=node('img','r-4qtqp9 r-dflpy8 r-k4bwe5 r-1kpi4qh r-pp5qcn r-h9hxbl','emoji');emoji.alt=segment.text;emoji.draggable=false;emoji.src=segment.url;target.append(emoji);}
					else target.append(doc.createTextNode(segment.text));
				}
			}
			for(const choice of state.choices){
				// 153256:re/tR/tB/ti。翻訳配列はshuffle・得票順より前のchoice順で参照する。
				const originalIndex=card.choices.findIndex(item=>item.index===choice.index);
				const labelText=options.pollTranslations?.[originalIndex] || choice.cta;
				const row = node('div', base, 'pollChoice');
				if(state.showResults || imageCarousel)row.setAttribute('role', 'listitem');
				list.append(row);
				if(choice.image){
					const a = link('', model.permalink ? `${model.permalink}/photo/${choice.index}` : null, 'pollImage');
					contextLinks.push({element: a, suffix: `/photo/${choice.index}`});
					a.append(image(choice.image, labelText));
					row.append(a);
				}
				let button = null;
				if(state.showResults){
					for(const cls of ['r-18u37iz', 'r-1awozwy', 'r-1wtj0ep'])row.classList.add(cls, `teb-${cls}`);
					const bar = node('div', '', 'pollBar');
					bar.style.width = choice.barWidth;
					bar.setAttribute('aria-hidden', 'true');
					row.append(bar);
					const label = node('span', 'css-1jxf684');
					renderChoiceLabel(label,labelText);
					if(choice.isSelected)label.append(doc.createTextNode(' ✓'));
					if(choice.isWinner){ label.classList.add('r-b88u0q', 'teb-r-b88u0q'); row.dataset.tebWinner = 'true'; }
					const percentage = node('span', 'css-1jxf684');
					percentage.textContent = `${choice.percentage}%`;
					if(choice.isWinner)percentage.classList.add('r-b88u0q', 'teb-r-b88u0q');
					row.append(label, percentage);
				}else{
					button = node('button', 'css-1jxf684 r-13qz1uu', 'pollVote');
					button.type = 'button';
					button.setAttribute('role', 'radio');
					button.setAttribute('aria-checked', 'false');
					renderChoiceLabel(button,labelText);
					button.disabled = !model.id_str || !card.id || options.votingDisabled === true || options.withActionsDisabled === true;
					row.append(button);
				}
				poll.choices.push({index: choice.index, element: row, button, result: choice, label: labelText});
			}
			if(carousel){
				// 153256:tB → 112167:L。クリック時の予約indexは連打中も同期的に進める。
				const nav=node('div',base,'pollCarouselNav');
				function arrow(part,path){const button=node('button','css-1jxf684',part);button.type='button';const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');const shape=doc.createElementNS('http://www.w3.org/2000/svg','path');shape.setAttribute('d',path);svg.append(shape);button.append(svg);return button;}
				const previous=arrow('pollCarouselPrevious','M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z');
				const next=arrow('pollCarouselNext','M12.957 4.54L20.414 12l-7.457 7.46-1.414-1.42L16.586 13H3v-2h13.586l-5.043-5.04 1.414-1.42z');
				previous.setAttribute('aria-label',text('previous','Previous'));next.setAttribute('aria-label',text('next','Next'));
				nav.append(previous,next);carousel.append(nav);
				let currentSlide=0;
				function refreshNavigation(){const visible=Math.max(1,Math.floor((list.clientWidth+12)/252));previous.hidden=currentSlide===0;next.hidden=currentSlide+visible>=poll.choices.length;carousel.setAttribute('aria-label',`${text('poll','Poll')} · ${currentSlide+1}/${poll.choices.length}`);}
				function goToSlide(index){const target=Math.max(0,Math.min(poll.choices.length-1,index));if(target===currentSlide)return;currentSlide=target;poll.choices[target].element.scrollIntoView({behavior:'smooth',block:'nearest',inline:'start'});refreshNavigation();}
				previous.addEventListener('click',event=>{event.stopPropagation();goToSlide(currentSlide-1);});
				next.addEventListener('click',event=>{event.stopPropagation();goToSlide(currentSlide+Math.max(1,Math.floor((list.clientWidth+12)/252)));});
				carousel.addEventListener('keydown',event=>{if(event.key!=='ArrowLeft'&&event.key!=='ArrowRight')return;if(event.target.closest('input,textarea,[contenteditable="true"]'))return;event.preventDefault();const rtl=doc.defaultView.getComputedStyle(list).direction==='rtl';goToSlide(currentSlide+((event.key==='ArrowRight')!==rtl?1:-1));});
				let settleTimer;
				list.addEventListener('scroll',()=>{doc.defaultView.clearTimeout(settleTimer);settleTimer=doc.defaultView.setTimeout(()=>{const first=poll.choices[0]?.element;if(!first)return;const firstRect=first.getBoundingClientRect(),listRect=list.getBoundingClientRect(),rtl=doc.defaultView.getComputedStyle(list).direction==='rtl';const offset=Math.abs(rtl?firstRect.right-listRect.right:firstRect.left-listRect.left);currentSlide=Math.max(0,Math.min(poll.choices.length-1,Math.round(offset/252)));refreshNavigation();},120);});
				const observer=typeof doc.defaultView.ResizeObserver==='function'?new doc.defaultView.ResizeObserver(refreshNavigation):null;observer?.observe(list);
				cleanups.push(()=>{doc.defaultView.clearTimeout(settleTimer);observer?.disconnect();});
				poll.carousel={element:carousel,scroller:list,previous,next,cells:poll.choices.map(choice=>choice.element),goToSlide,refreshNavigation,get currentSlide(){return currentSlide;}};
				refreshNavigation();
			}
			const status = node('div', 'css-1jxf684 r-1s2bzr4');
			status.dataset.tebPart = 'pollStatus';
			poll.status = status;
			function refreshStatus(){
				const remaining = pollTimeLeft(card.endDatetimeUtc, options.now ?? Date.now());
				const locale = options.locale;
				const duration = remaining ? new Intl.NumberFormat(locale, {style: 'unit', unit: remaining.unit, unitDisplay: 'long'}).format(remaining.value) : '';
				const formattedVotes = new Intl.NumberFormat(locale).format(card.totalVotes);
				const votes = text('pollVotes', `${formattedVotes} ${card.totalVotes === 1 ? 'vote' : 'votes'}`, [], {formattedCount: formattedVotes});
				const label = card.isFinal ? text('pollEnded', 'Final results') : duration ? text('pollTimeLeft', `${duration} left`, {formattedCount: duration}) : '';
				status.textContent = `${votes}${label ? ' · ' + label : ''}`;
			}
			refreshStatus();
			poll.refreshStatus = refreshStatus;
			// 通常DOMの更新アダプター。投票結果を取得する通信は行わない。
			if(!card.isFinal && options.now == null){
				const timer = doc.defaultView.setInterval(refreshStatus, 60000);
				cleanups.push(() => doc.defaultView.clearInterval(timer));
			}
			element.append(status);
			if(typeof options.renderPollTranslationFeedback==='function'){
				const feedback=options.renderPollTranslationFeedback({poll,document:doc});
				if(feedback instanceof doc.defaultView.Node){element.append(feedback);poll.translationFeedback=feedback;}
			}
			// 6687:SのcomponentsはPOLL→MEDIA。image_originalがあればvideoより優先。
			if(card.image)element.append(image(card.image, ''));
			else if(card.stream){
				const video=node('video',base,'pollVideo');
				video.controls=true;video.playsInline=true;video.preload='metadata';
				const poster=safeUrl(card.playerImage?.url);
				if(poster)video.poster=poster;
				if(Number.isFinite(card.playerAspectRatio)&&card.playerAspectRatio>0)video.style.aspectRatio=String(card.playerAspectRatio);
				element.append(video);
				let disposedVideo=false,pendingResolve=null;
				const controller=new AbortController();
				function setSource(value){
					if(disposedVideo)return false;
					const candidates=Array.isArray(value)?value:[value];
					const selected=candidates.map(item=>typeof item==='string'?{url:item}:item).find(item=>{
						if(!item||!safeUrl(item.url))return false;
						const type=item.contentType||item.type||'';
						return !type||/mp4/i.test(type)||/mpegurl/i.test(type)&&!!video.canPlayType(type);
					});
					if(!selected)return false;
					video.src=safeUrl(selected.url);
					video.load();
					poll.video.source={url:video.src,contentType:selected.contentType||selected.type||''};
					return true;
				}
				function requestSource(){
					if(disposedVideo)return Promise.resolve(false);
					if(pendingResolve)return pendingResolve;
					const detail={vmapUrl:card.stream,contentId:card.playerContentId,durationMs:card.playerDurationMs,poster,variants:card.playerHlsUrl?[{url:card.playerHlsUrl,contentType:'application/x-mpegURL'}]:[],setSource,signal:controller.signal};
					if(typeof options.resolveVmap==='function'){
						pendingResolve=Promise.resolve().then(()=>options.resolveVmap(detail)).then(source=>source?setSource(source):false).finally(()=>{pendingResolve=null;});
						return pendingResolve;
					}
					video.dispatchEvent(new doc.defaultView.CustomEvent('teb:resolve-vmap',{bubbles:true,cancelable:true,detail}));
					return Promise.resolve(!!poll.video.source);
				}
				poll.video={element:video,vmapUrl:card.stream,contentId:card.playerContentId,durationMs:card.playerDurationMs,poster,source:null,setSource,requestSource};
				if(card.playerHlsUrl)setSource({url:card.playerHlsUrl,contentType:'application/x-mpegURL'});
				if(typeof options.resolveVmap==='function'&&!poll.video.source)requestSource().catch(error=>{if(!disposedVideo)video.dispatchEvent(new doc.defaultView.CustomEvent('teb:vmap-error',{bubbles:true,detail:{error,vmapUrl:card.stream}}));});
				cleanups.push(()=>{disposedVideo=true;controller.abort();video.pause();video.removeAttribute('src');video.load();});
			}
		}
		function renderCard(raw, parent){
			// 6687: 旧newsletterカードはshouldRenderCard:falseで、未対応表示ではない。
			if(['3337203208:newsletter_issue','3337203208:newsletter_publication'].includes((raw?.legacy || raw)?.name))return;
			const card = convertCard(raw, options);
			if(!card){ if(raw)notice('未対応カード、表示条件未成立、または必要なbindingが不足しています。'); return; }
			if(card.type === 'poll' || card.type === 'image_poll'){ renderPoll(card, parent); return; }
			const a = link('', card.url);
			for(const cls of `${base} ${border}`.split(' '))a.classList.add(cls, `teb-${cls}`);
			a.dataset.tebPart = 'card';
			a.dataset.testid = 'card.wrapper';
			a.dataset.tebSize = card.size;
			if(card.image){
				const img = image(card.image, '');
				img.style.aspectRatio = card.size === 'large' ? String(card.aspectRatio) : '1';
				a.append(img);
			}
			if(card.size === 'large'){
				if(card.title){
					const overlay = node('div', base, 'cardTitleOverlay');
					const label = node('div', base, 'cardTitleLabel');
					const title = node('span', 'css-1jxf684', 'cardTitle');
					title.textContent = card.title; label.append(title); overlay.append(label); a.append(overlay);
				}
			}else{
				const details = node('div', base, 'cardDetails');
				for(const [part, content] of [['cardDomain', card.domain || card.vanity], ['cardTitle', card.title], ['cardDescription', card.description]]){
					if(!content)continue;
					const line = node('span', 'css-1jxf684', part);
					line.textContent = content;
					details.append(line);
				}
				if(['app','direct_store_link_app'].includes(card.type) && card.rating && card.count){
					const rating = node('span','css-1jxf684','cardAppRating');
					rating.textContent = text('cardAppRating', `${card.rating}/5.0 stars – ${card.count} ratings`, {appStarRating:card.rating,appNumRatings:card.count});
					details.append(rating);
				}
				a.append(details);
			}
			parent.append(a);
			let attribution = null;
			const domain = card.domain || card.vanity;
			if(card.size === 'large' && domain){
				attribution = link(text('cardSource', `From ${domain}`, [domain]), card.url, 'card-source');
				attribution.dataset.tebPart = 'cardAttribution';
				parent.append(attribution);
			}
			parts.card = {element: a, link: a, attribution, model: card, playerUrl: safeUrl(card.playerUrl)};
			if(card.type === 'player')notice('playerカードはstatic表示です。iframe状態遷移は未移植です。');
		}
		function renderQuote(raw, parent){
			const element = node('section', `${base} ${border}`, 'quote');
			element.setAttribute('aria-label', text('quotedPost', 'Quoted post'));
			parent.append(element);
			const target = {element, media: [], author: {}, text: {}, permalink: null, warnings: [], edit: {isEdited: false, isStale: false, ids: []}};
			parts.quote = target;
			let tweet;
			try{ tweet = raw && typeof raw === 'object' ? normalize(raw) : null; }catch{ tweet = null; }
			// 392773:q → 376934:isQuotedTweetUnavailable。通常Tweetの再帰は使わない。
			if(!tweet || tweet.unavailable || !tweet.user?.screen_name || tweet.user.blocking || tweet.isDeleted || tweet.withheld_scope){
				target.unavailable = true;
				element.textContent = text('quotedPostUnavailable', 'This quoted post is unavailable.');
				return;
			}
			if(tweet.possibly_sensitive && tweet.extended_entities?.media?.length){
				target.unavailable = true;
				element.textContent = text('viewSensitiveQuotedPostOnX', 'View this sensitive quoted post on X.');
				return;
			}
			tweet.permalink = tweet.id_str ? `https://x.com/${encodeURIComponent(tweet.user.screen_name)}/status/${encodeURIComponent(tweet.id_str)}` : undefined;
			const editIds = Array.isArray(tweet.edit_control?.edit_tweet_ids) ? tweet.edit_control.edit_tweet_ids.map(String) : [];
			const latestEditId = editIds.at(-1);
			const latestEditUrl = latestEditId && tweet.user.screen_name ? `https://x.com/${encodeURIComponent(tweet.user.screen_name)}/status/${encodeURIComponent(latestEditId)}` : null;
			const editHistoryUrl = tweet.permalink ? `${tweet.permalink}/history` : null;
			const withHeaderLinks = options.withQuoteTweetHeaderLinks === true;
			target.edit = {isEdited: !!tweet.isEdited, isStale: !!tweet.isStaleEdit, ids: editIds, latestId: latestEditId || null, historyUrl: editHistoryUrl, latestUrl: latestEditUrl, label: null, callout: null};
			element.dataset.tebQuoteStaleEdit = tweet.isStaleEdit ? 'true' : 'false';
			// 392773:_getTweetLink / withLink。anchorlessな枠を外部ナビゲーションへ公開。
			target.tweetUrl = tweet.permalink || null;
			if(tweet.permalink){
				const navigation = {element, href: tweet.permalink, kind: 'tweet'};
				parts.navigation.push(navigation);
				target.navigation = navigation;
				element.setAttribute('role', 'link');
				element.tabIndex = 0;
				function requestNavigation(event){
					if(event.defaultPrevented || event.target.closest('a, button, input, select, textarea, video, [contenteditable="true"]'))return;
					if(event.type === 'keydown' && (event.target !== element || event.key !== 'Enter'))return;
					if(event.type === 'click' && event.button !== 0)return;
					if(doc.defaultView.getSelection()?.toString())return;
					event.preventDefault();
					event.stopPropagation();
					element.dispatchEvent(new doc.defaultView.CustomEvent('teb:navigate', {bubbles: true, cancelable: true, detail: {...navigation, originalEvent: event}}));
				}
				element.addEventListener('click', requestNavigation);
				element.addEventListener('keydown', requestNavigation);
				cleanups.push(() => {
					element.removeEventListener('click', requestNavigation);
					element.removeEventListener('keydown', requestNavigation);
				});
			}
			const header = node('div', `${base} r-18u37iz r-1awozwy`, 'quoteHeader');
			const avatar = image({url: tweet.user.profile_image_url_https}, '');
			avatar.dataset.tebPart = 'quoteAvatar';
			const profileUrl = `https://x.com/${encodeURIComponent(tweet.user.screen_name)}`;
			const author = withHeaderLinks ? link(tweet.user.name || '', profileUrl, 'profile') : node('span', 'css-1jxf684', 'quoteName');
			if(!withHeaderLinks)author.textContent = tweet.user.name || '';
			author.dataset.tebPart = 'quoteName';
			const badges = node('span', base, 'authorBadges');
			const badgeView = context.renderBadges?.({...tweet.user, has_super_follower: tweet.has_super_follower}, badges);
			if(badgeView?.dispose)cleanups.push(badgeView.dispose);
			const handle = withHeaderLinks ? link(` @${tweet.user.screen_name}`, profileUrl, 'profile') : node('span', 'css-1jxf684', 'quoteScreenName');
			if(!withHeaderLinks)handle.textContent = ` @${tweet.user.screen_name}`;
			handle.dataset.tebPart = 'quoteScreenName';
			const nameLine = node('div', `${base} r-18u37iz r-1awozwy`, 'quoteNameLine');
			nameLine.append(author, badges);
			header.append(avatar, nameLine, handle);
			// 228604:_renderTweetUserNameContent。Memberだけ上位の明示許可が必要。
			const communityRole = tweet.author_community_relationship?.role;
			if(communityRole === 'Admin' || communityRole === 'Moderator' || communityRole === 'Member' && options.canShowCommunityMemberBadge === true){
				const label = {Admin:text('communityAdminBadge','Admin'),Moderator:text('communityModeratorBadge','Mod'),Member:text('communityMemberBadge','Member')}[communityRole];
				const roleBadge = node('span', 'css-1jxf684', 'quoteCommunityRole');
				roleBadge.dataset.tebRole = communityRole; roleBadge.textContent = label;
				header.append(roleBadge); target.communityRole = roleBadge;
			}
			// 392773:_renderUserName → _renderTimestamp → 458924(relative)。
			const date = new Date(tweet.created_at);
			if(tweet.created_at != null && Number.isFinite(date.getTime())){
				const now = options.now ?? Date.now(), seconds = Math.floor((now - date.getTime()) / 1000);
				const format = new Intl.DateTimeFormat(options.locale, {...(options.timeZone ? {timeZone: options.timeZone} : {}), ...(new Date(now).getFullYear() !== date.getFullYear() ? {year: 'numeric'} : {}), month: 'long', day: 'numeric'});
				const label = seconds <= -5 || seconds >= 86400 ? format.format(date) : seconds <= 0 ? text('now', 'now') : seconds < 60 ? text('relativeSeconds', `${seconds}s`, {count: seconds}) : seconds < 3600 ? text('relativeMinutes', `${Math.floor(seconds / 60)}m`, {count: Math.floor(seconds / 60)}) : text('relativeHours', `${Math.floor(seconds / 3600)}h`, {count: Math.floor(seconds / 3600)});
				const time = node('time', 'css-1jxf684'); time.dateTime = date.toISOString(); time.textContent = label;
				if(tweet.isEdited && !tweet.isStaleEdit && editHistoryUrl){
					const editLabel = link(text('lastEdited', 'Last edited'), editHistoryUrl, 'edit-history');
					editLabel.dataset.tebPart = 'quoteEditLabel';
					header.append(editLabel);
					target.edit.label = editLabel;
				}
				const timestampUrl = tweet.isEdited && !tweet.isStaleEdit && editHistoryUrl ? editHistoryUrl : tweet.permalink;
				const timestamp = withHeaderLinks ? link('', timestampUrl, tweet.isEdited && !tweet.isStaleEdit ? 'edit-history' : 'tweet') : node('span', 'css-1jxf684', 'quoteTimestamp'); timestamp.append(time); timestamp.title = date.toISOString();
				timestamp.dataset.tebPart = 'quoteTimestamp';
				header.append(timestamp);
				target.timestamp = {element: time, link: timestamp};
			}
			element.append(header);
			// 315101:_renderUserName → 388012。BusinessLabel/Badgeは名前横だけ。
			let quoteLabel = null;
			const highlighted = tweet.user.highlightedLabel;
			if(highlighted && !(highlighted.userLabelType === 'BusinessLabel' && highlighted.userLabelDisplayType === 'Badge')){
				const wrapper = node('div', base, 'quoteAuthorLabel');
				const url = safeUrl(highlighted.url?.url);
				const surface = url ? link('', url, 'highlighted-label') : node('span', 'css-1jxf684', 'quoteAuthorLabelLink');
				surface.dataset.tebPart = 'quoteAuthorLabelLink';
				const icon = node('span', 'css-1jxf684', 'quoteAuthorLabelIcon');
				if(highlighted.userLabelType === 'AutomatedLabel'){
					const svg = doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');
					const path = doc.createElementNS(svg.namespaceURI,'path');path.setAttribute('d','M.998 15V9h2v6h-2zm22 0V9h-2v6h2zM12 2c-4.418 0-8 3.58-8 8v7c0 2.76 2.239 5 5 5h6c2.761 0 5-2.24 5-5v-7C20 5.58 16.418 2 12 2zM8.998 14c-1.105 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.895 2-2 2zm6 0c-1.104 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.896 2-2 2z');svg.append(path);icon.append(svg);
				}else if(safeUrl(highlighted.badge?.url))icon.append(image({url:highlighted.badge.url}, '').tebImage.element);
				const labelText = node('span', 'css-1jxf684', 'quoteAuthorLabelText');
				renderLabelText(labelText, highlighted, doc);
				for(const labelLink of labelText.querySelectorAll('[data-teb-label-href]'))parts.navigation.push({element:labelLink,href:labelLink.dataset.tebLabelHref,kind:'entity'});
				if(icon.childNodes.length)surface.append(icon);
				surface.append(labelText);wrapper.append(surface);element.append(wrapper);
				quoteLabel = {element:wrapper,link:surface,icon:icon.childNodes.length?icon:null,text:labelText,model:highlighted};
			}
			target.author = {avatar: avatar.tebImage.img, avatarImage: avatar.tebImage, profileLink: author, screenName: handle, badges, affiliate: badgeView?.affiliate || null, label: quoteLabel, communityRole: target.communityRole || null};
			const body = node('div', 'css-1jxf684', 'quoteText');
			// 392773:_renderTextContent の共通余白。返信・本文・案内を同じ枠に置く。
			const textContent = node('div', base, 'quoteTextContent');
			body.dir = 'auto';
			// 392773:_renderTextContent: self_threadでは返信コンテキストを省略。
			if(tweet.in_reply_to_status_id_str && !tweet.self_thread){
				const participants = replyParticipants(tweet);
				const direct = participants.find(item => item.id_str === tweet.in_reply_to_user_id_str);
				if(direct){
					const others = participants.filter(item => item !== direct);
					const shown = [direct, ...others.slice(0, others.length > 2 ? 1 : 2)];
					const reply = node('div', 'css-1jxf684', 'quoteReplyContext');
					// 原版はlinkType:none。文言は日本語DOMアダプター。
					reply.textContent = `${text('replyingTo', 'Replying to')}: ${shown.map(item => `@${item.screen_name}`).join(', ')}${others.length > 2 ? `, ${text('othersCount', `${others.length - 1} others`, {count: others.length - 1})}` : ''}`;
					textContent.append(reply);
					target.replyContext = {element: reply, participants};
				}
			}
			// 392773:_renderTweetText。返信コンテキストありは4行、それ以外5行。
			body.style.webkitLineClamp = tweet.in_reply_to_status_id_str ? '4' : '5';
			const hasMedia = !!tweet.extended_entities?.media?.length;
			const note = tweet.note_tweet?.text ? tweet.note_tweet : null;
			const textModel = note ? {...tweet, text: note.text, entities: note.entity_set || {}, display_text_range: [0, note.text.length]} : tweet;
			let items = textPort.displayParts(textModel, {withQuoteLinks: true, withCardLinks: true, withMediaLinks: !hasMedia || tweet.possibly_sensitive});
			if(tweet.article?.rest_id)items = items.filter(item => !String(item.expandedUrl || '').includes(`/i/article/${tweet.article.rest_id}`));
			const links = [];
			for(const item of items){
				const label = item.displayUrl ?? `${item.prefix || ''}${item.entityType === 'smarttag' ? item.ticker ?? item.text : item.text || ''}`;
				const child = item.entityType === 'text' ? node('span', 'css-1jxf684') : link('', item.url, 'entity');
				if(item.entityType === 'mention'){
					child.dataset.tebMention = item.screen_name || item.text;
					if(item.id_str)child.dataset.tebMentionId = item.id_str;
				}
				for(const segment of textPort.richTextSegments(label, item.indices || [0, label.length], note?.richtext_tags || [], item.entityType !== 'text')){
					const span = node('span', 'css-1jxf684'); span.textContent = textPort.decodeHtmlEntities(segment.text);
					if(segment.richtextTypes.includes('Bold'))span.style.fontWeight = '700';
					if(segment.richtextTypes.includes('Italic'))span.style.fontStyle = 'italic';
					child.append(span);
				}
				body.append(child); if(item.entityType !== 'text')links.push(child);
			}
			target.text = {element: body, links, note: !!note};
			textContent.append(body);
			function quoteArticle(parent){
				if(!tweet.article)return null;
				const wrapper = node('div', base, 'quoteArticle'), article = {};
				renderArticle(tweet.article, wrapper, article, true);
				if(!article.element)return null;
				parent.append(wrapper);
				target.article = {...article, wrapper}; return wrapper;
			}
			// 315101: 添付もrich contentもない引用でのみJetfuel frameを使う。
			if(!hasMedia && !tweet.article && !tweet.card)renderJetfuel(tweet, element, target, true);
			if(options.quoteLayout === 'condensed' && hasMedia){
				// 392773:condensedContentBody/MediaSide/ContentSide (2:8)。
				element.dataset.tebQuoteLayout = 'condensed';
				const row = node('div', `${base} r-18u37iz`, 'quoteContent');
				quoteArticle(row);
				const mediaSide = node('div', base, 'quoteMediaSide');
				const textSide = node('div', base, 'quoteContentSide');
				target.mediaInfo = renderMedia(tweet, mediaSide, target.media, true);
				textSide.append(textContent);
				row.append(mediaSide, textSide);
				element.append(row);
			}else{
				element.dataset.tebQuoteLayout = 'expanded';
				element.append(textContent);
				quoteArticle(element);
				target.mediaInfo = renderMedia(tweet, element, target.media, false, true);
			}
			target.cashtags = [];
			target.cashtagContainer = renderCashtags(tweet, element, target.cashtags, {inQuote:true});
			// 315101: quoted tweet contentの後にisForQuoteTweetでpivotを置く。
			target.communityNote = renderCommunityNote(tweet, element, true);
			// 392773:_renderShowLinks: poll または self_thread にだけ案内を表示。
			const more = link(isPoll(tweet.card?.name) ? text('viewPoll', 'View poll') : text('viewThread', 'View this thread'), tweet.permalink, 'tweet');
			more.dataset.tebPart = 'quoteShowMore';
			more.hidden = !isPoll(tweet.card?.name) && !tweet.self_thread;
			textContent.append(more);
			target.permalink = more;
			// 738425: stale edit calloutはrich contentの後、space8を空けてinline/subtext2で表示。
			if(tweet.isEdited && tweet.isStaleEdit && latestEditUrl){
				const callout = link(text('newPostVersion', 'There’s a new version of this post.'), latestEditUrl, 'latest-edit');
				callout.dataset.tebPart = 'quoteStaleEditCallout';
				callout.setAttribute('aria-label', text('opensLatestPost', 'Opens the latest post'));
				element.append(callout);
				target.edit.callout = callout;
			}
		}
		if(!model.unavailable){
			// 315101:_renderTweetContentExpanded: rich contentと添付がない場合だけframeを置く。
			if(!model.extended_entities?.media?.length && !model.article && !model.is_quote_status && !model.card && !model.cashtag_attachments?.length)
				parts.jetfuel = renderJetfuel(model, container, parts, false);
			if(model.article){
				parts.article = {};
				const full = options.displayMode === 'detail' && !model.isPreviewDisplay && renderArticleBody(model.article, container, parts.article);
				if(!full)renderArticle(model.article, container, parts.article);
			}
			renderCashtags(model, container);
			// 398338:_richContentProps。詳細表示では本文内メディアを通常添付側から除く。
			const inlineIds = new Set((model.note_tweet?.inline_media || []).map(item => item.media_id));
			const attachmentMedia = options.displayMode === 'detail' && inlineIds.size ? (model.extended_entities?.media || []).filter(item => !inlineIds.has(item.id_str)) : undefined;
			parts.mediaInfo = renderMedia(model, container, parts.media, false, false, attachmentMedia);
			// 113680: mediaは別枠。引用をカードより優先。63857:L: media時はcard非表示。
			if(model.possibly_sensitive && (model.is_quote_status || model.card && !isPoll(model.card.name)))notice('センシティブな添付はXで確認してください。');
			else if(model.is_quote_status)renderQuote(model.quoted_status, container);
			else if(!model.extended_entities?.media?.length){if(!renderGrokShare(model,container))renderCard(model.card, container);}
			// 937363:_renderRichContent直後、author label / birdwatch pivotより前にGrok follow-ups。
			parts.grokFollowups = renderGrokFollowups(model, container);
			parts.communityNote = renderCommunityNote(model, container, false);
		}
		return {parts, warnings, renderInlineMedia, updateContext(){
			for(const item of contextLinks)setLink(item.element, model.permalink ? model.permalink + item.suffix : null);
			for(const item of parts.navigation)if(item.element.tagName === 'A')item.href = item.element.getAttribute('href') ? item.element.href : '';
			if(parts.poll){
				parts.poll.tweetId = model.id_str;
				for(const choice of parts.poll.choices)if(choice.button)choice.button.disabled = !model.id_str || !parts.poll.cardId || options.votingDisabled === true || options.withActionsDisabled === true;
			}
		}, dispose(){
			cleanups.splice(0).forEach(cleanup => cleanup());
			for(const media of [...parts.media, ...(parts.quote?.media || [])]){
				if(media.element.tagName !== 'VIDEO')continue;
				media.element.pause();
				media.element.removeAttribute('src');
				media.element.replaceChildren();
				media.element.load();
			}
		}};
	}
	const api = Object.freeze({replyParticipants, mergeTaggedUsers, imageVersions, selectImageUrl, selectPreviewUrl, imageCrop, createImage, bindings, isPoll, convertCard, pollResults, pollChoiceOrder, pollTimeLeft, originalImage, videoProps, carouselLayout, mount, actionIcons, actionClasses, actionSvgClasses, authorIcons, verifiedDisplayType, labelTextFragments, labelTextHref, renderLabelText});
	if(typeof module === 'object' && module.exports)module.exports = api;
	else root.TEBRich20260917 = api;
})(globalThis);
