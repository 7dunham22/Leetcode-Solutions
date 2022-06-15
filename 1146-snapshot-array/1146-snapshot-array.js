/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.len = length;
    this.snaps = {};
    this.snapId = 0;
    this.curr = [];
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    if (index > this.len) return undefined;
    this.curr[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    const id = this.snapId;
    this.snaps[id] = [...this.curr];
    this.snapId++;
    return id;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    return this.snaps[snap_id][index] || 0;
    
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */