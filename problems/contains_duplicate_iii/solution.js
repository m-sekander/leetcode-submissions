/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<=i+indexDiff; j++) {
            if (Math.abs(nums[i]-nums[j]) <= valueDiff)
                return true;
        }
    }
    return false;
};