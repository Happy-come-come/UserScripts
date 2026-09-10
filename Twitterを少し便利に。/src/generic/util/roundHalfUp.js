/**
 * 指定値以上の数値を単位で割り、指定された小数桁数で四捨五入する。
 * 元の値が処理対象となる値より小さい場合は、元の値をそのまま返す。
 *
 * @param {number|string} originalValue 変換する元の値。
 * @param {number|string} whereRoundOff 四捨五入を適用する基準値兼、元の値を割る単位（0.1、1、10、100、1000など）。
 * @param {number|string} [decimalPlace=0] 四捨五入後に保持する小数点以下の桁数。
 * @param {string} [unitStr=""] 結果の末尾に付加する単位（「千」「万」など）。指定した場合、戻り値は文字列になる。
 * @returns {number|string} 四捨五入した値、単位付きの文字列、または基準値未満の場合は元の値。
 */
export function roundHalfUp(originalValue, whereRoundOff, decimalPlace = 0, unitStr = ""){
	if(Number(originalValue)>=Number(whereRoundOff)){
		let tmpValue;
		tmpValue = Math.round(Number(originalValue) / Number(whereRoundOff) * Math.pow(10,Number(decimalPlace))) / Math.pow(10,Number(decimalPlace));
		if(unitStr == ""){
			return tmpValue;
		}else{
			return `${tmpValue}${unitStr}`
		}
	}else{
		return originalValue;
	}
}
