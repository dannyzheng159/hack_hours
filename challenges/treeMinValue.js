/*
tree min value
Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.

test_00:
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeMinValue(a); // -> -2
test_01:
const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(14);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

treeMinValue(a); // -> 3
test_02:
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     /       \
//    -2       -2

treeMinValue(a); // -> -13
test_03:
const a = new Node(42);

//        42

treeMinValue(a); // -> 42
*/

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// DFS approach - Root -> Left -> Right... Emit at first appearance of node... Better space complexity than BFS approach
// Iterative Approach
// O(n) time complexity - iterating through each node n in the BST to check each node's value and compare it with min
// O(n) space complexity - constant memory allocated for variables and additional memory allocated for each node n at each stack which is a linear data structure.
// const treeMinValue = (root) => {
//   // declare min, a variable used to keep track of the minimum node value in the BST and initialize it to Infinity
//   let min = Infinity;
//   // declare stack, a stack data structure with the root as its first element
//   const stack = [root];
//   // execute block of code for as long as stack is NOT EMPTY
//   while (stack.length) {
//     // pop the last node in stack and declare current, a pointer variable assigned to store the node
//     const current = stack.pop();
//     // check if the current node's value is less than min and if so, reassign min to current.val
//     if (current.val < min) min = current.val;
//     // check if current.right is NOT EQUAL to null and if so, push it into stack
//     if (current.right !== null) stack.push(current.right);
//     // check if current.left is NOT EQUAL to null and if so, push it into stack
//     if (current.left !== null) stack.push(current.left);
//   }
//   // return min
//   return min;
// };

// BFS apprach -> top Level down. root-> left -> right. Emit at first appearance of node.
// Iterative Approach
// O(n^2) time complexity - iterating through each node n with a while loop to store the values into an array and using the native shift() method that runs in O(n) results in O(n^2) overall. JS does not have a native queue data structure that is maximally efficient.
// O(n) space complexity - constant memory allocated for variables and additional memory allocated for each child node in the queue which is a linear data structure.
// const treeMinValue = (root) => {
//   // declare min, a variable used to keep track of the minimum node value in the BST and initialize it to Infinity
//   let min = Infinity;
//   // declare queue, a queue data structure with the root as its first element
//   const queue = [root];
//   // execute block of code for as long as queue is NOT EMPTY
//   while (queue.length) {
//     // shift the first node in queue and declare current, a pointer variable assigned to store the node
//     const current = queue.shift();
//     // check if the current node's value is less than min and if so, reassign min to current.val
//     if (current.val < min) min = current.val;
//     // check if current.left is NOT EQUAL to null and if so, push it into queue
//     if (current.left !== null) queue.push(current.left);
//     // check if current.right is NOT EQUAL to null and if so, push it into queue
//     if (current.right !== null) queue.push(current.right);
//   }
//   // return min
//   return min;
// };

// DFS approach - Root -> Left -> Right... Emit at first appearance of node...
// Recursive Approach
// O(n) time complexity - iterating through each node n in the BST and reassigning the value of min
// O(n) space complexity - Each recursive call at node n results in an additional stack frame in the call stack, where additional memory is allocated for a min variable
// declare min, a default parameter initialized to Infinity to keep track of the minimum value between all n nodes in the BST
// const treeMinValue = (root, min = Infinity) => {
//   // base case 1: check if the current node's val is LESS THAN min and if so, reassign min to root.val
//   if (root.val < min) min = root.val;
//   // recursive case 1: check if root.left is NOT EQUAL to null and if so, invoke recursive function passing in root.left and min and reassign the evaluated result to min
//   if (root.left !== null) min = treeMinValue(root.left, min);
//   // recursive case 2: check if root.right is NOT EQUAL to null and if so, invoke recursive function passing in root.right and min and reassign the evaluated result to min
//   if (root.right !== null) min = treeMinValue(root.right, min);
//   // return min
//   return min;
// };

// Refactored Recursive Approach
// O(n) time complexity - iterating through each node n in the BST and reassigning the value of min
// O(n) space complexity - Each recursive call at node n results in an additional stack frame in the call stack, where additional memory is allocated for a min variable
const treeMinValue = (root) => {
  // base case 1: check if the current node is EQUAL to null and if so, return Infinity
  if (root === null) return Infinity;
  // recursive case 1: use Math.min, passing in the root.val, and the invocations of the recursive function passing in root.left and root.right. This will allow us to traverse through the entire BST and recrusivly invoke Math.min every time to compare all node values
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(a);
/*
       3
    /    \
   11     4
  / \      \
 4   -2     1

*/

console.log(treeMinValue(a)); // -2

