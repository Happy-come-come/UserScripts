/*! Adapted from discord.js builders. Apache-2.0. Changed to JavaScript functions. */

export function normalizeArray(values) {
	return Array.isArray(values[0]) ? [...values[0]] : [...values];
}
