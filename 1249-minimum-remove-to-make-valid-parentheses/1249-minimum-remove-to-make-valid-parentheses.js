/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = [];
    let res = "";
    for (let i=0; i<s.length; i++) {
        const char = s[i];
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                continue;
            } else {
                stack.pop();
            }
        }
        res += char; 
    }
    let final = "";
    for (let i=res.length-1; i>=0; i--) {
        const char = res[i];
        if (char === '(' && stack.length > 0) {
            stack.pop();
        } else {
            final = char + final;
        }
    }
    return final; 
};