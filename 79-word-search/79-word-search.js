/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const visited = new Set();
    
    const dfs = (r, c, i = 0) => {
        if (i === word.length) return true;
        if (r<0 || r===board.length || c<0 || c===board[0].length || visited.has(r+','+c) || board[r][c] !== word[i]) return false;
        visited.add(r+','+c);
        if (dfs(r+1,c,i+1) || dfs(r-1,c,i+1) || dfs(r,c+1,i+1) || dfs(r,c-1,i+1)) return true;
        visited.delete(r+','+c);
        return false;
    }
    
    for (let r=0; r<board.length; r++) {
        for (let c=0; c<board[0].length; c++) {
            if (dfs(r,c)) return true;
        }
    }
    
    return false;
};