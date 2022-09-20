/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) return [[]];
    const first = nums[0];
    const perms = permute(nums.slice(1));
    const res = [];
    for (const perm of perms) {
        for (let i=0; i<=perm.length; i++) {
            res.push([...perm.slice(0,i), first, ...perm.slice(i)]);
        }
    }
    return res;
};