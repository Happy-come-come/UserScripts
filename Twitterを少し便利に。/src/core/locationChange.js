import {scriptState} from './state.js';
import {update} from './update.js';
export function locationChange(targetPlace = document){
	if(window.onurlchange === null){
		window.addEventListener('urlchange', (info) => {
			scriptState.currentUrl = document.location.href;
			try{
				update({urlChange: true});
				whenLocationChange();
			}catch(error){console.error(error)}
		});
	}
}
function whenLocationChange(){
	const keys = Object.keys(scriptState.sessionData.whenLocationChangeFunctions);
	for(let i = 0; i < keys.length; i++){
		const func = scriptState.sessionData.whenLocationChangeFunctions[keys[i]];
		try{
			func();
		}catch(error){
			console.error(error);
		}
	}
	if(scriptState.sessionData.settingsPage)scriptState.sessionData.settingsPage.remove();
}
