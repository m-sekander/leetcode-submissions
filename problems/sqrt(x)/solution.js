/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 1;
    while (true) {
        if (i * i === x) {
            return i;
        } else if (i * i > x) {
            return i-1;
        }
            
        i++;
    }
};