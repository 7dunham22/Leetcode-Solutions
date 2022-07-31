/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let root = new Trie();
    for (let word of words) {
        root.insert(word);
    }
    
    let result = [];
    for (let r=0; r<board.length; r++) {
        for (let c=0; c<board[r].length; c++) {
            root.traverse(board, r, c, root.root, "", result, new Set());
        }
    }
    return result;
};

function Trie() {
    this.root = {};
}

Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let i=0; i<word.length; i++) {
        let char = word[i];
        if (!(char in node)) node[char] = {};
        node = node[char];
    }
    node.isEnd = true;
}

Trie.prototype.traverse = function(board, r, c, node = this.root, word = "", result, visiting = new Set()) {
    const loc = r + ',' + c;
    if (!board[r] || !board[r][c] || visiting.has(loc)) return;
    const char = board[r][c];
    node = node[char];
    if (node === undefined) return;
    word += char;
    if (node.isEnd) {
        result.push(word);
        node.isEnd = false;
    }
    visiting.add(loc);
    this.traverse(board, r-1, c, node, word, result, visiting);
    this.traverse(board, r+1, c, node, word, result, visiting);
    this.traverse(board, r, c-1, node, word, result, visiting);
    this.traverse(board, r, c+1, node, word, result, visiting);
    visiting.delete(loc);
}
