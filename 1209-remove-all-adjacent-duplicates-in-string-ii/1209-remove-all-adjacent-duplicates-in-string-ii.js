/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = [];
    for (let i=0; i<s.length; i++) {
        const char = s[i];
        if (stack.length && stack[stack.length-1][0] === char) {
            stack[stack.length-1] += char;
        } else {
            stack.push(char);
        }
        if (stack[stack.length-1].length === k) {
            stack.pop();
        }
    }
    return stack.join("");
};