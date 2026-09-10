/** @type {Set<string>} */
const svgTags = new Set([
	// 基本構造
	"svg","g","defs","use","symbol","title","desc",
	// 図形
	"path","rect","circle","ellipse","line","polyline","polygon",
	// テキスト
	"text","tspan","textPath",
	// クリッピング・マスキング
	"clipPath","mask","pattern","marker",
	// グラデーション
	"linearGradient","radialGradient","stop",
	// フィルター
	"filter","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix",
	"feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feGaussianBlur",
	"feImage","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting",
	"feTile","feTurbulence",
	// アニメーション
	"animate","animateTransform","animateMotion","mpath","set",
	// その他
	"image","foreignObject","style","metadata"
]);
/**
 * @template {keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap | "fragment"} K
 * @param {K} tag
 * @param {(K extends keyof SVGElementTagNameMap
 *   ? Partial<SVGElementTagNameMap[K]>
 *   : Partial<HTMLElementTagNameMap[K]>) & Record<string, any>} [props]
 * @param {...(Node|string|number|boolean|null|undefined|(Node|string|number|boolean|null|undefined)[])} children
 * @returns {K extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[K] : HTMLElementTagNameMap[K]}   
*/
export function h(tag, props = {}, ...children){
	const isSvg = svgTags.has(tag);
	const ns = isSvg ? "http://www.w3.org/2000/svg" : undefined;
	const el = tag === "fragment"
	? document.createDocumentFragment()
	: ns
		? document.createElementNS(ns, tag)
		: document.createElement(tag);
	for(const key in props){
		const val = props[key];
		if(key === "style" && typeof val === "object"){
			Object.assign(el.style, val);
		}else if(key === "className"){
			if(ns){
				el.setAttribute("class", val);
			}else{
				el.className = val;
			}
		}else if(key === "textContent" || key === "innerText"){
			el[key] = val;
		}else if(key.startsWith("on") && typeof val === "function"){
			el.addEventListener(key.slice(2).toLowerCase(), val);
		}else if(key === "dataset" && typeof val === "object"){
			for(const dataKey in val){
				if(val[dataKey] != null){
					el.dataset[dataKey] = val[dataKey];
				}
			}
		}else if(key === "ref" && typeof val === "function"){
			val(el); // 作成直後のDOMノードを渡す
		}else if(key.startsWith("data-")){
			const prop = key.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase()); // dataset
			el.dataset[prop] = val;
		}else if(key.startsWith("aria-") || key === "role"){
			el.setAttribute(key, val); // 強制的に属性にする
		}else if(key in el && !isSvg){
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
