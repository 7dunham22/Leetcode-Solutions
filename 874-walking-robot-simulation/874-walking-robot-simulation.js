/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    const dirs = [[0,1], [1,0], [0,-1], [-1,0]];
    const blocks = new Set(obstacles.map(v => v[0]+':'+v[1]));
    console.log(blocks);
    let max = 0;
    let x = 0;
    let y = 0;
    let d = 0;
    for (let command of commands) {
        if (command === -1) {
            d = (d+1)%4;
        } else if (command === -2) {
            d = (d+3)%4;
        } else {
            for (let i=0; i<command; i++) {
                const [dx, dy] = dirs[d];
                if (blocks.has(`${x+dx}:${y+dy}`)) {
                    break;
                }
                x += dx;
                y += dy;
            }
        }
        max = Math.max(max, x**2 + y**2);
    }
    return max;
};
