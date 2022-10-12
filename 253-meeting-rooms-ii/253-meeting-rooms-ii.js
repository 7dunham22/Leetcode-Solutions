/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const starts = intervals.map(x => x[0]).sort((a,b) => a-b);
    const ends = intervals.map(x => x[1]).sort((a,b) => a-b);
    let meetings = 0;
    let j = 0;
    for (let i=0; i<intervals.length; i++) {
        if (starts[i] < ends[j]) {
            meetings += 1;
        } else {
            j += 1;
        }
    }
    return meetings;
};