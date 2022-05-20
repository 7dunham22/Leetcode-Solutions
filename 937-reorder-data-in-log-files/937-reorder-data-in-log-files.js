/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const letters = [];
    const digits = [];
    while (logs.length > 0) {
        const log = logs.pop();
        if (!isNaN(log[log.length-1])) {
            digits.unshift(log);
        } else {
            letters.unshift(log);
        }
    }
    letters.sort((a,b) => {
        if (a.slice(0, a.indexOf(" ")) < b.slice(0, b.indexOf(" "))) {
            return -1;
        } else if (a.slice(0, a.indexOf(" ")) > b.slice(0, b.indexOf(" "))) {
            return 1;
        }
        return 0;
    });
    letters.sort((a,b) => {
        if (a.slice(a.indexOf(" ")+1) < b.slice(b.indexOf(" ")+1)) {
            return -1;
        } else if (a.slice(a.indexOf(" ")+1) > b.slice(b.indexOf(" ")+1)) {
            return 1;
        }
        return 0;
    });
    const res = letters.concat(digits);
    return res;
};