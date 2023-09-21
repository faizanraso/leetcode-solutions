// Remove the Nth node from the end of a linked list

var removeNthFromEnd = function (head, n) {
  var length = 0;
  let counterNode = head;
  let soln = new ListNode();
  let solnHead = soln;

  while (true) {
    length += 1;
    if (!counterNode.next) {
      break;
    } else {
      counterNode = counterNode.next;
    }
  }

  for (i = 1; i <= length; i++) {
    if (i != length - n + 1) {
      soln.next = new ListNode(head.val);
      soln = soln.next;
      head = head.next;
    } else {
      head = head.next;
    }
  }
  return solnHead.next;
};
