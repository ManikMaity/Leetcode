//{ Driver Code Starts
// Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.getSecondLargest(arr);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
         let largest = Math.max(arr[0], arr[1]);
  let second = Math.min(arr[0], arr[1]);
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > largest && arr[i] > second){
      second = largest;
      largest = arr[i]
    }
    else if (arr[i] < largest && arr[i] > second){
      second = arr[i];
    }
  }
  if (second == largest){
    return -1;
  }
  return second;
    }
}