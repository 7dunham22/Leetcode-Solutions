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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    root = getLCA(root, startValue, destValue);
    return getUpwardPath(root, startValue) + getDownwardPath(root, destValue);
};

const getLCA = (root, startValue, destValue) => {
    if (!root) return null;
    if (root.val === startValue || root.val === destValue) return root;
    const left = getLCA(root.left, startValue, destValue);
    const right = getLCA(root.right, startValue, destValue);
    if (left && right) return root;
    return left ? left : right;
}

const search = (root, value) => {
    if (!root) return false; 
    if (root.val === value) return true; 
    return search(root.left, value) || search(root.right, value);
}

const getUpwardPath = (root, startValue) => {
    if (!root) return null;
    if (root.val === startValue) return "";
    const leftPath = getUpwardPath(root.left, startValue);
    const rightPath = getUpwardPath(root.right, startValue);
    if (leftPath !== null) return 'U' + leftPath;
    else if (rightPath !== null) return 'U' + rightPath;
    return null;
}

const getDownwardPath = (root, destValue) => {
    if (!root) return null;
    if (root.val === destValue) return "";
    const leftPath = getDownwardPath(root.left, destValue);
    const rightPath = getDownwardPath(root.right, destValue);
    if (leftPath !== null) return 'L' + leftPath;
    else if (rightPath !== null) return 'R' + rightPath;
    return null;
}