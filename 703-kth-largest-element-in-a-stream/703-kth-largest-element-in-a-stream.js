/**
 * @param {number} k
 * @param {number[]} nums
 */

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function insert(val, root) {
    if (val <= root.val) {
        if (root.left) {
            root.left = insert(val, root.left);
        } else {
            root.left = new Node(val);
        }
    } else {
        if (root.right) {
            root.right = insert(val, root.right);
        } else {
            root.right = new Node(val);
        }
    }
    return root;
}

var KthLargest = function(k, nums) {
    this.k = k;
    this.root = new Node(nums[0]);
    for (let i=1; i<nums.length; i++) {
        this.root = insert(nums[i], this.root);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.root = insert(val, this.root);
    let i = 0;
    let res;
    
    const inOrder = (node) => {
        if (!node || i >= this.k) return;
        inOrder(node.right);
        if (i < this.k) {
            i += 1;
            res = node.val;
        }
        inOrder(node.left);
    }
    
    inOrder(this.root);
    return res;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */