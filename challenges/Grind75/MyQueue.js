/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 

Example 1:
Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false


Constraints:
1 <= x <= 9
At most 100 calls will be made to push, pop, peek, and empty.
All the calls to pop and peek are valid.

*/

/*
Clarifications and Example:
1) What data type are we pushing into the queue? 1 <= x <= 9
2) How many calls will be made to the methods? At most 100 calls will be made to push, pop, peek, and empty.
3) Will there ever be invalid calls? For example, will we call pop() or peep() if there is no element in the queue? All the calls to pop and peek are valid.
e.g: 
const queue = new myQueue();
queue = []
queue.push(1);
queue = [1]
queue.push(2);
queue = [1, 2]
queue.peek(); => 1
queue.pop(); => 1
queue = [2]
queue.empty(); => false
*/

const MyQueue = function () {
  // declare stack1 and stack2 lists
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // push input x into stack1
  this.stack1.push(x);
  return;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // check if stack2 is empty
  if (!this.stack2.length) {
    // if so, pop() all of the elements in stack1 and push() them into stack2 to maintain the order of the elements
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
  // pop the last element from stack2
  return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // check if stack2 is empty
  if (!this.stack2.length) {
    // if so, pop() all the elements in stack1 and push() them into stack2 to maintain the order of the elements
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
  // return the last element in stack2
  return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // return boolean based on if stack1 and stack2 are empty
  return !this.stack1.length && !this.stack2.length;
};

const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // -> 1
console.log(queue.pop()); // -> 1
console.log(queue.empty()); // -> false
