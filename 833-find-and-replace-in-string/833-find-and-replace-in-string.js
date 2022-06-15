/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let res = "";
    const sorted = [];
    for (let i=0; i<indices.length; i++) {
        sorted.push([indices[i], sources[i], targets[i]]);
    }
    sorted.sort((a,b) => a[0] - b[0]);
    let j=0;
    let i=0;
    while (i<s.length && j<sorted.length) {
        const [index, source, target] = sorted[j];
        const match = source === s.slice(i, i + source.length);
        if (index === i && match) {
            i += source.length;
            res += target;
            j++;
        } else if (index === i) {
            res += s[i];
            i++;
            j++;
        } else {
            res += s[i];
            i++;
        }
    }
    if (i < s.length) res += s.slice(i);
    return res;
};