/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const memo = {};
    let MAX = 0;
    
    const dfs = (r,c, prev = null) => {
        const pos = r+','+c;
        if (r<0 || r===matrix.length || c<0 || c===matrix[0].length || (prev !== null && matrix[r][c] <= prev)) {
            return 0;
        }
        if (pos in memo) return memo[pos];
        let len = 1;
        const neighbors = [[r+1,c], [r-1,c], [r,c+1], [r,c-1]];
        for (const [r2,c2] of neighbors) {
            len = Math.max(len, 1 + dfs(r2,c2,matrix[r][c]));
        }
        memo[pos] = len;
        return len;
    }
    
    for (let r=0; r<matrix.length; r++) {
        for (let c=0; c<matrix[0].length; c++) {
            const path = dfs(r,c);
            MAX = Math.max(MAX, path);
        }
    }
    
    return MAX;
};