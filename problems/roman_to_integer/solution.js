/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = {'I':1, 'IV':4, 'V':5, 'IX':9, 'X':10, 'XL':40, 'L':50, 'XC':90, "C":100, "CD":400, "D":500, "CM":900,                     "M":1000}
    let sum = 0;
    for (let i=0; i<s.length; i++) {
        if (Object.keys(values).includes(s[i]+s[i+1])) {
            sum += values[(s[i]+s[i+1])];
            i++;
        } else {
            sum += values[s[i]];
        }
    }
    return sum
};