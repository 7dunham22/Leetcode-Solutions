/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = {};
    for (let i=0; i<numCourses; i++) {
        graph[i] = [];
    }
    for (let prereq of prerequisites) {
        const [a,b] = prereq;
        graph[b].push(a);
    }
    
    const hasCycle = (course, visiting = new Set()) => {
        const key = String(course);
        if (visiting.has(key)) return true;
        visiting.add(key);
        for (let next of graph[course]) {
            if (hasCycle(next, visiting)) return true;
        }
        visiting.delete(key);
        graph[course] = [];
        return false;
    }
    
    for (let course in graph) {
        if (hasCycle(course)) return false;
    }
    return true;
};