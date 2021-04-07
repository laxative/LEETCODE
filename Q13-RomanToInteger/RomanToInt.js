/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const romanSymbolMap = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  }

  let romanSymbolKeys = Object.keys(romanSymbolMap);
  let answer = 0;

  for (let i = romanSymbolKeys.length - 1; i >= 0;) {
    if (s.indexOf(romanSymbolKeys[i]) !== 0) i--;
    else {
      s = s.substr(romanSymbolKeys[i].length);
      answer += romanSymbolMap[romanSymbolKeys[i]];
    }
  }

  return answer;
};

module.exports = romanToInt;