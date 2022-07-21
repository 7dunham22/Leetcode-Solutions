/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    const queueP = [p];
    const queueQ = [q];
    while (queueP.length && queueQ.length) {
        let currP = queueP.shift();
        let currQ = queueQ.shift();
        if ((!currP && currQ) || (currP && !currQ)) return false;
        if (currP && currQ) {
            if (currP.val !== currQ.val) return false;
            queueP.push(currP.left);
            queueP.push(currP.right);
            queueQ.push(currQ.left);
            queueQ.push(currQ.right);
        }
    }
    if (queueP.length || queueQ.length) return false;
    return true;
};