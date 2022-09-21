/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b);
    
    const backtrack = (target, i) => {
        // If target matched, return array with one empty array element. The previously chosen value will be added to complete the choice.
        if (target === 0) return [[]];
        
        // If no target is ever met, return an empty array. No previous choices will be included. 
        if (target < 0 || i === candidates.length) return [];
        
        // If we skip one value, skip each following proceeding value. This step avoids duplication. 
        let nextIndex = i+1;
        while (nextIndex<candidates.length && candidates[i] === candidates[nextIndex]) {
            nextIndex += 1;
        }
        
        // The result array is initialized with the choices of skipping the current value. 
        const res = backtrack(target, nextIndex);
        
        // Include the results of choosing the current value. 
        const takeOne = backtrack(target - candidates[i], i+1);
        for (const combo of takeOne) {
            res.push([candidates[i], ...combo]);
        }
        return res;
    }
    
    return backtrack(target, 0);
};