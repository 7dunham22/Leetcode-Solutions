/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((prev,curr) => prev + curr);
    if (sum%2) return false;
    
    const target = Math.floor(sum / 2);
    const n = nums.length;
    
    const memo = {};
    
    const dfs = (n, target) => {
        const key = n + ',' + target;
        if (key in memo) return memo[key];
        if (target === 0) return true;
        if (n===0 || target < 0) return false;
        const result = dfs(n-1, target - nums[n-1]) || dfs(n-1, target);
        memo[key] = result;
        return result;
    }
    
    return dfs(n-1, target);
};