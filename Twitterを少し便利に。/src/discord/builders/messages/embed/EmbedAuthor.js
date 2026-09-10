/*! Adapted from discord.js EmbedAuthor.ts. Apache-2.0. Changed to a factory function. */

import { validate } from "../../util/validation.js";
import { embedAuthorPredicate } from "./Assertions.js";

export function embedAuthorBuilder(initialData = {}) {
	const data = structuredClone(initialData ?? {});

	function setName(name) {
		data.name = name;
		return builder;
	}

	function setURL(url) {
		data.url = url;
		return builder;
	}

	function clearURL() {
		data.url = undefined;
		return builder;
	}

	function setIconURL(iconURL) {
		data.icon_url = iconURL;
		return builder;
	}

	function clearIconURL() {
		data.icon_url = undefined;
		return builder;
	}

	function toJSON(validationOverride) {
		return validate(embedAuthorPredicate, structuredClone(data), validationOverride);
	}

	const builder = {
		setName,
		setURL,
		clearURL,
		setIconURL,
		clearIconURL,
		toJSON,
	};

	return builder;
}

