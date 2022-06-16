/**
 * @param {number[][]} mat
 * @return {number}
 */

const stringify = (matrix) => matrix.reduce((str, row) => `${str}-${row.join('-')}`, '');

function flip (matrix, r, c) {
    if (matrix[r] && matrix[r][c] !== undefined) {
        matrix[r][c] = 1 - matrix[r][c];
    }
}

var minFlips = function(mat) {
    const final = stringify(mat.map((row) => row.map(() => 0)));
    const seen = new Set();
    const queue = [[mat, 0]];
    const deltas = [[0,0],[1,0],[-1,0],[0,1],[0,-1]];
    while (queue.length) {
        const [matrix, numFlips] = queue.shift();
        const strMatrix = stringify(matrix);
        if (strMatrix === final) return numFlips;
        if (!seen.has(strMatrix)) {
            seen.add(strMatrix);
            for (let r=0; r<matrix.length; r++) {
                for (let c=0; c<matrix[r].length; c++) {
                    const newMatrix = matrix.map(row => [...row]);
                    deltas.forEach(([down, right]) => flip(newMatrix, r+down, c+right));
                    queue.push([newMatrix, numFlips+1]);
                }
            }
        }
    }
    return -1;
};