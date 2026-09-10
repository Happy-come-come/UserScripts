/*! Adapted from discord.js EmbedFooter.ts. Apache-2.0. Changed to a factory function. */

import { validate } from "../../util/validation.js";
import { embedFooterPredicate } from "./Assertions.js";

export function embedFooterBuilder(initialData = {}) {
	const data = structuredClone(initialData ?? {});

	function setText(text) {
		data.text = text;
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
		return validate(embedFooterPredicate, structuredClone(data), validationOverride);
	}

	const builder = {
		setText,
		setIconURL,
		clearIconURL,
		toJSON,
	};

	return builder;
}

