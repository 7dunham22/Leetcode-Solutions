/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums.length === 0) return [[]];
    const last = nums.pop();
    const combos = subsets(nums);
    const res = [];
    for (const combo of combos) {
        res.push(combo);
        res.push([...combo, last]);
    }
    return res;
};