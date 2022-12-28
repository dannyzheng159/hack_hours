/*
depth first values
Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

Hey. This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ

test_00:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
test_01:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']
test_02:
const a = new Node('a');
//      a
depthFirstValues(a); 
//    -> ['a']
test_03:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.right = b;
b.left = c;
c.right = d;
d.right = e;

//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e

depthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e']
test_04:
depthFirstValues(null); 
//    -> []
*/

// Depth-First - Traversal Oorder : Root -> Left -> Right ... Emit at first appearance of node.

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// Iterative Apprach
// O(n) time complexity - iterating through the binary tree and visiting each node n once to store their values into the array
// O(n) time complexity - constant memory allocated for variables and additional memory allocated for each right node at each stack which is a linear data structure.
// const depthFirstValues = (root) => {
//   // declare values, an empty array to store our node values
//   const values = [];
//   // declare current, a pointer variable intiazlied to root to keep track of the current node we are on
//   let current = root;
//   // create an empty stack
//   const stack = [];
//   // execute block of code for as long as current is NOT EQUAL to null
//   while (current !== null) {
//     // push the current.val into values
//     values.push(current.val);
//     // check if current.right node is NOT EQUAL to null and if so, push current.right into stack
//     if (current.right !== null) stack.push(current.right);

//     // check if current.left node is NOT EQUAL to null and if so, reassign current to current.left
//     if (current.left !== null) current = current.left;
//     // else check if stack has pending nodes and if so, reassign current to stack.pop
//     else if (stack.length) current = stack.pop();
//     // else reassign current to null
//     else current = null;
//   }
//   // return values
//   return values;
// };

// Refactored Iterative Apprach
// O(n) time complexity - iterating through the binary tree and visiting each node n once to store their values into the array
// O(n) time complexity - constant memory allocated for variables and additional memory allocated for each node n at each stack which is a linear data structure.
// const depthFirstValues = (root) => {
//   // declare values, an empty array to store our node values
//   const values = [];
//   // check if the root is empty and if so, return values
//   if (root === null) return values;
//   const stack = [root];
//   // execute block of code for as long as stack is NOT EMPTY
//   while (stack.length) {
//     // declare a pointer variable, current initiazlied to stack.pop
//     const current = stack.pop();
//     // push the current node's val into values
//     values.push(current.val);
//     // check if the current.right is NOT EQUAL to null and if so, push current.right into stack
//     if (current.right !== null) stack.push(current.right);
//     // check if current.left is NOT EQUAL to null and if so, push current.left into stack
//     if (current.left !== null) stack.push(current.left);
//   }
//   // return values
//   return values;
// };

// Recursive Approach
// O(n) time complexity - Iterating through the binary tree for n nodes to store their values into the array
// O(n) space complexity - Each recursive call at node n results in an additional stack frame in the call stack, where additional memory is allocated for a values array
const depthFirstValues = (root) => {
  // declare values, an empty array to store our node values
  const values = [];
  // base case 1: check if the root node is empty/EQUAL to null and if so, return values
  if (root === null) return values;
  // push the current node's val in to values
  values.push(root.val);
  // check if root.left is NOT EQUAL to null and if so, invoke recursive call passing in root.left and push it into values using the spread operator
  if (root.left !== null) values.push(...depthFirstValues(root.left));
  // check if root.right is NOT EQUAL to null and if so, invoke recursive call passing in root.right and push it into values using the spread operator
  if (root.right !== null) values.push(...depthFirstValues(root.right));
  // return values
  return values;
};

// test_00:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(a);
/*
      a
    /   \
   b     c
  / \     \
 d   e     f

*/
console.log(depthFirstValues(a)); // ['a', 'b', 'd', 'c', 'f']
console.log(depthFirstValues(null));

// test_01:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;

// console.log(a);
// /*
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

// */
// console.log(depthFirstValues(a)); // ['a', 'b', 'd', 'e', 'g', 'c', 'f']

// test_02:
// const a = new Node('a');

// console.log(a);
//      a

// console.log(depthFirstValues(a)); // ['a']

// test_03:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.right = b;
// b.left = c;
// c.right = d;
// d.right = e;

// console.log(a);
// /*
//       a
//        \
//         b
//        /
//       c
//        \
//         d
//          \
//           e
// */

// console.log(depthFirstValues(a)); // ['a', 'b', 'c', 'd', 'e']
