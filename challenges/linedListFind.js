/*
linked list find
Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "c"); // true
test_01:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "d"); // true
test_02:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "q"); // false
test_03:
const node1 = new Node("jason");
const node2 = new Node("leneli");

node1.next = node2;

// jason -> leneli

linkedListFind(node1, "jason"); // true
test_04:
const node1 = new Node(42);

// 42

linkedListFind(node1, 42); // true
test_05:
const node1 = new Node(42);

// 42

linkedListFind(node1, 100); // false
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

// Iterative Approach
// O(n) time complexity - iterating through the linked list for n nodes
// O(1) space complexity - no complex data structure, no additional memory required aside from the constant variables
// const linkedListFind = (head, target) => {
//   // declare a pointer variable current, initialized to head
//   let current = head;
//   // execute block of code for as long as the current node is NOT EQUAL TO null, meaning we have not traversed through the entire linked list yet
//   while (current !== null) {
//     // check if the current node's value is equal to target and if so, short circuit the loop and return true
//     if (current.val === target) return true;
//     // reassign current to current.next
//     current = current.next;
//   }
//   // return false
//   return false;
// };

// Recursive Approach
// O(n) time complexity - iterating through the linked list for n nodes
// O(n) space complexity - uses call stack to store function calls. Each recursive call adds a new stack frame to the call stack and consumes additional memory with n stack frames equal to n nodes in the linked list.
const linkedListFind = (head, target) => {
  // base case 1: check if the current node is EQUAL TO null and if so, return false
  if (head === null) return false;
  // base case 2: check if the current node's value is EQUAL TO target and if so, return true
  if (head.val === target) return true;
  // recursive case 1: invoke recursive function passing in head.next and target
  return linkedListFind(head.next, target);
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

console.log(a); // a -> b -> c -> d
console.log(linkedListFind(a, 'c')); // true
