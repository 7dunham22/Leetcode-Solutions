/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    const n = board.length;
    const m = board[0].length;
    
    const crush = (r,c) => {
        let r2 = r;
        for (let i=r; i>=0; i--) {
            if (board[i][c] > 0) {
                board[r2][c] = board[i][c];
                r2 -= 1;
            }
        }
        while (r2 >= 0) {
            board[r2][c] = 0;
            r2 -= 1;
        }
    }
    
    let isStable = false;
    while (!isStable) {
        isStable = true;
        for (let r=0; r<n-2; r++) {
            for (let c=0; c<m; c++) {
                const val = Math.abs(board[r][c]);
                if (val !== 0 && Math.abs(board[r+1][c]) === val && Math.abs(board[r+2][c]) === val) {
                    board[r][c] = 0 - val;
                    board[r+1][c] = 0 - val;
                    board[r+2][c] = 0 - val;
                    isStable = false;
                }
            }
        }
        for (let r=0; r<n; r++) {
            for (let c=0; c<m-2; c++) {
                const val = Math.abs(board[r][c]);
                if (val !== 0 && Math.abs(board[r][c+1]) === val && Math.abs(board[r][c+2]) === val) {
                    board[r][c] = 0 - val;
                    board[r][c+1] = 0 - val;
                    board[r][c+2] = 0 - val;
                    isStable = false;
                }
            }
        }
        for (let c=0; c<m; c++) {
            for (let r=n-1; r>= 0; r--) {
                crush(r,c);
            }
        }
    }
    
    return board;
    
};