/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a,b) => a-b);
    let score = 0;
    const n = tokens.length;
    for (let i=0; i<n; i++) {
        if (power >= tokens[0]) {
            const points = tokens.shift();
            power -= points;
            score += 1;
        } else if (score > 0 && tokens.length > 1) {
            const points = tokens.pop();
            power += points;
            score -= 1;
        }
    }
    
    return score;
};