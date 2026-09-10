/*! Adapted from discord.js builders. Apache-2.0. Changed to JavaScript functions. */

let validationEnabled = true;

export function enableValidators() {
	validationEnabled = true;
	return validationEnabled;
}

export function disableValidators() {
	validationEnabled = false;
	return validationEnabled;
}

export function isValidationEnabled() {
	return validationEnabled;
}

export function validate(validator, value, validationOverride) {
	if (validationOverride === false || (validationOverride === undefined && !validationEnabled)) {
		return value;
	}
	return validator(value);
}
