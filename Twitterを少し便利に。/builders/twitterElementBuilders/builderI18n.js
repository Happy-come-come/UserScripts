/* Builder共通i18n。直接編集する共有モジュール。 */
/* Builder共通i18nの編集元。生成済みTwitterTextI18nDataを直接利用する。 */
(function(root){
	'use strict';
	const baseUrl = 'https://raw.githubusercontent.com/Happy-come-come/UserScripts/main/Twitter%E3%82%92%E5%B0%91%E3%81%97%E4%BE%BF%E5%88%A9%E3%81%AB%E3%80%82/data/TwitterTextI18nData/textData/json/';
	const languages = new Set(['ja','en','ar','ar-x-fm','bg','bn','ca','cs','da','de','el','en-gb','es','eu','fa','fi','fil','fr','ga','gl','gu','ha','he','hi','hr','hu','id','ig','it','kn','ko','mr','msa','nb','nl','pl','pt','ro','ru','sk','sr','sv','ta','th','tr','uk','ur','vi','yo','zh-cn','zh-tw']);
	const data = new Map(), pending = new Map();
	function language(value){
		const tag = String(value || 'en').toLowerCase().replace('_', '-');
		if(tag === 'zh' || tag.startsWith('zh-cn') || tag.startsWith('zh-hans'))return 'zh-cn';
		if(tag.startsWith('zh-tw') || tag.startsWith('zh-hk') || tag.startsWith('zh-hant'))return 'zh-tw';
		if(tag === 'ms' || tag.startsWith('ms-'))return 'msa';
		if(languages.has(tag))return tag;
		const base = tag.split('-')[0];
		return languages.has(base) ? base : 'en';
	}
	function generation(value = 'new'){
		if(!['old', 'new'].includes(value))throw new RangeError('textVersion must be old or new.');
		return value;
	}
	function id(lang, version){return `${language(lang)}:${generation(version)}`;}
	function register(lang, version, value){
		if(!value || typeof value !== 'object')throw new TypeError('i18n data must be an object.');
		data.set(id(lang, version), value); return api;
	}
	async function load({language: lang, textVersion = 'new', url = baseUrl, fetch: request = root.fetch} = {}){
		const selected = language(lang || root.document?.documentElement?.lang || root.navigator?.language), version = generation(textVersion), key = id(selected, version);
		if(data.has(key))return data.get(key);
		if(pending.has(key))return pending.get(key);
		if(typeof request !== 'function')throw new Error('fetch is required to load i18n JSON.');
		const task = (async () => {
			const response = await request(`${url}${selected}_${version}.json`);
			if(!response.ok)throw new Error(`Failed to load i18n data: HTTP ${response.status}`);
			const value = await response.json(); register(selected, version, value); return value;
		})().finally(() => pending.delete(key));
		pending.set(key, task); return task;
	}
	function placeholders(value, props){return String(value).replace(/{{\s*(\w+)\s*}}/g, (_, key) => props[key] ?? '');}
	function getText(key, {language: lang, textVersion = 'new', args = [], props = {}} = {}){
		const entry = data.get(id(lang, textVersion))?.[key];
		if(!entry)return undefined;
		if(entry.type === 'string')return entry.value;
		if(entry.type === 'webI18nFunction'){
			const values = !Array.isArray(args) && typeof args === 'object' ? args : Object.fromEntries((entry.arguments || []).map((name, index) => [name, args[index] ?? '']));
			return entry.value == null ? undefined : placeholders(entry.value, values);
		}
		if(entry.type === 'webI18nTemplateFunction')return (entry.value || []).map((part, index) => placeholders(part, props) + (args[index] ?? '')).join('');
		if(entry.type === 'apkI18nTemplateFunction'){
			let index = 0; return String(entry.value).replace(/%(\d+\$)?s/g, (_, position) => args[position ? parseInt(position, 10) - 1 : index++] ?? '');
		}
		return undefined;
	}
	const api = Object.freeze({load, register, getText, language, generation, baseUrl});
	if(typeof module === 'object' && module.exports)module.exports = api;
	else root.builderI18n = api;
})(globalThis);
