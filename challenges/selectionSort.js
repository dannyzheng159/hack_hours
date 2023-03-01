/*

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

We will sort the array using a strategy called selection sort, which works as
follows. First, put the smallest number in the array at position 0. Then, put
the second-smallest number in the array at position 1. Then, put the
third-smallest number in the array at position 2 etc. After going through the
whole array, the array will end up being sorted.

*/

// O(n^2) time complexity - nested for-loop where n is the length of array. At worst, we need to swap the position of every element in the array.
// To sort an array, we use a nested for-loop where n is the length of the array. The outer loop iterates through the array with n integers.
// The inner loop iterates through n-1, n-2, ..., 1 integers to compare each integer and possibly swap if we find a smaller integer.
// The total number of comparisons made in the inner loop is the sum of (n-1) + (n-2) + (n-3) + ... + 1. 
// This can be simplified using the arithmetic series formula to n(n-1)/2, which evaluates to O(n^2).
// O(1) space complexity - constant memory allocated for variables
const selectionSort = (array) => {
  // iterate through array starting at position i = 0
  for (let i = 0; i < array.length - 1; i++) {
    // declare index and initialize it to i to track the position of the current smallest integer
    let index = i;
    // iterate through array starting at position j = i + 1
    for (let j = i + 1; j < array.length; j++) {
      // check if the integer at position j is less than the integer at position i and if so, reassign index to j
      if (array[j] < array[index]) index = j;
    }
    // check if index is not equal to i
    if (index !== i) {
      // if so declare a temp variable and assign it to the integer at position i
      const temp = array[i];
      // reassign the integer at position i to the integer at position index
      array[i] = array[index];
      // reassign the integer at position index to temp
      array[index] = temp;
    }
  }
  // return array
  return array;
};

console.log(selectionSort([4, -2, 0, 8])); // -> [-2, 0, 4, 8]
