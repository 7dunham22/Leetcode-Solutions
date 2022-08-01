
var MedianFinder = function() {
    this.nums = [];
    this.median = null;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.median && num > this.median) {
        this.nums.push(num);
        let i = this.nums.length-1;
        while (i > 0 && this.nums[i] < this.nums[i-1]) {
            [this.nums[i], this.nums[i-1]] = [this.nums[i-1], this.nums[i]];
            i -= 1;
        }
    } else {
        this.nums.unshift(num);
        let i = 0;
        while (i < this.nums.length-1 && this.nums[i] > this.nums[i+1]) {
            [this.nums[i], this.nums[i+1]] = [this.nums[i+1], this.nums[i]];
            i += 1;
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const mid = this.nums.length / 2;
    const floor = Math.floor(mid);
    const ceil = Math.ceil(mid);
    if (floor === ceil) {
        this.median = (this.nums[mid-1] + this.nums[mid]) / 2;
    } else {
        this.median = this.nums[floor];
    }
    return this.median;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */