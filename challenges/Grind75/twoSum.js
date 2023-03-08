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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  // declare map to track the remaining value needed to reach target
  // the key will be the remaining value and the associated value will be an array of the indices
  const map = {};
  // iterate through nums
  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    // at each iteration, check if nums[i] is the missing remainder value needed in map and if so,
    if (map[nums[i]]) {
      // add the current index position to the array of indices and return it
      map[nums[i]].push(i);
      return map[nums[i]];
      // else add the needed remainder to map along with the current index position 
    } else map[remainder] = [i];
  }
};

console.log(twoSum([2, 7, 13, 15], 9));