/*! Adapted from discord.js EmbedField.ts. Apache-2.0. Changed to a factory function. */

import { validate } from "../../util/validation.js";
import { embedFieldPredicate } from "./Assertions.js";

export function embedFieldBuilder(initialData = {}) {
	const data = structuredClone(initialData ?? {});

	function setName(name) {
		data.name = name;
		return builder;
	}

	function setValue(value) {
		data.value = value;
		return builder;
	}

	function setInline(inline = true) {
		data.inline = inline;
		return builder;
	}

	function toJSON(validationOverride) {
		return validate(embedFieldPredicate, structuredClone(data), validationOverride);
	}

	const builder = {
		setName,
		setValue,
		setInline,
		toJSON,
	};

	return builder;
}

