const expect = require('chai').expect;
const reverseInteger = require('../ReverseInteger');

describe('reverseInteger function test', () => {
    it('leet code example 1 test', () => {
        expect(reverseInteger(123)).to.be.equal(321)
    })

    it('leet code example 2 test', () => {
        expect(reverseInteger(-123)).to.be.equal(-321)
    })

    it('leet code example 3 test', () => {
        expect(reverseInteger(120)).to.be.equal(21)
    })

    it('leet code example 4 test', () => {
        expect(reverseInteger(0)).to.be.equal(0)
    })
})