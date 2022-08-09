/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;
    let currEnd = 0;
    let farthest = 0;
    for (let i=0; i<nums.length-1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currEnd) {
            jumps += 1;
            currEnd = farthest;
        }
    }
    return jumps;
};

/*
[2,3,1,1,4]

i:              0   1   2   3         
nums[i]         2   3   1   1   
jumps:      0   1   1   2   2
currEnd:    0   2   2   4   4
farthest:   0   2   4   4   4   
*/