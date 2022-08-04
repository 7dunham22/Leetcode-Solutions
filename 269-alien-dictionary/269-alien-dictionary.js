/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const adj = {};
    
    for (let i=0; i<words.length; i++) {
        let word = words[i];
        for (let j=0; j<word.length; j++) {
            adj[word[j]] = new Set();
        }
    }
    
    for (let i=0; i<words.length-1; i++) {
        let a = words[i];
        let b = words[i+1];
        let minLen = Math.min(a.length, b.length);
        if (a.length > b.length && a.slice(0,minLen) === b.slice(0,minLen)) return "";
        for (let j=0; j<minLen; j++) {
            if (a[j] !== b[j]) {
                adj[a[j]].add(b[j]);
                break;
            }
        }
    }
    
    const visited = {};
    const res = [];
    
    const dfs = (char) => {
        if (char in visited) return visited[char];
        visited[char] = true;
        for (let neighbor of [...adj[char]]) {
            if (dfs(neighbor)) return true;
        }
        visited[char] = false;
        res.push(char);
    }
    
    for (let char in adj) {
        if (dfs(char)) return "";
    }
    return res.reverse().join("");
};