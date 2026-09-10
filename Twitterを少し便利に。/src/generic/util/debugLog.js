import {debugging} from '../../core/environment.js';
let debuggingCount = 0;
const debugLog = debugging
? (...args) => {
	const count = debuggingCount++;
	const stack = new Error().stack.split('\n')[2]?.trim() || '';
	const location = stack.match(/\((.*)\)/)?.[1] || stack;
	if(args.length === 0){
		console.log(`%c[debug: ${count}] %c${location}`,
			'color: #0096fa; font-weight: bold',
			'color: #666; font-size: 0.9em');
	}else{
		console.log(`%c[debug: ${count}]%c ${location}`,
			'color: #0096fa; font-weight: bold',
			'color: #666; font-size: 0.9em',
			...args);
	}
}
: () => {};
export {debugLog};
