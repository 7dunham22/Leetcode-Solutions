/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    const deltas = [[1,0], [0,1], [-1,0], [0,-1]];
    
    const backtrack = (board, r, c, i) => {
        const key = r + ',' + c;
        if (i === word.length) return true; 
        if (r < 0 || r >= board.length || c < 0 || c>=board[r].length || board[r][c] !== word[i]) return false; 
        const char = board[r][c];
        board[r][c] = "#"
        for (let delta of deltas) {
            if (backtrack(board, r + delta[0], c + delta[1], i+1)) return true;
        }
        board[r][c] = char;
        return false;
    }
    
    for (let r=0; r<board.length; r++) {
        for (let c=0; c<board[r].length; c++) {
            if (backtrack(board, r, c, 0)) return true;
        }
    }
    return false;
};