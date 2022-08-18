/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let numRooms = 0;
    const endTimes = [];
    for (let [start, end] of intervals) {
        while (endTimes.length > 0 && endTimes[endTimes.length-1] <= start) {
            endTimes.pop();
        }
        endTimes.push(end);
        endTimes.sort((a,b) => b-a);
        numRooms = Math.max(numRooms, endTimes.length);
    }
    return numRooms;
};