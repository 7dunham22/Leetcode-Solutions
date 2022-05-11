/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    const res = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > 0) break;
        if (i === 0 || nums[i] !== nums[i-1]) {
            twoSum(nums, i, res);
        }
    }
    return res;
};

const twoSum = (nums, i, res) => {
    let lo = i+1;
    let high = nums.length-1;
    while (lo < high) {
        const sum = nums[i] + nums[lo] + nums[high];
        if (sum === 0) {
            res.push([nums[i], nums[lo], nums[high]]);
            lo++;
            high--;
            while (lo < high && nums[lo] === nums[lo-1]) {
                lo++;
            }
        } else if (sum > 0) {
            high--;
        } else {
            lo++;
        }
    }
}

/*
[-1,0,1,2,-1,-4,-2,-3,3,0,4]
i:          0   0
nums[i]:    -1  -1
lo:         1   1
nums[lo]    0   
hi:         10  9
nums[hi]:   4   0
sum:        5

*/