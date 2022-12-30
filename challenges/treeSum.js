/*
tree sum
Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

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

treeSum(a); // -> 21
test_01:
const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

treeSum(a); // -> 10
test_02:
treeSum(null); // -> 0
*/

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// DFS approach - Root -> Left -> Right... Emit at first appearance of node... Better space complexity than BFS approach
// Iterative Approach:
// O(n) time complexity - iterating through each node n in the BST and adding the values of the nodes to sum
// O(n) space complexity - constant memory allocated for variables and additional memory allocated for each node n at each stack which is a linear data structure.
// const treeSum = (root) => {
//   // declare sum, a variable intialized to 0 that sums up all the node values
//   let sum = 0;
//   // check if root is EQUAL to null and if so, return sum
//   if (root === null) return sum;
//   // declare stack, a stack data structure with the root as its first element
//   const stack = [root];
//   // execute block of code for as long as stack is NOT EMPTY
//   while (stack.length) {
//     // pop the last node in stack and declare current, a pointer variable assigned to store the node
//     const current = stack.pop();
//     // add current.val to sum
//     sum += current.val;
//     // check if curret.right is NOT EQUAL to null and if so, push it into stack
//     if (current.right) stack.push(current.right);
//     // check if current.left is NOT EQUAL to null and if so, push it into stack
//     if (current.left) stack.push(current.left);
//   }
//   // return sum
//   return sum;
// };

// Recursive Approach:
// O(n) time complexity - iterating through each node n in the BST and adding the values of the nodes to sum
// O(n) space complexity - Each recursive call at node n results in an additional stack frame in the call stack, where additional memory is allocated for a sum variable
const treeSum = (root) => {
  // base case 1: check if root is EQUAL to null and if so, return sum
  if (root === null) return 0;
  // declare sum, a variable intialized to root.val that sums up all the node values
  let sum = root.val;
  // recursive case 1: check if root.left is NOT EQUAL to null and if so, invoke recursive function passing in root.left and add it to sum. Note we technically do not need to check if left node is null before invoking a recursive call since we have a base case that will return 0 for null. However, this may avoid an addtional unecessart call stack
  if (root.left !== null) sum += treeSum(root.left);
  // recursive case 2: check if root.right is NOT EQUAL to null and if so, invoke recursive function passing in root.right and add it to sum.
  if (root.right !== null) sum += treeSum(root.right);
  // return sum
  return sum;
};

// Refactored Recursive Approach:
// const treeSum = (root) => {
//   if (root === null) return 0;
//   return root.val + treeSum(root.left) + treeSum(root.right);
// };

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

console.log(treeSum(a)); // 21
console.log(treeSum(null)); // 0
