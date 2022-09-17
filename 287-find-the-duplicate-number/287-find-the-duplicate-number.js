/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const found = new Set();
    for (let num of nums) {
        if (found.has(num)) return num;
        found.add(num);
    }
    return "Error: Duplicate not found";
};