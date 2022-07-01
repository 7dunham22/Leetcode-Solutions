/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    let a = p;
    let b = q;
    while (a !== b) {
        a = !a ? q : a.parent;
        b = !b ? p : b.parent;
    }
    return a; 
};

