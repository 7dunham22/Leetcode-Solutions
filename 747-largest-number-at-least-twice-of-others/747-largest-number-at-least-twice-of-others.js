/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const max = Math.max(...nums);
    const threshold = Math.floor(max / 2);
    let maxIndex = nums.indexOf(max);
    for (let i=0; i<nums.length; i++) {
        const val = nums[i];
        if (i !== maxIndex && val > threshold) return -1;
    }
    return maxIndex;
};
