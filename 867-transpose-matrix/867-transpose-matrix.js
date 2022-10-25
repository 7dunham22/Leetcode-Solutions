/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const ans = new Array(m).fill(null).map(() => new Array(n));
    for (let r=0; r<n; r++) {
        for (let c=0; c<m; c++) {
            ans[c][r] = matrix[r][c];
        }
    }
    return ans;
};