/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const pairs = [];
    for (let i=0; i<position.length; i++) {
        pairs.push([position[i], speed[i]]);
    }
    
    pairs.sort((a,b) => b[0] - a[0]);
    
    const stack = [];
    
    for (const [pos, speed] of pairs) {
        stack.push((target - pos) / speed);
        if (stack.length >= 2 && stack[stack.length-1] <= stack[stack.length-2]) {
            stack.pop();
        }
    }
    
    return stack.length;
};