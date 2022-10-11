var Leaderboard = function() {
    this.scores = [];
    this.players = {};
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if (!(playerId in this.players)) {
        this.players[playerId] = 0;
        this.scores.push(0);
    }
    const prevScore = this.players[playerId];
    const newScore = prevScore + score;
    this.players[playerId] += score;
    let i = this.scores.indexOf(prevScore);
    this.scores[i] = newScore;
    while (i > 0 && this.scores[i] > this.scores[i-1]) {
        [this.scores[i], this.scores[i-1]] = [this.scores[i-1], this.scores[i]];
        i -= 1;
    }
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    let sum = 0;
    for (let i=0; i<K && i<this.scores.length; i++) {
        sum += this.scores[i];
    }
    return sum;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    const score = this.players[playerId];
    const i = this.scores.indexOf(score);
    this.scores.splice(i, 1);
    delete this.players[playerId];
};


/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */