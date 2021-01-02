/**
 * First find out the diff of current num to target,
 * then using Array.prototype.indexOf to find the diff num index
 * if exist (not equal to -1), return current num index and diff num index
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let ans = null;

  for (let i = 0; i < nums.length; ++i) {
    let diff = target - nums[i];
    let diffIndex = nums.indexOf(diff);

    if (diffIndex !== -1 && diffIndex !== i) {
      ans = [i, diffIndex];
      break;
    }
  }

  return ans;
}

module.exports = twoSum;
