/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    const deltas = [[1,0], [0,1], [-1,0], [0,-1]];
    
    const backtrack = (board, r, c, i, visiting = new Set()) => {
        const key = r + ',' + c;
        if (i === word.length) return true; 
        if (r < 0 || r >= board.length || c < 0 || c>=board[r].length || visiting.has(key) || board[r][c] !== word[i]) return false; 
        visiting.add(key);
        for (let delta of deltas) {
            if (backtrack(board, r + delta[0], c + delta[1], i+1, visiting)) return true;
        }
        visiting.delete(key);
        return false;
    }
    
    for (let r=0; r<board.length; r++) {
        for (let c=0; c<board[r].length; c++) {
            if (backtrack(board, r, c, 0)) return true;
        }
    }
    return false;
};