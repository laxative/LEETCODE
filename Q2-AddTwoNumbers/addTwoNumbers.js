/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let ans = new ListNode();
  let head = ans;
  let add = 0;
  while (l1 !== null || l2 !== null || add !== 0) {
    let cal = ((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add);
    ans.val = cal % 10;
    add = Math.floor(cal / 10);

    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
    if (l1 || l2 || add) {
      ans.next = new ListNode();
      ans = ans.next;
    }
  }

  return head;
};

module.exports = addTwoNumbers;