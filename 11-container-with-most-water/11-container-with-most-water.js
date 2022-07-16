/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let MAX = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const width = right - left;
        MAX = Math.max(MAX, Math.min(height[left], height[right]) * width);
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return MAX;
}