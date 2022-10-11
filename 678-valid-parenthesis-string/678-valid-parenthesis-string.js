/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let lo = 0;
    let hi = 0;
    for (let i=0; i<s.length; i++) {
        const char = s[i];
        lo += char === '(' ? 1 : -1;
        hi += char !== ')' ? 1 : -1;
        if (hi < 0) break;
        lo = Math.max(lo, 0);
    }
    return lo === 0;
};