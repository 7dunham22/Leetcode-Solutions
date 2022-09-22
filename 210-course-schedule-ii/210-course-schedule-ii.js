/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = {};
    for (let i=0; i<numCourses; i++) {
        graph[i] = [];
    }
    
    for (const [a,b] of prerequisites) {
        graph[a].push(b);
    }
    
    const res = [];
    const visited = new Set();
    const visiting = new Set();
    
    const canComplete = (course) => {
        const key = String(course);
        if (visited.has(key)) return true;
        if (visiting.has(key)) return false;
        
        visiting.add(key);
        
        for (const prereq of graph[course]) {
            if (!canComplete(prereq)) return false;
        }
        
        visiting.delete(key);
        visited.add(key);
        res.push(course);
        return true;
    }
    
    for (let course in graph) {
        if (!canComplete(course)) return [];
    }
    
    return res;
};