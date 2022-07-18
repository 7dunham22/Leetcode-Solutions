/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const nodes = [];
    let curr = head;
    while (curr) {
        nodes.push(curr);
        curr = curr.next;
    }
    const target = nodes[nodes.length-n];
    curr = head;
    let pseudo = new ListNode();
    let prev = pseudo;
    while (curr) {
        if (curr !== target) {
            if (prev) prev.next = curr;
            prev = curr;
            curr = curr.next;
        } else {
            curr = target.next;
            if (prev) prev.next = curr;
            break;
        }
    }
    return pseudo.next;
};