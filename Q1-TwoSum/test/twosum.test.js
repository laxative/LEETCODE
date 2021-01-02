var expect = require('chai').expect;
const twoSum = require('../twosum');

describe('twosum function test', () => {
  it('leetcode example 1 test', () => {
    expect(twoSum([2,7,11,15], 9)).to.have.members([0, 1]);
  });

  it('leetcode example 2 test', () => {
    expect(twoSum([3,2,4], 6)).to.have.members([1, 2]);
  });

  it('leetcode example 3 test', () => {
    expect(twoSum([3,3], 6)).to.have.members([0, 1]);
  });
})
