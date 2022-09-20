/**
 * @param {number[]} stones
 * @return {number}
 */

function binSearch(array, val, comparator = (a,b) => a-b) {
    let lo = 0;
    let hi = array.length - 1;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi)  / 2);
        const comp = comparator(array[mid], val);
        if (comp < 0) {
            lo = mid + 1;
        } else if (comp > 0) {
            hi = mid - 1;
        } else {
            return mid;
        }
    }
    return lo;
}

var lastStoneWeight = function(stones) {
    const sorted = [];
    for (const stone of stones) {
        const index = binSearch(sorted, stone);
        sorted.splice(index, 0, stone);
    }
    
    while (sorted.length > 1) {
        let y = sorted.pop();
        const x = sorted.pop();
        if (x !== y) {
            y -= x;
            const index = binSearch(sorted, y);
            sorted.splice(index, 0, y);
        }
    }
    
    return sorted.length === 1 ? sorted[0] : 0;
};