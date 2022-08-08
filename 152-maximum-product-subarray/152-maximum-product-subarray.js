/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let result = max;
    for (let i=1; i<nums.length; i++) {
        const num = nums[i];
        const options = [num, num * max, num * min];
        let temp = Math.max(...options);
        min = Math.min(...options);
        max = temp;
        result = Math.max(max, result);
    }
    return result;
};