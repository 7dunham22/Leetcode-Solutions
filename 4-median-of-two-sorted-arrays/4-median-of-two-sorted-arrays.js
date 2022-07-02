/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const shorterLength = Math.min(nums1.length, nums2.length);
    const smaller = nums1.length === shorterLength ? nums1 : nums2; 
    const larger = nums1.length !== shorterLength ? nums1 : nums2;
    while (smaller.length > 0) {
        const val = smaller.pop();
        larger.push(val);
        if (larger.length > 1) {
            let i = larger.length-1;
            while (i > 0 && larger[i-1] > larger[i]) {
                [larger[i], larger[i-1]] = [larger[i-1], larger[i]];
                i--;
            }
        }
    }
    console.log(larger);
    const mid = larger.length/2;
    const floor = Math.floor(mid);
    if (mid !== floor) {
        return larger[floor];
    }
    return (larger[mid-1] + larger[mid]) / 2;
};