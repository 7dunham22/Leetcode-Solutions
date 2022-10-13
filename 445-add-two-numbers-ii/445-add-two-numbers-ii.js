/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1stack = [];
    let l2stack = [];
    while (l1) {
        l1stack.push(l1);
        l1 = l1.next;
    }
    while (l2) {
        l2stack.push(l2);
        l2 = l2.next;
    }
    
    if (l2stack.length > l1stack.length) {
        [l1stack, l2stack] = [l2stack, l1stack];
    }
    
    let carry = 0;
    
    let head;
    while (l1stack.length) {
        const node1 = l1stack.pop();
        const node2 = l2stack.length ? l2stack.pop() : new ListNode(0);
        let subtotal = node1.val + node2.val + carry;
        if (subtotal >= 10) {
            carry = 1;
            subtotal = subtotal % 10;
        } else {
            carry = 0;
        }
        node1.val = subtotal;
        head = node1;
    }
    
    if (carry) {
        head = new ListNode(1, head);
    }
    
    return head;
    
};