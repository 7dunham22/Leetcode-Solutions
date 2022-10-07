
var UndergroundSystem = function() {
    this.customers = {}; // {userId: {entry: stationName, time: t}}
    this.travelTimes = {}; // {startStation: {endStation: [...travel times]}}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.customers[id] = {'entryStation': stationName, 'entryTime': t};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, exitStation, t) {
    const {entryStation, entryTime} = this.customers[id];
    if (!(entryStation in this.travelTimes)) this.travelTimes[entryStation] = {};
    if (!(exitStation in this.travelTimes[entryStation])) this.travelTimes[entryStation][exitStation] = [];
    this.travelTimes[entryStation][exitStation].push(t - entryTime);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const travelTimes = this.travelTimes[startStation][endStation];
    return travelTimes.reduce((prev,curr) => prev+curr) / travelTimes.length;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */