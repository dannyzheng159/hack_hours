/*
max root to leaf path sum
Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree.

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

maxPathSum(a); // -> 18
test_01:
const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

maxPathSum(a); // -> 59
test_02:
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
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
// -3   0    -13
//     /       \
//    -1       -2

maxPathSum(a); // -> -8
test_03:
const a = new Node(42);

//        42

maxPathSum(a); // -> 42
*/

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// Recursive Approach
// O(n) time complexity - iterating through each node n in the BST and finding the maximum node value between child nodes at each path
// O(n) space complexity - Each recursive call at node n results in an additional stack frame in the call stack
const maxPathSum = (root) => {
  // base case 1: check if the current node is EQUAL to null and if so, return -Infinity
  if (root === null) return -Infinity;
  // base case 2: check if root.left AND root.right is EQUAL to null, meaning we have reached a leaf node and if so, return root.val
  if (root.left === null && root.right === null) return root.val;
  // recursive case 1: use Math.max, passing in the invocations of the recursive function passing in root.left and root.right. Add the evaluated result to root.val.
  // This will allow us to traverse through the entire BST and recrusivly invoke Math.max every time to compare the child nodes of each path before adding it to the root value.
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

// test_00:
// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(a);
// /*
//        3
//     /    \
//    11     4
//   / \      \
//  4   -2     1

// */

// console.log(maxPathSum(a)); // -> 18

// test_01:
const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

console.log(maxPathSum(a)); // -> 59

// 5 + Math.max(MPS(11), MPS(54)) =>
// 5 + Math.max(Math.max(MPS(20), MPS(15)), 54) =>
// 5 + Math.max(Math.max(20, Math.max(MPS(1), MPS(3))), 54) =>
// 5 + Math.max(Math.max(20, Math.max(1, 3)), 54) =>
// 5 + Math.max(Math.max(20, 3), 54) =>
// 5 + Math.max(20, 54)
// 5 + 54 = 59
