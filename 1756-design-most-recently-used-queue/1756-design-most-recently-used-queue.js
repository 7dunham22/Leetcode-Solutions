/**
 * @param {number} n
 */
var MRUQueue = function(n) {
    this.queue = [];
    for (let i=1; i<=n; i++) {
        this.queue.push(i);
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
    const el = this.queue[k-1];
    this.queue.splice(k-1, 1);
    this.queue.push(el);
    return el;
};

/** 
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */