
var DetectSquares = function() {
    this.points = new Map();
    
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    const [x, y] = point;
    if (this.points.has(x)) {
        if (this.points.get(x).has(y)) {
            this.points.get(x).set(y, this.points.get(x).get(y)+1);
        } else {
            this.points.get(x).set(y, 1);
        }
    } else {
        this.points.set(x, new Map().set(y, 1));
    }
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    const [x1,y1] = point;
    let res = 0;
    if (!(this.points.has(x1))) return 0;
    for (let x2 of this.points.keys()) {
        for (let y2 of this.points.get(x2).keys()) {
            const first = this.points.get(x2).get(y2);
            const second = this.points.get(x1).get(y2);
            const third = this.points.get(x2).get(y1);
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