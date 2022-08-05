/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let palindromes = 0;
    
    const expand = (left, right) => {
        let l = left;
        let r = right;
        while (l >= 0 && r < s.length) {
            if (s[l] === s[r]) {
                palindromes++;   
                l--;
                r++;
            } else {
                break;
            }
        }
    }  
    
    for (let i=0; i<s.length; i++) {
        expand(i, i);
        expand(i, i+1);
    }
    
    console.log(palindromes);
    return palindromes;
};