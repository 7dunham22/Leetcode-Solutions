class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


var MaxStack = function() {
    this.stack = [];
    this.list = new Node();
    this.topIndex = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.stack.push(x);
    let i = this.stack.length-1;
    while (i > 0 && this.stack[i] < this.stack[i-1]) {
        [this.stack[i], this.stack[i-1]] = [this.stack[i-1], this.stack[i]];
        i--;
    }
    this.topIndex = i;
    
    const next = this.list.next; 
    const newNode = new Node(x);
    this.list.next = newNode;
    newNode.next = next; 
}
/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    const res = this.list.next; 
    const next = res.next; 
    this.list.next = next;
    
    this.stack = this.stack.filter((_,i) => i !== this.topIndex);
    if (this.list.next) {
        this.topIndex = this.stack.indexOf(this.list.next.val);
    }
    return res ? res.val : null;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    if (this.list.next) {
        return this.list.next.val;
    }
    return null;
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    const max = this.stack.pop();
    let prev = this.list;
    let curr = this.list.next;
    while (curr && curr.val !== max) {
        prev = curr;
        curr = curr.next;
    }
    if (curr) {
        const next = curr.next;
        prev.next = next;
    }
    if (this.list.next) {
        this.topIndex = this.stack.indexOf(this.list.next.val);
    }
    
    return max;
};



/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */