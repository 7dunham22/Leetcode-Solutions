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
    
    let i = 0;
    const m = matrix[0].length;
    const n = matrix.length;
    while (i < n && matrix[i][m-1] < target) {
        i++;
    }
    
    const array = matrix[i];
    return hasValue(array);
};