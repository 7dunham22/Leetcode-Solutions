/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = [];
    while (strs.length > 0) {
        const target = strs.pop();
        let found = false;
        for (let group of res) {
            if (areAnagrams(target, group[0])) {
                group.push(target);
                found = true;
                break;
            }
        }
        if (!found) res.push([target]);
    }
    return res;
};

const areAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");
    return str1 === str2;
}