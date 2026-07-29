/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 0) return 0;
    let left = 1;
    let right = x;
    let ans = 1;
    while(left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const val = mid * mid;
        if (val === x) {
            return mid;
        }
        else if (val > x) {
            right = mid - 1;
        }
        else {
            ans = mid;
            left = mid + 1;
        }
    }

    return ans;
};