/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let MIN = 'z';
    for (const letter of letters) {
        if (letter > target) return letter;
        if (letter < MIN) MIN = letter;
    }
    return MIN;
};