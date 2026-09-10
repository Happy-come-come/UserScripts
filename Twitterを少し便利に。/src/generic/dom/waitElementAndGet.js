/**
 * 指定した条件で要素を待機し、見つかった要素を返します。
 *
 * @param {Object} [options={}] - 検索条件をまとめて受け取るオブジェクト。
 * @param {string} [options.query] - 検索する CSS セレクタまたは XPath。
 * @param {('querySelector'|'getElementById'|'XPath'|'XPathAll'|'querySelectorAll')} [options.searchFunction='querySelector'] - 使用する検索関数。
 * @param {number} [options.interval=100] - 再検索を行う間隔（ms）。
 * @param {number} [options.retry=25] - 最大再試行回数。
 * @param {ParentNode|Document} [options.searchPlace=document] - 検索を実行するルート要素。
 * @param {boolean} [options.faildToThrow=false] - 最大回数到達時に例外を投げるかどうか。
 * @returns {Promise<Element|Element[]|NodeList|null>} 一致した要素、または見つからなければ null を返す Promise。
 * @throws {string} query が未指定の場合に投げられる。
 */
export function waitElementAndGet({query, searchFunction = 'querySelector', interval = 100, retry = 25, searchPlace = document, faildToThrow = false} = {}){
	if(!query)throw(`query is needed`);
	return new Promise((resolve, reject) => {
		const MAX_RETRY_COUNT = retry;
		let retryCounter = 0;
		let searchFn;

		switch(searchFunction){
			case 'querySelector':
				searchFn = () => searchPlace.querySelector(query);
				break;
			case 'getElementById':
				searchFn = () => searchPlace.getElementById(query);
				break;
			case 'XPath':
				searchFn = () => {
					let section = document.evaluate(query, searchPlace, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)?.singleNodeValue;
					return section;
				};
				break;
			case 'XPathAll':
				searchFn = () => {
					let sections = document.evaluate(query, searchPlace, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
					let result = [];
					for(let i = 0; i < sections.snapshotLength; i++){
						result.push(sections.snapshotItem(i));
					}
					if(result.length >= 1)return result;
				};
				break;
			default:
				searchFn = () => searchPlace.querySelectorAll(query);
		}
		const setIntervalId = setInterval(findTargetElement, interval);

		function findTargetElement(){
			retryCounter++;
			if(retryCounter > MAX_RETRY_COUNT){
				clearInterval(setIntervalId);
				if(faildToThrow){
					return reject(`Max retry count (${MAX_RETRY_COUNT}) reached for query: ${query}`);
				}else{
					console.warn(`Max retry count (${MAX_RETRY_COUNT}) reached for query: ${query}`);
					return resolve(null);
				}

			}
			const targetElements = searchFn();
			if(targetElements && (!(targetElements instanceof NodeList) || targetElements.length >= 1)){
				clearInterval(setIntervalId);
				return resolve(targetElements);
			}
		}
	});
}
