/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function(points, angle, location) {
    const angles = [];
    let max = 0;
    const [x,y] = location;
    
    for (const point of points) {
        const [x1, y1] = point;
        if (x1 === x && y === y1) {
            max++;
            continue;
        }
        angles.push(Math.atan2(y1-y, x1-x) * (180 / Math.PI));
    }
    
    angles.sort((a,b) => a-b);
    const maxAngle = angles[angles.length-1];
    for (const currAngle of angles) {
        if (currAngle + 360 - maxAngle > angle) break;
        angles.push(currAngle + 360);
    }
    for (let left=0, right=0, curr=max+1; right<angles.length; right++, curr++) {
        while (angles[right] - angles[left] > angle) {
            left++;
            curr--;
        }
       if (curr > max) max = curr;
    }
    return max;
};