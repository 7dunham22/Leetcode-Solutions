/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length < 2) return true;
    intervals.sort((a,b) => a[0] - b[0]);
    let prev = intervals[0][1];
    for (let i=1; i<intervals.length; i++) {
        const start = intervals[i][0];
        if (start < prev) return false;
        prev = intervals[i][1];
    }
    return true;
};