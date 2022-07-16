/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let MAX = 0;
    const found = new Set();
    let left = 0;
    let right = 0;
    while (right < s.length) {
        if (found.has(s[right])) {
            found.delete(s[left]);
            left++;
        } else {
            found.add(s[right]);
            right++;
        }
        MAX = Math.max(MAX, right - left);
    }
    return MAX;
}
