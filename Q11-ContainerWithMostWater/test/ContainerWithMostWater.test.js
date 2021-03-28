const expect = require("chai").expect;
const maxArea = require("../ContainerWithMostWater");

describe("ContainerWithMostWater function test", () => {
  it("leet code example 1 test", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).to.be.equal(49);
  });

  it("leet code example 2 test", () => {
    expect(maxArea([1, 1])).to.be.equal(1);
  });

  it("leet code example 3 test", () => {
    expect(maxArea([4, 3, 2, 1, 4])).to.be.equal(16);
  });

  it("leet code example 4 test", () => {
    expect(maxArea([1, 2, 1])).to.be.equal(2);
  });
});
