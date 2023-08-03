/*

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Clarifications and Example:
1) What is the min/max size of s? 1 <= s.length <= 10^4
2) Will s consist of alphanumeric characters? s contains English letters (upper-case and lower-case), digits, and spaces ' '
3) Will s always consist of a word? There is at least one word in s.
4) Are we allowed to reassign the string? No
e.g.
reverseWords('the sky is blue') => 'blue is sky the'
reverseWords('  hello world  ') => 'world hello'
reverseWords('a good   example') => 'example good a'
*/

/* 
O(n+k) time complexity - O(m) + O(n) + O(n) + O(k) + O(k)
O(m) time to remove all leading and trailing whitespaces where m is the number of spaces before and after a word - can be considered constant if relatively small
O(n) time to replace multiple spaces between words with a single space. At worst, we need to iterate through the entire original string if trimming was not needed
O(n) time to split the cleaned string into array of words. At worst, we need to iterate through the entire original string if both trimming and replacing multiple spaces were not needed
O(k) time to reverse the array of words, where k is number of words in string
O(k) time to join the words in the reversed array into a string, where k is number of words in string
*/
/* 
O(n+k) space complexity - O(n) + O(n) + O(k) + O(k) + O(n) 
O(n) space to remove all leading and trailing whitespaces - at worst, there are none and it takes same space as input string
O(n) space to replace multiple spaces between words with a single space - at worst, there are none and it takes same space as input string
O(k) space to split the cleaned string into array of words - k is number of words in string and so the length of array will always be smaller than input string
O(k) space to reverse array of words 
O(n) space to join the words in the reversed array into a string - at worse of there were no leading/trailing whitespaces and multiple spaces, it will take same space as input string
*/
const reverseWords = function (s) {
  // remove all leading and trailing whitespaces
  str = s.trim();
  // replace multiple spaces between words with single space
  cleanStr = str.replace(/\s+/g, ' ');
  // split the string into an array
  const words = cleanStr.split(' ');
  // reverse the array
  const reversedWords = words.reverse();
  // join the array into a string and return
  return reversedWords.join(' ');
};
