/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    if (k === 1) return nums;
    const left = new Array(n).fill(null).map(x => 0);
    left[0] = nums[0];
    const right = new Array(n).fill(null).map(x => 0);
    right[n-1] = nums[n-1];
    for (let i=1; i<n; i++) {
        if (i%k === 0) {
            left[i] = nums[i];
        } else {
            left[i] = Math.max(left[i-1], nums[i]);
        }
        
        j = n - i - 1;
        if ((j+1) % k === 0) {
            right[j] = nums[j];
        } else {
            right[j] = Math.max(right[j+1], nums[j]);
        }
    }
    
    const output = [];
    for (let i=0; i<n-k+1; i++) {
        output.push(Math.max(left[i+k-1], right[i]));
    }
    return output;
};