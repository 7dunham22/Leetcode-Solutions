/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let MIN = Number.POSITIVE_INFINITY;
    for (let i=0; i<wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            let l = i;
            let r = i;
            while (l >= 0 || r <wordsDict.length) {
                if (wordsDict[l] === word2 || wordsDict[r] === word2) {
                    if (wordsDict[l] === word2) {
                        MIN = Math.min(MIN, i - l);
                    } else {
                        MIN = Math.min(MIN, r - i);
                    }
                    break;
                }
                if (l >= 0) l--;
                if (r <wordsDict.length) r++;
            }
        }
    }
    return MIN;
};