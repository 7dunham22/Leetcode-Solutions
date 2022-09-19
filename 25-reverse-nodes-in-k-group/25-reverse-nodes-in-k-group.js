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
    const pseudo = new ListNode(null, head);
    let groupPrev = pseudo;
    
    while (true) {
        const kth = getKth(groupPrev, k);
        if (!kth) break;
        let groupNext = kth.next;
        let prev = kth.next;
        let curr = groupPrev.next;
        while (curr !== groupNext) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        const temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }
    return pseudo.next;
};

const getKth = (curr, k) => {
    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }
    return curr;
}