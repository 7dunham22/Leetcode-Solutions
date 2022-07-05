/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, i=0, j=s.length-1, k=0) {
    if (i >= j) return true; 
    if (s[i] !== s[j]) {
        if (k < 1) {
            return validPalindrome(s, i+1, j, k+1) || validPalindrome(s, i, j-1, k+1);
        }
        return false;
    }
    return validPalindrome(s, i+1, j-1, k);
};
