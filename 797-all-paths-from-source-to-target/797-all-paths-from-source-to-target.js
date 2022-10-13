/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const n = graph.length;
    const hash = {};
    for (let i=0; i<n; i++) {
        hash[i] = graph[i];
    }
    
    const res = [];
    
    const dfs = (node, prev=[]) => {
        prev.push(node);
        if (node === n-1) {
            res.push([...prev]);
        }
        for (const child of hash[node]) {
            dfs(child, prev);
        }
        prev.pop();
        return;
    }
    
    dfs(0);
    return res;
};