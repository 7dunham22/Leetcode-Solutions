/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const lowerBound = findBound(nums, target, true);
    if (lowerBound === -1) return [-1,-1];
    const upperBound = findBound(nums, target, false);
    return [lowerBound, upperBound];
};

const findBound = (nums, target, isFirst) => {
    const n = nums.length;
    let l = 0;
    let r = n-1;
    while (l <= r) {
        const mid = Math.floor((l+r)/2);
        if (nums[mid] === target) {
            if (isFirst) {
                if (mid === l || nums[mid-1] < target) {
                    return mid;
                }
                r = mid-1;
            } else {
                if (mid === r || nums[mid+1] > target) {
                    return mid;
                }
                l = mid+1;
            }
        } else if (nums[mid] > target) {
            r = mid-1;
        } else {
            l = mid+1;
        }
    }
    return -1;
}