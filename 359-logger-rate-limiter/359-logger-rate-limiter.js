
var Logger = function() {
    this.logger = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.logger.has(message)) {
        const prev = this.logger.get(message);
        if (timestamp - prev >= 10) {
            this.logger.set(message, timestamp);
            return true;
        } else {
            return false;
        }
    } else {
        this.logger.set(message, timestamp);
        return true;
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */