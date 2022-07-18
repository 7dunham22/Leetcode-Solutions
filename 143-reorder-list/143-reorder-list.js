/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const stack = [];
    const pseudo = new ListNode();
    pseudo.next = head;
    let prev = null;
    while (head) {
        if (prev) prev.next = null;
        stack.push(head);
        prev = head;
        head = head.next;
    }
    let curr = pseudo;
    let left = 0;
    let right = stack.length-1;
    while (left < right) {
        curr.next = stack[left];
        curr = curr.next;
        curr.next = stack[right];
        curr = curr.next;
        left++;
        right--;
    }
    if (left === right) curr.next = stack[left];
    return pseudo.next;
};