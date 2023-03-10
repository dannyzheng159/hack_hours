/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const list1Node3 = new ListNode(4);
const list1Node2 = new ListNode(2, list1Node3);
const list1Node1 = new ListNode(1, list1Node2);
const list1 = list1Node1;

const list2Node3 = new ListNode(4);
const list2Node2 = new ListNode(3, list2Node3);
const list2Node1 = new ListNode(1, list2Node2);
const list2 = list2Node1;

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// O(min(n,m)) time complexity - n is the length of list1 and m is the length of list2. We traverse through both lists and compare the values of each node until we reach the end of the shorter list.
// O(1) space complexity - constant memory allocated for the pointer variables that hold references in memory of the nodes
const mergeTwoLists = function (list1, list2) {
  // edge cases: check if either list is empty and if so, return the other, non-empty list
  if (!list1) return list2;
  if (!list2) return list1;
  // initialize variable to track the head
  let head;
  // check if list1's first node's value is less than or equal to list2's first node's value and if so,
  if (list1.val <= list2.val) {
    // reassign head of the merged list to list1's first node
    head = list1;
    // advance list1 to the next node
    list1 = list1.next;
  } else {
    // else reassign head of the merged list to list2's first node
    head = list2;
    // advance list2 to the next node
    list2 = list2.next;
  }
  // declare pointer variable current, intialized to head to track the current node we are visiting
  let current = head;
  // iterate through the remaining nodes of both lists to append the smaller node to the merged list until we reach the end of any one of the two lists
  while (list1 && list2) {
    // check if the value of the node at list1 is less than or equal to the value of the node at list 2 and if so,
    if (list1.val <= list2.val) {
      // reassign current's next node to the node at list1
      current.next = list1;
      // advance list1 to the next node
      list1 = list1.next;
    } else {
      // else reassign current's next node to the node at list2
      current.next = list2;
      // advance list2 to the next node
      list2 = list2.next;
    }
    // point current to the next node / most recently added node of the merged list
    current = current.next;
  }
  // append any remaining nodes from the non-empty list to the merged list
  current.next = list1 || list2;
  return head;
};

console.log(mergeTwoLists(list1, list2)); // => 1 -> 1 -> 2 -> 3 -> 4
