/* 
Make an EventEmitter class that mimics the functionality of event listeners.

EventEmitter will have two methods:
- an 'on' method that will take in a function name and function declaration
- a 'trigger' method that takes in a function name and optional arguments

When 'trigger' is invoked, it should execute the function passed in, 
according to functions assigned with the 'on' method.

Example:
  const instance = new EventEmitter();
  let counter = 0;
  instance.on('increment', () => counter++); // counter should be 0
  instance.trigger('increment'); // counter should be 1
  instance.trigger('increment'); // counter should be 2


Caveats:
- If we repeatedly call .on with the same event name, it should
  continue to call the old function(s) as well. 
  Meaning, we can have multiple listeners for one event.
- If `obj.trigger` is called with additional arguments, pass those to the listeners.
- It is not necessary to write a way to remove listeners. 

*/

// Prototype-based Inheritance:

// /*
// Declare object constructor function EventEmitter that sets up an
// initial state of event listeners intialized as an empty object
// */
// function EventEmitter() {
//   this.listeners = {};
// }

// /*
// Inherit the 'on' method in the prototype object of the EventEmitter constructor that accepts a function name and function definition and
// registers an event listener for the specified function name.
// This should mimic the behavior of event listeners. If we repeatedly call the 'on' method with the same event name, it should continue to call all old function(s) as well.
// We can have multiple listeners for one event.
// */
// EventEmitter.prototype.on = function (funcName, func) {
//   if (!this.listeners[funcName]) this.listeners[funcName] = [func];
//   else this.listeners[funcName].push(func);
// };

// /*
// Inherit the 'trigger' method in the prototype object of the EventEmitter constructor that accepts a function name and any additional arguments if any and
// triggers / invokes the functions(s) with the specified function name. If there is no such event listener for the event name, throw an error.
// */
// EventEmitter.prototype.trigger = function (funcName, ...args) {
//   if (!this.listeners[funcName])
//     throw new Error(`Error: No event listener assigned to '${funcName}' event.`);
//   this.listeners[funcName].forEach((func) => {
//     func(...args);
//   });
// };

// //***************  Tests: *****************//
// let counter = 0;
// // instantiate a new instance of EventEmitter
// const instance1 = new EventEmitter();
// // add event listener for 'increment'
// instance1.on('increment', () => counter++);
// // trigger 'increment' event
// instance1.trigger('increment');
// console.log(counter); // -> 1
// // add additional event listener for another event, 'addX' that takes in one or more arguments
// instance1.on('addX', (...args) => {
//   counter += args.reduce((a, b) => a + b);
// });
// // check if the event listener was added
// console.log(instance1.listeners); // -> { increment: [ [λ] ], addX: [ [λ] ] }
// // trigger 'addX' event
// instance1.trigger('addX', 1, 2, 3);
// console.log(counter); // -> 7
// // trigger 'increment' event again
// instance1.trigger('increment');
// console.log(counter); // -> 8

// // instantiate a new instance of EventEmitter
// const instance2 = new EventEmitter();
// let countByOne = 0;
// let countByTwo = 0;
// // add event listener for 'count'
// instance2.on('count', () => (countByOne += 1));
// // add event listener for same event 'count' with a separate function definition
// instance2.on('count', () => (countByTwo += 2));
// // check if the event listener was added
// console.log(instance2);
// // trigger 'count' event and check if the function(s) were invoked
// instance2.trigger('count');
// console.log(countByOne); // -> 1
// console.log(countByTwo); // -> 2
// // trigger 'count' event again and check if the function(s) were invoked
// instance2.trigger('count');
// console.log(countByOne); // -> 2
// console.log(countByTwo); // -> 4
// trigger undefined 'subtract' event and check if an error is thrown
// instance2.trigger('subtract'); // -> Errpr: No event listener assigned to 'subtract' event.

// Class-based Inheritance:

/*
Define class EventEmitter initialized with a constructor that sets up an
initial state of event listeners intialized as an empty object
*/
class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  /*
  Define an on' method in the prototype object of the EventEmitter constructor that accepts a function name and function definition and
  registers an event listener for the specified function name.
  This should mimic the behavior of event listeners. If we repeatedly call the 'on' method with the same event name, it should continue to call all old function(s) as well.
  We can have multiple listeners for one event.
  */
  on(funcName, func) {
    if (!this.listeners[funcName]) this.listeners[funcName] = [func];
    else this.listeners[funcName].push(func);
  }

  trigger(funcName, ...args) {
    if (!this.listeners[funcName])
      throw new Error(`Error: No event listener for '${funcName}' event.`);
    this.listeners[funcName].forEach((func) => {
      func(...args);
    });
  }

  off(funcName, func) {
    if (!this.listeners[funcName])
      throw new Error(`Error: No listeners found for '${funcName}' event.`);
    const index = this.listeners[funcName].indexOf(func);
    if (index === -1)
      throw new Error(
        `Error: Listener function not found for '${funcName}' event.`
      );
    this.listeners[funcName].splice(index, 1);
  }
}

//***************  Tests: *****************//
// instantiate a new instance of EventEmitter
const instance = new EventEmitter();
let countByOne = 0;
let countByTwo = 0;
/* 
declare incrementByOne, incrementByTwo, and incrementByThree. We need to provide labels/function names so that we save the 
function reference in memory to pass into the 'off' method when removing the event listener
*/
const incrementByOne = () => (countByOne += 1);
const incrementByTwo = () => (countByTwo += 2);
const incrementByThree = () => (countByTwo += 3);
// add event listener for 'count' with incrementByOne callback
instance.on('count', incrementByOne);
// add event listener for 'count' with incrementByTwo callback
instance.on('count', incrementByTwo);
// trigger 'count' event
instance.trigger('count');
console.log(`countByOne: ${countByOne}, countByTwo: ${countByTwo}`); // -> countByOne: 1, countByTwo: 2
// trigger 'count' event again
instance.trigger('count');
console.log(`countByOne: ${countByOne}, countByTwo: ${countByTwo}`); // -> countByOne: 2, countByTwo: 4
// trigger undefined 'subtract' event and check if an error is thrown
// instance.trigger('subtract'); // -> No event listener assigned to 'subtract' event.
// check if the event listener was added
console.log(instance.listeners); // -> { count: [ [λ: incrementByOne], [λ: incrementByTwo] ] }
// remove event listener for 'incrementByOne' callback
instance.off('count', incrementByOne);
// check if the event listener for 'incrementByOne' was removed
console.log(instance.listeners); // -> { count: [ [λ: incrementByTwo] ] }
// trigger 'count' event again
instance.trigger('count');
console.log(`countByOne: ${countByOne}, countByTwo: ${countByTwo}`); // -> countByOne: 2, countByTwo: 6
// remove undefined 'subtract' event and check if an error is thrown
// instance.off('subtract', incrementByTwo); // -> Error: No listeners found for 'subtract' event.
// remove 'incrementByThree' function that was not added to event listener and check if an error is thrown
// instance.off('count', incrementByThree); // -> Error: Listener function not found for 'count' event.
