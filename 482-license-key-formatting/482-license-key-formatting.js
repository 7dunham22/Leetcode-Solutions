/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const stack = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] !== '-') stack.push(s[i]);
    }
    
    let groupLength = 0;
    let res = "";
    while (stack.length > 0) {
        if (groupLength === k) {
            res = "-" + res;
            groupLength = 0;
        }
        res = stack.pop().toUpperCase() + res;
        groupLength += 1;
    }
    
    return res;
};