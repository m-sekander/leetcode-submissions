/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const isAlphaNumeric = str => /^[a-zA-Z0-9]+$/gi.test(str);
    let formattedS = "";
    let reverseFormattedS = "";
    
    for (char of s) {
        if (isAlphaNumeric(char)) {
            formattedS += char.toLowerCase();
            reverseFormattedS = char.toLowerCase() + reverseFormattedS;
        }
    }
    
    return formattedS === reverseFormattedS;
};