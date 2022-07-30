
var WordDictionary = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;
    for (let i=0; i<word.length; i++) {
        let char = word[i];
        if (!(char in node)) node[char] = {};
        node = node[char];
    }
    node["isEnd"] = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, node=this.trie) {
    for (let i=0; i<word.length; i++) {
        let char = word[i];
        if (char === '.') {
            for (let next in node) {
                if (next !== "isEnd" && this.search(word.slice(i+1), node[next])) return true;
            }
            return false;
        } else {
            if (!(char in node)) return false;
            node = node[char];
        }
    }
    return node.isEnd === true;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */