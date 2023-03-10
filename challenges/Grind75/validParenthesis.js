/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.

*/

/**
 * @param {string} s
 * @return {boolean}
 */

// O(n) time complexity - n is the length of the string. We need to iterate through s and push or pop from the stack which takes constant time.   
// O(n) space complexity - n is the length of the string. 
// At worst, we have O(1) for the map and O(n) for the stack if we continue to push parens in and do not pop anything due to invalid parens
const isValid = function (s) {
  // Optimization:
  // check if s is not evenly lengthed and if so return false
  if (!s.length % 2) return false;
  // check if the first char is a closing parens or if the last char is an opening parens and if so, return false
  if (s[0] === ')' || s[0] === '}' || s[0] === ']') return false;
  if (s[s.length - 1] === '(' || s[s.length - 1] === '{' || s[s.length - 1] === '[') return false;

  // declare map of valid parens
  const parens = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  // declare stack
  const stack = [];
  // iterate through s
  for (let i = 0; i < s.length; i++) {
    // check if the char at current iteration is an opening parens / exists in parens and if so, push a closing parens / the corresponding value into stack
    if (parens[s[i]]) stack.push(parens[s[i]]);
    // else check if the char at current iteration is a matching closing parens type and is being closed in the correct order meaning s[i] matches the last
    // closing parens in stack and if so, pop it from stack
    else if (s[i] === stack[stack.length - 1]) stack.pop();
    // else return false
    else return false;
  }
  // return true if stack is empty else return false
  return stack.length === 0;
};

console.log(isValid('()')); // -> true
console.log(isValid('()[]{}')); // -> true
console.log(isValid('(]')); // -> false
console.log(isValid('([}}])')); // -> false
