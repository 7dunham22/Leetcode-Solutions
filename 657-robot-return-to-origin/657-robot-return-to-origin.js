/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const location = [0,0];
    moves.split("").map(move => {
        if (move === "U") {
            location[1]++;
        } else if (move === "D") {
            location[1]--;
        } else if (move === "L") {
            location[0]--;
        } else {
            location[0]++;
        }
    });
    return location[0] === 0 && location[1] === 0;
};