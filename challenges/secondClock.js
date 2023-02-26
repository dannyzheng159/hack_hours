/*

Write a clock class, with two methods: start and stop.

----------
start: upon invocation, invokes a callback (this.cb, defined in the constructor)
on an argument every second, with the argument to the callback being:

1, 2, 3,... 59, 60, 1, 2, 3,... 59, 60, 1, 2, 3, etc.

In other words, the callback gets invoked every second on the "seconds hand" of
the clock. Always start with 1 and don't utilize the seconds value the current
clock time.

The first "tick" with value 1 occurs 1 second after the initial "secondClock" invocation.
The second "tick" with value 2 occurs 2 seconds after the initial "secondClock" invocation.
...
The sixtieth "tick" with value 60 occurs 60 seconds after the initial "secondClock" invocation.
The sixty-first "tick" with value 1 occurs 61 seconds after the initial "secondClock" invocation.
The sixty-second "tick" with value 2 occurs 62 seconds after the initial "secondClock" invocation.
etc.

----------
reset: upon invocation, completely stops the "clock".
Also resets the time back to the beginning.

Hint: look up setInterval and clearInterval.

*/

// Clase-based Inheritance

/*
Define class SecondClock initialized with a constructor that takes a cb function
and sets up the initial state with the time and intervalID properties
*/
class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.time = 1;
    this.intervalID = null;
  }

  /*
  Define a start method that allows you to control the clock and start the interval that calls
  the cb function and updates the time. The timer should count up till 60 seconds and then resets to 1 second
  */
  start() {
    this.intervalID = setInterval(() => {
      this.cb(this.time);
      this.time++;
      if (this.time === 61) this.time = 1;
    }, 1000);
  }

  /*
  Define a stop method that allows you to control the clock and stop the interval by clearing the intervalID
  */
  stop() {
    clearInterval(this.intervalID);
  }
}

// Define cb func to log the time
const log = (time) => console.log(time);

// Instantiate a new instance of the class secondClock passing in log
const clock1 = new SecondClock(log);
// call the start method
clock1.start();
// call the stop method after 5010 ms
setTimeout(() => {
  clock1.stop();
}, 5010);

// Instantiate a new instance of the class secondClock passing in log
const clock2 = new SecondClock(log);
// call the start method
clock2.start();
// call the stop method after 10100 ms
setTimeout(() => {
  clock2.stop();
}, 10100);

// Prototype-based Inheritance

// /*
// Declare object constructor function SecondClock that takes a cb function
// and sets up the initial state with the time and intervalID properties
// */
// function SecondClock(cb) {
//   this.cb = cb;
//   this.time = 1;
//   this.intervalID = null;
// }

// /*
// Inherit a start method in the prototype object of the SecondClock constructor that that allows you to control the clock and start the interval that calls
// the cb function and updates the time. The timer should count up till 60 seconds and then resets to 1 second
// */
// SecondClock.prototype.start = function () {
//   this.intervalID = setInterval(() => {
//     this.cb(this.time);
//     this.time++;
//     if (this.time === 61) this.time = 1;
//   }, 1000);
// };

// /*
// Inherit a stop method in the prototype object of the SecondClock constructor that that allows you to control the clock and stop the interval by clearing intervalID
// */
// SecondClock.prototype.stop = function () {
//   clearInterval(this.intervalID);
// };

// const log = (time) => console.log(time);

// // Instantiate a new instance of the class secondClock passing in log
// const clock1 = new SecondClock(log);
// // call the start method
// clock1.start();
// // call the stop method after 5010 ms
// setTimeout(() => {
//   clock1.stop();
// }, 5010);

// // Instantiate a new instance of the class secondClock passing in log
// const clock2 = new SecondClock(log);
// // call the start method
// clock2.start();
// // call the stop method after 10100 ms
// setTimeout(() => {
//   clock2.stop();
// }, 10100);