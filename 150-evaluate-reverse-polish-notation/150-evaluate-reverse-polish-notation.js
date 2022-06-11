/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let res = 0;
    const stack = [];
    for (let token of tokens) {
	    if (isNaN(token)){
		    let next = 0;
            const second = stack.pop();
            const first = stack.pop();
            if (token === '+') next = first + second;
            else if (token === '-') next = first - second;
            else if (token === '/') {
                next = first/second;
                next = next < 0 ? Math.ceil(next) : Math.floor(next);
            }
            else if (token === '*') next = first * second;
            stack.push(next);
        } else {
	        stack.push(Number(token));
        }
    }
    return stack[0];
};