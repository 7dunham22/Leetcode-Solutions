
var Trie = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.trie;
    let seg = "";
    for (let i=0; i<word.length; i++) {
        seg += word[i];
        if (!(seg in curr)) curr[seg] = {};
        curr = curr[seg];
    }
    curr["final"] = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.trie;
    let seg = "";
    for (let i=0; i<word.length; i++) {
        seg += word[i];
        if (!(seg in curr)) return false;
        curr = curr[seg];
    }
    return "final" in curr;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.trie;
    let seg = "";
    for (let i=0; i<prefix.length; i++) {
        seg += prefix[i];
        if (!(seg in curr)) return false;
        curr = curr[seg];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */