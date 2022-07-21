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
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    while (lists.length > 1) {
        let listA = lists.pop();
        let listB = lists.pop();
        lists.push(merge(listA, listB));
    }
    return lists[0];
};

const merge = (listA, listB) => {
    if (!listA) return listB;
    if (!listB) return listA;
    const pseudo = new ListNode();
    let curr = pseudo;
    while (listA && listB) {
        if (listA.val <= listB.val) {
            curr.next = listA;
            listA = listA.next;
        } else {
            curr.next = listB;
            listB = listB.next; 
        }
        curr = curr.next;
    }
    curr.next = listA || listB;
    return pseudo.next;
}