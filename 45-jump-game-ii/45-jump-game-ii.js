/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums, i=0, memo={}) {
    if (i in memo) return memo[i];
    if (i === nums.length-1) return 0;
    if (i >= nums.length) return null;
    const steps = nums[i];
    let minSteps = Number.POSITIVE_INFINITY;
    for (let j=1; j<=steps; j++) {
        let next = jump(nums, i+j, memo);
        if (next !== null) {
            minSteps = Math.min(minSteps, 1 + next);
        }
    }
    if (minSteps === Number.POSITIVE_INFINITY) minSteps = null;
    memo[i] = minSteps;
    return minSteps;
};