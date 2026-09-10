export function isUrl(value){
	if(typeof value !== 'string')return false;
	if(value.trim() !== value)return false;

	try{
		const url = new URL(value);
		return url.protocol === 'http:' || url.protocol === 'https:';
	}catch{
		return false;
	}
}
