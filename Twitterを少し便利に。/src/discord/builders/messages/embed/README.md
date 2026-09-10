# Factory-based embed builder

This module follows the file boundaries and public method names of the
discord.js embed builders, but uses factory functions and closures instead of
classes.

```js
import { embedBuilder } from "./index.js";

const embed = embedBuilder();

embed
	.setTitle("Tweet")
	.setURL("https://x.com/user/status/1")
	.setColor(0x1da1f2)
	.setAuthor((author) => author
		.setName("User (@user)")
		.setURL("https://x.com/user"))
	.addFields({
		name: "Links",
		value: "[Tweet](https://x.com/user/status/1)",
	});

const json = embed.toJSON();
```

The builder state is private to the closure. Each setter returns the same
builder object, so method chaining remains available without `class` or `new`.

Validation uses the standard discord.js limits: 4,096 characters for a
description and 6,000 characters in total.

