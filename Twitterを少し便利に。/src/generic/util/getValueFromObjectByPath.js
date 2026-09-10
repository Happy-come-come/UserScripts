export function getValueFromObjectByPath(object, path, defaultValue = undefined){
	const isArray = Array.isArray;
	if(object == null || typeof object != 'object')return defaultValue;
	const result = (isArray(object)) ? object.map(createProcessFunction(path)) : createProcessFunction(path)(object);
	return result ?? defaultValue;
	function createProcessFunction(path){
		if(typeof path == 'string')path = path.split('.');
		if(!isArray(path))path = [path];
		return function(object){
			let index = 0,
			length = path.length;
			while(index < length){
				const key = toString_(path[index++]);
				if(object === undefined){
					return defaultValue;
				}
				// 配列に対する処理
				if(isArray(object)){
					object = object.map(item => item[key]);
				}else{
					object = object[key];
				}
			}
			return (index && index === length) ? object : void 0;
		};
	}
	function toString_(value){
		if(value == null)return '';
		if(typeof value == 'string')return value;
		if(isArray(value))return value.map(toString) + '';
		const result = value + '';
		return '0' == result && 1 / value == -(1 / 0) ? '-0' : result;
	}
}
