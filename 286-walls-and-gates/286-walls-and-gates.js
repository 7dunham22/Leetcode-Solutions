/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const n = rooms.length;
    const m = rooms[0].length;
    const EMPTY = 2147483647;
    const GATE = 0;
    const WALL = -1;
    const queue = [];
    
    const setDistances = () => {
        const visiting = new Set();
        while (queue.length > 0) {
            const [r,c] = queue.shift();
            visiting.add(r+','+c);
            const neighbors = [[r-1,c], [r+1,c], [r,c-1], [r,c+1]];
            for (const [r2,c2] of neighbors) {
                if (r2<0 || r2===n || c2<0 || c2===m || visiting.has(r2+','+c2) || rooms[r2][c2] !== EMPTY) continue;
                rooms[r2][c2] = rooms[r][c] + 1;
                queue.push([r2,c2]);
            }
        }
    }
    
    for (let r=0; r<n; r++) {
        for (let c=0; c<m; c++) {
            if (rooms[r][c] === GATE) {
                queue.push([r,c]);
            }
        }
    }
    
    setDistances();
};