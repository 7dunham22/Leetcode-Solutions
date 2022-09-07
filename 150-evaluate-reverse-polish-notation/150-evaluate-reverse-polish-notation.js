/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    const add = (...args) => {
        let res = 0;
        for (let arg of args) {
            res += arg;
        }
        return res;
    }

    const subtract = (...args) => {
        let res = args[0];
        for (let arg of args.slice(1)) {
            res -= arg;
        }
        return res;
    }

    const multiply = (...args) => {
        let res = 1;
        for (let arg of args) {
            res *= arg;
        }
        return res;
    }

    const divide = (...args) => {
        let res = args[0];
        for (let arg of args.slice(1)) {
            res = res/arg;
        }
        return res < 0 ? Math.ceil(res) : Math.floor(res);
    }
    
    const operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
    };
    
    const stack = [];
    for (let token of tokens) {
        if (token in operations) {
            const operate = operations[token];
            const b = stack.pop();
            const a = stack.pop();
            stack.push(operate(a,b));
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
    
};

