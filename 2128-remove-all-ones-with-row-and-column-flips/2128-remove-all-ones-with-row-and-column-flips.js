/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var removeOnes = function(grid) {
    const firstRow = grid[0];
    for (let i=1; i<grid.length; i++) {
        for (let j=0; j<firstRow.length; j++) {
            if (grid[i][0] === firstRow[0]) {
                if (grid[i][j] !== firstRow[j]) return false; 
            } else {
                if (grid[i][j] !== 1 - firstRow[j]) return false; 
            }
        }
    }
    return true; 
};