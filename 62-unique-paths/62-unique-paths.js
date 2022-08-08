/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, i=0, j=0, memo={}) {
    const key = i + ',' + j;
    if (key in memo) return memo[key];
    if (i === m-1 && j === n-1) return 1;
    if (i < 0 || i >= m || j < 0 || j >= n) return 0;
    const paths = uniquePaths(m,n,i+1,j,memo) + uniquePaths(m,n,i,j+1,memo);
    memo[key] = paths;
    return paths;
};