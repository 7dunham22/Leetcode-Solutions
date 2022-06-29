/**
 * @param {string[]} words
 */

var StreamChecker = function(words) {
    this.trie = {};
    this.stream = [];
    for (let word of words) {
        let node = this.trie; 
        for (let char of word.split("").reverse()) {
            if (!(char in node)) {
                node[char] = {};
            }
            node = node[char];
        }
        node['$'] = word;
    }
    
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    this.stream.unshift(letter);
    let node = this.trie; 
    for (let char of this.stream) {
        if ('$' in node) return true;
        if (!(char in node)) return false; 
        node = node[char];
    }
    return '$' in node;
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
