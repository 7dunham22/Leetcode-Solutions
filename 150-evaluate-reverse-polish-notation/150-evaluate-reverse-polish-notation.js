/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    const add = (a,b) => {
        return a+b;
    }

    const subtract = (a,b) => {
        return a-b;
    }

    const multiply = (a,b) => {
        return a*b;
    }

    const divide = (a,b) => {
        let res = a/b;
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

