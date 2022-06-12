/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const timeset = new Set();
    for (let time of timePoints) {
        const minutes = getMinutes(time);
        if (timeset.has(minutes)) return 0;
        timeset.add(minutes);
    }
    const convertedTimes = [...timeset].sort((a,b) => a-b);
    let MIN = 1440 - convertedTimes[convertedTimes.length-1] + convertedTimes[0];
    for (let i=1; i<convertedTimes.length; i++) {
        const curr = convertedTimes[i];
        const compare = convertedTimes[i-1];
        MIN = Math.min(MIN, curr - compare);
    }
    return MIN;
}

const getMinutes = (time) => {
    const [hours, minutes] = time.split(":");
    return Number(hours) * 60 + Number(minutes);
}

