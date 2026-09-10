export function findMatchFromArray(arr, regex, returnMatchedSubstring = false){
	const matchedElement = arr.find(element => regex.test(element));
	if(matchedElement && returnMatchedSubstring){
		const matchResult = matchedElement.match(regex);
		return matchResult ? matchResult[0] : undefined;
	}
	return matchedElement;
}
