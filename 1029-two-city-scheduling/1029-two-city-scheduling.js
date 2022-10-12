/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    const n = costs.length / 2;
    const A = [];
    const B = [];
    for (const [aCost, bCost] of costs) {
        if (aCost < bCost) {
            A.push([aCost, bCost]);
        } else {
            B.push([aCost, bCost]);
        }
    }

    if (A.length === n) {
        return A.reduce((prev,curr) => prev + curr[0], 0) + B.reduce((prev,curr) => prev + curr[1], 0);
    }
    
    A.sort((a,b) => Math.abs(b[0]-b[1]) - Math.abs(a[0]-a[1]));
    B.sort((a,b) => Math.abs(b[0]-b[1]) - Math.abs(a[0]-a[1]));

    
    while (A.length > B.length) {
        B.push(A.pop());
    }
    while (B.length > A.length) {
        A.push(B.pop());
    }
    
    return A.reduce((prev,curr) => prev + curr[0], 0) + B.reduce((prev,curr) => prev + curr[1], 0);
};