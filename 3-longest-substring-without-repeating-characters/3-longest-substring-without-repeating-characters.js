/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    let ans = 0;
    const map = {};
    for (let i=0, j=0; j<n; j++) {
        if (s[j] in map) {
            i = Math.max(map[s[j]], i);
        }
        ans = Math.max(ans, j - i + 1);
        map[s[j]] = j+1;
    }
    return ans; 
};
