/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2 !== 0) return [];
    let ans = [];
    let i = 2;
    let currSum = 0;
    while (currSum + i <= finalSum) {
        ans.push(i);
        currSum += i;
        i += 2;
    }
    const n = ans.length;
    ans[n-1] += finalSum - currSum;
    return ans;
};