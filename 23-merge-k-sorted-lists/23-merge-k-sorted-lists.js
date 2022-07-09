/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists, pseudo = new ListNode()) {
    let tail = pseudo;
    lists = lists.filter(x => x !== null);
    while (lists.length > 0) {
        let MIN = Number.POSITIVE_INFINITY;
        let minIndex = null;
        for (let i=0; i<lists.length; i++) {
            const node = lists[i];
            if (node.val < MIN) {
                MIN = node.val;
                minIndex = i;
            }
        }
        tail.next = lists[minIndex];
        lists[minIndex] = lists[minIndex].next;
        tail = tail.next;
        lists = lists.filter(x => x !== null);
    }
    return pseudo.next;
};