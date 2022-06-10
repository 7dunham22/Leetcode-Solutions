/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
    const queue = [[0,1]]; //[pos, speed]
    const visit = new Set(['0 1', '0 -1']);
    let res = 0;
    while (queue.length > 0) {
        let t = queue.length; 
        while (t--) {
            const curr = queue.shift();
            const [pos, speed] = curr;
            const pos1 = pos + speed;
            const speed1 = speed*2;
            if (pos1 === target) return res + 1;
            if (pos1 > 0 && pos1 < 2 * target) {
                queue.push([pos1, speed1]);
                visit.add(pos1 + ' ' + speed1);
            }
            const speed2 = speed > 0 ? -1 : 1;
            const key2 = pos + ' ' + speed2;
            if (!visit.has(key2)) {
                queue.push([pos, speed2]);
                visit.add(key2);
            }
        }
        res++;
    }
    return res;
};