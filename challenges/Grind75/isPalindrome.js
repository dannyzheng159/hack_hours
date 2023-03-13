/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 10^5
s consists only of printable ASCII characters.
*/

/*
Clarification and Example:
input : string 
    -> Can the input string contain non-alphanumeric characters? Yes
    -> Can the input string contain uppercase letters? Yes
    -> What should we expect the length of the input string to be? 1 <= s.length <= 2 * 10^5
    -> Are we allowed to mutate the input string? Yes
    -> Are we allowed to look online for the regex pattern or assume correctness? Yes
output : boolean
e.g. : "racecar" => true
       "race car" => true
*/

/**
 * @param {string} s
 * @return {boolean}
 */

// Replace regex with two-pointers approach:
// O(n) time complexity - n is the length of the input string.
// We use the replace() and toLowerCase() methods which both iterate through s and search for the regex pattern and uppercase letters to replace which takes O(n) time
// The while loop iterates through s which will takes O(n/2) at worst which simplifies to O(n)
// O(1)*** space complexity  - the original input string s is mutated so additional space is not required to store a new string from replace() method or toLowerCase() method
// The other variables take constant memory
// OR O(n) space complexity - it may be better practice to declare a new string which will take O(n) additional space where n is the length of the string
// Optional O(n) time/space Approach: We could have also just iterated through string s backwards and concatenated to a new reversed string after which we can compare with input s
// const isPalindrome = function(s) {
//     // declare a regex to remove all non-alphanumeric characters
//     const regex = /[\W_]+/g;
//     // remove all non-alphanumeric characters from s
//     s = s.replace(regex, "");
//     // convert input string to lowercase letters
//     s = s.toLowerCase();
//     // declare a start pointer and intialize it to 0
//     let start = 0;
//     // declare an end pointer and initialize it to s.length - 1
//     let end = s.length - 1;
//     // iterate through s for as long as start < end
//     while (start < end) {
//         // if the char at index start does not match the char at index end, return false
//         // increment start and decrement end
//         if (s[start++] !== s[end--]) return false;
//     }
//     // return true
//     return true;
// };

// console.log(isPalindrome('race a car'));
// console.log(isPalindrome('race a ecar'));

/*
Clarification and Example:
input : string 
    -> Can the input string contain non-alphanumeric characters? Yes
    -> Can the input string contain uppercase letters? Yes
    -> What should we expect the length of the input string to be? 1 <= s.length <= 2 * 10^5
    -> Are we allowed to mutate the input string? No
    -> Are we allowed to look online for the regex pattern or assume correctness? No
output : boolean
e.g. : "racecar" => true
       "race car" => true
*/

/**
 * @param {string} s
 * @return {boolean}
 */

// Hashmap with two-pointers approach:
// Since we are not allowed to user regex or mutate the original input string, we use a hashmap to store the alphanumeric characters
// O(n) time complexity - n is the length of the input string.
// We use the toLowerCase() method which iterates through string s and replaces the uppercase letters which takes O(n)
// The while loop iterates through string s which actually takes O(n/2) at worst which simplifies to O(n)
// O(n) space complexity - the alphanumerics map is O(1) as it takes constant space for a pre-determined size of chars
// As we are not allowed to mutate the input string s, we declare a new string sLowerCase to store the new string of size n where n is the length of the string
// The other variables take constant memory
const isPalindrome = function (s) {
  // declare alphanumerics, a map to store all alphanumeric characters
  const alphanumerics = {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true,
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  };
  // convert input string s to lowercase letters
  const sLowerCase = s.toLowerCase();
  // declare a start pointer initialized to 0
  let start = 0;
  // declare an end pointer initialized to s.length - 1
  let end = s.length - 1;
  // iterate through sLowerCase for as long as start < end
  while (start < end) {
    // increment start as long as the char at index start is not a valid char in alphanumerics and start is less than end
    while (!alphanumerics[sLowerCase[start]] && start < end) start++;
    // decrement end as long as the char at index end is not a valid char in alphanumerics and start is less than end
    while (!alphanumerics[sLowerCase[end]] && start < end) end--;
    // check if the char at index start does not equal the char at index end and if so, return false
    // increment start and decrement end
    if (sLowerCase[start++] !== sLowerCase[end--]) return false;
  }
  // return true
  return true;
};

console.log(isPalindrome('race a car'));
console.log(isPalindrome('race a ecar'));
