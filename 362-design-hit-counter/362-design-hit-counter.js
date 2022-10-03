
var HitCounter = function() {
    this.hits = [];
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    const threshold = timestamp > 300 ? timestamp - 300 : 0;
    this.hits.push(timestamp);
    while (this.hits[0] <= threshold) {
        this.hits.shift();
    }
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    const threshold = timestamp > 300 ? timestamp - 300 : 0;
    while (this.hits[0] <= threshold) {
        this.hits.shift();
    }
    return this.hits.length;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */