/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const debit = {'5': 0, '10': 0, '20': 0};
    for (const payment of bills) {
        if (payment === 5) {
            debit['5'] += 1;
        } else if (payment === 10) {
            if (debit['5'] === 0) return false;
            debit['5'] -= 1;
            debit['10'] += 1;
        } else {
            if (debit['5'] === 0) return false;
            if (debit['10'] > 0) {
                debit['10'] -= 1;
                debit['5'] -= 1;
                debit['20'] += 1;
            } else if (debit['5'] > 2) {
                debit['5'] -= 3;
                debit['20'] += 1;
            } else {
                return false;
            }
        }
    }
    return true;
};