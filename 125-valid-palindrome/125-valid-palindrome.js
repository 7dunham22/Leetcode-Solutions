/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length-1;
    while (i < j) {
        while (i < j && !s[i].match(/^[A-Za-z0-9]+$/)) i += 1;
        while (i < j && !s[j].match(/^[A-Za-z0-9]+$/)) j -= 1;
        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        i += 1;
        j -= 1;
    }
    return true; 
};