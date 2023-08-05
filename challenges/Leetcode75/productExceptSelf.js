/*

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Clarifications and Example:
1) What is the min/max size of nums? 2 <= nums.length <= 10^5
2) What is the min/max value of nums[i]? -30 <= nums[i] <= 30
e.g.
productExceptSelf([1,2,3,4]) => [24,12,8,6]
productExceptSelf([-1,1,0,-3,3]) => [0,0,9,0,0]
*/

/* 
O(n) time complexity - O(n) + O(n) where n is length of nums array
O(n) time for iterating through nums array from the left
O(n) time for iterating through nums array from the right
*/
/*
 O(n) space complexity - O(1) + O(n)
 O(1) space for constant variables left and right
 O(n) space for products array where n is length of nums array
*/
// const productExceptSelf = function (nums) {
//   // initialize products as an empty array to store products
//   const products = [];
//   // declare left and initialize it to 1
//   let left = 1;
//   // iterate through nums array from the left
//   for (let i = 0; i <= nums.length - 1; i++) {
//     // check if there is an integer to left of the current index and if so, reassign left to the product of itself and nums[i-1]
//     // this way, we are essentially multiplying all integers to the left of the current index since we are tracking left and constantly reassigning its value
//     if (!isNaN(nums[i - 1])) left *= nums[i - 1];
//     // assign products[i] to current value of left
//     products[i] = left;
//   }
//   // declare right and initialize it to 1
//   let right = 1;
//   // iterate through nums array from the right
//   for (let i = nums.length - 1; i >= 0; i--) {
//     // check if there is an integer to the right of the current index and if so, reassign right to the product of itself and nums[i+1]
//     // this way, we are essentially multiplying all integers to the right of the current index since we are tracking right and constantly reassigning its value
//     if (!isNaN(nums[i + 1])) right *= nums[i + 1];
//     // reassign products[i] to the product of itself and the current value of right
//     products[i] *= right;
//   }
//   // return products
//   return products;
// };

/* 
O(n) time complexity - O(n) + O(n) where n is length of nums array
O(n) time for iterating through nums array from the left
O(n) time for iterating through nums array from the right
*/
/*
 O(n) space complexity - O(1) + O(n)
 O(1) space for constant variables left and right
 O(n) space for products array where n is length of nums array
*/
const productExceptSelf = function (nums) {
  // initialize products as an empty array to store products
  const products = [];
  // declare left and initialize it to 1.
  // since the first integer in nums will have nothing to its left, we initialize it to 1
  let left = 1;
  // iterate through nums array from the left
  for (let i = 0; i < nums.length; i++) {
    // assign products[i] to current value of left
    products[i] = left;
    // tally up left by reassigning left to the product of itself and the integer at the current index so we can use it for the next iteration
    left *= nums[i];
  }
  // declare right and initialize it to 1.
  // since the last integer in nums will have nothing to its right, we initialize it to 1
  let right = 1;
  // iterate through nums array from the right
  for (let i = nums.length - 1; i >= 0; i--) {
    // reassign products[i] to the product of itself and the current value of right
    products[i] *= right;
    // tally up right by reassigning right to the product of itself and the integer at the current index so we can use it for the next iteration
    right *= nums[i];
  }
  // return products
  return products;
};
