# Leetcode
## Learned things
### Basic Maths Section
- Learned Extraction of number from tuf (Take you forward). - Ex - Defficulty: Easy/Count Digit (gfg)
- Learned number reverse from tuf. Ex - Reverse Integer (leetcode)
- Learned how to get all devisors using sqrt method. Ex - Difficulty: Basic - Number of devisors.
### Basic Recursion
- Basic of recursions
- Backtracking


### Notes
#### Basic maths - 26/08/2024
- In num extraction algorithem the time coplexity is O(log10(n)) because in loop we everytime devide it with 10.
- If devide with 2 everytime the TC -> O(log2(n)).
- To reverse a num we can use (reverseNumber * 10) + last Digit (here initial reverse number is 0);
- To print all the devisors of a number we can loop from 1 to <= sqrt(N) of the number and print i if N%i ==0 and print N/i which is the other devisor, but if i and N/i are same then print one.

#### Basic Recursion - 28/08/2024
- When a function calls itself
- until a specified condition met
- we we dont specify any condition to stop the recurtion then the function will continue to wait in the memory (stake) becuse last line of the function isnt gottten it will excede the memory capacity it called `stake overflow`.
- the  condition to stop is called `base condition`
- We can change the peramiter of the recursive each time we call it. 
```js
// Time complexity - O(n)
// Space complexity - O(n)
function recursiveFn (n){
    if (n == 0) return;
    console.log(n);
    recursiveFn(n - 1);
}
recursiveFn(5);
```
- In `backtracking` we do task after the recursive fn call so the last recursive fn task done first and firt one in last.
```js
  printTillN(n){
        let allNum = [];
          function addToAllNum (i){
            if (i <= 0) return;
            addToAllNum(i - 1);
            allNum.push(i);
        }
        
        addToAllNum(n);
        
        console.log(...allNum)
    }
// here the allNum.push is after the recursive fn call
```

- `recursion` using two pointers and reverse an array
- in this we have to get the first index and the last index of the array and revese it recursivly.
```js
const test = [5, 5, 4, 6, 4];
let i = 0;
let j = test.length - 1;
function reverse(i, j) {
    if (i > j) {
        return;
    }
    [test[i], test[j]] = [test[j], test[i]];
    reverse(i + 1, j - 1);
}
reverse(i, j);
console.log(test); // [ 4, 6, 4, 5, 5 ]
```

- reverse an arary using one variable - (length - 1 - firstindex)
```js
let i  = 0;
let n = test.length;
function swapValue (i){
    if (i >= Math.ceil(n/2) ) return;
    [test[i], test[n - i - 1]] = [test[n - 1 - i], test[i]];
    i++;
    swapValue(i, n - i - 1);
}

swapValue(i, n - i - 1);
```
- Easy single word palindrome checker - [Link](./NPP/easyPalidrome.js)
