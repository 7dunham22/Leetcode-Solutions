/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Check rows
    for (let r=0; r<board.length; r++) {
        const rowSet = new Set();
        for (let c=0; c<board[r].length; c++) {
            if (board[r][c] !== '.' && rowSet.has(board[r][c])) return false;
            rowSet.add(board[r][c]);
        }
    }
    
    // Check columns
    for (let c=0; c<board[0].length; c++) {
        const colSet = new Set();
        for (let r=0; r<board.length; r++) {
            if (board[r][c] !== '.' && colSet.has(board[r][c])) return false;
            colSet.add(board[r][c]);
        }
    }
    
    // Check boxes
    const boxSets = new Array(3).fill(null).map(x => new Array(3).fill(null).map(y => new Set()));
    for (let r=0; r<board.length; r++) {
        const rIndex = Math.floor(r/3);
        for (let c=0; c<board[r].length; c++) {
            const cIndex = Math.floor(c/3);
            const boxSet = boxSets[rIndex][cIndex];
            if (board[r][c] !== '.' && boxSet.has(board[r][c])) return false;
            boxSet.add(board[r][c]);
        }
    }
    
    return true;
};