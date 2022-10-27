/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let curr = head;
    while (curr) {
        if (curr.child) {
            const next = curr.next;
            const childBranch = flatten(curr.child);
            let tail = childBranch;
            while (tail.next) tail = tail.next;
            curr.child = null;
            curr.next = childBranch;
            childBranch.prev = curr;
            tail.next = next;
            if (next) next.prev = tail;
        }
        curr = curr.next;
    }
    return head;
};