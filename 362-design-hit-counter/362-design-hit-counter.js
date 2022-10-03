
var HitCounter = function() {
    this.hits = [];
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.hits.push(timestamp);
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    const threshold = timestamp >= 300 ? timestamp - 300 : 0;
    let i = 0;
    while (this.hits[i] <= threshold) i++;
    return this.hits.length - i;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */