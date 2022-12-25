/*
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.

test_00:
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

sumList(a); // 19
test_01:
const x = new Node(38);
const y = new Node(4);

x.next = y;

// 38 -> 4

sumList(x); // 42
test_02:
const z = new Node(100);

// 100

sumList(z); // 100
test_03:
sumList(null); // 0
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

// Iterative Approach
// O(n) time complexity - iterate through all n nodes to tally up their values
// O(n) space complexty - no complex data structure used. uses a fixed amount of storage for the sum variable and the loop variables
// const sumList = (head) => {
//   // declare a variable sum initialized to 0, to keep track of the sum of all values of the nodes in the linked list
//   let sum = 0;
//   // declare a pointer variable current initalized to head
//   let current = head;
//   // execute code block for as long as current is not equal to null
//   while (current !== null) {
//     // add the current node's value to sum
//     sum += current.val;
//     // reassign current to current.next
//     current = current.next;
//   }
//   // return sum
//   return sum;
// };

// Recursive Approach
// O(n) time complexity - iterate through all n nodes to tally up their values
// O(n) space complexty - we need to store a copy of sum in each stack frame fram on the call stack meaning the function will use O(n) space in total, since it will have n stack frames on the call stack at its maximum.
// const sumList = (head, sum = 0) => {
//   // base case 1: check if the current node is EQUAL TO null and if so, return sum
//   if (head === null) return sum;
//   // add the current node's val to sum
//   sum += head.val;
//   // recursive case 1: invoke the recursive function passing in head.next and the updated sum
//   return sumList(head.next, sum);
// };

// Optimized Recursive Approach - do not need to store a copy of sum in each callstack
// O(n) time complexity - iterate through all n nodes to tally up their values
// O(1) space complexty - it only uses a fixed amount of space for the sum variable and any other local variables or arguments used by the function. It does not store a copy of the sum variable in each stack frame, but rather accumulates the sum as an argument to the recursive call.
const sumList = (head, sum = 0) => {
  // base case 1: check if the current node is EQUAL TO null and if so, return sum
  if (head === null) return sum;
  // recursive case 1: invoke the recursive function passing in head.next and the updated sum
  return sumList(head.next, sum + head.val);
};

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(a);
console.log(sumList(a)); // 19
console.log(sumList(null)); // 0
