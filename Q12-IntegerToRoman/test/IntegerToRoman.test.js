const expect = require('chai').expect;
const intToRoman = require('../IntegerToRoman');

describe('intToRoman function test', () => {
  it('leet code example 1 test', () => {
    expect(intToRoman(3)).to.be.equal('III');
  })

  it('leet code example 2 test', () => {
    expect(intToRoman(4)).to.be.equal('IV');
  })

  it('leet code example 3 test', () => {
    expect(intToRoman(9)).to.be.equal('IX');
  })

  it('leet code example 4 test', () => {
    expect(intToRoman(58)).to.be.equal('LVIII');
  })

  it('leet code example 5 test', () => {
    expect(intToRoman(1994)).to.be.equal('MCMXCIV');
  })
})