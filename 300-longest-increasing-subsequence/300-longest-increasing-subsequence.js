/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const sub = [];
    for (let num of nums) {
        let i = bisect_left(sub, num);
        if (i === sub.length) {
            sub.push(num);
        } else {
            sub[i] = num;
        }
    }
    return sub.length;
};

const bisect_left = (array, num) => {
    let left = 0;
    let right = array.length-1;
    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        if (array[mid] === num) return mid;
        else if (array[mid] > num) right = mid-1;
        else left = mid+1;
    }
    return left;
}