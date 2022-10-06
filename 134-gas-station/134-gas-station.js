/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const sumGas = gas.reduce((prev,curr) => prev+curr);
    const sumCost = cost.reduce((prev,curr) => prev+curr);
    if (sumGas < sumCost) return -1;
    let startStation = 0;
    let totalTank = 0;
    let currTank = 0;
    for (let i=0; i<gas.length; i++) {
        totalTank += gas[i] - cost[i];
        currTank += gas[i] - cost[i];
        if (currTank < 0) {
            startStation = i + 1;
            currTank = 0;
        }
    }
    return totalTank >= 0 ? startStation : -1;
};