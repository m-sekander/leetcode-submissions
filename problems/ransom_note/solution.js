/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magArr = magazine.split('');
    const ransomLetters = ransomNote.replace(' ', '');
    for (letter of ransomLetters) {
        if (!(magArr.includes(letter))) {
            return false
        } else {
            magArr.splice(magArr.indexOf(letter), 1)
        }
    }
    return true
};