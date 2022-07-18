/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const hash = t.split('').reduce((acc, val) => {
        if (!acc[val]) acc[val] = 0;
        acc[val] += 1;
        return acc;
      }, {});
    
    let start = 0;
    let MIN = Number.POSITIVE_INFINITY;
    let matched = 0;
    let subStringStart = null;
    for (let i=0; i<s.length; i++) {
        let right = s[i];
        if (right in hash) {
            hash[right] -= 1;
        }
        if (hash[right] >= 0) matched += 1;
        while (matched === t.length) {
            if (i - start + 1 < MIN) {
                subStringStart = start;
                MIN = i - start + 1;
            }
            let left = s[start];
            start += 1;
            if (left in hash) {
                if (hash[left] === 0) matched -= 1;
                hash[left] += 1;
            }
        }
    }
    return MIN === Number.POSITIVE_INFINITY ? "" : s.slice(subStringStart, subStringStart + MIN);
};