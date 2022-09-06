/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0;
    num = Math.floor(num);
    while (num !== 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num -= 1
        }
        count++
    }
    return count;
};