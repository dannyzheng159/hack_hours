/*
Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters in 'chars'. Assume that there will be
no duplicates in 'chars'.

This is equivalent to returning all possible passwords of length n given a
character set 'chars'.

For example:

passwords('ab', 1) -> ['a', 'b']
passwords('abxy', 2) -> [
  'aa', 'ab', 'ax', 'ay',
  'ba', 'bb', 'bx', 'by',
  'xa', 'xb', 'xx', 'xy',
  'ya', 'yb', 'yx', 'yy'
]

The strings must be returned in order reflecting the order of letters in 'chars'

*/

// O(n* k^n) time complexity - k is the number of possible characters and n is the length of the password.
// The time complexity is due to the fact that there are k^n possible outcomes of length n, and for each of these outcomes, the function needs
// to concatenate the result with each of the k possible characters, which takes O(n) time.
// O(n* k^n) space complexity -  k is the number of possible characters and n is the length of the password.
// The space complexity is due to the fact that the function needs to store all possible outcomes in the outcomes array.
// Helper function approach:
const passwords = (chars, n) => {
  // declare outcomes, an array used to store all possible outcomes of passwords
  const outcomes = [];
  // declare generateOutcomes, a helper function used to generate all possible passwords of length n
  const generateOutcomes = (results) => {
    // base case: check if the length of results is equal to n
    if (results.length === n) {
      // if so, push results into outcomes
      outcomes.push(results);
      // exit the recursive call
      return;
    }
    // recursive case: iterate through chars and invoke recursive call passing in results concatenated with each char
    for (let i = 0; i < chars.length; i++) {
      generateOutcomes(results + chars[i]);
    }
  };
  // invoke generateOutcomes with an empty string for n = 0
  generateOutcomes('');
  // return outcomes
  return outcomes;
};

console.log(passwords('ab', 1)); // -> ['a', 'b']
console.log(passwords('abxy', 2)); // ->
// [
//   'aa', 'ab', 'ax', 'ay',
//   'ba', 'bb', 'bx', 'by',
//   'xa', 'xb', 'xx', 'xy',
//   'ya', 'yb', 'yx', 'yy'
// ]
console.log(passwords('abxy', 3));
// -> [
//   'aaa',
//   'aab',
//   'aax',
//   'aay',
//   'aba',
//   'abb',
//   'abx',
//   'aby',
//   'axa',
//   'axb',
//   'axx',
//   'axy',
//   'aya',
//   'ayb',
//   'ayx',
//   'ayy',
//   'baa',
//   'bab',
//   'bax',
//   'bay',
//   'bba',
//   'bbb',
//   'bbx',
//   'bby',
//   'bxa',
//   'bxb',
//   'bxx',
//   'bxy',
//   'bya',
//   'byb',
//   'byx',
//   'byy',
//   'xaa',
//   'xab',
//   'xax',
//   'xay',
//   'xba',
//   'xbb',
//   'xbx',
//   'xby',
//   'xxa',
//   'xxb',
//   'xxx',
//   'xxy',
//   'xya',
//   'xyb',
//   'xyx',
//   'xyy',
//   'yaa',
//   'yab',
//   'yax',
//   'yay',
//   'yba',
//   'ybb',
//   'ybx',
//   'yby',
//   'yxa',
//   'yxb',
//   'yxx',
//   'yxy',
//   'yya',
//   'yyb',
//   'yyx',
//   'yyy',
// ];
