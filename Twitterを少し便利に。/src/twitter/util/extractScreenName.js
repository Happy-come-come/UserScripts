const denyNames = ["home", "explore", "notifications", "messages", "i", "settings", "tos", "privacy", "compose", "search"];
const denyNamesRegex = new RegExp(`https?://(x|twitter)\\.com/(?!(${denyNames.join('|')})(?:\\?|/|$))[\\w]{3,}`, 'ig');
export function extractScreenName(url){
	const match = url.match(denyNamesRegex);
	return match ? match[0].split('/')[3] : null;
}
