/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let MAX = Number.NEGATIVE_INFINITY;
    let curr = 0;
    for (let i=0; i<nums.length; i++) {
        curr += nums[i];
        if (curr > MAX) MAX = curr;
        if (curr < 0) curr = 0;
    }
    return MAX;
};