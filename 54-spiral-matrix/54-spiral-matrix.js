/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let directions = ['right', 'down', 'left', 'up'];
    let d = 0;
    const size = matrix[0].length * matrix.length;
    const res = [];
    let r = 0;
    let c = 0;
    while (res.length < size) {
        res.push(matrix[r][c]);
        matrix[r][c] = "X";
        let direction = directions[d];
        if (direction === 'right') {
            if (c < matrix[r].length-1 && matrix[r][c+1] !== "X") {
                c++;
            } else {
                d++;
                r++;
            }
        } else if (direction === 'down') {
            if (r < matrix.length-1 && matrix[r+1][c] !== "X") {
                r++;
            } else {
                d++;
                c--;
            }
        } else if (direction === 'left') {
            if (c > 0 && matrix[r][c-1] !== "X") {
                c--;
            } else {
                d++;
                r--;
            }
        } else {
            if (r > 0 && matrix[r-1][c] !== "X") {
                r--;
            } else {
                d = 0;
                c++;
            }
        }
    }
    return res;
};