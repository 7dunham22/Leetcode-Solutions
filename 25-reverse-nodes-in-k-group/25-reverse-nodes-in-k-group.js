/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let curr = head;
    let i = k;
    const nodes = [];
    while (curr && i > 1) {
        nodes.push(curr);
        curr = curr.next;
        i--;
    }
    if (!curr) return head;
    const next = reverseKGroup(curr.next, k);
    head = curr;
    while (nodes.length > 0) {
        curr.next = nodes.pop();
        curr = curr.next;
    }
    curr.next = next;
    return head;
};