/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
    if (n < 0) return 0;
    if (n === 0) return 1;
    if (n in memo) return memo[n];
    let count = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    memo[n] = count;
    return count;
};