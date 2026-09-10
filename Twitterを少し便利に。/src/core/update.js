import {scriptState} from './state.js';
import {main} from './main.js';
export function update({refresh = false, urlChange = false, firstRun = false} = {}){
	if(scriptState.updating && refresh === false)return;
	scriptState.updating = true;
	try{
		main({refresh, urlChange, firstRun});
	}catch(error){
		console.error(error);
	}
	setTimeout(() => {scriptState.updating = false;}, 600);
}
