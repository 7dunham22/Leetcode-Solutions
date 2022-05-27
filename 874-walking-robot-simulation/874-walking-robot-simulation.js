/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let farthest = 0;
    const obstacleMap = createObstacleMap(obstacles);
    const pos = [0,0];
    const directions = [[0,1], [1,0], [0,-1], [-1,0]];
    let d = 0;
    for (let command of commands) {
        if (command === -2) {
            if (d === 0) {
                d = 3;
            } else {
                d--;
            }
        } else if (command === -1) {
            if (d === 3) {
                d = 0;
            } else {
                d++;
            }
        } else {
            const move = directions[d];
            const magnitudes = move.map(x => x * command); // e.g.: [0,-1] * 7 = [0,-7]
            for (let i=0; i<=1; i++) {
                let magnitude = magnitudes[i];
                while (magnitude < 0) {
                    const next = [...pos];
                    next[i]--;
                    const [nextx, nexty] = next;
                    if (!obstacleMap[nextx] || !obstacleMap[nextx][nexty]) {
                        pos[i]--;
                        magnitude++;
                    } else {
                        break;
                    }
                }
                while (magnitude > 0) {
                    const next = [...pos];
                    next[i]++;
                    const [nextx, nexty] = next;
                    if (!obstacleMap[nextx] || !obstacleMap[nextx][nexty]) {
                        pos[i]++;
                        magnitude--;
                    } else {
                        break;
                    }
                    // console.log(pos);
                }
                const distance = pos[0]**2 + pos[1]**2;
                if (distance > farthest) farthest = distance;
            }
        }
    }
    return farthest;
};

const createObstacleMap = (obstacles) => {
    const map = {};
    for (let obstacle of obstacles) {
        const [x, y] = obstacle;
        if (!map[x]) map[x] = {};
        if (!map[x][y]) map[x][y] = 1;
    }
    return map;
}