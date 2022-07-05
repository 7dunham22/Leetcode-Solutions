/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    const res = [heights.length-1];
    let MAX = heights[heights.length-1];
    for (let i=heights.length-2; i >= 0; i--) {
        const height = heights[i];
        if (height > MAX) {
            MAX = height;
            res.push(i);
        }
    }
    res.reverse();
    return res; 
};