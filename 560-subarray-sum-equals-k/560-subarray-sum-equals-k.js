/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    const sums = new Map();
    sums.set(0,1);
    let sum = 0;
    for (let i=0; i<nums.length; i++) {
        sum += nums[i];
        let prev = sums.get(sum - k);
        if (prev) count += prev;
        if (!(sums.has(sum))) sums.set(sum, 1);
        else sums.set(sum, sums.get(sum)+1);
    }
    return count;
};