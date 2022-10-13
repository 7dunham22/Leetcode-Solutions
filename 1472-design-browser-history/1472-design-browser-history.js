/**
 * @param {string} homepage
 */

function Node(url) {
    this.url = url;
    this.prev = null;
    this.next = null;
}

var BrowserHistory = function(homepage) {
    this.history = new Node(homepage);
    this.curr = this.history;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    const newSite = new Node(url);
    newSite.prev = this.curr;
    this.curr.next = newSite;
    this.curr = this.curr.next;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while (steps > 0 && this.curr.prev !== null) {
        this.curr = this.curr.prev;
        steps -= 1;
    }
    return this.curr.url;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while (steps > 0 && this.curr.next !== null) {
        this.curr = this.curr.next;
        steps -= 1;
    }
    return this.curr.url;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */