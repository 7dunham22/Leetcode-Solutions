/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const visited = new Set();
    
    const traverse = (r,c) => {
        const pos = r+','+c;
        if (r<0 || r===grid.length || c<0 || c===grid[0].length || grid[r][c] === 0) return 1;
        if (visited.has(pos)) return 0;
        visited.add(pos);
        let res = 0;
        res += traverse(r-1,c);
        res += traverse(r+1,c);
        res += traverse(r,c-1);
        res += traverse(r,c+1);
        return res;
    }
    
    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid[0].length; c++) {
            if (grid[r][c] === 1) {
                return traverse(r,c);
            }
        }
    }
};