
/**
 * 指定した名前の Cookie 値を取得する。
 *
 * `document.cookie` から対象キーを探し、見つかった場合は URL デコード済みの値を返す。
 *
 * @function getCookie
 * @param {string} name 取得したい Cookie の名前。
 * @returns {string|null} Cookie の値。見つからない場合は `null`。
 */
export function getCookie(name){
	let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg)){
		return decodeURIComponent(arr[2]);
	}else{
		return null;
	}
}