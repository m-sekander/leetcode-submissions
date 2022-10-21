/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let largestWord = "";
    
    for (let i=0; i<s.length; i++) {
        let word = "";
        let reverseWord = "";
        
        for (let j=i; j<=s.length; j++) {
            word = word + s[j];
            reverseWord = s[j] + reverseWord;
            
            if (word===reverseWord && word.length>largestWord.length) {
                largestWord = word;
            }
        }
    }
    
    return largestWord;
};