/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    const traverse = (r, c, visited) => {
        const key = r + ',' + c;
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[r].length || visited.has(key) || grid[r][c] === "0") return 0;
        visited.add(key);
        traverse(r+1, c, visited);
        traverse(r-1, c, visited);
        traverse(r, c-1, visited);
        traverse(r, c+1, visited);
        return 1;
    }
    
    let count = 0;
    const visited = new Set();
    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid[r].length; c++) {
            count += traverse(r, c, visited);
        }
    }
    return count;
};