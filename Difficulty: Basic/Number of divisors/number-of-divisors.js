//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let N = parseInt(readLine());
    let obj = new Solution();
    let res = obj.count_divisors(N);
    console.log(res);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
 */
class Solution {
  count_divisors(N) {
    
    let count = 0; // 1 is devisor of every num
    
    // using sqrt 
    for (let i = 1; i*i <= N; i++){
        if (N%i == 0){
            if (i%3 == 0) count++;
            if (N/i != i){
                if ((N/i)%3 == 0) count++
            }
        }
    }
    
    return count;
    
    
  }
}
