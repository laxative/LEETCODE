const expect = require('chai').expect;
const longestPalindrome = require('../LongestPalindromicSubstring')

describe('longestPalindrome function test', () => {
  it('leetcode example 1 test', () => {
    expect(longestPalindrome('babad')).to.be.equal('bab')
  })

  it('leetcode example 2 test', () => {
    expect(longestPalindrome('cbbd')).to.be.equal('bb')
  })

  it('leetcode example 3 test', () => {
    expect(longestPalindrome('a')).to.be.equal('a')
  })

  it('leetcode example 4 test', () => {
    expect(longestPalindrome('ac')).to.be.equal('a')
  })
})