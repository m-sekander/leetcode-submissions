/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    
    const openers = [];
    
    for (let i=0; i<s.length; i++) {
        if (Object.values(pairs).includes(s[i])) {
            openers.unshift(s[i]);
        } else {
            if (openers[0] === pairs[s[i]]) {
                openers.splice(0, 1)
            } else {
                return false;
            }
        }
    }

    return !openers.length
};