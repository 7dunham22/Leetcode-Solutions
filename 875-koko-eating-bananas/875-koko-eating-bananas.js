/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    
    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        let hourSpent = 0;
        for (const pile of piles) {
            hourSpent += Math.ceil(pile / middle);
        }
        if (hourSpent <= h) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return right;
};

