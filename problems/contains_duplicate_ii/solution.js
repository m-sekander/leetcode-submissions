/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for (let i=0; i<nums.length; i++) {
        const nextIndex = nums.indexOf(nums[i], i+1);
        if (nextIndex !==  -1 && 
            Math.abs(i-nextIndex) <= k) {
            return true;
        }
    }
    
    return false;
};