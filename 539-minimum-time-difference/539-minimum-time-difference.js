/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const convertedTimes = timePoints.map(time => getMinutes(time));
    convertedTimes.sort((a,b) => a-b);
    let MIN = Number.POSITIVE_INFINITY;
    convertedTimes.push(convertedTimes[0] + 1440);
    const n = convertedTimes.length;
    for (let i=1; i<n; i++) {
        const curr = convertedTimes[i];
        const compare = convertedTimes[i-1];
        MIN = Math.min(MIN, curr - compare);
    }
    return MIN;
}

const getMinutes = (time) => {
    const [hours, minutes] = time.split(":");
    let ans = Number(minutes);
    ans += Number(hours) * 60;
    return ans;
}

