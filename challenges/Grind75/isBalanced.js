/*
Given a binary tree, determine if it is height-balanced.
A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true


Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-10^4 <= Node.val <= 10^4
*/

/*
Clarifications and Example:
1) Can you clarify what a height-balanced binary tree is? A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
2) What is the expected size of the tree? Will the root ever be null? The number of nodes in the tree is in the range [0, 5000]. An empty tree is considered balanaced.
3) What data type are the nodes? Integers, -10^4 <= Node.val <= 10^4
4) What is the definition of a tree node?
   function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val);
       this.left = (left === undefined ? null : left);
       this.right = (right === undefined ? null : right);
   }
e.g. input: root = [3, 9, 20, null, null, 15, 7]
     output: true
     input: root = [1, 2, 2, 3, 3, null, null, 4, 4]
     output: false
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Tree 1
const a = new TreeNode(3);
const b = new TreeNode(9);
const c = new TreeNode(20);
const d = new TreeNode(15);
const e = new TreeNode(7);

a.left = b;
a.right = c;
a.right.left = d;
a.right.right = e;

// Tree 2
const f = new TreeNode(1);
const g = new TreeNode(2);
const h = new TreeNode(2);
const i = new TreeNode(3);
const j = new TreeNode(3);
const k = new TreeNode(4);
const l = new TreeNode(4);

f.left = g;
f.right = h;
f.left.left = i;
f.left.right = j;
f.left.left.left = k;
f.left.left.right = l;

// Tree 3
const m = new TreeNode();

// O(n) time complexity - n is the number of nodes in the binary tree. The recursive helper function height() is an O(n) operation. It traverses through the entire binary tree and compares the height at each left and right subtree.
// Though we invoke this function many times on the left and right child nodes, the traversal on each subtree is not linear since the depth of each subtree is limited by the overall height of the binary tree so they will not increase the overall time complexity of O(n).
// In the worst case, we need to visit each node in the binary tree once to determine if it is balanced or not. However, as we traverse deeper into the tree to determine if every node is balanced, the subtrees we visit become smaller and the number of nodes we need to visit decreases.
// Therefore, the total number of node visits for these subtrees are less than n in the worst case, which means the time complexity is still O(n).
// isBalanced() recursively invokes height() on each node once until at worst, we traverse through the entire tree and is also an O(n) operation. This would mean that the binary tree is balanced. If we find any subtree to be unbalanced, we can end the operation early.
// O(h) space complexity - h is the height of a the binary tree. At worst, the stack frame adds h call stacks equal to the maximum depth of the tree before it exits and returns back up the call stack
// The initial invocation of height() takes up the most memory since we start at the left and right subtrees from the root. Each subsequent call takes up less space.
// isBalanced recursively invokes height() on each node once until we traverse through the entire tree and is also O(h)
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
  // base case: check if root is null and if so return true
  // an empty tree is considered balanced
  // also, if we manage to reach the end of a subtree, it means it is balanced
  if (!root) return true;
  // declare height, a recursive helper function to find the height of each node in the binary tree
  const height = function (node) {
    // base case: check if the current node is null meaning we've reached the end of the subtree and if so, return 0 since the height of a null node is 0
    if (!node) return 0;
    // recursive case: find the height of the current node in the binary tree
    // invoke height on the left and right nodes until we reach the base case (end of subtree)
    // at that point, we compare the depth of the two subtrees to find the greater height and add 1 for each additional level in the tree as we move back up the call stack
    return Math.max(height(node.left), height(node.right)) + 1;
  };
  // return true for whether the absolute diff between the height of left subtree and right subtree is less than 2 and traverse through the rest of the binary tree to check if each left and right node/subtree is balanced and false otherwise
  return (
    Math.abs(height(root.left) - height(root.right)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

console.log(isBalanced(a)); // -> true
console.log(isBalanced(f)); // -> false
console.log(isBalanced(m)); // -> true
