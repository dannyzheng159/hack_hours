/*
is prime
Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

You can assume that the input number is a positive integer.

test_00:
isPrime(2); // -> true
test_01:
isPrime(3); // -> true
test_02:
isPrime(4); // -> false
test_03:
isPrime(5); // -> true
test_04:
isPrime(6); // -> false
test_05:
isPrime(7); // -> true
test_06:
isPrime(8); // -> false
test_07:
isPrime(25); // -> false
test_08:
isPrime(31); // -> true
test_09:
isPrime(2017); // -> true
test_10:
isPrime(2048); // -> false
test_11:
isPrime(1); // -> false
test_12:
isPrime(713); // -> false
*/

// O(n) time complexity - looping through from i = 2 to i = n - 1 which is near O(n)
// O(1) space complexity - constant space complexity as we are using variables and no complex data structure
// const isPrime = (n) => {
//   //account for the numbers we are not checking in the iteration below. if the input arg n is less than 2, return false
//   if (n < 2) return false;
//   // check that the input integer is divisible by any number other than 1 and itself
//   for (let i = 2; i < n; i++) {
//     // if so, short circuit and return false
//     if (n % i === 0) return false;
//   }
//   return true;
// };

// O(sqrt(n)) time complexity - looping through from i = 2 to i = sqrt(n) which saves time
// O(1) space complexity - constant space complexity as we are using variables and no complex data structure
const isPrime = (n) => {
  // declare a variable sqrt and initialize it to the square root of the input arg n
  let sqrt = Math.sqrt(n);
  //account for the numbers we are not checking in the iteration below. if the input arg n is less than 2, return false
  if (n < 2) return false;
  // check that the input integer is divisible by any number other than 1 and its square root
  for (let i = 2; i <= sqrt; i++) {
    // if so, short circuit and return false
    if (n % i === 0) return false;
  }
  return true;
};

console.log(isPrime(0)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // -> true
console.log(isPrime(4)); // -> false
console.log(isPrime(5)); // -> true
console.log(isPrime(6)); // -> false
console.log(isPrime(7)); // -> true
console.log(isPrime(8)); // -> false
console.log(isPrime(25)); // -> false
console.log(isPrime(31)); // -> true
console.log(isPrime(2017)); // -> true
console.log(isPrime(2048)); // -> false
console.log(isPrime(1)); // -> false
console.log(isPrime(713)); // -> false
