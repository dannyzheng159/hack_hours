/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
1 <= ransomNote.length, magazine.length <= 10^5
ransomNote and magazine consist of lowercase English letters.
*/

/*
Clarifications and Example:
1) How long are the input strings? 1 <= ransomNote.length, magazine.length <= 10^5
2) Will there be unused letters from magazine? Yes, that is possible
3) Will the characters only consist of letters from the alphabet? ransomNote and magazine consist of lowercase English letters.
4) Are the letters case sensitive? The strings will only consist of lowercase English letters.
e.g.:
1)
magazine : 'aab' 
ransomNote: 'aa'
output : true
2)
magazine : 'hi'
ransomNote: 'hhi'
output : false
*/

// O(n+m) time complexity: n is the length of magazine and m is the length of ransomNote. At worst, every letter in magazine is used in ransomNote and ransomNote contains additional letters not in magazine.
// O(n) space complexity: n is the length of magazine as we need to create a hashmap that stores the letters as keys. At worst, every letter in magazine is unique and the hashmap has a unique key for each letter.
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  // create a hashmap with the useable letters from magazine
  const letters = {};
  // iterate through magazine
  for (const char of magazine) {
    // if the current char already exists in the map, increment the value by 1
    if (letters[char]) letters[char] += 1;
    // else assign the letter to value of 1
    else letters[char] = 1;
  }

  // iterate through ransomNote
  for (const char of ransomNote) {
    // if the current char does does not exist in the map or is falsy, short circuit and return false
    if (!letters[char]) return false;
    // else decrement a count from the letter in the map
    else letters[char] -= 1;
  }
  // return true
  return true;
};

console.log(canConstruct('hi', 'hi')); // -> true
console.log(canConstruct('hii', 'hi')); // -> false
console.log(canConstruct('hisd', 'hi')); // -> false
