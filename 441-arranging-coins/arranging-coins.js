/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
   let left = 1;
   let right = n;
   let ans = 1;

   while(left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midbox = Math.floor((mid * (mid + 1)) / 2);
    if (midbox > n){
      right = mid - 1;  
    }
    else {
        ans = mid;
        left = mid + 1;
    }
   }


   return ans;
};