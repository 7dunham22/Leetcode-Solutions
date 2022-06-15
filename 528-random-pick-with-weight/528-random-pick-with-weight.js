/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefixSums = [];
    let prefixSum = 0;
    for (let weight of w) {
        prefixSum += weight;
        this.prefixSums.push(prefixSum);
    }
    this.totalSum = prefixSum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const target = Math.random() * this.totalSum;
    for (let i=0; i<this.prefixSums.length; i++) {
        const prefixSum = this.prefixSums[i];
        if (target < prefixSum) return i;
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */