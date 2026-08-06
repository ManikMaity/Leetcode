/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let rigth = nums.length - 1;

    while(left < rigth) {
        const mid = left + Math.floor((rigth - left) / 2);

        if (nums[mid] > nums[rigth]) {
            left = mid + 1;
        }
        else {
            rigth = mid
        }
    }

    return nums[left];
};