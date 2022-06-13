/**
 * @param {number[][]} paint
 * @return {number[]}
 */
var amountPainted = function(paint) {
    const log = [];
    let area = new Array(5*10**4).fill(1);
    for (let i=0; i<paint.length; i++) {
        let day = 0;
        const [start, end] = paint[i];
        for (let i=start; i<end; i++) {
            day += area[i];
            area[i] = 0;
        }
        log.push(day);
    }
    return log;
};