/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, i=0, memo={}) {
    if (i >= nums.length) return 0;
    if (i in memo) return memo[i];
    const ans = Math.max(rob(nums,i+1,memo), rob(nums,i+2,memo) + nums[i]);
    memo[i] = ans;
    return ans;
};