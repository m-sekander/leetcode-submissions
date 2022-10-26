/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let i=0; i<nums.length; i++) {
        const searchArr = nums.slice();
        searchArr.splice(i, 1);
        if (searchArr.indexOf(nums[i]) === -1) {
            return nums[i];
        } 
    }
};