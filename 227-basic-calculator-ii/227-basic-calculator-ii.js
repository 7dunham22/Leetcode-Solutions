/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const n = s.length; 
    if (n === 0) return 0;
    const stack = [];
    let currNumber = 0;
    let op = '+';
    for (let i=0; i<n; i++) {
        const char = s[i];
        if (!isNaN(char) && char !== ' ') {
            currNumber = (currNumber * 10) + (char - '0');
        }
        if (isNaN(char) && char !== ' ' || i === n-1) {
            if (op === '-') {
                stack.push(0 - currNumber);
            } else if (op === '+') {
                stack.push(currNumber);
            } else if (op === '*') {
                const stackTop = stack.pop();
                stack.push(stackTop * currNumber);
            } else if (op === '/') {
                const stackTop = stack.pop();
                stack.push(~~(stackTop / currNumber));
            }
            op = char;
            currNumber = 0;
        }
    }

    return stack.reduce((prev,curr) => prev+curr);
};

