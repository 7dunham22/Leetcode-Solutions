/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let [A, B] = [nums1, nums2];
    const total = A.length + B.length;
    const half = Math.floor(total / 2);
    if (B.length < A.length) {
        [A, B] = [B, A];
    }
    let l = 0;
    let r = A.length - 1;
    while (true) {
        const i = Math.floor((l + r) / 2);
        const j = half - i - 2;
        const ALeft = i >= 0 ? A[i] : Number.NEGATIVE_INFINITY;
        const ARight = i+1 < A.length ? A[i+1] : Number.POSITIVE_INFINITY;
        const BLeft = j >= 0 ? B[j] : Number.NEGATIVE_INFINITY;
        const BRight = j+1 < B.length ? B[j+1] : Number.POSITIVE_INFINITY;
        
        if (ALeft <= BRight && BLeft <= ARight) {
            if (total % 2) {
                return Math.min(ARight, BRight);
            }
            return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2;
        } else if (ALeft > BRight) {
            r = i - 1;
        } else {
            l = i + 1;
        }
    }
};