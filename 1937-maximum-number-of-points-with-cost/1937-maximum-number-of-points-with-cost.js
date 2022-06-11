/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const m = points.length; 
    const n = points[0].length; 
    
    let prev = points[0];
    let curr = Array(n);
    for (let i=1; i<m; i++) {
        for (let j=0, maxAdd=0; j<n; j++) {
            maxAdd = Math.max(maxAdd-1, prev[j]);
            curr[j] = points[i][j] + maxAdd;
        }
        for (let j=n-1, maxAdd=0; j>=0; j--) {
            maxAdd = Math.max(maxAdd-1, prev[j]);
            curr[j] = Math.max(curr[j], points[i][j] + maxAdd);
        }
        prev = curr;
        curr = Array(n);
    }
    return Math.max(...prev);
};