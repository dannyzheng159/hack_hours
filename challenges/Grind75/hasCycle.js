/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Constraints:

The number of the nodes in the list is in the range [0, 10^4].
-10^5 <= Node.val <= 10^5
pos is -1 or a valid index in the linked-list.

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// LL 1
const a = new ListNode(3);
const b = new ListNode(2);
const c = new ListNode(0);
const d = new ListNode(-4);

a.next = b;
b.next = c;
c.next = d;
d.next = b;

// LL 2
const e = new ListNode(1);

// Note: It is better to use a Map object here instead of an object because object keys have to be strings or symbols while map keys can be any value, including objects, functions, and primitives.
// Maps also have built in methods such as set, get, has, and delete. It also has better perfrmance iterating over keys and the ability to store values with the same key without overwriting each other.
// Brute Force Hashmap Approach:
// O(n) time complexity - n is the number of nodes in the linked list. At worst, we will need to traverse through the entire linked list regardless if there is a cycle or not because we are
// seeing if a node we already visited is stored as a reference in the hashmap
// O(n) space complexity - n is the number of nodes in the linked list. We will need to store every node as a reference in the hashmap before we can verify if there is a cycle from a repeat visit
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// const hasCycle = function(head) {
//   // declare a hashmap to store references to visited nodes in the linked list
//   const visited = new Map();
//   // declare a current pointer initialized to head to track current node we are visiting
//   let current = head;
//   // traverse through the linked list until we reach the end
//   while (current) {
//     // check if visited has a reference to the current node we are visiting, and if so return true
//     if (visited.has(current)) {
//       return true;
//     }
//     // else store a reference to the node in visited
//     visited.set(current, true);
//     // update the current pointer to the next node in the list
//     current = current.next;
//   }
//   // return false if we reach the end of the linked list without finding a cycle
//   return false;
// };

// Note: It is important to note that it does not matter if the values of the nodes in the linked list are unique. We are comparing references to the nodes in memory and not the values themselves.
// Two Pointer Approach (Fast and Slow):
// O(n) time complexity - n is the number of nodes in the linked list. At worst, we will traverse through the entire linked list if there is no cycle. Otherwise there will never be n operations because the fast pointer will eventually catch up to and lap the slow pointer before it reaches the slow pointer reaches the end of the list/cycle.
// O(1) space complexity - constant memory allocated with pointer variables
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  // declare slow and fast pointer variables initialized to head so we can reference diff nodes in the linked list
  let slow = head;
  let fast = head;
  // traverse through the linked list as long as fast and fast's next pointer is not null.
  // note that the fast pointer advances 2x nodes so we need to check for both conditions for odd or even lengthed linked lists
  while (fast && fast.next) {
    // advance slow pointer to slow's next node
    slow = slow.next;
    // advance fast pointer to fast's next next node
    fast = fast.next.next;
    // check if fast and slow reference the same node and if so, return true
    if (fast === slow) return true;
  }
  // return false
  return false;
};

console.log(hasCycle(a)); // -> true
console.log(hasCycle(e)); // -> false
