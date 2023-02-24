/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are some valid subarrays of [3, 11, 2, 7, 4]
  [3, 11, 2]
  [11, 2, 7]
  [2]
  [3, 11, 2, 7, 4]
)
Find the subarray with the largest sum from the input array.

e.g.
input = [1, -2, 3, 10, -4, 7, 2, -5]
maxSubarray(input); 
// returns 18 from subarray [3, 10, -4, 7, 2]

input2 = [15, 20, -5, 10]
maxSubarray(input2); 
// returns 40 from subarray [15, 20, -5, 10]
*/

// Brute force approach:
// O(n^4) time complexity - nested for-loop where n is the length of the array, slice and reduce methods which at worse are both O(n)
// O(n) space complexity - the subarray is created and garbage collected with each nested iteration, taking up O(n) space at most
// const maxSubarray = (arr) => {
//   // declare max, a variable to track the max sum
//   let max = -Infinity;
//   // iterate through input arr with index i, which will be our starting index
//   for (let i = 0; i < arr.length; i++) {
//     // iterate through input arr with index j, which will be our ending index
//     for (let j = i + 1; j <= arr.length; j++) {
//       // slice a subarray from arr using the starting and ending indices
//       const subarray = arr.slice(i, j);
//       // declare sum and add up all elements in the subarray
//       const sum = subarray.reduce((a, b) => a + b);
//       // compare sum and max and reassign max to the larger number
//       if (max < sum) max = sum;
//     }
//   }
//   // return max
//   return max;
// };

// console.log(maxSubarray([3, 11, 2, 7, 4])); // -> 27

/* 
1) subarray = [3]
   sum = 3
   max = 3

2) subarray = [3, 11]
   sum = 14
   max = 14

3) subarray = [3, 11, 2]
   sum = 16
   max = 16

4) subarray = [3, 11, 2, 7]
   sum = 23
   max = 23

5) subarray = [3, 11, 2, 7, 4]
   sum = 27
   max = 27
 */

// console.log(maxSubarray([3, 5, -9, 12])); // -> 12

/* 
1) subarray = [3]
   sum = 3
   max = 3

2) subarray = [3, 5]
   sum = 8
   max = 8

3) subarray = [3, 5, -9]
   sum = -1
   max = 8

4) subarray = [3, 5, -9, 12]
   sum = 11
   max = 11

5) subarray = [5]
   sum = 5
   max = 11

6) subarray = [5, -9]
   sum = -4
   max = 11

7) subarray = [5, -9, 12]
   sum = 8
   max = 11   

8) subarray = [-9]
   sum = -9
   max = 11

9) subarray = [-9, 12]
   sum = 3
   max = 11

10) subarray = [12]
   sum = 12
   max = 12
 */

// Refactored Approach : Kadane's algo / dynamic programming
// We do not need to track the array, we just need to keep tabs on the max sum and the current sum of the current subarray
// O(n) time complexity - for-loop where n is the length of the array
// O(1) space complexity - we use variables with constant memory allocated to track the max sum
const maxSubarray = (arr) => {
  // declare max, a variable to track the max sum
  let maxSum = -Infinity;
  // declare sum, a variable to track the current sum
  let currentSum = 0;
  // iterate through input arr
  for (let i = 0; i <= arr.length; i++) {
    // add the element at the current index of the current subarray
    currentSum += arr[i];
    // compare currentSum and maxSum and reassign maxSum to the larger number
    if (maxSum < currentSum) maxSum = currentSum;
    // if the currentSum becomes negative, meaning the previous elements in the current subarray no longer contrinute to the overall maxSum, reassign currentSum to 0
    // we are effectively starting a new subarray
    if (currentSum < 0) currentSum = 0;
  }
  // return maxSum
  return maxSum;
};

console.log(maxSubarray([3, 11, 2, 7, 4])); // -> 27
console.log(maxSubarray([3, 5, -9, 12])); // -> 12
