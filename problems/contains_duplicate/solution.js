/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const sortedNums = nums.sort();
    let currNum = sortedNums[0];
    
    for (let i=1; i<sortedNums.length; i++) {
        if (sortedNums[i] === currNum) {
            return true;
        } else {
            currNum = sortedNums[i];
        }
    }
    
    return false;
};