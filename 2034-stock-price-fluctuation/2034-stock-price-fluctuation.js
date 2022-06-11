
var StockPrice = function() {
    this.prices = [];
    this.times = [];
    this.latest = [0,0];
    this.minPrice = Number.POSITIVE_INFINITY;
    this.maxPrice = Number.NEGATIVE_INFINITY;
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    const i = this.times.indexOf(timestamp);
    if (i === -1) {
        this.prices.push(price);
        // this.minPrice = Math.min(this.minPrice, price);
        // this.maxPrice = Math.max(this.maxPrice, price);
        this.times.push(timestamp);
    } else {
        this.prices[i] = price;
        // this.minPrice = Math.min(...this.prices);
        // this.maxPrice = Math.max(...this.prices);
    }
    if (timestamp >= this.latest[0]) this.latest = [timestamp, price];
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.latest[1];
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    this.maxPrice = Math.max(...this.prices);
    return this.maxPrice;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    this.minPrice = Math.min(...this.prices);
    return this.minPrice;
};

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */