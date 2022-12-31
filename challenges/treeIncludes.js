/*
tree includes
Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

treeIncludes(a, "e"); // -> true
test_01:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

treeIncludes(a, "a"); // -> true
test_02:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

treeIncludes(a, "n"); // -> false
test_03:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

treeIncludes(a, "f"); // -> true
test_04:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

treeIncludes(a, "p"); // -> false
test_05:
treeIncludes(null, "b"); // -> false
*/

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// DFS approach - Root -> Left -> Right... Emit at first appearance of node... Better space complexity than BFS approach
// Iterative Approach
// O(n) time complexity - iterating through each node n in the BST to check their values against taret
// O(n) space complexity - constant memory allocated for variables and additional memory allocated for each node n at each stack which is a linear data structure.
// const treeIncludes = (root, target) => {
//   // check if root is EQUAL to null and if so, return false
//   if (root === null) return false;
//   // declare stack, a stack data structure with the root as its first element
//   const stack = [root];
//   // execute block of code for as long as stack is NOT EMPTY
//   while (stack.length) {
//     // pop the last node in stack and declare current, a pointer variable assigned to store the node
//     const current = stack.pop();
//     // check if the current node's val is EQUAL to target and if so, short circuit the loop and return true
//     if (current.val === target) return true;
//     // check if current.right is NOT EQUAL to null and if so, push it into stack
//     if (current.right !== null) stack.push(current.right);
//     // check if current.left is NOT EQUAL to null and if so, push it into stack
//     if (current.left !== null) stack.push(current.left);
//   }
//   // return false
//   return false;
// };

// BFS apprach -> top Level down. root-> left -> right. Emit at first appearance of node.
// Iterative Approach
// O(n^2) time complexity - iterating through each node n with a while loop to store the values into an array and using the native shift() method that runs in O(n) results in O(n^2) overall. JS does not have a native queue data structure that is maximally efficient.
// O(n) space complexity - constant memory allocated for variables and additional memory allocated for each child node in the queue which is a linear data structure.
// const treeIncludes = (root, target) => {
//   // check if root is EQUAL to null and if so, return false
//   if (root === null) return false;
//   // declare queue, a queue data structure with the root as its first element
//   const queue = [root];
//   // execute block of code for as long as queue is NOT EMPTY
//   while (queue.length) {
//     // shift the first node in queue and declare current, a pointer variable assigned to store the node
//     const current = queue.shift();
//     // check if the current node's val is EQUAL to target and if so, return true
//     if (current.val === target) return true;
//     // check if current.left is NOT EQUAL to null and if so, push it into queue
//     if (current.left !== null) queue.push(current.left);
//     // check if current.right is NOT EQUAL to null and if so, push it into queue
//     if (current.right !== null) queue.push(current.right);
//   }
//   // return false
//   return false;
// };

// DFS approach - Root -> Left -> Right... Emit at first appearance of node... Better space complexity than BFS approach
// Recursive Approach
// O(n) time complexity - iterating through each node n in the BST and reassigning the value of result
// O(n) space complexity - Each recursive call at node n results in an additional stack frame in the call stack, where additional memory is allocated for a result variable
const treeIncludes = (root, target) => {
  // base case 1: check if root is EQUAL to null and if so, return false
  if (root === null) return false;
  // declare result, a variable to keep track of whether the target value exists as a node val in the BST and initialize it to false
  let result = false;
  // base case 2: check if the current node's value is EQUAL to target and if so, reassign result to true
  if (root.val === target) result = true;
  // recursive case 1: check if root.left is NOT EQUAL to null AND result is NOT EQUAl to true, meaning we have yet to find the target and if so, invoke recursive functon passing in root.left and target and reassign the evaluated result to result
  if (root.left !== null && result !== true)
    result = treeIncludes(root.left, target);
  // recursive case 2: check if root.right is NOT EQUAL to null AND result is NOT EQUAl to true, meaning we have yet to find the target if so, invoke recursive function passing in root.right and target and reassign the evaluated result to result
  if (root.right !== null && result !== true)
    result = treeIncludes(root.right, target);
  // return result
  return result;
};

// Refactored Recursive Approach
// O(n) time complexity - iterating through each node n in the BST and reassigning the value of result
// O(n) space complexity - Each recursive call at node n results in an additional stack frame in the call stack, where additional memory is allocated for a result variable
// const treeIncludes = (root, target) => {
//   if (root === null) return false;
//   if (root.val === target) return true;
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };

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

console.log(treeIncludes(a, 'e')); // true
console.log(treeIncludes(a, 'a')); // true
console.log(treeIncludes(a, 'n')); // false
console.log(treeIncludes(null, 'b')); // false
