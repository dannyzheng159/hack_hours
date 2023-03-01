/*

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

For this extension, we will use a strategy called insertion sort, which works as
follows. Imagine that the first k - 1 numbers of the array are in ascending
order. We take the kth number and insert it into the correct position amongst
the k - 1 numbers such that now, the first k numbers of the array are in
ascending order. In other words:

The first value in the array is considered to be already fine.
The second value is either placed before/after the first value.
The third value is inserted in the correct position amongst the first two values.
The fourth value is inserted in the correct position amongst the first three values.
etc.

*/

// O(n^2) time complexity - where n is the length of the array. At worst, if an array is in reverse order,
// we need to iterate through array in the outer loop and then in the while loop, compare it to each element on the left "sorted" array and swap their positions.
// This requires 1 comparison for the 1st element, then 2 for the 2nd element until we reach the last element which is n-1 comparisons.
// 1 + 2 + 3+ ... + (n-1) results in the arithmetic series formula n(n-1)/2 = (n^2 - n) / 2 = O(n^2)
// O(1) space complexity - constant memory allocated for variables
const insertionSort = (array) => {
  // iterate through array starting at index i = 0
  for (let i = 0; i < array.length - 1; i++) {
    // declare index and initialize it to i to track the position of the "sorted" integers on the left
    let index = i;
    // execute block of code for as long as index is greater than or equal to 0 meaning we still need to go through each element on the left to confirm no additional swaps need to be made
    // AND the integer at position index is greater than the integer at position index + 1, meaning a swap in position for the integer at index and the integer to the right of index needs to be made
    while (index >= 0 && array[index] > array[index + 1]) {
      // declare temp and assign it to the integer to the right of index or index+1
      const temp = array[index + 1];
      // reassign the integer to the right of index to the integer at index
      array[index + 1] = array[index];
      // reassign index to temp
      array[index] = temp;
      // decrement index so we continue to check all "sorted" integers on the left
      index--;
    }
  }
  return array;
};

console.log(insertionSort([8, 4, 6, 3, 1, 9, 5]));
