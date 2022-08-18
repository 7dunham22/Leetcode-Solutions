/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let res = 0;
    let prevEnd = intervals[0][1];
    for (let i=1; i<intervals.length; i++) {
        const [x,y] = intervals[i];
        if (x >= prevEnd) {
            prevEnd = y;
        } else {
            res += 1;
            prevEnd = Math.min(y, prevEnd);
        }
    }
    return res;
};