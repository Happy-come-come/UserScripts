/*! Adapted from discord.js builders. Apache-2.0. Changed to factory functions. */

export function isBuilder(value) {
	return Boolean(value && typeof value === "object" && typeof value.toJSON === "function");
}

export function resolveBuilder(valueOrUpdater, builderFactory) {
	if (isBuilder(valueOrUpdater)) return valueOrUpdater;
	if (typeof valueOrUpdater !== "function") return builderFactory(valueOrUpdater);

	const builder = builderFactory();
	return valueOrUpdater(builder) ?? builder;
}

