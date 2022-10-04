/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const maxCandies = candyType.length/2;
    const types = new Set();
    for (const candy of candyType) {
        if (!types.has(candy)) types.add(candy);
    }
    
    return Math.min(maxCandies, types.size);
};