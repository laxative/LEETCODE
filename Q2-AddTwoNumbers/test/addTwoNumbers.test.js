var expect = require('chai').expect;
const addTwoNumbers = require('../addTwoNumbers');

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}


describe('addTwoNumbers function test', () => {
  it('leetcode example 1 test', () => {
    let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    let ans = new ListNode(7, new ListNode(0, new ListNode(8)));
    expect(addTwoNumbers(l1, l2)).to.be.eql(ans);
  });

  it('leetcode example 2 test', () => {
    let l1 = new ListNode(0);
    let l2 = new ListNode(0);
    let ans = new ListNode(0);
    expect(addTwoNumbers(l1, l2)).to.be.eql(ans);
  });

  it('leetcode example 3 test', () => {
    let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
    let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
    let ans = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))));
    expect(addTwoNumbers(l1, l2)).to.be.eql(ans);
  });
})
