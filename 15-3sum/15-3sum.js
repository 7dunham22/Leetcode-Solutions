/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    const results = [];
    nums.sort((a,b) => a-b);
    const visited = new Set();
    for (let i=0; i<nums.length; i++) {
        const num = nums[i];
        if (num > 0) return results;
        const target = 0 - num;
        const rest = twoSum(nums, target, i);
        if (rest.length > 0) {
            for (let res of rest) {
                const [x,y,z] = [num, res[0], res[1]];
                const key = x+','+y+','+z;
                if (!visited.has(key)) {
                    results.push([x,y,z]);   
                    visited.add(key);
                }
            }
            
        }
    }
    return results;
};

const twoSum = (nums, target, curr) => {
    const res = [];
    const memo = {};
    for (let i=curr+1; i<nums.length; i++) {
        const num = nums[i];
        const subTarget = target - num;
        if (subTarget in memo) res.push([subTarget, num]);
        memo[num] = i;
    }
    return res;
}