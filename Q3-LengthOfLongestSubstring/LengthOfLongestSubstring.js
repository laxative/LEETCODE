/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 1) return 1;

    let maxLength = 0;
    for (let startIndex = 0; startIndex < s.length; startIndex++) {
        let charUsed = {};
        charUsed[s[startIndex]] = true;
        for (let endIndex = startIndex + 1; endIndex < s.length; endIndex++) {
            if (!!charUsed[s[endIndex]]) {
                maxLength = Math.max(maxLength, endIndex - startIndex);
                break;
            }
            charUsed[s[endIndex]] = true;
            maxLength = Math.max(maxLength, endIndex - startIndex + 1);
        }
        
    }
    return maxLength;
};

module.exports = lengthOfLongestSubstring;