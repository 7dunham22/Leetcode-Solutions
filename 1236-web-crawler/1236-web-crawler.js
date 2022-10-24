/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
*/
var crawl = function(startUrl, htmlParser) {
    const res = new Set();
    res.add(startUrl);
    const domain = startUrl.split('/')[2];
    const queue = htmlParser.getUrls(startUrl);
    while (queue.length > 0) {
        const curr = queue.shift();
        if (!res.has(curr) && curr.split('/')[2] === domain) {
            res.add(curr);
            const urls = htmlParser.getUrls(curr);
            for (const url of urls) {
                queue.push(url);
            }
        }
    }
    return [...res];
};