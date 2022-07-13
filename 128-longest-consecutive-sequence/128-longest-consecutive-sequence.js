/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let MAX = 0;
    const update = (graph, num, len) => {
        if (num in graph) {
            graph[num] = len + 1;
            MAX = Math.max(MAX, len + 1);
            update(graph, num + 1, len + 1);
        }
    }
    const graph = {};
    for (let num of nums) {
        if (!(num in graph)) {
            let count;
            if (!(num-1 in graph)) {
                count = 1;   
            } else {
                count = graph[num-1] + 1; 
            }
            graph[num] = count;
            MAX = Math.max(MAX, count);
            update(graph, num+1, count);
        }
    }
    return MAX;
}

