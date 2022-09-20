/**
 * @param {number} k
 * @param {number[]} nums
 */

function binSearch(array, val, comparator = (a,b) => b-a) {
    let lo = 0;
    let hi = array.length - 1;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
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

var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = [];
    for (const num of nums) {
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    const index = binSearch(this.nums, val);
    this.nums.splice(index, 0, val);
    if (this.nums.length > this.k) {
        this.nums.pop();
    }
    return this.nums[this.k - 1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */