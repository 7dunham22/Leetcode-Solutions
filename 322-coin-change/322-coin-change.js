/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, memo = {}) {
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    if (amount in memo) return memo[amount];
    let MIN = Number.POSITIVE_INFINITY;
    for (let coin of coins) {
        let combo = coinChange(coins, amount - coin, memo);
        if (combo !== -1) {
            combo += 1;
            if (combo < MIN) MIN = combo;
        }
    }
    if (MIN === Number.POSITIVE_INFINITY) MIN = -1;
    memo[amount] = MIN;
    return MIN;
};