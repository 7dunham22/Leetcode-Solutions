/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    if (arr.length < 3) return 0;
    let MAX = 0;
    let curr = [arr[0]];
    let state = 0; //0 = Flat. 1 = increasing. 2 = increasing + decreasing
    for (let i=1; i<arr.length; i++) {
        if (arr[i] > curr[curr.length-1]) {
            if (state === 2) {
                if (curr.length >= 3) {
                    MAX = Math.max(MAX, curr.length);
                }
                curr = [arr[i-1], arr[i]];
            } else if (state === 0) {
                curr = [arr[i-1], arr[i]];
            } else {
                curr.push(arr[i]);
            }
            state = 1;
        } else if (arr[i] < curr[curr.length-1]) {
            if (state === 1) {
                state = 2;
            }
            curr.push(arr[i]);
        } else {
            if (state === 2 && curr.length >= 3) MAX = Math.max(MAX, curr.length);
            curr = [arr[i]];
            state = 0;
        }
    }
    
    if (state === 2 && curr.length >= 3) {
        MAX = Math.max(MAX, curr.length);
    }
    
    return MAX;
};