/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const hasValue = (nums) => {
        if (!nums) return false;
        let start = 0;
        let end = nums.length-1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            const val = nums[mid];
            if (val === target) {
                return true;
            } else if (val < target) {
                start = mid+1;
            } else {
                end = mid-1;
            }
        }
        return false;
    }
    
    const n = matrix.length;
    const m = matrix[0].length;
    
    let start = 0;
    let end = n-1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const array = matrix[mid];
        if (target < array[0]) {
            end = mid - 1;
        } else if (target > array[m-1]) {
            start = mid + 1;
        } else {
            return hasValue(array);
        }
    }
    return false;
};