/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const starts = intervals.map(x => x[0]).sort((a,b) => a-b);
    const ends = intervals.map(x => x[1]).sort((a,b) => a-b);
    
    let minRooms = 0;
    let j = 0;
    
    for (let i=0; i<starts.length; i++) {
        if (starts[i] < ends[j]) {
            minRooms += 1;
        } else {
            j += 1;
        }
    }
    
    return minRooms;
};