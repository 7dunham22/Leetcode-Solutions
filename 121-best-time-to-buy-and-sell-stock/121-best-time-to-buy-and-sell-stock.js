/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let MAX = 0;
    let buy = prices[0];
    for (let i=1; i<prices.length; i++) {
        let profit = prices[i] - buy;
        if (profit < 0) {
            buy = prices[i];
        } else {
            MAX = Math.max(MAX, profit);
        }
    }
    return MAX;
}