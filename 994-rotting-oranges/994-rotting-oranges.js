/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    let rotten = []; // Queue of the oranges already rotted. [r, c]
    let mins = 0;
    
    const makeRot = () => {
        while (rotten.length > 0) {
            const [r,c,min] = rotten.shift();
            if (min > mins) mins = min;
            const neighbors = [[r-1,c], [r+1,c], [r,c-1], [r,c+1]];
            for (const [r1,c1] of neighbors) {
                if (r1<0 || r1===n || c1<0 || c1===m || grid[r1][c1] !== 1) continue;
                grid[r1][c1] = 2;
                rotten.push([r1,c1,min+1]);
            }
        }
    }
    
    const hasFresh = () => {
        for (let r=0; r<n; r++) {
            for (let c=0; c<m; c++) {
                if (grid[r][c] === 1) return true;
            }
        }
        return false;
    }
    
    //Gather initial rotten oranges
    for (let r=0; r<n; r++) {
        for (let c=0; c<m; c++) {
            if (grid[r][c] === 2) {
                rotten.push([r,c,0]);
            }
        }
    }
    
    makeRot();
    
    return hasFresh() ? -1 : mins;
};