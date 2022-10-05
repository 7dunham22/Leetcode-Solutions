/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const memo = {};
    
    const dfs = (i=0, own=false) => {
        if (i>=prices.length) return 0;
        const key = i + ',' + own;
        if (key in memo) return memo[key];
        const cooldown = dfs(i+1, own);
        if (own === false) {
            const buy = dfs(i+1, !own) - prices[i];
            memo[key] = Math.max(cooldown, buy);
        } else {
            const selling = dfs(i+2, !own) + prices[i];
            memo[key] = Math.max(cooldown, selling);
        }
        return memo[key];
    }
    
    return dfs();
    
};