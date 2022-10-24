/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    let res = new Array(transactions.length).fill(null);
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
        if (res[i] !== null) continue;
        if (amounts[i] > 1000) {
            res[i] = [names[i], times[i], amounts[i], cities[i]].join(',');
            continue;
        }
        for (let j=0; j<names.length; j++) {
            if (i !== j && names[i] === names[j] && Math.abs(times[j] - times[i]) <= 60 && cities[i] !== cities[j]) {
                res[i] = [names[i], times[i], amounts[i], cities[i]].join(',');
                res[j] = [names[j], times[j], amounts[j], cities[j]].join(',');
                break;
            }
        }
    }
    
    res = res.filter(x => x !== null);
    
    return res;
};