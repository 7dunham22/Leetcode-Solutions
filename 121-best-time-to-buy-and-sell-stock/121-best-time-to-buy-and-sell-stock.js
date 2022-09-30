/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let j = 0;
    for (let i=1; i<prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - prices[j]);
        if (prices[i] - prices[j] <= 0) {
            j = i;
        }
    }
    return maxProfit;
};