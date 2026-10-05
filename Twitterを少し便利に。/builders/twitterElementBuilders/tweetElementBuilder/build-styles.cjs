const fs = require('node:fs');
const path = require('node:path');

for(const entry of fs.readdirSync(path.join(__dirname, 'versions'), {withFileTypes: true})){
	if(!entry.isDirectory() || !/^\d{4}-\d{2}-\d{2}$/.test(entry.name))continue;
	const dir = path.join(__dirname, 'versions', entry.name);
	const cssFile = path.join(dir, 'styles.css');
	if(!fs.existsSync(cssFile))continue;
	const symbol = `TEBStyles${entry.name.replaceAll('-', '')}`;
	const css = fs.readFileSync(cssFile, 'utf8');
	fs.writeFileSync(path.join(dir, 'styles.js'), `(function(root){\n\t"use strict";\n\tconst css = ${JSON.stringify(css)};\n\tif(typeof module === "object" && module.exports)module.exports = css;\n\telse root.${symbol} = css;\n})(globalThis);\n`);
}
