/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Clarifications and Example:
1) The input will consist of two strings and it is not certain which of the two strings is longer correct? Will the strings only contain alphanumeric chars? The input will be two strings, that consist of lowercase English letters and are not guaranteed to be the same length.
2) The output will be one merged string? Yes
3) What is the min/max length of the two strings? 1 <= word1.length, word2.length <= 100
4) Can we mutate the original input strings? Yes
e.g. mergeAlternately('abc', 'pqr') => 'apbqcr' 
e.g. mergeAlternately('ab', 'pqrs') => 'apbqrs'
*/

// O(n) time complexity - n is the length of the smaller string of word1 and word2. When we reach the end of the smaller string, we append the rest of the longer string to the merged string
// O(n + m) space complexity - length of the merged string is the length of word1 and word2 combined. In JS strings are immutable and when we concat/append to a string, a new string is created
const mergeAlternately = function (word1, word2) {
  // declare mergedString and initialize to empty string
  let mergedString = '';
  // iterate through the longer string
  for (let i = 0; i < word1.length || i < word2.length; i++) {
    // check if the current char for word1 is undefined and if so append the rest of word2 to mergedString and return it
    if (!word1[i] && word2[i]) return (mergedString += word2.slice(i));
    // else check if the current char for word2 is undefined and if so apend the rest of word1 to mergedString and return it
    else if (!word2[i] && word1[i]) return (mergedString += word1.slice(i));
    // merge the current char for word1 and word2 to mergedString
    mergedString += word1[i];
    mergedString += word2[i];
  }
  return mergedString;
};
