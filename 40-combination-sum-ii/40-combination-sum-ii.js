/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b);
    const res = [];
    
    const backtrack = (curr, pos, target) => {
        if (target === 0) {
            res.push([...curr]);
            return;
        }
        if (target < 0) return;
        
        let prev = -1;
        for (let i=pos; i<candidates.length; i++) {
            if (candidates[i] === prev) continue;
            curr.push(candidates[i]);
            backtrack(curr, i + 1, target - candidates[i]);
            curr.pop();
            prev = candidates[i];
        }
    }
    
    backtrack([], 0, target);
    return res;
};