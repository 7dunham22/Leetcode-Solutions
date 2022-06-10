/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const rEnd = grid.length-1;
    const cEnd = grid[0].length-1;
    const queue = [[0,0,k,0, prev=new Set()]]; //[r,c,k,steps]
    while (queue.length > 0) {
        const curr = queue.shift();
        const [r, c, x, steps, visited] = curr;
        const key = r+','+c+','+x;
        if (r === rEnd && c === cEnd) {
            return steps;
        } else if (!visited.has(key)){
            visited.add(key);
            const deltas = [[0,1], [1,0], [0,-1], [-1,0]];
            for (let delta of deltas) {
                const [dx, dy] = delta;
                const rNext = r+dx;
                const cNext = c+dy;
                if (rNext >= 0 && rNext <= rEnd && cNext >= 0 && cNext <= cEnd) {
                    if (grid[rNext][cNext] === 1 && x > 0) {
                        queue.push([rNext, cNext, x-1, steps+1, visited]);
                    } else if (grid[rNext][cNext] === 0){
                        queue.push([rNext, cNext, x, steps+1, visited]);
                    }
                }
            }   
        }
    }
    return -1;
};