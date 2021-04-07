const expect = require('chai').expect;
const romanToInt = require('../RomanToInt');

describe('romanToInt function test', () => {
  it('leet code example 1 test', () => {
    expect(romanToInt('III')).to.be.equal(3);
  })

  it('leet code example 2 test', () => {
    expect(romanToInt('IV')).to.be.equal(4);
  })

  it('leet code example 3 test', () => {
    expect(romanToInt('IX')).to.be.equal(9);
  })
  
  it('leet code example 4 test', () => {
    expect(romanToInt('LVIII')).to.be.equal(58);
  })

  it('leet code example 5 test', () => {
    expect(romanToInt('MCMXCIV')).to.be.equal(1994);
  })
})