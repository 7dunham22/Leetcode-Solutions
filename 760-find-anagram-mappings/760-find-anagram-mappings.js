/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
    const mapping = {};
    for (let i=0; i<nums2.length; i++) {
        const num = nums2[i];
        if (!(num in mapping)) mapping[num] = [];
        mapping[num].push(i);
    }
    
    const res = [];
    for (const num of nums1) {
        res.push(mapping[num].pop());
    }
    
    return res;
};