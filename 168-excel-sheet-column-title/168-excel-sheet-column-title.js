/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = "";
    while (columnNumber > 0) {
        res = alph[(columnNumber-1)%26] + res;
        columnNumber = Math.floor((columnNumber-1)/26);
    }
    return res;
};