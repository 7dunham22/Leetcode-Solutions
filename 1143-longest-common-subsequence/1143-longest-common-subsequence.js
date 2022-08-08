/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const memo = {};
    
    const memoSolve = (p1,p2) => {
        const key = p1 + ',' + p2;
        if (key in memo) return memo[key];
        if (p1 === text1.length || p2 === text2.length) return 0;
        
        let count = 0;
        if (text1[p1] === text2[p2]) {
            count = 1 + memoSolve(p1+1, p2+1);
        } else {
            count = Math.max(memoSolve(p1, p2+1), memoSolve(p1+1, p2));
        }
        memo[key] = count;
        return count;
    }
    
    return memoSolve(0,0);
};