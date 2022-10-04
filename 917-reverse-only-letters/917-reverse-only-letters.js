/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let l = 0;
    let r = s.length-1;
    
    s = s.split("");
    
    while (l < r) {
        while (/^[a-zA-Z]+$/.test(s[l]) === false && l<r) {
            l++;
        }
        while (/^[a-zA-Z]+$/.test(s[r]) === false && l<r) {
            r--;
        }
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
    }
    return s.join("");
};