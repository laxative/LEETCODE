const expect = require("chai").expect;
const PalindromeNumber = require("../PalindromeNumber");

describe("PalindromeNumber function test", () => {
  it("leet code example 1 test", () => {
    expect(PalindromeNumber(121)).to.be.equal(true);
  });
  it("leet code example 2 test", () => {
    expect(PalindromeNumber(-121)).to.be.equal(false);
  });
  it("leet code example 3 test", () => {
    expect(PalindromeNumber(10)).to.be.equal(false);
  });
  it("leet code example 4 test", () => {
    expect(PalindromeNumber(-101)).to.be.equal(false);
  });
});
