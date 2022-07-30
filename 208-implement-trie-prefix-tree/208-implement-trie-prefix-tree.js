
var Trie = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.trie;
    for (let i=0; i<word.length; i++) {
        let char = word[i];
        if (!(char in curr)) curr[char] = {};
        curr = curr[char];
    }
    curr.final = true;
};

Trie.prototype.traverse = function(word) {
    let curr = this.trie;
    for (let i=0; i<word.length; i++) {
        let char = word[i];
        if (!(char in curr)) return null;
        curr = curr[char];
    }
    return curr;
}

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.traverse(word);
    return node !== null && node.final === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.traverse(prefix) !== null;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */