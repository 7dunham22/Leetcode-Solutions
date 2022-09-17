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
    let carry = 0;
    let curr1 = l1;
    let curr2 = l2;
    
    const pseudo = new ListNode();
    let prev = pseudo;
    
    while (curr1 || curr2 || carry) {
        const val1 = curr1 ? curr1.val : 0;
        const val2 = curr2 ? curr2.val : 0;
        let digit = val1 + val2 + carry;
        if (digit >= 10) {
            carry = 1;
            digit = digit % 10;
        } else {
            carry = 0;
        }
        
        prev.next = new ListNode(digit);
        prev = prev.next;

        if (curr1) curr1 = curr1.next;
        if (curr2) curr2 = curr2.next;
    }
    
    return pseudo.next;

};