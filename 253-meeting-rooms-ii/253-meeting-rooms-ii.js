/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const starts = intervals.map(x => x[0]).sort((a,b) => a-b);
    const ends = intervals.map(x => x[1]).sort((a,b) => a-b);
    let i = 0;
    let j = 0;
    let count = 0;
    let res = 0;
    while (i < starts.length) {
        if (starts[i] < ends[j]) {
            i++;
            count++;
        } else {
            j++;
            count--;
        }
        res = Math.max(res,count);
    }
    return res;
};