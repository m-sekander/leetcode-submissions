/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let reachedEnd = false;
    
    if (strs.length === 1) {
        return strs[0];
    }
    
    for (let i=strs[0].length-1; i>=0; i--) {
        for (let j=1; j<strs.length; j++) {
            if (!(strs[j].slice(0,i+1) === strs[0].slice(0,i+1))) {
                break;
            }
            if (j === strs.length-1) {
                reachedEnd = true;
            }
        }
        if (reachedEnd) {
            return strs[0].slice(0,i+1);
        }
    }
    
    return "";
};