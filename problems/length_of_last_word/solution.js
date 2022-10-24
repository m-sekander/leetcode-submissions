/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const sArr = s.trim().split(" ");
    
    return sArr.pop().length;
};