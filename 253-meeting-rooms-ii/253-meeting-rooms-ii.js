/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const starts = intervals.sort((a,b) => a[0]-b[0]);
    
    let MIN = 0;
    const rooms = [];
    
    for (const [start, end] of starts) {
        while (rooms.length > 0 && start >= rooms[rooms.length-1]) {
            rooms.pop();
        }
        rooms.push(end);
        let i = rooms.length-1;
        while (i > 0 && rooms[i-1] < rooms[i]) {
            [rooms[i], rooms[i-1]] = [rooms[i-1], rooms[i]];
            i--;
        }
        MIN = Math.max(MIN, rooms.length);
    } 
    
    return MIN;
};