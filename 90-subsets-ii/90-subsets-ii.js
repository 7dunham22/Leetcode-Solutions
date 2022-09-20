/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b);
    const subsets = [];
    
    const _helper = (subsets, currentSubset, nums, index) => {
        subsets.push([...currentSubset]);
        for (let i = index; i < nums.length; i++) {
            if (i !== index && nums[i] === nums[i-1]) {
                continue;
            }
            currentSubset.push(nums[i]);
            _helper(subsets, currentSubset, nums, i+1);
            currentSubset.pop();
        }
    }
    
    _helper(subsets, [], nums, 0);
    return subsets;
};