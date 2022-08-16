/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let curr = newInterval;
    let postIntervals = [];
    while (intervals.length > 0) {
        const [x,y] = curr;
        let prev = intervals.pop();
        if (prev[1] < x) {
            intervals.push(prev);
            break;
        } else if (y < prev[0]) {
            postIntervals.unshift(prev);
        } else {
            curr = [Math.min(x,prev[0]), Math.max(y, prev[1])];
        }
    }
    intervals.push(curr);
    intervals = intervals.concat(postIntervals);
    return intervals;
};