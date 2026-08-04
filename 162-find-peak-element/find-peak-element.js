/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let peak = nums.length - 1;

    while(left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const midVal = nums[mid];
        const midLeftVal = nums[mid - 1];
        const midRightVal  = nums[mid + 1];

        if (midVal > midLeftVal && midVal > midRightVal) {
            return mid;
        }

        else if (midVal < midRightVal) {
            left = mid + 1;
            if (nums[peak] < midRightVal) {
                peak = mid + 1;
            }
        }
        else {
            right = mid - 1;
            if (nums[peak] < midVal) {
                peak = mid;
            }
        }
    }

    return peak;
};