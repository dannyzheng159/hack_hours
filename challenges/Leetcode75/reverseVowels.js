/*

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Clarifications and Example:
 1) What is the min/max size of s? 1 <= s.length <= 3 * 10^5
 2) Does s only contain alphanumeric characters? s consist of printable ASCII characters.
 3) Will s contain uppercase and lowercase vowels? The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 e.g. reverseVowels('hello') => 'holle'
 e.g. reverseVowels('leetcode') => 'leotcede'
*/

/*
O(n) time complexity -  O(n) + O(n) + O(n) where n is the length of string s
O(n) time to split the string s into array listOfChars
O(n) time at worst to check all chars in listOfChars against vowels map
O(n) time to join array listOfChars into string
*/
/*
O(n) space complexity - O(1) + O(n) + O(n)
O(1) space for vowels map
O(n) space for array listOfChars
O(n) space for string returned
*/
const reverseVowels = function (s) {
  // declare a map of vowels
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };
  // split s into an array
  const listOfChars = s.split('');
  // declare a start pointer intialized at 0
  let start = 0;
  // declare an end pointer inialized at s.length-1
  let end = s.length - 1;
  // iterate for as long as start is less than end
  while (start < end) {
    // check if char at start and char at end are vowels
    if (vowels[listOfChars[start]] && vowels[listOfChars[end]]) {
      // if so, switch them, increment start and decrement end
      const temp = listOfChars[start];
      listOfChars[start] = listOfChars[end];
      listOfChars[end] = temp;
      start++;
      end--;
    }
    // else check if the char at start and char at end are both not vowels, increment start and decrement end
    else if (!vowels[listOfChars[start]] && !vowels[listOfChars[end]]) {
      start++;
      end--;
    }
    // else check if char at start is a vowel and char at end is not, decrement end
    else if (vowels[listOfChars[start]] && !vowels[listOfChars[end]]) {
      end--;
    }
    // else increment start
    else start++;
  }
  // join array back into a string and return it
  return listOfChars.join('');
};
