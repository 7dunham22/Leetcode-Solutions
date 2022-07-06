/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    const sums = {0: 1};
    let sum = 0;
    for (let i=0; i<nums.length; i++) {
        sum += nums[i];
        let prev = sums[sum - k];
        if (prev) count += prev;
        if (!(sum in sums)) sums[sum] = 1;
        else sums[sum]++;
    }
    return count;
};