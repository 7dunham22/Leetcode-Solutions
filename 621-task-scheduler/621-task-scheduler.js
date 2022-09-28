/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const map = {};
    for (const task of tasks) {
        if (!(task in map)) {
            map[task] = 0;
        }
        map[task] += 1;
    }
    
    const maxHeap = Object.values(map).sort((a,b) => b-a);
    
    let t = 0;
    const q = [];
    
    while (maxHeap.length || q.length) {
        t += 1;
        if (!maxHeap.length) {
            t = q[0][1];
        } else {
            const count = maxHeap.shift() - 1;
            if (count) {
                q.push([count, t+n]);
            }
        }
        if (q.length && q[0][1] === t) {
            maxHeap.push(q.shift()[0]);
            maxHeap.sort((a,b) => b-a);
        }
    }
    return t;
};