/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target, i=0, memo={}) {
    if (i === nums.length) return +(target === 0);
    const key = target + ',' + i;
    if (key in memo) return memo[key];
    const addPaths = findTargetSumWays(nums, target + nums[i], i+1, memo);
    const minusPaths = findTargetSumWays(nums, target - nums[i], i+1, memo);
    memo[key] = addPaths + minusPaths;
    return memo[key];
};