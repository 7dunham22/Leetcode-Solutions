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
    
    const dfs = (node, prev) => {
        if (!node) return prev;
        if (prev) {
            node.prev = prev;
            prev.next = node;
        }
        
        const next = node.next;
        const tail = dfs(node.child, node);
        node.child = null;
        return dfs(next, tail);
    }
    
    if (!head) return head;
    dfs(head);
    return head;
};