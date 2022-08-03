/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
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
    
    const traverse = (node) => {
        const key = String(node);
        if (visited.has(key)) return;
        visited.add(key);
        for (let neighbor of graph[node]) {
            traverse(neighbor);
        }
        return;
    }
    
    let count = 0;
    for (let node in graph) {
        if (!visited.has(String(node))) {
            traverse(node);
            count++;
        }
    }
    return count;
};