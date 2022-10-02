function Node(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
}

function insert(head, key, val) {
    if (!head) return new Node(key, val);
    if (head.key === key) {
        head.val = val;
        return head;
    }
    if (head.key < key && (!head.next || head.next.key > key)) {
        const next = head.next;
        const newNode = new Node(key, val);
        head.next = newNode;
        newNode.next = next;
        return head;
    }
    head.next = insert(head.next, key, val);
    return head;
}

function remove(head, key) {
    if (!head) return;
    if (head.key === key) {
        return head.next;
    }
    head.next = remove(head.next, key);
    return head;
}

function get(head, key) {
    if (!head || head.key > key) return -1;
    if (head.key === key) return head.val;
    return get(head.next, key);
}

var MyHashMap = function() {
    this.pseudo = new Node(-1);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.pseudo = insert(this.pseudo, key, value);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return get(this.pseudo.next, key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    this.pseudo.next = remove(this.pseudo.next, key);
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */