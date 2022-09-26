/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = {};
    
    const getStep = (i) => {
        if (i >= cost.length) return 0;
        if (i in memo) return memo[i];
        memo[i] = cost[i] + Math.min(getStep(i+1), getStep(i+2));
        return memo[i];
    }
    
    return Math.min(getStep(0), getStep(1));
};