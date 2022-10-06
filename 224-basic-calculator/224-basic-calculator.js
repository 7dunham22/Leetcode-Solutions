/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let res = 0;
    let num = 0;
    let sign = 1;
    const stack = [];
    
    for (let i=0; i<s.length; i++) {
        const char = s[i];
        if (char === '+') {
            res += sign * num;
            sign = 1;
            num = 0;
        } else if (char === '-') {
            res += sign * num;
            sign = -1;
            num = 0;
        } else if (char === '(') {
            stack.push(res);
            stack.push(sign);
            res = 0;
            sign = 1;
        } else if (char === ')') {
            res += sign * num;
            num = 0;
            res *= stack.pop();
            res += stack.pop();
        } else if (char >= '0' && char <= '9') {
            num = 10 * num + (char - '0');
        }
    }
    
    if (num !== 0) res += sign * num;
    return res;
    
};