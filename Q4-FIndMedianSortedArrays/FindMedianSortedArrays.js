/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let sortedNums = [];
  for (let i = 0, j = 0; i + j < nums1.length + nums2.length;) {
    if (nums1[i] <= nums2[j] || nums2[j] === undefined) {
      sortedNums.push(nums1[i]);
      i++;
    } else {
      sortedNums.push(nums2[j]);
      j++;
    }
  }

  return sortedNums.length % 2 === 0 ?
    (sortedNums[sortedNums.length / 2] + sortedNums[sortedNums.length / 2 - 1]) / 2 :
    sortedNums[Math.floor(sortedNums.length / 2)]
};

module.exports = findMedianSortedArrays