/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const starts = intervals.map(x => x[0]).sort((a,b) => a-b);
    const ends = intervals.map(x => x[1]).sort((a,b) => a-b);
    let numRooms = 0;
    let j = 0;
    for (let i=0; i<starts.length; i++) {
        if (ends[j] > starts[i]) {
            numRooms++;
        } else {
            j++;
        }
    }
    return numRooms;
};