
/**
 * 指定した名前の Cookie 値を取得する。
 *
 * @param {string} name 取得したい Cookie の名前
 * @returns {string|null} Cookie が存在すればその値、存在しなければ null
 */
export function getCookie(name){
	let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg)){
		return decodeURIComponent(arr[2]);
	}else{
		return null;
	}
}
