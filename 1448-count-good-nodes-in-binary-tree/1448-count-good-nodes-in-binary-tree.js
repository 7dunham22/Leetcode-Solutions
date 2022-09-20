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
 * @return {number}
 */
var goodNodes = function(root) {
    if (!root) return 0;
    
    const dfs = (node, max) => {
        if (!node) return 0;
        let result = node.val >= max ? 1 : 0;
        let newMax = Math.max(node.val, max);
        return result + dfs(node.left, newMax) + dfs(node.right, newMax);
    }
    
    return dfs(root, root.val);
};