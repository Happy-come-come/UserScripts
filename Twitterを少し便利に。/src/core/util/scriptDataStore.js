import { getFromIndexedDB, saveToIndexedDB } from '../../generic/storage/indexedDB.js';
import { scriptState } from '../state.js';

export async function loadScriptDataStore(){
	const storedData = await getFromIndexedDB('makeTwitterLittleUseful', 'scriptDataStore');
	if(storedData){
		scriptState.dataStore = storedData;
	}else{
		scriptState.dataStore = {};
	}
	return "OK";
}

export async function saveScriptDataStore(){
	await saveToIndexedDB('makeTwitterLittleUseful', 'scriptDataStore', scriptState.dataStore);
	return "OK";
}
