/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, i=0, j=0, memo={}) {
    const d = new Array(m).fill(null).map(x => new Array(n).fill(null).map(x => 1));
    for (let c=1; c<m; c++) {
        for (let r=1; r<n; r++) {
            d[c][r] = d[c-1][r] + d[c][r-1];
        }
    }
    return d[m-1][n-1];
};