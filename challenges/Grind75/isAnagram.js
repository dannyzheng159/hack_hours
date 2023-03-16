/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.
*/

/*
Clarifications and Example:
1) Will the two input strings only contain alphanumeric chars? The input strings consist of lowercase English letters.
2) What is the min/max length of the strings? 1 <= s.length, t.length <= 5 * 10^4
3) Can we mutate original input strings? Yes
e.g. isAnagram('t', 't') => true
     isAnagram('anagram', 'nagaram') => true
     isAnagram('hi', 'bye') => false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Sorting approach:
// O(n log n) time complexity - n is the length of the longer input string.
// Splitting the string into an array and joining the elements to form the string both take O(n) time. Sorting it will take O(n log n).
// This will result in O(2n) + O(2(n log n)) + O(2n) which simplifies to O(n log n).
// O(n) space complexity - n is the length of the longer input string.
// We are mutating the original input strings which will not add space but splitting the strings will create arrays of length n.
// const isAnagram = function (s, t) {
//   // use the split method to convert the strings into arrays so we can sort them and join them back into strings
//   // when sorting alphabets, we do not need to use a custom function.
//   s = s.split('').sort().join();
//   t = t.split('').sort().join();
//   // compare if the two strings are equal
//   return s === t;
// };

// Hashmap approach:
// O(n) time complexity - n is the length of the longer input string.
// We iterate through both input strings once to create the map and to check the chars against the created map.
// Then we iterate through the map to check the values of each char. An O(3n) operation which simplifies to O(n).
// O(n) space complexity - n is the length of input string s which is the size of the map
const isAnagram = function (s, t) {
  // create a map that contains all chars of input s as keys and the number of appearances as the value
  const letters = {};
  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]]) letters[s[i]]++;
    else letters[s[i]] = 1;
  }
  // iterate through t
  for (let j = 0; j < t.length; j++) {
    // if t contains a char not in the map, return false
    if (!letters[t[j]]) return false;
    // else decrement by 1 for the corresponding char in t that appears in the map
    else letters[t[j]]--;
  }
  // iterate through map and check if any value is not 0 and if so, return false
  for (const char in letters) {
    if (letters[char] !== 0) return false;
  }
  // return true
  return true;
};

console.log(isAnagram('t', 't')); // => true
console.log(isAnagram('anagram', 'nagaram')); // => true
console.log(isAnagram('hi', 'bye')); // => false
