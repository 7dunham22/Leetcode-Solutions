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

/* 
[2,3,-2,4]

i:      0   1   2   3
num:    2   3   -2  4
max:    2   6   -2  4
min:    2   6   -12 -48
result: 2   6   6   6

*/
