import {runWithPendingRequest} from '../cache/pendingRequests.js';
import {request1_1} from './request1_1.js';

export function getAccountSettings(parameters = {}){
	const key = `1.1:accountSettings:${new URLSearchParams(parameters).toString()}`;
	return runWithPendingRequest(key, async () => {
		const response = await request1_1('accountSettingsJson', {parameters});
		return response?.response ?? null;
	});
}

