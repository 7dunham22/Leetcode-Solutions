function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function insert(root, val) {
    if (!root) return new Node(val);
    if (val === root.val) {
        return root;
    }
    if (val < root.val) {
        if (!root.left) {
            root.left = new Node(val);
        } else {
            root.left = insert(root.left, val);
        }
    } else {
        if (!root.right) {
            root.right = new Node(val);
        } else {
            root.right = insert(root.right, val);
        }
    }
    return root;
}

function remove(root, val) {
    if (!root) return root;
    if (val < root.val) {
        root.left = remove(root.left, val);
    } else if (val > root.val) {
        root.right = remove(root.right, val);
    } else {
        if (!root.left) {
            return root.right;
        }
        if (!root.right) {
            return root.left;
        } else {
            root.val = minValue(root.right);
            root.right = remove(root.right, root.val);
        }
    }
    return root;
}

function minValue(root) {
    if (!root) return root;
    while (root.left) {
        root = root.left;
    }
    return root.val;
}

function contains(root, val) {
    if (!root) return false;
    if (val < root.val) return contains(root.left, val);
    if (val > root.val) return contains(root.right, val);
    return true;
}


var MyHashSet = function() {
    this.pseudo = new Node(-1);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.pseudo.right = insert(this.pseudo.right, key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.pseudo.right = remove(this.pseudo.right, key);
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return contains(this.pseudo.right, key);
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */