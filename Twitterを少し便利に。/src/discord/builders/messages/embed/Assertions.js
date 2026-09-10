/*! Adapted from discord.js builders. Apache-2.0. Changed to dependency-free JavaScript functions. */

export const embedLimits = Object.freeze({
	title: 256,
	description: 4096,
	fieldName: 256,
	fieldValue: 1024,
	fieldCount: 25,
	footerText: 2048,
	total: 6000,
});

function assertObject(value, name) {
	if (!value || typeof value !== "object" || Array.isArray(value)) {
		throw new TypeError(`${name} must be an object.`);
	}
}

function assertString(value, name, { minimum = 0, maximum } = {}) {
	if (typeof value !== "string") throw new TypeError(`${name} must be a string.`);
	if (value.length < minimum || (maximum !== undefined && value.length > maximum)) {
		throw new RangeError(`${name} must be between ${minimum} and ${maximum} characters.`);
	}
}

function assertUrl(value, name, protocols) {
	let url;
	try {
		url = new URL(value);
	} catch {
		throw new TypeError(`${name} must be a valid URL.`);
	}
	if (!protocols.includes(url.protocol)) {
		throw new TypeError(`${name} must use one of these protocols: ${protocols.join(", ")}.`);
	}
}

export function embedLength(data) {
	return (data.title?.length ?? 0)
		+ (data.description?.length ?? 0)
		+ (data.fields?.reduce((length, field) => length + field.name.length + field.value.length, 0) ?? 0)
		+ (data.footer?.text.length ?? 0)
		+ (data.author?.name.length ?? 0);
}

export function embedFieldPredicate(field) {
	assertObject(field, "Embed field");
	assertString(field.name, "Embed field name", { maximum: embedLimits.fieldName });
	assertString(field.value, "Embed field value", { maximum: embedLimits.fieldValue });
	if (field.inline !== undefined && typeof field.inline !== "boolean") {
		throw new TypeError("Embed field inline must be a boolean.");
	}
	return field;
}

export function embedAuthorPredicate(author) {
	assertObject(author, "Embed author");
	assertString(author.name, "Embed author name", { minimum: 1, maximum: embedLimits.title });
	if (author.icon_url !== undefined) assertUrl(author.icon_url, "Embed author icon_url", ["http:", "https:", "attachment:"]);
	if (author.url !== undefined) assertUrl(author.url, "Embed author url", ["http:", "https:"]);
	return author;
}

export function embedFooterPredicate(footer) {
	assertObject(footer, "Embed footer");
	assertString(footer.text, "Embed footer text", { minimum: 1, maximum: embedLimits.footerText });
	if (footer.icon_url !== undefined) assertUrl(footer.icon_url, "Embed footer icon_url", ["http:", "https:", "attachment:"]);
	return footer;
}

export function embedPredicate(embed) {
	assertObject(embed, "Embed");
	if (embed.title !== undefined) assertString(embed.title, "Embed title", { minimum: 1, maximum: embedLimits.title });
	if (embed.description !== undefined) assertString(embed.description, "Embed description", { minimum: 1, maximum: embedLimits.description });
	if (embed.url !== undefined) assertUrl(embed.url, "Embed url", ["http:", "https:"]);
	if (embed.timestamp !== undefined && typeof embed.timestamp !== "string") throw new TypeError("Embed timestamp must be a string.");
	if (embed.color !== undefined && (!Number.isInteger(embed.color) || embed.color < 0 || embed.color > 0xffffff)) {
		throw new RangeError("Embed color must be an integer between 0 and 16777215.");
	}
	if (embed.footer !== undefined) embedFooterPredicate(embed.footer);
	if (embed.author !== undefined) embedAuthorPredicate(embed.author);
	for (const key of ["image", "thumbnail"]) {
		if (embed[key] !== undefined) {
			assertObject(embed[key], `Embed ${key}`);
			assertUrl(embed[key].url, `Embed ${key} url`, ["http:", "https:", "attachment:"]);
		}
	}
	if (embed.fields !== undefined) {
		if (!Array.isArray(embed.fields) || embed.fields.length > embedLimits.fieldCount) {
			throw new RangeError(`Embed fields must contain at most ${embedLimits.fieldCount} entries.`);
		}
		embed.fields.forEach(embedFieldPredicate);
	}

	if (!embed.title && !embed.description && !embed.fields?.length && !embed.footer && !embed.author && !embed.image && !embed.thumbnail) {
		throw new TypeError("Embed must contain a title, description, field, footer, author, image, or thumbnail.");
	}
	if (embedLength(embed) > embedLimits.total) {
		throw new RangeError(`Embed text must not exceed ${embedLimits.total} characters in total.`);
	}
	return embed;
}
