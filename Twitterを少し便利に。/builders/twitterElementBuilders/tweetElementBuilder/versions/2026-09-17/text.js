/* 737745: F / tweetTextParts, 133814, 713399, 229797: URL除外の限定移植。
 * 275554/746144: Note TweetのBold/Italic範囲合成。native Unicode表示・highlightなし。
 */
(function(root){
	'use strict';
	function toUTF16(text, start, end){
		const points = Array.from(text);
		if(text.length === points.length)return [start, end];
		const prefix = start === 0 ? '' : points.slice(0, start).join('');
		return [prefix.length, prefix.length + points.slice(start, end).join('').length];
	}
	function plain(text, indices){
		return {entityType: 'text', prefix: '', text: text.replace(/\r\n|[\r\v\f\u0085\u2028\u2029]/g, '\n'), indices};
	}
	// 746144: entity分割・rich text範囲処理の後、実際に描画する文字片だけを復元する。
	// APIのindicesはエンコード前の表示文字列を基準にするため、本文全体を先に置換してはならない。
	const htmlEntityReplacements = Object.freeze({'&amp;': '&', '&gt;': '>', '&lt;': '<', '&nbsp;': '\u00a0', '&quot;': '"', '&#39;': "'"});
	function decodeHtmlEntities(text){
		return typeof text === 'string' ? text.replace(/&amp;|&gt;|&lt;|&nbsp;|&quot;|&#39;/g, value => htmlEntityReplacements[value]) : text;
	}
	// 963688/407427: ZWJを含まない絵文字ではVS16をURLから除く。
	// Unicode RGI string propertyを使い、現在の絵文字列の境界を保つ。
	let emojiPattern;
	try{emojiPattern = new RegExp('\\p{RGI_Emoji}', 'gv');}catch{}
	function twemojiSegments(value){
		if(!emojiPattern || !value)return [{type:'text', text:value}];
		const result=[];
		let cursor=0;
		for(const match of value.matchAll(emojiPattern)){
			if(match.index>cursor)result.push({type:'text', text:value.slice(cursor,match.index)});
			const emoji=match[0], normalized=emoji.includes('\u200d')?emoji:emoji.replace(/\ufe0f/g,'');
			const code=[...normalized].map(point=>point.codePointAt(0).toString(16)).join('-');
			result.push({type:'emoji',text:emoji,url:`https://abs.twimg.com/emoji/v2/svg/${code}.svg`});
			cursor=match.index+emoji.length;
		}
		if(cursor<value.length)result.push({type:'text',text:value.slice(cursor)});
		return result.length?result:[{type:'text',text:value}];
	}
	function normalizeRichTextTags(tags = []){
		// 275554はfrom_index順にsortし、746144:fが重複を前・共通・後へ分割する。
		const sorted = tags.filter(tag => Number.isInteger(tag?.from_index) && Number.isInteger(tag?.to_index) && tag.from_index >= 0 && tag.to_index > tag.from_index && Array.isArray(tag.richtext_types)).map(tag => ({from_index: tag.from_index, to_index: tag.to_index, richtext_types: [...tag.richtext_types]})).sort((a, b) => a.from_index - b.from_index);
		const ranges = [];
		for(let index = 0; index < sorted.length; index++){
			const previous = sorted[index - 1], current = sorted[index];
			if(previous){
				if(previous.from_index === current.from_index && previous.to_index === current.to_index){
					previous.richtext_types = [...new Set(current.richtext_types.concat(previous.richtext_types))];
					continue;
				}
				if(current.from_index < previous.to_index){
					let remainder;
					const common = {from_index: current.from_index, to_index: current.to_index, richtext_types: [...new Set(current.richtext_types.concat(previous.richtext_types))]};
					if(previous.to_index > current.to_index){
						common.to_index = current.to_index;
						remainder = {from_index: common.to_index, to_index: previous.to_index, richtext_types: [...previous.richtext_types]};
					}else if(previous.to_index < current.to_index){
						common.to_index = previous.to_index;
						remainder = {from_index: common.to_index, to_index: current.to_index, richtext_types: [...current.richtext_types]};
					}
					previous.to_index = previous.from_index + (current.from_index - previous.from_index);
					ranges.push(common);
					if(remainder)ranges.push(remainder);
					continue;
				}
			}
			ranges.push(current);
		}
		return ranges;
	}
	function richTextSegments(text, indices, tags = [], isEntity = false){
		if(isEntity || !text || !tags.length)return [{text, richtextTypes: []}];
		const [start, end] = indices;
		let cursor = 0;
		const segments = [];
		for(const tag of normalizeRichTextTags(tags)){
			if(tag.from_index > end || tag.to_index < start)continue;
			const from = Math.max(cursor, Math.max(0, tag.from_index - start));
			const to = Math.max(from, Math.min(text.length, tag.to_index - start));
			if(cursor < from)segments.push({text: text.substring(cursor, from), richtextTypes: []});
			if(from < to)segments.push({text: text.substring(from, to), richtextTypes: tag.richtext_types.filter(type => type === 'Bold' || type === 'Italic')});
			cursor = Math.max(cursor, to);
		}
		if(cursor < text.length)segments.push({text: text.substring(cursor), richtextTypes: []});
		return segments.length ? segments : [{text, richtextTypes: []}];
	}
	// 229797:v/render。index 0は本文前、それ以外はindexを含むpartを二分して直後へ置く。
	function inlineMediaParts(parts, inlineMedia = []){
		const result = parts.map(part => ({type: 'text', part: {...part}}));
		for(const media of Array.isArray(inlineMedia) ? inlineMedia : []){
			if(!Number.isInteger(media?.index) || typeof media.media_id !== 'string')continue;
			if(media.index === 0){result.unshift({type: 'media', media});continue;}
			for(let index = 0; index < result.length; index++){
				const entry = result[index], part = entry.part;
				if(entry.type !== 'text' || !part?.indices)continue;
				const [from, to] = part.indices;
				if(!(media.index > from && media.index <= to))continue;
				const offset = media.index - from;
				const before = {...part, indices: [from, media.index]};
				const after = {...part, indices: [media.index, to]};
				if(typeof part.text === 'string'){
					before.text = part.text.substring(0, offset);
					after.text = part.text.substring(offset, offset + to - media.index);
				}
				result.splice(index, 1, {type: 'text', part: before}, {type: 'media', media}, {type: 'text', part: after});
				break;
			}
		}
		return result;
	}
	function tweetTextParts(text, range, entities = {}, options = {}){
		const baseUrl = options.baseUrl || 'https://x.com';
		const all = [];
		const types = {hashtags: 'hashtag', media: 'media', smarttags: 'smarttag', symbols: 'cashtag', timestamps: 'timestamp', user_mentions: 'mention', urls: 'url'};
		for(const [key, type] of Object.entries(types)){
			for(const entity of entities[key] || []){
				if(!Array.isArray(entity.indices) || entity.indices.length !== 2)continue;
				all.push({...entity, type, indices: toUTF16(text, ...entity.indices)});
			}
		}
		const [start, end] = toUTF16(text, ...range);
		const slice = text.slice(start, end);
		const valid = all.filter(entity => +entity.indices[0] >= 0 && +entity.indices[1] >= 0).sort((a, b) => a.indices[0] - b.indices[0]);
		const parts = [];
		let cursor = 0;
		for(const entity of valid){
			const [from, to] = entity.indices.map(index => index - start);
			if(to !== cursor && from > cursor)parts.push(plain(slice.substring(cursor, from), [cursor, from]));
			if(from >= 0 && to <= slice.length){
				const part = {entityType: entity.type, indices: [from, to]};
				switch(entity.type){
					case 'mention':
						Object.assign(part, {prefix: '@', text: slice.substring(from, to).substring(1), url: entity.screen_name ? `${baseUrl}/${entity.screen_name}` : '', id_str: entity.id_str, screen_name: entity.screen_name});
						break;
					case 'hashtag':
						Object.assign(part, {prefix: '#', text: entity.text, url: new URL(`/hashtag/${encodeURIComponent(entity.text)}?src=hashtag_click`, baseUrl).href});
						break;
					case 'cashtag':
						Object.assign(part, {prefix: '$', text: entity.text, ticker: entity.tag?.info?.info?.ticker, url: `${baseUrl}/search?q=${encodeURIComponent('$' + entity.text)}&src=cashtag_click`});
						break;
					case 'smarttag': {
						const ticker = entity.tag?.info?.info?.ticker;
						const query = ticker != null && ticker !== entity.text ? `$${ticker} OR ${entity.text}` : `$${entity.text}`;
						Object.assign(part, {prefix: '$', text: entity.text, ticker, url: `${baseUrl}/search?q=${encodeURIComponent(query)}&src=smarttag_click`});
						break;
					}
					case 'timestamp':
						Object.assign(part, {text: entity.text, url: `${options.permalink || '/'}?t=${entity.seconds}`, indices: entity.indices});
						break;
					case 'url': {
						const match = entity.expanded_url?.match(/^https?:\/\/(?:(?:(?:m(?:obile)?)|(?:www)|)\.)?(twitter|x)\.com\/@?([_\w\d]+)\/status(?:es)?\/([\d]+)\/?/);
						Object.assign(part, {displayUrl: entity.display_url ?? entity.url, expandedUrl: entity.expanded_url ?? entity.url, url: entity.url, tweetId: match?.[3] || '', indices: entity.indices});
						break;
					}
					case 'media':
						Object.assign(part, {displayUrl: entity.display_url, expandedUrl: entity.expanded_url, url: entity.url});
						break;
				}
				parts.push(part);
			}
			cursor = Math.max(0, to);
		}
		if(!valid.length)parts.push(plain(slice, [start, end]));
		else if(cursor < slice.length)parts.push(plain(slice.substring(cursor), [cursor, slice.length]));
		return parts;
	}
	function displayParts(model, options = {}){
		const text = model.text || '';
		const range = model.display_text_range || [0, text.length];
		const entities = {...model.entities};
		if(entities.user_mentions && model.unmentioned_user_ids?.length){
			entities.user_mentions = entities.user_mentions.filter(entity => !model.unmentioned_user_ids.includes(entity.id_str));
		}
		// 229797: 終端まで分割してから表示しない添付URLを落とす。
		const parts = tweetTextParts(text, [range[0], text.length], entities, {permalink: model.permalink});
		const hasMedia = parts.some(part => part.entityType === 'media');
		const hideMedia = hasMedia && !options.withMediaLinks;
		const hideQuote = model.quoted_status_id_str && !options.withQuoteLinks;
		const filtered = parts.filter((part, index) => {
			const isQuote = !!part.tweetId && part.tweetId === model.quoted_status_id_str;
			if(!options.withMediaLinks && part.entityType === 'media')return false;
			// 229797: Jetfuel payload付きのポストではX/Twitter内部URLを本文から除く。
			if(model.jetfuel_payload && /^https?:\/\/(x|twitter)\.com\//.test(part.expandedUrl || part.url || ''))return false;
			if(isQuote && hasMedia && part.indices && range[1] === part.indices[1])return false;
			if(index === parts.length - 1){
				if(isQuote && hideQuote && !hideMedia)return false;
				if(!hideMedia && !hideQuote && !options.withCardLinks && model.card?.url && (model.card.url === part.url || model.card.url === part.expandedUrl))return false;
				if(model.article && part.expandedUrl?.includes(`/i/article/${model.article.rest_id}`))return false;
			}
			return true;
		});
		return filtered.map((part, index) => {
			if(part.entityType !== 'text')return part;
			const last = index === filtered.length - 1;
			if(!`${part.prefix}${part.text}`.trim() && (last || index === 0))return null;
			return last ? {...part, text: part.text.replace(/(\s+$)/g, '')} : part;
		}).filter(Boolean);
	}
	const api = Object.freeze({toUTF16, tweetTextParts, displayParts, normalizeRichTextTags, richTextSegments, inlineMediaParts, decodeHtmlEntities, twemojiSegments});
	if(typeof module === 'object' && module.exports)module.exports = api;
	else root.TEBText20260917 = api;
})(globalThis);
