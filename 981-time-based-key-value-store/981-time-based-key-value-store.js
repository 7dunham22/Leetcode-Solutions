
var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!(key in this.map)) {
        this.map[key] = {[timestamp]: value};
    } else {
        this.map[key][timestamp] = value;
    }
}

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!(key in this.map)) return "";
    const entry = this.map[key];
    if (timestamp in entry) return entry[timestamp];
    let i = timestamp;
    while (i > 0 && !(i in entry)) {
        i--;
    }
    return i > 0 ? entry[i] : "";
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */