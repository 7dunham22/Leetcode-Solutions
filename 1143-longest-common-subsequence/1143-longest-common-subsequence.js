/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = new Array(text1.length+1).fill(null).map(x => new Array(text2.length+1).fill(null).map(y => 0));
    for (let col=text2.length-1; col>=0; col--) {
        for (let row=text1.length-1; row>=0; row--) {
            if (text2[col] === text1[row]) {
                dp[row][col] = 1 + dp[row+1][col+1];
            } else {
                dp[row][col] = Math.max(dp[row+1][col], dp[row][col+1]);
            }
        }
    }
    return dp[0][0];
};