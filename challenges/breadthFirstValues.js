/*
breadth first values
Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.

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

breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
test_01:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

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

breadthFirstValues(a); 
//   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
test_02:
const a = new Node('a');

//      a

breadthFirstValues(a); 
//    -> ['a']
test_03:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const x = new Node('x');

a.right = b;
b.left = c;
c.left = x;
c.right = d;
d.right = e;

//      a
//       \
//        b
//       /
//      c
//    /  \
//   x    d
//         \
//          e

breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'x', 'd', 'e']
test_04:
breadthFirstValues(null); 
//    -> []
*/

// Breadth-First - Traversal Order : Top Level Down. root-> left -> right. Emit at first appearance of node.

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// Iterative Approach
// O(n^2) time complexity - iterating through each node n with a while loop to store the values into an array and using the native shift() method that runs in O(n) results in O(n^2) overall. JS does not have a native queue data structure that is maximally efficient.
// O(n) space complexity - constant memory allocated for variables and additional memory allocated for each child node in the queue which is a linear data structure.
const breadthFirstValues = (root) => {
  // declare values, an empty array storing the values our node values
  const values = [];
  // check if root is EQUAL to null and if so, return values
  if (root === null) return values;
  // declare queue, a queue data structure with the root as its first element
  const queue = [root];
  // execute block of code for as long as the queue is NOT EMPTY
  while (queue.length) {
    // dequeue a node from the stack using the shift method and declare current, a pointer variable assigned to store the node
    const current = queue.shift();
    //  push the node's val into values
    values.push(current.val);
    // check if node.left is NOT EQUAL to null and if so, push it into queue
    if (current.left !== null) queue.push(current.left);
    // check if node.right is NOT EQUAL to null and if so, push it into queue
    if (current.right !== null) queue.push(current.right);
  }
  // return values
  return values;
};

// Recursive Approach - The general approach uses a queue. Rercusion utilizes stacks which contradicts the use of a queue. It is recommended to use an iterative approach for BFS traversal algos.

// test_00:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(a);

// /*
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// */

// console.log(breadthFirstValues(a)); // ['a', 'b', 'c', 'd', 'e', 'f']

// test_03:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const x = new Node('x');

a.right = b;
b.left = c;
c.left = x;
c.right = d;
d.right = e;

console.log(a);
/*
     a
      \
       b
      /
     c
   /  \
  x    d
        \
         e

*/

console.log(breadthFirstValues(a)); // ['a', 'b', 'c', 'x', 'd', 'e']
console.log(breadthFirstValues(null));
