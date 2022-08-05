/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    const _rob = (nums) => {
        let t1 = 0;
        let t2 = 0;
        for (let num of nums) {
            let temp = t1;
            t1 = Math.max(num + t2, t1);
            t2 = temp;
        }
        return t1;
    }
    
    return Math.max(_rob(nums.slice(0,-1)), _rob(nums.slice(1)));
};