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
    
    const flatten_dfs = (prev,curr) => {
        if (!curr) return prev;
        curr.prev = prev;
        prev.next = curr;
        const tempNext = curr.next;
        const childTail = flatten_dfs(curr, curr.child);
        curr.child = null;
        return flatten_dfs(childTail, tempNext);
    }
    
    if (!head) return head;
    const pseudo = new Node(0,null,head,null);
    flatten_dfs(pseudo, head);
    pseudo.next.prev = null;
    return pseudo.next;
};