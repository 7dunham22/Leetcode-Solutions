/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const wordsPresent = new Set(words);
    const memo = {};
    let ans = 0;
    for (let word of words) {
        ans = Math.max(ans, getMaxLength(word, wordsPresent, memo));
    }
    return ans;
};

const getMaxLength = (word, wordsPresent, memo) => {
    if (word in memo) return memo[word];
    let maxLength = 1;
    for (let i=0; i<word.length; i++) {
        const newWord = word.slice(0,i) + word.slice(i+1);
        if (wordsPresent.has(newWord)) {
            const currentLength = 1 + getMaxLength(newWord, wordsPresent, memo);
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    memo[word] = maxLength;
    return maxLength;
}