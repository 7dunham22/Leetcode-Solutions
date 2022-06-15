/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var tilingRectangle = function(n, m, memo=new Map()) {
    if (n > m) return tilingRectangle(m, n, memo);
    if (n === 0) return 0;
    if (n === 1) return m;
    const key = n+','+m;
    if (memo.has(key)) return memo.get(key);
    let ans = Number.MAX_VALUE;
    for (let w=1; w<=n; w++) {
        for (let i=0; i<=n-w; i++) {
            for (let j=0; j<=m-w; j++) {
                ans = Math.min(ans,
                               tilingRectangle(i, j+w, memo) +
                               tilingRectangle(m-j-w, i+w, memo) +
                               tilingRectangle(m-j, n-i-w, memo) + 
                               tilingRectangle(n-i, j, memo) + 1);
            }
        }
    }
    memo.set(key, ans);
    return ans;
};

