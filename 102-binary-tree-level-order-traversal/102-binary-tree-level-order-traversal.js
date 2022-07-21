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
var levelOrder = function(root) {
    if (!root) return [];
    let queue = [root];
    const levels = [];
    while (queue.length) {
        let level = [];
        let next = [];
        while (queue.length) {
            let curr = queue.shift();
            level.push(curr.val);
            if (curr.left) next.push(curr.left);
            if (curr.right) next.push(curr.right);
        }
        levels.push(level);
        queue = next;
    }
    return levels;
};