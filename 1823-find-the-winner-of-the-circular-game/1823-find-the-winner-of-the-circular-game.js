/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const circle = [];
    for (let i=0; i<n; i++) {
        circle.push(i+1);
    }
    
    let i = 0;
    while (circle.length > 1) {
        let steps = k;
        while (steps > 1) {
            if (i === circle.length-1) {
                i = 0;
            } else {
                i++;
            }
            steps--;
        }
        circle.splice(i,1);
        if (i === circle.length) {
            i = 0;
        }
    }
    return circle[0];
};