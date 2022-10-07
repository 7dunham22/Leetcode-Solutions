/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.vals = new Array(n).fill(null).map(x => "");
    this.ptr = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.vals[idKey-1] = value;
    const chunk = [];
    while (this.ptr < this.vals.length && this.vals[this.ptr] !== "") {
        chunk.push(this.vals[this.ptr]);
        this.ptr++;
    }
    return chunk;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */