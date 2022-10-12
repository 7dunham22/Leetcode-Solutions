/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const names = [];
    const times = [];
    const amounts = [];
    const cities = [];
    for (const transaction of transactions) {
        const [name, time, amount, city] = transaction.split(',');
        names.push(name);
        times.push(+time);
        amounts.push(+amount);
        cities.push(city);
    }
    
    const res = [];
    for (let i=0; i<transactions.length; i++) {
        const [name, time, amount, city] = [names[i], times[i], amounts[i], cities[i]];
        if (amount > 1000) {
            res.push(name+','+time+','+amount+','+city);   
        } else {
            for (let j=0; j<transactions.length; j++) {
                if (i !== j && Math.abs(time - times[j]) <= 60 && names[j] === name && cities[j] !== city) {
                    res.push(name+','+time+','+amount+','+city);
                    break;
                }
            }
        }
    }
    return res;
};