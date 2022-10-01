/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const found = new Set();
    for (let i=0; i<s.length; i++) {
        const char = s[i];
        if (found.has(char)) return char;
        found.add(char);
    }
};