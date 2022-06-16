/**
 * @param {number[][]} paint
 * @return {number[]}
 */
var amountPainted = function(paint) {
    const paintedMap = [];
    const res = [];
    for (let [start, end] of paint) {
        let c = 0;
        for (let p=start; p<end; p++) {
            if (!paintedMap[p]) {
                c++;
                paintedMap[p] = end;
            } else {
                p = paintedMap[p] - 1;
            }
        }
        res.push(c);
    }
    return res;
    
};