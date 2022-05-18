/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s === goal) {
        return true;
    }
    let i = 0;
    const n = s.length;
    while (i < n) {
        s = s.slice(1) + s[0];
        i++;
        if (s === goal) {
            return true;
        }
    }
    return false;
};