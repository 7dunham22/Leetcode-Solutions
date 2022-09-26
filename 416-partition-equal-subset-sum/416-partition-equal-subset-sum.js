/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((prev,curr) => prev + curr);
    if (sum%2) return false;
    
    let dp = new Set();
    dp.add(0);
    const target = Math.floor(sum / 2);
    
    for (let i=nums.length-1; i>=0; i--) {
        const nextDp = new Set();
        for (const t of Array.from(dp)) {
            if (t + nums[i] === target) return true;
            nextDp.add(t + nums[i]);
            nextDp.add(t);
        }
        dp = nextDp;
    }
    
    return false;
};