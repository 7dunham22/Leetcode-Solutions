/**
 * @param {string[]} transactions
 * @return {string[]}
 */

//name, time, amount, city
var invalidTransactions = function(transactions) {
    const invalid = new Array(transactions.length).fill(0);
    transactions.map((transaction,i) => {
        transaction = transaction.split(",");
        const name = transaction[0];
        const time = transaction[1];
        const amount = transaction[2];
        const city = transaction[3];
        if (amount > 1000 && invalid[i] === 0) {
            invalid[i] = transaction.join(",");
        } 
        if (i > 0) {
            for (let j=0; j<i; j++) {
                let prev = transactions[j].split(",");
                if (prev[0] === name && prev[3] !== city && Math.abs(time-prev[1]) <= 60) {
                    invalid[i] = transaction.join(",");
                    invalid[j] = prev.join(",");
                }   
            }
        }
    });
    return invalid.filter(x => x !== 0);
};