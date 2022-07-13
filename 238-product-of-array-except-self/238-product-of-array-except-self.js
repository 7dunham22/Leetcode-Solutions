/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = [];
    for (let i=0; i<nums.length; i++) {
        let product = 1;
        for (let j=0; j<nums.length; j++) {
            if (j !== i) {
                product *= nums[j];
            }
        }
        res.push(product);
    }
    return res;
};