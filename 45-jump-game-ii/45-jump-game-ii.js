/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const memo = {};
    
    const dfs = (i) => {
        if (i === nums.length-1) return 0;
        if (i >= nums.length) return Number.POSITIVE_INFINITY;
        if (i in memo) return memo[i];
        let MIN = Number.POSITIVE_INFINITY;
        for (let j=1; j<=nums[i]; j++) {
            MIN = Math.min(MIN, 1 + dfs(i + j));
        }
        memo[i] = MIN;
        return MIN;
    }
    
    const res = dfs(0);
    return res;
};

