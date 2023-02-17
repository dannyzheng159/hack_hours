/*
Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

/*
Criteria: 
Well-formed parentheses:
1) it must start with an opening parens
2) a closing parens can only come after a opening parens
3) it must end with a closing parens 
4) the total num of opening and closing parens must be equal
i.e. n = 3, there are 3 opening parens and 3 closing parens

High-level Approach:
1) use an array in the outer scope to store all well-formed parentheses
2) use a helper function to generate all possible valid parentheses 
*/

// Recursive / Backtrack approach:
// O(4^n/sqrt(n)) time complexity - for every n pairs of parenthesis (combination size), there are 2 possible choices from the input set '(' and ')'. However, not all
// combinations are valid parenthesis. We need to filter this out and so every valid parenthesis is the nth Catalan number which is approximately 4^n/sqrt(n)
// O(4^n/sqrt(n)) space complexity - the size of the array required to store all possible combinations follows the Catalan formula
const generateParentheses = (n) => {
  // declare outcomes, an array used to store all possible combinations
  const outcomes = [];
  // declare generateOutcomes, a helper function used to generate all possible combinations of well-formed parentheses
  // input: results -> a string representing the valid parentheses
  //        open -> a number tracking the num of open parens
  //        close -> a number tracking the num of closed parens
  const generateOutcomes = (results, open, close) => {
    // base case 1: check if both open and close are equal to n and if so, push the valid parentheses into outcomes
    if (open === n && close === n) {
      outcomes.push(results);
      // output: undefined - return to exit recursive call
      return;
    }
    // recursive case 1: check if open is less than n and if so, invoke generateOutcomes passing in results + '(', open + 1, close
    if (open < n) generateOutcomes(results + '(', open + 1, close);
    // recursive case 2: check if close is less than open and if so, invoke generateOutcomes passing in results + ')', open, close + 1
    if (close < open) generateOutcomes(results + ')', open, close + 1);
  };
  // invoke generateOutcomes passing in an empty string for n = 0 and 0's for open and close
  generateOutcomes('', 0, 0);
  // return outcomes
  return outcomes;
};

console.log(generateParentheses(0)); // -> ['']
console.log(generateParentheses(1)); // -> ['()']
console.log(generateParentheses(2)); // -> ['(())', '()()']
