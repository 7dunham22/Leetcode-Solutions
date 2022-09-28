/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins, i=0, memo={}) {
    if (amount < 0) return 0;
    if (amount === 0) return 1;
    const key = amount + ',' + i;
    if (key in memo) return memo[key];
    let res = 0;
    for (let j=i; j<coins.length; j++) {
        res += change(amount - coins[j], coins, j, memo);
    }
    memo[key] = res;
    return res;
};