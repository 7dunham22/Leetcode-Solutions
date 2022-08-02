/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target, memo = {}, found = new Set()) {
    if (target === 0) return [[]];
    if (String(target) in memo) return memo[String(target)];
    let results = [];
    for (let num of candidates) {
        if (target - num >= 0) {
            const remainder = combinationSum(candidates, target - num, memo, found);
            for (let combo of remainder) {
                combo = [num, ...combo];
                let i = 0;
                while (i < combo.length-1 && combo[i] > combo[i+1]) {
                    [combo[i], combo[i+1]] = [combo[i+1], combo[i]];
                    i += 1;
                }
                const key = combo.join("");
                if (!(found.has(key))) {
                    found.add(key);
                    results.push(combo);
                }
            }
        }
    }
    memo[String(target)] = results;
    return results;
};