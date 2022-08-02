/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const n = heights.length;
    const m = heights[0].length;
    const deltas = [[1,0], [0,1], [-1,0], [0,-1]];
    
    const atlanticQueue = [];
    const pacificQueue = [];
    
    //Populate
    for (let i=0; i<n; i++) {
        pacificQueue.push([i,0]);
        atlanticQueue.push([i, m - 1]);
    }
    for (let i=0; i<m; i++) {
        pacificQueue.push([0,i]);
        atlanticQueue.push([n - 1, i]);
    }
    
    const bfs = (queue) => {
        const reachable = new Set();
        while (queue.length > 0) {
            const [r, c] = queue.shift();
            reachable.add(r + ',' + c);
            for (let delta of deltas) {
                let r2 = r + delta[0];
                let c2 = c + delta[1];
                if (r2 < 0 || r2 >= n || c2 < 0 || c2 >= m) continue;
                if (reachable.has(r2 + ',' + c2)) continue;
                if (heights[r2][c2] < heights[r][c]) continue;
                queue.push([r2, c2]);
            }
        }
        return reachable;
    }
    
    const atlantic = bfs(atlanticQueue);
    const pacific = bfs(pacificQueue);
    
    return [...atlantic].filter(x => pacific.has(x)).map(x => x.split(","));
    
};