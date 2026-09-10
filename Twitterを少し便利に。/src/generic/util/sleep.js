
/**
 * 指定したミリ秒だけ待機して、その時間を解決値として返す Promise を生成する。
 *
 * @param {number} time 待機時間（ミリ秒）
 * @returns {Promise<number>} 指定した待機時間を解決値とする Promise
 */
export function sleep(time){
	return new Promise((resolve)=>{
		setTimeout(()=>{return resolve(time)}, time);
	});
}
