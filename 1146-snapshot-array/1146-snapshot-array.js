/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.array = [];
    for (let i=0; i<length; i++) {
        this.array.push([[0,0]]);
    }
    this.snap_id = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    const arrAtIndex = this.array[index];
    const lastIndex = arrAtIndex.length-1;
    const lastSnapId = arrAtIndex[lastIndex][0];
    if (lastSnapId === this.snap_id) {
        arrAtIndex[lastIndex][1] = val;
    } else {
        arrAtIndex.push([this.snap_id, val]);
    }
    
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snap_id++;
    return this.snap_id - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    const nums = this.array[index];
    if (nums[nums.length-1][0] < snap_id) return nums[nums.length-1][1];
    
    let i = 0;
    let j = nums.length-1;
    let mid;
    while (i < j) {
        mid = Math.floor((i+j)/2);
        if (nums[mid][0] >= snap_id) {
            j = mid;
        } else {
            i = mid + 1;
        }
    }
    
    if (nums[j][0] === snap_id || j === 0) {
        return nums[j][1];
    }
    return nums[j-1][1];
    
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */