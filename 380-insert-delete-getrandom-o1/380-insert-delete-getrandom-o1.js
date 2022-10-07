
var RandomizedSet = function() {
    this.vals = []; // [...vals]
    this.hash = {}; // {val: index}
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (val in this.hash) return false;
    this.vals.push(val);
    this.hash[val] = this.vals.length-1;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!(val in this.hash)) return false;
    const i = this.hash[val];
    const toDelete = this.vals[i];
    const last = this.vals[this.vals.length-1];
    [this.vals[i], this.vals[this.vals.length-1]] = [last, toDelete];
    this.hash[last] = i;
    this.vals.pop();
    delete this.hash[val];
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.vals[Math.floor(Math.random() * this.vals.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */