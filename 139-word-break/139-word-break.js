/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, memo = {}) {
    if (s in memo) return memo[s];
    if (s.length === 0) return true;
    let dictSet = new Set(wordDict);
    for (let i=1; i<=s.length; i++) {
        const seg = s.slice(0,i);
        if (dictSet.has(seg)) {
            if (wordBreak(s.slice(i), wordDict, memo)) return true;
        }
    }
    memo[s] = false;
    return false;
};