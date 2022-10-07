
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
    const key = entryStation + ':' + exitStation;
    if (!(key in this.travelTimes)) this.travelTimes[key] = [0,0];
    const [totalDistance, trips] = this.travelTimes[key];
    this.travelTimes[key] = [totalDistance + (t - entryTime), trips + 1];
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const [totalDistance, trips] = this.travelTimes[startStation+':'+endStation];
    return totalDistance / trips;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */