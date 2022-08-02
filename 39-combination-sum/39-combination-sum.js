/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const results = [];
    
    const backtrack = (remain, comb, start) => {
        if (remain === 0) {
            results.push([...comb]);
            return;
        } else if (remain < 0) return;
        
        for (let i=start; i<candidates.length; i++) {
            comb.push(candidates[i]);
            backtrack(remain - candidates[i], comb, i);
            comb.pop();
        }
    }
    
    backtrack(target, [], 0);
    return results;
};