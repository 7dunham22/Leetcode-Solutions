
var DetectSquares = function() {
    this.points = {};
    
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    const [x, y] = point;
    if (x in this.points) {
        if (y in this.points[x]) {
            this.points[x][y]++;
        } else {
            this.points[x][y] = 1;
        }
    } else {
        this.points[x] = {[y]: 1};
    }
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    const [x1,y1] = point;
    let res = 0;
    if (!(x1 in this.points)) return 0;
    for (let x2 in this.points) {
        for (let y2 in this.points[x2]) {
            const first = this.points[x2][y2];
            const second = this.points[x1][y2];
            const third = this.points[x2][y1];
            if (Math.abs(x1-x2) === 0 || Math.abs(x1-x2) !== Math.abs(y1 - y2) || !second|| !third) continue;
            res += first * second * third;
        }
    }
    return res;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */