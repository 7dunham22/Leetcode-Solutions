/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const chars = s.split("").map(char => char.toLowerCase());
    const converted = chars.filter(char => {
        const code = char.charCodeAt(0);
        if ((code > 47 && code < 58) || (code > 96 && code < 123)) return true;
        return false;
    });
    const forward = converted.join("");
    const backward = converted.reverse().join("");
    return forward === backward;
};