/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let max_positive = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max_positive) {
            max_positive = nums[i];
        }
    }

   if (max_positive <= 1) {
        return max_positive + 1;
    }

   const hash_set = new Set();

   for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (val > 0) {
            hash_set.add(val);
        }
   }


   for (let i = 1; i < max_positive; i++) {
    const has_val = hash_set.has(i);
    if (!has_val) {
        return i;
    }
   }

   return max_positive + 1;
};