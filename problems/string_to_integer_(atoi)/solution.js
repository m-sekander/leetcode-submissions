/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const valids = ["-", "+", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const trimmedS = s.trim();
    let result = "";
    
    for (let i=0; i<trimmedS.length; i++) {
        if (valids.includes(trimmedS[i])) {
            if ((trimmedS[i] === "-" || trimmedS[i] === "+") && i>0) {
                break;
            } else {
                result += trimmedS[i]
            }
        } else {
            break;
        }
    }
    
    if (!(Number(result) === NaN) && Number(result) > 2147483647) {
        return 2147483647;
    }
    
    if (!(Number(result) === NaN) && Number(result) < -2147483648) {
        return -2147483648;
    }
    
    return Number(result) ? Number(result) : 0;
};