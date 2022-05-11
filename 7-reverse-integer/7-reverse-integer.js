/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x>= 2**31-1 || x <= (-2)**31) return 0;
    let xstring = x.toString();
    let res = "";
    if (x >= 0) {
        let digits = xstring.split("");
        while (digits.length > 0) {
            res += digits.pop();
        }
    } else {
        let temp = xstring.slice(1);
        let digits = temp.split("");
        let temp2 = "";
        while (digits.length > 0) {
            temp2 += digits.pop();
        }
        res = "-" + temp2;
        console.log(temp2);
    }
    if (Number(res) >= 2**31-1 || Number(res) <= (-2)**31) {
        return 0;
    } else {
        return Number(res);
    }
};