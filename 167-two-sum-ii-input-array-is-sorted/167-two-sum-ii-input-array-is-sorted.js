/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length-1;
    while (l < r) {
        const sum = numbers[l] + numbers[r];
        if (sum > target) {
            r--;
        } else if (sum < target) {
            l++;
        } else {
            return [l+1, r+1];
        }
    }
};

/*
[1,2,7,11,15] => 9
 0,1,2,3, 4
l:      0   0   0   1
r:      4   3   2   2
sum:    16  14  8   9

*/