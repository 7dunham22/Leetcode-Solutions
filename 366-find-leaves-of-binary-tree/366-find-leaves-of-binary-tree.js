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
    const solution = [];
    const getHeight = (root) => {
        if (!root) return -1;
        const leftHeight = getHeight(root.left);
        const rightHeight = getHeight(root.right);
        const currHeight = Math.max(leftHeight, rightHeight) + 1;
        if (solution.length === currHeight) {
            solution.push([]);
        }
        solution[currHeight].push(root.val);
        return currHeight; 
    }
    getHeight(root);
    return solution; 
}