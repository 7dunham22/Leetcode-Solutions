/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    const partition = [];
    
    const backtrack = (i) => {
        if (i >= s.length) {
            res.push([...partition]);
            return;
        }
        for (let j=i; j<s.length; j++) {
            if (isPalindrome(i, j)) {
                partition.push(s.slice(i, j+1));
                backtrack(j+1);
                partition.pop();
            }
        }
    }
    
    const isPalindrome = (lo, hi) => {
        while (lo <= hi) {
            if (s[lo] !== s[hi]) return false;
            lo++;
            hi--;
        }
        return true;
    }
    
    backtrack(0);
    return res;
    
};