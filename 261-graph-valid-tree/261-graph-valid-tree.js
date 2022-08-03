/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    const graph = {};
    for (let i=0; i<n; i++) {
        graph[i] = [];
    }
    for (let edge of edges) {
        const [a,b] = edge;
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const visited = new Set();
    
    const hasCycle = (node, parent) => {
        const key = String(node);
        if (visited.has(key)) return true;
        visited.add(key);
        for (let neighbor of graph[node]) {
            if (neighbor !== parent) {
                if (hasCycle(neighbor, node)) return true;
            }
        }
        return false;
    }
    
    return !hasCycle(0) && [...visited].length === n;
};