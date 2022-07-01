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
    if (!p || !q) return null;
    const pq = findPath(p, q);
    if (pq) return pq[pq.length-1];
    const qp = findPath(q, p);
    if (qp) return qp[qp.length-1];
    const pParent = findPath(p.parent, q);
    return lowestCommonAncestor(p.parent, q);
};


const findPath = (root, target) => {
    if (!root) return null;
    if (root === target) return [root]; 
    const leftPath = findPath(root.left, target);
    if (leftPath) {
        leftPath.push(root);
        return leftPath;
    }
    const rightPath = findPath(root.right, target);
    if (rightPath) {
        rightPath.push(root);
        return rightPath;
    }
    return null; 
}
