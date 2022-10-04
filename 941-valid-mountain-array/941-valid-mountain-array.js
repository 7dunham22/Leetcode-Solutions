/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false;
    if (arr[1] < arr[0]) return false;
    let increasing = true;
    let prev = arr[0];
    for (let i=1; i<arr.length; i++) {
        const val = arr[i];
        if (val === prev) return false;
        if (val < prev) {
            if (increasing) {
                increasing = false;   
            }
        } else {
            if (!increasing) return false;
        }
        prev = val;
    }
    return increasing !== true;
};