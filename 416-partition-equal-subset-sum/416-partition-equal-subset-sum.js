/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((prev,curr) => prev + curr);
    if (sum%2) return false;
    
    const target = Math.floor(sum / 2);
    
    const memo = {};
    
    const dfs = (i=0, prev=0) => {
        if (prev === target) return true;
        if (i===nums.length || prev > target) return false;
        const key = i + ',' + prev;
        if (key in memo) return memo[key];
        const result = dfs(i+1, prev) || dfs(i+1, prev + nums[i]);
        memo[key] = result;
        return result;
    }
    
    return dfs();
};