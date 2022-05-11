/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const directions = [[0,1], [1,0], [0,-1], [-1,0]]; //[north, east, south, west]
    let i = 0; // start moving north
    const pos = [0,0];
    const start = [...pos];
    instructions = instructions.split("");
    for (let move of instructions) {
        if (move === "G") {
            let direction = directions[i];
            pos[0] += direction[0];
            pos[1] += direction[1];   
        } else if (move === "L") {
            i = i === 0 ? 3 : i-1;
        } else {
            i = i === 3 ? 0 : i+1;
        }
    }
    if ((pos[0] === 0 && pos[1] === 0) || i !== 0) {
        return true;
    }
    return false;
};