/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const keypad = [[], [], ['a','b','c'], ['d','e','f'], ['g','h','i'], ['j','k','l'], ['m','n','o'], ['p','q','r','s'], ['t','u','v'], ['w','x','y','z']];
    const res = [];

    const backtrack = (d, curr = "") => {
        if (d === digits.length) {
            if (curr.length) res.push(curr);
            return;
        }
        const num = Number(digits[d]);
        const chars = keypad[num];
        for (const char of chars) {
            backtrack(d+1, curr + char);
        }
    }
    
    backtrack(0);
    return res;
};