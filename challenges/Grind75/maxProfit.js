/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4

*/

/* 
Clarification and Example:
input: array of integers <= 0
output: integer >= 0
e.g. [7, 2, 5, 10, 2] => enter market on day 2 or index 1 where price is 2
                      => exit market on day 4 or index 3 where price is 10
                      => max profit = 10 - 2 = 8
*/

// Brute Force Approach
// O(n^2) time complexity - n is the length of the array. Nested for-loop : For every n buy price, we need to iterate through n sell prices
// O(1) space complexity - constant memory allocated for variables
// const maxProfit = (prices) => {
//   // declare maxProfit and initialize it to the smallest integer to track the max profit
//   let maxProfit = Number.MIN_SAFE_INTEGER;
//   // iterate through prices to track buy price
//   for (let i = 0; i < prices.length - 1; i++) {
//     // iterate through prices to track sell prices
//     for (let j = 0; j < prices.length; j++) {
//       // find diff between sell and buy prices and reassign maxProfit if there is a greater profit margin
//       maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
//     }
//   }
//   // return maxProfit or zero
//   return maxProfit > 0 ? maxProfit : 0;
// };

// console.log(maxProfit([7, 2, 5, 10, 2]));

// Two-Pointer Sliding Window
// Note: there will be a window / subarray of buy and sell prices. We will consider that window/length of prices for the subarray as long as the sell price is greater than
// the buy price because that will yield a profit. The last element in the subarray needs to be greater than the first element in the subarray.
// O(n) time complexity - n is the length of the array. While loop that iterates through prices once using a sliding window / subarray for buy and sell prices
// O(1) space complexity - constant memory allocated for variables
const maxProfit = (prices) => {
  // declare maxProfit and initialize it to smallest number to track the max profit
  let maxProfit = Number.MIN_SAFE_INTEGER;
  // declare buyDate pointer and initialize it to 0 to track the buy in date
  let buyDate = 0;
  // declare sellDate pointer and initialize it to 1 to track the sell date
  let sellDate = 1;
  // iterate through prices for as long as sellDate is less than prices.length
  while (sellDate < prices.length) {
    // check if the sell price at the current sellDate is greater than the buy price at the current buyDate and if so,
    if (prices[sellDate] > prices[buyDate]) {
      // find the diff between the sell price and buy price and reassign maxProfit if there is a greater profit margin
      maxProfit = Math.max(maxProfit, prices[sellDate] - prices[buyDate]);
    }
    // else advance the buyDate to the current sellDate
    else buyDate = sellDate;
    // advance the sellDate by 1
    sellDate++;
  }
  // return maxProfit or zero
  return maxProfit > 0 ? maxProfit : 0;
};

console.log(maxProfit([7, 2, 5, 10, 2]));