/*
get node value
Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 2); // 'c'
test_01:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 3); // 'd'
test_02:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 7); // null
test_03:
const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;

// banana -> mango

getNodeValue(node1, 0); // 'banana'
test_04:
const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;

// banana -> mango

getNodeValue(node1, 1); // 'mango'
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

// Iterative Approach:
// O(n) time complexity - iterating through the linked list for length of index or n nodes
// O(1) space complexity - no complex data structure, constant memory allocation for variables
// const getNodeValue = (head, index) => {
//   // declare a pointer variable current, initialized to head
//   let current = head;
//   // execute the block of code for as long as index is NOT EQUAL TO 0 AND current is NOT EQUAL to null
//   while (index !== 0 && current !== null) {
//     // reassign current to to current.next
//     current = current.next;
//     // decrement index by 1
//     index--;
//   }
//   // use ternary operator to check if the currentis null, meaning the node at the specified index does not exist and if so, return current, else return current.val
//   return current === null ? current : current.val;
// };

// Refactired Iterative Approach:
// O(n) time complexity - iterating through the linked list for length of index or n nodes
// O(1) space complexity - no complex data structure, constant memory allocation for variables
// const getNodeValue = (head, index) => {
//   // declare a pointer variable current, initialized to head
//   let current = head;
//   // declare a counter variable counter, initialized to 0
//   let counter = 0;
//   // execute the block of code for as long as current is NOT EQUAL to null
//   while (current !== null) {
//     // check if counter is equal to index and if so, return current
//     if (counter === index) return current.val;
//     // reassign current to current.next
//     current = current.next;
//     // increment counter by 1
//     counter++;
//   }
//   // return null
//   return null;
// };

// Recursive Approach:
// O(n) time complexity - iterating through the linked list for length of index or n nodes
// O(n) space complexity - uses call stack to store function calls. Each recursive call adds a new stack frame to the call stack and consumes additional memory with n stack frames equal to n nodes in the linked list.
const getNodeValue = (head, index) => {
  // base case 1: check if the current node is EQUAL TO NULL meaning that the node at the specified index does not exist and if so, return null
  if (head === null) return null;
  // base case 2: check if index is EQUAL to 0 and if so, return the current node's value
  if (index === 0) return head.val;
  // recursive case 1: invoke recurisve function passing in head.next and pre-decremented index
  return getNodeValue(head.next, --index);
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

console.log(a); // a -> b -> c -> d
console.log(getNodeValue(a, 2)); // 'c'
