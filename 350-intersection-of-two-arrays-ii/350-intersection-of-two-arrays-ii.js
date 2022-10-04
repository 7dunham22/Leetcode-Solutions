/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const counter1 = {};
    for (const num of nums1) {
        if (!(num in counter1)) {
            counter1[num] = 0;
        }
        counter1[num] += 1;
    }
    
    const counter2 = {};
    for (const num of nums2) {
        if (!(num in counter2)) {
            counter2[num] = 0;
        }
        counter2[num] += 1;
    }
    
    const res = [];
    for (const num in counter1) {
        if (num in counter2) {
            for (let i=0; i<Math.min(counter1[num], counter2[num]); i++) {
                res.push(num);
            }
        }
    }
    return res;
};