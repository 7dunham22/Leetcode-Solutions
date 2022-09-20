/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, res = [], n = 0) {
    if (n === nums.length) {
        res.push(nums.slice(0));
        return res;
    }
    
    for (let i=n; i<nums.length; i++) {
        [nums[i], nums[n]] = [nums[n], nums[i]];
        permute(nums, res, n + 1);
        [nums[i], nums[n]] = [nums[n], nums[i]];
    }
    
    return res;
};