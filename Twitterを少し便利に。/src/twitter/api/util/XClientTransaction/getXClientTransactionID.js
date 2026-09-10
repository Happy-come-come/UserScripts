import {getChallengeData} from './getChallengeData.js';
import {_cloneInto} from '../../../../generic/util/cloneInto.js';
// 参考: https://github.com/iSarabjitDhiman/XClientTransaction

let cachedAnimationKey = null;
let cachedChallengeExpires = 0;

let tmpData = {};

/**
 * HTTPメソッドとリクエストパスを基にX-Client-Transaction IDを生成する。
 * 初回実行時にchallenge dataとanimation keyを取得してキャッシュし、
 * `refresh`が`true`の場合はキャッシュを更新してからIDを生成する。
 *
 * @param {Object} [options={}] IDの生成オプション。
 * @param {string} [options.method='GET'] リクエストのHTTPメソッド。
 * @param {string} [options.path='/'] リクエストパス。
 * @param {boolean} [options.refresh=false] challenge dataとanimation keyを再取得するかどうか。
 * @returns {Promise<string>} 生成されたX-Client-Transaction IDで解決するPromise。
 * データの取得、解析、またはIDの生成に失敗した場合は拒否される。
 */
export async function getXClientTransactionID({method = 'GET', path = '/', refresh = false, } = {}){
	if(refresh || !cachedAnimationKey || cachedChallengeExpires <= Date.now()){
		const challengeData = await getChallengeData({refresh});
		tmpData = {challengeData};
		cachedAnimationKey = await getAnimationKey();
		cachedChallengeExpires = challengeData.expires ?? 0;
	}
	const xClientTransactionID = await generateTransactionId(method, path,  {
		key: tmpData.challengeData.verificationCode,
		keyBytes: Array.from(atob(tmpData.challengeData.verificationCode), c => c.charCodeAt(0)),
		animationKey: cachedAnimationKey,
		defaultKeyword: "obfiowerehiring",
		additionalRandomNumber: 3
	});
	return xClientTransactionID;
}

async function getAnimationKey(){
	if(!(tmpData.rowIndexKey && tmpData.frameTimeKeys))await getIndices();
	const parser = new DOMParser();
	const svgs = tmpData.challengeData.challengeAnimationSvgCodes.map(html => parser.parseFromString(html, 'image/svg+xml').documentElement);

	const keyBytes = Array.from(atob(tmpData.challengeData.verificationCode), c => c.charCodeAt(0));
	const totalTime = 4096;
	const rowIndex = keyBytes[tmpData.rowIndexKey] % 16;
	const frameTime = tmpData.frameTimeKeys.map(i => keyBytes[i] % 16).reduce((a, b) => a * b, 1);

	const selectedSvg = svgs[keyBytes[5] % svgs.length];
	const arr = parsePathToArray(selectedSvg);
	const frameRow = arr[rowIndex].filter((x)=>{return x === x});

	const targetTime = frameTime / totalTime;
	return animate(frameRow, targetTime);
}

async function getIndices(){
	const matches = [...tmpData.challengeData.challengeJsCode.matchAll(/\(\w\[(\d+)\],\s*16\)/g)];
	const indices = matches.map(match => parseInt(match[1]));

	if(indices.length < 4){
		throw new Error("Couldn't extract keyByte indices from on_demand.js");
	}

	tmpData.rowIndexKey = indices[0];
	tmpData.frameTimeKeys = indices.slice(1, 4);
}

function parsePathToArray(svgElement){
	const paths = svgElement.querySelectorAll('path');
	const path = paths[1];
	if(!path)return [];
	const d = path.getAttribute('d');
	if(!d)return [];
	const commands = d.split('C').slice(1);
	return commands.map(command => command.trim().split(/[\s,]+/).map(str => parseInt(str, 10)).filter((x)=>{return x === x}));
}

function animate(frames, targetTime){
	const fromColor = [...frames.slice(0, 3).map(v => parseFloat(v)), 1];
	const toColor = [...frames.slice(3, 6).map(v => parseFloat(v)), 1];
	const fromRotation = [0.0];
	const toRotation = [solveVal(parseFloat(frames[6]), 60.0, 360.0, true)];
	const curves = frames.slice(7).map((item, i) => solveVal(parseFloat(item), isOdd(i) ? -1 : 0, 1.0, false)).filter((x)=>{return x === x});

	const val = getCubic(targetTime, curves);

	let color = interpolate(fromColor, toColor, val).map(v => Math.max(0, v));
	const rotation = interpolate(fromRotation, toRotation, val);
	const matrix = convertRotationToMatrix(rotation[0]);

	const strArr = [];
	for(let i=0;i<color.length-1;i++){
		strArr.push(Math.round(color[i]).toString(16));
	}
	for(const value of matrix){
		let rounded = Math.round(value * 100) / 100;
		if(rounded < 0)rounded = -rounded;
		const hexValue = floatToHex(rounded);
		strArr.push(hexValue.startsWith('.') ? `0${hexValue}` : hexValue || '0');
	}
	strArr.push("0", "0");

	return strArr.join('').replace(/[.-]/g, '');
}

function convertRotationToMatrix(rotation){
	const rad = rotation * Math.PI / 180;
	const cosVal = Math.cos(rad);
	const sinVal = Math.sin(rad);
	return [cosVal, -sinVal, sinVal, cosVal];
}

function solveVal(value, minVal, maxVal, rounding){
	const result = value * (maxVal - minVal) / 255 + minVal;
	return rounding ? Math.floor(result) : Math.round(result * 100) / 100;
}

function isOdd(num){
	return (num % 2) ? -1.0 : 0.0;
}

function interpolate(fromList, toList, f){
	if(fromList.length !== toList.length){
		throw new Error(`Mismatched interpolation arguments: ${fromList} vs ${toList}`);
	}
	return fromList.map((fromVal, i) => interpolateNum(fromVal, toList[i], f));
}

function interpolateNum(fromVal, toVal, f){
	if(typeof fromVal === 'number' && typeof toVal === 'number'){
		return fromVal * (1 - f) + toVal * f;
	}
	if(typeof fromVal === 'boolean' && typeof toVal === 'boolean'){
		return f < 0.5 ? fromVal : toVal;
	}
	throw new Error('Unsupported types in interpolateNum');
}

function floatToHex(x, maxDigits = 16){
	const result = [];
	let quotient = Math.floor(x);
	let fraction = x - quotient;

	// 整数部
	while(quotient > 0){
		let newQuotient = Math.floor(x / 16);
		let remainder = Math.floor(x - (newQuotient * 16));

		if(remainder > 9){
			result.unshift(String.fromCharCode(remainder + 55));
		}else{
			result.unshift(remainder.toString());
		}

		x = newQuotient;
		quotient = Math.floor(x);
	}

	if(result.length === 0){
		result.push('0');
	}

	// 小数部
	if(fraction !== 0){
		result.push('.');
		let safeCounter = 0;
		while(fraction > 0 && safeCounter < maxDigits){
			fraction *= 16;
			let integer = Math.floor(fraction);
			fraction -= integer;

			if(integer > 9){
				result.push(String.fromCharCode(integer + 55));
			}else{
				result.push(integer.toString());
			}

			safeCounter++;
			// fractionが十分小さくなったら無視
			if(fraction < 1e-12)break;
		}
	}

	return result.join('');
}

async function generateTransactionId(method, path, options){
	const {
		//key,
		keyBytes,
		animationKey,
		defaultKeyword,
		additionalRandomNumber
	} = options;

	const now = Date.now();
	const timeNow = Math.floor((now - 1682924400000) / 1000);
	const timeNowBytes = [
		(timeNow >> 0) & 0xFF,
		(timeNow >> 8) & 0xFF,
		(timeNow >> 16) & 0xFF,
		(timeNow >> 24) & 0xFF
	];

	const data = `${method}!${path}!${timeNow}${defaultKeyword}${animationKey.toLowerCase()}`;
	const hashBuffer = await crypto.subtle.digest('SHA-256', manualEncode(data));
	const hashArray = Array.from(_cloneInto(new Uint8Array(hashBuffer))); // Firefoxでのエラー回避

	const randomNum = Math.floor(Math.random() * 256);

	const bytesArr = [
		...keyBytes,
		...timeNowBytes,
		...hashArray.slice(0, 16),
		additionalRandomNumber
	];

	const obfuscated = [randomNum, ...bytesArr.map(b => b ^ randomNum)];
	const base64 = base64Encode(obfuscated).replace(/=+$/, '');

	return base64;
}

function manualEncode(str){
	const bytes = new Uint8Array(str.length);
	for(let i=0;i<str.length;i++){
		bytes[i] = str.charCodeAt(i) & 0xFF;
	}
	return bytes;
}

function getCubic(time, curves){
	if(time <= 0.0){
		let startGradient = 0.0;
		if(curves[0] > 0.0){
			startGradient = curves[1] / curves[0];
		}else if(curves[1] === 0.0 && curves[2] > 0.0){
			startGradient = curves[3] / curves[2];
		}
		return startGradient * time;
	}

	if(time >= 1.0){
		let endGradient = 0.0;
		if(curves[2] < 1.0){
			endGradient = (curves[3] - 1.0) / (curves[2] - 1.0);
		}else if(curves[2] === 1.0 && curves[0] < 1.0){
			endGradient = (curves[1] - 1.0) / (curves[0] - 1.0);
		}
		return 1.0 + endGradient * (time - 1.0);
	}

	let start = 0.0;
	let end = 1.0;
	let mid = 0.0;
	while(start < end){
		mid = (start + end) / 2;
		const x_est = calculateCubic(curves[0], curves[2], mid);
		if(Math.abs(time - x_est) < 0.00001){
			return calculateCubic(curves[1], curves[3], mid);
		}
		if(x_est < time){
			start = mid;
		}else{
			end = mid;
		}
	}
	return calculateCubic(curves[1], curves[3], mid);
}

function calculateCubic(a, b, m){
	return 3.0 * a * (1.0 - m) * (1.0 - m) * m + 3.0 * b * (1.0 - m) * m * m + m * m * m;
}

function base64Encode(bytes){
	const binary = bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
	return btoa(binary);
}
