/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    const res = [];
    
    const backtrack = (index = 0, total = 0, exp = '', curr = 0, befMult = 0) => {
        if (index === num.length && (curr || total !== target)) return;
        if (index === num.length && total === target) return res.push(exp);
        
        const next = curr * 10 + (num[index] - 0);
        if (next) {
            backtrack(index+1, total, exp, next, befMult);
        }
        backtrack(index+1, total+next, exp.length ? exp+'+'+next : next + '', 0, next);
        if (exp.length) {
            backtrack(index+1, total-next, exp+'-'+next, 0, 0 - next);
            backtrack(index+1, total - befMult + (befMult * next), exp+'*'+next, 0, (befMult * next));
        }
    }
    
    backtrack();
    return res;
}

