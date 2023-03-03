/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/

// O(n log n) time complexity - for each recurisve call, we add a call stack and split the array into halves. If we think of it in terms of a tree, this results in O(log n).
// For each level, we split the array and perform n operations on each level to merge them together which is O(n).
// O(n) space complexity - for each level, we are creating a new array linear relative to size of input
const mergeSort = (array) => {
  // base case: if the length of array is less than 2, return array
  if (array.length < 2) return array;
  // declare midPoint, the middle index of array
  const midPoint = Math.floor(array.length / 2);
  // declare left, the left subarray of array
  const left = array.slice(0, midPoint);
  // declare right, the right subarray of array
  const right = array.slice(midPoint);
  // recurisve case: merge the unmerged left and right subarrays
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  // declare sortedArr to store the sorted elements
  const sortedArr = [];
  // declare leftIndex as a pointer to the current index we are visiting in left
  let leftIndex = 0;
  // declare rightIndex as a pointer to the current index we are visiting in right
  let rightIndex = 0;
  // compare the elements in left and right until we reach the end of one of the subarrays
  while (leftIndex < left.length && rightIndex < right.length) {
    // check if the current element in left is smaller than the current element in right and if so, push the left element into sortedArr and increment leftIndex
    if (left[leftIndex] < right[rightIndex]) sortedArr.push(left[leftIndex++]);
    // else push the right element into sortedArr and increment rightIndex
    else sortedArr.push(right[rightIndex++]);
  }
  // if we have not reached the end of the left subarray, push the remaining elements into sortedArr
  while (leftIndex < left.length) {
    sortedArr.push(left[leftIndex++]);
  }
  // if we have not reached the end of the right subarray, push the remaining elements into sortedArr
  while (rightIndex < right.length) {
    sortedArr.push(right[rightIndex++]);
  }
  // return the sorted array
  return sortedArr;
};

console.log(mergeSort([10, 4, 7, 6, 1]));
