/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const dict = new Set(wordDict);
    const memo = new Set();
    
    const dfs = (i=0, curr="") => {
        const key = i + ',' + curr;
        if (memo.has(key)) return memo[key];
        if (i === s.length) {
            if (dict.has(curr)) return [curr];
            return [];
        }
        const res = [];
        if (dict.has(curr + s[i])) {
            const chosen = dfs(i+1, "");
            chosen.forEach(combo => res.push(curr + s[i] + ' ' + combo));
        }
        const skipped = dfs(i+1, curr + s[i]);
        skipped.forEach(combo => res.push(combo));
        memo[key] = res;
        return res;
    }
    
    return dfs();
};