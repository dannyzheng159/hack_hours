/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

*/

/*
 Clarifications and Example:
 1) Do str1 and str2 consist of alphanumeric characters? They will consist of English uppercase letters.
 2) What is the epected min/max length of the two strings? 1 <= str1.length, str2.length <= 1000.
 3) Are the lengths of the two strings always going to have a common divisor? Yes.
 4) Is str2 always shorter than str1? Yes.
 5) A substring only counts as a 'greatest common divisor' if it is fully divisble by both str1 and str2, meaning str1 and str2 can not contain any substring other than the 'greatest common divisor' correct? Yes.
 e.g. 
 1) gcdOfStrings('ABCABC', 'ABC) => 'ABC'
 2) gcdOfStrings('ABABAB', 'ABAB) => 'AB'
 3) gcdOfStrings('LEET', 'CODE) => ''
 4) gcdOfStrings('ABCDEF', 'ABC) => ''
 5) gcdOfStrings('AAAAAAAAA', 'AAACCC) => ''
 */


/* 
O(n+m) time complexity - O(min(n,m)) + O(n/gcd)*O(gcd) + O(m/gcd)*O(gcd) where n is the length of str1 and m is the length of str2
- O(min(n,m)) to find gcd of two strings
- O(gcd) to find the longest substring
- O(n/gcd)*O(gcd) to recursively validate that substring is a gcd of str1
- O(m/gcd)*O(gcd) to recursively validate that substring is a gcd of str2
- gcd at worst will evaluate to O(min(n,m)) 
- O(min(n,m)) + O(min(n,m)) + O(n/min(n,m))*O(min(n,m)) + O(m/min(n,m))*O(min(n,m)) => O(n+m)
*/
/* 
O(n+m) space complexity - O(1) + O(gcd) + O(n/gcd) + O(m/gcd) where n is the length of str1 and m is the length of str2
- O(1) space for gcd
- O(gcd) space for slicing string for the greatest subStr
- O(n/gcd)*O(gcd) space for each stack frame created for each recursive call when validating str1
- O(m/gcd)*O(gcd) space for each stack frame created for each recursive call when validating str2
- gcd at worst will evaluate to O(min(n,m)) 
- O(1) + O(min(n,m)) + O(n/min(n,m))*O(min(n,m)) + O(m/min(n,m))*O(min(n,m)) => O(min(n,m)) + O(n) + O(m) = O(n+m)
*/
const gcdOfStrings = function(str1, str2) {
    // declare helper function findGCD to find gcd between str1 and str2
    const findGCD = (num1, num2) => {
        let gcd = 1;
        for (i = 1; i <= Math.min(num1, num2); i++) {
            if (num1 % i === 0 && num2 % i === 0) gcd = i;
        }
        return gcd;
    }

    // find the gcd of the two strings
    const gcd = findGCD(str1.length, str2.length);
    // find the greatest common divisor/substring of two strings
    const subStr = str2.slice(0, gcd);

    // declare helper function isGCDOfString to recursively check if the string contains any substring other than the greatest common divisor/substring
    const isGCDOfString = (str, start = 0, end = gcd) => {
        if (str.slice(start, end) !== subStr) return false;
        if (end === str.length) return true;
        return isGCDOfString(str, start + gcd, end + gcd);
    }

    // if the greatest common divisor/substring is a gcd of both strings, return the greatest common divisor/substring 
    if (isGCDOfString(str1) && isGCDOfString(str2)) return subStr;
    // else return an empty string
    else return ''
};