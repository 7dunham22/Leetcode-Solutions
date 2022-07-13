/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const ALPHA_NUM = /^[a-zA-Z0-9]$/;
    let i = 0;
    let j = s.length-1;
    while (i < j) {
        while (i < j && !ALPHA_NUM.test(s[i])) i += 1;
        while (i < j && !ALPHA_NUM.test(s[j])) j -= 1;
        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        i += 1;
        j -= 1;
    }
    return true; 
};