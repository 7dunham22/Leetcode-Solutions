/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let w = Math.floor(Math.sqrt(area));
    let l = Math.ceil(Math.sqrt(area));
    while (l*w !== area) {
        if (l*w < area) {
            l += 1;
        } else {
            w -= 1;
        }
    }
    return [l,w]
};