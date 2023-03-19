/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia:
“The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:
Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:
Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Example 3:
Input: root = [2,1], p = 2, q = 1
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [2, 10^5].
-10^9 <= Node.val <= 10^9
All Node.val are unique.
p != q
p and q will exist in the BST.

*/

/*
Clarifications and Example:
1) What is the expected size of the BST? Will the root ever be null? The number of nodes in the tree is in the range [2, 10^5]
2) What node values should be expected? Integers? If so, what is the range of values? -10^9 <= Node.val <= 10^9
3) Will the node values always be unique? All Node.val are unique. 
4) Will p and q always be integers that are existing nodes in the BST? p and q will exist in the BST.
5) Are p and q always unique? p != q
6) What is the definition of a tree node?
   function treeNode(val) {
       this.val = val;
       this.left = this.right = null;
   }
e.g. root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8
     output: 6 
     The LCA of nodes 2 and 8 is 6
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const a = new TreeNode(6);
const b = new TreeNode(2);
const c = new TreeNode(8);
const d = new TreeNode(0);
const e = new TreeNode(4);
const f = new TreeNode(7);
const g = new TreeNode(9);
const h = new TreeNode(3);
const i = new TreeNode(5);

a.left = b;
a.right = c;
a.left.left = d;
a.left.right = e;
a.right.left = f;
a.right.right = g;
a.left.right.left = h;
a.left.right.right = i;

/*
For a BST, we know that the nodes in the left subtree of a node always have smaller values and the nodes in the right subtree of a node always have larger values
The LCA is defined between two nodes p and q as the lowest node in T that has both p and q as decendants (where we allow a nod to be a decendant of itself)
This means that in order for a node to qualify as a LCA of p and q:
1) We can no longer traverse into a deeper child node in the BST
2) If the values of p and q are not BOTH smaller or larger than the current node, that means we can not traverse into the left or right child node because it would not satisfy the property of a BST
3) p and q need to be BOTH smaller or larger than a node for us to traverse to it and consider it as a possible LCA
*/

// Iterative Approach:
// The key takeaway is to consider the search property of a BST. In a BST, nodes to the left of a parent have values smaller than the parent and nodes to the right have values greater than the parent.
// To find the LCA, we break down the problem and find which direction we need to traverse in the tree by comparing the values of the two nodes p and q that we are searching for with the current parent node's value.
// We repeat this process until we can no longer traverse in one direction where we find one node on one side and the other on the other side
// O(log n) time complexity - n is the number of nodes in the BST.
// For each iteration, the number of nodes that we need to traverse through is halved in size since we only traverse into the left if the value at nodes p and q are both smaller than the parent and traverse into the right if the value at nodes p and q are greater than the parent
// O(1) space complexity - constant space allocated
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  // traverse through the BST as long as root is not equal to null
  while (root) {
    // check if the value at nodes p and q are less than the current root node value and if so, reassign root to root.left
    if (p.val < root.val && q.val < root.val) root = root.left;
    // check if the value at nodes p and q are greater than the current root node value and if so, reassign root to root.right
    else if (p.val > root.val && q.val > root.val) root = root.right;
    // else end the traversal
    else break;
  }
  // return root
  return root;
};

console.log(lowestCommonAncestor(a, b, c)); // -> a
console.log(lowestCommonAncestor(a, b, e)); // ->
