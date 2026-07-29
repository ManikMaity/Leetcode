/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 1;
    let right = num;
    
    while(left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const val = mid * mid;

        if (val === num) {
            return true;
        }
        else if (val > num) {
            right = mid - 1;
        }
        else {
            left = mid + 1
        }
    }

    return false;
}
