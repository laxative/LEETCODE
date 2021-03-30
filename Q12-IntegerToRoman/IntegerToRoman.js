/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  let symbolMap = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }

  let symbolKeys = Object.keys(symbolMap);
  let iterator = symbolKeys.length - 1;
  let answer = '';

  while(num) {
    if (num < symbolKeys[iterator]) iterator--;
    else {
      num -= symbolKeys[iterator];
      answer += symbolMap[symbolKeys[iterator]];
    }
  }

  return answer;
};

module.exports = intToRoman;