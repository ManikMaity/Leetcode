//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
    for(;i<t;i++)
    {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.evenlyDivides(N);
        console.log(res);
    }
}
// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript
    /**
     * @param {number} N
     * @returns {boolean}
    */

    class Solution {
        //Function to check whether the number evenly divides N.
        evenlyDivides(N)
        {
            let count = 0;
            let num = N;
            // checking while N not 0
            while (N !== 0){
            // Getting the last char of num
               let char = N%10;
               if (num%char == 0) count++;
               N = Math.floor(N/10);
            }
            
            return count;
        }
    }