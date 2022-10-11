/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const mults = [];
    const chars = [];
    let mult = 0;
    let text = "";
    for (let i=0; i<s.length; i++) {
        const char = s[i];
        if (!isNaN(char)) {
            mult = 10*mult + (char - '0');
        } else if (char === '[') {
            chars.push(text);
            mults.push(mult);
            mult = 0;
            text = "";
        } else if (char === ']') {
            mult = mults.pop();
            const base = text;
            for (let i=1; i<mult; i++) {
                text += base;
            }
            if (chars.length > 0) {
                text = chars.pop() + text;
            }
            mult = 0;
        } else {
            text += char;
        }
        // console.log("mults: ", mults);
        // console.log("chars: ", chars);
        // console.log("mult: ", mult);
        // console.log("text: ", text);
        // console.log("======");
    }
    return text;
};

/*
3[a2[c]]

char:       3       [       a       2       [       c       ]       ]
mults:  []  []      [3]     [3]     [3]     [3,2]   [3,2]   [3]     []
chars:  []  []      []      []      []      [a]     [a]     []      []
mult:   0   3       0       0       2       0       0       0       0
text:   ""  ""      ""      "a"     "a"     ""      "c"     "acc"   accaccacc
    
    char => number ?
        Add char to mult
    char => character ?
        Add char to text
    char => [ ?
        Push text to chars array.
        Push mult to mults array.
        Reset text and mult.
    char => ] ?
        Pop multiple from mults.
        Multiply the current text by the mult.
        If there is a previous string in chars, append it to the start of the text. 

*/