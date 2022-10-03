/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i=0; i<nums.length; i++) {
    const pair = target - nums[i];
    if (nums.includes(pair, i+1)) {
      return ([i, nums.indexOf(pair, i+1)]);
    }
  }
};