/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    const heights = new Map();
    if (!root) return true;
    
    const getHeight = (node) => {
        if (!node) return 0;
        if (heights.has(node)) return heights.get(node);
        const height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
        heights.set(node, height);
        return height;
    }
    
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};