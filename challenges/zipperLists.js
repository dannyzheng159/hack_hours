/*
zipper lists
Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z
test_01:
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
// a -> b -> c -> d -> e -> f

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f
test_02:
const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4
test_03:
const w = new Node("w");

// w

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

zipperLists(w, one);
// w -> 1 -> 2 -> 3
test_04:
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

const w = new Node("w");
// w

zipperLists(one, w);
// 1 -> w -> 2 -> 3
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

// Iterative Approach - It is useful to draw a digram to visualize the pointers. Check Notion.
// O(n) time complexity - iterating through each linked list of n and m nodes. The iteration stops when the we reach the end of the shorter linked list 
// O(1) space complexity - no complex data structures used to store memory, just constant allocation with variables
// const zipperLists = (head1, head2) => {
//   // declare a pointer variable current1, initialized to head1
//   let current1 = head1;
//   // declare a pointer variable current2, initialized to head2
//   let current2 = head2;
//   // execute block of code for as long as BOTH current1 AND current2 is NOT EQUAL to null
//   while (current1 !== null && current2 !== null) {
//     // declare a pointer variable next1 assigned to current1.next
//     const next1 = current1.next;
//     // declare a pointer variable next2 assigned to current2.next
//     const next2 = current2.next;
//     // reassign current1.next to current2
//     current1.next = current2;
//     // reassign current1 to current1.next
//     current1 = current1.next;
//     // check if next1 is NOT EQUAL to null and if so,
//     if (next1 !== null) {
//       // reassign current1.next to next1
//       current1.next = next1;
//     }
//     // reassign current1 to next1
//     current1 = next1;
//     // reassign current2 to next2
//     current2 = next2;
//   }
//   // return head1
//   return head1;
// };

// Recrusive Approach
// O(min(n,m)) time complexity - iterating through each linked list of n and m nodes. The iteration stops when the we reach the end of the shorter linked list 
// O(min(n,m)) space complexity - each stack frame in the call stack holds a recursive call that requires additional memory to store the variables. 
const zipperLists = (head1, head2, current1 = head1, current2 = head2) => {
  // base case 1: check if the current node in the first linked list OR the current node in the second linked list are equal to null and if so, return head1
  if (current1 === null || current2 === null) return head1;

  // declare a pointer variable next1, intialized to current1.next
  const next1 = current1.next;
  // declare a pointer variable next2, initialized to current2.next
  const next2 = current2.next;
  // reassign current1.next to current2
  current1.next = current2;
  // reassign current1 to current1.next
  current1 = current1.next;

  // check if next1 is NOT EQAUL to null and if so, reassign current1.next to next1
  if (next1 !== null) current1.next = next1;

  // reassign current1 to next1
  current1 = next1;
  // reassign current2 to next2
  current2 = next2;

  // recursive case 1: invoke recursive function passing in updated pointers to head1, head2, and updated pointers current1 and current2. Note we can just pass in next1 and next2 without having to reassign the variables, but this may affect readibility.
  return zipperLists(head1, head2, current1, current2);
};

// test_00:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// a.next = b;
// b.next = c;

// const x = new Node('x');
// const y = new Node('y');
// const z = new Node('z');
// x.next = y;
// y.next = z;

// console.log(a); // a -> b -> c
// console.log(x); // x -> y -> z
// console.log(zipperLists(a, x)); // a -> x -> b -> y -> c -> z

//_________________________________________________________________________________________________________________________________

// test_01:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// const x = new Node('x');
// const y = new Node('y');
// const z = new Node('z');
// x.next = y;
// y.next = z;

// console.log(a); // a -> b -> c -> d -> e -> f
// console.log(x); // x -> y -> z
// console.log(zipperLists(a, x)); // a -> x -> b -> y -> c -> z -> d -> e -> f

//_________________________________________________________________________________________________________________________________

// test_02:
// const s = new Node("s");
// const t = new Node("t");
// s.next = t;

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// one.next = two;
// two.next = three;
// three.next = four;

// console.log(s) // s -> t
// console.log(one) // 1 -> 2 -> 3 -> 4
// console.log(zipperLists(s, one)); // s -> 1 -> t -> 2 -> 3 -> 4

//_________________________________________________________________________________________________________________________________

// test_03:
// const w = new Node("w");

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// one.next = two;
// two.next = three;

// console.log(w) // w
// console.log(one) // 1 -> 2 -> 3
// console.log(zipperLists(w, one)); // w -> 1 -> 2 -> 3

//_________________________________________________________________________________________________________________________________

// test_04:
// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// one.next = two;
// two.next = three;

// const w = new Node('w');

// console.log(one); // 1 -> 2 -> 3
// console.log(w) // w
// console.log(zipperLists(one, w)); // 1 -> w -> 2 -> 3


/* Alternative Solutions: 

iterative
const zipperLists = (head1, head2) => {
  const head = head1;
  let tail = head;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  
  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count += 1;
  }
  
  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;
  
  return head;
};

n = length of list 1
m = length of list 2
Time: O(min(n, m))
Space: O(1)


recursive
const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  return head1;
};

n = length of list 1
m = length of list 2
Time: O(min(n, m))
Space: O(min(n, m))
*/