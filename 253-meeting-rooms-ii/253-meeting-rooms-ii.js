/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const start = intervals.map(x => x[0]).sort((a,b) => a-b);
    const end = intervals.map(x => x[1]).sort((a,b) => a-b);
    let res = 0;
    let count = 0;
    let s = 0;
    let e = 0;
    while (s < intervals.length) {
        if (start[s] < end[e]) {
            s += 1;
            count += 1;
        } else {
            e += 1;
            count -= 1;
        }
        res = Math.max(res, count);
    }
    return res;
};

/*
start:  [0,5,15]
end:    [10,20,30]

res:    0   1   2   2
count:  0   1   2   1
s:      0   1   2   2
e:      0   0   0   1

*/