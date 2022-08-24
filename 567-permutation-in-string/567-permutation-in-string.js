/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    const s1Count = new Array(26).fill(null).map(x => 0);
    const s2Count = new Array(26).fill(null).map(x => 0);
    for (let i=0; i<s1.length; i++) {
        s1Count[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        s2Count[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    
    
    let matches = 0;
    for (let i=0; i<26; i++) {
        if (s1Count[i] === s2Count[i]) {
            matches += 1;
        }
    }
    
    let l = 0;
    for (let r=s1.length; r<s2.length; r++) {
        if (matches === 26) return true;
        
        let index = s2[r].charCodeAt(0) - 'a'.charCodeAt(0);
        s2Count[index] += 1;
        if (s1Count[index] === s2Count[index]) {
            matches += 1;
        } else if (s1Count[index] + 1 === s2Count[index]) {
            matches -= 1;
        }
        
        index = s2[l].charCodeAt(0) - 'a'.charCodeAt(0);
        s2Count[index] -= 1;
        if (s1Count[index] === s2Count[index]) {
            matches += 1;
        } else if (s1Count[index] - 1 === s2Count[index]) {
            matches -= 1;
        }
        l += 1;
    }
    
    return matches === 26;
};