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
    const parents = getParents(root);
    const res = [];
    while (root) {
        const leaves = getLeaves(root);
        const level = [];
        for (let leaf of leaves) {
            const parent = parents.get(leaf);
            if (parent && parent.left === leaf) {
                parent.left = null;
            } else if (parent) {
                parent.right = null;
            } else {
                root = null;
            }
            level.push(leaf.val);
        }
        res.push(level);
    }
    return res; 
};

const getParents = (root) => {
    const hash = new Map();
    const queue = [root];
    while (queue.length > 0) {
        const curr = queue.shift();
        if (curr.left) {
            hash.set(curr.left, curr);
            queue.push(curr.left);
        }
        if (curr.right) {
            hash.set(curr.right, curr);
            queue.push(curr.right);
        }
    }
    return hash;
}

const getLeaves = (root) => {
    if (!root) return [];
    if (!root.left && !root.right) {
        return [root];
    }
    const res = getLeaves(root.left).concat(getLeaves(root.right));
    return res; 
}