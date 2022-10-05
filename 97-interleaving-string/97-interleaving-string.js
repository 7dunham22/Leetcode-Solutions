/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1+s2 === s3 || s2+s1 === s3) return true;
    if (s1.length + s2.length !== s3.length) return false;
    const memo = {};
    
    const dfs = (i=0, j=0, k=0) => {
        if (k===s3.length) return true;
        const key = i+','+j+','+k;
        if (key in memo) return memo[key];
        let chooseS1 = false;
        let chooseS2 = false;
        if (i<s1.length && s1[i] === s3[k]) {
            chooseS1 = dfs(i+1, j, k+1);
        }
        if (j<s2.length && s2[j] === s3[k]) {
            chooseS2 = dfs(i, j+1, k+1);
        }
        memo[key] = chooseS1 || chooseS2;
        return memo[key];
    }
    
    return dfs();
};