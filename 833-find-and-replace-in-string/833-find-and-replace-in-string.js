/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let res = "";
    for (let i=0; i<s.length; i++) {
        const j = indices.indexOf(i);
        if (j !== -1 && sources[j] === s.slice(i, i + sources[j].length)) {
            i += sources[j].length - 1;
            res += targets[j];
        } else {
            res += s[i];
        }
    }
    return res;
};