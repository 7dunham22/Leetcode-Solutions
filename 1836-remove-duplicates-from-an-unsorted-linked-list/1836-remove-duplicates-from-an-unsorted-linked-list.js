/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesUnsorted = function(head) {
    const memo = {};
    const start = new ListNode(null, head);
    while (head) {
        const val = head.val;
        if (memo[val]) {
            memo[val] += 1;
        } else {
            memo[val] = 1;
        }
        head = head.next;
    }
    head = start.next;
    let prev = start;
    while (head) {
        const next = head.next;
        if (memo[head.val] > 1) {
            prev.next = next;
            head.next = null;
        } else {
            prev = head;
        }
        head = next;
    }
    return start.next;
};