/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let charList = new Array(numRows).fill("");
  let curRowIndex = 0;
  let isAdded = true;

  for (let i = 0; i < s.length; ++i) {
    isAdded
      ? (charList[curRowIndex++] += s[i])
      : (charList[curRowIndex--] += s[i]);

    if (curRowIndex >= numRows - 1) {
      isAdded = false;
    } else if (curRowIndex <= 0) {
      isAdded = true;
    }
  }

  return charList.reduce((acc, cur) => acc + cur);
};

module.exports = convert;
