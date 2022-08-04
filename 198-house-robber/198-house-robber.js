/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, i=0, total=0, memo={}) {
    const key = i + ',' + total;
    if (key in memo) return memo[key];
    if (i >= nums.length) return total;
    const first = nums[i];
    const max = Math.max(rob(nums, i+2, total+first, memo), rob(nums,i+1,total,memo));
    memo[key] = max;
    return max;
};