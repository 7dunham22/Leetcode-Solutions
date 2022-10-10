/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    const memo = {};
    
    const dfs = (i=0, balance=0) => {
        if (i === s.length) return balance === 0;
        const key = i + ',' + balance;
        if (key in memo) return memo[key];
        const char = s[i];
        if (char === '(') {
            memo[key] = dfs(i+1, balance+1);
        } else if (char === ')') {
            if (balance === 0) {
                memo[key] = false;
            } else {
                memo[key] = dfs(i+1, balance-1);
            }
        } else {
            if (dfs(i+1, balance)) {
                memo[key] = true;
            } else if (dfs(i+1, balance+1)) {
                memo[key] = true;
            } else if (balance > 0 && dfs(i+1, balance-1)) {
                memo[key] = true;
            } else {
                memo[key] = false;   
            }
        }
        return memo[key];
    }
    
    return dfs();
};