/*
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
Example 2:

Example 2: 
Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Example 3:
Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

*/

/*
Clarification and Example
What is the expected size of the tree?
What should we return if the root is null? 
Are there any other constraints we should consider?
Define a binary tree node:
function TreeNode(val, left, right) {
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
}
e.g. root = [] -> output = []
     root = [4, 2, 7, 1, 3, 6, 9] -> output = [4, 7, 2, 9, 6, 3, 1]
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// Tree 1:
const a = new TreeNode(4);
const b = new TreeNode(2);
const c = new TreeNode(7);
const d = new TreeNode(1);
const e = new TreeNode(3);
const f = new TreeNode(6);
const g = new TreeNode(9);

a.left = b;
a.right = c;
a.left.left = d;
a.left.right = e;
a.right.left = f;
a.right.right = g;

// Tree 2:
const h = new TreeNode();

// Iterative BFS Approach:
// O(n^2) time complexity - n is the number of nodes in the binary tree. We iterate through each node in a BFS manner with a while loop
// JS does not have a native queue DS, and using the shift() method adds O(n) time complexity as we need to traverse through the array and shift all elements forward
// O(n) space complexity - n is the number of nodes in the binary tree and the queue stores up to the max number of n nodes at any given level. The queue is a linear data structure.
// At worst, in a balanced tree, roughly half of the total n nodes in a tree are stored in the queue which results in O(n/2) and simplifies to O(n).
// const invertTree = (root) => {
//   // edge case: check if root is null and if so, return null
//   if (!root) return null;
//   // declare queue and store the root as the initial node
//   const queue = [root];
//   // iterate through queue for as long as it is not empty
//   while (queue.length) {
//     // shift() the first node from the queue and store it in a current pointer
//     const current = queue.shift();
//     // check if either the current node's left or right nodes or not null
//     // (for large trees with null child nodes, this could optimize because there is no point in swapping null nodes)
//     if (current.left || current.right) {
//       // declare temp and assign it to the current node's left node
//       const temp = current.left;
//       // reassign the current node's left node to current node's right node
//       current.left = current.right;
//       // reassign the current node's right node to temp
//       current.right = temp;
//     }
//     // check if current node's left node is not null and if so, push it into queue
//     if (current.left) queue.push(current.left);
//     // check if the current node's right node is not null and if so, push it into queue
//     if (current.right) queue.push(current.right);
//   }
//   // return root
//   return root;
// };

// console.log(invertTree(a));
// console.log(invertTree(h));

/*

e.g. 
    root = [] -> output = []
            0                            0
         /     \            ->        /     \  
     null      null               null      null   

     root = [4, 2, 7, 1, 3, 6, 9] -> output = [4, 7, 2, 9, 6, 3, 1]
            4                                    4                                       
         /     \                              /     \                           
       2        7           ->              7        2          
    /   \     /    \                     /   \     /    \
   1     3   6     9                    9     6   3      1 


input: [4, 2, 7, 1, 3, 6, 9]   
1)   
queue = [4]
current = 4
temp = 2
current.left = 7
current.right = 2
output: [4, 7, 2]

2)
queue = [7, 2]
current = 7 
temp = 6
current.left = 9
current.right = 6
output: [4, 7, 2, 9, 6]

3) 
queue = [2, 9, 6]
current = 2
temp = 1
current.left = 3
current.right = 1
output: [4, 7, 2, 9, 6, 3, 1]

4) 
queue = [9, 6, 3, 1]
output: [4, 7, 2, 9, 6, 3, 1]

5) 
queue = [6, 3, 1]
output: [4, 7, 2, 9, 6, 3, 1]

6) 
queue = [3, 1]
output: [4, 7, 2, 9, 6, 3, 1]

7) 
queue = [1]
output: [4, 7, 2, 9, 6, 3, 1]    

8) 
queue = []   
output: [4, 7, 2, 9, 6, 3, 1] 
*/


// Iterative DFS Approach:
// O(n) time complexity - n is the number of nodes in the binary tree. We iterate through each node in a DFS manner with a while loop
// O(n) space complexity - n is the number of nodes in the binary tree and at worst the stack stores up to the max number of n nodes if the tree is completely unbalanced and skewed on one side. The queue is a linear data structure.
// At best for a balanced tree, the stack will store up to the number of levels/height of the tree which is O(log n).
// Recall that for a balanced binary tree, each node has exactly two child nodes, so the number of nodes at each level doubles as we descend down the tree. 
// Therefore, the height of a balanced binary tree with n nodes is log n. In a balanced binary tree, the maximum number of nodes at a given depth is 2^d, where d is the depth of the tree.
const invertTree = (root) => {
    // edge case: check if root is null and if so, return null
    if (!root) return null;
    // declare stack and store the root as the initial node
    const stack = [root];
    // iterate through stack for as long as it is not empty
    while (stack.length) {
      // pop() the last node from the stack and store it in a current pointer
      const current = stack.pop();
      // check if either the current node's left or right nodes or not null
      // (for large trees with null child nodes, this could optimize because there is no point in swapping null nodes)
      if (current.left || current.right) {
        // declare temp and assign it to the current node's left node
        const temp = current.left;
        // reassign the current node's left node to current node's right node
        current.left = current.right;
        // reassign the current node's right node to temp
        current.right = temp;
      }
      // check if the current node's right node is not null and if so, push it into stack
      if (current.right) stack.push(current.right);
      // check if current node's left node is not null and if so, push it into stack
      if (current.left) stack.push(current.left);
    }
    // return root
    return root;
  };
  
  console.log(invertTree(a));
  console.log(invertTree(h));

  
/*

e.g. 
    root = [] -> output = []
            0                            0
         /     \            ->        /     \  
     null      null               null      null   

     root = [4, 2, 7, 1, 3, 6, 9] -> output = [4, 7, 2, 9, 6, 3, 1]
            4                                    4                                       
         /     \                              /     \                           
       2        7           ->              7        2          
    /   \     /    \                     /   \     /    \
   1     3   6     9                    9     6   3      1 


input: [4, 2, 7, 1, 3, 6, 9]   
1)   
stack = [4]
current = 4
temp = 2
current.left = 7
current.right = 2
output: [4, 7, 2]

2)
stack = [2, 7]
current = 7
temp = 6
current.left = 9
current.right = 6
output: [4, 7, 2, 9, 6]

3) 
stack = [2, 6, 9]
output: [4, 7, 2, 9, 6]

4) 
stack = [2, 6]
output: [4, 7, 2, 9, 6]

5) 
stack = [2]
current = 2
temp = 1
current.left = 3
current.right = 1
output: [4, 7, 2, 9, 6, 3, 1]

6) 
stack = [1, 3]
output: [4, 7, 2, 9, 6, 3, 1]

7) 
stack = [1]
output: [4, 7, 2, 9, 6, 3, 1]

8) 
stack = []    
output: [4, 7, 2, 9, 6, 3, 1]

*/