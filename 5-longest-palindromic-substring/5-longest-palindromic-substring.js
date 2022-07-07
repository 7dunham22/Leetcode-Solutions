/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    if (!s || s.length < 1) return "";
    let start = 0;
    let end = 0;
    for (let i=0; i<s.length; i++) {
        const len1 = expand(s, i, i);
        const len2 = expand(s, i, i+1);
        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.slice(start, end+1);
};

const expand = (s, left, right) => {
    let L = left;
    let R = right;
    while (L >= 0 && R < s.length && s[L] === s[R]) {
        L--;
        R++;
    }
    return R - L - 1;
}