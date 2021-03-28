const expect = require("chai").expect;
const convert = require("../ZigZagConversion");

describe("ZigZagConversion function test", () => {
  it("leet code example 1 test", () => {
    expect(convert("PAYPALISHIRING", 3)).to.be.equal("PAHNAPLSIIGYIR");
  });

  it("leet code example 2 test", () => {
    expect(convert("PAYPALISHIRING", 4)).to.be.equal("PINALSIGYAHRPI");
  });

  it("leet code example 3 test", () => {
    expect(convert("A", 1)).to.be.equal("A");
  });

  it("leet code example 4 test", () => {
    expect(convert("AB", 1)).to.be.equal("AB");
  });
});
