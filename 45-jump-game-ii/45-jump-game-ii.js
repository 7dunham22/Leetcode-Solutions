/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let l = 0;
    let r = 0;
    let res = 0;
    while (r < nums.length-1) {
        let maxJump = 0;
        for (let i=l; i<=r; i++) {
            maxJump = Math.max(maxJump, i + nums[i]);
        }
        l = r+1;
        r = maxJump;
        res += 1;
    }
    return res;
};

