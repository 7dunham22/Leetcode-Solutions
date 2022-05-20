/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    const n = nums.length;
    let res = 0;
    for (let i=0; i<n-1; i++) {
        let currMax = nums[i];
        let currMin = nums[i];
        for (let j=i+1; j<n; j++) {
            if (nums[j] > currMax) {
                currMax = nums[j];
            } else if (nums[j] < currMin) {
                currMin = nums[j];
            }
            res += currMax - currMin;
        }
    }
    return res;
};