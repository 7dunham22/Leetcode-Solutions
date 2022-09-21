/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const n = board.length;
    const m = board[0].length;
    
    const save = (r, c) => {
        if (r<0 || r===board.length || c<0 || c===board[0].length || board[r][c] !== 'O') return;
        board[r][c] = 'T';
        save(r-1,c);
        save(r+1,c);
        save(r,c-1);
        save(r,c+1);
    }
    
    //save
    for (let r=0; r<n; r++) {
        for (let c=0; c<m; c++) {
            if (board[r][c] === 'O' && ([0,n-1].includes(r) || [0,m-1].includes(c))) {
                save(r,c);   
            }
        }
    }
    
    //capture
    for (let r=0; r<n; r++) {
        for (let c=0; c<m; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X';
            }
        }
    }
    
    //Return saved to O
    for (let r=0; r<n; r++) {
        for (let c=0; c<m; c++) {
            if (board[r][c] === 'T') {
                board[r][c] = 'O';
            }
        }
    }
};