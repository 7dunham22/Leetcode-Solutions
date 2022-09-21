/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let MAX = 0;
    const visited = new Set();
    
    const traverse = (r, c) => {
        const key = r + ',' + c;
        if (r < 0 || r===grid.length || c<0 || c===grid[0].length || grid[r][c] === 0 || visited.has(key)) return 0;
        visited.add(key);
        return 1 + traverse(r+1,c) + traverse(r-1,c) + traverse(r, c-1) + traverse(r, c+1);
    }
    
    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid[0].length; c++) {
            const size = traverse(r,c);
            MAX = Math.max(MAX, size);
        }
    }
    
    return MAX;
};