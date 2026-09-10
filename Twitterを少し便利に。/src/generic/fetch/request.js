import {userAgent} from '../../core/environment.js';
/**
 * Sends an HTTP request through GM_xmlhttpRequest with optional retry support.
 *
 * @param {Object} [options={}] Request options.
 * @param {string} [options.url] Request URL.
 * @param {string} [options.method='GET'] HTTP method.
 * @param {GM_xmlhttpRequestResponseType} [options.respType='json'] Response type.
 * @param {Record<string, string>} [options.headers={}] Extra request headers.
 * @param {boolean} [options.dontUseGenericHeaders=false] Skip default headers when true.
 * @param {string|Document|Blob|ArrayBuffer|FormData|URLSearchParams|null} [options.body=null] Request body.
 * @param {boolean} [options.anonymous=false] Run the request without cookies when true.
 * @param {string|null} [options.cookie=null] Cookie header value to attach.
 * @param {number} [options.maxRetries=0] Number of retries for retryable failures.
 * @param {number} [options.timeout=60000] Request timeout in milliseconds.
 * @param {boolean} [options.onlyResponse=true] Return only the response body unless false or method is HEAD.
 * @returns {Promise<any>} Resolves with the response body, or the full response object when requested.
 */
export async function request({url, method = 'GET', respType = 'json', headers = {}, dontUseGenericHeaders = false, body = null, anonymous = false, cookie = null, maxRetries = 0, timeout = 60000, onlyResponse = true} = {}){
	if(!url)throw('url is not defined');

	const requestObject = {
		method,
		respType,
		url,
		headers: dontUseGenericHeaders ? headers : Object.assign({
			'Content-Type': '*/*',
			'Accept-Encoding': 'zstd, br, gzip, deflate',
			'User-agent': userAgent,
			'Accept': '*/*',
			'Referer': url,
			//'Sec-Fetch-Dest': 'empty',
			'Sec-Fetch-Mode': 'cors',
			'Sec-Fetch-Site': 'same-origin',
			...(cookie ? {'Cookie': cookie} : {}),
		}, headers),
		body,
		anonymous,
	};

	for(let retryCount = 0; retryCount <= maxRetries; retryCount++){
		try{
			const response = await new Promise((resolve, reject) => {
				GM_xmlhttpRequest({
					method: requestObject.method,
					url: requestObject.url,
					headers: requestObject.headers,
					responseType: requestObject.respType,
					data: requestObject.body,
					anonymous: requestObject.anonymous,
					timeout: timeout,
					onload: function(responseDetails){
						if(responseDetails.status >= 200 && responseDetails.status < 300){
							if(onlyResponse == false || method == 'HEAD'){
								return resolve(responseDetails);
							}else{
								return resolve(responseDetails.response);
							}
						}else if(responseDetails.status >= 500 || responseDetails.status === 429){
							console.warn(`Retrying due to response status: ${responseDetails.status}`);
							return reject({
								function_name: 'request',
								reason: `Server error or too many requests (status: ${responseDetails.status})`,
								response: responseDetails,
								requestObject: requestObject
							});
						}else{
							console.error({
								function_name: 'request',
								reason: `status: ${responseDetails.status}`,
								requestObject,
								response: responseDetails
							});
							return reject({
								function_name: 'request',
								reason: `status: ${responseDetails.status}`,
								requestObject,
								response: responseDetails
							});
						}
					},
					ontimeout: function(responseDetails){
						console.warn(responseDetails);
						return reject({
							function_name: 'request',
							reason: 'time out',
							response: responseDetails,
							requestObject: requestObject
						});
					},
					onerror: function(responseDetails){
						console.warn(responseDetails);
						return reject({
							function_name: 'request',
							reason: 'error',
							response: responseDetails,
							requestObject: requestObject
						});
					}
				});
			});
			return response;
		}catch(error){
			console.warn({
				error: error,
				url: requestObject.url,
				Retry: retryCount + 1,
				object: requestObject,
			});
			if(retryCount === maxRetries){
				throw({
					error: error,
					url: requestObject.url,
					Retry: retryCount + 1,
					object: requestObject,
				});
			}
		}
	}
}
