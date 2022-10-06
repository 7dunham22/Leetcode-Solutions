/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    const allData = username.map((name, i) => [name, timestamp[i], website[i]]);
    allData.sort((a,b) => a[1] - b[1]);
    
    
    const userHistory = {};
    for (const [name, time, site] of allData) {
        if (!(name in userHistory)) userHistory[name] = [];
        userHistory[name].push(site);
    }
    
    const getPatterns = (sites, i=0, memo={}) => {
        if (i === sites.length) return [[]];
        if (i in memo) return memo[i];
        const first = sites[i];
        const patterns = getPatterns(sites, i+1, memo);
        const choseFirst = patterns.map(p => [first, ...p]);
        const results = [...choseFirst, ...patterns].filter(p => p.length <= 3);
        memo[i] = results;
        return results;
    }
    
    const getSmaller = (arr1, arr2) => {
        for (let i=0; i<arr1.length; i++) {
            if (arr1[i] < arr2[i]) {
                return arr1;
            } else if (arr1[i] > arr2[i]) {
                return arr2;
            }
        }
        return arr1;
    }
    
    let MAX = 0;
    let result = [];
    const trie = {'#': {}};
    for (const user in userHistory) {
        const patterns = getPatterns(userHistory[user]).filter(p => p.length === 3);
        for (const pattern of patterns) {
            let level = trie['#'];
            for (let i=0; i<pattern.length; i++) {
                const site = pattern[i];
                if (!(site in level)) level[site] = {};
                level = level[site];
            }
            if (!('#' in level)) level['#'] = new Set();
            const score = level['#'];
            if (!score.has(user)) score.add(user);
            if (score.size > MAX) {
                MAX = score.size;
                result = pattern;
            } else if (score.size === MAX) {
                result = getSmaller(result, pattern);
            }
        }
    }
    return result;
};