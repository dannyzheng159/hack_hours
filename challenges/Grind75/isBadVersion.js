/*
Clarifications and Example:
What is the size of n? 1 <= bad <= n <= 2^31 - 1
Will there always be at least one bad version? Yes
What is the definition of isBadVersion()? Is it a helper function that returns boolean based on if a input version is good or bad? Yes, see definition below.
e.g. n = 5, first bad = 4
isBadVersion(3) = false
isBadVersion(4) = true
output = 4
*/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

// Brute Force Loop:
// O(n) time complexity - n is the number of versions that need to be checked. At most, it will take n checks to find the first bad version
// O(1) space complexity - constant memory allocated for variables
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// const solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
//         // iterate through all the versions
//         for (let i = 1; i <= n; i++) {
//             // invoke isBadVersion on each version and return the first bad version
//             if (isBadVersion(i)) return i;
//         }
//     };
// };

// Binary Search with Two Pointers Approach:
// O(log n) time complexity - n is the number of versions that need to be checked. For each iteration, we are effectively halfing the search size for the versions that we need to check
// O(1) space complexity - constant memory allocated with pointer variables
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // declare start and initialize to 1 to include the first version in the boundary of our search space
    let start = 1;
    // declare end and initialize it to n to include the last version in the boundary of our search space
    let end = n;
    // declare mid
    let mid;
    // iterate through the search space as long as start is less than or equal to end
    // since we know there must be at least one bad version, we know we are bound to visit it within the while loop so we can just return from the loop
    while (start <= end) {
      // reassign mid to the current middle version between start and end
      mid = Math.floor((end + start) / 2);
      // check if the current version at mid is not bad and if so, reassign start to the version after mid
      // since we know the current version at mid is good, then we can move our lower bound pointer to mid + 1 and decrease our search space towards the right
      if (!isBadVersion(mid)) start = mid + 1;
      // else if the version before the current mid is not bad, return the current version at mid
      // if the first conditional is not met and the version prior to the current mid is not bad, it must mean the current version at mid is the first bad version
      else if (!isBadVersion(mid - 1)) return mid;
      // else reassign end to the version before mid
      // if the current version at mid is bad but the version before it is also bad, it must mean that the current version at mid is not the first bad version so we need to reassign end to the version prior to it and decrease our search space towards the left
      else end = mid - 1;
    }
  };
};
