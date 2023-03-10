/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

// Hashmap approach
// O(n) time complexity - n is the length of the array. We need to iterate through the nums array create a hashmap
// O(n) space complexity - n is the length of the array. At worst, we create a map of length n for every element in nums

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = function (nums, target) {
//   // declare map to track the remaining value needed to reach target
//   // the key will be the remaining value and the associated value will be an array of the indices
//   const map = {};
//   // iterate through nums
//   for (let i = 0; i < nums.length; i++) {
//     const remainder = target - nums[i];
//     // at each iteration, check if nums[i] is the missing remainder value needed in map and if so,
//     if (map[nums[i]]) {
//       // add the current index position to the array of indices and return it
//       map[nums[i]].push(i);
//       return map[nums[i]];
//       // else add the needed remainder to map along with the current index position
//     } else map[remainder] = [i];
//   }
// };

// console.log(twoSum([2, 7, 13, 15], 9));

// Refactored Hashmap approach:
// O(n) time complexity - n is the length of the array. We need to iterate through the nums array create a hashmap
// O(n) space complexity - n is the length of the array. At worst, we create a map of length n for every element in nums

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  // declare map to track the remaining value needed to reach target
  // the key will be the remaining value and the associated value will be the index position
  const map = {};
  // iterate through nums
  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    // Note: we need to check if it is undefined and not for truthy because the when i = 0, it will evaluate to falsy
    // at each iteration, check if nums[i] is the missing remainder value needed in map and if so,
    if (map[nums[i]] !== undefined) {
      // add the current index position to the array of indices and return it==
      return [map[nums[i]], i];
      // else add the needed remainder to map along with the current index position
    } else map[remainder] = i;
  }
};

// console.log(twoSum([2, 7, 13, 15], 9));

// Two-pointer Approach: Best for sorted input array following the same constraints as above
// O(n) time complexity - n is the length of the array. At worst, only one pointer converges and it loops through the entire nums array
// and the start and end pointers do not converge towards the center. The chances ofit being O(n/2) are higher.
// O(1) space complexity - only pointer variables are used so constant memory is allocated

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = function (nums, target) {
//   // sort the nums array in numerical order
//   // const sortedNums = [...nums].sort((a,b) => a - b);
//   // declare two pointer variables at the start and end of the array
//   let start = 0;
//   let end = nums.length - 1;
//   // execute while loop as long as start is less than end
//   while (start < end) {
//     // check if nums[start] + nums[end] is equal to target and if so, return an array with the start and end indices as elements
//     if (Math.abs(nums[start] + nums[end]) === Math.abs(target))
//       return [start, end];
//     // else check if nums[start] + nums[end] is less than target and if so, increment start
//     else if (Math.abs(nums[start] + nums[end]) < Math.abs(target)) start++;
//     // else decrement end
//     else end--;
//   }
// };

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([-1, -2, -18, -19, -20], -19));
