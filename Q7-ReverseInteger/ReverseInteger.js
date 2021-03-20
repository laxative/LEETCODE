/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const limit = 2147483648;

  let isNegative = x < 0;
  let splitNumber = x.toString().split(".");

  let number = isNegative ? splitNumber[0].slice(1) : splitNumber[0];
  let decimal = splitNumber[1] ? splitNumber[1] : "0";

  let reverseNumber = number.split("").reverse().join("");
  let reverseDecimal = decimal.split("").reverse().join("");

  let answer = parseFloat(`${reverseNumber}.${reverseDecimal}`);

  if (answer >= limit) {
    return 0;
  } else {
    if (isNegative) answer *= -1;

    return answer;
  }
};

module.exports = reverse;
