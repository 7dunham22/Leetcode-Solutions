/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sums = [];
    let runningSum = 0;
    for (let i=0; i<w.length; i++) {
        runningSum += w[i];
        this.sums.push(runningSum);
    }
    this.sum = runningSum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const target = Math.floor(Math.random() * this.sum);
    let low = 0;
    let high = this.sums.length-1;
    while (low <= high) {
        const mid = Math.floor((low+high)/2);
        if (target < this.sums[mid]) {
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return low;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */