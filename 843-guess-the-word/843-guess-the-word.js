/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {
    if (wordlist.length <= 6) {
        for (let word of wordlist) {
            master.guess(word);
        }
        return;
    }
    
    for (let i=0, matches=0; i<10 && matches !== 6; i++) {
        let random = Math.floor(Math.random() * wordlist.length);
        const guess = wordlist[random];
        const matches = master.guess(guess);
        const candidates = [];
        for (let word of wordlist) {
            if (matches === getMatches(guess, word)) {
                candidates.push(word);
            }
        }
        wordlist = candidates;
    }
}

const getMatches = (word1, word2) => {
    let matches = 0;
    for (let i=0; i<word1.length; i++) {
        if (word1[i] === word2[i]) matches++;
    }
    return matches;
}