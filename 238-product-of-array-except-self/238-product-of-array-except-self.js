/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = new Array(nums.length).fill(null).map(x => 0);
    let productI = 1;
    let productJ = 1;
    for (let i=0; i<nums.length; i++) {
        res[i] = productI;
        productI *= nums[i];
    }
    for (let j=nums.length-1; j>=0; j--) {
        res[j] *= productJ;
        productJ *= nums[j];
    }
    return res;
};