/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    const memo = {};
    const res = [];
    const bucket = new Array(nums.length+1).fill(null).map(x => []);
    for (let num of nums) {
        memo[num] = memo[num] + 1 || 1;
    }
    for (let key in memo) {
        bucket[memo[key]].push(key);
    }
    for (let i=bucket.length-1; i>=0; i--) {
        if (bucket[i].length > 0) {
            for (let n of bucket[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}