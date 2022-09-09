/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temps) {
    const answer = new Array(temps.length).fill(null).map(x => 0);
    const stack = [];
    for (let i=0; i<temps.length; i++) {
        const temp = temps[i];
        while (stack.length > 0 && temps[stack[stack.length-1]] < temp) {
            let j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }
    return answer;
};