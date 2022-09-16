
var TimeMap = function() {
    this.map = {};
    /* {
        "foo": {
            "values": ['bar', 'bar2'],
            "timestamps": [1, 4]
        }
    }*/
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!(key in this.map)) {
        this.map[key] = {"values": [value], "timestamps": [timestamp]};
    } else {
        const values = this.map[key].values;
        const timestamps = this.map[key].timestamps;
        values.push(value);
        timestamps.push(timestamp);
        let i = timestamps.length - 1;
        while (i > 0 && timestamps[i] < timestamps[i-1]) {
            [values[i], values[i-1]] = [values[i-1], values[i]];
            [timestamps[i], timestamps[i-1]] = [timestamps[i-1], timestamps[i]];
            i--;
        }
        this.map[key].values = values;
        this.map[key].timestamps = timestamps;
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!(key in this.map)) return "";
    const values = this.map[key].values;
    const timestamps = this.map[key].timestamps;
    let l = 0;
    let r = timestamps.length-1;
    let prev = -1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (timestamps[mid] === timestamp) {
            return values[mid];
        } else if (timestamps[mid] < timestamp) {
            prev = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return prev === -1 ? "" : values[prev];
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */