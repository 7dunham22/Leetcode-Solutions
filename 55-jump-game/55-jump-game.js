/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums, i=0, memo={}) {
    if (i in memo) return memo[i];
    if (i === nums.length-1) return true;
    if (i >= nums.length) return false;
    const jumps = nums[i];
    for (let j=1; j<=jumps; j++) {
        if (canJump(nums, i+j, memo)) return true;
    }
    memo[i] = false;
    return false;
};