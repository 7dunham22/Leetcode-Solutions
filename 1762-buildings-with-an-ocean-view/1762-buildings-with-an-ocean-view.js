/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    const n = heights.length;
    const res = [];
    const stack = [];
    for (let i = n-1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length-1]] < heights[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            res.push(i);
        }
        stack.push(i);
    }
    res.reverse();
    return res; 
};