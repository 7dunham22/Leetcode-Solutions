/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const res = [];
    const names = [];
    const times = [];
    const amounts = [];
    const cities = [];
    for (const transaction of transactions) {
        const [name, time, amount, city] = transaction.split(',');
        names.push(name);
        times.push(Number(time));
        amounts.push(Number(amount));
        cities.push(city);
    }
    
    for (let i=0; i<names.length; i++) {
        if (amounts[i] > 1000) {
            res.push([names[i], times[i], amounts[i], cities[i]].join(','));
            continue;
        }
        for (let j=0; j<names.length; j++) {
            if (i !== j && names[i] === names[j] && Math.abs(times[j] - times[i]) <= 60 && cities[i] !== cities[j]) {
                res.push([names[i], times[i], amounts[i], cities[i]].join(','));
                break;
            }
        }
    }
    
    return res;
};