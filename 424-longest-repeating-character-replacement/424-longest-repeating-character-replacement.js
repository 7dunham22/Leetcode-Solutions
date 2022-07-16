/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const chars = {};
    let result = 0;
    let left = 0;
    let maxLength = 0;
    for (let right=0; right<s.length; right++) {
        if (chars[s[right]] !== undefined) {
            chars[s[right]] += 1;
        } else {
            chars[s[right]] = 1;
        }
        maxLength = Math.max(maxLength, chars[s[right]]);
        if ((right - left + 1) - maxLength > k) {
            chars[s[left]] -= 1;
            left++;
        }
        result = Math.max(result, right - left + 1);
    }
    return result;
};