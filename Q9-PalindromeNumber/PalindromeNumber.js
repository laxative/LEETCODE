/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let checkPalindromeString = "#" + x.toString().split("").join("#") + "#";

  for (
    let center = Math.floor(checkPalindromeString.length / 2), dis = 0;
    center - dis >= 0 && center - dis < checkPalindromeString.length;
    ++dis
  ) {
    if (
      checkPalindromeString[center - dis] !==
      checkPalindromeString[center + dis]
    ) {
      return false;
    }
  }

  return true;
};

module.exports = isPalindrome;
