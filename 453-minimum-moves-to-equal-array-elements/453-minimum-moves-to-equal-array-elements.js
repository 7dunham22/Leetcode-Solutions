/**
 * @param {number[]} nums
 * @return {number}
 */

var minMoves = function(nums) {
    let moves = 0;
    let min = Number.MAX_VALUE;
    for (let i=0; i<nums.length; i++) {
        moves += nums[i];
        min = Math.min(min, nums[i]);
    }
    return moves - min * nums.length;
};