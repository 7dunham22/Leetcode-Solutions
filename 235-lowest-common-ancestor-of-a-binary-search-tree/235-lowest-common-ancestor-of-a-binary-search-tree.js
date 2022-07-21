/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === p || root === q) return root;
    const pathP = getPath(root, p);
    const pathQ = getPath(root, q);
    let LCA = pathP[pathP.length-1];
    while (pathP[pathP.length-1] === pathQ[pathQ.length-1]) {
        LCA = pathP[pathP.length-1];
        pathP.pop();
        pathQ.pop();
    }
    return LCA;
};

const getPath = (root, target) => {
    if (!root) return null;
    if (root === target) return [root];
    const leftPath = getPath(root.left, target);
    if (leftPath) {
        leftPath.push(root);
        return leftPath;
    }
    const rightPath = getPath(root.right, target);
    if (rightPath) {
        rightPath.push(root);
        return rightPath;
    }
    return null;
}