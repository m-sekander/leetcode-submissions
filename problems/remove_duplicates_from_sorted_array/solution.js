/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currNum = nums[0];
    let switchPosition = 1;
    
    function arrayMove(arr, from, to) {
        const item = arr[from];
        arr.splice(from, 1);
        arr.splice(to, 0, item);
    }
    
    for (let i=1; i<nums.length; i++) {
        if (nums[i] !== currNum) {
            currNum = nums[i];
            arrayMove(nums, i, switchPosition);
            switchPosition++;
        }
    }
    
    
    return switchPosition;
};