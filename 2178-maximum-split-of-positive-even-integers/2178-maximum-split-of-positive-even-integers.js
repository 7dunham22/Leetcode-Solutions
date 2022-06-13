/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2 !== 0 || finalSum <= 1) return [];
    if (finalSum === 2) return [2];
    if (finalSum === 4) return [4];
    let ans = [];
    let i = 2;
    let currSum = 0;
    for (let i=2; i<finalSum; i+=2) {
        ans.push(i);
        currSum += i;
        if (currSum >= finalSum) {
            if (currSum > finalSum) {
                const num = currSum - finalSum;
                const index = (num/2)-1;
                ans.splice(index, 1);
            }
            break;
        }
    }
    return ans;
};