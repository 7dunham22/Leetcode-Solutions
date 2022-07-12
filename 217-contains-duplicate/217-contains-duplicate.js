/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const unique = new Set(nums);
    return nums.length > unique.size;
};