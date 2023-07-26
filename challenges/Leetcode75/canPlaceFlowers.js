/*

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Clarifications and Example:
1) The input will consist of an array of integers, 0's and 1's where 0 indicates an empty plot and 1 indicates a non-empty plot. The only constraint is that flowers can not be planted in adjance plots/indexes. Yes
2) What is the min/max size of the array? 1 <= flowerbed.length <= 2 * 104
3) What is the min/max size of n? 0 <= n <= flowerbed.length
e.g. canPlaceFlowers([1,0,0,0,1], 1) => true
e.g. canPlaceFlowers([1,0,0,0,1], 2) => false
*/

// O(k) tine complexity - where k is the length of flowerbed. At worst, we need to iterate through the entire flowerbed array to see if we can plant all new flowers
// O(1) space complexity - no additional space is used since we are mutating original input array
const canPlaceFlowers = function (flowerbed, n) {
  // check if n is 0 and if so return true
  if (n === 0) return true;
  // check if n is greater than flowerbed.length and if so return false
  if (n > flowerbed.length) return false;
  // iterate through flowerbed
  for (let i = 0; i < flowerbed.length; i++) {
    // check if the value of current index is 0 and if the value of index-1 and index+1 are either 0 or undefined
    if (
      flowerbed[i] === 0 &&
      (!flowerbed[i - 1] || flowerbed[i - 1] === 0) &&
      (!flowerbed[i + 1] || flowerbed[i + 1] === 0)
    ) {
      // if so decrement n
      n--;
      // reassign vale at current index to 1
      flowerbed[i] = 1;
    }
    // short circuit and return true if n is 0 and we planted all flowers
    if (n === 0) return true;
  }
  // retun false if we exit loop
  return false;
};
