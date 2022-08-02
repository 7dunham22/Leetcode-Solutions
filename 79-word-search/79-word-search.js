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
        if (!board[r] || !board[r][c] || visiting.has(key)) return false; 
        const char = board[r][c];
        if (char !== word[i]) return false;
        visiting.add(key);
        for (let delta of deltas) {
            let r2 = r + delta[0];
            let c2 = c + delta[1];
            if (backtrack(board, r2, c2, i+1, visiting)) return true;
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