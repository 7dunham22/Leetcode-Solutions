/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const items = path.split('/');
    const stack = [];
    for (let item of items) {
        if (item === '..') {
            stack.pop();
        } else if (item !== '' && item !== '.') {
            stack.push(item);
        }
    }
    return '/' + stack.join('/');
};
