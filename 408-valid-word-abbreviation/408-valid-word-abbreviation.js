/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let wordIndex = 0;
    let num = "0";
    for (let i=0; i<abbr.length; i++) {
        if (isNaN(abbr[i])) {
            wordIndex += Number(num);
            num = "0";
            if (wordIndex >= word.length || word[wordIndex] !== abbr[i]) return false;
            wordIndex++;
        } else {
            if (num === '0' && abbr[i] === '0') return false;
            num += abbr[i];
        }
    }
    wordIndex += Number(num);
    if (wordIndex !== word.length) return false;
    return true; 
};