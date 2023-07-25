/*
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

Clarifications and Example:
1) The input will be candies, which is an array of numbers and extracandies, which is a number.  Yes.
2) What is the min/max size of candies? 2 <= n <= 100
3) What is the min/max size of candies[i]? 1 <= candies[i] <= 100
4) What is the min/max size of extraCandies? 1 <= extraCandies <= 50
5) The output will be an array of boolean values. Yes
e.g. kidWithCandies([2, 3, 5, 1, 3], 3) => [true, true, true, flase, true]
e.g. kidWithCandies([4, 2, 1, 1, 2], 1) => [true, false, false, false, false]
*/

/* 
O(n) time complexity - O(n) + O(n) where n is the number of kids with candies
O(n) time to find maxCandies
O(n) time to check if adding extraCandies to candies[i] is greater than or equal to maxCandies
*/
/*
O(n) space complexity - O(1) + O(n) where n is the number of kids with candies
O(1) space for maxCandies
O(n) space for storing boolean values in hasGreatestCandies
*/
const kidsWithCandies = function(candies, extraCandies) {
    // declare maxCandies and initialize to max candy a kid has in candies array
    const maxCandies = Math.max(...candies);
    // declare hasGreatestCandies and initialize as empty array
    const hasGreatestCandies = [];
    // iterate through candies
    for (let i = 0; i < candies.length; i++) {
        // check if candies[i] + extraCandies is greater than or equal to maxCandies and if so, push true into hasGreatestCandies
        if (candies[i] + extraCandies >= maxCandies) hasGreatestCandies.push(true);
        // else push false
        else hasGreatestCandies.push(false);
    }
    // return hasGreatestCandies
    return hasGreatestCandies;
};