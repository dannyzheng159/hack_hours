/*
Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]
test_01:
const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

linkedListValues(x); // -> [ 'x', 'y' ]
test_02:
const q = new Node("q");

// q

linkedListValues(q); // -> [ 'q' ]
test_03:
linkedListValues(null); // -> [ ]

*/

function Node(val) {
  this.val = val;
  this.next = null;
}

// Iterative Approach
// O(n) time complexity - iterating through each node once
// O(n) space complexity - uses array to store values of the nodes and the size of array is linearly proportional to size of linked list with n nodes
// const linkedListValues = (head) => {
//   // declare an empty array, linkedListValuesArr to store the values of each node
//   const linkedListValuesArr = [];
//   // declare a pointer variable, current initialized to head
//   let current = head;
//   // execute the code block for as long as current is NOT EQUAL to null
//   while (current !== null) {
//     // push the current node's val into linkedListValuesArr
//     linkedListValuesArr.push(current.val);
//     // reassign current pointer to current.next
//     current = current.next;
//   }
//   // return array of values, linkedListValuesArr
//   return linkedListValuesArr;
// };

// Recursive Approach
// O(n) time complexity - iterating through each node once
// O(n) space complexity - size of array is linearly proportional to size of linked list with n nodes
// const linkedListValues = (head, linkedListValuesArr = []) => {
//   // base case 1: check if the current node's val is equal to null and if so, return linkedListValuesArr
//   if (head === null) return linkedListValuesArr;
//   // push the current node's value into the array
//   linkedListValuesArr.push(head.val);
//   // recursive case 1: invoke the recursive function passing in head.next and the mutated linkedListValuesArr
//   return linkedListValues(head.next, linkedListValuesArr);
// };

// Optimized Recursive Approach - do not need to store a copy of linkedListValuesArr in each callstack
// O(n) time complexity - iterating through each node once
// O(n) space complexity - size of array is linearly proportional to size of linked list with n nodes
const linkedListValues = (head, linkedListValuesArr = []) => {
  // base case 1: check if the current node's val is equal to null and if so, return linkedListValuesArr
  if (head === null) return linkedListValuesArr;
  // recursive case 1: invoke the recursive function passing in head.next and a new array with all the previous values using the spread operator
  return linkedListValues(head.next, [...linkedListValuesArr, head.val]);
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

console.log(a); // a -> b -> c -> d
console.log(linkedListValues(a)); // ['a', 'b', 'c', 'd']
