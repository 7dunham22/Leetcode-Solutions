/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s, memo = {}) {
    if (s in memo) return memo[s];
    if (!s) return 1;
    if (s[0] === '0') return 0;
    if (s.length === 1) return 1;
    let ans = numDecodings(s.slice(1), memo);
    if (Number(s.slice(0,2)) <= 26) {
        ans += numDecodings(s.slice(2), memo);
    }
    memo[s] = ans;
    return ans;
};