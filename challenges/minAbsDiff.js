/*
You want to choose a subsequence of nums such that the sum of its elements is the closest possible to goal. That is, if the sum of the subsequence's elements is sum, then you want to minimize the absolute difference abs(sum - goal).

Return the minimum possible value of abs(sum - goal).

Note that a subsequence of an array is an array formed by removing some elements (possibly all or none) of the original array.

Example 1:

Input: nums = [5,-7,3,5], goal = 6
Output: 0
Explanation: Choose the whole array as a subsequence, with a sum of 6.
This is equal to the goal, so the absolute difference is 0.
Example 2:

Input: nums = [7,-9,15,-2], goal = -5
Output: 1
Explanation: Choose the subsequence [7,-9,-2], with a sum of -4.
The absolute difference is abs(-4 - (-5)) = abs(1) = 1, which is the minimum.
Example 3:

Input: nums = [1,2,3], goal = -7
Output: 7

*/


/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 * @description - Brute force take it or leave it approach... O(2^n) time and space complexities - For every n integer elements in nums, there are 2 recursive calls and 2 additional call stacks added in the stack frame  
 */
var minAbsDifference = function (nums, goal) {
  // declare minDiff intialized to Infinity to keep track of the min absolute difference between the goal and all the sum of integers in each subset
  let minDiff = Infinity;
  // declare generateSubsetSums, a helper function that uses the take it or leave it approach
  const generateSubsetSums = (sum, index) => {
    // base case 1: check if index is equal to the length of nums
    if (index === nums.length) {
      // if so, use Math.abs() to find the abs minimum difference between goal and sum and Math.min() to compare the result with minDiff. Assign minDiff to the evaluated result
      minDiff = Math.min(Math.abs(goal - sum), minDiff);
      // exit the recurisve call
      return;
    }
    // recursive case 1: invoke generateSubsetSums, adding the current integer in the nums with sum
    generateSubsetSums(sum + nums[index], index + 1);
    // recursive case 2: invoke generateSubsetSums without adding the current integer in nums with sum
    generateSubsetSums(sum, index + 1);
  };
  // invoke generateSubsetSums passing in 0 for sum and index
  generateSubsetSums(0, 0);
  return minDiff;
};

console.log(minAbsDifference([5, -7, 3, 5], 6)); // -> 0
console.log(minAbsDifference([7, -9, 15, -2], -5)); // -> 1
console.log(minAbsDifference([1, 2, 3], -7)); // -> 7
