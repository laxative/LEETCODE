/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let answer = 0;
  let left_ptr = 0;
  let right_ptr = height.length - 1;

  while (left_ptr !== right_ptr) {
    let width = right_ptr - left_ptr;
    answer = Math.max(
      answer,
      width * Math.min(height[left_ptr], height[right_ptr])
    );

    height[left_ptr] <= height[right_ptr] ? left_ptr++ : right_ptr--;
  }

  return answer;
};

module.exports = maxArea;
