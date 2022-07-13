/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

let locs = [];

var encode = function(strs) {
    let res = "";
    for (let word of strs) {
        locs.push(word.length);
        res += word;
    }
    return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    const decoded = [];
    let i = 0;
    let locId = 0;
    while (i < s.length || locId < locs.length) {
        const wordLength = locs[locId];
        const word = wordLength > 0 ? s.slice(i, i + wordLength) : "";
        decoded.push(word);
        i += wordLength;
        locId++;
    }
    locs = [];
    return decoded;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */