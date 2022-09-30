/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    let j = 0;
    for (let i=1; i<prices.length; i++) {
        const price = prices[i];
        const profit = price - minPrice;
        maxProfit = Math.max(maxProfit, profit);
        if (price < minPrice) {
            minPrice = price;
        }
    }
    return maxProfit;
};