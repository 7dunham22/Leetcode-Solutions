/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.nums = new Array(n).fill(null);
    this.ptr = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    const res = [];
    this.nums[idKey - 1] = value;
    while (this.ptr < this.nums.length && typeof this.nums[this.ptr] === 'string') {
        res.push(this.nums[this.ptr]);
        this.ptr += 1;
    }
    return res;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */