/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    const partition = (left, right, pivotIndex) => {
        let pivot = nums[pivotIndex];
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
        let storeIndex = left;
        for (let i=left; i<right; i++) {
            if (nums[i] < pivot) {
                [nums[storeIndex], nums[i]] = [nums[i], nums[storeIndex]];
                storeIndex++;
            }
        }
        [nums[right], nums[storeIndex]] = [nums[storeIndex], nums[right]];
        return storeIndex;
    }
    
    const select = (left, right, k) => {
        if (left === right) return nums[left];
        let pivotIndex = Math.floor(Math.random() * (right - left) + left);
        pivotIndex = partition(left, right, pivotIndex);
        if (k === pivotIndex) {
            return nums[k];
        } else if (k < pivotIndex) {
            return select(left, pivotIndex - 1, k);
        } else {
            return select(pivotIndex+1, right, k);
        }
    }
    
    return select(0, nums.length-1, nums.length - k);
};