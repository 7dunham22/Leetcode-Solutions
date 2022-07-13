/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let streak = 0;
    const numSet = new Set(nums);
    
    for (let num of numSet) {
        if (!(numSet.has(num-1))) {
            let currNum = num;
            let currStreak = 1;
            while (numSet.has(currNum + 1)) {
                currNum += 1;
                currStreak += 1;
            }
            streak = Math.max(streak, currStreak);
        }
    }
    
    return streak;
}

