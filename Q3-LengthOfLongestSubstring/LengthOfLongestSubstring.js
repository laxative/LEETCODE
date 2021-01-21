/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // the condition that directly return answer
  if (s.length <= 1) return s.length;

  let maxLength = 0;
  /** 
   * recording character place in string, if appear over one time,
   * record the last position
   * @type {Object<string, number>}
   */
  let charMap = {};
  /**
   * iterator is used for search substring end index
   * startIndex is used for start substring index
   * 
   * if the character is not exist in char map data, save it position in data and 
   * update maxLength
   * if exist, update startIndex value to the character position + 1
   * (because substring cannot exist the same char)
   * 
   * Using "abcabcbb" for example
   * if iterator = 3(a), now charMap = {"a": 0, "b": 1, "c": 2}
   * startIndex will update to 1 (now substring = "bca")
   * and update the maxLength with the longer one ("abc" vs "bca")
   */
  for (let iterator = 0, startIndex = 0; iterator < s.length; ++iterator) {
    if (charMap[s[iterator]] !== undefined) {
      startIndex = Math.max(startIndex, charMap[s[iterator]] + 1);
    }
    charMap[s[iterator]] = iterator;
    maxLength = Math.max(maxLength, iterator - startIndex + 1);
  }
  return maxLength;
};

module.exports = lengthOfLongestSubstring;