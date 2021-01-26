const expect = require('chai').expect;
const findMedianSortedArrays = require('../FindMedianSortedArrays');

describe('findMedianSortedArrays function test', () => {
  it('leetcode example 1 test', () => {
    expect(findMedianSortedArrays([1, 3], [2])).to.be.equal(2.00000);
  })

  it('leetcode example 2 test', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).to.be.equal(2.50000);
  })

  it('leetcode example 3 test', () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).to.be.equal(0.00000);
  })

  it('leetcode example 4 test', () => {
    expect(findMedianSortedArrays([], [1])).to.be.equal(1.00000);
  })

  it('leetcode example 5 test', () => {
    expect(findMedianSortedArrays([2], [])).to.be.equal(2.00000);
  })
})