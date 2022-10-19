
var RandomizedSet = function() {
    this.rec = {}; // {val: index}
    this.nums = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!(val in this.rec)) {
        this.nums.push(val);
        this.rec[val] = this.nums.length-1;
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (val in this.rec) {
        const index = this.rec[val];
        const toSwitch = this.nums[this.nums.length-1];
        [this.nums[index], this.nums[this.nums.length-1]] = [this.nums[this.nums.length-1], this.nums[index]];
        this.rec[toSwitch] = index;
        this.nums.pop();
        delete this.rec[val];
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */