/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [];
    
    const backtrack = (S = [], left = 0, right = 0) => {
        if (S.length === 2*n) {
            ans.push(S.join(""));
            return;
        }
        if (left < n) {
            S.push('(');
            backtrack(S, left+1, right);
            S.pop();
        }
        if (right < left) {
            S.push(')');
            backtrack(S, left, right+1);
            S.pop();
        }
    }
    
    backtrack();
    return ans;
};