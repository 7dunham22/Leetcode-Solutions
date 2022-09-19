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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    const res = [root.val];
    let queue = [root];
    while (queue.length > 0) {
        const next = [];
        while (queue.length > 0) {
            const curr = queue.shift();
            if (curr.left) next.push(curr.left);
            if (curr.right) next.push(curr.right);
        }
        if (next.length > 0) {
            res.push(next[next.length-1].val);   
        }
        queue = next;
    }
    return res;
};