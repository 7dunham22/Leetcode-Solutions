/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.dict = {};
    for (let i=0; i<wordsDict.length; i++) {
        const word = wordsDict[i];
        if (!(word in this.dict)) this.dict[word] = [];
        this.dict[word].push(i);
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    const indices1 = this.dict[word1];
    const indices2 = this.dict[word2];
    let MIN = Number.POSITIVE_INFINITY;
    for (let i1 of indices1) {
        for (let i2 of indices2) {
            MIN = Math.min(MIN, Math.abs(i1 - i2));
        }
    }
    return MIN;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */