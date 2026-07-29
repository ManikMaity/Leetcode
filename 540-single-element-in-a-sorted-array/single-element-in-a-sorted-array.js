/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const midV = nums[mid];
        const midVLeft = nums[mid - 1];
        const midVRight = nums[mid + 1];

        
        if (midV !== midVLeft && midV !== midVRight) {
            return midV;
        }
        else if (midV === midVLeft) {
            const count = mid - left +1;

            if ((count % 2) === 0) {
                left = mid + 1;
            }
            else {
                right =  mid - 2;
            }
        }
        else {
            const count = (mid + 1) - left + 1;


              if ((count % 2) === 0) {
                left = mid + 2;
            }
            else {
                right =  mid - 1;
            }
        }
    }

    return nums[0];
};