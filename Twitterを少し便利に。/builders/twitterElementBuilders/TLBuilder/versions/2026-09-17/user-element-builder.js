/* Search user cell. Bundled with TLB-v2026-09-17.js; reusable independently. */
(function(root){
	'use strict';
	function UserElementBuilder(user,options={}){
		const doc=options.document || root.document;
		if(!doc?.createElement)throw new Error('document is required.');
		const createCell=options.createCell || (element=>{const cell=doc.createElement('div');cell.append(element);return cell;});
		function userText(key,fallback){return root.builderI18n?.getText(key,{language:options.language || doc.documentElement.lang || doc.defaultView.navigator.language,textVersion:options.textVersion || 'new'}) || fallback;}
		function makeUserView(user){
			if(!doc.getElementById('ueb-user-cell-styles-2026-09-17')){
				const style=doc.createElement('style');style.id='ueb-user-cell-styles-2026-09-17';style.textContent=`
					[data-ueb-version="2026-09-17"] [data-tlb-part="userCard"]{display:flex;width:100%;box-sizing:border-box;gap:8px;padding:12px 16px;border:0;background:transparent;color:var(--teb-text,#e7e9ea);font:15px/20px "Segoe UI",Meiryo,system-ui,sans-serif;text-align:start;cursor:pointer}
				[data-ueb-version="2026-09-17"] [data-tlb-part="userCard"]:hover{background:var(--teb-hover,rgba(231,233,234,.03))}
				[data-ueb-version="2026-09-17"] [data-tlb-part="userAvatar"]{flex:none;width:40px;height:40px;overflow:hidden;border-radius:50%;background:#16181c;background-position:center;background-size:cover}
				[data-ueb-version="2026-09-17"] [data-tlb-part="userAvatar"][data-tlb-shape="square"]{border-radius:8px}
				[data-ueb-version="2026-09-17"] [data-tlb-part="userAvatar"] img{display:block;width:100%;height:100%;opacity:0}
				[data-ueb-version="2026-09-17"] [data-tlb-part="userContent"]{flex:1;min-width:0}
				[data-ueb-version="2026-09-17"] [data-tlb-part="userTop"]{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;min-width:0}
				[data-ueb-version="2026-09-17"] [data-tlb-part="userIdentity"]{min-width:0;overflow:hidden}
					[data-ueb-version="2026-09-17"] [data-tlb-part="userName"], [data-ueb-version="2026-09-17"] [data-tlb-part="userScreenName"]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
					[data-ueb-version="2026-09-17"] [data-tlb-part="userNameRow"]{display:flex;align-items:center;min-width:0}
					[data-ueb-version="2026-09-17"] [data-tlb-part="userName"]{font-weight:700}
					[data-ueb-version="2026-09-17"] [data-tlb-part="userBadge"]{display:block;flex:none;width:18.75px;height:18.75px;margin-left:2px;fill:currentColor}
					[data-ueb-version="2026-09-17"] [data-tlb-part="userBadge"][data-tlb-badge="verified"]{color:#1d9bf0}
					[data-ueb-version="2026-09-17"] [data-tlb-part="userScreenName"]{color:var(--teb-muted,#71767b)}
					[data-ueb-version="2026-09-17"] [data-tlb-part="userBio"]{margin-top:4px;white-space:pre-wrap;overflow-wrap:anywhere}
					[data-ueb-version="2026-09-17"] [data-tlb-part="userBio"] a{color:var(--teb-link,#1d9bf0);text-decoration:none}
					[data-ueb-version="2026-09-17"] [data-tlb-part="userBio"] a:hover{text-decoration:underline}
					[data-ueb-version="2026-09-17"] [data-tlb-part="userFollow"]{flex:none;min-width:90px;height:32px;padding:0 16px;border:1px solid transparent;border-radius:9999px;background:#eff3f4;color:#0f1419;font-family:inherit;font-size:15px;font-weight:700;line-height:20px;cursor:pointer}
				[data-ueb-version="2026-09-17"] [data-tlb-part="userFollow"][data-tlb-following="true"]{background:transparent;color:var(--teb-text,#e7e9ea);border-color:var(--teb-muted,#71767b)}
			`; (doc.head || doc.documentElement).append(style);
			}
			const profile=user?.core || user?.legacy || {},screenName=profile.screen_name || '',name=profile.name || screenName,href=`https://x.com/${encodeURIComponent(screenName)}`;
			const card=doc.createElement('div');card.dataset.testid='UserCell';card.dataset.tlbPart='userCard';card.tabIndex=0;card.setAttribute('role','link');card.dataset.tlbUserId=user.rest_id || '';
			const avatar=doc.createElement('div');avatar.dataset.tlbPart='userAvatar';if(user.profile_image_shape==='Square')avatar.dataset.tlbShape='square';
			const avatarUrl=user.avatar?.image_url || user.legacy?.profile_image_url_https || '';if(avatarUrl){avatar.style.backgroundImage=`url(${JSON.stringify(avatarUrl)})`;const image=doc.createElement('img');image.src=avatarUrl;image.alt='';image.loading='lazy';avatar.append(image);}
			const content=doc.createElement('div');content.dataset.tlbPart='userContent';const top=doc.createElement('div');top.dataset.tlbPart='userTop';const identity=doc.createElement('div');identity.dataset.tlbPart='userIdentity';
			const nameRow=doc.createElement('div');nameRow.dataset.tlbPart='userNameRow';const display=doc.createElement('div');display.dataset.tlbPart='userName';display.textContent=name;nameRow.append(display);
			const rich=root.TEBRich20260917,verifiedType=rich?.verifiedDisplayType({...profile,verified:user.verification?.verified,is_blue_verified:user.is_blue_verified,verified_type:user.verification?.verified_type});let badge=null;
			if(verifiedType && verifiedType!=='none' && rich.authorIcons[verifiedType==='blue'?'verified':verifiedType]){
				const serial=`tlb-user-badge-${String(user.rest_id || '').replace(/[^a-zA-Z0-9-]/g,'')}`;
				badge=rich.createAuthorIcon(doc,verifiedType==='blue'?'verified':verifiedType,serial);badge.dataset.tlbPart='userBadge';badge.dataset.tlbBadge=verifiedType==='blue'?'verified':verifiedType;badge.dataset.testid='icon-verified';badge.setAttribute('role','img');badge.setAttribute('aria-label',userText('verifiedAccount','Verified account'));nameRow.append(badge);
			}
			const handle=doc.createElement('div');handle.dataset.tlbPart='userScreenName';handle.textContent=`@${screenName}`;identity.append(nameRow,handle);top.append(identity);
			const following=!!user.relationship_perspectives?.following;let follow=null;
			if(options.viewerId && String(options.viewerId)!==String(user.rest_id)){
				follow=doc.createElement('button');follow.type='button';follow.dataset.tlbPart='userFollow';follow.dataset.tlbFollowing=String(following);follow.textContent=userText(following?'following':'follow',following?'Following':'Follow');follow.setAttribute('aria-label',`${follow.textContent} @${screenName}`);
				follow.addEventListener('click',event=>{event.stopPropagation();card.dispatchEvent(new doc.defaultView.CustomEvent('tlb:user-follow',{bubbles:true,detail:{user,userId:user.rest_id,screenName,following,originalEvent:event}}));});top.append(follow);
			}
			content.append(top);const description=user.profile_bio?.description || user.legacy?.description || '';if(description){const bio=doc.createElement('div');bio.dataset.tlbPart='userBio';bio.dir='auto';
				const parts=root.TEBText20260917?.descriptionTextParts(description,user.profile_bio?.entities || user.legacy?.entities || {}) || [{text:description}];
				for(const part of parts){const label=part.entityType==='url' ? part.displayUrl || part.expandedUrl || part.url || '' : `${part.prefix || ''}${part.text || ''}`;const raw=part.entityType==='url' && part.url ? part.url : part.expandedUrl || part.url;let url=null;try{const candidate=new URL(raw);if(['http:','https:'].includes(candidate.protocol))url=candidate.href;}catch{}
					if(!url){bio.append(doc.createTextNode(label));continue;}
					const link=doc.createElement('a');link.href=url;link.textContent=label;link.addEventListener('click',event=>{event.stopPropagation();const allowed=card.dispatchEvent(new doc.defaultView.CustomEvent('tlb:user-link',{bubbles:true,cancelable:true,detail:{user,userId:user.rest_id,screenName,href:url,originalEvent:event}}));if(!allowed)event.preventDefault();});bio.append(link);
				}content.append(bio);}
			card.append(avatar,content);
			const open=event=>{if(event.type==='keydown' && !['Enter',' '].includes(event.key))return;if(event.type==='keydown')event.preventDefault();card.dispatchEvent(new doc.defaultView.CustomEvent('tlb:user-open',{bubbles:true,detail:{user,userId:user.rest_id,screenName,href,originalEvent:event}}));};card.addEventListener('click',open);card.addEventListener('keydown',open);
			const view={element:card,cell:createCell(card),parts:{avatar,name:display,screenName:handle,badge,followButton:follow},user,dispose(){hover?.dispose();}};
			let hover=null;
			const profilePort=root.TEBProfileHover20260917,textPort=root.TEBText20260917;
			if(options.withProfileHover!==false && profilePort && rich && textPort){
				root.TweetElementBuilderVersions?.['2026-09-17']?.installStyles(doc);
				const normalized=profilePort.normalizeUser(user);
				const safeUrl=value=>{try{const url=new URL(value);return ['http:','https:'].includes(url.protocol)?url.href:null;}catch{return null;}};
				const node=(tag,classes='',part)=>{const result=doc.createElement(tag),names=classes.split(/\s+/).filter(Boolean);result.className=[...names,...names.map(name=>`teb-${name}`)].join(' ');result.dataset.tebOwnerVersion='2026-09-17';if(part)result.dataset.tebPart=part;return result;};
				const renderBadges=(person,target)=>{target.replaceChildren();const type=rich.verifiedDisplayType(person);if(type==='none')return {dispose(){}};const iconType=type==='blue'?'verified':type;if(!rich.authorIcons[iconType])return {dispose(){}};
					const icon=rich.createAuthorIcon(doc,iconType,`tlb-hover-${user.rest_id || 'user'}`);icon.dataset.tebBadge=iconType;icon.dataset.testid='icon-verified';icon.setAttribute('role','img');icon.setAttribute('aria-label',userText('verifiedAccount','Verified account'));target.append(icon);return {dispose(){}};
				};
				const adapter={element:card,parts:view.parts,getState:()=>({user:normalized})};
				hover=profilePort.attach({view:adapter,options:{...options,...options.tweetOptions,uiText:userText},node,safeUrl,richPort:rich,textPort,normalize:value=>({user:profilePort.normalizeUser(value)}),renderBadges,profileTargets:()=>[avatar,display,handle].map(element=>({element,user:normalized}))});
				view.parts.profileHover=hover.parts;view.closeProfileHover=hover.close;
			}
			return view;
		}
		const view=makeUserView(user);
		view.cell.dataset.uebVersion='2026-09-17';
		return view;
	}
	(root.UserElementBuilderVersions ||= {})['2026-09-17']=UserElementBuilder;
	root.UserElementBuilder=UserElementBuilder;
})(globalThis);
