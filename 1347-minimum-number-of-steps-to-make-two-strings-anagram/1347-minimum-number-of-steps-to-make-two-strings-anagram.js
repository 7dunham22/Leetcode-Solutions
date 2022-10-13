/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const sCounts = {};
    const tCounts = {};
    for (let i=0; i<s.length; i++) {
        const s1 = s[i];
        const t1 = t[i];
        if (!(s1 in sCounts)) sCounts[s1] = 0;
        if (!(s1 in tCounts)) tCounts[s1] = 0;
        if (!(t1 in tCounts)) tCounts[t1] = 0;
        if (!(t1 in sCounts)) sCounts[t1] = 0;
        sCounts[s1] += 1;
        tCounts[t1] += 1;
    }
    
    let diff = 0;
    for (const char in tCounts) {
        if (tCounts[char] < sCounts[char]) diff += sCounts[char] - tCounts[char];
    }
    
    return diff;
};