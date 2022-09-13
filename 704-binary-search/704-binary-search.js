/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const val = nums[mid];
        if (val === target) {
            return mid;
        } else if (val < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};