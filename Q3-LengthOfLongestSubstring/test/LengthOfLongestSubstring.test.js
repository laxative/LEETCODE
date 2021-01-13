const expect = require('chai').expect;
const LengthOfLongestSubstring = require('../LengthOfLongestSubstring');

describe('LengthOfLongestSubstring function test', () => {
  it('leetcode example 1 test', () => {
    expect(LengthOfLongestSubstring('abcabcbb')).to.be.equal(3);
  })

  it('leetcode example 2 test', () => {
    expect(LengthOfLongestSubstring('bbbbb')).to.be.equal(1);
  })

  it('leetcode example 3 test', () => {
    expect(LengthOfLongestSubstring('pwwkew')).to.be.equal(3);
  })

  it('leetcode example 4 test', () => {
    expect(LengthOfLongestSubstring('')).to.be.equal(0);
  })
})