# Leetcode
## Learned things
- Learned Extraction of number from tuf (Take you forward). - Ex - Defficulty: Easy/Count Digit (gfg)
- Learned number reverse from tuf. Ex - Reverse Integer (leetcode)
- Learned how to get all devisors using sqrt method. Ex - Difficulty: Basic - Number of devisors

### Notes
#### Basic maths - 26/08/2024
- In num extraction algorithem the time coplexity is O(log10(n)) because in loop we everytime devide it with 10.
- If devide with 2 everytime the TC -> O(log2(n)).
- To reverse a num we can use (reverseNumber * 10) + last Digit (here initial reverse number is 0);
- To print all the devisors of a number we can loop from 1 to <= sqrt(N) of the number and print i if N%i ==0 and print N/i which is the other devisor, but if i and N/i are same then print one.