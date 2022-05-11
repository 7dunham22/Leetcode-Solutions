/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a,b) => a-b);
    verticalCuts.sort((a,b) => a-b);
    
    let hMax = Math.max(horizontalCuts[0], h-horizontalCuts[horizontalCuts.length-1]);
    horizontalCuts.map((cut, i) => {
        if (i > 0) {
            hMax = Math.max(hMax, cut - horizontalCuts[i-1]);
        }
    });
    
    let vMax = Math.max(verticalCuts[0], w-verticalCuts[verticalCuts.length-1]);
    verticalCuts.map((cut, i) => {
        if (i > 0){
            vMax = Math.max(vMax, cut - verticalCuts[i-1]);
        }
    });
    
    return (BigInt(hMax) * BigInt(vMax)) % 1000000007n;
};