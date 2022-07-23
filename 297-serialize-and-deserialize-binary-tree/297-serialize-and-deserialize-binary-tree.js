/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

const rserialize = (root, str) => {
    if (!root) {
        str += "null,";
    } else {
        str += root.val + ',';
        str = rserialize(root.left, str);
        str = rserialize(root.right, str);
    }
    return str;
}

const rdeserialize = (l) => {
    if (l[0] === "null") {
        l.shift();
        return null;
    }
    const root = new TreeNode(l[0]);
    l.shift();
    root.left = rdeserialize(l);
    root.right = rdeserialize(l);
    return root;
}

var serialize = function(root) {
    
    return rserialize(root, "");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const dataArray = data.split(",");
    return rdeserialize(dataArray);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */