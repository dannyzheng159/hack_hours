/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

// This approach essentially checks to see if there are an even or odd amount of chars. 
// For a palindrome, a string must have even duplicates and at most 1 outlier that will be the char in the middle
// O(n) time complexity - for loop that iterates through str of length n. Instantiating, lookup, insert and delete for Set object is O(1)
// O(n) space complexity - Set object which at worst has a linear space complexity proportional to str of length n where each char is unique
const permPalin = (str) => {
  // check if the input is a string and if not, return false
  if (typeof str !== 'string') return false;
  // declare charSet and instantiate a new Set object
  const charSet = new Set();
  // iterate through each char in str
  for (const char of str) {
    // check if charSet has char as an entry and if so, delete it
    if (charSet.has(char)) charSet.delete(char);
    // else, add char as an entry
    else charSet.add(char);
  }
  // return true if charSet as 1 or less entries
  return charSet.size <= 1;
};

console.log(permPalin('abab')); // -> true
console.log(permPalin('cbaba')); // -> true
console.log(permPalin('cbac')); // -> false
console.log(permPalin('a')); // -> true
console.log(permPalin('rarcecae')); // -> true
