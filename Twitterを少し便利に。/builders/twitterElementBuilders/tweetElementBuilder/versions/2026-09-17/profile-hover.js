/* 849941 → 302590 → 498133、210617/947032の限定移植。
 * API/React portalは外部resolverと通常DOMへ適合。analysis/profile-hover-port.md参照。
 */
(function(root){
	'use strict';
	const version = '2026-09-17';
	const css = `
:where(.tweet-element-builder[data-teb-ui-version="2026-09-17"])[data-teb-profile-layer]{
	position: fixed; z-index: 10000; width: 300px; max-width: calc(100vw - 30px); min-height: 130px;
	box-sizing: border-box; padding: 16px; border-radius: 16px; overflow: hidden;
	background: var(--teb-profile-background, #141414); color: var(--teb-text, #e7e9ea);
	box-shadow: var(--teb-profile-shadow, 0 4px 12px rgba(0,0,0,.5), 0 0 2px rgba(0,0,0,.35));
	font: 15px/20px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
	& [data-teb-part="profileTop"]{ display: flex; flex-direction: row; justify-content: space-between; }
	& [data-teb-part="profileAvatar"]{ display: block; width: 64px; height: 64px; border-radius: 50%; overflow: hidden; background: var(--teb-profile-placeholder, #333639); }
	& [data-teb-part="profileAvatar"][data-shape="square"]{ border-radius: 8%; }
	& [data-teb-part="profileIdentity"]{ margin-top: 8px; min-width: 0; }
	& [data-teb-part="profileNameRow"]{ display: flex; flex-direction: row; align-items: center; min-width: 0; }
	& [data-teb-part="profileName"]{ min-width: 0; flex-shrink: 1; font-size: 17px; line-height: 20px; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
	& [data-teb-part="profileBadges"]{ display: inline-flex; flex-direction: row; flex-shrink: 0; }
	& [data-teb-part="profileBadges"] svg{ width: 20px; height: 20px; fill: currentColor; }
	& [data-teb-part="profileHandleRow"]{ display: flex; flex-direction: row; align-items: center; gap: 4px; }
	& [data-teb-part="profileScreenName"]{ min-width: 0; flex-shrink: 1; color: var(--teb-muted, #71767b); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
	& [data-teb-part="profileFollowsYou"]{ flex-shrink: 0; font-size: 11px; line-height: 12px; color: var(--teb-muted, #71767b); }
	& [data-teb-part="profileDescription"]{ display: block; margin-top: 12px; white-space: pre-wrap; overflow-wrap: anywhere; }
	& [data-teb-part="profileDescription"] a{ color: var(--teb-link, #1d9bf0); }
	& [data-teb-part="profileStats"]{ display: flex; flex-direction: row; flex-wrap: wrap; gap: 4px 20px; margin-top: 12px; font-size: 14px; line-height: 16px; }
	& [data-teb-part="profileStatLabel"]{ color: var(--teb-muted, #71767b); }
	& [data-teb-part="profileStats"] strong{ font-weight: 700; }
	& [data-teb-part="profileFollow"]{ display: inline-flex; align-items: center; justify-content: center; border: 1px solid transparent; border-radius: 9999px; min-height: 36px; min-width: 36px; padding: 0 16px; font-family: inherit; font-size: 15px; font-weight: 700; line-height: 20px; cursor: pointer; white-space: nowrap; color: var(--teb-profile-button-text, #0f1419); background: var(--teb-profile-button, #eff3f4); transition: background-color .2s; }
	& [data-teb-part="profileFollow"][data-state="following"], & [data-teb-part="profileFollow"][data-state="requested"]{ color: var(--teb-text, #e7e9ea); background: transparent; border-color: var(--teb-profile-button-border, #536471); }
	& [data-teb-part="profileFollow"][data-state="following"]:not([data-just-followed="true"]):not(:disabled):hover{ color: #f4212e; border-color: #67070f; background: rgba(244,33,46,.1); }
	& [data-teb-part="profileFollow"][data-state="blocked"]{ color: #fff; background: #f4212e; }
	& [data-teb-part="profileFollow"]:disabled{ opacity: .5; cursor: default; }
	& [data-teb-part="profileKnownFollowers"]{ display: flex; align-items: center; margin-top: 12px; min-height: 20px; }
	& [data-teb-part="profileFacepile"]{ display: flex; flex-direction: row; flex-shrink: 0; height: 24px; overflow: hidden; }
	& [data-teb-part="profileFace"]{ width: 24px; height: 24px; flex-shrink: 0; border-radius: 50%; overflow: hidden; border: 1px solid var(--teb-background, #000); background: var(--teb-profile-placeholder, #333639); box-sizing: border-box; }
	& [data-teb-part="profileFace"] + [data-teb-part="profileFace"]{ margin-inline-start: -12px; }
	& [data-teb-part="profileKnownMessage"]{ margin-inline-start: 12px; min-width: 0; font-size: 13px; line-height: 16px; color: var(--teb-muted, #71767b); }
	& [data-teb-part="profileLabel"]{ display: flex; align-items: flex-start; margin-top: 4px; min-width: 0; color: var(--teb-muted, #71767b); }
	& [data-teb-part="profileLabelText"]{ min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
	& [data-teb-part="profileLabelIcon"]{ width: 17px; height: 17px; margin-inline-end: 4px; margin-top: 1px; flex-shrink: 0; fill: currentColor; }
	& [data-teb-part="profileAffiliate"]{ width: 17px; height: 17px; display: inline-flex; flex-shrink: 0; margin-inline: 4px 2px; border: 1px solid var(--teb-profile-placeholder, #333639); border-radius: 2px; overflow: hidden; }
	& [data-teb-badge="verified"]{ color: var(--teb-link, #1d9bf0); }
	& a:hover{ text-decoration: underline; }
	& [hidden]{ display: none; }
}`;
	function normalizeUser(raw = {}){
		const user = {...(raw.legacy || raw), ...raw.core, ...raw.relationship_perspectives};
		for(const [key, value] of Object.entries({id_str: raw.rest_id, profile_image_url_https: raw.avatar?.image_url, description: raw.profile_bio?.description, protected: raw.privacy?.protected, verified: raw.verification?.verified, verified_type: raw.verification?.verified_type, is_blue_verified: raw.is_blue_verified}))if(value !== undefined)user[key] = value;
		if(raw.affiliates_highlighted_label?.label)user.highlightedLabel = raw.affiliates_highlighted_label.label;
		for(const key of ['creator_subscriptions_count', 'has_hidden_subscriptions_on_profile'])if(raw[key] !== undefined)user[key] = raw[key];
		return user;
	}
	// 308039: 閲覧可否。警告/解除操作は描画せず、非公開部分も表示しない。
	function permissions(user, options){
		const own = !!options.viewerId && options.viewerId === user.id_str;
		const withheld = !!user.withheld_in_countries?.length;
		const suspended = user.__typename === 'UserUnavailable' || !!user.suspended;
		return {
			avatar: own || !withheld && !suspended,
			description: own || !user.blocking && !user.blocked_by && !withheld && !suspended,
			stats: own || !user.blocked_by && !withheld && !suspended,
			statsWithLink: own || !user.protected || !!user.following,
			followButton: !own && !user.blocked_by && !withheld && !suspended,
			badges: own || !withheld,
			fullName: (own || !withheld) && !suspended,
			followIndicator: !withheld,
			label: (own || !withheld) && !suspended,
			subscriptionsCount: own || !user.has_hidden_subscriptions_on_profile,
			followersYouKnow: !own && !user.blocked_by && !user.blocking && !withheld && !suspended && (!!user.following || !user.protected),
		};
	}
	// 121878 → 738053。通信/確認ダイアログはこの描画モデルには含めない。
	function followState(user, text = (key, fallback) => fallback){
		if(user.blocking)return {state: 'blocked', action: 'unblock', label: text('blocked', 'Blocked'), hover: text('unblock', 'Unblock')};
		if(user.follow_request_sent && user.protected && !user.following)return {state: 'requested', action: 'cancelFollowRequest', label: text('pending', 'Pending'), hover: text('cancel', 'Cancel')};
		if(user.following)return {state: 'following', action: 'unfollow', label: text('following', 'Following'), hover: text('unfollow', 'Unfollow')};
		const label = user.followed_by ? text('followBack', 'Follow back') : text('follow', 'Follow');
		return {state: 'none', action: 'follow', label, hover: label};
	}
	function knownFollowerMessage({count, names = []}, text = (key, fallback) => fallback){
		// 27116: 3人までは全員、4人以上は最初の2人と残数。日本語文言はアダプター。
		const shown = names.slice(0, count > 3 ? 2 : count);
		if(!shown.length)return text('knownFollowersCount', `${count} people you follow follow this account`, {count});
		const fallback = `${shown.join(', ')}${count > shown.length ? ` and ${count - shown.length} others` : ''} follow this account`;
		return text('knownFollowers', fallback, {count, names: shown});
	}
	// 947032: 通常のdown/center横位置。固定配置はDOMアダプター。
	function position(anchor, width, height, viewportWidth, viewportHeight){
		const below = viewportHeight - anchor.bottom - 25, above = anchor.top - 25;
		const up = below < height && above > below;
		const center = anchor.left + anchor.width / 2;
		const canCenter = viewportWidth - center >= width / 2 && center >= width / 2;
		let left = canCenter ? center - width / 2 : viewportWidth - anchor.left >= width ? (12 >= anchor.width / 2 ? anchor.left - anchor.width : anchor.left) : anchor.right >= width ? (12 >= anchor.width / 2 ? anchor.left + 2 * anchor.width - width : anchor.right - width) : 0;
		// 極小viewport/巨大カードの画面外は追加の安全策。
		left = Math.max(0, Math.min(left, viewportWidth - width));
		return {left, top: Math.max(0, up ? anchor.top - 10 - height : anchor.bottom + 10)};
	}
	function attach({view, options, node, safeUrl, richPort, textPort, normalize, renderBadges}){
		const doc = view.element.ownerDocument, win = doc.defaultView;
		const uiText = options.uiText || ((key, fallback) => fallback);
		if(!doc.querySelector('style[data-teb-profile-styles]')){
			const style = doc.createElement('style'); style.dataset.tebProfileStyles = version; style.textContent = css; doc.head.append(style);
		}
		let anchor = null, layer = null, image = null, enterTimer, leaveTimer, disposed = false, request = null, generation = 0, cardHovered = false, actionCleanup = null, badgeCleanup = null;
		let knownFollowers = null, knownGeneration = 0, knownRequest = null, followPending = false, justFollowed = false;
		const faceImages = [];
		const parts = {element: null, user: null, navigation: [], actions: null};
		function emit(type, detail){return view.element.dispatchEvent(new win.CustomEvent(type, {bubbles: true, cancelable: true, detail}));}
		function targets(){
			const state = view.getState(), author = view.parts.author;
			const items = [author.avatarLink, author.profileLink, author.screenName].map(element => ({element, user: state.user}));
			if(view.parts.repost?.link)items.push({element: view.parts.repost.link, user: view.parts.repost.user});
			for(const element of view.parts.replyContext?.links || []){
				if(element.dataset.tebReplyMore)continue;
				const user = view.parts.replyContext.participants.find(user => element.getAttribute('href') === `https://x.com/${encodeURIComponent(user.screen_name)}`);
				if(user)items.push({element, user});
			}
			for(const element of view.parts.text.links){
				if(element.dataset.tebMention)items.push({element, user: {screen_name: element.dataset.tebMention, id_str: element.dataset.tebMentionId || undefined}});
			}
			if(view.parts.quote?.author && state.quoted_status){
				const quote = view.parts.quote.author, user = normalize(state.quoted_status).user;
				for(const element of [quote.profileLink, quote.screenName, quote.avatar?.closest('a')])if(element)items.push({element, user});
				for(const element of view.parts.quote.text?.links || []){
					if(element.dataset.tebMention)items.push({element, user: {screen_name: element.dataset.tebMention, id_str: element.dataset.tebMentionId || undefined}});
				}
			}
			return items;
		}
		function resolveTarget(target){return targets().find(item => item.element?.contains(target) && item.user?.screen_name && !item.user.blocking);}
		function clearTimers(){win.clearTimeout(enterTimer); win.clearTimeout(leaveTimer);}
		function clearContent(){actionCleanup?.(); actionCleanup = null; badgeCleanup?.(); badgeCleanup = null; image?.dispose(); image = null; for(const image of faceImages)image.dispose(); faceImages.length = 0;}
		function close(){
			clearTimers(); generation++; request?.abort(); request = null; clearContent(); layer?.remove(); layer = null; anchor = null; cardHovered = false;
			knownGeneration++; knownRequest?.abort(); knownRequest = null; knownFollowers = null; followPending = false; justFollowed = false;
			for(const key of Object.keys(parts))delete parts[key];
			Object.assign(parts, {element: null, user: null, navigation: [], actions: null});
		}
		function scheduleClose(){win.clearTimeout(leaveTimer); leaveTimer = win.setTimeout(() => {if(!cardHovered)close();}, 300);}
		function layout(){
			if(!anchor?.isConnected){close();return;}
			const p = position(anchor.getBoundingClientRect(), layer.offsetWidth, layer.offsetHeight, win.innerWidth, win.innerHeight);
			layer.style.left = `${p.left}px`; layer.style.top = `${p.top}px`;
			layer.style.maxHeight = `${Math.max(0, win.innerHeight - p.top - 15)}px`; layer.style.overflowY = 'auto';
		}
		function link(part, label, href){
			const el = node('a', 'css-1jxf684', part); el.textContent = label;
			const url = safeUrl(href); if(url){el.href = url;parts.navigation.push({element: el, href: url, kind: 'profile'});}
			return el;
		}
		function render(raw){
			clearContent(); layer.replaceChildren(); parts.navigation = [];
			const user = normalizeUser(raw), allow = permissions(user, options), href = `https://x.com/${encodeURIComponent(user.screen_name || '')}`;
			parts.user = user;
			const top = node('div', 'css-g5y9jx r-18u37iz r-1wtj0ep', 'profileTop');
			const avatar = link('profileAvatar', '', href); avatar.dataset.shape = user.profile_image_shape?.toLowerCase() || 'circle';
			image = richPort.createImage({doc, node, safeUrl}, allow.avatar ? user.profile_image_url_https : null, user.name || user.screen_name);
			image.element.style.height = '100%'; avatar.append(image.element);
			const actions = node('div', 'css-g5y9jx', 'profileActions');
			top.append(avatar, actions);
			const identity = node('div', 'css-g5y9jx r-knv0ih', 'profileIdentity'), nameRow = node('div', 'css-g5y9jx r-1awozwy r-18u37iz r-dnmrzs', 'profileNameRow');
			const name = link('profileName', allow.fullName ? user.name || user.screen_name : user.screen_name, href);
			for(const cls of ['r-1inkyih', 'r-rjixqe', 'r-b88u0q', 'r-1udh08x', 'r-3s2u2q'])name.classList.add(cls, `teb-${cls}`);
			const badges = node('span', 'css-1jxf684', 'profileBadges'); const badgeView = allow.badges ? renderBadges(user, badges, 'account') : null;
			badgeCleanup = badgeView?.dispose || null;
			nameRow.append(name, badges);
			const handleRow = node('div', 'css-g5y9jx r-1awozwy r-18u37iz r-1wbh5a2', 'profileHandleRow');
			const screenName = link('profileScreenName', `@${user.screen_name}`, href);
			const followsYou = node('span', 'css-1jxf684', 'profileFollowsYou'); followsYou.textContent = uiText('followsYou', 'Follows you'); followsYou.hidden = !allow.followIndicator || !user.followed_by;
			handleRow.append(screenName, followsYou); identity.append(nameRow, handleRow); layer.append(top, identity);
			let highlightedLabel = null, affiliate = badgeView?.affiliate || null;
			if(affiliate)affiliate.dataset.tebPart = 'profileAffiliate';
			const label = user.highlightedLabel;
			if(label && (allow.label || allow.badges)){
				// 388012: BusinessLabel/Badgeは本文ラベルではなく名前横のbadge。
				const badgeOnly = label.userLabelType === 'BusinessLabel' && label.userLabelDisplayType === 'Badge';
				if(!badgeOnly && allow.label){
					highlightedLabel = link('profileLabel', '', label.url?.url);
					if(label.userLabelType === 'AutomatedLabel'){
						const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');svg.setAttribute('viewBox', '0 0 24 24');svg.dataset.tebPart = 'profileLabelIcon';svg.setAttribute('aria-hidden', 'true');
						const path = doc.createElementNS(svg.namespaceURI, 'path');path.setAttribute('d', 'M.998 15V9h2v6h-2zm22 0V9h-2v6h2zM12 2c-4.418 0-8 3.58-8 8v7c0 2.76 2.239 5 5 5h6c2.761 0 5-2.24 5-5v-7c0-4.42-3.582-8-8-8zM8.998 14c-1.105 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.895 2-2 2zm6 0c-1.104 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.896 2-2 2z');svg.append(path);highlightedLabel.append(svg);
					}else if(label.badge?.url){
						const image = richPort.createImage({doc, node, safeUrl}, label.badge.url, '');image.element.dataset.tebPart = 'profileLabelIcon';highlightedLabel.append(image.element);faceImages.push(image);
					}
					const text = node('span', 'css-1jxf684', 'profileLabelText');richPort.renderLabelText(text, label, doc);for(const piece of text.querySelectorAll('[data-teb-label-href]'))parts.navigation.push({element:piece,href:piece.dataset.tebLabelHref,kind:'entity'});highlightedLabel.append(text);identity.append(highlightedLabel);
				}
			}
			const description = node('div', 'css-1jxf684', 'profileDescription'); description.dir = 'auto';
			if(allow.description && user.description){
				// 418631のentity描画を既存の本文parserへ適合。自動検出/withheld置換は未移植。
				const text = user.description;
				for(const item of textPort.tweetTextParts(text, [0, Array.from(text).length], user.entities?.description || {})){
					const label = `${item.prefix || ''}${item.text || ''}`, url = safeUrl(item.expandedUrl || item.url);
					description.append(url ? link('profileDescriptionLink', label, url) : doc.createTextNode(label));
				}
				layer.append(description);
			}
			const stats = node('div', 'css-g5y9jx', 'profileStats');
			const statFields = [['friends_count', uiText('following', 'Following'), 'following'], ['followers_count', uiText('followers', 'Followers'), 'verified_followers']];
			// 302590のfeature switchは明示optionに置換。既定で新たに有効化しない。
			if(options.withProfileSubscriptionsCount && allow.subscriptionsCount && user.creator_subscriptions_count)statFields.push(['creator_subscriptions_count', uiText('subscriptions', 'Subscriptions'), 'creator-subscriptions/subscriptions']);
			if(allow.stats)for(const [key, label, path] of statFields){
				if(user[key] == null)continue; // 不明値を0と捏造しない。
				const stat = allow.statsWithLink ? link('profileStat', '', `${href}/${path}`) : node('span', 'css-1jxf684', 'profileStat');
				const count = node('strong', 'css-1jxf684'); count.textContent = new Intl.NumberFormat(options.locale).format(user[key]);
				const text = node('span', 'css-1jxf684', 'profileStatLabel'); text.textContent = ` ${label}`;
				stat.append(count, text); stats.append(stat);
			}
			if(stats.childNodes.length)layer.append(stats);
			const token = generation;
			const updateUser = value => {if(token === generation)setUser(value);};
			const updateFollow = value => {if(token === generation)setFollowState(value);};
			Object.assign(parts, {avatar, name, screenName, badges, description, stats, actions, highlightedLabel, affiliate, followButton: null, knownFollowers: null, setUser: updateUser, setFollowState: updateFollow});
			// 498133はfollowButtonを外部から受け取る。同じ責務境界でAPIを分離。
			if(allow.followButton && options.viewerId && options.renderProfileActions){
				const cleanup = options.renderProfileActions({user, element: actions, parts, close});
				if(typeof cleanup === 'function')actionCleanup = cleanup;
			}else if(allow.followButton && options.viewerId && user.id_str){
				const button = node('button', 'css-g5y9jx r-sdzlij r-1phboty r-rs99b7 r-lrvibr', 'profileFollow'); button.type = 'button';
				const state = followState(user, uiText); button.dataset.state = state.state; button.dataset.testid = `${user.id_str}-${state.action === 'cancelFollowRequest' ? 'cancel' : state.action}`;
				button.dataset.justFollowed = String(justFollowed);
				button.textContent = state.label; button.disabled = followPending; button.setAttribute('aria-busy', String(followPending)); button.setAttribute('aria-label', `${state.label} @${user.screen_name}`);
				button.addEventListener('pointerenter', () => {button.style.minWidth = `${Math.ceil(button.getBoundingClientRect().width)}px`;if(!button.disabled)button.textContent = justFollowed && state.state === 'following' ? state.label : state.hover;});
				button.addEventListener('pointerleave', () => {button.textContent = state.label;justFollowed = false;button.dataset.justFollowed = 'false';});
				button.addEventListener('click', event => {event.preventDefault();if(!button.disabled && token === generation){if(state.action === 'follow')justFollowed = true;emit('teb:profileaction', {action: state.action, user: structuredClone(user), originalEvent: event, parts, setFollowState: updateFollow});}});
				actions.append(button); parts.followButton = button;
			}
			if(options.viewerId && allow.followersYouKnow && knownFollowers?.count > 0){
				const context = link('profileKnownFollowers', '', `${href}/followers_you_follow`);
				context.setAttribute('aria-label', uiText('followersYouKnow', 'Followers you know'));
				const facepile = node('span', 'css-g5y9jx r-18u37iz r-1w6e6rj r-1777fci r-1udh08x', 'profileFacepile');
				for(const [index, url] of (knownFollowers.avatarUrls || []).entries()){
					const face = node('span', 'css-g5y9jx', 'profileFace'); face.style.zIndex = String(knownFollowers.avatarUrls.length - index);
					const image = richPort.createImage({doc, node, safeUrl}, url, ''); image.element.style.height = '100%'; image.element.setAttribute('aria-hidden', 'true'); face.append(image.element); facepile.append(face); faceImages.push(image);
				}
				const message = node('span', 'css-1jxf684 r-n6v787 r-1cwl3u0', 'profileKnownMessage'); message.textContent = knownFollowerMessage(knownFollowers, uiText);
				context.append(facepile, message); layer.append(context); parts.knownFollowers = {element: context, facepile, message, data: structuredClone(knownFollowers)};
			}
			layout(); emit('teb:profilepartschange', {parts, view});
		}
		function setUser(raw){
			if(disposed || !layer)return;
			const user = normalizeUser(raw);
			if(user.screen_name?.toLowerCase() !== parts.user.screen_name.toLowerCase() || parts.user.id_str && user.id_str !== parts.user.id_str)throw new Error('開いているプロフィールと異なるユーザーです。');
			render(user);
		}
		function setFollowState(value = {}){
			if(disposed || !layer)return;
			const user = {...parts.user};
			for(const key of ['following', 'followed_by', 'follow_request_sent', 'blocking'])if(value[key] !== undefined)user[key] = !!value[key];
			if(value.pending !== undefined)followPending = !!value.pending;
			render(user);
		}
		async function loadKnownFollowers(user, token){
			if(!options.resolveKnownFollowers || !options.viewerId || !user.id_str || !permissions(user, options).followersYouKnow)return;
			knownRequest?.abort(); knownRequest = new win.AbortController(); const current = ++knownGeneration;
			try{
				const result = await options.resolveKnownFollowers({userId: user.id_str, screenName: user.screen_name, signal: knownRequest.signal});
				if(disposed || token !== generation || current !== knownGeneration)return;
				knownFollowers = result && Number.isSafeInteger(result.count) && result.count >= 0 ? {count: result.count, names: Array.isArray(result.names) ? result.names.map(String) : [], avatarUrls: Array.isArray(result.avatarUrls) ? result.avatarUrls : []} : null;
				render(parts.user);
			}catch(error){if(token === generation && current === knownGeneration && !disposed)emit('teb:profileerror', {error, part: 'knownFollowers', screenName: user.screen_name});}
		}
		async function open(target){
			if(disposed || win.innerWidth < 360 || !target.element.isConnected)return;
			close(); anchor = target.element; const token = generation;
			layer = node('section', 'r-cl2sl0 r-1jyoszn r-1867qdf r-1udh08x r-nsbfu8 r-1ipicw7 r-1r5jyh0'); layer.classList.add('tweet-element-builder'); layer.dataset.tebUiVersion = version; layer.dataset.tebProfileLayer = ''; layer.setAttribute('aria-label', uiText('profile', 'Profile'));
			// portalでも呼出元のテーマを引き継ぐ。
			const style = win.getComputedStyle(view.element);
			for(const name of ['--teb-text', '--teb-muted', '--teb-link', '--teb-background', '--teb-profile-background', '--teb-profile-shadow', '--teb-profile-button', '--teb-profile-button-text', '--teb-profile-button-border'])layer.style.setProperty(name, style.getPropertyValue(name));
			layer.addEventListener('pointerenter', () => {cardHovered = true;win.clearTimeout(leaveTimer);});
			layer.addEventListener('pointerleave', () => {cardHovered = false;scheduleClose();});
			layer.addEventListener('focusin', () => {cardHovered = true;win.clearTimeout(leaveTimer);});
			layer.addEventListener('focusout', event => {if(!layer.contains(event.relatedTarget)){cardHovered = false;scheduleClose();}});
			layer.addEventListener('click', event => {
				const link = event.target.closest('a[href]'); if(!link)return;
				if(!emit('teb:navigate', {element: link, href: link.href, kind: 'profile', originalEvent: event}))event.preventDefault();
			});
			doc.body.append(layer); parts.element = layer; render(target.user);
			if(!options.resolveProfile){void loadKnownFollowers(parts.user, token);return;}
			request = new win.AbortController(); layer.setAttribute('aria-busy', 'true');
			try{
				const raw = await options.resolveProfile({screenName: target.user.screen_name, userId: target.user.id_str, user: structuredClone(target.user), signal: request.signal});
				if(token !== generation || disposed)return;
				if(raw){const next = normalizeUser(raw);if(next.screen_name?.toLowerCase() !== target.user.screen_name.toLowerCase())throw new Error('プロフィールのscreen_nameが一致しません。');render(next);}
				void loadKnownFollowers(parts.user, token);
			}catch(error){if(token === generation && !disposed)emit('teb:profileerror', {error, screenName: target.user.screen_name});}
			finally{if(token === generation)layer?.removeAttribute('aria-busy');}
		}
		function over(event){
			if(event.pointerType === 'touch')return;
			const target = resolveTarget(event.target); if(!target || target.element.contains(event.relatedTarget))return;
			clearTimers(); if(anchor === target.element)return;
			enterTimer = win.setTimeout(() => {void open(target);}, 600);
		}
		function out(event){
			const target = resolveTarget(event.target); if(!target || target.element.contains(event.relatedTarget))return;
			win.clearTimeout(enterTimer); scheduleClose();
		}
		function escape(event){if(event.key === 'Escape' && !event.altKey && !event.ctrlKey && !event.metaKey)close();}
		function scroll(){if(layer && !cardHovered)close();}
		function resize(){if(layer){if(win.innerWidth < 360)close();else layout();}}
		view.element.addEventListener('pointerover', over); view.element.addEventListener('pointerout', out);
		doc.addEventListener('keyup', escape); win.addEventListener('scroll', scroll, true); win.addEventListener('resize', resize);
		function dispose(){if(disposed)return;disposed = true;close();view.element.removeEventListener('pointerover', over);view.element.removeEventListener('pointerout', out);doc.removeEventListener('keyup', escape);win.removeEventListener('scroll', scroll, true);win.removeEventListener('resize', resize);}
		return {parts, close, dispose};
	}
	const api = Object.freeze({attach, normalizeUser, permissions, position, followState, knownFollowerMessage});
	if(typeof module === 'object' && module.exports)module.exports = api;
	else root.TEBProfileHover20260917 = api;
})(globalThis);
