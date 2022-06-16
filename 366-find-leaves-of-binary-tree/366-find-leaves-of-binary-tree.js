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
 * @return {number[][]}
 */
var findLeaves = function(root) {
    let res = new Array(100).fill(0).map(() => new Array(0));
    
    const dfs = (node) => {
        if (!node) return 0;
        const depth = Math.max(dfs(node.left), dfs(node.right));
        res[depth].push(node.val);
        return depth + 1;
    }
    
    dfs(root);
    res = res.filter(x => x.length > 0);
    return res;
}