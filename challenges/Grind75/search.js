/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 
Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4


Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:
1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4
All the integers in nums are unique.
nums is sorted in ascending order.

*/

/*
Clarification and Example:
Input: Array of integers
Ouput: Integer for index position of -1

1) Should we expect the array to only consist of integers? Yes
2) What is the size of the array? 1 <= nums.length <= 10^4
3) Should we expect any duplicate integers in the input array? No, all are unique
4) What is the range of values for the integers in the array and target? -10^4 < nums[i], target < 10^4
5) Is there a required space or time complexity that we need to achieve? Solve in O(log n) time
6) Is the input array sorted? Yes
e.g. nums = [-1, 0, 3, 5, 9, 12] target = 9
     output = 4
     nums = [-1, 0, 3, 5, 9, 12] target = 2
     output = -1 
*/

// Divide & Conquer Binary Search Approach : Requires array to be sorted in ascending order
// O(log n) time complexty - n is the length of the nums array. For each iteration in the while loop, we divide the number of integers in nums that we need to search through by reassigning start to (mid + 1) or end to (mid - 1).
// So with each iteration, we are dividing the number of integers we need to search in half which equates to O(log n).
// This is similar to a BST (we search through the tree and eliminate half of the nodes we need to look through each time since we know the left child nodes are always smaller and the right child nodes are always greater)
// O(1) space complexity - constant space allocated for pointer variables
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  // declare start and initialize it to 0
  let start = 0;
  // declare end and initialize it to nums.length - 1
  let end = nums.length - 1;
  // iterate through nums for as long as start is less than or equal to end
  // this is needed since we want to be able to visit the integer at the end index as well (see test case 2 below)
  while (start <= end) {
    // declare mid and assign it to the midpoint between start and end
    // essentially, we want to divide the range/set of numbers we consider in half for every iteration, effectively creating a subarray of integers we will search through
    const mid = Math.floor((start + end) / 2);
    // if the number at index mid is equal to target, return mid
    if (nums[mid] === target) return mid;
    // else if the number at index mid is less than target, reassign the start pointer to mid + 1.
    // since we know the integer at mid is less than target, we want to create a new starting point for the subarray in the next iteration excluding the integer at the current mid index which we know is less than the target
    else if (nums[mid] < target) start = mid + 1;
    // else reassign end pointer to mid - 1
    // since we know the integer at mid is greater than target, we want to create a new ending point for the subarray in the next iteration excluding the integer at the current mid index which we know is greater than the target
    else end = mid - 1;
  }
  // return -1
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // -> 4
console.log(search([-1, 0, 3, 5, 9, 12], 12)); // -> 5
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1

/*
Test Cases 1:
nums = [-1, 0, 3, 5, 9, 12] target = 9

1)
start = 0
end = nums.length - 1 = 5
mid = Math.floor((5+0)/2) = 2
nums[mid] = nums[2] = 3
Since 3 < 9 
=> start = mid + 1 = 3 

2)
start = 3
end = nums.length - 1 = 5
mid = Math.floor((5+3)/2) = 4
nums[mid] = nums[4] = 9
Since 9 < 9 
return 4



Test Cases 2:
nums = [-1, 0, 3, 5, 9, 12] target = 12

1)
start = 0
end = nums.length - 1 = 5
mid = Math.floor((5+0)/2) = 2
nums[mid] = nums[2] = 3
Since 3 < 12 
=> start = mid + 1 = 3 

2)
start = 3
end = nums.length - 1 = 5
mid = Math.floor((5+3)/2) = 4
nums[mid] = nums[4] = 9
Since 9 < 12 
=> start = mid + 1 = 5 

3)
start = 5
end = nums.length - 1 = 5
mid = Math.floor((5+5)/2) = 5
nums[mid] = nums[5] = 12
Since 12 = 12 
return 5
*/
