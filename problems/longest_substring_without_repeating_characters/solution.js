/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxSubstring = 0;
  let chain = '';
  
  if (s.length < 2) {
    return s.length;
  }
  
  for (let i=0; i<s.length; i++) {
    for (let j=i; j<s.length; j++) {
      if (!chain.includes(s[j])) {
        chain += s[j];
      } else {
        if (chain.length > maxSubstring) {
          maxSubstring = chain.length;
        }
        chain = ''
        break;
      }
    }   
  }
  
  return maxSubstring;
};