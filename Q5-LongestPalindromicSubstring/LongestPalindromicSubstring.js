/**
 * @param {string} s 
 * @return {string}
 */

var longestPalindrome = function (s) {
  let symbolString = '';
  for (let i = 0; i < s.length; ++i) {
    symbolString += `#${s[i]}`;
  }
  symbolString += '#';

  let radius = new Array(symbolString.length).fill(0);

  for (let center = 1; center < symbolString.length - 1; ++center) {
    let counter = 0;
    for (let dis = 1; center - dis >= 0 && center + dis < symbolString.length; ++dis) {
      if (symbolString[center - dis] == symbolString[center + dis]) {
        counter++;
      }
      else {
        break;
      }
    }
    radius[center] = counter;
  }

  const maxIndex = radius.indexOf(Math.max(...radius));
  const start = (maxIndex - radius[maxIndex]) / 2;

  let string = s.slice(start, start + radius[maxIndex])

  return string;
}

module.exports = longestPalindrome;