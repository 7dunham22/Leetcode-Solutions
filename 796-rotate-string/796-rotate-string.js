/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s === goal) {
        return true;
    }
    let i = s.indexOf(goal[0], 0);
    while (i !== -1) {
        let s1 = s.slice(i) + s.slice(0,i);
        if (s1 === goal) {
            return true;
        }
        i = s.indexOf(goal[0], i+1);
    }
    return false;
};