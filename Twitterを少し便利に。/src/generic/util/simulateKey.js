
export function simulateKey(keyCode, type, element){
	const event = new KeyboardEvent(type, {
		key: keyCode,
		keyCode: keyCode,
		which: keyCode,
		bubbles: true
	});
	element.dispatchEvent(event);
}
