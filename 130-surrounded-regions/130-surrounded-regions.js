/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    
    const canEscape = (r,c, visited) => {
        const key = r+','+c;
        if (board[r][c] === 'X' || visited.has(key)) return false;
        if (r===0 || r===board.length-1 || c===0 || c===board[0].length-1) return true;
        visited.add(key);
        const up = canEscape(r-1, c, visited);
        const left = canEscape(r, c-1, visited);
        const down = canEscape(r+1, c, visited);
        const right = canEscape(r, c+1, visited);
        return (up || left || down || right);
    }
    
    const fill = (visited) => {
        for (const key of [...visited]) {
            const [r, c] = key.split(',');
            board[r][c] = 'X';
        }
    }
    
    for (let r=0; r<board.length; r++) {
        for (let c=0; c<board[0].length; c++) {
            const visited = new Set();
            if (!canEscape(r,c, visited)) {
                fill(visited);
            }
        }
    }
};