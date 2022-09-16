/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    const clones = new Map();
    
    let curr = head;
    while (curr) {
        clones.set(curr, new Node(curr.val));
        curr = curr.next;
    }
    
    curr = head;
    while (curr) {
        const copy = clones.get(curr);
        copy.next = clones.get(curr.next) || null;
        copy.random = clones.get(curr.random) || null;
        clones.set(curr, copy);
        curr = curr.next;
    }
    return clones.get(head);
};