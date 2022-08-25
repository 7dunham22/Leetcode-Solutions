/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const res = [];
    let currMax = nums[0];
    let currIndex = 0;
    for (let i=1; i<k; i++) {
        if (nums[i] > currMax) {
            currMax = nums[i];
            currIndex = i;
        }
    }
    res.push(currMax);
    for (let i=k; i<nums.length; i++) {
        const val = nums[i];
        if (val >= currMax) {
            currMax = val;
            currIndex = i;
        } else if (i-k === currIndex) {
            currMax = Number.NEGATIVE_INFINITY;
            for (let j=i-k+1; j<=i; j++) {
                if (nums[j] >= currMax) {
                    currMax = nums[j];
                    currIndex = j;
                }
            }
        }
        res.push(currMax);
    }
    return res;
};