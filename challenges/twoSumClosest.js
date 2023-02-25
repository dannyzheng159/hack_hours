/*
Given an array nums of n integers and an integer target, find two integers in
nums such that the sum is closest to target. Return the sum of the two
integers. You may assume that each input would have exactly one solution, and
that the array will have at least two elements.

Example:

Given array nums [2, -2, 1] and target = 4.
The sum that is closet to the target is 3. (2 + 1 = 3).

Given array nums = [2, -3, -6, 7, 4] and target = 3.
The sum that is closest to the target is 4. (-3 + 7 = 4).

Given array nums = [3, 1, 4, 3] and target = 6.
The sum that is closest to the target is 6. (3 + 3 = 6).

Solve this problem using any strategy you would like: a naive solution is fine.

Extension:
The naive solution for this problem has O(n^2) time complexity. Can you come up
with a different solution with better time complexity? Hint: first sort the
array, which is O(n*log(n)) time, and see if you can post-process the array in
O(n) time.
*/

// Brute Force Approach:
// O(n^2) time complexity - nested for-loop iterating through n integers in nums. O(n-1) * O(n-2)/2
// O(1) space complexity - constant memory allocated for variables
// const twoSumClosest = (nums, target) => {
//   // declare minDiff to track the minimum difference between the closest sum and target
//   let minDiff = Number.MAX_SAFE_INTEGER;
//   // declare closestSum to track the sum of two integers closest to target
//   let closestSum = 0;
//   // iterate through nums index i
//   for (let i = 0; i < nums.length - 1; i++) {
//     // iterate through nums at index i+1
//     for (let j = i + 1; j < nums.length; j++) {
//       // declare currentSum and add the two elements at index i and i+1
//       const currentSum = nums[i] + nums[j];
//       // declare currentDiff and find the abs diff between currentSum and target
//       const currentDiff = Math.abs(currentSum - target);
//       // check if currentDiff is less than minDiff and if so,
//       if (currentDiff < minDiff) {
//         // reassign minDiff to currentDiff
//         minDiff = currentDiff;
//         // reassign closestSum to currentSum
//         closestSum = currentSum;
//       }
//     }
//   }
//   // return closestSum
//   return closestSum;
// };

// console.log(twoSumClosest([1, 4, -2, 8], 4)); // -> 5

// O(n log n) time complexity - sorting has at worst a O(n log n) and the while loop with two pointers that converges will significantly improve time efficiency but at worst if only one pointer converges will have O(n)
// O(n log n) + O(n) evaluates to O(n log n)
// O(1) space complexity - constant memory allocated for variables
const twoSumClosest = (nums, target) => {
  // check if nums is at minimum a length of 2 and if not, throw an error
  if (nums.length < 2)
    throw new Error('Input array must have at least 2 integers.');
  // declare minDiff to track the minimum difference between the closest sum and target
  let minDiff = Number.MAX_SAFE_INTEGER;
  // declare closestSum to track the sum of the the two integers closest to target
  let closestSum = 0;
  // declare start, a pointer to use at the start of nums
  let start = 0;
  // declare end, a pointer to use at the end of nums
  let end = nums.length - 1;

  // sort nums numerically
  nums.sort((a, b) => a - b);
  // execute while loop for as long as start is less than end
  while (start < end) {
    // declare currentSum and add the element at the start pointer with the elemenet at the end pointer
    const currentSum = nums[start] + nums[end];
    // declare currentDiff and find the abs diff between currentSum and target
    const currentDiff = Math.abs(currentSum - target);
    // check if currentDiff is less than minDiff and if so,
    if (currentDiff < minDiff) {
      // reassign minDiff to currentDiff
      minDiff = currentDiff;
      // reassign closestSum to currentSum
      closestSum = currentSum;
    }
    // check if currentSum is greater than target and if so, shift/converge end pointer to the left
    if (currentSum > target) end--;
    // else shift/converge start pointer to the right
    else start++;
  }
  // return closestSum
  return closestSum;
};

console.log(twoSumClosest([1, 4, -2, 8], 4)); // -> 5
