/*
Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters 'r', 'p', and 's'.

For example:

rps(0) -> ['']
rps(1) -> ['r', 'p', 's']
rps(2) -> ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']
rps(3) -> [
  'rrr', 'rrp', 'rrs', 'rpr', 'rpp', 'rps', 'rsr', 'rsp', 'rss',
  'prr', 'prp', 'prs', 'ppr', 'ppp', 'pps', 'psr', 'psp', 'pss',
  'srr', 'srp', 'srs', 'spr', 'spp', 'sps', 'ssr', 'ssp', 'sss'
]

The strings must be returned in the order suggested above.

*/

// O(n * 3^n) Time complexity: For each round n, where the array of strings need to be of length n, there are three possible plays / concatentations (r, p, s)
// O(n * 3^n) Space complexity: The size of the outcomes array grows exponentially with the value of n because of the three possible plays (r, p, s). 
// The total number of possible outcomes is 3^n. The space complexity of generateOutcomes is O(n) as each recursive call concatenates either of the three plays 
// to the end of the string. Since the string has a max length of n, the space complexity of generateOutcomes is O(n).
// Helper Function Approach:
const rps = (n) => {
  // declare outcomes, an array in the outer scope to store all the possible outcomes
  const outcomes = [];
  // declare generateOutcomes, a helper function used to generate all possible outcomes of length n for each round
  const generateOutcomes = (results) => {
    // base case: check if the length of results is equal to the length of n
    if (results.length === n) {
      // if so, push it into outcomes
      outcomes.push(results);
      // exit the recursive call
      return;
    }
    // recursive cases: invoke generateOutcomes passing in results concatenated with either 'r', 'p' or 's'
    generateOutcomes(results + 'r');
    generateOutcomes(results + 'p');
    generateOutcomes(results + 's');
  };
  // invoke generateOutcomes with an empty string for n = 0
  generateOutcomes('');
  // return outcomes
  return outcomes;
};

console.log(rps(0));
console.log(rps(1));
console.log(rps(2));
