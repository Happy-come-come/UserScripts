/* 移植第2段階。対応表: analysis/port-status.md
 * 公開用@require順: builderI18n.js → TEB-v2026-09-17.js → TweetElementBuilder.js
 */
(function(root){
	'use strict';
	const isCommonJS = typeof module === 'object' && module.exports;
	const i18nPort = isCommonJS ? require('../../../builderI18n.js') : root.builderI18n;
	if(!i18nPort)throw new Error('builderI18n.js must be loaded before TEB-v2026-09-17.js.');
	const textPort = isCommonJS ? require('./text.js') : root.TEBText20260917;
	const savedCss = isCommonJS ? require('./styles.js') : root.TEBStyles20260917;
	const richPort = isCommonJS ? require('./rich.js') : root.TEBRich20260917;
	const profilePort = isCommonJS ? require('./profile-hover.js') : root.TEBProfileHover20260917;
	const version = '2026-09-17';
	const base = 'css-g5y9jx';
	const textClasses = 'css-146c3p1 r-bcqeeo r-qvutc0 r-1tl8opc r-a023e6 r-rjixqe r-16dba41';
	const themes = Object.freeze(['light', 'dim', 'dark']);
	let badgeSerial = 0, avatarSerial = 0;
	// 原版のinline色を通常DOMへ渡す橋渡し。独自APIの状態表示はteb専用属性。
	const bridgeCss = `
:where(.tweet-element-builder[data-teb-ui-version="2026-09-17"]){
	color: var(--teb-text, rgb(231, 233, 234)); background-color: var(--teb-background, rgb(0, 0, 0));
	&.tweet-element-builder{ color:var(--teb-text, rgb(231,233,234)); background-color:var(--teb-background, rgb(0,0,0)); }
	&[data-teb-theme="light"]{ --teb-text:rgb(15,20,25); --teb-muted:rgb(83,100,113); --teb-background:rgb(255,255,255); --teb-border:rgb(239,243,244); --teb-link:rgb(29,155,240); --teb-menu-hover:rgba(15,20,25,.1); --teb-menu-hover-light:rgb(247,249,249); --teb-repost:rgb(0,186,124); --teb-like:rgb(249,24,128); --teb-dropdown-background:rgb(255,255,255); --teb-dropdown-text:rgb(0,0,0); --teb-dropdown-border:rgb(118,118,118); --teb-button-background:rgb(239,239,239); --teb-button-text:rgb(0,0,0); --teb-button-border:rgb(239,239,239); --teb-conversation-line:rgb(207,217,222); --teb-avatar-placeholder:rgb(239,243,244); --teb-profile-background:rgb(255,255,255); --teb-profile-placeholder:rgb(239,243,244); --teb-profile-button:rgb(15,20,25); --teb-profile-button-text:rgb(255,255,255); --teb-profile-button-border:rgb(207,217,222); --teb-code-background:rgb(247,249,249); --teb-code-inline-background:rgb(239,243,244); --teb-menu-shadow:0 0 15px rgba(101,119,134,.2),0 0 3px 1px rgba(101,119,134,.15); }
	&[data-teb-theme="dim"]{ --teb-text:rgb(247,249,249); --teb-muted:rgb(139,152,165); --teb-background:rgb(21,32,43); --teb-border:rgb(56,68,77); --teb-link:rgb(29,155,240); --teb-menu-hover:rgba(247,249,249,.1); --teb-menu-hover-light:rgb(30,39,50); --teb-repost:rgb(0,186,124); --teb-like:rgb(249,24,128); --teb-dropdown-background:rgb(59,59,59); --teb-dropdown-text:rgb(255,255,255); --teb-dropdown-border:rgb(133,133,133); --teb-button-background:rgb(107,107,107); --teb-button-text:rgb(255,255,255); --teb-button-border:rgb(107,107,107); --teb-conversation-line:rgb(66,83,100); --teb-avatar-placeholder:rgb(30,39,50); --teb-profile-background:rgb(21,32,43); --teb-profile-placeholder:rgb(56,68,77); --teb-profile-button:rgb(239,243,244); --teb-profile-button-text:rgb(15,20,25); --teb-profile-button-border:rgb(139,152,165); --teb-code-background:rgb(30,39,50); --teb-code-inline-background:rgb(56,68,77); --teb-menu-shadow:0 0 15px rgba(255,255,255,.2),0 0 3px 1px rgba(255,255,255,.15); }
	&[data-teb-theme="dark"]{ --teb-text:rgb(231,233,234); --teb-muted:rgb(113,118,123); --teb-background:rgb(0,0,0); --teb-border:rgb(47,51,54); --teb-link:rgb(29,155,240); --teb-menu-hover:rgba(231,233,234,.1); --teb-menu-hover-light:rgb(22,24,28); --teb-repost:rgb(0,186,124); --teb-like:rgb(249,24,128); --teb-dropdown-background:rgb(59,59,59); --teb-dropdown-text:rgb(255,255,255); --teb-dropdown-border:rgb(133,133,133); --teb-button-background:rgb(107,107,107); --teb-button-text:rgb(255,255,255); --teb-button-border:rgb(107,107,107); --teb-conversation-line:rgb(51,54,57); --teb-avatar-placeholder:rgb(22,24,28); --teb-profile-background:rgb(0,0,0); --teb-profile-placeholder:rgb(47,51,54); --teb-profile-button:rgb(239,243,244); --teb-profile-button-text:rgb(15,20,25); --teb-profile-button-border:rgb(83,100,113); --teb-code-background:rgb(22,24,28); --teb-code-inline-background:rgb(47,51,54); --teb-menu-shadow:0 0 15px rgba(255,255,255,.2),0 0 3px 1px rgba(255,255,255,.15); }
	&[data-teb-theme="light"]{ --teb-poll-bar:rgb(207,217,222); --teb-poll-winner:rgb(191,242,255); }
	&[data-teb-theme="dim"]{ --teb-poll-bar:rgb(56,68,77); --teb-poll-winner:rgb(0,56,86); }
	&[data-teb-theme="dark"]{ --teb-poll-bar:rgb(47,51,54); --teb-poll-winner:rgb(18,61,87); }
	&[data-teb-theme="light"]{ --teb-card-background:rgb(247,249,249); --teb-card-border:rgb(207,217,222); }
	&[data-teb-theme="dim"]{ --teb-card-background:rgb(30,39,50); --teb-card-border:rgb(83,100,113); }
	&[data-teb-theme="dark"]{ --teb-card-background:rgb(22,24,29); --teb-card-border:rgb(113,117,122); }
	& [data-teb-part="text"], & [data-teb-part="name"]{
		color: inherit;
	}
	& [data-teb-part="text"] a{ color: var(--teb-link, rgb(29, 155, 240)); }
	& [data-teb-part="showMore"]{ color: var(--teb-link, #1d9bf0); background: transparent; border: 0; padding: 0; font: inherit; text-align: start; cursor: pointer; }
	& [data-teb-part="emoji"]{ display:inline-block; width:1.2em; height:1.2em; margin:0 .075em; vertical-align:-.2em; object-fit:contain; }
	/* 153256:tB / 112167:L: image pollの投票前カルーセル。 */
	& [data-teb-part="pollCarousel"]{ position:relative; width:100%; min-height:280px; margin-top:12px; overflow:hidden; }
	& [data-teb-part="pollCarousel"] [data-teb-part="pollChoices"]{ display:flex; width:100%; gap:12px; overflow-x:auto; overflow-y:hidden; scroll-snap-type:x mandatory; scrollbar-width:none; }
	& [data-teb-part="pollCarousel"] [data-teb-part="pollChoices"]::-webkit-scrollbar{ display:none; }
	& [data-teb-part="pollCarousel"] [data-teb-part="pollChoice"]{ box-sizing:border-box; width:240px; min-width:240px; flex:0 0 240px; flex-direction:column; scroll-snap-align:start; }
	& [data-teb-part="pollCarousel"] [data-teb-part="pollChoice"] > a{ display:block; width:240px; height:240px; overflow:hidden; border:1px solid var(--teb-border); border-radius:12px; }
	& [data-teb-part="pollCarousel"] [data-teb-part="pollChoice"] > a [data-teb-image]{ width:100%; height:100%; max-width:none; object-fit:cover; }
	& [data-teb-part="pollCarousel"] [data-teb-part="pollVote"]{ width:100%; min-height:32px; margin-top:8px; }
	& [data-teb-part="pollCarouselNav"]{ position:absolute; inset:0; display:flex; align-items:center; justify-content:space-between; pointer-events:none; }
	& [data-teb-part="pollCarouselPrevious"], & [data-teb-part="pollCarouselNext"]{ display:flex; width:32px; height:32px; align-items:center; justify-content:center; border:0; border-radius:9999px; color:#0f1419; background:rgba(255,255,255,.85); pointer-events:auto; cursor:pointer; }
	& [data-teb-part="pollCarouselPrevious"][hidden], & [data-teb-part="pollCarouselNext"][hidden]{ display:none; }
	& [data-teb-part="pollCarouselPrevious"] svg, & [data-teb-part="pollCarouselNext"] svg{ width:20px; height:20px; fill:currentColor; }
	& [data-teb-part="pollVideo"]{ display:block; width:100%; max-height:510px; margin-top:12px; border-radius:12px; background:#000; object-fit:contain; }
	& [data-teb-part="avatar"]{ width: 40px; height: 40px; object-fit: cover; }
	& [data-teb-part="avatarLink"]{ width: 40px; height: 40px; }
	& [data-teb-part="authorLabel"]{ display: flex; max-width: 100%; align-items: flex-start; margin-top: 4px; color: var(--teb-muted, #71767b); font-size: 15px; line-height: 20px; text-decoration: none; }
	& [data-teb-part="authorLabel"]:is(:hover,:focus-visible) [data-teb-part="authorLabelText"]{ text-decoration: underline; }
	& [data-teb-part="authorLabelIcon"]{ width: 17px; height: 17px; margin-top: 1px; margin-inline-end: 4px; flex: 0 0 auto; color: var(--teb-muted, #71767b); }
	& [data-teb-part="authorLabelIcon"] svg{ width: 100%; height: 100%; fill: currentColor; }
	& [data-teb-part="authorLabelIcon"] [data-teb-image]{ width: 100%; height: 100%; }
	& [data-teb-part="authorLabelText"]{ min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
	& [data-teb-badge="affiliate"]{ display: inline-flex; width: 17px; height: 17px; margin-inline-start: 4px; flex: 0 0 auto; }
	& [data-teb-badge="affiliate"] [data-teb-image]{ width: 100%; height: 100%; border: 1px solid var(--teb-border, #2f3336); border-radius: 4px; }
	& [data-teb-part="quoteCommunityRole"]{ display:inline-flex; height:20px; max-width:100%; flex:0 0 auto; align-items:center; padding:0 8px; border-radius:4px; background:var(--teb-text); color:var(--teb-background); font-size:11px; line-height:20px; font-weight:700; }
	& [data-teb-part="quoteCommunityRole"][data-teb-role="Member"]{ background:var(--teb-background); color:var(--teb-text); }
	& [data-teb-part="quoteAuthorLabel"]{ display:flex; max-width:100%; min-width:0; flex-shrink:1; margin:4px 12px 0; }
	& [data-teb-part="quoteAuthorLabelLink"]{ display:flex; max-width:100%; min-width:0; align-items:flex-start; color:var(--teb-muted); font-size:15px; line-height:20px; text-decoration:none; }
	& [data-teb-part="quoteAuthorLabelLink"]:is(:hover,:focus-visible) [data-teb-part="quoteAuthorLabelText"]{ text-decoration:underline; }
	& [data-teb-part="quoteAuthorLabelIcon"]{ width:17px; height:17px; margin:1px 4px 0 0; flex:0 0 auto; }
	& [data-teb-part="quoteAuthorLabelIcon"] svg, & [data-teb-part="quoteAuthorLabelIcon"] [data-teb-image]{ width:100%; height:100%; }
	& [data-teb-part="quoteAuthorLabelText"]{ min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
	& [data-teb-part="notices"]{ color: inherit; }
	& [data-teb-part="editLabel"]{ color: var(--teb-muted, #71767b); white-space: nowrap; }
	& [data-teb-part="staleEditCallout"]{ display: flex; flex-wrap: wrap; gap: 8px; padding: 16px 4px; border-top: 1px solid var(--teb-border, #2f3336); color: var(--teb-muted, #71767b); }
	& [data-teb-part="staleEditLink"]{ color: var(--teb-link, #1d9bf0); }
	& [data-teb-part="article"]{ display: block; color: inherit; text-decoration: none; border: 1px solid var(--teb-border, rgb(47, 51, 54)); border-radius: 16px; margin-top: 12px; overflow: hidden; }
	& [data-teb-part="articleCover"]{ position: relative; display: block; aspect-ratio: 2.5; overflow: hidden; }
	& [data-teb-part="articleBody"]{ padding: 12px; min-width: 0; }
	& [data-teb-part="articleHeader"]{ display: flex; align-items: flex-start; min-width: 0; }
	& [data-teb-part="articleTitle"]{ flex: 1 1 auto; min-width: 0; margin-bottom: 8px; font-size: 20px; line-height: 24px; font-weight: 800; overflow-wrap: anywhere; }
	& [data-teb-part="articlePreview"]{ display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 4; font-size: 15px; line-height: 20px; }
	& [data-teb-article-quote="true"]{ margin-top: 4px; border: 0; border-radius: 16px; }
	& [data-teb-article-quote="true"] [data-teb-part="articleCover"]{ border-radius: 16px; margin-bottom: 12px; }
	& [data-teb-article-quote="true"] [data-teb-part="articleBody"]{ padding: 0; }
	& [data-teb-part="quoteArticle"]{ max-width: 100%; padding-inline: 12px; min-width: 0; }
	& [data-teb-part="articleLabel"]{ display: inline-flex; align-items: center; height: 20px; padding: 0 8px; border-radius: 4px; flex-shrink: 0; font-size: 11px; line-height: 20px; font-weight: 700; }
	& [data-teb-part="articleReadView"]{ display: block; width: 100%; overflow: hidden; }
	& [data-teb-part="articleReadCover"]{ position: relative; width: 100%; aspect-ratio: 2.5; overflow: hidden; margin-bottom: 24px; }
	& [data-teb-part="articleReadContent"]{ min-width: 0; }
	& [data-teb-part="articleReadTitle"]{ margin: 12px 0 0; font-size: 28px; line-height: 32px; font-weight: 800; overflow-wrap: anywhere; }
	& [data-teb-part="articleReadBody"]{ padding-top: 20px; min-width: 0; }
	& [data-teb-part^="articleBlock-"]{ margin: 0 0 20px; font-size: 20px; line-height: 28px; white-space: pre-wrap; overflow-wrap: anywhere; }
	& [data-teb-part="articleBlock-header-one"]{ margin-top: 28px; font-size: 28px; line-height: 34px; font-weight: 700; }
	& [data-teb-part="articleBlock-header-two"]{ margin-top: 24px; font-size: 23px; line-height: 28px; font-weight: 800; }
	& [data-teb-part="articleBlock-blockquote"]{ padding-inline-start: 16px; border-inline-start: 4px solid var(--teb-border, rgb(83, 100, 113)); color: var(--teb-muted, rgb(113, 118, 123)); }
	& [data-teb-part="articleList"]{ margin: 0 0 20px; padding-inline-start: 28px; font-size: 20px; line-height: 28px; }
	& [data-teb-part="articleListItem"]{ margin-bottom: 8px; }
	& [data-teb-part="articleAtomic"]{ width: 100%; margin-bottom: 28px; }
	& [data-teb-part="articleDivider"]{ border: 0; border-top: 1px solid var(--teb-border, rgb(83, 100, 113)); }
	& [data-teb-part="articleMedia"]{ width: 100%; overflow: hidden; }
	& [data-teb-part="articleMedia"] > [data-teb-image="true"]{ width: 100%; aspect-ratio: var(--teb-image-ratio, 16 / 9); }
	& [data-teb-part="articleCaption"]{ margin-top: 8px; color: var(--teb-muted, rgb(113, 118, 123)); font-size: 13px; line-height: 16px; }
	& [data-teb-part="articleTweetEmbed"]{ overflow: hidden; border: 1px solid var(--teb-border, rgb(47, 51, 54)); border-radius: 16px; }
	& [data-teb-part="articleTweetEmbed"] > .tweet-element-builder{ border: 0; }
	& [data-teb-part="articleTweetFallback"]{ display: block; padding: 12px; color: inherit; text-decoration: none; }
	& [data-teb-part="articleLinkCard"]{ display: block; padding: 12px; border: 1px solid var(--teb-border, rgb(47, 51, 54)); border-radius: 16px; color: inherit; text-decoration: none; }
	& [data-teb-part="articleMarkdown"]{ display: block; width: 100%; overflow-wrap: anywhere; }
	& [data-teb-part="articleMarkdownParagraph"]{ display: block; margin: 0; }
	& [data-teb-part="articleMarkdownHeading"]{ display: block; margin: .5em 0; font-weight: 700; }
	& [data-teb-part="articleMarkdownList"]{ display: flex; flex-direction: column; gap: .3em; margin-block: .5em; padding-inline-start: 2em; }
	& [data-teb-part="articleMarkdownTableContainer"]{ display: block; width: 100%; overflow-x: auto; padding-block: 16px; }
	& [data-teb-part="articleMarkdownTableContainer"] table{ border-collapse: collapse; border: 1px solid var(--teb-border, rgb(83, 100, 113)); }
	& [data-teb-part="articleMarkdownTableContainer"] :is(th,td){ padding: 8px 12px; border: 1px solid var(--teb-border, rgb(83, 100, 113)); }
	& [data-teb-part="articleMarkdownTableContainer"] th{ font-weight: 700; background: var(--teb-code-background); }
	& [data-teb-part="articleMarkdownCode"]{ display: block; overflow-x: auto; margin: .5em 0; padding: 12px; border-radius: 8px; background: var(--teb-code-background); white-space: pre; }
	& [data-teb-part="articleMarkdownCodeSpan"]{ display: inline; padding: 1px 4px; border-radius: 4px; color: inherit; background: var(--teb-code-inline-background); font: 90% monospace; }
	& [data-teb-part="articleLatexBlock"]{ display: flex; width: 100%; justify-content: center; overflow-x: auto; padding: .75rem 0 1.75rem; font-size: 23px; }
	& [data-teb-part="articleLatexInline"]{ display: inline; }
	/* 492593: Community Notes pivot。通常投稿は角丸border、引用内は上borderだけ。 */
	& [data-teb-part="communityNote"]{ display:flex; flex-direction:column; overflow:hidden; margin-top:12px; border:1px solid var(--teb-border, #2f3336); border-radius:16px; color:inherit; }
	& [data-teb-part="communityNote"][data-teb-visual-style="Tentative"]{ border-style:dashed; color:var(--teb-muted, #71767b); }
	& [data-teb-part="communityNoteHeader"]{ display:flex; flex-direction:row; align-items:flex-start; min-height:48px; padding:12px; color:inherit; background:var(--teb-menu-hover-light); text-decoration:none; }
	& [data-teb-part="communityNoteHeaderMain"]{ display:flex; width:100%; min-width:0; flex-direction:row; align-items:flex-start; }
	& [data-teb-part="communityNoteIcon"]{ width:20px; height:20px; margin-inline-end:8px; flex:0 0 auto; color:var(--teb-text); fill:currentColor; }
	& [data-teb-community-note-icon="BirdwatchIconWriting"], & [data-teb-community-note-icon="BirdwatchStarRising"]{ color:rgb(0,186,124); }
	& [data-teb-visual-style="Tentative"] [data-teb-part="communityNoteIcon"]{ color:var(--teb-muted, #71767b); }
	& [data-teb-part="communityNoteTitle"]{ display:flex; min-width:0; flex:1; align-items:center; padding-block:2px; font-size:13px; line-height:16px; font-weight:700; }
	& [data-teb-part="communityNoteTitleDetail"]{ color:var(--teb-muted, #71767b); }
	& [data-teb-part="communityNoteArrow"]{ width:20px; height:20px; margin-inline-start:8px; flex:0 0 auto; fill:currentColor; }
	& [data-teb-part="communityNoteSubtitle"]{ padding:0 12px 12px; font-size:15px; line-height:20px; white-space:pre-wrap; overflow-wrap:anywhere; }
	& [data-teb-part="communityNoteSubtitle"] a{ color:var(--teb-link, #1d9bf0); }
	& [data-teb-part="communityNoteFooter"]{ padding-block:12px; color:var(--teb-muted, #71767b); font-size:13px; line-height:16px; }
	& [data-teb-part="communityNoteCta"]{ display:flex; flex-direction:row; flex-grow:1; align-items:center; justify-content:space-between; gap:12px; padding:12px; border-top:1px solid var(--teb-border, #2f3336); }
	& [data-teb-part="communityNoteCtaButton"]{ min-height:32px; padding:0 16px; border:1px solid var(--teb-link, #1d9bf0); border-radius:9999px; color:var(--teb-link, #1d9bf0); background:transparent; font:700 14px/16px inherit; text-decoration:none; }
	& [data-teb-part="communityNote"][data-teb-in-quote="true"]{ margin-top:0; border-width:1px 0 0; border-radius:0; background:transparent; }
	& [data-teb-part="communityNote"][data-teb-in-quote="true"] [data-teb-part="communityNoteHeader"]{ background:transparent; }
	& [data-teb-part="communityNote"][data-teb-in-quote="true"] [data-teb-part="communityNoteFooter"]{ display:none; }
	/* 636093/659900: cashtag finance cards. Network data is supplied through resolveCashtagAsset. */
	& [data-teb-part="cashtagCarousel"]{ position:relative; display:flex; width:100%; margin-top:8px; overflow:hidden; }
	& [data-teb-part="cashtagTrack"]{ display:flex; width:100%; overflow-x:auto; scroll-snap-type:x mandatory; scrollbar-width:none; }
	& [data-teb-part="cashtagTrack"]::-webkit-scrollbar{ display:none; }
	& [data-teb-part="cashtagSlide"]{ flex:0 0 92%; width:92%; min-width:0; margin-inline-end:8px; scroll-snap-align:start; }
	& [data-teb-part="cashtagCard"]{ box-sizing:border-box; display:flex; width:100%; min-width:0; overflow:hidden; border:1px solid var(--teb-border,#2f3336); color:inherit; background:var(--teb-menu-hover-light); text-decoration:none; }
	& [data-teb-part="cashtagCard"][data-teb-size-variant="0"]{ min-height:56px; flex-direction:row; align-items:center; padding:12px 8px; border-radius:12px; }
	& [data-teb-part="cashtagCard"][data-teb-size-variant="1"]{ min-height:198px; flex-direction:column; border-radius:16px; }
	& [data-teb-part="cashtagHeader"]{ display:flex; min-width:0; flex:1 1 auto; flex-direction:row; align-items:center; gap:8px; }
	& [data-teb-size-variant="1"] [data-teb-part="cashtagHeader"]{ width:100%; flex:0 0 auto; padding:12px 12px 4px; }
	& [data-teb-part="cashtagLogo"]{ width:32px; height:32px; flex:0 0 auto; overflow:hidden; border-radius:9999px; background:var(--teb-border); }
	& [data-teb-part="cashtagLogo"] [data-teb-image]{ width:100%; height:100%; }
	& [data-teb-part="cashtagIdentity"]{ display:flex; min-width:0; flex-direction:column; }
	& [data-teb-part="cashtagTicker"]{ overflow:hidden; font-size:15px; line-height:20px; font-weight:700; text-overflow:ellipsis; white-space:nowrap; }
	& [data-teb-part="cashtagName"]{ overflow:hidden; color:var(--teb-muted); font-size:13px; line-height:16px; text-overflow:ellipsis; white-space:nowrap; }
	& [data-teb-part="cashtagExchange"]{ color:var(--teb-muted); }
	& [data-teb-part="cashtagQuote"]{ display:flex; min-width:0; flex-direction:column; align-items:flex-end; margin-inline-start:auto; padding-inline-start:8px; }
	& [data-teb-part="cashtagPrice"]{ font-size:15px; line-height:20px; font-weight:700; white-space:nowrap; }
	& [data-teb-part="cashtagChange"]{ color:var(--teb-muted); font-size:13px; line-height:16px; white-space:nowrap; }
	& [data-teb-cashtag-trend="positive"] [data-teb-part="cashtagChange"]{ color:rgb(0,186,124); }
	& [data-teb-cashtag-trend="negative"] [data-teb-part="cashtagChange"]{ color:rgb(244,33,46); }
	& [data-teb-part="cashtagChart"]{ width:34%; min-width:50px; height:36px; margin-inline-start:8px; overflow:visible; }
	& [data-teb-size-variant="1"] [data-teb-part="cashtagChart"]{ width:100%; height:150px; min-width:0; margin:0; padding:0 12px 12px; }
	& [data-teb-part="cashtagChart"] path{ fill:none; stroke:var(--teb-muted); stroke-width:2; vector-effect:non-scaling-stroke; }
	& [data-teb-part="cashtagChartAfterHours"]{ stroke:rgb(113,118,123)!important; opacity:.6; }
	& [data-teb-part="cashtagInspectLine"]{ stroke:rgb(113,118,123)!important; stroke-width:1!important; }
	& [data-teb-part="cashtagInspectTime"]{ color:var(--teb-muted); font-size:11px; line-height:14px; white-space:nowrap; }
	& [data-teb-cashtag-trend="positive"] [data-teb-part="cashtagChart"] path{ stroke:rgb(0,186,124); }
	& [data-teb-cashtag-trend="negative"] [data-teb-part="cashtagChart"] path{ stroke:rgb(244,33,46); }
	& [data-teb-cashtag-unresolved="true"] [data-teb-part="cashtagChart"]{ opacity:.35; }
	& [data-teb-part="cashtagBackground"]{ position:absolute; inset:0; z-index:0; opacity:.16; background-position:center; background-size:cover; pointer-events:none; }
	& [data-teb-part="cashtagCard"] > :not([data-teb-part="cashtagBackground"]){ position:relative; z-index:1; }
	& [data-teb-part="cashtagFooter"]{ display:flex; width:calc(100% - 16px); min-width:0; min-height:32px; align-items:center; justify-content:space-between; gap:8px; margin:0 8px 8px; padding:4px 8px; border-radius:8px; color:var(--teb-muted); font-size:12px; line-height:16px; }
	& [data-teb-part="cashtagLivePrice"]{ min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
	& [data-teb-part="cashtagLivePriceValue"]{ color:var(--teb-text); font-weight:500; }
	& [data-teb-part="cashtagPlatforms"]{ display:flex; flex:0 0 auto; align-items:center; gap:4px; }
	& [data-teb-part="cashtagPlatform"]{ display:flex; max-width:112px; height:24px; align-items:center; gap:4px; overflow:hidden; padding:0 7px; border:1px solid var(--teb-border); border-radius:9999px; color:inherit; background:transparent; font:inherit; cursor:pointer; }
	& [data-teb-part="cashtagPlatform"] [data-teb-image]{ width:14px; height:14px; flex:0 0 auto; border-radius:9999px; }
	& [data-teb-part="cashtagPlatformName"]{ overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
	& [data-teb-cashtag-active="false"][data-teb-size-variant="1"] [data-teb-part="cashtagChart"],
	& [data-teb-cashtag-snapshot="true"][data-teb-size-variant="1"] [data-teb-part="cashtagChart"]{ height:170px; }
	& [data-teb-part="quoteCashtagAttachment"]{ width:100%; margin-top:8px; }
	& [data-teb-part="quoteCashtagAttachment"] [data-teb-part="cashtagCard"]{ border-radius:0; border-width:1px 0 0; background:transparent; }
	/* 153256 grok_share unified-card component. */
	& [data-teb-part="grokShare"]{ width:100%; margin-top:12px; overflow:hidden; border:1px solid var(--teb-border); border-radius:12px; color:inherit; background:var(--teb-background); }
	& [data-teb-part="grokShareMain"]{ display:block; color:inherit; text-decoration:none; cursor:pointer; }
	& [data-teb-part="grokShareHeader"]{ display:flex; align-items:flex-start; gap:8px; padding:12px 16px 4px; }
	& [data-teb-part="grokShareHeaderImage"]{ width:75px; max-height:50px; flex:0 0 auto; overflow:hidden; border-radius:4px; }
	& [data-teb-part="grokShareHeaderImage"] [data-teb-image]{ width:100%; height:50px; }
	& [data-teb-part="grokShareHeaderText"]{ min-width:0; flex:1; }
	& [data-teb-part="grokSharePrompt"]{ display:-webkit-box; overflow:hidden; -webkit-box-orient:vertical; -webkit-line-clamp:1; font-size:17px; line-height:20px; font-weight:700; }
	& [data-teb-part="grokShareMode"]{ color:var(--teb-muted); font-size:13px; line-height:16px; }
	& [data-teb-part="grokShareAnswer"]{ padding:4px 16px 16px; }
	& [data-teb-part="grokShareAnswerText"]{ display:-webkit-box; overflow:hidden; -webkit-box-orient:vertical; font-size:15px; line-height:20px; white-space:pre-wrap; overflow-wrap:anywhere; }
	& [data-teb-part="grokShareMore"]{ padding:0; border:0; color:var(--teb-link); background:transparent; font:inherit; cursor:pointer; }
	& [data-teb-part="grokShareImage"]{ position:relative; width:100%; aspect-ratio:1.5; overflow:hidden; border:1px solid var(--teb-border); border-radius:16px; }
	& [data-teb-part="grokShareImage"] [data-teb-image]{ width:100%; height:100%; }
	& [data-teb-part="grokShareImageOverlay"]{ position:absolute; inset-inline:0; top:0; display:flex; flex-direction:column; gap:8px; padding:16px; color:#fff; background:rgba(0,0,0,.3); }
	& [data-teb-part="grokShareSources"]{ display:flex; align-items:center; gap:8px; margin-bottom:8px; color:var(--teb-text); font-size:13px; line-height:16px; }
	& [data-teb-part="grokShareAnalysisPost"]{ min-width:0; margin:-12px 0 -4px -12px; padding:8px 12px; border-inline-start:2px solid var(--teb-border); }
	& [data-teb-part="grokShareAnalysisName"]{ overflow:hidden; font-size:13px; line-height:16px; font-weight:700; text-overflow:ellipsis; white-space:nowrap; }
	& [data-teb-part="grokShareAnalysisText"]{ display:-webkit-box; overflow:hidden; -webkit-box-orient:vertical; -webkit-line-clamp:2; font-size:13px; line-height:16px; }
	& [data-teb-part="grokShareContinue"]{ display:flex; width:calc(100% - 24px); min-height:40px; align-items:center; justify-content:center; margin:8px 12px 12px; padding:0 16px; border:0; border-radius:9999px; color:var(--teb-button-text); background:var(--teb-button-background); font:700 15px/20px inherit; cursor:pointer; }
	& [data-teb-part="grokFollowups"]{ position:relative; max-width:100%; margin-top:12px; }
	& [data-teb-part="grokFollowupsCarousel"]{ display:flex; width:100%; min-width:0; max-width:100%; flex-direction:row; gap:4px; overflow-x:auto; scrollbar-width:none; overscroll-behavior-inline:contain; }
	& [data-teb-part="grokFollowupsCarousel"]::-webkit-scrollbar{ display:none; }
	& [data-teb-part="grokFollowup"]{ display:flex; width:max-content; min-width:max-content; flex:0 0 auto; flex-direction:row; align-items:center; gap:4px; padding:4px 12px; border:1px solid var(--teb-border); border-radius:9999px; color:var(--teb-text); background:transparent; font-family:inherit; font-size:15px; font-weight:400; line-height:20px; cursor:pointer; transition:background-color .2s; }
	& [data-teb-part="grokFollowup"]:hover{ background:var(--teb-menu-hover-light); }
	& [data-teb-part="grokFollowupIcon"]{ position:relative; width:16px; height:16px; flex:0 0 auto; fill:currentColor; color:var(--teb-muted); transition:color .2s; }
	& [data-teb-part="grokFollowup"]:hover [data-teb-part="grokFollowupIcon"]{ color:var(--teb-text); }
	& [data-teb-part="grokFollowupsShadow"]{ position:absolute; top:0; z-index:1; width:12px; height:100%; pointer-events:none; }
	& [data-teb-part="grokFollowupsShadow"][data-teb-side="start"]{ inset-inline-start:0; background:linear-gradient(90deg,var(--teb-background),transparent); }
	& [data-teb-part="grokFollowupsShadow"][data-teb-side="end"]{ inset-inline-end:0; background:linear-gradient(90deg,transparent,var(--teb-background)); }
	& :is([data-teb-part="jetfuelFrame"],[data-teb-part="quoteJetfuelFrame"]){ width:100%; min-width:0; margin-top:4px; }
	& [data-teb-quote-layout="condensed"] [data-teb-part="quoteJetfuelFrame"]{ margin-top:8px; }
	/* 6687 summary card + 153256 card surface。binding変換後の表示構造。 */
	& [data-teb-part="card"]{ container:teb-card / inline-size; position:relative; display:flex; width:100%; margin-top:12px; overflow:hidden; color:inherit; text-decoration:none; }
	& [data-teb-part="card"][data-teb-size="large"]{ border:1px solid var(--teb-border, rgb(47,51,54)); border-radius:16px; }
	& [data-teb-part="card"][data-teb-size="large"] > [data-teb-image]{ width:100%; min-width:0; }
	& [data-teb-part="card"][data-teb-size="small"]{ min-height:92px; flex-direction:row; border:1px solid var(--teb-card-border, rgb(113,117,122)); border-radius:16px; background:var(--teb-card-background, rgb(22,24,29)); }
	& [data-teb-part="card"][data-teb-size="small"] > [data-teb-image]{ width:90px; min-width:90px; aspect-ratio:1; border-inline-end:1px solid var(--teb-card-border, rgb(113,117,122)); }
	& [data-teb-part="cardDetails"]{ display:flex; min-width:0; flex:1; flex-direction:column; justify-content:center; gap:2px; padding:12px; }
	& :is([data-teb-part="cardDomain"],[data-teb-part="cardTitle"],[data-teb-part="cardDescription"]){ display:-webkit-box; overflow:hidden; -webkit-box-orient:vertical; overflow-wrap:anywhere; }
	& [data-teb-part="cardDomain"]{ color:var(--teb-muted, #71767b); -webkit-line-clamp:1; }
	& [data-teb-part="cardTitle"]{ -webkit-line-clamp:2; }
	& [data-teb-part="cardDescription"]{ display:none; color:var(--teb-muted, #71767b); -webkit-line-clamp:1; }
	& [data-teb-part="cardTitleOverlay"].css-g5y9jx{ position:absolute; inset-inline:12px; bottom:12px; display:flex; height:20px; min-width:0; flex-direction:row; align-items:center; justify-content:flex-start; }
	& [data-teb-part="cardTitleLabel"].css-g5y9jx{ display:flex; max-width:100%; height:20px; min-width:0; flex-direction:row; align-items:center; justify-content:center; overflow:hidden; padding:0 8px; border-radius:4px; color:#fff; background:rgba(0,0,0,.77); }
	& [data-teb-part="cardTitleLabel"] [data-teb-part="cardTitle"]{ display:block; overflow:hidden; font:400 13px/16px "Segoe UI", Meiryo, system-ui, -apple-system, BlinkMacSystemFont, sans-serif; text-overflow:ellipsis; white-space:nowrap; }
	& [data-teb-part="cardAttribution"]{ display:block; align-self:flex-start; margin-top:4px; color:var(--teb-muted, #71767b); font-size:13px; line-height:16px; text-decoration:none; }
	& [data-teb-part="cardAppRating"]{ color:var(--teb-muted, #71767b); font-size:13px; line-height:16px; }
	& :is([data-teb-part="mediaPrevious"],[data-teb-part="mediaNext"]){ display:flex; width:32px; height:32px; align-items:center; justify-content:center; padding:0; border:0; border-radius:9999px; color:#fff; background-color:rgba(15,20,25,.75); box-shadow:0 0 4px rgba(0,0,0,.25); cursor:pointer; opacity:0; pointer-events:none; transition:opacity .2s, background-color .2s; }
	& [data-teb-part="mediaSizer"]:is(:hover,:focus-within) :is([data-teb-part="mediaPrevious"],[data-teb-part="mediaNext"]){ opacity:1; pointer-events:auto; }
	& :is([data-teb-part="mediaPrevious"],[data-teb-part="mediaNext"]):hover{ background-color:rgba(39,44,48,.75); }
	& :is([data-teb-part="mediaPrevious"],[data-teb-part="mediaNext"]) svg{ width:20px; height:20px; fill:currentColor; }
	& [data-teb-part="identity"]{ position: relative; min-width: 0; }
	& [data-teb-part="tweetMenuButton"]{ margin-inline-start: auto; flex: 0 0 auto; color: var(--teb-muted, #71767b); }
	& [data-teb-part="tweetMenuButton"] svg{ width: 20px; height: 20px; fill: currentColor; }
	&[data-teb-part="floatingMenuLayer"]{ position: fixed; z-index: 2147483647; inset: 0; pointer-events: none; background-color: transparent; }
	& :is([data-teb-part="tweetMenu"],[data-teb-part="shareMenu"]){ position: fixed; display: flex; flex-direction: column; min-width: 260px; max-width: min(320px, calc(100vw - 32px)); overflow: hidden; border-radius: 12px; color:var(--teb-text); background:var(--teb-background); box-shadow:var(--teb-menu-shadow); pointer-events: auto; }
	& :is([data-teb-part="tweetMenuItem"],[data-teb-part="shareMenuItem"]){ display: flex; width: 100%; min-height: 48px; align-items: center; gap: 12px; border: 0; padding: 12px 16px; background: transparent; color: inherit; font: inherit; font-weight: 700; text-align: start; cursor: pointer; }
	& :is([data-teb-part="tweetMenuItem"],[data-teb-part="shareMenuItem"]):not(:disabled):hover{ background:var(--teb-menu-hover-light); }
	& [data-teb-part="tweetMenuItem"][data-teb-danger="true"]{ color: rgb(244, 33, 46); }
	& :is([data-teb-part="tweetMenuItem"],[data-teb-part="shareMenuItem"]):disabled{ opacity: .5; cursor: default; }
	& [data-teb-part="shareMenuIcon"]{ width: 20px; height: 20px; flex: 0 0 auto; fill: currentColor; }
	& [data-teb-part="actions"]{ display:flex; flex-direction:row; justify-content:space-between; align-items:stretch; column-gap:4px; width:100%; min-width:0; max-width:600px; margin-top:12px; }
	& [data-teb-part="actionCell"]{ display:flex; min-width:0; flex:1 1 0%; justify-content:flex-start; align-items:stretch; }
	& [data-teb-part="actionCell"][data-teb-action-cell="bookmark"]{ flex:0 0 auto; margin-inline-end:8px; }
	& [data-teb-part="actionCell"][data-teb-action-cell="share"]{ flex:0 0 auto; }
	/* 2026-09-24 focal Tweet: action bar下のreply sorting / quotes導線。 */
	& [data-teb-part="detailControls"]{ display: flex; align-items: center; justify-content: space-between; min-height: 17px; margin-bottom: 12px; color: var(--teb-muted, #71767b); }
	& :is([data-teb-part="replySortButton"],[data-teb-part="viewQuotesLink"]){ display: inline-flex; align-items: center; gap: 2px; min-width: 0; border: 0; padding: 0; background: transparent; color: inherit; font: 500 14px/16px "Segoe UI", Meiryo, system-ui, -apple-system, BlinkMacSystemFont, sans-serif; text-decoration: none; cursor: pointer; white-space: nowrap; }
	& :is([data-teb-part="replySortButton"],[data-teb-part="viewQuotesLink"]):is(:hover,:focus-visible){ text-decoration: underline; }
	& :is([data-teb-part="replySortButton"],[data-teb-part="viewQuotesLink"]) svg{ width: 16px; height: 16px; flex: 0 0 auto; fill: currentColor; }
	/* 5876: gray700、innerのnowrap/transition、subtext2件数。 */
	& [data-teb-action]{ --teb-action-active:var(--teb-link, #1d9bf0); display:flex; height:20px; min-width:0; flex:0 0 auto; flex-direction:row; align-items:center; justify-content:center; gap:0; padding:0; color:var(--teb-muted, #71767b); font:400 15px/20px TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; cursor:pointer; white-space:nowrap; transition:color .2s; }
	& [data-teb-action="like"]{ --teb-action-active: var(--teb-like, #f91880); }
	& [data-teb-action="repost"]{ --teb-action-active: var(--teb-repost, #00ba7c); }
	& [data-teb-part="actionCount"]{ min-width:0; padding-inline:4px; font:400 13px/16px "Segoe UI", Meiryo, system-ui, -apple-system, BlinkMacSystemFont, sans-serif; }
	& [data-teb-part="actions"][data-teb-narrow-count="true"] [data-teb-part="actionCount"]{ min-width:0; padding-inline:4px; }
	& [data-teb-action] svg{ width: 1.25em; height: 1.25em; fill: currentColor; }
	&[data-teb-display-mode="detail"] [data-teb-part="actions"]{ height:48px; margin-top:0; padding-inline:4px; border-top:1px solid var(--teb-border, #2f3336); align-items:stretch; }
	&[data-teb-display-mode="detail"] [data-teb-part="actionCell"]{ flex:1 1 0%; }
	&[data-teb-display-mode="detail"] [data-teb-part="actionCell"][data-teb-action-cell="analytics"]{ display:none; }
	&[data-teb-display-mode="detail"] [data-teb-part="actionCell"][data-teb-action-cell="bookmark"]{ margin-inline-end:0; }
	&[data-teb-display-mode="detail"] [data-teb-part="actionCell"][data-teb-action-cell="share"]{ flex:0 0 auto; }
	&[data-teb-display-mode="detail"] [data-teb-action]{ height:47px; }
	&[data-teb-display-mode="detail"] [data-teb-action] svg{ width:22.5px; height:22.5px; }
	/* 5876: iconBackground(-8px) → 308886: transparent背景の10%/20%。 */
	& [data-teb-part="actionIcon"]{ position: relative; display: inline-flex; flex-shrink: 0; }
	& [data-teb-part="actionIcon"]::before{ content: ''; position: absolute; inset: -8px; border-radius: 9999px; pointer-events: none; background-color: transparent; transition: background-color .2s, box-shadow .2s; }
	& [data-teb-part="actionIcon"] svg{ position: relative; }
	& [data-teb-badge="subscriber"]{ color:#7856ff; fill:currentColor; }
	& [data-teb-badge="translator"]{ fill:currentColor; }
	& [data-teb-badge="translator"][data-teb-translator-type="moderator"]{ color:#ffd400; }
	& [data-teb-action]:not(:disabled):hover [data-teb-part="actionIcon"]::before{ background-color: color-mix(in srgb, var(--teb-action-active) 10%, transparent); }
	& [data-teb-action]:not(:disabled):active [data-teb-part="actionIcon"]::before{ background-color: color-mix(in srgb, var(--teb-action-active) 20%, transparent); }
	& [data-teb-action][aria-pressed="true"], & [data-teb-action]:not(:disabled):is(:hover, :focus-visible, :active){ color: var(--teb-action-active); }
	& [data-teb-action]:focus-visible{ outline: none; }
	& [data-teb-action]:focus-visible [data-teb-part="actionIcon"]::before{ box-shadow: 0 0 0 2px var(--teb-text, rgb(231,233,234)), 0 0 0 4px var(--teb-link, rgb(29,155,240)); }
	&[data-teb-keyboard-focus="true"]:focus-visible{ outline: 2px solid var(--teb-link, rgb(29,155,240)); outline-offset: -2px; }
	& [data-teb-action]:disabled{ opacity: .5; cursor: default; }
	& [hidden]{ display: none; }
}
@container teb-card (min-width:400px){
	[data-teb-owner-version="2026-09-17"][data-teb-part="card"][data-teb-size="small"] > [data-teb-image]{ width:110px; min-width:110px; }
	[data-teb-owner-version="2026-09-17"][data-teb-part="card"] [data-teb-part="cardDescription"]{ display:-webkit-box; }
}
@container teb-card (min-width:450px){
	[data-teb-owner-version="2026-09-17"][data-teb-part="card"][data-teb-size="small"] > [data-teb-image]{ width:130px; min-width:130px; }
	[data-teb-owner-version="2026-09-17"][data-teb-part="card"] [data-teb-part="cardTitle"]{ -webkit-line-clamp:1; }
	[data-teb-owner-version="2026-09-17"][data-teb-part="card"] [data-teb-part="cardDescription"]{ -webkit-line-clamp:2; }
}
@media (hover:none){
	.tweet-element-builder[data-teb-ui-version="2026-09-17"] [data-teb-part="mediaSizer"] :is([data-teb-part="mediaPrevious"],[data-teb-part="mediaNext"]){ opacity:1; pointer-events:auto; }
}`;
	function copy(value){
		return structuredClone(value);
	}
	function safeUrl(value){
		if(typeof value !== 'string' || !value)return null;
		try{
			const url = new URL(value, 'https://x.com');
			return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
		}catch{
			return null;
		}
	}
	function normalize(input){
		if(input == null)return {text: '', entities: {}, user: {}};
		if(typeof input !== 'object')throw new TypeError('TweetResultを指定してください。');
		let raw = copy(input);
		if(raw.__typename === 'TweetWithVisibilityResults'){
			if(raw.tombstone || raw.tombstoneInfo || raw.limitedActionResults || raw.mediaVisibilityResults){
				return {text: '', entities: {}, user: {}, unsupported: ['visibility'], unavailable: true};
			}
			raw = raw.tweet;
		}
		if(!raw || (raw.__typename && raw.__typename !== 'Tweet'))return {text: '', entities: {}, user: {}, unavailable: true};
		const legacy = raw.legacy || raw;
		if(typeof legacy.full_text !== 'string' && typeof legacy.text !== 'string')throw new TypeError('Tweet本文がありません。Card単体は渡せません。');
		// 336715/862410の本文選択と366829の著者フィールド変換の限定移植。
		const user = raw.core?.user_results?.result || raw.user || {};
		const normalizedUser = {...(user.legacy || user), ...user.core, ...user.relationship_perspectives};
		for(const [key, value] of Object.entries({id_str: user.rest_id, profile_image_url_https: user.avatar?.image_url, protected: user.privacy?.protected, verified: user.verification?.verified, verified_type: user.verification?.verified_type, is_blue_verified: user.is_blue_verified})){
			if(value !== undefined)normalizedUser[key] = value;
		}
		const model = {...legacy, id_str: raw.rest_id || legacy.id_str, user: normalizedUser};
		if(user.profile_image_shape !== undefined)normalizedUser.profile_image_shape = user.profile_image_shape;
		if(user.affiliates_highlighted_label?.label !== undefined)normalizedUser.highlightedLabel = user.affiliates_highlighted_label.label;
		if(user.profile_translation?.translator_type !== undefined){
			const type = String(user.profile_translation.translator_type).toLowerCase();
			normalizedUser.translator_type = ['none','badged','moderator'].includes(type) ? type : 'regular';
			normalizedUser.is_translator = ['badged','moderator'].includes(normalizedUser.translator_type);
		}
		model.text = legacy.withheld_text || legacy.full_text || legacy.text || '';
		model.entities = legacy.withheld_text ? legacy.withheld_entities || {} : legacy.entities || {};
		model.display_text_range = legacy.display_text_range || [0, model.text.length];
		model.card = raw.card?.legacy ? {...raw.card.legacy, url: raw.card.legacy.url || raw.card.rest_id} : raw.card;
		model.author_community_relationship = raw.author_community_relationship || legacy.author_community_relationship;
		// 336715: APIのjetfuel_attachment.payloadはTweetモデルのjetfuel_payloadになる。
		model.jetfuel_payload = raw.jetfuel_attachment?.payload ?? raw.jetfuel_payload ?? legacy.jetfuel_payload;
		const grokItems = raw.grok_share_attachment?.items || raw.grok_share_attachment;
		model.grok_share_attachment = Array.isArray(grokItems) ? grokItems.map(item=>({...item,mediaUrls:item.mediaUrls || item.media_urls || [],analysis_post:item.analysis_post || item.analysisPost})):[];
		model.grok_analysis_followups = Array.isArray(raw.grok_analysis_followups) ? raw.grok_analysis_followups.filter(value => typeof value === 'string' && value) : [];
		if(raw.birdwatch_pivot){
			const pivot = copy(raw.birdwatch_pivot), note = pivot.note;
			model.birdwatch_pivot = {
				...pivot,
				destinationUrl: pivot.destinationUrl ?? pivot.destination_url,
				iconType: pivot.iconType ?? pivot.icon_type,
				footerIconType: pivot.footerIconType ?? pivot.footer_icon_type,
				shorttitle: pivot.shorttitle ?? pivot.short_title,
				titleDetail: pivot.titleDetail ?? pivot.title_detail,
				visualStyle: pivot.visualStyle ?? pivot.visual_style,
				callToAction: pivot.callToAction ?? pivot.call_to_action,
				noteId: pivot.noteId ?? pivot.note_id ?? note?.rest_id,
				language: pivot.language ?? note?.language,
				isCommunityNoteTranslatable: pivot.isCommunityNoteTranslatable ?? pivot.is_community_note_translatable ?? note?.is_community_note_translatable,
			};
		}
		model.note_tweet = raw.note_tweet?.note_tweet_results?.result;
		if(model.note_tweet){
			model.note_tweet = {...model.note_tweet, richtext_tags: model.note_tweet.richtext?.richtext_tags || model.note_tweet.richtext_tags || [], inline_media: model.note_tweet.media?.inline_media || model.note_tweet.inline_media || []};
			if(raw.note_tweet.is_expandable !== undefined)model.note_tweet.is_expandable = raw.note_tweet.is_expandable;
		}
		model.quoted_status = raw.quoted_status_result?.result || raw.quoted_status;
		model.retweeted_status = legacy.retweeted_status_result?.result || raw.retweeted_status;
		const article = raw.article?.article_results?.result || raw.article;
		model.article = article?.rest_id && article?.title ? article : undefined;
		model.views = raw.views || legacy.views;
		model.post_image_description = raw.post_image_description || legacy.post_image_description;
		model.post_video_description = raw.post_video_description || legacy.post_video_description;
		// 937363: ey。先頭の$を除去し、rest_idで重複排除、最大3件。
		const seenCashtags = new Set();
		model.cashtag_attachments = Array.isArray(raw.cashtag_attachments) ? raw.cashtag_attachments.flatMap(item => {
			if(!item || typeof item.rest_id !== 'string')return [];
			const restId = item.rest_id.replace(/^\$/, '');
			if(!restId || seenCashtags.has(restId))return [];
			seenCashtags.add(restId);
			return [{...item, rest_id: restId, size_variant: item.size_variant ?? 0}];
		}).slice(0, 3) : [];
		if(model.extended_entities?.media){
			model.extended_entities.media = model.extended_entities.media.map(media => {
				const additional = media.additional_media_info;
				if(!additional?.source_user)return media;
				const source = additional.source_user.user_results?.result || additional.source_user.user || additional.source_user;
				const normalizedSource = {...(source.legacy || source), ...source.core, ...source.relationship_perspectives};
				if(source.rest_id !== undefined)normalizedSource.id_str = source.rest_id;
				if(source.avatar?.image_url !== undefined)normalizedSource.profile_image_url_https = source.avatar.image_url;
				return {...media, additional_media_info: {...additional, source_user: normalizedSource}};
			});
		}
		if(raw.edit_control){
			const {edit_control_initial, ...control} = raw.edit_control;
			model.edit_control = {...control, ...edit_control_initial};
		}
		const editIds = model.edit_control?.edit_tweet_ids;
		if(Array.isArray(editIds)){
			model.isEdited = editIds.length > 1 || !editIds.includes(model.id_str);
			model.isStaleEdit = editIds.at(-1) !== model.id_str;
		}
		model.unavailable = !!(raw.tombstoneInfo || raw.limitedActionResults || raw.mediaVisibilityResults || legacy.limited_actions || legacy.withheld_in_countries?.length);
		model.unsupported = [];
		return model;
	}
	function installStyles(doc){
		if(doc.querySelector(`style[data-teb-styles="${version}"]`))return;
		const style = doc.createElement('style');
		style.dataset.tebStyles = version;
		style.textContent = savedCss + bridgeCss;
		(doc.head || doc.documentElement).append(style);
	}
	function detectTheme(doc){
		if(!doc)return 'light';
		// X本体とユーザースクリプト側の既存判定に合わせる。indexはnight_modeの0/1/2とも一致する。
		const colors = ['#FFFFFF','#15202B','#000000'];
		const metaColor = doc.querySelector('head > meta[name="theme-color"]')?.content?.trim().toUpperCase();
		const metaIndex = colors.indexOf(metaColor);
		if(metaIndex >= 0)return themes[metaIndex];
		const cookie = String(doc.cookie || '').split(';').map(value => value.trim()).find(value => value.startsWith('night_mode='));
		let index = Number(cookie ? decodeURIComponent(cookie.slice('night_mode='.length)) : '') || 0;
		if(!Number.isInteger(index) || index < 0 || index >= themes.length)index = 0;
		return themes[index];
	}
	function tweetElementBuilder(input, options = {}){
		if(!textPort || !savedCss || !richPort)throw new Error('text.js、styles.js、rich.jsを先に読み込んでください。');
		if((options.uiVersion || version) !== version)throw new RangeError('未対応のUIバージョンです。');
		if(options.mediaLayout != null && !['carousel', 'grid'].includes(options.mediaLayout))throw new RangeError('mediaLayoutはcarouselまたはgridです。');
		if(options.displayMode != null && !['timeline', 'detail'].includes(options.displayMode))throw new RangeError('displayModeはtimelineまたはdetailです。');
		if(options.textVersion != null && !['old', 'new'].includes(options.textVersion))throw new RangeError('textVersionはoldまたはnewです。');
		if(options.theme != null && !['auto', ...themes].includes(options.theme))throw new RangeError('themeはauto、light、dim、darkのいずれかです。');
		if(options.promotedMaxTextLines != null && (!Number.isInteger(options.promotedMaxTextLines) || options.promotedMaxTextLines < 0))throw new RangeError('promotedMaxTextLinesは0以上の整数です。');
		if(options.pollTranslations != null && (!Array.isArray(options.pollTranslations) || options.pollTranslations.some(value => value != null && typeof value !== 'string')))throw new TypeError('pollTranslationsは文字列またはnullの配列です。');
		// callerのoptionsを変更せず、rich rendererにも同じ表示モードを渡す。
		options = {...options, displayMode: options.displayMode || 'timeline', textVersion: options.textVersion || 'new', theme: options.theme || 'auto'};
		const doc = options.document || root.document;
		if(!doc?.createElement)throw new Error('DOM documentが必要です。');
		options.locale ||= doc.documentElement?.lang || root.navigator?.language || 'en-US';
		const compatibilityTranslator = options.twitterTextI18n || options.i18n;
		function uiText(key, fallback, args = [], props = {}){
			try{
				const value = compatibilityTranslator ? (typeof compatibilityTranslator === 'function' ? compatibilityTranslator(key, args, props) : compatibilityTranslator.getText?.(key, args, props)) : i18nPort?.getText(key, {language: options.locale, textVersion: options.textVersion, args, props});
				return value == null || value === '' ? fallback : String(value);
			}catch{return fallback;}
		}
		options.uiText = uiText;
		const envelope = normalize(input);
		// 376934:getOriginalTweet。操作・本文・著者はリポスト元に属する。
		const repost = !envelope.unavailable && envelope.retweeted_status ? {id: envelope.id_str, user: envelope.user} : null;
		const model = repost ? normalize(envelope.retweeted_status) : envelope;
		let disposed = false;
		let selectedTheme = 'dark', themeObserver = null;
		let noteExpanded = false;
		let promotedExpanded = false;
		let richView = null;
		const articleEmbeddedTweets = new Map();
		installStyles(doc);
		function node(tag, classes = '', part){
			const element = doc.createElement(tag);
			const names = classes.split(/\s+/).filter(Boolean);
			element.className = [...names, ...names.map(name => `teb-${name}`)].join(' ');
			element.dataset.tebOwnerVersion = version;
			if(part)element.dataset.tebPart = part;
			return element;
		}
		function setLink(element, url){
			const href = safeUrl(url);
			if(href)element.href = href;
			else element.removeAttribute('href');
			element.rel = 'noopener noreferrer';
		}
		// 984627/540790の通常タイムライン: column → header slot → avatar/content row。
		const element = node('article', `${base} r-18u37iz r-1c4vpko r-1c7gwzm`);
		element.classList.add('tweet-element-builder');
		element.dataset.tebUiVersion = version;
		element.dataset.testid = 'tweet';
		element.setAttribute('role', 'article');
		const keyboardShortcutsEnabled = options.enableKeyboardShortcuts !== false;
		if(keyboardShortcutsEnabled){element.tabIndex = 0;element.dataset.tebKeyboardFocus = 'true';}
		const column = node('div', `${base} r-16y2uox r-1wbh5a2`);
		const headerSlot = node('div', `${base} r-ttdzmv`);
		const row = node('div', `${base} r-18u37iz`);
		row.dataset.tebPart = 'authorRow';
		const avatarCell = node('div', `${base} r-onrtq4 r-1wron08 r-1awozwy`);
		avatarCell.dataset.testid = 'Tweet-User-Avatar';
		const avatarLink = node('a', base, 'avatarLink');
		// 885048 ShapeClip.hex: 200x188の原版pathをobjectBoundingBoxへ正規化する。
		const avatarClipId = `teb-avatar-hex-${++avatarSerial}`;
		const avatarShapeSvg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
		avatarShapeSvg.dataset.tebPart = 'avatarShapeDefinition'; avatarShapeSvg.setAttribute('aria-hidden', 'true');
		avatarShapeSvg.setAttribute('width', '0'); avatarShapeSvg.setAttribute('height', '0'); avatarShapeSvg.style.position = 'absolute';
		const avatarClipPath = doc.createElementNS(avatarShapeSvg.namespaceURI, 'clipPath');
		avatarClipPath.id = avatarClipId; avatarClipPath.setAttribute('clipPathUnits', 'objectBoundingBox');
		const avatarClipPathShape = doc.createElementNS(avatarShapeSvg.namespaceURI, 'path');
		avatarClipPathShape.setAttribute('transform', 'scale(.005 .005319148936170213)');
		avatarClipPathShape.setAttribute('d', 'M193.248 69.51C185.95 54.1634 177.44 39.4234 167.798 25.43L164.688 20.96C160.859 15.4049 155.841 10.7724 149.998 7.3994C144.155 4.02636 137.633 1.99743 130.908 1.46004L125.448 1.02004C108.508-.340012 91.4873-.340012 74.5479 1.02004L69.0879 1.46004C62.3625 1.99743 55.8413 4.02636 49.9981 7.3994C44.155 10.7724 39.1367 15.4049 35.3079 20.96L32.1979 25.47C22.5561 39.4634 14.0458 54.2034 6.74789 69.55L4.39789 74.49C1.50233 80.5829 0 87.2441 0 93.99C0 100.736 1.50233 107.397 4.39789 113.49L6.74789 118.43C14.0458 133.777 22.5561 148.517 32.1979 162.51L35.3079 167.02C39.1367 172.575 44.155 177.208 49.9981 180.581C55.8413 183.954 62.3625 185.983 69.0879 186.52L74.5479 186.96C91.4873 188.32 108.508 188.32 125.448 186.96L130.908 186.52C137.638 185.976 144.163 183.938 150.006 180.554C155.85 177.17 160.865 172.526 164.688 166.96L167.798 162.45C177.44 148.457 185.95 133.717 193.248 118.37L195.598 113.43C198.493 107.337 199.996 100.676 199.996 93.93C199.996 87.1841 198.493 80.5229 195.598 74.43L193.248 69.51Z');
		avatarClipPath.append(avatarClipPathShape); avatarShapeSvg.append(avatarClipPath);
		const avatarImage = richPort.createImage({doc, node, safeUrl}, null);
		const avatar = avatarImage.img;
		avatar.dataset.tebPart = 'avatar';
		avatar.alt = '';
		avatar.hidden = true;
		avatarLink.append(avatarShapeSvg, avatarImage.element);
		avatarCell.append(avatarLink);
		const content = node('div', `${base} r-1iusvr4 r-16y2uox r-kzbkwu`);
		const identity = node('div', `${base} r-18u37iz r-1awozwy r-zl2h9q`);
		identity.dataset.tebPart = 'identity';
		identity.dataset.testid = 'User-Name';
		const name = node('a', textClasses.replace('r-16dba41', 'r-b88u0q'), 'name');
		const screenName = node('a', `${textClasses} r-1ez5h0i`, 'screenName');
		const nameLine = node('div', `${base} r-18u37iz r-1awozwy`, 'nameLine');
		const badges = node('span', 'css-1jxf684', 'authorBadges');
		nameLine.append(name, badges);
		const authorLabel = node('a', `${base} r-1awozwy`, 'authorLabel');
		const authorLabelIcon = node('span', 'css-1jxf684', 'authorLabelIcon');
		const authorLabelText = node('span', 'css-1jxf684', 'authorLabelText');
		authorLabel.append(authorLabelIcon, authorLabelText); authorLabel.hidden = true;
		const menuButton = node('button', richPort.actionClasses, 'tweetMenuButton');
		menuButton.type = 'button'; menuButton.dataset.testid = 'caret'; menuButton.hidden = true;
		menuButton.setAttribute('aria-label', uiText('more', 'More')); menuButton.setAttribute('aria-haspopup', 'menu'); menuButton.setAttribute('aria-expanded', 'false');
		const menuSvg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg'); menuSvg.setAttribute('viewBox', '0 0 24 24'); menuSvg.setAttribute('aria-hidden', 'true');
		const menuPath = doc.createElementNS('http://www.w3.org/2000/svg', 'path'); menuPath.setAttribute('d', 'M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z');
		menuSvg.append(menuPath); menuButton.append(menuSvg);
		const menuLayer = node('div', base, 'floatingMenuLayer'); menuLayer.classList.add('tweet-element-builder'); menuLayer.dataset.tebUiVersion = version;
		const tweetMenu = node('div', base, 'tweetMenu'); tweetMenu.hidden = true; tweetMenu.setAttribute('role', 'menu'); menuLayer.append(tweetMenu);
		identity.append(nameLine, screenName, menuButton);
		const text = node('div', textClasses, 'text');
		const showMore = node('button', 'css-1jxf684', 'showMore');
		showMore.type = 'button';
		showMore.textContent = uiText('showMore', 'Show more');
		showMore.hidden = true;
		showMore.addEventListener('click', () => { if(!disposed)setExpanded(true); });
		const replyContext = node('div', 'css-1jxf684', 'replyContext');
		replyContext.hidden = true;
		text.dataset.testid = 'tweetText';
		text.dir = 'auto';
		const attachments = node('div', `${base} r-1s2bzr4`);
		const notices = node('div', textClasses, 'notices');
		const permalink = node('a', 'css-1jxf684', 'permalink');
		// 互換用の参照だけ残す。原版にない補助リンクは表示しない。
		permalink.hidden = true;
		content.append(identity, authorLabel, replyContext, text, attachments, notices, permalink);
		const detailBody = node('div', base, 'detailBody');
		const metadata = node('div', 'css-1jxf684', 'metadata');
		const editLabel = node('a', 'css-1jxf684', 'editLabel');
		const timestampLink = node('a', 'css-1jxf684', 'timestampLink');
		const time = node('time');
		timestampLink.append(time);
		const viewsLink = node('a', 'css-1jxf684', 'views');
		metadata.append(editLabel, timestampLink, viewsLink);
		const staleEditCallout = node('div', `${base} r-18u37iz`, 'staleEditCallout');
		const staleEditText = node('span', 'css-1jxf684', 'staleEditText');
		const staleEditLink = node('a', 'css-1jxf684', 'staleEditLink');
		staleEditCallout.append(staleEditText, staleEditLink);
		row.append(avatarCell, content);
		column.append(headerSlot, row);
		const socialContext = node('div', `${base} r-18u37iz`, 'socialContext');
		let repostIcon = null;
		let repostLink = null;
		if(repost && !model.unavailable){
			// 91154 / 876679: avatar列の右端にアイコン、本文列にsubtext2。
			const iconCell = node('div', `${base} r-onrtq4 r-1wron08 r-obd0qt r-1777fci`, 'repostIconCell');
			repostIcon = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
			repostIcon.setAttribute('viewBox', '0 0 24 24');
			repostIcon.setAttribute('aria-hidden', 'true');
			repostIcon.dataset.tebPart = 'repostIcon';
			const path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
			path.setAttribute('d', 'M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z');
			repostIcon.append(path); iconCell.append(repostIcon);
			repostLink = node('a', 'css-1jxf684 r-n6v787 r-1cwl3u0 r-b88u0q', 'repostLink');
			const repostName = repost.user.name || repost.user.screen_name || uiText('user', 'User');
			repostLink.textContent = options.viewerId && repost.user.id_str === options.viewerId ? uiText('youReposted', 'You reposted') : uiText('tweetsRetweeted', `${repostName} reposted`, [repostName]);
			setLink(repostLink, repost.user.screen_name ? `https://x.com/${encodeURIComponent(repost.user.screen_name)}` : null);
			socialContext.append(iconCell, repostLink); headerSlot.append(socialContext);
		}
		element.append(column);
		const parts = {
			root: element,
			repost: repost ? {element: socialContext, link: repostLink, icon: repostIcon, id: repost.id, user: copy(repost.user)} : null,
			author: {avatar, avatarImage, avatarLink, avatarShapeDefinition: avatarShapeSvg, avatarClipPath, profileLink: name, name, screenName, badges, label: authorLabel, labelIcon: authorLabelIcon, labelText: authorLabelText, affiliate: null},
			menu: {button: menuButton, element: tweetMenu, layer: menuLayer, items: []},
			timestamp: {element: time, link: timestampLink}, views: viewsLink, metadata,
			edit: {label: editLabel, staleCallout: staleEditCallout, staleText: staleEditText, staleLink: staleEditLink},
			text: {element: text, links: []},
			replyContext: {element: replyContext, participants: [], links: []},
			permalink, attachments, notices, navigation: [], actions: {}, actionCells: {}, actionCounts: {}, actionsContainer: null,
			media: [], inlineMedia: [], carousels: [], cashtags: [], grokShare: null, grokFollowups: null, jetfuel: null, article: null, card: null, quote: null, poll: null, communityNote: null,
		};
		const warnings = [];
		let authorLabelImages = [];
		const badgeImagesByTarget = new Map();
		function disposeBadgeImages(target){
			for(const image of badgeImagesByTarget.get(target) || [])image.dispose();
			badgeImagesByTarget.delete(target);
		}
		const actionFields = {reply: ['reply_count'], repost: ['retweet_count', 'retweeted'], like: ['favorite_count', 'favorited'], analytics: ['views'], bookmark: ['bookmark_count', 'bookmarked'], share: [null]};
		const actionLabels = {reply: uiText('replyAction', 'Reply'), repost: uiText('repostAction', 'Repost'), like: uiText('likeAction', 'Like'), analytics: uiText('viewPostAnalytics', 'View post analytics'), bookmark: uiText('bookmarkAction', 'Bookmark'), share: uiText('shareAction', 'Share')};
		const actionOverrides = {};
		let actionContainerWidth = Number.isFinite(options.actionContainerWidth) ? options.actionContainerWidth : Infinity;
		const footer = node('div', `${base} r-18u37iz`, 'actions');
		parts.actionsContainer = footer;
		footer.setAttribute('role', 'group');
		footer.setAttribute('aria-label', uiText('postActions', 'Post actions'));
		content.append(footer);
		for(const action of Object.keys(actionFields)){
			const cell = node('div', `${base} r-18u37iz`, 'actionCell');
			cell.dataset.tebActionCell = action;
			const button = node(action === 'analytics' ? 'a' : 'button', richPort.actionClasses);
			if(action !== 'analytics')button.type = 'button';
			button.dataset.tebAction = action;
			button.dataset.testid = action === 'repost' ? 'retweet' : action;
			const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
			const svgClasses = richPort.actionSvgClasses.split(' ');
			svg.setAttribute('class', [...svgClasses, ...svgClasses.map(name => `teb-${name}`)].join(' '));
			svg.setAttribute('viewBox', '0 0 24 24');
			svg.setAttribute('aria-hidden', 'true');
			for(const d of richPort.actionIcons[action === 'repost' ? 'retweet' : action] || []){
				const path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
				path.setAttribute('d', d);
				svg.append(path);
			}
			const count = node('span', 'css-1jxf684 r-n6v787 r-1cwl3u0', 'actionCount');
			if(action === 'share')count.hidden = true;
			const icon = node('span', 'css-1jxf684', 'actionIcon');
			icon.append(svg);
			button.append(icon, count);
			cell.append(button); footer.append(cell);
			parts.actionCells[action] = cell;
			parts.actions[action] = button;
			parts.actionCounts[action] = count;
		}
		// 現行focal Tweetの操作バー直下: reply sortingとquote timelineへの導線。
		const detailControls = node('div', `${base} r-1awozwy r-18u37iz r-1wtj0ep r-6gpygo`, 'detailControls');
		const replySortButton = node('button', 'css-146c3p1 r-bcqeeo r-qvutc0 r-1tl8opc r-1b43r93 r-1cwl3u0 r-majxgm', 'replySortButton');
		replySortButton.type = 'button'; replySortButton.setAttribute('aria-haspopup', 'menu'); replySortButton.setAttribute('aria-expanded', 'false');
		replySortButton.setAttribute('aria-label', uiText('sortReplies', 'Sort replies'));
		const replySortLabel = node('span', 'css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc', 'replySortLabel');
		replySortLabel.textContent = uiText('mostRelevant', 'Most relevant');
		const replySortIcon = doc.createElementNS('http://www.w3.org/2000/svg', 'svg'); replySortIcon.setAttribute('viewBox', '0 0 24 24'); replySortIcon.setAttribute('aria-hidden', 'true');
		const replySortPath = doc.createElementNS('http://www.w3.org/2000/svg', 'path'); replySortPath.setAttribute('d', 'M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z'); replySortIcon.append(replySortPath); replySortButton.append(replySortLabel, replySortIcon);
		const viewQuotesLink = node('a', 'css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-1b43r93 r-1cwl3u0 r-majxgm r-1loqt21', 'viewQuotesLink');
		const viewQuotesLabel = node('span', 'css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc'); viewQuotesLabel.textContent = uiText('viewQuotes', 'View quotes');
		const viewQuotesIcon = doc.createElementNS('http://www.w3.org/2000/svg', 'svg'); viewQuotesIcon.setAttribute('viewBox', '0 0 24 24'); viewQuotesIcon.setAttribute('aria-hidden', 'true');
		const viewQuotesPath = doc.createElementNS('http://www.w3.org/2000/svg', 'path'); viewQuotesPath.setAttribute('d', 'M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z'); viewQuotesIcon.append(viewQuotesPath); viewQuotesLink.append(viewQuotesLabel, viewQuotesIcon);
		detailControls.append(replySortButton, viewQuotesLink);
		parts.detailControls = {element: detailControls, replySortButton, replySortLabel, viewQuotesLink};
		let replySort = 'relevance';
		replySortButton.addEventListener('click', event => {event.stopPropagation();element.dispatchEvent(new doc.defaultView.CustomEvent('teb:reply-sort', {bubbles:true,cancelable:true,detail:{selected:replySort,choices:['relevance','recency','likes'],originalEvent:event,view}}));});
		// 70427 + 450579/5876: action shortcutは l/r/t/s/b、media openはo。
		const shortcutActions = {l: 'like', r: 'reply', t: 'repost', s: 'share', b: 'bookmark'};
		if(keyboardShortcutsEnabled)for(const [key, action] of Object.entries(shortcutActions)){
			parts.actions[action].dataset.tebKeyboardShortcut = key;
			parts.actions[action].setAttribute('aria-keyshortcuts', key.toUpperCase());
		}
		function handleShortcut(event){
			if(!keyboardShortcutsEnabled || event.defaultPrevented || event.repeat || event.altKey || event.ctrlKey || event.metaKey)return;
			const target = event.target;
			if(target?.closest?.('input, textarea, select, [contenteditable="true"]'))return;
			const key = event.key.toLowerCase(), action = shortcutActions[key];
			if(action){
				const button = parts.actions[action]; if(button.disabled || button.getAttribute('aria-disabled') === 'true')return;
				const request = new doc.defaultView.CustomEvent('teb:shortcut', {bubbles:true,cancelable:true,detail:{key,action,originalEvent:event,view}});
				if(!element.dispatchEvent(request))return; event.preventDefault(); button.click(); return;
			}
			if(key === 'o' && (parts.media.length || parts.inlineMedia.length)){
				const media = parts.media[0] || parts.inlineMedia[0], request = new doc.defaultView.CustomEvent('teb:open-media', {bubbles:true,cancelable:true,detail:{key,media,originalEvent:event,view}});
				if(element.dispatchEvent(request))event.preventDefault();
			}
		}
		function applyTheme(value){
			selectedTheme = value;
			for(const target of [element, menuLayer, shareLayer])target.dataset.tebTheme = value;
			element.dispatchEvent(new doc.defaultView.CustomEvent('teb:themechange', {detail:{theme:value, mode:options.theme, view}}));
		}
		function stopThemeObserver(){
			themeObserver?.disconnect(); themeObserver = null;
		}
		function refreshAutoTheme(){if(!disposed && options.theme === 'auto')applyTheme(detectTheme(doc));}
		function startThemeObserver(){
			stopThemeObserver();
			themeObserver = new doc.defaultView.MutationObserver(refreshAutoTheme);
			for(const target of [doc.documentElement, doc.body])if(target)themeObserver.observe(target,{attributes:true,attributeFilter:['class','style','data-theme']});
			if(doc.head)themeObserver.observe(doc.head,{subtree:true,childList:true,attributes:true,attributeFilter:['content']});
		}
		function setTheme(value){
			assertActive();
			if(!['auto', ...themes].includes(value))throw new RangeError('themeはauto、light、dim、darkのいずれかです。');
			options.theme = value;
			if(value === 'auto'){startThemeObserver();refreshAutoTheme();}
			else{stopThemeObserver();applyTheme(value);}
			return view;
		}
		function getTheme(){return selectedTheme;}
		element.addEventListener('keydown',handleShortcut);
		parts.text.showMore = showMore;
		const view = {element, parts, warnings, uiVersion: version, displayMode: options.displayMode, setExpanded, setDisplayMode, setTheme, getTheme, refreshTimestamp: updateMetadata, setCreatedAt, setViewCount, setReplyCount, setQuoteCount, setReplySort, setEditControl, setAvatarShape, setAuthorBadges, setAuthorLabel, setAvatar, setAvater: setAvatar, setScreenName, setName, setText, setId, setCard, setPollTranslations, setMedia, setQuote, setJetfuelPayload, setCommunityNote, setCashtagAttachments, setGrokShareAttachment, setGrokAnalysisFollowups, setArticleEmbeddedTweet, setActionState, setMenuItems, openMenu, closeMenu, setShareItems, openShareMenu, closeShareMenu, refreshLayout, getState, dispose};
		let menuItems = [], menuOpen = false;
		function positionFloatingMenu(button, menu){
			const rect = button.getBoundingClientRect(), viewportWidth = doc.defaultView.innerWidth, viewportHeight = doc.defaultView.innerHeight;
			const width = Math.min(320, Math.max(260, menu.getBoundingClientRect().width || 260));
			const left = Math.max(8, Math.min(rect.right - width, viewportWidth - width - 8));
			const height = menu.getBoundingClientRect().height;
			const top = rect.bottom + height + 8 <= viewportHeight ? rect.bottom + 4 : Math.max(8, rect.top - height - 4);
			menu.style.left = `${left}px`; menu.style.top = `${top}px`;
		}
		function closeMenu(){
			if(disposed)return view;
			menuOpen = false; tweetMenu.hidden = true; menuLayer.remove(); menuButton.setAttribute('aria-expanded', 'false'); return view;
		}
		function openMenu(){
			assertActive(); if(!menuItems.length || menuButton.disabled)return view;
			closeShareMenu(); doc.body.append(menuLayer); menuOpen = true; tweetMenu.hidden = false; menuButton.setAttribute('aria-expanded', 'true'); positionFloatingMenu(menuButton, tweetMenu); tweetMenu.querySelector('[role="menuitem"]:not(:disabled)')?.focus(); return view;
		}
		function setMenuItems(items = []){
			assertActive(); if(!Array.isArray(items))throw new TypeError('menuItemsは配列です。');
			menuItems = items.map((item, index) => {
				if(!item || typeof item !== 'object' || typeof item.label !== 'string')throw new TypeError('menu itemにはlabelが必要です。');
				return {...item, id: item.id == null ? String(index) : String(item.id)};
			});
			parts.menu.items.splice(0, parts.menu.items.length); tweetMenu.replaceChildren();
			for(const item of menuItems){
				const button = node('button', 'css-1jxf684', 'tweetMenuItem'); button.type = 'button'; button.setAttribute('role', 'menuitem'); button.textContent = item.label; button.disabled = !!item.disabled;
				button.dataset.tebMenuItem = item.id; if(item.danger)button.dataset.tebDanger = 'true';
				button.addEventListener('click', event => {event.stopPropagation(); if(button.disabled)return; closeMenu(); element.dispatchEvent(new doc.defaultView.CustomEvent('teb:menu-action', {bubbles: true, cancelable: true, detail: {id: item.id, item: {...item}, originalEvent: event, view}}));});
				tweetMenu.append(button); parts.menu.items.push(button);
			}
			menuButton.hidden = !menuItems.length; menuButton.disabled = model.unavailable || options.withActionsDisabled === true; closeMenu(); return view;
		}
		menuButton.addEventListener('click', event => {event.stopPropagation(); menuOpen ? closeMenu() : openMenu();});
		const shareLayer = node('div', base, 'floatingMenuLayer'), shareMenu = node('div', base, 'shareMenu'); shareLayer.classList.add('tweet-element-builder'); shareLayer.dataset.tebUiVersion = version; shareMenu.hidden = true; shareMenu.setAttribute('role', 'menu'); shareLayer.append(shareMenu);
		parts.shareMenu = {button: parts.actions.share, element: shareMenu, layer: shareLayer, items: []};
		let shareItems = [], shareOpen = false;
		const shareIcons = {
			chat:['M12 4c-4.418 0-8 3.582-8 8 0 1.268.294 2.465.818 3.528.144.292.196.634.126.973l-.665 3.242 3.373-.63c.323-.061.647-.012.927.12C9.615 19.726 10.774 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-1.473 0-2.874-.32-4.136-.893l-3.949.74c-1.047.195-1.96-.733-1.745-1.777l.781-3.808C2.341 14.968 2 13.524 2 12z'],
			copyLink:['M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z'],
			nativeShare:richPort.actionIcons.share,
			download:['M11.99 16l-5.7-5.7L7.7 8.88l3.29 3.3V2.59h2v9.59l3.3-3.3 1.41 1.42-5.71 5.7zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z'],
		};
		function closeShareMenu(){if(disposed)return view;shareOpen=false;shareMenu.hidden=true;shareLayer.remove();parts.actions.share.setAttribute('aria-expanded','false');return view;}
		function openShareMenu(){assertActive();if(!shareItems.length||parts.actions.share.disabled)return view;closeMenu();doc.body.append(shareLayer);shareOpen=true;shareMenu.hidden=false;parts.actions.share.setAttribute('aria-expanded','true');positionFloatingMenu(parts.actions.share,shareMenu);shareMenu.querySelector('[role="menuitem"]:not(:disabled)')?.focus();return view;}
		function setShareItems(items){
			assertActive(); if(items == null)items=[{id:'chat',label:uiText('shareViaDirectMessage','Send via Direct Message')},{id:'copyLink',label:uiText('copyLink','Copy link')},{id:'nativeShare',label:uiText('sharePostVia','Share post via…')}];
			if(!Array.isArray(items))throw new TypeError('shareItemsは配列です。'); shareItems=items.map((item,index)=>({...item,id:item.id==null?String(index):String(item.id)}));
			parts.shareMenu.items.splice(0);shareMenu.replaceChildren();
			for(const item of shareItems){if(typeof item.label!=='string')throw new TypeError('share itemにはlabelが必要です。');const button=node('button','css-1jxf684','shareMenuItem');button.type='button';button.setAttribute('role','menuitem');button.disabled=!!item.disabled;button.dataset.tebShareItem=item.id;const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.dataset.tebPart='shareMenuIcon';svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');for(const d of item.iconPaths||shareIcons[item.id]||[]){const path=doc.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',d);svg.append(path);}const label=node('span','css-1jxf684');label.textContent=item.label;button.append(svg,label);button.addEventListener('click',event=>{event.stopPropagation();if(button.disabled)return;closeShareMenu();element.dispatchEvent(new doc.defaultView.CustomEvent('teb:share-action',{bubbles:true,cancelable:true,detail:{id:item.id,item:{...item},url:model.permalink,originalEvent:event,view}}));});shareMenu.append(button);parts.shareMenu.items.push(button);}
			closeShareMenu();return view;
		}
		parts.actions.share.setAttribute('aria-haspopup','menu');parts.actions.share.setAttribute('aria-expanded','false');parts.actions.share.addEventListener('click',event=>{event.stopPropagation();shareOpen?closeShareMenu():openShareMenu();});
		const repositionMenus=()=>{if(menuOpen)positionFloatingMenu(menuButton,tweetMenu);if(shareOpen)positionFloatingMenu(parts.actions.share,shareMenu);};
		const closeMenuFromDocument = event => {if(menuOpen&&!tweetMenu.contains(event.target)&&event.target!==menuButton)closeMenu();if(shareOpen&&!shareMenu.contains(event.target)&&event.target!==parts.actions.share)closeShareMenu();};
		const closeMenuFromKey = event => {if(event.key==='Escape'&&menuOpen){closeMenu();menuButton.focus();}else if(event.key==='Escape'&&shareOpen){closeShareMenu();parts.actions.share.focus();}};
		function moveMenuFocus(event){
			if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
			const items=[...event.currentTarget.querySelectorAll('[role="menuitem"]:not(:disabled)')];
			if(!items.length)return;
			event.preventDefault();
			const index=items.indexOf(doc.activeElement);
			const next=event.key==='Home'?0:event.key==='End'?items.length-1:event.key==='ArrowDown'?(index+1)%items.length:(index+items.length-1)%items.length;
			items[next].focus();
		}
		tweetMenu.addEventListener('keydown',moveMenuFocus);
		shareMenu.addEventListener('keydown',moveMenuFocus);
		doc.addEventListener('click', closeMenuFromDocument); doc.addEventListener('keydown', closeMenuFromKey);
		doc.defaultView.addEventListener('resize',repositionMenus);doc.defaultView.addEventListener('scroll',repositionMenus,true);
		let profileView = null;
		function setExpanded(value = true){
			assertActive();
			noteExpanded = !!value;
			promotedExpanded = !!value;
			updateText(); updateWarnings();
			return view;
		}
		function updateLayout(){
			const detail = options.displayMode === 'detail';
			element.dataset.tebDisplayMode = options.displayMode;
			view.displayMode = options.displayMode;
			for(const cls of ['r-kzbkwu', 'teb-r-kzbkwu'])content.classList.toggle(cls, !detail);
			// 984627:withFullWidthChildren。既存ノードを移動し外部イベントを保持。
			if(detail){
				column.append(detailBody);
				detailBody.append(replyContext, text, attachments, notices, metadata, permalink, staleEditCallout, footer, detailControls);
			}else{
				content.append(replyContext, text, attachments, notices, permalink, staleEditCallout, footer);
				// 398338:_renderUserName。timelineは name → handle → timestamp → caret の順。
				identity.insertBefore(metadata, menuButton);
				detailBody.remove();
			}
			for(const cls of ['r-1inkyih', 'r-135wba7']){
				text.classList.toggle(cls, detail); text.classList.toggle(`teb-${cls}`, detail);
			}
			for(const cls of ['r-a023e6', 'r-rjixqe']){
				text.classList.toggle(cls, !detail); text.classList.toggle(`teb-${cls}`, !detail);
			}
		}
		function updateMetadata(){
			const detail = options.displayMode === 'detail';
			const date = new Date(model.created_at);
			const valid = model.created_at != null && Number.isFinite(date.getTime()) && !model.unavailable;
			timestampLink.hidden = !valid;
			if(valid){
				const locale = options.locale;
				const zone = options.timeZone ? {timeZone: options.timeZone} : {};
				const format = config => new Intl.DateTimeFormat(locale, {...zone, ...config}).format(date);
				const full = `${format({hour: 'numeric', minute: '2-digit', hour12: true})} · ${format({year: 'numeric', month: 'long', day: 'numeric'})}`;
				let label = full;
				if(!detail){
					// 458924の通常relative経路。文言の地域化はIntlアダプター。
					const now = typeof options.now === 'function' ? options.now() : options.now ?? Date.now(), seconds = Math.floor((now - date.getTime()) / 1000);
					if(seconds <= -5)label = format({month: 'long', day: 'numeric'});
					else if(seconds <= 0)label = uiText('now', 'now');
					else if(seconds < 60)label = uiText('relativeSeconds', `${seconds}s`, {count: seconds});
					else if(seconds < 3600)label = uiText('relativeMinutes', `${Math.floor(seconds / 60)}m`, {count: Math.floor(seconds / 60)});
					else if(seconds < 86400)label = uiText('relativeHours', `${Math.floor(seconds / 3600)}h`, {count: Math.floor(seconds / 3600)});
					else label = format({...(new Date(now).getFullYear() !== date.getFullYear() ? {year: 'numeric'} : {}), month: 'long', day: 'numeric'});
				}
				time.dateTime = date.toISOString(); time.textContent = label;
				timestampLink.title = full; timestampLink.setAttribute('aria-label', full);
			}else{time.textContent = ''; time.removeAttribute('datetime');}
			const editedLatest = !!model.isEdited && !model.isStaleEdit;
			editLabel.hidden = !editedLatest;
			editLabel.textContent = editedLatest ? `${uiText('lastEdited', 'Last edited')} · ` : '';
			editLabel.setAttribute('aria-label', uiText('opensEditHistory', 'Opens edit history'));
			setLink(editLabel, editedLatest && model.permalink ? `${model.permalink}/history` : null);
			setLink(timestampLink, editedLatest && model.permalink ? `${model.permalink}/history` : model.permalink);
			const count = model.views?.count;
			viewsLink.hidden = !detail || model.unavailable || options.withViewCount === false || count == null || !/^\d+$/.test(String(count));
			viewsLink.textContent = viewsLink.hidden ? '' : ` · ${new Intl.NumberFormat(options.locale).format(BigInt(count))} ${uiText('viewsLabel', 'views')}`;
			setLink(viewsLink, model.permalink ? `${model.permalink}/analytics` : null);
			metadata.hidden = timestampLink.hidden && viewsLink.hidden && editLabel.hidden;
			const latestId = model.edit_control?.edit_tweet_ids?.at?.(-1);
			staleEditCallout.hidden = !(model.isEdited && model.isStaleEdit && latestId && model.user.screen_name);
			staleEditText.textContent = staleEditCallout.hidden ? '' : uiText('newPostVersion', 'There’s a new version of this post.');
			staleEditLink.textContent = staleEditCallout.hidden ? '' : uiText('viewLatestPost', 'View latest post');
			staleEditLink.setAttribute('aria-label', uiText('opensLatestPost', 'Opens the new version of this post'));
			setLink(staleEditLink, staleEditCallout.hidden ? null : `https://x.com/${encodeURIComponent(model.user.screen_name)}/status/${encodeURIComponent(latestId)}`);
		}
		function updateDetailControls(){
			// 937363:iA: viewerが存在し、元ポストのreply_countが1より多いfocal Tweetだけ。
			const detail = options.displayMode === 'detail' && !model.unavailable && options.withConversationControls !== false && !!options.viewerId && Number(model.reply_count || 0) > 1;
			detailControls.hidden = !detail;
			replySortButton.hidden = !detail || options.withReplySorting === false;
			const quoteCount = Number(model.quote_count);
			const isAuthor = !!options.viewerId && options.viewerId === model.user.id_str;
			viewQuotesLink.hidden = !detail || !(isAuthor || Number.isFinite(quoteCount) && quoteCount > 0);
			viewQuotesLabel.textContent = isAuthor ? uiText('viewActivity', 'View activity') : uiText('viewQuotes', 'View quotes');
			setLink(viewQuotesLink, !viewQuotesLink.hidden && model.permalink ? `${model.permalink}/quotes` : null);
			if(detail && replySortButton.hidden && viewQuotesLink.hidden)detailControls.hidden = true;
		}
		function updateBadges(user = model.user, target = badges, displayContext = 'content'){
			disposeBadgeImages(target);
			target.replaceChildren();
			if(target === badges)parts.author.affiliate = null;
			if(model.unavailable)return;
			const type = richPort.verifiedDisplayType(user);
			const entries = [...(type === 'none' ? [] : [type === 'blue' ? 'verified' : type])];
			function svgNode(tree){
				const svgElement = doc.createElementNS('http://www.w3.org/2000/svg', tree.tag);
				for(const [key, value] of Object.entries(tree.props || {})){
					if(['children', 'style', 'aria-hidden'].includes(key) || value == null)continue;
					const attr = {clipRule: 'clip-rule', fillRule: 'fill-rule', stopColor: 'stop-color'}[key] || key;
					svgElement.setAttribute(attr, String(value).replaceAll('TEB_BADGE_ID', `teb-badge-${badgeSerial}`));
				}
				for(const child of [tree.props?.children].flat().filter(Boolean))svgElement.append(svgNode(child));
				return svgElement;
			}
			for(const kind of entries){
				++badgeSerial;
				const icon = svgNode(richPort.authorIcons[kind]);
				const classes = richPort.actionSvgClasses.split(' ');
				icon.setAttribute('class', [...classes, ...classes.map(cls => `teb-${cls}`)].join(' '));
				icon.dataset.testid = kind === 'protected' ? 'icon-lock' : 'icon-verified';
				icon.setAttribute('role', 'img');
				icon.setAttribute('aria-label', kind === 'protected' ? uiText('protectedAccount', 'Protected account') : uiText('verifiedAccount', 'Verified account'));
				icon.dataset.tebBadge = kind;
				target.append(icon);
			}
			const label = user.highlightedLabel;
			if(label?.userLabelType === 'BusinessLabel' && label.userLabelDisplayType === 'Badge' && safeUrl(label.badge?.url)){
				const affiliate = node('a', 'css-1jxf684', 'authorAffiliate'); affiliate.dataset.tebBadge = 'affiliate';
				affiliate.setAttribute('aria-label', label.description || uiText('affiliation', 'Affiliation')); setLink(affiliate, label.url?.url);
				const image = richPort.createImage({doc, node, safeUrl}, label.badge.url, label.description || ''); affiliate.append(image.element); badgeImagesByTarget.set(target,[image]);
				target.append(affiliate); if(target === badges)parts.author.affiliate = affiliate;
			}
			if(displayContext === 'content' && (user.has_super_follower || model.has_super_follower)){
				const icon = svgNode(richPort.authorIcons.subscriber), classes = richPort.actionSvgClasses.split(' ');
				icon.setAttribute('class',[...classes,...classes.map(cls=>`teb-${cls}`)].join(' '));icon.dataset.testid='icon-subscriber';icon.setAttribute('role','img');icon.setAttribute('aria-label',uiText('subscriber','Subscriber'));icon.dataset.tebBadge='subscriber';target.append(icon);
			}
			const translatorType = String(user.translator_type || '').toLowerCase();
			if(displayContext !== 'content' && ['badged','moderator'].includes(translatorType)){
				const icon = svgNode(richPort.authorIcons.translator), classes = richPort.actionSvgClasses.split(' ');
				icon.setAttribute('class',[...classes,...classes.map(cls=>`teb-${cls}`)].join(' '));icon.setAttribute('role','img');icon.setAttribute('aria-label',uiText('translator','Translator'));icon.dataset.tebBadge='translator';icon.dataset.tebTranslatorType=translatorType;target.append(icon);
			}
			if(user.protected){
				const id = `teb-badge-${++badgeSerial}`;
				function svgNode(tree){
					const node = doc.createElementNS('http://www.w3.org/2000/svg', tree.tag);
					for(const [key, value] of Object.entries(tree.props || {})){if(['children','style','aria-hidden'].includes(key)||value==null)continue;node.setAttribute({clipRule:'clip-rule',fillRule:'fill-rule',stopColor:'stop-color'}[key]||key,String(value).replaceAll('TEB_BADGE_ID',id));}
					for(const child of [tree.props?.children].flat().filter(Boolean))node.append(svgNode(child)); return node;
				}
				const icon = svgNode(richPort.authorIcons.protected), classes = richPort.actionSvgClasses.split(' '); icon.setAttribute('class',[...classes,...classes.map(cls=>`teb-${cls}`)].join(' '));icon.dataset.testid='icon-lock';icon.setAttribute('role','img');icon.setAttribute('aria-label',uiText('protectedAccount','Protected account'));icon.dataset.tebBadge='protected';target.append(icon);
			}
			if(target === badges)updateAuthorLabel();
			return {affiliate: target.querySelector('[data-teb-badge="affiliate"]'), dispose:()=>disposeBadgeImages(target)};
		}
		function updateAuthorLabel(){
			for(const image of authorLabelImages.splice(0))image.dispose();
			authorLabelIcon.replaceChildren();
			const label = model.user.highlightedLabel;
			const badgeOnly = label?.userLabelType === 'BusinessLabel' && label.userLabelDisplayType === 'Badge';
			authorLabel.hidden = !label || badgeOnly || model.unavailable;
			if(authorLabel.hidden)authorLabelText.replaceChildren();
			else richPort.renderLabelText(authorLabelText, label, doc);
			setLink(authorLabel, authorLabel.hidden ? null : label.url?.url);
			if(authorLabel.hidden)return;
			if(label.userLabelType === 'AutomatedLabel'){
				const svg = doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');
				const path=doc.createElementNS(svg.namespaceURI,'path');path.setAttribute('d','M.998 15V9h2v6h-2zm22 0V9h-2v6h2zM12 2c-4.418 0-8 3.58-8 8v7c0 2.76 2.239 5 5 5h6c2.761 0 5-2.24 5-5v-7c0-4.42-3.582-8-8-8zM8.998 14c-1.105 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.895 2-2 2zm6 0c-1.104 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.896 2-2 2z');svg.append(path);authorLabelIcon.append(svg);
			}else if(safeUrl(label.badge?.url)){
				const image=richPort.createImage({doc,node,safeUrl},label.badge.url,'');authorLabelIcon.append(image.element);authorLabelImages.push(image);
			}
		}
		function updateActions(){
			// 450579 → 173584 / 5876: ActiveIconはisActiveの場合だけ選択する。
			const activePaths = {
				repost: 'M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z',
				like: 'M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z',
				bookmark: 'M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z',
			};
			for(const [action, [countKey, activeKey]] of Object.entries(actionFields)){
				const button = parts.actions[action];
				const count = action === 'analytics' ? (/^\d+$/.test(String(model.views?.count || '')) ? Number(model.views.count) : undefined) : countKey ? model[countKey] : undefined;
				const active = activeKey ? !!model[activeKey] : false;
				const extra = actionOverrides[action] || {};
				const disabled = !model.id_str || model.unavailable || options.withActionsDisabled === true || extra.disabled === true || extra.pending === true || (action === 'repost' && model.user.protected && !active);
				button.disabled = disabled; button.setAttribute('aria-disabled', String(disabled));
				if(action === 'analytics')setLink(button, disabled || !model.permalink ? null : `${model.permalink}/analytics`);
				button.setAttribute('aria-label', `${actionLabels[action]}${typeof count === 'number' ? ` ${count}` : ''}`);
				if(activeKey)button.setAttribute('aria-pressed', String(active));
				button.setAttribute('aria-busy', String(!!extra.pending));
				const paths = active && activePaths[action] ? [activePaths[action]] : richPort.actionIcons[action === 'repost' ? 'retweet' : action] || [];
				const svg = button.querySelector('svg');
				// buttonとSVG自身の同一性は保持し、外部リスナーを壊さない。
				if(svg.dataset.tebActive !== String(active)){
					svg.replaceChildren(...paths.map(d => {const path = doc.createElementNS('http://www.w3.org/2000/svg', 'path'); path.setAttribute('d', d); return path;}));
					svg.dataset.tebActive = String(active);
				}
				// 5876/683347 → ja 42876: truncate、通常小数1桁、5文字以上は0桁。
				// i18nランタイムの代わりにIntlを使用。containerWidth分岐は別途移植する。
				const formatCount = digits => new Intl.NumberFormat(options.locale, {notation: 'compact', maximumFractionDigits: digits, roundingMode: 'trunc'}).format(count);
				const formatted = typeof count === 'number' && count > 0 ? formatCount(1) : '';
				// 5876:w: xxSmall(320)未満、またはcompact文字列が5文字以上なら短いtruncate表記。
				parts.actionCounts[action].textContent = formatted && (actionContainerWidth < 320 || formatted.length >= 5) ? formatCount(0) : formatted;
				parts.actionCounts[action].title = typeof count === 'number' ? new Intl.NumberFormat(options.locale).format(count) : '';
				// 450579はinline=space-between / block=space-around。位置を変えず、追加の狭幅対応だけ件数側で行う。
				// analyticsを先に落とし、さらに狭い幅では全件数を隠して6アイコンを保持する。
				parts.actionCounts[action].hidden = action === 'share' || (options.displayMode === 'timeline' && action === 'bookmark') || actionContainerWidth < 320 || (action === 'analytics' && actionContainerWidth < 400);
			}
			footer.dataset.tebNarrowCount = String(actionContainerWidth < 500);
		}
		function refreshLayout(width){
			if(disposed)return view;
			const measured = Number.isFinite(width) ? width : footer.getBoundingClientRect().width;
			if(measured > 0 && measured !== actionContainerWidth){actionContainerWidth = measured;updateActions();}
			return view;
		}
		function setActionState(action, state = {}){
			assertActive();
			if(!Object.hasOwn(actionFields, action))throw new RangeError('未対応の操作です。');
			const [countKey, activeKey] = actionFields[action];
			if(state.count != null && !countKey)throw new TypeError('この操作には件数がありません。');
			if(state.count != null && (!Number.isFinite(state.count) || state.count < 0))throw new TypeError('件数は非負の数値です。');
			if(state.count != null){if(action === 'analytics')model.views={count:String(state.count)};else model[countKey] = state.count;}
			if(activeKey && state.active !== undefined)model[activeKey] = !!state.active;
			actionOverrides[action] = {...actionOverrides[action], ...state};
			updateActions();
			return view;
		}
		function assertActive(){
			if(disposed)throw new Error('破棄済みのtweetElementBuilderです。');
		}
		function refreshNavigation(){
			parts.navigation.splice(0, parts.navigation.length);
			for(const link of [avatarLink, name, screenName, permalink, timestampLink, ...(!editLabel.hidden ? [editLabel] : []), ...(!staleEditLink.hidden && staleEditLink.hasAttribute('href') ? [staleEditLink] : []), ...(!viewsLink.hidden ? [viewsLink] : []), ...(!viewQuotesLink.hidden ? [viewQuotesLink] : []), ...(parts.actions.analytics?.hasAttribute('href') ? [parts.actions.analytics] : []), ...parts.text.links]){
				if(link.hasAttribute('href'))parts.navigation.push({element: link, href: link.href, kind: parts.text.links.includes(link) ? 'entity' : link === viewsLink || link === parts.actions.analytics ? 'analytics' : link === viewQuotesLink ? 'quotes' : link === editLabel ? 'edit-history' : link === staleEditLink ? 'latest-edit' : link === permalink || link === timestampLink ? 'tweet' : 'profile'});
			}
			parts.navigation.push(...(richView?.parts.navigation || []));
			for(const labelLink of authorLabelText.querySelectorAll('[data-teb-label-href]'))parts.navigation.push({element:labelLink,href:labelLink.dataset.tebLabelHref,kind:'entity'});
			if(repostLink?.hasAttribute('href'))parts.navigation.push({element: repostLink, href: repostLink.href, kind: 'profile'});
			parts.navigation.push(...parts.replyContext.links.map(element => ({element, href: element.href, kind: element.dataset.tebReplyMore ? 'tweet' : 'profile'})));
		}
		function updateReplyContext(){
			const target = parts.replyContext;
			replyContext.replaceChildren(); target.links.length = 0; target.participants = [];
			const focal = options.displayMode === 'detail', position = options.conversationPosition;
			const self = model.self_thread;
			// 398338:_renderReplyContext / _shouldShowSelfThread。TLから渡す配置情報は任意。
			replyContext.hidden = !!(model.unavailable || !model.in_reply_to_status_id_str || (options.replyContext || 'isolated') !== 'isolated' || options.conversationTreeMetadata && !focal || self && position && !position.isStart || self && focal || options.withSelfThread && !position && self);
			if(replyContext.hidden)return;
			const people = richPort.replyParticipants(model);
			const direct = people.find(item => item.id_str === model.in_reply_to_user_id_str);
			if(!direct){replyContext.hidden = true;return;}
			target.participants = people;
			const others = people.filter(item => item !== direct);
			const shown = [direct, ...others.slice(0, others.length > 2 ? 1 : 2)];
			replyContext.append(doc.createTextNode(`${uiText('replyingTo', 'Replying to')}: `));
			for(const [index, user] of shown.entries()){
				if(index)replyContext.append(doc.createTextNode(', '));
				const unmentioned = model.unmentioned_user_ids?.includes(user.id_str);
				const name = node(unmentioned ? 'span' : 'a', 'css-1jxf684'); name.dir = 'ltr';
				name.textContent = `@${user.screen_name}`;
				if(!unmentioned){setLink(name, `https://x.com/${encodeURIComponent(user.screen_name)}`);target.links.push(name);}
				replyContext.append(name);
			}
			if(others.length > 2){
				const more = node('a', 'css-1jxf684'); more.dataset.tebReplyMore = 'true'; more.textContent = `, ${uiText('othersCount', `${others.length - 1} others`, {count: others.length - 1})}`;
				setLink(more, model.permalink ? `${model.permalink}/people` : null);
				replyContext.append(more); if(more.hasAttribute('href'))target.links.push(more);
			}
			// 原版style値。文言は既存の日本語DOMアダプター。
			replyContext.style.marginTop = focal ? '12px' : '0px';
			replyContext.style.marginBottom = focal ? '0px' : '2px';
		}
		function updateAuthor(){
			profileView?.close();
			const handle = model.user.screen_name || '';
			name.textContent = model.user.name || '';
			screenName.textContent = handle ? `@${handle}` : '';
			const url = handle ? `https://x.com/${encodeURIComponent(handle)}` : null;
			for(const link of [avatarLink, name, screenName])setLink(link, url);
			const src = safeUrl(model.user.profile_image_url_https);
			avatarImage.setSource(model.unavailable ? null : src, model.user.name || handle);
			avatar.hidden = !src || model.unavailable;
			avatar.alt = model.user.name || handle;
			avatarLink.setAttribute('aria-label', avatar.alt || uiText('profile', 'Profile'));
			avatarLink.dataset.testid = `UserAvatar-Container-${handle || 'unknown'}`;
			const requestedShape = model.user.profile_image_shape?.toLowerCase();
			const avatarShape = requestedShape === 'square' ? 'square' : ['hex', 'hexagon'].includes(requestedShape) ? 'hexagon' : 'circle';
			avatarLink.dataset.tebAvatarShape = avatarShape;
			avatarLink.style.clipPath = avatarShape === 'hexagon' ? `url(#${avatarClipId})` : '';
			avatarLink.style.borderRadius = avatarShape === 'hexagon' ? '0px' : '';
			avatarLink.dataset.tebAvatarUnavailable = String(!src);
			avatarLink.hidden = !!model.unavailable;
			model.permalink = model.id_str ? (handle ? `https://x.com/${encodeURIComponent(handle)}/status/${encodeURIComponent(model.id_str)}` : `https://x.com/i/status/${encodeURIComponent(model.id_str)}`) : undefined;
			setLink(permalink, model.permalink);
			permalink.hidden = true;
			parts.tweetUrl = model.permalink || null;
			updateMetadata();
			updateDetailControls();
			updateBadges();
			for(const link of parts.text.links){
				if(link.dataset.tebTimestamp != null)setLink(link, `${model.permalink || '/'}?t=${link.dataset.tebTimestamp}`);
			}
			richView?.updateContext();
			updateActions();
			updateReplyContext();
			refreshNavigation();
		}
		function updateText(){
			if(model.unavailable)return;
			const articleBody = options.displayMode === 'detail' && !model.isPreviewDisplay && model.article?.content_state?.blocks?.length;
			text.hidden = !!articleBody;
			if(articleBody){
				text.replaceChildren(); parts.text.links.splice(0, parts.text.links.length); showMore.hidden = true; text.style.removeProperty('display'); text.style.removeProperty('-webkit-line-clamp'); text.style.removeProperty('-webkit-box-orient'); text.style.removeProperty('overflow'); text.after(showMore); refreshNavigation();
				element.dispatchEvent(new doc.defaultView.CustomEvent('teb:partschange', {detail: {part: 'text', view}})); return;
			}
			const fragment = doc.createDocumentFragment();
			parts.text.links.splice(0, parts.text.links.length);
			const mediaCount = model.extended_entities?.media?.length || 0;
			// 398338:_renderTweetText → 842122:Xe。詳細では長文本文を選択する。
			// 398338:_renderTweetTextHWTweetのisExpanded → 842122:Xe。
			const note = (noteExpanded || options.displayMode === 'detail' && options.expandNote !== false) && model.note_tweet;
			const textModel = note && typeof note.text === 'string' ? {...model, text: note.text, entities: note.entity_set || {}, display_text_range: [0, note.text.length]} : model;
			let items = textPort.displayParts(textModel, {
				withMediaLinks: !mediaCount || parts.media.length !== mediaCount,
				withQuoteLinks: !parts.quote || parts.quote.unavailable,
				withCardLinks: !parts.card && !parts.poll,
			});
			// 229797: ArticleCardと重複する/i/article/{id} URL entityを本文から除く。
			if(model.article?.rest_id)items = items.filter(part => !String(part.expandedUrl || '').includes(`/i/article/${model.article.rest_id}`));
			const richtextTags = note?.richtext_tags || [];
			const renderItems = note ? textPort.inlineMediaParts(items, note.inline_media) : items.map(part => ({type: 'text', part}));
			function appendTextSegment(parent, value, richtextTypes){
				for(const piece of options.nativeEmoji ? [{type:'text',text:value}] : textPort.twemojiSegments(value)){
					if(piece.type==='emoji'){
						const image=node('img','r-4qtqp9 r-dflpy8 r-k4bwe5 r-1kpi4qh r-pp5qcn r-h9hxbl','emoji');
						image.alt=piece.text;image.draggable=false;image.src=piece.url;parent.append(image);
						continue;
					}
					const span = node('span', 'css-1jxf684'); span.textContent = piece.text;
					if(richtextTypes.includes('Bold')){span.style.fontWeight = '700';span.dataset.tebRichtextBold = 'true';}
					if(richtextTypes.includes('Italic')){span.style.fontStyle = 'italic';span.dataset.tebRichtextItalic = 'true';}
					parent.append(span);
				}
			}
			for(const item of renderItems){
				if(item.type === 'media'){
					const inline = richView?.renderInlineMedia(item.media.media_id);
					if(inline){
						if(fragment.childNodes.length)fragment.append(doc.createTextNode('\n'));
						fragment.append(inline);
					}
					continue;
				}
				const part = item.part;
				const display = part.entityType === 'smarttag' ? `${part.prefix}${part.ticker ?? part.text}` : part.displayUrl ?? `${part.prefix || ''}${part.text || ''}`;
				const child = node(part.entityType === 'text' ? 'span' : 'a', 'css-1jxf684 r-bcqeeo r-qvutc0 r-poiln3');
				// 746144:kと同じく、indices/rich textを処理してから各描画片を復元する。
				const segments = textPort.richTextSegments(display, part.indices || [0, display.length], richtextTags, part.entityType !== 'text');
				for(const segment of segments){
					appendTextSegment(child,textPort.decodeHtmlEntities(segment.text),segment.richtextTypes);
				}
				if(part.entityType !== 'text'){
					if(part.entityType === 'mention'){child.dataset.tebMention = part.screen_name || part.text; if(part.id_str)child.dataset.tebMentionId = part.id_str;}
					// 746144の通常URL: 外部は短縮URL、X内は展開URL。
					let target = part.url;
					try{
						if(part.expandedUrl && ['x.com', 'twitter.com'].includes(new URL(part.expandedUrl).hostname))target = part.expandedUrl;
					}catch{}
					setLink(child, target);
					if(part.entityType === 'timestamp')child.dataset.tebTimestamp = String(new URL(target, 'https://x.com').searchParams.get('t'));
					parts.text.links.push(child);
				}
				fragment.append(child);
			}
			text.replaceChildren(fragment);
			const noteShowMore = !note && !!model.note_tweet?.is_expandable && typeof model.note_tweet?.text === 'string';
			// 398338:_renderTweetTextHWTweet。広告のcard/media付き本文のみ、既定2行に制限する。
			const promotedLines = options.promotedMaxTextLines ?? 2;
			const promotedShowMore = options.displayMode === 'timeline' && !!options.promotedContent && !promotedExpanded && !noteShowMore && promotedLines > 0 && !!(model.card || mediaCount);
			text.style.display = promotedShowMore ? '-webkit-box' : '';
			text.style.webkitLineClamp = promotedShowMore ? String(promotedLines) : '';
			text.style.webkitBoxOrient = promotedShowMore ? 'vertical' : '';
			text.style.overflow = promotedShowMore ? 'hidden' : '';
			showMore.hidden = !noteShowMore && !promotedShowMore;
			showMore.setAttribute('aria-expanded', String(!!note || promotedExpanded));
			text.after(showMore);
			refreshNavigation();
			const Event = doc.defaultView.CustomEvent;
			element.dispatchEvent(new Event('teb:partschange', {detail: {part: 'text', view}}));
		}
		function updateWarnings(){
			warnings.splice(0, warnings.length);
			if(model.unavailable)warnings.push('閲覧制限付きのポストは未移植のため表示しません。');
			warnings.push(...(richView?.warnings || []), ...(parts.quote?.warnings || []));
			if(model.retweeted_status)warnings.push('リポスト元の表示はまだ移植していません。');
			if(model.note_tweet?.inline_media?.some(item => !(model.extended_entities?.media || []).some(media => media.id_str === item.media_id)))warnings.push('長文の埋め込みメディアIDに対応するメディアがありません。');
			if(/grokbot:\/\//i.test(model.text))warnings.push('grokbotリンクの解析は未移植です。');
			for(const name of model.unsupported || [])warnings.push(`未移植: ${name}`);
			notices.textContent = warnings.join('\n');
			notices.hidden = !warnings.length;
		}
		function updateRich(){
			profileView?.close();
			richView?.dispose();
			attachments.replaceChildren();
			richView = richPort.mount({doc, model, options, node, setLink, safeUrl, normalize, textPort, renderBadges: updateBadges, container: attachments, buildTweet: tweetElementBuilder, articleEmbeddedTweets});
			for(const key of ['media', 'mediaInfo', 'inlineMedia', 'carousels', 'cashtags', 'grokShare', 'grokFollowups', 'jetfuel', 'article', 'card', 'poll', 'quote', 'communityNote'])parts[key] = richView.parts[key];
			refreshNavigation();
			element.dispatchEvent(new doc.defaultView.CustomEvent('teb:partschange', {detail: {part: 'attachments', view}}));
		}
		function setCard(value){
			assertActive();
			if(value !== null && typeof value !== 'object')throw new TypeError('Cardまたはnullを指定してください。');
			const card = copy(value?.legacy ? {...value.legacy, url: value.legacy.url || value.rest_id} : value);
			richPort.convertCard(card, options);
			model.card = card;
			updateRich(); updateText(); updateWarnings();
			return view;
		}
		function setPollTranslations(value){
			assertActive();
			if(value != null && (!Array.isArray(value) || value.some(item => item != null && typeof item !== 'string')))throw new TypeError('pollTranslationsは文字列またはnullの配列です。');
			options.pollTranslations = value == null ? null : [...value];
			updateRich(); updateText(); updateWarnings();
			return view;
		}
		function setMedia(value){
			assertActive();
			if(!Array.isArray(value))throw new TypeError('media配列を指定してください。');
			model.extended_entities = {...model.extended_entities, media: copy(value)};
			updateRich(); updateText(); updateWarnings();
			return view;
		}
		function setQuote(value){
			assertActive();
			if(value !== null && typeof value !== 'object')throw new TypeError('TweetResultまたはnullを指定してください。');
			model.quoted_status = copy(value);
			model.is_quote_status = !!value;
			model.quoted_status_id_str = value?.rest_id || value?.tweet?.rest_id || value?.legacy?.id_str;
			updateRich(); updateText(); updateWarnings();
			return view;
		}
		function setJetfuelPayload(value){
			assertActive();
			if(value !== null && value !== undefined && typeof value !== 'object' && typeof value !== 'string')throw new TypeError('jetfuelPayloadはpayload、null、またはundefinedです。');
			model.jetfuel_payload = value == null ? undefined : copy(value);
			updateRich(); updateText(); updateWarnings();
			return view;
		}
		function setCommunityNote(value){
			assertActive();
			if(value !== null && (typeof value !== 'object' || Array.isArray(value)))throw new TypeError('communityNoteはbirdwatch_pivotオブジェクトまたはnullです。');
			model.birdwatch_pivot = value == null ? null : normalize({legacy:{full_text:''},birdwatch_pivot:value}).birdwatch_pivot;
			updateRich(); updateWarnings(); return view;
		}
		function setCashtagAttachments(value){
			assertActive();
			if(!Array.isArray(value))throw new TypeError('cashtagAttachmentsは配列です。');
			model.cashtag_attachments = normalize({legacy:{full_text:''},cashtag_attachments:value}).cashtag_attachments;
			updateRich(); updateWarnings(); return view;
		}
		function setGrokShareAttachment(value){
			assertActive();
			if(!Array.isArray(value))throw new TypeError('grokShareAttachmentは配列です。');
			model.grok_share_attachment=normalize({legacy:{full_text:''},grok_share_attachment:{items:value}}).grok_share_attachment;
			updateRich();updateWarnings();return view;
		}
		function setGrokAnalysisFollowups(value){
			assertActive();
			if(!Array.isArray(value) || value.some(item => typeof item !== 'string'))throw new TypeError('grokAnalysisFollowupsは文字列配列です。');
			model.grok_analysis_followups=value.filter(Boolean);
			updateRich();updateWarnings();return view;
		}
		function setArticleEmbeddedTweet(tweetId, value){
			assertActive();
			if(typeof tweetId !== 'string' || !tweetId)throw new TypeError('埋め込みポストIDは空でない文字列です。');
			if(value !== null && typeof value !== 'object')throw new TypeError('TweetResultまたはnullを指定してください。');
			if(value === null)articleEmbeddedTweets.delete(tweetId);
			else articleEmbeddedTweets.set(tweetId, copy(value));
			const embed = parts.article?.embeds?.find(item => item.type === 'tweet' && item.tweetId === tweetId);
			if(embed)embed.setTweet(value);
			return view;
		}
		function setScreenName(value){
			assertActive();
			if(typeof value !== 'string')throw new TypeError('screenNameは文字列です。');
			model.user.screen_name = value.replace(/^@/, '');
			updateAuthor();
			return view;
		}
		function setDisplayMode(value){
			assertActive();
			if(!['timeline', 'detail'].includes(value))throw new RangeError('displayModeはtimelineまたはdetailです。');
			options.displayMode = value;
			updateLayout(); updateAuthor(); updateRich(); updateText(); updateActions(); updateWarnings();
			return view;
		}
		function setCreatedAt(value){
			assertActive();
			if(value !== null && !Number.isFinite(new Date(value).getTime()))throw new TypeError('有効な日時またはnullを指定してください。');
			model.created_at = value === null ? undefined : new Date(value).toISOString();
			updateMetadata(); refreshNavigation(); return view;
		}
		function setViewCount(value){
			assertActive();
			if(typeof value === 'number' && !Number.isSafeInteger(value))throw new TypeError('大きな閲覧数は文字列で指定してください。');
			if(value !== null && !/^\d+$/.test(String(value)))throw new TypeError('閲覧数は非負整数の文字列またはnullです。');
			model.views = value === null ? undefined : {count: String(value)};
			updateMetadata(); updateActions(); refreshNavigation(); return view;
		}
		function setQuoteCount(value){
			assertActive();
			if(value !== null && (!Number.isSafeInteger(value) || value < 0))throw new TypeError('引用数は非負の安全な整数またはnullです。');
			if(value === null)delete model.quote_count; else model.quote_count = value;
			updateDetailControls(); refreshNavigation(); return view;
		}
		function setReplyCount(value){
			assertActive();
			if(value !== null && (!Number.isSafeInteger(value) || value < 0))throw new TypeError('返信数は非負の安全な整数またはnullです。');
			if(value === null)delete model.reply_count; else model.reply_count = value;
			updateActions(); updateDetailControls(); refreshNavigation(); return view;
		}
		function setReplySort(value){
			assertActive();
			if(!['relevance', 'recency', 'likes'].includes(value))throw new RangeError('replySortはrelevance、recency、likesのいずれかです。');
			replySort = value;
			replySortLabel.textContent = value === 'recency' ? uiText('mostRecent', 'Most recent') : value === 'likes' ? uiText('mostLiked', 'Most liked') : uiText('mostRelevant', 'Most relevant');
			return view;
		}
		function setEditControl(value){
			assertActive();
			if(value !== null && typeof value !== 'object')throw new TypeError('editControlはオブジェクトまたはnullです。');
			if(value === null){delete model.edit_control;delete model.isEdited;delete model.isStaleEdit;}
			else{
				model.edit_control = copy(value.edit_control_initial ? {...value, ...value.edit_control_initial} : value);
				delete model.edit_control.edit_control_initial;
				const ids = model.edit_control.edit_tweet_ids;
				if(!Array.isArray(ids) || ids.some(id => typeof id !== 'string'))throw new TypeError('edit_tweet_idsは文字列配列です。');
				model.isEdited = ids.length > 1 || !ids.includes(model.id_str);
				model.isStaleEdit = ids.at(-1) !== model.id_str;
			}
			updateMetadata(); refreshNavigation(); return view;
		}
		function setAvatarShape(value){
			assertActive();
			if(!['circle', 'square', 'hexagon'].includes(value))throw new RangeError('avatarShapeはcircle、square、hexagonのいずれかです。');
			model.user.profile_image_shape = value; updateAuthor(); return view;
		}
		function setAuthorBadges(value = {}){
			assertActive();
			for(const key of ['verified', 'is_blue_verified', 'protected'])if(value[key] !== undefined)model.user[key] = !!value[key];
			if(value.verified_type !== undefined)model.user.verified_type = value.verified_type;
			if(value.has_super_follower !== undefined)model.has_super_follower = !!value.has_super_follower;
			if(value.translator_type !== undefined)model.user.translator_type = value.translator_type;
			updateBadges(); updateActions(); updateWarnings(); return view;
		}
		function setAuthorLabel(value){
			assertActive();
			if(value !== null && (typeof value !== 'object' || Array.isArray(value)))throw new TypeError('authorLabelはlabelオブジェクトまたはnullです。');
			model.user.highlightedLabel = value == null ? null : copy(value);
			updateBadges(); refreshNavigation(); return view;
		}
		function setName(value){
			assertActive();
			if(typeof value !== 'string')throw new TypeError('nameは文字列です。');
			model.user.name = value;
			updateAuthor();
			return view;
		}
		function setAvatar(value){
			assertActive();
			if(value !== null && typeof value !== 'string')throw new TypeError('avatarはURL文字列またはnullです。');
			if(value && !safeUrl(value))throw new TypeError('http/httpsのURLが必要です。');
			model.user.profile_image_url_https = value;
			updateAuthor();
			return view;
		}
		function setText(value, entities = {}){
			assertActive();
			if(typeof value !== 'string')throw new TypeError('textは文字列です。');
			model.text = value;
			// 明示setterは詳細表示の長文データより優先する。
			delete model.note_tweet;
			model.entities = copy(entities);
			model.display_text_range = [0, value.length];
			updateText();
			updateWarnings();
			return view;
		}
		function setId(value){
			assertActive();
			if(value !== null && typeof value !== 'string')throw new TypeError('IDは精度を失わないよう文字列で指定してください。');
			model.id_str = value;
			updateAuthor();
			return view;
		}
		function getState(){ return copy(model); }
		let actionResizeObserver = null;
		if(typeof doc.defaultView.ResizeObserver === 'function'){
			actionResizeObserver = new doc.defaultView.ResizeObserver(entries => {const width=entries[0]?.contentRect?.width;if(width>0)refreshLayout(width);});
			actionResizeObserver.observe(footer);
		}
		// 458924 Timestampは常時timerではなく、アプリがactiveへ戻った時に再描画する。
		const refreshTimestampOnForeground = () => {if(!disposed && doc.visibilityState !== 'hidden')updateMetadata();};
		if(options.autoUpdateTimestamp !== false){doc.addEventListener('visibilitychange',refreshTimestampOnForeground);doc.defaultView.addEventListener('focus',refreshTimestampOnForeground);doc.defaultView.addEventListener('pageshow',refreshTimestampOnForeground);}
		function dispose(){ if(disposed)return; closeMenu();closeShareMenu();stopThemeObserver();actionResizeObserver?.disconnect();element.removeEventListener('keydown',handleShortcut);tweetMenu.removeEventListener('keydown',moveMenuFocus);shareMenu.removeEventListener('keydown',moveMenuFocus);doc.removeEventListener('click',closeMenuFromDocument);doc.removeEventListener('keydown',closeMenuFromKey);doc.removeEventListener('visibilitychange',refreshTimestampOnForeground);doc.defaultView.removeEventListener('focus',refreshTimestampOnForeground);doc.defaultView.removeEventListener('pageshow',refreshTimestampOnForeground);doc.defaultView.removeEventListener('resize',repositionMenus);doc.defaultView.removeEventListener('scroll',repositionMenus,true);profileView?.dispose(); richView?.dispose(); avatarImage.dispose();for(const image of authorLabelImages.splice(0))image.dispose();for(const target of badgeImagesByTarget.keys())disposeBadgeImages(target); disposed = true; }
		setTheme(options.theme);
		updateLayout();
		updateAuthor();
		updateRich();
		if(!model.unavailable)updateText();
		else identity.hidden = true;
		updateWarnings();
		setMenuItems(options.menuItems || []);
		setShareItems(options.shareItems);
		if(profilePort && options.withProfileHover !== false){
			profileView = profilePort.attach({view, options, node, safeUrl, richPort, textPort, normalize, renderBadges: updateBadges});
			parts.profileHover = profileView.parts;
		}
		return view;
	}
	tweetElementBuilder.versions = Object.freeze([version]);
	tweetElementBuilder.normalize = normalize;
	tweetElementBuilder.detectTheme = detectTheme;
	tweetElementBuilder.themes = themes;
	tweetElementBuilder.i18n = i18nPort;
	tweetElementBuilder.loadTextData = options => i18nPort.load(options);
	if(isCommonJS)module.exports = tweetElementBuilder;
	else (root.TweetElementBuilderVersions ||= {})[version] = tweetElementBuilder;
})(globalThis);
