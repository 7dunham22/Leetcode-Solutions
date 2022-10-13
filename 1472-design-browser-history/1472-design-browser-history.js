/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.vorwarts = [];
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history.push(url);
    this.vorwarts = [];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while (steps > 0 && this.history.length > 1) {
        this.vorwarts.push(this.history.pop());
        steps -= 1;
    }
    return this.history[this.history.length-1];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while (steps > 0 && this.vorwarts.length > 0) {
        this.history.push(this.vorwarts.pop());
        steps -= 1;
    }
    return this.history[this.history.length-1];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */