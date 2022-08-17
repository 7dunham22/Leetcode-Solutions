/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    const res = [];
    let prev = intervals[0];
    for (let i=1; i<intervals.length; i++) {
        let curr = intervals[i];
        if (prev[1] < curr[0]) {
            res.push(prev);
            prev = curr;
        } else {
            prev = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])];
        }
    }
    res.push(prev);
    return res;
};