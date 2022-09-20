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
    let count = 1;
    
    const dfs = (node, max) => {
        if (!node) return;
        let newMax = max;
        if (node.val >= max) {
            count += 1;
            newMax = node.val;
        }
        dfs(node.left, newMax);
        dfs(node.right, newMax);
    }
    
    dfs(root.left, root.val);
    dfs(root.right, root.val);
    return count;
    
};