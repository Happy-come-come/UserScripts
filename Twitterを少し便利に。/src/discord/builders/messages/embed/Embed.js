/*! Adapted from discord.js Embed.ts. Apache-2.0. Changed to a factory function. */

import { normalizeArray } from "../../util/normalizeArray.js";
import { resolveBuilder } from "../../util/resolveBuilder.js";
import { validate } from "../../util/validation.js";
import { embedPredicate } from "./Assertions.js";
import { embedAuthorBuilder } from "./EmbedAuthor.js";
import { embedFieldBuilder } from "./EmbedField.js";
import { embedFooterBuilder } from "./EmbedFooter.js";

export function embedBuilder(initialData = {}) {
	const {
		author,
		fields = [],
		footer,
		...rest
	} = initialData ?? {};
	const data = {
		...structuredClone(rest),
		author: author === undefined ? undefined : embedAuthorBuilder(author),
		fields: fields.map((field) => embedFieldBuilder(field)),
		footer: footer === undefined ? undefined : embedFooterBuilder(footer),
	};

	function addFields(...newFields) {
		const normalizedFields = normalizeArray(newFields);
		data.fields.push(...normalizedFields.map((field) => resolveBuilder(field, embedFieldBuilder)));
		return builder;
	}

	function spliceFields(index, deleteCount, ...newFields) {
		const resolvedFields = newFields.map((field) => resolveBuilder(field, embedFieldBuilder));
		data.fields.splice(index, deleteCount, ...resolvedFields);
		return builder;
	}

	function setFields(...newFields) {
		return spliceFields(0, data.fields.length, ...normalizeArray(newFields));
	}

	function setAuthor(authorValue) {
		data.author = resolveBuilder(authorValue, embedAuthorBuilder);
		return builder;
	}

	function updateAuthor(updater) {
		const authorValue = data.author ?? embedAuthorBuilder();
		data.author = updater(authorValue) ?? authorValue;
		return builder;
	}

	function clearAuthor() {
		data.author = undefined;
		return builder;
	}

	function setColor(color) {
		data.color = resolveColor(color);
		return builder;
	}

	function clearColor() {
		data.color = undefined;
		return builder;
	}

	function setDescription(description) {
		data.description = description;
		return builder;
	}

	function clearDescription() {
		data.description = undefined;
		return builder;
	}

	function setFooter(footerValue) {
		data.footer = resolveBuilder(footerValue, embedFooterBuilder);
		return builder;
	}

	function updateFooter(updater) {
		const footerValue = data.footer ?? embedFooterBuilder();
		data.footer = updater(footerValue) ?? footerValue;
		return builder;
	}

	function clearFooter() {
		data.footer = undefined;
		return builder;
	}

	function setImage(url) {
		data.image = { url };
		return builder;
	}

	function clearImage() {
		data.image = undefined;
		return builder;
	}

	function setThumbnail(url) {
		data.thumbnail = { url };
		return builder;
	}

	function clearThumbnail() {
		data.thumbnail = undefined;
		return builder;
	}

	function setTimestamp(timestamp = Date.now()) {
		data.timestamp = new Date(timestamp).toISOString();
		return builder;
	}

	function clearTimestamp() {
		data.timestamp = undefined;
		return builder;
	}

	function setTitle(title) {
		data.title = title;
		return builder;
	}

	function clearTitle() {
		data.title = undefined;
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

	function toJSON(validationOverride) {
		const {
			author: authorValue,
			fields: fieldValues,
			footer: footerValue,
			...otherData
		} = data;
		const json = {
			...structuredClone(otherData),
			author: authorValue?.toJSON(false),
			fields: fieldValues.map((field) => field.toJSON(false)),
			footer: footerValue?.toJSON(false),
		};
		return validate(embedPredicate, json, validationOverride);
	}

	const builder = {
		get fields() {
			return [...data.fields];
		},
		addFields,
		spliceFields,
		setFields,
		setAuthor,
		updateAuthor,
		clearAuthor,
		setColor,
		clearColor,
		setDescription,
		clearDescription,
		setFooter,
		updateFooter,
		clearFooter,
		setImage,
		clearImage,
		setThumbnail,
		clearThumbnail,
		setTimestamp,
		clearTimestamp,
		setTitle,
		clearTitle,
		setURL,
		clearURL,
		toJSON,
	};

	return builder;
}

function resolveColor(color) {
	if (typeof color === "number") return color;
	if (typeof color !== "string") throw new TypeError("Invalid embed color.");
	if (/^#[\da-f]{6}$/i.test(color)) return Number.parseInt(color.slice(1), 16);
	if (/^#[\da-f]{8}$/i.test(color)) return Number.parseInt(color.slice(3), 16);
	const rgb = color.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
	if (rgb) return (Number(rgb[1]) << 16) + (Number(rgb[2]) << 8) + Number(rgb[3]);
	throw new TypeError("Invalid embed color.");
}

