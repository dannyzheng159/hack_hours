/*
reverse list
Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f -> null

reverseList(a); // f -> e -> d -> c -> b -> a
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

/* Under the Hood:
 a -> b -> c -> d -> e -> f -> null 
                               prev 
curr

Initial:
prev = null
curr = a
curr.next = b

0) 
next = curr.next = b => b -> c -> d -> e -> f -> null
curr.next = prev = null 
prev = curr = a => a -> null
curr = next = b => b -> c -> d -> e -> f -> null 

  a -> b -> c -> d -> e -> f -> null 
      next                       
      curr

  a -> null
prev

1) 
next = curr.next = c => c -> d -> e -> f -> null
curr.next = prev = a -> null
prev = curr = b => b -> a -> null
curr = next = c => c -> d -> e -> f -> null 

  a -> b -> c -> d -> e -> f -> null 
          next                       
          curr

  b -> a -> null
prev

2) 
next = curr.next = d => d -> e -> f -> null
curr.next = prev = b -> a -> null
prev = curr = c => c -> b -> a -> null
curr = next = d => d -> e -> f -> null

  a -> b -> c -> d -> e -> f -> null 
               next                       
               curr

  c -> b -> a -> null
prev

3) 
next = curr.next = e => e -> f -> null
curr.next = prev = c -> b -> a -> null
prev = curr = d => d -> c -> b -> a -> null
curr = next = e => e -> f -> null

  a -> b -> c -> d -> e -> f -> null 
                    next                       
                    curr

  d -> c -> b -> a -> null
prev

4) 
next = curr.next = f => f -> null
curr.next = prev = d -> c -> b -> a -> null
prev = curr = e => e -> d -> c -> b -> a -> null
curr = next = f => f -> null

  a -> b -> c -> d -> e -> f -> null 
                         next                       
                         curr

  e -> d -> c -> b -> a -> null
prev

5) 
next = curr.next = null 
curr.next = prev = e -> d -> c -> b -> a -> null
prev = curr = f => f -> e -> d -> c -> b -> a -> null
curr = next = null

  a -> b -> c -> d -> e -> f -> null 
                                next                       
                                curr

  f -> e -> d -> c -> b -> a -> null
prev


Finally, 
curr = null
return prev
*/

// Iterative Aprroach
// O(n) time complexity - iterating through entire linked list of n nodes to reverse it
// O(1) space complexity - no complex data structures, constant allocated memory with pointer variables
// const reverseList = (head) => {
//   // declare a pointer variable current, initialized to head
//   let current = head;
//   // declare a pointer variable previous, initialized to null
//   let previous = null;
//   // declare a pointer variable next
//   let next;
//   // execute block of code for as long as current is NOT EQUAL to null
//   while (current !== null) {
//     // reassign next to current.next
//     next = current.next;
//     // reassign current.next to previous
//     current.next = previous;
//     // reassign previous to current
//     previous = current;
//     // reassign current to next
//     current = next;
//   }
//   // return previous
//   return previous;
// };

// Recursive Aprroach 
// O(n) time complexity - iterating through entire linked list of n nodes to reverse it
// O(n) space complexity - each stack frame in the call stack holds a recursive call that requires additional memory to store the variables
const reverseList = (head, previous = null) => {
  // base case 1: check if the current node is EQUAL to null and if so, return previous
  if (head === null) return previous;
  // declare a pointer variable next, intialized to head.next
  const next = head.next;
  // reassign head.next to previous
  head.next = previous;
  // reassign previous to head
  previous = head;
  // reassign head to next
  head = next;
  // recursive case 1: invoke recursive function passing in the updated pointers to head and previous. Note we can just pass in next and head without having to reassign the variables, but this may affect readibility.
  return reverseList(head, previous);
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(a); // a -> b -> c -> d -> e -> f -> null
console.log(reverseList(a)); // f -> e -> d -> c -> b -> a
